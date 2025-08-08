import JoinTeam from '../model/joinTeam.js';

export const joinTeam = async (req, res) => {
  console.log("Received join team request:", req.body);
  try {
    const { name, email, message } = req.body;

    if (!name || !email) {
      return res.status(400).json({ message: "Name and Email are required" });
    }

    const newMember = new JoinTeam({ name, email, message });
    await newMember.save();

    res.status(201).json({ message: `${name}, thank you for showing interest in joining` });
  } catch (error) {
    console.error("Error joining team:", error);
    res.status(500).json({ message: "Failed to process join request" });
  }
};
