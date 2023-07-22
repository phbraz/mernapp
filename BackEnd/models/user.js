import mongoose from "mongoose";
const { Schema } = mongoose;

const userSchema = new Schema({
    firstname: {type: String, required: true},
    lastname: {type: String, required: true},
    email: {type: String, required: true},
    username: {type: String, required: true},
    password: {type: String, required: true},
    datecreated: Date
});

const User = mongoose.model('User', userSchema);

export { User }