import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const ConfigSchema = new Schema({
	"menu": [{ type: Schema.ObjectId, ref: "menuItem" }],
}, { timestamps: true });

const autoPopulateLead = function(next) {
	this.populate('menu');
	this.populate('dropdown');
	next();
};

ConfigSchema.
pre('findOne', autoPopulateLead).
pre('find', autoPopulateLead);



export default mongoose.model('Config', ConfigSchema);
