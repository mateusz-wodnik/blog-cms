import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const PostSchema = new Schema({
	title: { type: String, required: true },
	content: { type: String, required: true },
	featured: { type: Boolean, default: false },
	slider: { type: Boolean, default: false },
	img: { type: String },
	categories: [{ type: String }],
	comments: [{ type: Schema.ObjectId, required: true }],
	prev: {
		name: { type: String, required: true },
		link: { type: String, required: true }
	},
	prev: {
		name: { type: String, required: true },
		link: { type: String, required: true }
	},
}, {timestamps: true});

export default mongoose.model('Post', PostSchema);
