import ContactUs from "../model/contactUs";

exports.contactUs = async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ message: "Name, Email, and Message are required" });
    }

    const newContact = new ContactUs({ name, email, subject, message });
    await newContact.save();

    res.status(201).json({ message: `${name}, our team will get back to you within 24 hrs.` });
  } catch (error) {
    console.error("Error in contact form:", error);
    res.status(500).json({ message: "Failed to process contact request" });
  }
};
