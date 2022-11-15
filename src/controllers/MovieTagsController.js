const knex = require("../database/knex");
const MovieNotesController = require("./MovieNotesController");

class movieTagsController {
  async index(request, response) {
    const { user_id } = request.params;

    const movieTags = await knex("movie_tags").where({ user_id });

    return response.json(movieTags);
  }
}
module.exports = movieTagsController;
