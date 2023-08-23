import { Router } from "express";

import {
    getAllUsersHandler,
    getSingleUserHandler,
    getUserByIdHandler,
    createUserHandler,
    updateUserHandler,
    deleteUserHandler
} from "./user.controller";

import { isAuthenticated, hasRole } from "../../auth/auth.controller";

const router = Router();

router.get('/', isAuthenticated, getAllUsersHandler);
router.get('/single', isAuthenticated, getSingleUserHandler);
router.get('/:id', isAuthenticated, getUserByIdHandler);
router.post('/', createUserHandler);
router.put('/', isAuthenticated, hasRole('USER'), updateUserHandler);
router.delete('/', isAuthenticated, hasRole('USER'), deleteUserHandler);

export default router;