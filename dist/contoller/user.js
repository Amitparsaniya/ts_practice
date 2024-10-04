"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_1 = __importDefault(require("../model/user"));
const createUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userData = req.body;
        const userDetail = yield user_1.default.create(userData);
        console.log(userData, userDetail);
        res.status(201).json({
            message: "user created successfully",
            data: userDetail
        });
    }
    catch (error) {
        console.log(error);
    }
});
const getUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userId = req.body.user_id;
        const userDetail = yield user_1.default.findOne({ _id: userId });
        const userData = {
            name: userDetail.name,
            email: userDetail.email,
            phone_number: userDetail.phone_number
        };
        res.status(200).json({ message: "user fetch successfully", data: userData });
    }
    catch (error) {
        console.log(error);
    }
});
const updateUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userId = req.params.userId;
        const data = req.body;
        const userDetail = yield user_1.default.findById(userId);
        yield (userDetail === null || userDetail === void 0 ? void 0 : userDetail.updateOne({
            name: data === null || data === void 0 ? void 0 : data.name,
            email: data === null || data === void 0 ? void 0 : data.email,
            phone_number: data.phone_number
        }));
        res.status(200).json({ message: "user updated successfully" });
    }
    catch (error) {
        console.log(error);
    }
});
const getAllUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userData = yield user_1.default.find();
        const userCount = yield user_1.default.countDocuments({});
        const userArr = [];
        userData.forEach((val) => {
            userArr.push({
                name: (val === null || val === void 0 ? void 0 : val.name) || '',
                email: (val === null || val === void 0 ? void 0 : val.email) || '',
                phone_number: (val === null || val === void 0 ? void 0 : val.phone_number) || ''
            });
        });
        res.status(200).json({ message: "user fetched successfully", count: userCount, data: userArr });
    }
    catch (error) {
        console.log(error);
    }
});
const userController = {
    createUser,
    getUser,
    updateUser,
    getAllUser
};
exports.default = userController;
