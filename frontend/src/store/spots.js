import { csrfFetch } from './csrf';

const LOAD_SPOT = "spots/LOAD";
const ADD_SPOT = "spots/ADD_SPOT";
const UPDATE_SPOT = "spots/UPDATE_SPOT";
const DELETE_SPOT = "spots/DELETE_SPOT";


const loadSpot = (spots) => ({
    type: LOAD_SPOT,
    spots,
});

const addOneSpot = (newSpot) => ({
  type: ADD_SPOT,
  newSpot,
});

const updateOneSpot = (updatedSpot) => ({
  type: UPDATE_SPOT,
  updatedSpot,
});

const deleteOneSpot = (deletedSpotId) => ({
  type: DELETE_SPOT,
  deletedSpotId,
});


export const getSpots = () => async (dispatch) => {
    const response = await csrfFetch(`/api/spots`);

    if (response.ok) {
      const spots = await response.json();
      dispatch(loadSpot(spots));
    }
};

export const createSpot = (newSpot) => async (dispatch) => {
  const response = await csrfFetch(`/api/spots`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newSpot),
  });

  if (response.ok) {
    const newSpot = await response.json();
    dispatch(addOneSpot(newSpot));
    return newSpot;
  }
};

export const updateSpot = (updateSpot) => async (dispatch) => {
  const response = await csrfFetch(`/api/spots/${updateSpot.id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(updateSpot),
  });

  if (response.ok) {
    const updatedSpot = await response.json();
    dispatch(updateOneSpot(updatedSpot));
    return updatedSpot;
  }
};

export const deleteSpot = (spotId) => async (dispatch) => {
  const response = await csrfFetch(`/api/spots/delete/${spotId}`, {
    method: "DELETE"
  });

  if (response.ok) {
    const deletedSpotId = await response.json();
    dispatch(deleteOneSpot(deletedSpotId));
  }
};

const initialState = {};


const spotsReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_SPOT: {
        const newState = {};
        action.spots.forEach((spot) => {
          newState[spot.id] = spot;
        });
        return newState;
    }
    case ADD_SPOT:{
        const newState = {...state}
        newState[action.newSpot.id] = {...action.newSpot}
        return newState;
    }
    case UPDATE_SPOT:{
      const newState = {...state}
      newState[action.updatedSpot.id] = {...action.updatedSpot}
      return newState;
    }
    case DELETE_SPOT:{
      const newState = {...state}
      delete newState[action.deletedSpotId]
      return newState;
    }
    default:
      return state;
  }
};

export default spotsReducer;
