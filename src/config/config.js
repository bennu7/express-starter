require("dotenv").config();
const { DB_USER, DB_PASSWORD, DB_NAME, DB_HOST, DB_PORT } = process.env;

module.exports = {
  development: {
    username: DB_USER,
    password: DB_PASSWORD,
    database: DB_NAME,
    host: DB_HOST,
    port: DB_PORT,
    dialect: "postgres",
    define: {
      paranoid: true,
      timestamps: true,
      underscored: true,
      createdAt: "created_at",
      updatedAt: "updated_at",
      deletedAt: "deleted_at",
      defaultScope: {
        attributes: {
          exclude: [
            "created_at",
            "updated_at",
            "deleted_at",
            "created_by",
            "updated_by",
          ],
        },
      },
    },
    logging: true,
    dialectOptions: {
      useUTC: false,
      dateStrings: true,
      typeCast: true,
    },
    timezone: "+07:00",
    pool: {
      max: 10,
      min: 0,
    },
  },
  test: {
    username: DB_USER,
    password: DB_PASSWORD,
    database: DB_NAME,
    host: DB_HOST,
    port: DB_PORT,
    dialect: "postgres",
  },
  production: {
    username: DB_USER,
    password: DB_PASSWORD,
    database: DB_NAME,
    host: DB_HOST,
    port: DB_PORT,
    dialect: "postgres",
    define: {
      paranoid: true,
      timestamps: true,
      underscored: true,
      createdAt: "created_at",
      updatedAt: "updated_at",
      deletedAt: "deleted_at",
      defaultScope: {
        attributes: {
          exclude: [
            "created_at",
            "updated_at",
            "deleted_at",
            "created_by",
            "updated_by",
          ],
        },
      },
    },
    logging: true,
    dialectOptions: {
      useUTC: false,
      dateStrings: true,
      typeCast: true,
    },
    timezone: "+07:00",
    pool: {
      max: 10,
      min: 0,
    },
  },
};
