// @/components/ReadingProgress.tsx
"use client";

import { useEffect, useState } from "react";

export const ReadingProgress = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const scrolled = window.scrollY;
      const height = document.documentElement.scrollHeight - window.innerHeight;
      const percentage = height > 0 ? (scrolled / height) * 100 : 0;
      setProgress(percentage);
    };

    window.addEventListener("scroll", updateProgress);
    updateProgress();

    return () => window.removeEventListener("scroll", updateProgress);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-1 bg-gray-100/80 backdrop-blur-sm z-50 pointer-events-none">
      <div
        className="h-full bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-300 ease-out"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
};
