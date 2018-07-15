import mongoose from 'mongoose';

const database = 'blog'
mongoose.connect(`mongodb://localhost/${database}`);
