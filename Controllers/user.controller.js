const {
  signupService,
  getUserInfoSchema,
  updateUserInfoSchema,
} = require("../Services/user.service");

exports.signup = async (req, res) => {
  try {
    let data = req.body;
    const result = await signupService(data);
    res.status(200).json({
      status: "success",
      message: "User insert successfully",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      status: "error",
      message: "User couldn't insert",
      error: error.message,
    });
  }
};

//--------------------------single user--------------------------
exports.getUser = async (req, res, next) => {
  const userEmail = req.params.email;
  try {
    const result = await getUserInfoSchema(userEmail);
    res.status(200).json({
      status: "success",
      message: "User List Data get Successfully",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      status: "error",
      message: "Can't get User List Data an error occurred",
      error: error.message,
    });
  }
};

exports.updateUser = async (req, res, next) => {
  const userEmail = req.params.email;
  try {
    let data = req.body;
    const phoneNumber = req.body.phoneNumber;
    data.phoneNumber = phoneNumber;
    const result = await updateUserInfoSchema(userEmail, data);

    res.status(200).json({
      status: "success",
      message: "User List Data Updated Successfully",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      status: "error",
      message: "User List couldn't update an error occurred",
      error: error.message,
    });
  }
};
