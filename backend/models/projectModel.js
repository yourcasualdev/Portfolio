const mongoose = require('mongoose');
const slugify = require('slugify');

const projectSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            unique: true
        },
        description: {
            type: String,
        },
        markdown: {
            type: String,
            required: true
        },
        startDate: {
            type: Date,
            required: true,
        },
        slug: {
            type: String,
            unique: true
        }
    },
    {
        timestamps: true
    });

//generate slug
projectSchema.pre('save', function (next) {
    this.slug = slugify(this.name, { lower: true });
    next();
});

module.exports = mongoose.model('Project', projectSchema);