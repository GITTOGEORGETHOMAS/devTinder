const adminAuth = (req, res, next) => {
    console.log("Admin auth is getting checked!!");
    
    const token = "xyz"; // Hardcoded token for demo
    const isAdminAuthorized = token === "xyz"; // Always true
    
    if (!isAdminAuthorized) {
        res.status(401).send("Unauthorized request");
    } else {
        next(); // Let request continue
    }
}

const userAuth = (req,res,next) => {
    console.log("User auth is getting checked!!");
    const token = "abc";
    const isUserAutherized = token === "abc";

    if (!isUserAutherized) {
        res.send(401).send("Unauthorized request");
    } else {
        next();
    }
}

module.exports = {
    adminAuth,userAuth
}
