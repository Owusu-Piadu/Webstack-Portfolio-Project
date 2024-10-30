import { addSong, listSong } from "../controllers/songController.js";
import express from 'express'
import upload from "../middleware/multer.js";

const songRouter = express.Router();

songRouter.post('/add',upload.fields([{name:'image',maxcount:1},{name:'audio',maxcount:1}]),addSong);
songRouter.get('/list',listSong);

export default songRouter;

