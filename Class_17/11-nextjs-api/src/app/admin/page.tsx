import React from "react";

function Page() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-5xl">
        <h1 className="text-3xl font-bold mb-6 text-purple-600 text-center">
          Admin Dashboard
        </h1>
        <p className="text-gray-700 mb-8 text-center">
          Manage users, monitor system activity, and configure settings.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="p-6 bg-purple-50 border border-purple-200 rounded-lg shadow-sm">
            <h2 className="font-semibold text-lg text-purple-600">
              User Management
            </h2>
            <p className="text-gray-600">
              Add, edit, or remove users from the system.
            </p>
            <button className="mt-4 py-2 px-4 bg-purple-600 text-white rounded hover:bg-purple-700">
              Manage Users
            </button>
          </div>
          <div className="p-6 bg-blue-50 border border-blue-200 rounded-lg shadow-sm">
            <h2 className="font-semibold text-lg text-blue-600">System Logs</h2>
            <p className="text-gray-600">
              View detailed logs of system activities.
            </p>
            <button className="mt-4 py-2 px-4 bg-blue-600 text-white rounded hover:bg-blue-700">
              View Logs
            </button>
          </div>
          <div className="p-6 bg-green-50 border border-green-200 rounded-lg shadow-sm">
            <h2 className="font-semibold text-lg text-green-600">Reports</h2>
            <p className="text-gray-600">
              Generate and review performance reports.
            </p>
            <button className="mt-4 py-2 px-4 bg-green-600 text-white rounded hover:bg-green-700">
              Generate Reports
            </button>
          </div>
          <div className="p-6 bg-yellow-50 border border-yellow-200 rounded-lg shadow-sm">
            <h2 className="font-semibold text-lg text-yellow-600">Settings</h2>
            <p className="text-gray-600">
              Configure and update system settings.
            </p>
            <button className="mt-4 py-2 px-4 bg-yellow-600 text-white rounded hover:bg-yellow-700">
              Configure Settings
            </button>
          </div>
          <div className="p-6 bg-red-50 border border-red-200 rounded-lg shadow-sm">
            <h2 className="font-semibold text-lg text-red-600">Alerts</h2>
            <p className="text-gray-600">
              Monitor system alerts and notifications.
            </p>
            <button className="mt-4 py-2 px-4 bg-red-600 text-white rounded hover:bg-red-700">
              View Alerts
            </button>
          </div>
          <div className="p-6 bg-indigo-50 border border-indigo-200 rounded-lg shadow-sm">
            <h2 className="font-semibold text-lg text-indigo-600">Database</h2>
            <p className="text-gray-600">
              Backup, restore, or optimize the database.
            </p>
            <button className="mt-4 py-2 px-4 bg-indigo-600 text-white rounded hover:bg-indigo-700">
              Manage Database
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
//   return <div>Admin Page</div>;
// }

// export default page;
