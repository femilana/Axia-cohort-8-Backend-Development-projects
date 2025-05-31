const user = require("../models/model");

const create_user = async (req,res) =>{
    try{
        const new_user = await user.create(req.body);
        res.status(201).json(new_user);

    }
    catch(error){
        res.status(400).json({error:error.message})
    }
};

const login_user = async(req,res) =>{

    const {email, password} = req.body;
    try{
        const user_identity = await user.findOne({email});
        if(!user_identity || user_identity.password !== password){
            return res.status(401).json({alert:"Invalid login details"})
        }
        else{
            res.status(200).json({alert:"Login successful", user_identity})
        }
    }
    catch(error){
        res.status(500).json({error:error.message})
    }
};

const update_user = async(req,res)=>{
    try{
        
        const user_id = await user.findOneAndUpdate(
           {_id:req.params.id},
            req.body,
            {new:true}
        );
        res.status(200).json(user_id)
    }
    catch(error){
        res.status(400).json({error:error.message});
    }
};

const delete_user = async(req, res) => {
    try{
        const user_to_be_deleted = await user.findByIdAndDelete({_id:req.params.id})
        res.status(204).send();
    }
    catch(error){
        res.status(500).json({error:error.message})
    }
};

const get_all_users = async (req,res) => {
    try{
        const all_users = await user.find()
        res.status(201).json(all_users)
    }

    catch(error){
        res.status(500).json({error:error.message})
    }
}

module.exports = {create_user,login_user,update_user,delete_user,get_all_users}