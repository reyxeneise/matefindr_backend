"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const userSchema = new mongoose_1.Schema({
    username: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true
    },
    lugares: [
        { type: mongoose_1.Schema.Types.ObjectId, ref: "Place" }
    ],
    comentarios: [
        { type: mongoose_1.Schema.Types.ObjectId, ref: "Comment" }
    ]
});
exports.default = userSchema;
