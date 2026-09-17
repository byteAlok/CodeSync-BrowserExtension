(() => {
  "use strict";

  console.log("CodeSync content script loaded.");

  const getPlatform = () => {
    const hostname = window.location.hostname;

    if (hostname.includes("leetcode.com")) {
      return "LeetCode";
    }

    if (hostname.includes("hackerrank.com")) {
      return "HackerRank";
    }

    if (hostname.includes("geeksforgeeks.org")) {
      return "GeeksforGeeks";
    }

    return "Unknown";
  };

  const platform = getPlatform();

  console.log(`CodeSync detected platform: ${platform}`);

  // Future:
  // - Detect solved problem
  // - Extract problem title
  // - Extract difficulty
  // - Extract language
  // - Extract submitted code
  // - Send data to background service worker
})();


    // "icons": {
    //     "16": "icons/icon16.png",
    //     "32": "icons/icon32.png",
    //     "48": "icons/icon48.png",
    //     "128": "icons/icon128.png"
    // }