const express = require("express");
const Photo = require("../db/photoModel");
const router = express.Router();

//get photos of user by id
router.get("/photosOfUser/:id", async (request, response) => {
  try{
     const id = request.params.id;
     var photosOfUser = await Photo.find({user_id: id});
     response.status(200).json(photosOfUser);
  }catch(err) {
     response.status(500).json(err);
  }
});

module.exports = router;
