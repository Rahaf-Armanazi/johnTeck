// browserCheck.js
export function getBrowserInfo() {
  const userAgent = navigator.userAgent;
  let match;

  if ((match = userAgent.match(/Chrome\/(\d+)/))) {
    return { name: "Chrome", version: parseInt(match[1], 10) };
  } else if ((match = userAgent.match(/Firefox\/(\d+)/))) {
    return { name: "Firefox", version: parseInt(match[1], 10) };
  } else if ((match = userAgent.match(/Safari\/(\d+)/)) && userAgent.includes("Version")) {
    return { name: "Safari", version: parseInt(userAgent.match(/Version\/(\d+)/)[1], 10) };
  } else if ((match = userAgent.match(/Edg\/(\d+)/))) {
    return { name: "Edge", version: parseInt(match[1], 10) };
  } else if ((match = userAgent.match(/Opera\/(\d+)|OPR\/(\d+)/))) {
    return { name: "Opera", version: parseInt(match[1] || match[2], 10) };
  } else {
    return { name: "Unknown", version: 0 };
  }
}

export function isBrowserOutdated(browserInfo, minVersions) {
  return (
    minVersions[browserInfo.name] &&
    browserInfo.version < minVersions[browserInfo.name]
  );
}