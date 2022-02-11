import { csrfFetch } from './csrf';

const LOAD_COMMENTS = "comments/LOAD";
const ADD_COMMENT = "comments/ADD_COMMENT";
const UPDATE_COMMENT = "comments/UPDATE_COMMENT";
const DELETE_COMMENT = "comments/DELETE_COMMENT";


const loadComments = (comments) => ({
    type: LOAD_COMMENTS,
    comments,
});

const addOneComment = (newComment) => ({
  type: ADD_COMMENT,
  newComment,
});

const updateOneComment = (updatedComment) => ({
  type: UPDATE_COMMENT,
  updatedComment,
});

const deleteOneComment = (deletedCommentId) => ({
  type: DELETE_COMMENT,
  deletedCommentId,
});


export const getComments = () => async (dispatch) => {
    const response = await csrfFetch(`/api/comments`);

    if (response.ok) {
      const comments = await response.json();
      dispatch(loadComments(comments));
    }
};

export const createComment = (newComment) => async (dispatch) => {
  const response = await csrfFetch(`/api/comments`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newComment),
  });

  if (response.ok) {
    const newComment = await response.json();
    dispatch(addOneComment(newComment));
    return newComment;
  }
};

export const updateComment = (updateComment) => async (dispatch) => {
  const response = await csrfFetch(`/api/comments/${updateComment.id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(updateComment),
  });

  if (response.ok) {
    const updatedComment = await response.json();
    dispatch(updateOneComment(updatedComment));
    return updatedComment;
  }
};


export const deleteComment = (commentId) => async (dispatch) => {
  const response = await csrfFetch(`/api/comments/delete/${commentId}`, {
    method: "DELETE"
  });

  if (response.ok) {
    const deletedCommentId = await response.json();
    dispatch(deleteOneComment(deletedCommentId));
  }
};


const initialState = {};


const commentsReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_COMMENTS: {
        const newState = {};
        action.comments.forEach((comment) => {
          newState[comment.id] = comment;
        });
        return newState;
    }
    case ADD_COMMENT:{
        const newState = {...state}
        newState[action.newComment.id] = {...action.newComment}
        return newState;
    }
    case UPDATE_COMMENT:{
      const newState = {...state}
      newState[action.updatedComment.id] = {...action.updatedComment}
      return newState;
    }
    case DELETE_COMMENT:{
      const newState = {...state}
      delete newState[action.deletedCommentId]
      return newState;
    }
    default:
    return state;
    }
};

export default commentsReducer;
