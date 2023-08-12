import {
  DB_HOST,
  DB_NAME,
  DB_PASSWORD,
  DB_PORT,
  DB_USER,
  NODE_ENV,
} from "../utils/const";
import { Sequelize } from "sequelize";
import config from "./config";
const dbConfig = config[NODE_ENV] || config["development"];

let bool: boolean;
if (NODE_ENV === "production") {
  bool = false;
} else {
  bool = true;
}

const sequelize = new Sequelize(
  DB_NAME as string,
  DB_USER as string,
  DB_PASSWORD as string,
  {
    logging: bool,
    ...dbConfig,
  }
);

const connectDB = async (): Promise<void> => {
  try {
    await sequelize.authenticate();
    console.log("Connection DB successfully.");
  } catch (err) {
    console.log("😡😡 error connecting DB :", err);
    process.exit();
  }
};

const DB = {
  sequelize,
  connectDB,
};

export default DB;
