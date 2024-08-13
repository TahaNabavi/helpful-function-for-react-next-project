import getParameter from "./getParameter";
/**
 *
 * @param {*} updates data = { key: string; value: string }[]
 * @returns
 */
export function setQueries(updates) {
  const befQuery = getParameter(null) || {};

  updates.forEach((update) => {
    befQuery[update.key] = update.value;
  });

  const queryString = new URLSearchParams(befQuery).toString();
  return queryString;
}

/**
 *
 * @param {*} keys data = string[]
 * @returns
 */
export function removeQueries(keys) {
  const befQuery = getParameter(null) || {};

  keys.forEach((key) => {
    delete befQuery[key];
  });

  const queryString = new URLSearchParams(befQuery).toString();
  return queryString;
}
