const mongoose = require('mongoose')

const Schema = mongoose.Schema

const CommentSchema = new Schema(
  {
    text: {
      type: String,
      minlength: [3, 'Must be three characters long'],
      required: [true, 'Text is required'],
    },
    videoId: {
      type: mongoose.Schema.ObjectId,
      ref: 'Video',
      required: true,
    },
    userId: {
      type: mongoose.Schema.ObjectId,
      ref: 'User',
      required: true,
    },
  },
  { timestamps: true }
)

module.exports = mongoose.model('Comment', CommentSchema)
