import "colors";
import "dotenv/config";
import express from "express";
import mongoose from "mongoose";
import userRoutes from "./Routers/userRoutes.js";

const app = express();

const PORT = process.env.PORT||8080;
const CLIENT_URL = process.env.CLIENT_URL;
const MONGODB_URI="mongodb+srv://aaa01095836766:1k8J8ZDcorJCGCOY@cluster0.qcr9l.mongodb.net/QLife?retryWrites=true&w=majority&appName=Cluster0"||process.env.MONGODB_URI


// Uncomment if CORS is needed
import cors from "cors";
app.use(
  cors({
    origin: '*',
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    preflightContinue: false,
    optionsSuccessStatus: 204,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Connect to MongoDB and start the server
mongoose
  .connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    app.listen(PORT, () => {
      console.log(`SERVER==> `.bgRed, `http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.log("MongoDB connection error: ", err);
  });



  app.get("/", (req, res) => {
    res.send("Hello, Vercel!");
  });
  
// Routes
app.use("/api/users", userRoutes);