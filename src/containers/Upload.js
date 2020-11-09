import React, { Component } from 'react';
import { Upload, Icon, message, Input, InputNumber, Button, Form } from 'antd';
import { connect } from "react-redux";
import Hoc from "../hoc/hoc";
import * as actions from "../store/actions/auth";
import { uploadHomework, uploadMaterial, uploadMarkedTest, uploadMarks } from "../store/actions/upload";

const { Dragger } = Upload;
const FormItem = Form.Item;

class Uploads extends Component {
  state = {
    homework: {},
    mark: {},
    material: {},
    marked: {},
  };

  handleHomeworkChange = ({ fileList }) => {
    console.log('fileList', fileList);
    const formData = new FormData();
    formData.append('file', fileList[0].originFileObj);
    this.setState({ homework: formData });
  };

  handleHomeworkUpload = () => {
    const { homework } = this.state;
    this.props.uploadHomework(this.props.token, homework);
  };

  handleMaterialChange = ({ fileList }) => {
    console.log('fileList', fileList);
    const formData = new FormData();
    formData.append('file', fileList[0].originFileObj);
    this.setState({ material: formData });
  };

  handleMaterialUpload = () => {
    const { material } = this.state;
    this.props.uploadMaterial(this.props.token, material);
  };

  handleMarkedTestChange = ({ fileList }) => {
    console.log('fileList', fileList);
    const formData = new FormData();
    formData.append('file', fileList[0].originFileObj);
    this.setState({ marked: formData });
  };

  handleMarkedTestUpload = e => {
    e.preventDefault();
    const { marked } = this.state;
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log("Received title of form: ", values);
        const markedTest = {
          student: values.studentName,
          grade: values.mark,
          file: marked
        };
        this.props.uploadMarkedTest(this.props.token, markedTest);
      }
    });
  };

  handleMarkUpload = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log("Received title of form: ", values);
        const mark = {
          student: values.studentName,
          grade: values.mark
        };
        this.props.uploadMarks(this.props.token, mark);
      }
    });
  };

render() {
    const { getFieldDecorator } = this.props.form;
    const { homework, material, markedTest } = this.state;
    const Hprops = {
      onRemove: file => {
        this.setState(state => {
          const index = state.homework.indexOf(file);
          const newFileList = state.homework.slice();
          newFileList.splice(index, 1);
          return {
            homework: newFileList,
          };
        });
      },
      beforeUpload: file => {
        this.setState(state => ({
          homework: [...state.homework, file],
        }));
        return false;
      },
      homework,
    };
    const Mprops = {
      onRemove: file => {
        this.setState(state => {
          const index = state.material.indexOf(file);
          const newFileList = state.material.slice();
          newFileList.splice(index, 1);
          return {
            material: newFileList,
          };
        });
      },
      beforeUpload: file => {
        this.setState(state => ({
          material: [...state.material, file],
        }));
        return false;
      },
      material,
    };
    const Tprops = {
      onRemove: file => {
        this.setState(state => {
          const index = state.markedTest.indexOf(file);
          const newFileList = state.markedTest.slice();
          newFileList.splice(index, 1);
          return {
            markedTest: newFileList,
          };
        });
      },
      beforeUpload: file => {
        this.setState(state => ({
          markedTest: [...state.markedTest, file],
        }));
        return false;
      },
      markedTest,
    };
    return (
    <Hoc>
    <Form>
    {this.props.is_teacher ? (<FormItem>
    <h1>HomeworkMark</h1>
    <FormItem>
    {getFieldDecorator(`studentName`, {
                        validateTrigger: ["onChange", "onBlur"],
                        rules: [
                        {
                            required: true,
                            message: "Please input student name"
                        }
                        ]
                    })(<Input placeholder="Student Name" />)}</FormItem>
    <FormItem>
    {getFieldDecorator(`mark`, {
                        validateTrigger: ["onChange", "onBlur"],
                        rules: [
                        {
                            required: true,
                            message: "Please input mark"
                        }
                        ]
                    })(<span><InputNumber min={0} max={100} defaultValue={0}/>%</span>)}</FormItem>
    <div>
    <Button
          type="primary"
          onClick={this.handleMarkUpload}
          style={{ marginTop: 16 }}
        >
     SubmitHomeworkMark
    </Button></div>
    </FormItem>) : null}
    {this.props.is_teacher ? null : (<FormItem>
    <h1>Homework</h1>
    <div>
    <Dragger onChange={this.handleHomeworkChange} {...Hprops}>
    <p className="ant-upload-drag-icon">
      <Icon type="inbox" />
    </p>
    <p className="ant-upload-text">Click or drag file to this area to upload</p>
    <p className="ant-upload-hint">
      Support for a single or bulk upload.
    </p>
    </Dragger>
    <Button
          type="primary"
          onClick={this.handleHomeworkUpload}
          style={{ marginTop: 16 }}
        >
     SubmitHomework
    </Button>
    </div>
    </FormItem>)}
    {this.props.is_teacher ? (<FormItem>
    <h1>Materials</h1>
    <div>
    <Dragger onChange={this.handleMaterialChange} {...Mprops}>
    <p className="ant-upload-drag-icon">
      <Icon type="inbox" />
    </p>
    <p className="ant-upload-text">Click or drag file to this area to upload</p>

    <p className="ant-upload-hint">
      Support for a single or bulk upload.
    </p>
    </Dragger>
    <Button
          type="primary"
          onClick={this.handleMaterialUpload}
          style={{ marginTop: 16 }}
        >
     SubmitMaterials
    </Button>
    </div>
    </FormItem>) : null}
    {this.props.is_teacher ? (<FormItem>
    <h1>MarkedTest</h1>
    <FormItem>
    {getFieldDecorator(`studentName`, {
                        validateTrigger: ["onChange", "onBlur"],
                        rules: [
                        {
                            required: true,
                            message: "Please input student name"
                        }
                        ]
                    })(<Input placeholder="Student Name" />)}</FormItem>
    <FormItem>
    {getFieldDecorator(`mark`, {
                        validateTrigger: ["onChange", "onBlur"],
                        rules: [
                        {
                            required: true,
                            message: "Please input mark"
                        }
                        ]
                    })(<span><InputNumber min={0} max={100} defaultValue={0}/>%</span>)}</FormItem>
    <div>
    <Dragger onChange={this.handleMarkedTestChange} {...Tprops}>
    <p className="ant-upload-drag-icon">
      <Icon type="inbox" />
    </p>
    <p className="ant-upload-text">Click or drag file to this area to upload</p>
    <p className="ant-upload-hint">
      Support for a single or bulk upload.
    </p>
    </Dragger>
    <Button
          type="primary"
          onClick={this.handleMarkedTestUpload}
          style={{ marginTop: 16 }}
        >
     SubmitMarkedTest
    </Button>
    </div>
    </FormItem>) : null}
    </Form>
    </Hoc>
    );
  }
}

const WrappedUploads = Form.create()(Uploads);

const mapStateToProps = state => {
  return {
    userId: state.auth.userId,
    token: state.auth.token,
    is_teacher: state.auth.is_teacher
  };
};

const mapDispatchToProps = dispatch => {
  return {
    uploadHomework: (token, homework) => dispatch(uploadHomework(token, homework)),
    uploadMaterial: (token, material) => dispatch(uploadMaterial(token, material)),
    uploadMarkedTest: (token, markedTest) => dispatch(uploadMarkedTest(token, markedTest)),
    uploadMarks: (token, mark) => dispatch(uploadMarks(token, mark))
  };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(WrappedUploads);