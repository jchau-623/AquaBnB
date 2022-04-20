const express = require('express')
const asyncHandler = require('express-async-handler');
const { requireAuth } = require('../../utils/auth');
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');
const { Spot, User } = require('../../db/models');

const router = express.Router();

const validateSpot = [
  check('title')
    .exists({ checkFalsy: true })
    .isLength({ min: 1 })
    .withMessage('Name cannot be blank.'),
  check('subtitle')
    .exists({ checkFalsy: true })
    .isLength({ min: 1 })
    .withMessage('Heading cannot be blank.'),
  check('body')
    .exists({ checkFalsy: true })
    .isLength({ min: 1 })
    .withMessage('Description cannot be blank.'),
  check('imageUrl')
    .notEmpty()
    .isURL({ require_protocol: false, require_host: false })
    .withMessage('Needs a valid image URL.'),
  handleValidationErrors,
];

//gets all spots from the Spots table
router.get('/', asyncHandler(async function(req, res) {
    const spots = await Spot.findAll({
        include: User
    });
    return res.json(spots);
}));


//inserts a spot into the spots table
// router.post('/', requireAuth, validateSpot, asyncHandler(async function(req, res) {
router.post('/', requireAuth, validateSpot, asyncHandler(async function(req, res) {
      const newSpot = await Spot.create(req.body);
      const spot = await Spot.findByPk(newSpot.id, {
        include: User
    });
      if(spot) {
        return res.json(spot);
      }
    })
  );


//edits a spot
// router.put('/:id', requireAuth, validateSpot, asyncHandler(async function(req, res) {
router.put('/:id', requireAuth, validateSpot, asyncHandler(async function(req, res) {
  await Spot.update(req.body, { where: { id: req.body.id } });
  const updatedSpot = await Spot.findByPk(req.body.id, {
    include: User
  });

  if(updatedSpot) {
    return res.json(updatedSpot);
  }
})
);

//deletes a spot
router.delete('/delete/:id', requireAuth, asyncHandler(async function(req, res) {
  const spotId = req.params.id;
  const deletedSpot = await Spot.destroy({ where: { id: spotId } })
  if(deletedSpot) {
    return res.json(spotId);
  }
})
);

module.exports = router;
