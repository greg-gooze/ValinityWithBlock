import connectDB from "../../../utils/connectmongoDB";
var User = require('../../../models/modelConnexion.js');

export default async function handler(req, res) {
    console.log("Connecting Db");
    connectDB();
    console.log("DB connected");

    const {email,password} = req.body;
    const user = await User.findOne({email, password});
    if(!user){
        return res.json({status: 'no user found'})
    }
    else {
        //admin
        if(user.typeConnexion == 1){
            res.redirect('/admin');
        }
    }
}
