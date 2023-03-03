require("@babel/register");
const express = require("express");

const app = express();
const PORT = 3000;
const path = require("path");
const morgan = require("morgan");
const React = require("react");

const ssr = require("./middleware/ssr");

const testDbConnection = require("./db/testDbConnection");

const topicRouter = require("./routes/topic");
const questionRouter = require("./routes/question");

app.use(express.json());
app.use(ssr);
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use(express.static(path.join(__dirname, "public")));
app.use("/topic", topicRouter);
app.use("/topic/question", questionRouter);

app
  .listen(PORT, () => {
    // eslint-disable-next-line no-console
    console.log(`PORT: ${PORT}`);
    testDbConnection();
  })
  .on("error", (error) => {
    /* eslint-disable no-console */
    console.log("Ошибка веб-сервера");
    console.log(error.message);
    /* eslint-enable no-console */
  });
