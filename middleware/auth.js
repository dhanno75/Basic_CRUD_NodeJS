// Custom middleware
import jwt from "jsonwebtoken";

export const auth = (req, res, next) => {
  try {
    const token = req.header("x-auth-token");
    console.log(token);

    jwt.verify(toke, process.env.SECRET_KEY);
    next();
  } catch (err) {
    res.status(401).send({ message: err.message });
  }
};
