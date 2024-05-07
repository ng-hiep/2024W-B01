const express = require("express");
const User = require("../db/userModel");
const router = express.Router();


router.get("/list", async (req, res) => {
     try{
        const allUser = await User.find();
        res.status(200).json(allUser);
     }catch(err) {
        res.status(500).json(err);
     }
   });

router.get("/:id", async (request, response) => {
  try{
     const id = request.params.id;
     const user = await User.findById(id);
     response.status(200).json(user);
  }catch(err) {
     response.status(404).json(err);
  }
});


module.exports = router;