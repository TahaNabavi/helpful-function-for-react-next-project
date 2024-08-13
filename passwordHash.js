const bcrypt = require("bcrypt");

export const hash = async (password) =>
  await bcrypt.hash(password, 10).then((hash) => hash);

export const verifyHash = async (password, hash) =>
  await bcrypt.compare(password, hash);
