import mongoose from 'mongoose';
const Schema = mongoose.Schema;
// import MenuItemSchema from './menuItem'

const MenuItemSchema = new Schema({
	"name": { type: String, default: 'No name' },
	"link": { type: String, default: 'No link' },
}, { timestamps: true });

MenuItemSchema.add({ "dropdown": [ MenuItemSchema ] })

const ConfigSchema = new Schema({
	"menu": [MenuItemSchema],
}, { timestamps: true });

// const autoPopulateLead = function(next) {
// 	this.populate('menu');
// 	this.populate('dropdown');
// 	next();
// };

// ConfigSchema.
// pre('findOne', autoPopulateLead).
// pre('find', autoPopulateLead);



export default mongoose.model('Config', ConfigSchema);
