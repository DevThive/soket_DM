require("dotenv").config();
const express = require("express");
const cors = require("cors");
const path = require("path");
const cookieParser = require("cookie-parser");
const authRouter = require("./routers/authRouter");
const postRouter = require("./routers/postRouter");
const recommendationRouter = require("./routers/recommendationRouter");
const authMiddleware = require("./middlewares/authMiddleware");
const userRouter = require("./routers/userRouter");

const app = express();

app.use(cors());

app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/auth", authRouter);
app.use("/posts", postRouter);
app.use("/recommendation", recommendationRouter);
app.use("/users", userRouter);

// app.use(express.static(path.join(__dirname, "../client/src")));

// app.get("/", (req, res) => {
//   res.sendFile(path.join(__dirname, "../client/src/index.js"));
// });

app.listen(process.env.PORT, () => {
  console.log(`App listening on PORT ${process.env.PORT}`);
});

//react-branch
