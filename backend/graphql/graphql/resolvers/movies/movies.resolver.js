const mongoose = require('mongoose');
const Movie = mongoose.model('Movie');

const resolvers = {
    Query: {
      movie: (root, {slug}) => {
        return Movie.findOne({slug: slug}).exec();
      },
      movies: (root, {limit, offset}) => {
        return Movie.find().skip(offset).limit(limit).exec();
      }
    },
    moviesCount: () => {
      return Movie.count().exec();
    },
    Mutation: {
        createMovie: (root, {input}) => {
            const movie = new Movie(input);
    
            // no .exec();
            movie.save();
            return movie;
        }
    },
    Movie: {
        movies: (parent) => {
            return Movie.findOne({_id: parent.slug}).exec();
        }
    }
};

export default resolvers;