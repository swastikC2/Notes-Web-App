import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  res.status(200).json({ mssg: "GET REQUEST TO NOTES" });
});

router.post("/", (req, res) => {
  res.status(201).json({ mssg: "GET REQUEST TO NOTES" });
});

router.put("/:id", (req, res) => {
  res.status(200).json({ mssg: "PUT REQUEST TO NOTES" });
});

router.delete("/:id", (req, res) => {
  res.status(200).json({ mssg: "DELETE REQUEST TO NOTES" });
});
