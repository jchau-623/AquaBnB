const express = require("express");
const asyncHandler = require("express-async-handler");
const { requireAuth } = require('../../utils/auth')
const { check } = require("express-validator");
const { handleValidationErrors } = require("../../utils/validation");
const { Review } = require("../../db/models");
const router = express.Router();


const validateNewReview = [
    check("description")
        .notEmpty()
        .withMessage("Please write a review we would love to hear it!"),
    check("description")
        .isLength({ max: 256 })
        .withMessage("Review cannot be longer than 256 characters"),
    check("rating")
        .notEmpty(),
    handleValidationErrors,
]

const editReviewValidations = [
    check("description")
        .notEmpty()
        .withMessage("Please write a review we would love to hear it!"),
    check("description")
        .isLength({ max: 256 })
        .withMessage("Review cannot be longer than 256 characters"),
    check("rating")
        .notEmpty(),
    handleValidationErrors,
]
// Review Routes
// ALL reviews of the business
router.get("/", requireAuth, asyncHandler(async function (_req, res) {
    const reviews = await Review.findAll();
    return res.json(reviews);
})
);

// Get a single review
router.get("/:id(\\d+)", requireAuth, asyncHandler(async function (req, res) {
    const reviewId = req.params.id
    const review = await Review.findByPk(reviewId)
    return res.json(review)
})
)

// Post a new review
router.post("/", requireAuth, asyncHandler(async function (req, res) {
    const { rating, spotId, userId, description } = req.body;
    const newReview = await Review.create({
        rating,
        spotId,
        userId,
        description
    })
    return res.json(newReview)

}))
// Edit review
router.put(
    "/:id",
    requireAuth, editReviewValidations,
    asyncHandler(async function (req, res) {
        const id = req.params.id;
        const review = await Review.findByPk(id)
        const { rating, userId, businessId, description } = req.body
        const newReview = await review.update({
            id,
            userId,
            businessId,
            rating,
            description
        })
        return res.json(newReview)
        // const {answer, businessId, userId} = req.body;
        // const reviewToUpdate = {
        //     answer, businessId, userId
        // }
        // const review = await Review.findByPk(req.params.id)
        // const updatedReview = await review.update(reviewToUpdate)
        // return res.json({updatedReview})
    })
)


// Delete review

router.delete(
    "/:id",
    requireAuth,
    asyncHandler(async function (req, res) {
        const review = await Review.findByPk(req.params.id)
        if (!review) throw Error("That review does not exist!")
        await Review.destroy({ where: { id: review.id } })
        // const destroyed = await Review.destroy({where: {id: req.params.id}})
        // if (destroyed) {
        //     return res.json({ message: "Destroyed" });
        // } else {
        //     return res.json({ message: "Failed" });
        // }
    })
)

module.exports = router
