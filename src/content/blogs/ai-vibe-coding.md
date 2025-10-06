# AI and Vibe Coding

I’ve been heavily using AI in my projects for the last three months. From ChatGPT’s web app to agent modes in Cursor. I’ve developed some strong opinions about where AI should and *shouldn’t* be used.

---

## Where AI **Shouldn’t** Be Used

If you’re building software that will have more than one user, you shouldn’t vibe code.  

Two months ago, my brother asked me to create a simple mobile app. It was basically a todo app but with custom logic, reminders, and categorization. It had just 3 screens:

1. Todos listed in categories with checkboxes (reset every 24 hours).  
2. Clicking a category shows all todos in that category (todos can be updated/deleted here).  
3. A screen to add more categories.  

Pretty simple, right?  

I tried completely vibe coding this app without writing a single line myself. I used Cursor. It *kinda* worked, but the app was super buggy. It didn’t even “logically reason” that todos needed to be saved. There were many such silly bugs. which I don't remember.  

You could say I was lazy with prompting. I literally typed things like:  
> “Please save stuff man!!”  

…and expected AI to just figure it out.  

When I finally looked at the codebase, it was an **absolute shitshow**.  

![img1](./ai-vibe-coding/img1.png)
*(634 fucking lines in `index.tsx`)*  

![img2](./ai-vibe-coding/img2.png)
*(8 `useState` declarations in one place)*  

Please bring me tissue paper, I’m crying 😭. For such a simple app, this was the amount of chaos I had to see.

---

## Where AI **Can/Should** Be Used

### Use Case 1: Debugging

Let’s say you hit a bug in an unknown territory, or you’re just too lazy to debug it. This is where AI shines.  

Ask Cursor:  
> “Hey, I’m facing this bug. These are the steps to reproduce it.”  

It’ll scan your codebase and tell you the reason. But then — **stop there**. Don’t let Cursor solve the bug. AI solutions often don’t remove the root cause.  

Use your own brain (yes, the same brain you use to prompt) to fix the issue properly.

---

### Use Case 2: UI Generation

This works great for small to medium projects. AI is *very good* at building UI.  

With just a single prompt, it can generate a usable interface. My sweet spot:  
- I describe the UI (layout, elements, state interactions).  
- AI writes the JSX and CSS.  
- I handle the actual JS logic (API calls, state management etc).  

![img3](./ai-vibe-coding/img3.png)

The screenshot above is from my site [khushalsindhav.com](https://khushalsindhav.com), **completely made by AI**. It took ~12 prompts in total. I was literally playing Counter-Strike 2 while AI coded for me.  

Bonus: I got responsive pages done in ~3 prompts each. 🤯  

---

### Use Case 3: Tab Completion (Very Important!)

Always use Cursor’s tab complete. I realized I can’t live without it.  

My Cursor subscription ended 2 days ago. I thought, “let’s try coding without it — after all, ₹1700 ($20) is expensive.”  

Day 1: I was building my portfolio site in React. React is bread and butter for me. I didn’t *struggle*, but I noticed my productivity drop to about **0.8x**. Honestly, I expected it to drop to 0.5x. The smaller drop was because most of the time I was writing CSS, where tab completion doesn’t help much.  

Day 2: I was working on a React Native project. I’m not as familiar with React Native. My productivity dropped **3–4x**. Even in React, I’m sure it would’ve been at least 2x slower.  

Why? Because every time I created a new file like `Component.tsx`, I had to manually write things like:  

```tsx
import React from "react";
import { Text, View } from "react-native";

export default function Component() {
  return <View><Text>Hello</Text></View>;
}

## How will I use AI now?

1. Cursor Tab Complete -> Must have
2. Agent mode to do some easy changes. I will carefully review this changes.
3. Agent mode to scaffold UI.
4. Vibe Coding for Projects I can't justify giving time but still want to do.