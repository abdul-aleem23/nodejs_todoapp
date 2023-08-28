import jsonWebToken from "jsonwebtoken";

export const sendCookie = (user, res, message, statusCode= 200) => {
    const token = jsonWebToken.sign({_id: user._id}, process.env.JWT_SECRET);

    res.status(statusCode)
    .cookie("token", token, {
        httpOnly: true,
        maxAge: 15 * 60 * 1000, // 15(minutes)x60(minute)x1000(seconds)
        sameSite: process.env.NODE_ENV === "Development" ? "lax" : "none",
        secure: process.env.NODE_ENV === "Development" ? false : true,  
    }).json({
        success: true,
        message,
    })
}