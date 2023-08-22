import express from "express";
const router = express.Router();

import blogRoutes from './v1/index.js';

router.use('/v1', blogRoutes);

export default router;