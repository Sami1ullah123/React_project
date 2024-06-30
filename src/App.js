// import React, { useEffect } from "react";
// import { useLocation } from "react-router-dom";

// function App() {
//   const location = useLocation();

//   useEffect(() => {
//     const isMobile = () => {
//       const userAgent = navigator.userAgent || navigator.vendor || window.opera;
//       return (
//         /android/i.test(userAgent) ||
//         (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream)
//       );
//     };

//     const getQueryParam = (param) => {
//       const urlParams = new URLSearchParams(location.search);
//       return urlParams.get(param);
//     };

//     const openApp = () => {
//       const screen = getQueryParam("screen");
//       const scheme = `myapp://app/${screen}`; // Your app's URL scheme with screen path
//       const fallbackUrl = isMobile()
//         ? navigator.userAgent.match(/Android/i)
//           ? "https://play.google.com/store/apps/details?id=com.yourapp"
//           : "https://apps.apple.com/us/app/your-app/id1234567890"
//         : "https://www.yourappwebsite.com";

//       window.location = scheme;

//       setTimeout(() => {
//         window.location = fallbackUrl;
//       }, 1000);
//     };

//     openApp();
//   }, [location]);

//   return (
//     <div>
//       <h1>Redirecting...</h1>
//     </div>
//   );
// }

// export default App;

import React, { useState } from "react";
import "./tailwind.css";

function App() {
  const [projectName, setProjectName] = useState("");
  const [projectComFile, setProjectComFile] = useState("");
  const [platform, setPlatform] = useState("android");
  const [playStoreLink, setPlayStoreLink] = useState("");
  const [appStoreLink, setAppStoreLink] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({
      projectName,
      projectComFile,
      platform,
      playStoreLink,
      appStoreLink,
    });
  };

  return (
    <div className="bg-white min-h-screen p-8">
      <header className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-navy-500">Jump Into</h1>
        <h2 className="text-2xl font-bold italic">Home</h2>
      </header>
      <main>
        <h3 className="text-xl font-semibold underline text-purple-800 mt-8 mb-4">
          Add Your Project
        </h3>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block">
              Project Name:
              <input
                type="text"
                value={projectName}
                onChange={(e) => setProjectName(e.target.value)}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                required
              />
            </label>
          </div>
          <div>
            <label className="block">
              Project Com File:
              <input
                type="text"
                value={projectComFile}
                onChange={(e) => setProjectComFile(e.target.value)}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                required
              />
            </label>
          </div>
          <div>
            <label className="block">
              Platform:
              <select
                value={platform}
                onChange={(e) => setPlatform(e.target.value)}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                required
              >
                <option value="android">Android</option>
                <option value="ios">iOS</option>
              </select>
            </label>
          </div>
          {platform !== "ios" && (
            <div>
              <label className="block">
                Play Store Link:
                <input
                  type="text"
                  value={playStoreLink}
                  onChange={(e) => setPlayStoreLink(e.target.value)}
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                  required={platform === "android"}
                  disabled={platform === "ios"}
                />
              </label>
            </div>
          )}

          {platform !== "android" && (
            <div>
              <label className="block">
                App Store Link:
                <input
                  type="text"
                  value={appStoreLink}
                  onChange={(e) => setAppStoreLink(e.target.value)}
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                  required={platform === "ios"}
                  disabled={platform === "android"}
                />
              </label>
            </div>
          )}

          <div>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white font-bold rounded-md hover:bg-blue-600"
            >
              Submit
            </button>
          </div>
        </form>
      </main>
    </div>
  );
}

export default App;
