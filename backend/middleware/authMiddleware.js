// import user and jwt
const jwt = require("jsonwebtoken");
const User = require("../models/User");

// check token validity
const protect = async (req, res, next) => {
    let token;

    if (
        req.headers.authorization &&
        req.headers.authorization.startsWith("Bearer")
    ) {
        try {
            token = req.headers.authorization.split(" ")[1];

            // verify token
            const decoded = jwt.verify(token, process.env.JWT_SECRET);

            // attach user (without password) to request
            req.user = await User.findById(decoded.id).select("-password");

            if (!req.user) {
                return res.status(401).json({ message: "User not found" });
            }

            return next();
        } catch (error) {
            if (error.name === 'TokenExpiredError') {
                return res.status(401).json({ message: "Session expired. Please login again." });
            }
            if (error.name === 'JsonWebTokenError') {
                return res.status(401).json({ message: "Invalid session token." });
            }
            return res.status(401).json({ message: "Authentication failed." });
        }
    }

    // handle missing token
    if (!token) {
        return res.status(401).json({ message: "Not authorized, no token" });
    }
};

// export protect
module.exports = { protect };