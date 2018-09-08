import mongoose from 'mongoose';

if(process.env.mongoUser) {
    mongoose.connect("mongodb://" + process.env.mongoUser + ":" + process.env.mongoPassword + "@ds125342.mlab.com:25342/blog-rest-admin");
} else {
    const database = 'blog'
    mongoose.connect(`mongodb://localhost/${database}`);
}
