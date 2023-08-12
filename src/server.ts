import express from "express";
import dotenv from "dotenv";
dotenv.config();
import Routers from "./router";
import ErrorMiddleware from "./middleware/error.middleware";
import NotFoundMiddleware from "./middleware/404.middleware";
import liveReload from "livereload";
import connectLiveReload from "connect-livereload";
import path from "path";
import morgan from "morgan";

const registerRoute = new Routers();

const app = express();
console.log("🚀 process.env.NODE_ENV:", process.env.NODE_ENV);

// Live reload view engine EJS
if (process.env.NODE_ENV === "development") {
  console.log("🚀 Live reload is running");
  const liveReloadServer = liveReload.createServer({
    // debug: true,
    extraExts: ["ejs"],
  });
  liveReloadServer.server.once("connection", () => {
    setTimeout(() => {
      liveReloadServer.refresh("/");
    }, 100);
  });
  liveReloadServer.watch(path.join(__dirname, "public"));
  liveReloadServer.watch(path.join(__dirname, "views"));

  liveReloadServer.on("error", (err) => {
    if (err.code == "EADDRINUSE") {
      console.log(
        "The port LiveReload wants to use is used by something else."
      );

      process.exit(1);
    }
  });
}

app.use(express.static("public"));
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(
  connectLiveReload({
    port: 35729,
  })
);
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(registerRoute.router);
app.use(ErrorMiddleware);
app.use(NotFoundMiddleware);

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
