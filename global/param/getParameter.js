export default function getParameter(name) {
    const url = window.location.href;
    const queryParams = url.split("?")[1];
  
    if (name === null) {
      const params = {};
      if (queryParams) {
        const pairs = queryParams.split("&");
        pairs.forEach((pair) => {
          const [key, value] = pair.split("=");
          params[decodeURIComponent(key)] = decodeURIComponent(value);
        });
      }
      return params;
    }
  
    const paramRegex = new RegExp(`[?&]${name}=([^&]*)`);
    const match = url.match(paramRegex);
    return match ? decodeURIComponent(match[1]) : null;
  }
  