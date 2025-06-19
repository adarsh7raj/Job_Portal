import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./utils/db.js";

import userRoute from "./routes/user.route.js";
import companyRoute from "./routes/company.route.js";
import jobRoute from "./routes/job.route.js";
import applicationRoute from "./routes/application.route.js";

dotenv.config();

const app = express();
const allowedOrigins= ['https://job-portal-mu-rose.vercel.app', 'http://localhost:5173'];
// ✅ CORS setup
const corsOptions = {
  origin: (origin, callback) => {
            if (allowedOrigins.includes(origin) || !origin) {
                callback(null, true);
            } else {
                callback(new Error('Not allowed by CORS'));
            }
        },
  credentials: true, // ✅ required to allow cookies
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'], // ✅ allow standard methods
  allowedHeaders: ['Content-Type', 'Authorization'], // ✅ allow custom headers
};
app.use(cors(corsOptions));
// You can remove this unless you're handling preflight manually:
app.options("*", cors(corsOptions));

// ✅ Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// ✅ API routes
app.use("/api/v1/user", userRoute);
app.use("/api/v1/company", companyRoute);
app.use("/api/v1/job", jobRoute);
app.use("/api/v1/application", applicationRoute);

// ✅ Start server
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  connectDB();
  console.log(`Server running at port ${PORT}`);
});
