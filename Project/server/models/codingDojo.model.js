const mongoose = require("mongoose");

const SectionSchema = new mongoose.Schema({
    title: String,
    contents: String
}, { timestamps: true }
);

const ChapterSchema = new mongoose.Schema({
    title: String,
    image: String, 
    section: [SectionSchema],
}, { timestamps: true }
);

const StackSchema = new mongoose.Schema({
    stack: {
        title: String,
        image: String, 
        chapter: [ChapterSchema],
    }
}, { timestamps: true }
);


const Stack = mongoose.model("Stack", StackSchema);
module.exports = Stack;