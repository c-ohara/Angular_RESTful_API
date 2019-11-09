const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
}, {timestamps: true});
mongoose.model('Task', TaskSchema);