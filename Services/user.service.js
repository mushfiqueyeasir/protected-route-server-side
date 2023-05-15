const userSchema = require("../Models/user.schema");

exports.signupService = async (userInfo) => {
  const result = await userSchema.create(userInfo);
  return result;
};

// -------------------------single user-------------------------
exports.getUserInfoSchema = async (userEmail) => {
  const query = { email: userEmail };
  const result = await userSchema.find(query);
  return result;
};

exports.updateUserInfoSchema = async (userEmail, data) => {
  const query = { email: userEmail };
  const result = await userSchema.updateMany(query, data);
  return result;
};
