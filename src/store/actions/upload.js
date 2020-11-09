import axios from "axios";
import * as actionTypes from "./actionTypes";

const homeworkListStart = () => {
  return {
    type: actionTypes.HOMEWORK_LIST_START
  };
};

const homeworkListSuccess = homework => {
  return {
    type: actionTypes.HOMEWORK_LIST_SUCCESS,
    homework
  };
};

const homeworkListFail = error => {
  return {
    type: actionTypes.HOMEWORK_LIST_FAIL,
    error: error
  };
};

export const homeworkList = token => {
  return dispatch => {
    dispatch(homeworkListStart());
    axios.defaults.headers = {
      "Content-Type": "application/json",
      Authorization: `Token ${token}`
    };
    axios
      .get("http://127.0.0.1:8000/file/homework/")
      .then(res => {
        const homework = res.data;
        dispatch(homeworkListSuccess(homework));
      })
      .catch(err => {
        dispatch(homeworkListFail());
      });
  };
};

const homeworkDownloadStart = () => {
  return {
    type: actionTypes.HOMEWORK_DOWNLOAD_START
  };
};

const homeworkDownloadSuccess = homework => {
  return {
    type: actionTypes.HOMEWORK_DOWNLOAD_SUCCESS,
    homework
  };
};

const homeworkDownloadFail = error => {
  return {
    type: actionTypes.HOMEWORK_DOWNLOAD_FAIL,
    error: error
  };
};

export const homeworkDownload = (token, file) => {
  return dispatch => {
    dispatch(homeworkDownloadStart());
    axios.defaults.headers = {
      "Content-Type": "application/json",
      Authorization: `Token ${token}`
    };
    axios
      .get(`http://127.0.0.1:8000/file/homeworkD/`, file)
      .then(res => {
        const homework = res.data;
        dispatch(homeworkDownloadSuccess(homework));
        console.log(homework);
      })
      .catch(err => {
        dispatch(homeworkDownloadFail());
      });
  };
};

const uploadHomeworkStart = () => {
  return {
    type: actionTypes.UPLOAD_HOMEWORK_START
  };
};

const uploadHomeworkSuccess = homework => {
  return {
    type: actionTypes.UPLOAD_HOMEWORK_SUCCESS,
    homework
  };
};

const uploadHomeworkFail = error => {
  return {
    type: actionTypes.UPLOAD_HOMEWORK_FAIL,
    error: error
  };
};

export const uploadHomework = (token, homework) => {
  return dispatch => {
    dispatch(uploadHomeworkStart());
    axios.defaults.headers = {
      "Content-Type": "application/json",
      Authorization: `Token ${token}`
    };
    axios
      .post(`http://127.0.0.1:8000/file/homework/`, homework)
      .then(res => {
        dispatch(uploadHomeworkSuccess());
        console.log(homework)
      })
      .catch(err => {
        dispatch(uploadHomeworkFail());
        console.log(homework)
      });
  };
};

const materialListStart = () => {
  return {
    type: actionTypes.MATERIAL_LIST_START
  };
};

const materialListSuccess = material => {
  return {
    type: actionTypes.MATERIAL_LIST_SUCCESS,
    material
  };
};

const materialListFail = error => {
  return {
    type: actionTypes.MATERIAL_LIST_FAIL,
    error: error
  };
};

export const materialList = token => {
  return dispatch => {
    dispatch(materialListStart());
    axios.defaults.headers = {
      "Content-Type": "application/json",
      Authorization: `Token ${token}`
    };
    axios
      .get("http://127.0.0.1:8000/file/material/")
      .then(res => {
        const material = res.data;
        dispatch(materialListSuccess(material));
      })
      .catch(err => {
        dispatch(materialListFail());
      });
  };
};

const materialDownloadStart = () => {
  return {
    type: actionTypes.MATERIAL_DOWNLOAD_START
  };
};

const materialDownloadSuccess = material => {
  return {
    type: actionTypes.MATERIAL_DOWNLOAD_SUCCESS,
    material
  };
};

const materialDownloadFail = error => {
  return {
    type: actionTypes.MATERIAL_DOWNLOAD_FAIL,
    error: error
  };
};

export const materialDownload = (token, file) => {
  return dispatch => {
    dispatch(materialDownloadStart());
    axios.defaults.headers = {
      "Content-Type": "application/json",
      Authorization: `Token ${token}`
    };
    axios
      .get(`http://127.0.0.1:8000/file/materialD/`, file)
      .then(res => {
        const material = res.data;
        dispatch(materialDownloadSuccess(material));
        console.log(material);
      })
      .catch(err => {
        dispatch(materialDownloadFail());
      });
  };
};

const uploadMaterialStart = () => {
  return {
    type: actionTypes.UPLOAD_MATERIAL_START
  };
};

const uploadMaterialSuccess = material => {
  return {
    type: actionTypes.UPLOAD_MATERIAL_SUCCESS,
    material
  };
};

const uploadMaterialFail = error => {
  return {
    type: actionTypes.UPLOAD_MATERIAL_FAIL,
    error: error
  };
};

