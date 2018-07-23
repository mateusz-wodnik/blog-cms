import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const PostSchema = new Schema({
	title: { type: String, required: true },
	content: { type: String, required: true },
	comments: [{ type: Schema.ObjectId, required: true }],
}, {timestamps: true});

export default mongoose.model('Post', PostSchema);
