import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const CommentSchema = new Schema({
	content: { type: String, required: true },
	avatar: { type: String },
	username: { type: String },
	post: { type: Schema.ObjectId }
}, {timestamps: true});

export default mongoose.model('Comment', CommentSchema);
