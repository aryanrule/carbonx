const User = require('../Modals/User');
const bcrypt = require('bcrypt');

exports.signup = async (req , res) => {
      try {
          const {name , password , role , email} = req.body;
          if(!name || !password || !role || !email) {
              return res.status(403).json({
                  success: false,
				  message: "All Fields are required",
              })
          }

          const checkUserPresent = await User.findOne({email});
          if(checkUserPresent){
           return res.status(400).json({
				success: false,
				message: "User already exists. Please sign in to continue.",
		   });
          }

          const hashedPassword = await bcrypt.hash(password, 10);
          
          const user = await User.create({
            name , 
            role , 
            email , 
            password : hashedPassword, 
          });
          
          return res.status(200).json({
			success: true,
			user,
			message: "User registered successfully",
		  });

      } catch(error){
  	    console.error(error);
		return res.status(500).json({
			success: false,
			message: "User cannot be registered. Please try again.",
		});
      }  
}

exports.login = async (req  , res) => {
    try {
       const {email , password} = req.body();
       if(!email || !password){
            return res.status(403).json({
                  success: false,
				  message: "All Fields are required",
              })
       }

       const user = await User.findOne({email});
       if(!user){
        return res.status(401).json({
            success:false , 
            message:"user not found ", 
        });
       }

       const check_pass = await bcrypt.compare(user.password , password);
       if(check_pass){
          // means pass is right 
          const payload = {
            email:user.email , 
            id:user._id , 
            role:user.role, 
          }

        const token = JWT.sign(payload , process.env.JWT_SECRET , {expiresIn:'10h'});
        
        user.token = token;
        user.password = undefined;

        const options = {
            expires: new Date(Date.now() + 3*24*60*60*1000),//ms or 3 days 
            httpOnly:true , //no access to the client side 
        }

        res.cookie("myCookie", token , options).status(200).json({
            success:true,
            message:"user login successfully", 
            user ,   
            token ,
        });

       }else{
         return res.status(401).json({
            success:false , 
            message:"password not matched", 
         })
       }
       
    }catch(error){
        console.error(error);
		return res.status(500).json({
			success: false,
			message: "User cannot be login. Please try again.",
		});
    }
}