const User = require('../Model/Signup')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')


const signup = async (req,res)=>{
    
    const {name , email , Password, cPassword} = req.body
     if(!name || !email || !Password|| !cPassword){
              res.status(422).json({errors: 'Please fill the required fields'});
     } 
     else{

     try {
 
        const userExist= await User.findOne({ email : email } )
         
              if(userExist){
              res.status(403).json('email already exists')
             }else 
             if(Password != cPassword){
                 res.status(410).json({errors: 'password and confirm password must be the same'});
             }
             else {
             const secret= bcrypt.hashSync(Password);
 
             const user=  new User({
                     name: name,
                     email: email,
                     Password: secret,
                     cPassword: secret
             })
             const users = await user.save();

             const token = jwt.sign({email: users.email, id: users._id},process.env.Secret_Key)
              res.status(200).json({user: users, message: 'data Save succesfully', token: token})
 
        
              
         }
     } catch (error) {
         res.status(500).send(error)
     }
 }
 }


 const login = async (req, res) => {
   
    const {email , Password } = req.body
    try {
        
        if(!email || !Password){
            res.status(403).json('please enter your email and password');
        }else{
            const emaillog= await User.findOne({ email: email});
            if(emaillog){
                const passmatch = await bcrypt.compare(Password, emaillog.Password);
                if(passmatch){

                    const token = jwt.sign({email: emaillog.email, id: emaillog._id},process.env.Secret_Key);

                    res.status(200).json({user: emaillog, token: token, message : "Log in successfully"})

                    

                    
                }else{
                    res.status(410).json('Log In failed due to incorrect credentials');
                } 
            } else{
                res.status(410).json('Log In failed due to incorrect credentials');
            }      
        }

    } catch (error) {
        return res.status(500).json({"error": error})
    }

   

}
 module.exports = {signup, login}