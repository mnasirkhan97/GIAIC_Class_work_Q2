import React from "react";

function Page() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-4xl">
        <h1 className="text-2xl font-bold mb-4 text-blue-600 text-center">
          Welcome to the Student Page
        </h1>
        <p className="text-gray-700 mb-6 text-center">
          Here you can find all the details about your courses, assignments, and
          progress.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg shadow-sm">
            <h2 className="font-semibold text-lg text-blue-600">My Courses</h2>
            <p className="text-gray-600">
              View and manage all your enrolled courses.
            </p>
            <button className="mt-4 py-2 px-4 bg-blue-600 text-white rounded hover:bg-blue-700">
              View Courses
            </button>
          </div>
          <div className="p-4 bg-green-50 border border-green-200 rounded-lg shadow-sm">
            <h2 className="font-semibold text-lg text-green-600">
              Assignments
            </h2>
            <p className="text-gray-600">
              Track your upcoming and completed assignments.
            </p>
            <button className="mt-4 py-2 px-4 bg-green-600 text-white rounded hover:bg-green-700">
              View Assignments
            </button>
          </div>
          <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg shadow-sm">
            <h2 className="font-semibold text-lg text-yellow-600">Progress</h2>
            <p className="text-gray-600">
              Check your progress and achievements.
            </p>
            <button className="mt-4 py-2 px-4 bg-yellow-600 text-white rounded hover:bg-yellow-700">
              View Progress
            </button>
          </div>
          <div className="p-4 bg-red-50 border border-red-200 rounded-lg shadow-sm">
            <h2 className="font-semibold text-lg text-red-600">
              Notifications
            </h2>
            <p className="text-gray-600">
              Stay updated with the latest notifications.
            </p>
            <button className="mt-4 py-2 px-4 bg-red-600 text-white rounded hover:bg-red-700">
              View Notifications
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;

// import React from "react";

// function page() {
//   return <div>Student page</div>;
// }

// export default page;
