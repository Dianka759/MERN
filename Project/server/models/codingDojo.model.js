const mongoose = require("mongoose");

const subSectionsSchema = new mongoose.Schema({
    title: String,
    image: String,
    contents: String
}, { timestamps: true }
);

const SectionSchema = new mongoose.Schema({
    title: String,
    subsection: [subSectionsSchema]
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