import Cookies from "js-cookie";

function CookSet(key, val, expire) {
  Cookies.set(key, val, {
    expires: expire,
    path: "/",
    secure: true,
  });
}

function CookGet(key) {
  const data = Cookies.get(key);
  return data;
}

function CookRemove(key) {
  Cookies.remove(key);
}

export { CookSet, CookGet, CookRemove };
