"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const nft_image_controller_1 = require("./nft-image.controller");
const auth_controller_1 = require("../../auth/auth.controller");
const auth_controller_2 = require("../../auth/auth.controller");
const formData_1 = require("../../middlewares/formData");
const router = (0, express_1.Router)();
router.get('/', nft_image_controller_1.getAllImageHandler);
router.get('/:id', nft_image_controller_1.getSingleImageHandler);
router.post('/', auth_controller_1.isAuthenticated, (0, auth_controller_2.hasRole)('USER'), formData_1.formData, nft_image_controller_1.createImageHandler);
router.delete('/:id', auth_controller_1.isAuthenticated, (0, auth_controller_2.hasRole)('USER'), nft_image_controller_1.getDeleteImageHandler);
exports.default = router;
