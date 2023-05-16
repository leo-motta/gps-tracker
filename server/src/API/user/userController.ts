const asyncHandler = require('express-async-handler');
const User = require('./userModel');

//@desc     Registrar um novo usuário
//@route    POST /api/users/register
//@access   Public
export const register = asyncHandler(async(req:any,res:any) => {
    const { email, username, password} = req.body;

    try {
        const user = await User.create({
            name:username,
            email:email,
            password:password
        });
        
        res.status(200).json({
            _id: user._id,
            name: user.name,
            email:user.email
        });
    } catch(error: any){
        res.status(400).json({"message":"Register failed."});
    }
});

//@desc     Logar com um novo usuário
//@route    POST /api/users/login
//@access   Public
export const login = asyncHandler(async(req: any,res: any) => {
    const { email, password} = req.body;

    const user = await User.findOne({email});
    if (user && user.password == password) {
        res.status(200).json({
            _id: user._id,
            name: user.name,
            email:user.email
        });
    } else {
        res.status(401).json({"message":"User not found!"});
    }
});