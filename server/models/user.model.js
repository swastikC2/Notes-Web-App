import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    fullName: { type: String },
    email: { type: String },
    password: { type: String },
  },
  { timestamps: true }
);

export const User = mongoose.model("User", userSchema);
