const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect(`mongodb+srv://harshshrivastav139:probuzin2@probuzin.jmrw6.mongodb.net/probuzin-data?retryWrites=true&w=majority&appName=Probuzin`, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB Connected');
  } catch (error) {
    console.error('Database Connection Failed:', error.message);
    process.exit(1);
  }
};

module.exports = connectDB;
