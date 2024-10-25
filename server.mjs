//Imports
import express from "express"

//Setup
const app = express();
let PORT = process.env.PORT || 3001;


//DB Connection



//Middleware



//Routes
app.use('/api/movies', moviesRoutes);


//Listener
app.listen(PORT, ()=> {
    console.log(`Server is running on PORT: ${PORT}`);
});

