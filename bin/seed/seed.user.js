// create a test data set of valid users
require("dotenv").config();
require("./../../config/mongo"); // fetch the db connection
const UserModel = require("./../../model/User"); // fetch the model to validate our user document before insertion (in database)

const insertUser = async function (){
    try{
        
        const testUser = {
            username:"Victor",
            email:"test@mytest.com",
            password:"myPass"
        }
        const insertedUser = await UserModel.create(testUser)
        console.log(insertedUser)

    }catch(err){
        console.error(err)
    }
} 

insertUser()