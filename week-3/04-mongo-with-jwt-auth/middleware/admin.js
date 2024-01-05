const jwt = require("jsonwebtoken");
const {JWT_SECRET} = require("../config");

// Middleware for handling auth
function adminMiddleware(req, res, next) {
    const token = req.headers.authorization; // bearer token
    const words = token.split(" "); // ["Bearer", "token"]
    const jwtToken = words[1]; // token
  
   
    try {
        const decodedValue = jwt.verify(jwtToken, JWT_SECRET);

        if (decodedValue.username) {
            next();
        } else {
            res.status(403).json({
                msg: "You are not authenticated"
            });
        }
    } catch (error) {
        res.status(403).json({
            msg: "Token verification failed"
        });
    }
    
   
    }
    


module.exports = adminMiddleware;