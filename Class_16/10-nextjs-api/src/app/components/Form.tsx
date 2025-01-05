"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

function Form() {
  const router = useRouter();
  const [name, setName] = useState("");

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const res = await fetch("/api/hello", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name }),
    });
    router.refresh(); // Refresh the page after the form is submitted
    await res.json();
  };

  return (
    <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-md mb-8">
      <h2 className="text-3xl text-white text-center mb-4">Shopping List</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Add item..."
          type="text"
          className="w-full p-3 rounded-md bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
        <button
          type="submit"
          className="w-full p-3 bg-indigo-600 text-white rounded-md shadow-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-200"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default Form;

// "use client";

// import React, { useState } from "react";
// import { useRouter } from "next/navigation";

// function Form() {
//   const router = useRouter();
//   const [name, setName] = useState("");

//   const handleSubmit = async (e: any) => {
//     e.preventDefault();
//     const res = await fetch("/api/hello", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({ name }),
//     });
//     setName("");
//     router.refresh(); // Refresh the page after the form is submitted
//     await res.json();
//   };

//   return (
//     <div className="flex justify-center items-center min-h-screen bg-gray-900">
//       <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-md space-y-6">
//         <h2 className="text-3xl text-white text-center">Shopping List</h2>
//         <form onSubmit={handleSubmit} className="space-y-4">
//           <input
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//             placeholder="Add item..."
//             type="text"
//             className="w-full p-3 rounded-md bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
//           />
//           <button
//             type="submit"
//             className="w-full p-3 bg-indigo-600 text-white rounded-md shadow-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-200"
//           >
//             Submit
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default Form;

// "use client";

// import React, { useState } from "react";
// import { useRouter } from "next/navigation";

// function Form() {
//   const router = useRouter();
//   const [name, setName] = useState("");
//   const handleSubmit = async (e: any) => {
//     e.preventDefault();
//     const res = await fetch("/api/hello", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({ name }),
//     });
//     router.refresh();
//     await res.json();
//   };
//   console.log("name => :", name);
//   // console.log("setName => :", setName);
//   return (
//     <div className="flex justify-center items-center min-h-screen bg-gray-900">
//       <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-md">
//         <h2 className="text-2xl text-white mb-4 text-center">Shopping List</h2>
//         <form onSubmit={handleSubmit}>
//           <input
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//             placeholder="Add item..."
//             type="text"
//             className="w-full p-3 rounded-md bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
//           />
//           <button
//             type="submit"
//             className="mt-4 w-full p-3 bg-indigo-600 text-white rounded-md shadow-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-200"
//           >
//             Submit
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default Form;
