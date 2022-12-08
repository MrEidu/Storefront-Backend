import express from "express";

const app = express();
const port = 3000;

//This is the main Endpoint
app.get("/api", (req: express.Request, res: express.Response) => {
  res.send("Hello World");
});

//check for port
app.listen(port, () =>
  console.log(`Server started at http://localhost:${port}/api`)
);

export default app;
