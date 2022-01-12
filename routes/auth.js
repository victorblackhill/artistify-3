const router = new require("express").Router();
const bcrypt = require("bcrypt");
const protectRoute = require("./../middlewares/protectRoute");
const UserModel = require("./../model/User")
const fileUploader = require("./../config/cloudinary")

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


const createUser = async function (req, res, next){
    try{
        const newUser = {...req.body}
        const foundUser = await UserModel.findOne({email:newUser.email})

        if(foundUser){
            req.flash("warning","Email already registered")
            res.redirect("/auth/signup")
        } else{
            
            const hashedPassword = bcrypt.hashSync(newUser.password,10)
            newUser.password = hashedPassword;
            newUser.avatar = req.file.path

            const createdUser = await UserModel.create(newUser)
            console.log(createdUser)
            req.flash("success", "Congrats, you are now registered")
            res.redirect("/auth/signin")
        }

    }catch(err){
        let errorMessage = ""
        for (fiel in err.errors){
            errorMessage += err.errors[field].message +"\n";
            req.flash("error",errorMessage)
            res.redirect("/auth/signup")
        }
        next(err)
    }
}

const logIn = async function(req,res,next){
    try{
        const {email, password}= req.body
        
        const foundUser = await UserModel.findOne({email:email})

        if(!foundUser){


            
        }
        console.log(foundUser)
        renderReq(req,res,next)

    }catch(err){
        next(err)
    }

}

//all routes are under /auth/myRoute



//signup
router.get("/signup",renderSignup)
router.post("/signup", fileUploader.single("avatar") ,createUser)

//signin
router.get("/signin",renderSignin)


//signout


module.exports = router