const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
    content: {
        type: String,
        required: true,
        trim: true,
    },
    status: {
        type: Number,
        default: 0,
    }
}, {
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }
});

module.exports = mongoose.model('Todo', todoSchema, 'todos');