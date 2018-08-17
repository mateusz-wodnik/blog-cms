import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const CommentSchema = new Schema({
	content: { type: String, required: true },
	avatar: { type: String },
	username: { type: String, required: true },
	post: { type: Schema.ObjectId },
	response: [{ type: Schema.ObjectId, ref: 'Comment', autopopulate: true}]
}, {timestamps: true});

var autoPopulateLead = function(next) {
	this.populate('response');
	next();
};

CommentSchema.
pre('findOne', autoPopulateLead)
	// .pre('find', autoPopulateLead);

export default mongoose.model('Comment', CommentSchema);
