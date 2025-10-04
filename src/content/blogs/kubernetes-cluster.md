# The Kubernetes Cluster I Shouldn't Have Built

This is the story of when I was a young, innocent programmer. Fancy buzzwords like *Kubernetes*, *Docker*, and *Firebase* sounded magical to me — so of course, I had to use them.

In the summer of 2024, I was tasked with scraping data of about 6,600 doctors from **Practo.com** (an online healthcare platform where doctors and clinics are listed). One of my professors needed this data for a survey. The initial problem statement was simple:

> Scrape doctor data from 6 cities across 6 specializations. (That's 36 queries total.)

## Initial Approach

This looked like a straightforward task. Just reverse-engineer Practo's APIs, loop through those 36 queries, save the results as JSON, and merge them later. I had done API reverse-engineering before, so this didn't feel like a challenge.

So I wrote the code.

![Code screenshot](./images/code-screenshot.png)
*(Yes, I used `let` instead of `var` for `response` — I was young.)*

I ran it. Within 2 minutes, Practo rate-limited me.

**Challenge #1: How do I bypass this rate limit?**

My "lazy" solution: rerun the code whenever it crashed. Steve Jobs once said he'd only hire lazy people because they find shortcuts. I told myself this was one of those moments.

It *kinda* worked. But scraping all 6,600 doctors took two full days. Each API call only returned 10 doctors at a time — paginated. Those two days were hell. I had to babysit my laptop to make sure the program didn't stop. My poor laptop worked nonstop for 48 hours.

I gave the data to my professor. A few weeks later, she came back:

> "Now scrape reviews for each doctor."

Alarm bells. That meant 6,600 API calls — ten times more than before. By proportion, this would take **20 days**. For 20 days, my laptop couldn't shut down, couldn't unplug, couldn't rest. That wasn't sustainable.

I asked my college CS department if I could SSH into one of their lab computers. They refused giving me one of their windows 10 computers. Luckily, my professor managed to arrange 5 lab PCs for me — but I had to physically go there to check progress. Pain.

Then I stumbled upon [this video by Harkirat Singh](https://www.youtube.com/watch?v=v06AYk-MnQ). He had a similar issue with scraping and rate limits. His solution? **Master–Worker architecture**: workers (any machine) take jobs from a master, possibly for a reward.

I thought: *Perfect! I'll get workers from AWS EKS. Master can be a Firebase serverless function. Data in Firestore.*

Here's what I built:

![Architecture diagram](./images/architecture-diagram.png)

The DB stored `doctorId` and `isReviewScraped`. Workers asked the master for tasks, and the master assigned pending ones.

**Optimization:** Instead of sending one task per request, I batched 30 tasks to reduce latency.

I separated master and worker logic, dockerized the worker, pushed it to Docker Hub, deployed the master on Firebase (with `minInstances = 1` to avoid cold starts). Then I wrote `deployment.yaml`, spun up an **EKS cluster with 16 t2 instances**, and hit "Deploy."

To my surprise, all data was scraped in ~4 hours. From 20 days → 4 hours. I felt victorious.

Next day, AWS sent me a ₹1700 (~$20) bill. My professor happily paid. I thought this was costly.

So why is this post titled the way it is?

## The Plot Twist

We had to repeat scraping every week for different cities. One day, while reading logs, I noticed something weird:

Multiple workers were scraping the **same doctorId**. Then I realized **all workers were scraping all doctorIds**.

That meant:

* A **single EC2 instance** could've done the entire job in 4 hours.
* My laptop took 2 days, but EC2 only 4 hours. Why?
* If rate limits were IP-based, why did EC2 scale so much better?

So many questions.

## The Answer

Turns out Firestore was the culprit. It suffered from **race conditions**.

Network variance between identical EC2 instances is minimal. So when multiple workers requested tasks almost simultaneously (`Δt < 250ms` by my guess), Firestore lagged in propagating updates (~1s delay). Result: the same tasks were handed out multiple times.

In short: Firestore isn't built for this type of locking.

## The (Real) Solution

* Firebase has no built-in locking.
* Serverless functions are stateless, so semaphores don't help.
* Trying to implement semaphores in Firestore just led to more race conditions.

Only real solution: **SQL databases**. They have built-in locks. No nonsense.

## But Why Was One EC2 Instance Faster Than My Laptop?

My laptop's bandwidth was shared between scraping, YouTube, browsing, maybe some gaming. All those micro-delays added up. The EC2 instance had a dedicated, stable network — hence much faster scraping.

---

### Lessons learned

I learned that before scaling up your architecture, you should first make sure there are no inefficiencies in the current setup. In my case, I could have achieved the same ~4-hour performance by simply renting a single EC2 instance — at a much lower cost and without the hassle of setting up an entire EKS cluster.