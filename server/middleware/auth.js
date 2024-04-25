function auth(req, res, next){
    try{
       console.log(req.cookies); 
    } catch (err) {
        console.error(err);
        res.status(401).json({errorMEssage: "Unauthorized"});
    }
}

module.exports = auth;