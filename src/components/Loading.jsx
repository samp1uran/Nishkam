import React from "react";

function Loading() {
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-4 p-4 w-full max-w-6xl mx-auto">
      {Array.from({ length: 12 }).map((_, i) => (
        <div
          key={i}
          className="w-full aspect-square bg-gray-300 rounded-md animate-pulse"
          style={{ animationDelay: `${i * 100}ms` }}
        ></div>
      ))}
    </div>
    </>
  );
}

export default Loading;
