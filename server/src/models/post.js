import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const PostSchema = new Schema({
	title: { type: String, default: 'No title' },
	content: { type: String, default: 'No content' },
	featured: { type: Boolean, default: false },
	slider: { type: Boolean, default: false },
	img: { type: String },
	categories: [{ type: String }],
	comments: [{ type: Schema.ObjectId, required: true, ref: 'Comment' }],
	prev: {
		name: { type: String, default: '' },
		link: { type: String, default: '' }
	},
	next: {
		name: { type: String, default: '' },
		link: { type: String, default: '' }
	},
}, {timestamps: true});

export default mongoose.model('Post', PostSchema);
