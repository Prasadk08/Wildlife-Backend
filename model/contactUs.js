const mongoose = require("mongoose");

const contactUsSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  subject: String,
  message: { type: String, required: true },
  submittedAt: { type: Date, default: Date.now },
});

const ContactUs= mongoose.model("ContactUs", contactUsSchema);
export default ContactUs