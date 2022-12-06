import express from "express";
import logger from "morgan";
import cors from "cors";

import shoppingListRouter from "./routes/shoppingList.js";

const app = express();
//check 2
app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/items", shoppingListRouter);

const PORT = 4000;
app.listen(PORT, function (){
    console.log(`Server is running on port ${PORT}`);
});

export default app;
