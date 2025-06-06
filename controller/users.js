
import { User } from "../model/users.js";

export const getUserById = async(req,res) =>  {
   
    if(req){
       
        const userId = req.params.id;
    
        if (!mongoose.Types.ObjectId.isValid(userId)) {
            return res.status(400).json({ error: 'Invalid user ID ' });
        }
        
        try {
            const user = await User.findOne({ _id: userId, age: { $gt: 21 } });
        
            if (!user) {
            return res.status(404).json({ error: `User's age is lesser than 21 years` });
            }
        
            res.json(user);
        } catch (err) {
            res.status(500).json({ error: 'Server error' });
        }
    }
}

