import { csrfFetch } from './csrf'
const GET_ALL_REVIEWS = 'reviews/GET_ALL_REVIEWS'
const GET_REVIEW = 'review/GET_REVIEW'
const ADD_REVIEW = 'reviews/ADD_REVIEW'
const EDIT_REVIEW = 'reviews/EDIT_REVIEW'
const DELETE_REVIEW = 'reviews/DELETE_REVIEW'


const getReviews = list => ({
    type: GET_ALL_REVIEWS,
    list,
})


const getAReview = list => ({
    type: GET_REVIEW,
    list,
})


const addAReview = list => ({
    type: ADD_REVIEW,
    list,
})



const editReviews = data => ({
    type: EDIT_REVIEW,
    data
})


const deleteAReview = list => ({
    type: DELETE_REVIEW,
    list
})

// Get all Reviews
export const getAllReviews = () => async (dispatch) => {
    const response = await csrfFetch(`/api/reviews`);

    if (response.ok) {
        const reviews = await response.json();
        dispatch(getReviews(reviews));
    }
};
// Get One Review
export const getOneReview = (id) => async dispatch => {
    const response = await csrfFetch(`/api/reviews/${id}`)

    if (response.ok) {
        const review = await response.json()
        dispatch(getAReview(review))
    }
}
// Add a Review
export const addReview = (noList) => async dispatch => {
    const response = await csrfFetch(`api/reviews/`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(noList)
    })
    if (!response.ok) {
        let error = await response.json()
        return error
    }
    const list = await list.json()
    await dispatch(addAReview(list));
    return list;
}

// Edit a Review
export const editReview = (data) => async (dispatch) => {
    const response = await csrfFetch(`/api/reviews/${data.id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    if (response.ok) {
        const review = await response.json()
        dispatch(editReviews(data))
        return data
    }
}

// Delete a Review
export const deleteReview = (id) => async dispatch => {
    const response = await csrfFetch(`/api/reviews/${id}`, {
        method: 'DELETE'
    })
    if (response.ok) {
        const review = await response.json()
        dispatch(deleteAReview(review.id))
        return review
    }
}

const intitalState = {}

const reviewReducer = (state = intitalState, action) => {

    switch (action.type) {
        case GET_ALL_REVIEWS:
            const allReviews = {};
            action.list.forEach(review => {
                allReviews[review.id] = review;
            });
            return {
                ...allReviews,
                // ...state.list,
                // list: action.list
            }
        case GET_REVIEW: {
            const newState = {
                ...state,
                [action.list.id]: action.list
            };
            return newState;
        }
        case ADD_REVIEW: {
            return {
                ...state,
                [action.list.id]: {
                    ...state[action.list.id],
                    // ...action.list
                }
            }
        }
        case EDIT_REVIEW: {
            return {
                ...state,
                    [action.review.id]: action.review
                }
        }
        case DELETE_REVIEW: {
            const newState = {...state};
            delete newState[action.id]
            return newState
        }

        default:
            return state;
    }
}
export default reviewReducer;
