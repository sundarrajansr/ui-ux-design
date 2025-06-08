const mongoose = require('mongoose');

const MONGODB_URI = 'mongodb://root:example@127.0.0.1:27017/restaurant?authSource=admin&directConnection=true';

mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 5000,
    socketTimeoutMS: 30000,
    connectTimeoutMS: 30000,
    retryWrites: true,
    w: 'majority'
})
.then(() => {
    console.log('Successfully connected to MongoDB');
    mongoose.connection.close();
})
.catch(error => {
    console.error('MongoDB connection error:', error);
});
