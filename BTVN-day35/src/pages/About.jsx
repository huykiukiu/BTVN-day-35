import React from "react";

export default function About() {
  return (
    <div className="my-5">
      <h1 className="text-3xl font-bold mb-3">About</h1>
      <p className="text-md mb-3">Huy Huy Here!</p>
      <button className="bg-gray-500 text-white px-2 py-3 rounded-md hover:bg-red-500 hover:text-white cursor-pointer mb-3">
        Update User
      </button>
      <p className="mb-3">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium
        explicabo porro vitae facere sint exercitationem eaque nostrum
        perferendis recusandae quidem, voluptates culpa voluptate neque deleniti
        obcaecati. Numquam ut expedita quisquam!
      </p>
    </div>
  );
}
