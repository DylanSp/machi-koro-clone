// module dependencies
import * as express from "express";
import * as logger from "morgan";
import * as path from "path";

// controllers
import * as homeController from "./controllers/home";

// Create Express server
const app = express();

// Express configuration
app.set("port", process.env.PORT || 3000);
app.set("views", path.join(__dirname, "../views"));
app.set("view engine", "pug");
app.use(logger("dev"));

// App routes
app.get("/", homeController.index);

// Start Express server
app.listen(app.get("port"), () => {
    console.log(("App is running at http://localhost:%d in %s mode"), app.get("port"), app.get("env"));
    console.log("Press CTRL-C to stop\n");
});

module.exports = app;