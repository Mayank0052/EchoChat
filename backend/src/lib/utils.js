import jwt from "jsonwebtoken"
export const generateToken=(userId,res)=>{
    const token=jwt.sign({userId},process.env.JWT_SECRET,{
        expiresIn:"7d",
    })
    res.cookie("jwt",token,{
        maxAge:7*24*60*60,
        httpOnly:true, //prevents some sort of xss attacks
        sameSite:"strict",//csrf attacks protection
        secure:process.env.NODE_ENV!=="development"
    })
    return token;
}