export const uploadMaterial = (token, material) => {
  return dispatch => {
    dispatch(uploadMaterialStart());
    axios.defaults.headers = {
      "Content-Type": "application/json",
      Authorization: `Token ${token}`
    };
    axios
      .post(`http://127.0.0.1:8000/file/material/`, material)
      .then(res => {
        dispatch(uploadMaterialSuccess());
        console.log(material)
      })
      .catch(err => {
        dispatch(uploadMaterialFail());
        console.log(material)
      });
  };
};

const markedTestListStart = () => {
  return {
    type: actionTypes.MARKED_TEST_LIST_START
  };
};

const markedTestListSuccess = markedTest => {
  return {
    type: actionTypes.MARKED_TEST_LIST_SUCCESS,
    markedTest
  };
};

const markedTestListFail = error => {
  return {
    type: actionTypes.MARKED_TEST_LIST_FAIL,
    error: error
  };
};

export const markedTestList = (username, token) => {
  return dispatch => {
    dispatch(markedTestListStart());
    axios.defaults.headers = {
      "Content-Type": "application/json",
      Authorization: `Token ${token}`
    };
    axios
      .get(`http://127.0.0.1:8000/file/marked/?username=${username}`)
      .then(res => {
        const markedTest = res.data;
        dispatch(markedTestListSuccess(markedTest));
      })
      .catch(err => {
        dispatch(markedTestListFail());
      });
  };
};

const markedTestDownloadStart = () => {
  return {
    type: actionTypes.MARKED_TEST_DOWNLOAD_START
  };
};

const markedTestDownloadSuccess = markedTest => {
  return {
    type: actionTypes.MARKED_TEST_DOWNLOAD_SUCCESS,
    markedTest
  };
};

const markedTestDownloadFail = error => {
  return {
    type: actionTypes.MARKED_TEST_DOWNLOAD_FAIL,
    error: error
  };
};

export const markedTestDownload = (token, file) => {
  return dispatch => {
    dispatch(markedTestDownloadStart());
    axios.defaults.headers = {
      "Content-Type": "application/json",
      Authorization: `Token ${token}`
    };
    axios
      .get(`http://127.0.0.1:8000/file/markedD/`, file)
      .then(res => {
        const markedTest = res.data;
        dispatch(markedTestDownloadSuccess(markedTest));
        console.log(markedTest);
      })
      .catch(err => {
        dispatch(markedTestDownloadFail());
      });
  };
};

const uploadMarkedTestStart = () => {
  return {
    type: actionTypes.UPLOAD_MARKED_TEST_START
  };
};

const uploadMarkedTestSuccess = markedTest => {
  return {
    type: actionTypes.UPLOAD_MARKED_TEST_SUCCESS,
    markedTest
  };
};

const uploadMarkedTestFail = error => {
  return {
    type: actionTypes.UPLOAD_MARKED_TEST_FAIL,
    error: error
  };
};

export const uploadMarkedTest = (token, markedTest) => {
  return dispatch => {
    dispatch(uploadMarkedTestStart());
    axios.defaults.headers = {
      "Content-Type": "application/json",
      Authorization: `Token ${token}`
    };
    axios
      .post(`http://127.0.0.1:8000/file/marked/`, markedTest)
      .then(res => {
        dispatch(uploadMarkedTestSuccess());
        console.log(markedTest)
      })
      .catch(err => {
        dispatch(uploadMarkedTestFail());
        console.log(markedTest)
      });
  };
};

const getMarksListStart = () => {
  return {
    type: actionTypes.MARKS_LIST_START
  };
};

const getMarksListSuccess = mark => {
  return {
    type: actionTypes.MARKS_LIST_SUCCESS,
    mark
  };
};

const getMarksListFail = error => {
  return {
    type: actionTypes.MARKS_LIST_FAIL,
    error: error
  };
};

export const getMarksList = (username, token) => {
  return dispatch => {
    dispatch(getMarksListStart());
    axios.defaults.headers = {
      "Content-Type": "application/json",
      Authorization: `Token ${token}`
    };
    axios
      .get(`http://127.0.0.1:8000/file/marks/?username=${username}`)
      .then(res => {
        const mark = res.data;
        dispatch(getMarksListSuccess(mark));
        console.log(mark);
      })
      .catch(err => {
        dispatch(getMarksListFail(err));
        console.log("mark");
      });
  };
};

const uploadMarksStart = () => {
  return {
    type: actionTypes.UPLOAD_MARKS_START
  };
};

const uploadMarksSuccess = mark => {
  return {
    type: actionTypes.UPLOAD_MARKS_SUCCESS,
    mark
  };
};

const uploadMarksFail = error => {
  return {
    type: actionTypes.UPLOAD_MARKS_FAIL,
    error: error
  };
};

export const uploadMarks = (token, mark) => {
  return dispatch => {
    dispatch(uploadMarksStart());
    axios.defaults.headers = {
      "Content-Type": "application/json",
      Authorization: `Token ${token}`
    };
    axios
      .post(`http://127.0.0.1:8000/file/marks/`, mark)
      .then(res => {
        dispatch(uploadMarkedTestSuccess());
        console.log(mark)
      })
      .catch(err => {
        dispatch(uploadMarkedTestFail());
        console.log("mark")
      });
  };
};
