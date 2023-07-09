import mongoose from "mongoose";
const { Schema } = mongoose;

const userListSchema = new Schema({
    UserName: {type: String, required: true},
    PlaceCount: Number
});

const UserList = mongoose.model('UserList', userListSchema);

export { UserList }