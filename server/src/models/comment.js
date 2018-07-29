import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const CommentSchema = new Schema({
	content: { type: String, required: true },
	avatar: { type: String },
	username: { type: String, required: true },
	post: { type: Schema.ObjectId },
	response: [{ type: Schema.ObjectId, ref: 'Comment'}]
}, {timestamps: true});

export default mongoose.model('Comment', CommentSchema);
