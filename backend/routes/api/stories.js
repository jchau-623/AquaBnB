const express = require('express')
const asyncHandler = require('express-async-handler');
const { requireAuth } = require('../../utils/auth');
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');
const { Story, User } = require('../../db/models');

const router = express.Router();

const validateStory = [
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

//gets all stories from the Stories table
router.get('/', asyncHandler(async function(req, res) {
    const stories = await Story.findAll({
        include: User
    });
    return res.json(stories);
}));


//inserts a story into the Stories table
// router.post('/', requireAuth, validateStory, asyncHandler(async function(req, res) {
router.post('/', requireAuth, validateStory, asyncHandler(async function(req, res) {
      const newStory = await Story.create(req.body);
      const story = await Story.findByPk(newStory.id, {
        include: User
    });
      if(story) {
        return res.json(story);
      }
    })
  );


//edits a story
// router.put('/:id', requireAuth, validateStory, asyncHandler(async function(req, res) {
router.put('/:id', requireAuth, validateStory, asyncHandler(async function(req, res) {
  await Story.update(req.body, { where: { id: req.body.id } });
  const updatedStory = await Story.findByPk(req.body.id, {
    include: User
  });

  if(updatedStory) {
    return res.json(updatedStory);
  }
})
);

//deletes a story
router.delete('/delete/:id', requireAuth, asyncHandler(async function(req, res) {
  const storyId = req.params.id;
  const deletedStory = await Story.destroy({ where: { id: storyId } })
  if(deletedStory) {
    return res.json(storyId);
  }
})
);

module.exports = router;
