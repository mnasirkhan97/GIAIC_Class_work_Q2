import Image from "next/image";
import Form from "./components/Form";

export default async function Home() {
  const url = await fetch("http://localhost:3000/api/hello/", {
    cache: "no-store",
  });

  const res = await url.json();
  console.log("res => :", res);

  return (
    <div className="min-h-screen bg-gray-900 flex flex-col justify-center items-center">
      {/* <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-md mb-8">
        <h2 className="text-2xl text-white mb-4 text-center">Shopping List</h2>
      </div> */}

      <Form />
      {/* Displaying the list fetched from the API */}
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-xl text-white mb-4 text-center">Your List</h2>
        {res.length === 0 ? (
          <p className="text-center text-white">No items in the list yet.</p>
        ) : (
          <ul className="space-y-4">
            {res.map((item: { name: string }, index: number) => (
              <li key={index} className="bg-gray-700 p-4 rounded-md text-white">
                {item.name}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

// "use client";

// import React, { useEffect, useState } from "react";
// import Form from "./components/Form";

// // Define the type for the list items.
// interface Item {
//   name: string;
// }

// export default function Home() {
//   // State to store the fetched data
//   const [data, setData] = useState<Item[]>([]);
//   const [loading, setLoading] = useState<boolean>(true); // For loading state
//   const [error, setError] = useState<string | null>(null); // For error handling

//   useEffect(() => {
//     // Fetch data when the component mounts
//     const fetchData = async () => {
//       try {
//         setLoading(true); // Show the loading spinner before data is fetched
//         const response = await fetch("http://localhost:3000/api/hello", {
//           cache: "no-store",
//         });
//         if (!response.ok) {
//           throw new Error("Failed to fetch data");
//         }
//         const result = await response.json();
//         setData(result); // Store fetched data in state
//       } catch (error: any) {
//         setError(error.message); // Set error if fetching fails
//       } finally {
//         setLoading(false); // Stop loading
//       }
//     };

//     fetchData();
//   }, []); // Empty dependency array to run only once on mount

//   return (
//     <div className="min-h-screen bg-gray-900 flex flex-col items-center py-10 px-4">
//       {/* Form Component */}
//       <Form /> {/* This will already have its own styling for the form */}
//       {/* Data Fetching Section */}
//       <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-md mt-8">
//         <h2 className="text-xl text-white text-center mb-4">Your List</h2>

//         {loading ? (
//           <p className="text-center text-white">Loading...</p>
//         ) : error ? (
//           <p className="text-center text-red-500">{error}</p>
//         ) : data.length === 0 ? (
//           <p className="text-center text-white">No items in the list yet.</p>
//         ) : (
//           <ul className="space-y-4">
//             {data.map((item, index) => (
//               <li
//                 key={index}
//                 className="bg-gray-700 p-4 rounded-md text-white hover:bg-gray-600 transition duration-200"
//               >
//                 {item.name}
//               </li>
//             ))}
//           </ul>
//         )}
//       </div>
//     </div>
//   );
// }

// import Image from "next/image";
// import Form from "./components/Form";

// export default async function Home() {
//   const url = await fetch("http://localhost:3000/api/hello/", {
//     cache: "no-store",
//   });

//   const res = await url.json();
//   console.log("res => :", res);
//   return (
//     //===> from hello folder (POST)
//     <div>
//       <Form />
//       {res.map((list: { name: string }) => {
//         <h1>{res.name}</h1>;
//       })}
//     </div>
//   );
// }

// import Image from "next/image";
// import Form from "./components/Form";

// export default async function Home() {
//   //====> Hello
//   // const url = await fetch("http://localhost:3000/api/hello/");
//   const url = await fetch("http://localhost:3000/api/hello/", {
//     cache: "no-store",
//   });

//   //====> Student
//   // const url = await fetch("http://localhost:3000/api/student", {
//   //   cache: "no-store",
//   // });
//   const res = await url.json();
//   console.log("res => :", res);
//   return (
//     //===> from hello folder (GET)
//     // <div>
//     //   Route Handle
//     //   <p>Message : {res.message}</p>
//     // </div>

//     // //===> from student folder (GET)
//     // <div>
//     //   <h1 className="text-xl bg-gray-100 py-2 px-2">Student Route</h1>
//     //   <p>Name : {res.name}</p>
//     //   <p>Course : {res.course}</p>
//     // </div>

//     //===> from hello folder (POST)
//     <div>
//       <Form />
//       {res.map((list: { name: string }) => {
//         <h1>{res.name}</h1>;
//       })}
//     </div>
//   );
// }
