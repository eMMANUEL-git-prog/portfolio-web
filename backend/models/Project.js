const mongoose = require("mongoose")

const projectSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    technologies: [
      {
        type: String,
        required: true,
      },
    ],
    githubUrl: {
      type: String,
      required: true,
    },
    liveUrl: {
      type: String,
      required: true,
    },
    featured: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  },
)

module.exports = mongoose.model("Project", projectSchema)
