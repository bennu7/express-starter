import dotenv from "dotenv";
dotenv.config({ path: "../../.env" });

export const {
  //
  NODE_ENV,

  // database
  DB_USER,
  DB_PASSWORD,
  DB_NAME,
  DB_HOST,
  DB_PORT,

  // google oauth
  GOOGLE_CLIENT_ID,
  GOOGLE_CLIENT_SECRET,
  GOOGLE_CALLBACK_URL,
} = process.env;
