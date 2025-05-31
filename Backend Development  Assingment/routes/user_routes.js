const express = require("express")
const {create_user,login_user,update_user,delete_user,get_all_users} = require("../controllers/user_controller")
const route = express.Router()

route.get('/',get_all_users);
route.post('/register',create_user);
route.post('/login',login_user);
route.put("/:id",update_user);
route.delete("/:id",delete_user);

module.exports = route;
