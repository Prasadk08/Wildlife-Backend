import WildLife from '../model/wildLife.js'


export const getAllWildlife = async (req, res) => {
  try {
    console.log("Fetching all wildlife data");
    const wildlife = await WildLife.find();
    res.status(200).json(wildlife);
  } catch (error) {
    console.error("Error fetching wildlife:", error);
    res.status(500).json({ message: "Failed to fetch wildlife data" });
  }
};
