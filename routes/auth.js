const router = new require("express").Router();

const renderSignin = async function(req,res,next){
    try {res.render("./../views/auth/signin.hbs")}
    catch(err){next(err)}
    }

const renderReq = async function(req,res,next){
    try {
        res.send(req.body)}
    catch(err){next(err)}
    }

const renderSignup = async function(req,res,next){
    try {res.render("./../views/auth/signup.hbs")}
    catch(err){next(err)}
    }

const createUser = async function(req,res,next){
    try{

        renderReq(req,res,next)

    }catch(err){
        next(err)
    }

}

//all routes are under /auth/myRoute



//signup
router.get("/signup",renderSignup)
router.post("/signup",createUser)

//signin
router.get("/signin",renderSignin)


//signout


module.exports = router