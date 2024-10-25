//Imports
import express from "express"
import bodyParser from "body-parser";
import moviesRoutes from "./routes/moviesRoutes.mjs"
import movies from "./data/data.mjs"

//Setup
const app = express();
let PORT = process.env.PORT || 3001;


//DB Connection



//Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ extended: true }));


//Routes
app.use('/movies', moviesRoutes);


//Listener
app.listen(PORT, ()=> {
    console.log(`Server is running on PORT: ${PORT}`);
});
