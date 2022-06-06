import express from 'express';
import {getPosts, createPost} from '../controllers/posts.js';
const router = express.Router();


//  /posts/ in the root
router.get('/', getPosts);
router.post('/', createPost);

export default router