import Express from "express";
import { routes as user } from "./routes/user";
const app = Express();

app.use(Express.json());

app.use("/api/v1", user);

app.get("/", () => {
  console.log("into the home");
});
app.listen(3002, () => {
  console.log("Listen at port 3002");
});

