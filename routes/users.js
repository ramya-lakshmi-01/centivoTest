import express from "express";
import {getUserById} from '../controller/users.js'


const router = express.Router();
router.get('/:id', getUserById );

export default router;
