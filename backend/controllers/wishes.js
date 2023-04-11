const { v4: uuidv4 } = require("uuid");
const Wish = require("../models/wish");

const addWish = async (req, res) => {
  const { wishTitle } = req.body;
  const wishId = uuidv4();

  try {
    const wishToAdd = new Wish({
      wishTitle,
      wishId,
    });

    await wishToAdd.save();

    return res.status(200).json({
      ok: true,
      wishTitle: wishToAdd,
    });
  } catch (error) {
    return res.status(503).json({
      ok: false,
      msg: "Oops, try one more time o later...",
    });
  }
};

const getWishes = async (req, res) => {
  try {
    const wishes = await Wish.find();

    return res.status(200).json({ ok: true, wishes });
  } catch (error) {
    return res.status(503).json({ ok: false, msg: "Oops, try one more time o later..." });
  }
};

const deleteWish = async (req, res) => {
  const { id } = req.params;

  try {
    const found = await Wish.deleteOne({ wishId: id });

    return res.status(200).json({
      ok: true,
      msg: "Deleted with success",
    });
  } catch (error) {
    res.status(503).json({ ok: false, msg: "Oops, try one more time o later..." });
  }
};

const updatewish = async (req, res) => {
  const { wishId, wishTitle } = req.body;

  try {
    await Wish.findOneAndUpdate({
      wishId: wishId,
      wishTitle: wishTitle,
    });
    return res.status(200).json({
      ok: true,
      msg: "Updated with success",
    });
  } catch (error) {
    res.status(503).json({ ok: false, msg: "Oops, try one more time o later..." });
  }
};

module.exports = { addWish, getWishes, deleteWish, updatewish };