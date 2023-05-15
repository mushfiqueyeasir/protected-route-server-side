const mongoose = require("mongoose");
const validator = require("validator");
const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      minLength: [3, "Name must be at list 3 characters"],
      maxLength: [100, "Name is to long"],
    },
    phoneNumber: {
      type: String,
      minLength: [0, "Phone Number Can't be Negative"],
    },
    email: {
      type: String,
      validator: [validator.isEmail, "Provide a valid Email"],
      required: [true, "Email is required"],
      unique: true,
      trim: true,
      lowercase: true,
    },
    adharCard: {
      type: String,
      minLength: [3, "Adhar Card must be at list 3 characters"],
    },
    address: {
      type: String,
      minLength: [3, "Address must be at list 3 characters"],
      maxLength: [300, "Address is to long"],
    },

    imgURL: {
      type: String,
      validate: [validator.isURL, "pls provide a valid url"],
      default:
        "https://us.123rf.com/450wm/anatolir/anatolir2011/anatolir201105528/159470802-jurist-avatar-icon-flat-style.jpg?ver=6",
    },
    passwordChangeAt: Date,
    passwordResetToken: String,
    passwordResetExpires: Date,
  },

  { timestamps: true }
);

const user = mongoose.model("users", userSchema);
module.exports = user;
