import express from "express";
import movies from "../data/data.mjs";
const router = express.Router();

router
    .route('/')
    .post((req, res) => {
        if (req.body.name && req.body.genre && req.body.year) {
            let newMovie = {
                id: movies.length +1,
                name: req.body.name,
                genre: req.body.genre,
                year: req.body.year,
            };

            movies.push(newMovie);

            res.render('show', newMovie);
        } else {
            res.send('Incorrect Info');
        }
    })
    .get((req, res) => {
        let options = {
            allMovies: movies,
        };
        res.render('showAll', options);
    });





 








export default router;