import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const MenuItemSchema = new Schema({
	"name": { type: String, default: 'No name' },
	"link": { type: String, default: 'No link' },
}, { timestamps: true });

MenuItemSchema.add({ "dropdown": [ MenuItemSchema ] })

const ConfigSchema = new Schema({
	"menu": [MenuItemSchema],
}, { timestamps: true });

export default mongoose.model('Config', ConfigSchema);
