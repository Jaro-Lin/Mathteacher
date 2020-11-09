import axios from "axios";
import * as actionTypes from "./actionTypes";

const getClassListStart = () => {
  return {
    type: actionTypes.GET_CLASS_LIST_START
  };
};

const getClassListSuccess = classes => {
  return {
    type: actionTypes.GET_CLASS_LIST_SUCCESS,
    classes
  };
};

const getClassListFail = error => {
  return {
    type: actionTypes.GET_CLASS_LIST_FAIL,
    error: error
  };
};

export const getClass = token => {
  return dispatch => {
    dispatch(getClassListStart());
    axios.defaults.headers = {
      "Content-Type": "application/json",
      Authorization: `Token ${token}`
    };
    axios
      .get("http://127.0.0.1:8000/class/")
      .then(res => {
        const classes = res.data;
        dispatch(getClassListSuccess(classes));
      })
      .catch(err => {
        dispatch(getClassListFail());
      });
  };
};

const getClassDetailStart = () => {
  return {
    type: actionTypes.GET_CLASS_DETAIL_START
  };
};

const getClassDetailSuccess = classs => {
  return {
    type: actionTypes.GET_CLASS_DETAIL_SUCCESS,
    classs
  };
};

const getClassDetailFail = error => {
  return {
    type: actionTypes.GET_CLASS_DETAIL_FAIL,
    error: error
  };
};

export const getClassDetail = (token, id) => {
  return dispatch => {
    dispatch(getClassDetailStart());
    axios.defaults.headers = {
      "Content-Type": "application/json",
      Authorization: `Token ${token}`
    };
    axios
      .get(`http://127.0.0.1:8000/class/${id}/`)
      .then(res => {
        const classs = res.data;
        dispatch(getClassDetailSuccess(classs));
      })
      .catch(err => {
        dispatch(getClassDetailFail());
      });
  };
};
