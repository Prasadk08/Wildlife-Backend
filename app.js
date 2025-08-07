import express from "express";
import cors from "cors";
import morgan from "morgan";

import wildlifeRoutes from "./routes/wildLifeRoutes.js";
import programRoutes from "./routes/programRoutes.js";
import joinTeamRoutes from "./routes/joinTeamRoutes.js";
import contactUsRoutes from "./routes/contactUsRoutes.js";
import errorHandler from "./middleware/errorHandler.js";

const app = express();

app.use(cors({
  origin: [
    "http://localhost:5173",
    "https://wildlife-xdqb.onrender.com"
  ]
}));
app.use(express.json());
app.use(morgan("dev"));


app.use("/wildlife", wildlifeRoutes);
app.use("/programs", programRoutes);
app.use("/jointeam", joinTeamRoutes);
app.use("/contactus", contactUsRoutes);


app.use(errorHandler);

export default app;