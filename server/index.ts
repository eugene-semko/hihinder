const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const authService = require("./services/auth/index");
import { DB } from "./db/index";

const app = express();
const expressSwagger = require("express-swagger-generator")(app);
let options = {
  swaggerDefinition: {
    info: {
      description: "This is a sample server",
      title: "Swagger",
      version: "1.0.0",
    },
    host: "localhost:3000",
    basePath: "/v1",
    produces: ["application/json", "application/xml"],
    schemes: ["http", "https"],
    securityDefinitions: {
      JWT: {
        type: "apiKey",
        in: "header",
        name: "Authorization",
        description: "",
      },
    },
  },
  basedir: __dirname, //app absolute path
  files: ["./services/**/*.ts"], //Path to the API handle folder
};
expressSwagger(options);
/* Configurations */
const PORT = 8000;

/* mw */
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
/* cors */
app.use(cors());
app.options("*", cors());

/* start */
app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${PORT}`);
});

// define routes services
app.get("/", async (req, res) => {
  const dbResponse = await DB.query("SELECT * from USERS");
  res.json(dbResponse.rows);
});
app.use("/user", authService);
