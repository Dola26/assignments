const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb+srv://dola:nnCy5ynjg30lhZqS@cluster0.0y0cpl7.mongodb.net/');

// Define schemas
const AdminSchema = new mongoose.Schema({
    // Schema definition here
    userName: String,
    password: String
});

const UserSchema = new mongoose.Schema({
    // Schema definition here
    userName: String,
    password: String
});

const CourseSchema = new mongoose.Schema({
    // Schema definition here
    title: String,
    description: String,
    price: Number,
    image: String,
});

const Admin = mongoose.model('Admin', AdminSchema);
const User = mongoose.model('User', UserSchema);
const Course = mongoose.model('Course', CourseSchema);

module.exports = {
    Admin,
    User,
    Course
}