import express from "express";
const router = express.Router();

import {createBlog, getBlog, updateBlog, deleteBlog} from '../../controller/blog-Controller.js';


router.post('/blogs',createBlog );
router.get('/blogs', getBlog);
router.put('/blogs', updateBlog);
router.delete('/blogs', deleteBlog);

export default router;