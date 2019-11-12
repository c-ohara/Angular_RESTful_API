const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
    title: {type: String, required: [true, "Title required"], maxlength: [10, "Must be 10 characters or less"]},
    description: {type: String, required: [true, "Description required"], minlength: [10, "Must be 10 characters or more"]},
    completed: Boolean, default: false
}, {timestamps: true});
mongoose.model('Task', TaskSchema);