const mongoose=require('mongoose');
const schema=mongoose.Schema;

const userSchema = new schema({
  name: { type: String, require: true },
  last_name: { type: String, require: true },
  email: { type: String, require: true, unique: true },
  password: { type: String, require: true },
  adress: { type: String },
  code_postal: { type: String, require: true },
  isAdmin: { type: Boolean, default: false },
});


  const User = mongoose.model('User',userSchema);
  module.exports=User;