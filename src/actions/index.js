export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const ODDINCREMENT = 'ODDINCREMENT';
export const DELAYEDINCREMENT = 'DELAYEDINCREMENT';

// Our action creators will return
// an action packet that our reducer will
// receive. What does the action packet look like?
// Note that the action creator is not at all
// responsible for handling any of the actual
// logic of updating the central Redux store. That
// is left to the reducer(s).

export const increment = () => {
  // Fill in this function
  return {
    type:INCREMENT
  }
};

export const decrement = () => {
  // Fill in this function
  return {
    type:DECREMENT
  }
};

export const oddIncrement = () => {
  // Fill in this function
  return {
    type:ODDINCREMENT
  }
};

export const incWithDelay = () => {
  // Fill in this function
  return {
    type:DELAYEDINCREMENT
  }
};
