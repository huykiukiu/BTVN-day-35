import React from "react";

export default function Loading() {
  return (
    <div className="fixed inset-0 bg-black/30 z-50 flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold mb-5">Loading...</h1>
      <img src="https://media.tenor.com/JRqPxgckN04AAAAM/loading-cat.gif" />
    </div>
  );
}
