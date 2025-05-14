const generateResponse = require("../services/ai.service");

module.exports.getReview = async (req, res) => {
  const code = req.body.code;

  if (!code) {
    return res.status(400).send("Prompt is required");
  }

  try {
    const response = await generateResponse(code);
    res.send(response);
  } catch (err) {
    console.error("Controller error:", err);
    res.status(500).send("Something went wrong");
  }
};
 