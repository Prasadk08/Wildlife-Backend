import Program from "../model/program.js";

export const getAllPrograms = async (req, res) => {
  try {
    const programs = await Program.find();
    res.status(200).json(programs);
  } catch (error) {
    console.error("Error fetching programs:", error);
    res.status(500).json({ message: "Failed to fetch programs" });
  }
};

export const getProgramById = async (req, res) => {
  try {
    console.log("Fetching program by ID:", req.params.id);
    const program = await Program.findById(req.params.id);
    if (!program) {
      return res.status(404).json({ message: "Program not found" });
    }
    res.status(200).json(program);
  } catch (error) {
    console.error("Error fetching program by ID:", error);
    res.status(500).json({ message: "Failed to fetch program" });
  }
};

export const deleteProgramById = async (req, res) => {
  try {
    const program = await Program.findByIdAndDelete(req.params.id);
    if (!program) {
      return res.status(404).json({ message: "Program not found" });
    }
    res.status(200).json({ message: `${program.title} deleted Successfully` });
  } catch (error) {
    console.error("Error deleting program:", error);
    res.status(500).json({ message: "Failed to delete program" });
  }
};
