const { Schema, model } = require('mongoose');
const reactionSchema = require('./Reaction');

// Schema to create a thought model
const thoughtSchema = new Schema(
  {
    thoughtTitle: {
      type: String,
      required: true,
    },
    thoughtText: {
      type: String,
      required: true,
    },
    startDate: {
      type: Date,
      default: Date.now(),
    },
    reactions: [reactionSchema],
   
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

const Thought = model('thought', thoughtSchema);

module.exports = Thought;
