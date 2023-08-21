const mongoose = require('mongoose');

async function connect() {
    try {
        
     await mongoose.connect('mongodb://127.0.0.1:27017/Anti_Gravity_dev');
        console.log('connect successfully!')

    } catch (error) {
        console.log('failed to connect')
    }

}

module.exports = { connect };