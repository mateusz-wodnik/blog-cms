import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const MenuItemSchema = new Schema({
	"name": { type: String, default: 'No name' },
	"link": { type: String, default: 'No link' },
	"active": { type: Boolean, default: false },
	"top": { type: Boolean, default: false },
	"dropdown": [{ type: Schema.ObjectId, ref: 'MenuItem' }]
}, { timestamps: true });

const autoPopulateLead = function(next) {
	this.populate('dropdown');
	next();
};

MenuItemSchema.
pre('findOne', autoPopulateLead).
pre('find', autoPopulateLead);



export default mongoose.model('MenuItem', MenuItemSchema);
