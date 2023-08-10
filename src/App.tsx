import React from 'react';

function App() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-red-600 mb-4">
          React application with TypeScript and TailwindCSS | Coders Vibe
        </h1>
        <p className="text-gray-700 mb-8">
          This is a sample React app using TypeScript and TailwindCSS for styling.
        </p>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Click Me
        </button>
      </div>
    </div>
  );
}

export default App;
