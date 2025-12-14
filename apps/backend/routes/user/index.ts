import { Router } from "express";
import Jwt from "jsonwebtoken";
export const routes = Router();

//TODO
//make the singin complete
//implemet the zod
//fetch stream from backback and put in the pubsub

const secret = process.env.JWT_SECRET;

routes.get("/sigin", async (req, res) => {
  console.log("inside the sign in route");
  const { email, password } = req.body;
  //const { token } = req.headers;

  // check onl y the email or password is not empty ad no database is here
  //
  if (email != "" || password != "") {
    res
      .status(401)
      .json({ message: "The email or password should no be empty" });
  }

  const token = Jwt.sign(email, secret, options);
  res.cookie("token", token, { maxAge: 10000000, httpOnly: true });

  //const tokenVerify = Jwt.verify(token, secret);
});
routes.get("/signup", async (req, res) => {
  console.log("inside the signup in route");

  const { email, password } = req.body;

  res.status(200).json({
    data: {
      email,
      password,
      token,
    },
    msg: "signup complete",
  });
});
