const Joi = require("joi");
const express = require("express");
const router = express.Router();
const Url = require("../models/Url");
const schema = Joi.object()
  .keys({
    name: Joi.string().token().min(1).max(100).required(),
    url: Joi.string()
      .uri({
        scheme: [/https?/],
      })
      .required(),
  })
  .with("name", "url");

router.post("/", async (req, res) => {
  try {
    const value = await schema.validateAsync(req.body);
    const alreadyUrl = await Url.findOne({ name: req.body.name });
    if (!alreadyUrl) {
      const url = await Url.create(value);
      return res.json(url);
    }
    res.send({
      isJoi: true,
      error: {
        details: [
          {
            message: "Short name is in use",
          },
        ],
      },
    });
  } catch (error) {
    res.status(500);
    res.send({
      isJoi: true,
      error: error,
    });
  }
});

router.get("/:name", async (req, res) => {
  const puny = await Url.findOne({ name: req.params.name });
  if (puny) {
    return res.redirect(puny.url);
  }
  res.redirect(`/404.html?name=${req.params.name}`);
});
module.exports = router;
