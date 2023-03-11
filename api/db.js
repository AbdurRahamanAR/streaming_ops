// import { userData as data } from "./userData.js";
import mysql from "mysql2/promise";
import { dbConfigs, sqlTable } from "./configs.js";

export const getAllUserFromDB = async () => {
  const query = `SELECT * FROM ${sqlTable}`;
  console.log(dbConfigs);
  try {
    const connection = await mysql.createConnection(dbConfigs);
    const [data, _] = await connection.execute(query);
    await connection.end();
    return data;
  } catch (err) {
    console.log(err);
    throw err;
  }
};

export const addUserToDB = async (userInfo) => {
  const { first_name, last_name, email, gender, bio } = userInfo;
  console.log({ first_name, last_name, email, gender, bio });
  const query = `INSERT INTO users (first_name, last_name, email, gender, bio) 
  VALUES ("${first_name}",  "${last_name}",  "${email}",  "${gender}",  "${bio}")`;
  const connection = await mysql.createConnection(dbConfigs);
  console.log("connection success");

  const resp = await connection.execute(query);
  console.log({ resp });
  await connection.end();
};
