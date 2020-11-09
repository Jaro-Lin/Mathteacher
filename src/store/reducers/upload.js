import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../utility";

const initialState = {
  homework: [],
  currentHomework: {},
  material: [],
  currentMaterial: {},
  markedTest: [],
  currentMarkedTest: {},
  mark: [],
  currentMarks: {},
  error: null,
  loading: false
};

const homeworkListStart = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true
  });
};

const homeworkListSuccess = (state, action) => {
  return updateObject(state, {
    homework: action.homework,
    error: null,
    loading: false
  });
};

const homeworkListFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false
  });
};

const homeworkDownloadStart = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true
  });
};

const homeworkDownloadSuccess = (state, action) => {
  return updateObject(state, {
    currentHomework: action.homework,
    error: null,
    loading: false
  });
};

const homeworkDownloadFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false
  });
};

const uploadHomeworkStart = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true
  });
};

const uploadHomeworkSuccess = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: false
  });
};

const uploadHomeworkFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false
  });
};

const materialListStart = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true
  });
};

const materialListSuccess = (state, action) => {
  return updateObject(state, {
    material: action.material,
    error: null,
    loading: false
  });
};

const materialListFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false
  });
};

const materialDownloadStart = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true
  });
};

const materialDownloadSuccess = (state, action) => {
  return updateObject(state, {
    currentMaterial: action.material,
    error: null,
    loading: false
  });
};

const materialDownloadFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false
  });
};

const uploadMaterialStart = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true
  });
};

const uploadMaterialSuccess = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: false
  });
};

const uploadMaterialFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false
  });
};

const markedTestListStart = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true
  });
};

const markedTestListSuccess = (state, action) => {
  return updateObject(state, {
    markedTest: action.markedTest,
    error: null,
    loading: false
  });
};

const markedTestListFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false
  });
};

const markedTestDownloadStart = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true
  });
};

const markedTestDownloadSuccess = (state, action) => {
  return updateObject(state, {
    currentMarkedTest: action.markedTest,
    error: null,
    loading: false
  });
};

const markedTestDownloadFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false
  });
};

const uploadMarkedTestStart = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true
  });
};

const uploadMarkedTestSuccess = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: false
  });
};

const uploadMarkedTestFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false
  });
};

const marksListStart = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true
  });
};

const marksListSuccess = (state, action) => {
  return updateObject(state, {
    mark: action.mark,
    error: null,
    loading: false
  });
};

const marksListFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false
  });
};

const marksDownloadStart = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true
  });
};

const marksDownloadSuccess = (state, action) => {
  return updateObject(state, {
    currentMarks: action.mark,
    error: null,
    loading: false
  });
};

const marksDownloadFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false
  });
};

const uploadMarksStart = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true
  });
};

const uploadMarksSuccess = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: false
  });
};

const uploadMarksFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false
  });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.HOMEWORK_LIST_START:
      return homeworkListStart(state, action);
    case actionTypes.HOMEWORK_LIST_SUCCESS:
      return homeworkListSuccess(state, action);
    case actionTypes.HOMEWORK_LIST_FAIL:
      return homeworkListFail(state, action);
    case actionTypes.HOMEWORK_DOWNLOAD_START:
      return homeworkDownloadStart(state, action);
    case actionTypes.HOMEWORK_DOWNLOAD_SUCCESS:
      return homeworkDownloadSuccess(state, action);
    case actionTypes.HOMEWORK_DOWNLOAD_FAIL:
      return homeworkDownloadFail(state, action);
    case actionTypes.UPLOAD_HOMEWORK_START:
      return uploadHomeworkStart(state, action);
    case actionTypes.UPLOAD_HOMEWORK_SUCCESS:
      return uploadHomeworkSuccess(state, action);
    case actionTypes.UPLOAD_HOMEWORK_FAIL:
      return uploadHomeworkFail(state, action);
    case actionTypes.MATERIAL_LIST_START:
      return materialListStart(state, action);
    case actionTypes.MATERIAL_LIST_SUCCESS:
      return materialListSuccess(state, action);
    case actionTypes.MATERIAL_LIST_FAIL:
      return materialListFail(state, action);
    case actionTypes.MATERIAL_DOWNLOAD_START:
      return materialDownloadStart(state, action);
    case actionTypes.MATERIAL_DOWNLOAD_SUCCESS:
      return materialDownloadSuccess(state, action);
    case actionTypes.MATERIAL_DOWNLOAD_FAIL:
      return materialDownloadFail(state, action);
    case actionTypes.UPLOAD_MATERIAL_START:
      return uploadMaterialStart(state, action);
    case actionTypes.UPLOAD_MATERIAL_SUCCESS:
      return uploadMaterialSuccess(state, action);
    case actionTypes.UPLOAD_MATERIAL_FAIL:
      return uploadMaterialFail(state, action);
    case actionTypes.MARKED_TEST_LIST_START:
      return markedTestListStart(state, action);
    case actionTypes.MARKED_TEST_LIST_SUCCESS:
      return markedTestListSuccess(state, action);
    case actionTypes.MARKED_TEST_LIST_FAIL:
      return markedTestListFail(state, action);
    case actionTypes.MARKED_TEST_DOWNLOAD_START:
      return markedTestDownloadStart(state, action);
    case actionTypes.MARKED_TEST_DOWNLOAD_SUCCESS:
      return markedTestDownloadSuccess(state, action);
    case actionTypes.MARKED_TEST_DOWNLOAD_FAIL:
      return markedTestDownloadFail(state, action);
    case actionTypes.UPLOAD_MARKED_TEST_START:
      return uploadMarkedTestStart(state, action);
    case actionTypes.UPLOAD_MARKED_TEST_SUCCESS:
      return uploadMarkedTestSuccess(state, action);
    case actionTypes.UPLOAD_MARKED_TEST_FAIL:
      return uploadMarkedTestFail(state, action);
    case actionTypes.MARKS_LIST_START:
      return marksListStart(state, action);
    case actionTypes.MARKS_LIST_SUCCESS:
      return marksListSuccess(state, action);
    case actionTypes.MARKS_LIST_FAIL:
      return marksListFail(state, action);
    case actionTypes.MARKS_DOWNLOAD_START:
      return marksDownloadStart(state, action);
    case actionTypes.MARKS_DOWNLOAD_SUCCESS:
      return marksDownloadSuccess(state, action);
    case actionTypes.MARKS_DOWNLOAD_FAIL:
      return marksDownloadFail(state, action);
    case actionTypes.UPLOAD_MARKS_START:
      return uploadMarksStart(state, action);
    case actionTypes.UPLOAD_MARKS_SUCCESS:
      return uploadMarksSuccess(state, action);
    case actionTypes.UPLOAD_MARKS_FAIL:
      return uploadMarksFail(state, action);
    default:
      return state;
  }
};

export default reducer;
