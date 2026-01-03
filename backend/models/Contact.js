import mongoose from "mongoose";

const contactSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: email },
  phone: { type: Number, required: true },
  message: { type: String }
}, { timestamps: true });

export default mongoose.model("Contact", contactSchema);
