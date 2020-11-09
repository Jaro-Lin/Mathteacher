import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../utility";

const initialState = {
  class: [],
  currentClass: {},
  error: null,
  loading: false
};

const getClassListStart = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true
  });
};

const getClassListSuccess = (state, action) => {
  return updateObject(state, {
    class: action.classes,
    error: null,
    loading: false
  });
};

const getClassListFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false
  });
};

const getClassDetailStart = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true
  });
};

const getClassDetailSuccess = (state, action) => {
  return updateObject(state, {
    currentClass: action.classs,
    error: null,
    loading: false
  });
};

const getClassDetailFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false
  });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_CLASS_LIST_START:
      return getClassListStart(state, action);
    case actionTypes.GET_CLASS_LIST_SUCCESS:
      return getClassListSuccess(state, action);
    case actionTypes.GET_CLASS_LIST_FAIL:
      return getClassListFail(state, action);
    case actionTypes.GET_CLASS_DETAIL_START:
      return getClassDetailStart(state, action);
    case actionTypes.GET_CLASS_DETAIL_SUCCESS:
      return getClassDetailSuccess(state, action);
    case actionTypes.GET_CLASS_DETAIL_FAIL:
      return getClassDetailFail(state, action);
    default:
      return state;
  }
};

export default reducer;
