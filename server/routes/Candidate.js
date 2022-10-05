const router = require("express").Router();
const CandidateData = require("../models/CandidateData");

//GET ALL CANDIDATES
router.get("/", async (req, res) => {
  try {
    const candidates = await CandidateData.find();
    res.json(candidates);
  } catch (err) {
    res.json({ message: err });
  }
});

//Get a specific candidate
router.get("/:id", async (req, res) => {
  try {
    const candidates = await CandidateData.findById(req.params.id);
    res.json(candidates);
  } catch (err) {
    res.json({ message: err });
  }
});

//Create a new candidate
router.post("/", async (req, res) => {
  const { CandidateID, name, email } = req.body;
  const candidate = new CandidateData({
    CandidateID,
    name,
    email,
  });
  await candidate
    .save()
    .then(() => res.json("Post added!"))
    .catch((err) => res.status(400).json("Error: " + err));
});

//Update a candidate
router.put("/:id", async (req, res) => {
  try {
    const candidate = await CandidateData.findById(req.params.id);
    try {
      const updatedCandidate = await CandidateData.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        { new: true }
      );
      res.status(200).json(updatedCandidate);
    } catch (err) {
      res.status(404).json("Post not found");
    }
  } catch (err) {
    res.status(404).json("Post not found");
  }
});

module.exports = router;
