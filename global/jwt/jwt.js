import jwt from "jsonwebtoken";

export const createJwt = (payload) =>
  jwt.sign(payload, process.env.SECRET_KEY, { expiresIn: "7d" });

export const verifyJwt = (token) =>
  new Promise((resolve, reject) => {
    jwt.verify(token, process.env.SECRET_KEY, (err, payload) => {
      if (err) {
        resolve(undefined);
      } else {
        resolve(payload);
      }
    });
  });
