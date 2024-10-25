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


    router.get('/new', (req, res) => {
        res.render('newMovie');
      });


      router
  .route('/:id')
  .patch((req, res) => {
    console.log(req.body);
    const movie = movies.find((a, i) => {
      if (a.id == req.params.id) {
        for (const key in req.body) {
          movies[i][key] = req.body[key];
        }
        return true;
      }
    });

    if (movie) res.json(movie);
    else res.send('Incorrect ID');
  })
  .delete((req, res) => {
    const movie = movies.find((a, i) => {
      if (a.id == req.params.id) {
        movies.splice(i, 1);
        return true;
      }
    });

    if (movie) res.json(movie);
    else res.send('Incorrect ID');
  })
  .get((req, res) => {
    const movie = movies.find((a, i) => {
      if (a.id == req.params.id) {
        return true;
      }
    });

    let options = {
      id: movie.id,
      name: movie.name,
      genre: movie.genre,
      year: movie.year,
    };

    if (movie) res.render('show', options);
    else res.send('Incorrect ID');
  });


export default router;