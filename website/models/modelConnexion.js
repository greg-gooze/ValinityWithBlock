const mongoose = require('mongoose');

const connexionSchema = mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    typeConnexion: {
        type: Number
    },
},
{
    versionKey: '_somethingElse'
});

module.exports = mongoose.models.users || mongoose.model("users", connexionSchema);
