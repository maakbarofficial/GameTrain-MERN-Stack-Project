import mongoose from "mongoose";

export const connectDB = () => {
  mongoose
    .connect(process.env.MONGODB_URI, {
      dbName: "MERNTodo",
    })
    .then((res) => console.log(`Database Connected ${res.connection.host}`))
    .catch((error) => console.log(error));
};
