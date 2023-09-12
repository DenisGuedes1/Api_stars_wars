import { z } from "zod";

const movieCreateSchema = z.object({
    title: z.string().min(3).max(50),
    type: z.string(),
    gender: z.string(),
    synopsy: z.string(),
    cast: z.string(),
    photo: z.string(),
    year_release: z.number(),
    play_button: z.string(),
});

const returnMovie = movieCreateSchema.extend({
    id: z.number(),
});
const movieUpdateSchema = movieCreateSchema
    .partial({
        play_button: true,
        photo: true,
    })
    .optional();
const returnMovies = z.array(returnMovie);

export { movieCreateSchema, returnMovie, returnMovies, movieUpdateSchema };
