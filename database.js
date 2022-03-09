const mongoose = require('mongoose');

const connect = async () => {
    let dbConnexion = process.env.DB_CONNEXION;

    try {
        await mongoose.connect(dbConnexion, { useNewUrlParser: true, useUnifiedTopology: true})
    }
    catch(err) {
        console.log(err);
        process.exit();
    }
};

const disconnect = async () => {
    await mongoose.disconnect()
};

module.exports = {connect, disconnect};