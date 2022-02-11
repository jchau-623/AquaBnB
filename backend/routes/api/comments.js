const express = require('express')
const asyncHandler = require('express-async-handler');
const { requireAuth } = require('../../utils/auth');
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');
const { Story, User, Comment } = require('../../db/models');

const router = express.Router();

const validateComment = [
  check('body')
    .exists({ checkFalsy: true })
    .isLength({ min: 1 })
    .withMessage('Comment cannot be empty.'),
  handleValidationErrors,
];

//gets all comments from the Comments table
router.get('/', asyncHandler(async function(req, res) {
    const comments = await Comment.findAll({
        include: [User, Story]
    });
    return res.json(comments);
}));


//inserts a comment into the Comments table
router.post('/', requireAuth, asyncHandler(async function(req, res) {
    const newComment = await Comment.create(req.body);
    const comment = await Comment.findByPk(newComment.id, {
      include: [User, Story]
  });
    if(comment) {
      return res.json(comment);
    }
  })
);

//edits a comment
router.put('/:id', requireAuth, validateComment, asyncHandler(async function(req, res) {
    await Comment.update(req.body, { where: { id: req.body.id } });
    const updatedComment = await Comment.findByPk(req.body.id, {
      include: [User, Story]
    });

    if(updatedComment) {
      return res.json(updatedComment);
    }
  })
  );


//deletes a comment
router.delete('/delete/:id', requireAuth, asyncHandler(async function(req, res) {
    const commentId = req.params.id;
    const deletedComment = await Comment.destroy({ where: { id: commentId } })
    if(deletedComment) {
      return res.json(commentId);
    }
  })
  );


module.exports = router;
