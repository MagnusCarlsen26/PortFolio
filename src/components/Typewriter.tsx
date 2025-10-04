import React, { useState, useEffect } from 'react';

interface TypewriterProps {
  command: string;
  output: string[] | React.ReactNode;
  delay: number;
  minOutputHeight?: string; // Add new prop
}

const Typewriter: React.FC<TypewriterProps> = ({ command, output, delay, minOutputHeight }) => {
  const [typedCommand, setTypedCommand] = useState("");
  const [showCommandOutput, setShowCommandOutput] = useState(false);
  // const [displayedOutputLines, setDisplayedOutputLines] = useState<string[]>([]); // Removed

  useEffect(() => {
    let i = 0;
    setTypedCommand("");
    setShowCommandOutput(false);
    // setDisplayedOutputLines([]); // Removed

    const typingInterval = setInterval(() => {
      setTypedCommand(command.substring(0, i + 1));
      i++;
      if (i === command.length) {
        clearInterval(typingInterval);
        setTimeout(() => setShowCommandOutput(true), 0);
      }
    }, 200); // Increased from 120ms to 200ms per character

    return () => clearInterval(typingInterval);
  }, [command, delay]);

  // useEffect(() => { // Removed
  //   if (showCommandOutput && Array.isArray(output)) {
  //     output.forEach((line, index) => {
  //       setTimeout(() => {
  //         setDisplayedOutputLines(prev => [...prev, line]);
  //       }, index * 20); // 20ms stagger between lines
  //     });
  //   }
  // }, [showCommandOutput, output]);

  return (
    <>
      <pre className="command" style={{ animationDelay: `${delay}ms` }}>{typedCommand}</pre>
      {Array.isArray(output) ? (
        <div className="output" style={{ animationDelay: `${delay + command.length * 200}ms`, minHeight: minOutputHeight }}>
          {output.map((line, index) => (
            <p
              key={index}
              className="output-line fade-in-animation"
              style={{
                animationDelay: `${index * 50}ms`,
              }}
            >
              {line.includes('<span') ? <span dangerouslySetInnerHTML={{ __html: line }} /> : line}
            </p>
          ))}
        </div>
      ) : (
        <div className={`output ${showCommandOutput ? 'fade-in-animation' : ''}`} style={{ animationDelay: `${delay + command.length * 200}ms`, minHeight: minOutputHeight }}>{output}</div>
      )}
    </>
  );
};

export default Typewriter;
