import Cookies from "js-cookie";

function CookSet(key: string, val: string, expire: number) {
  Cookies.set(key, val, {
    expires: expire,
    path: "/",
    secure: true,
  });
}

function CookGet(key: string) {
  const data = Cookies.get(key);
  return data;
}

function CookRemove(key: string) {
  Cookies.remove(key);
}
export { CookSet, CookGet, CookRemove };
