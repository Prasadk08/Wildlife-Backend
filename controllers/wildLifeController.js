import WildLife from '../model/wildLife.js';

exports.getAllWildlife = async (req, res) => {
  try {
    const wildlife = await WildLife.find();
    res.status(200).json(wildlife);
  } catch (error) {
    console.error("Error fetching wildlife:", error);
    res.status(500).json({ message: "Failed to fetch wildlife data" });
  }
};
