import React from "react";
import { connect } from "react-redux";
import { Card, Skeleton, message, Button, Input } from "antd";
import { getGradedTestDetail } from "../store/actions/gradedTest";
import Hoc from "../hoc/hoc";
import {Editor} from "@tinymce/tinymce-react/lib/es2015/main/ts";

class GradedTestDetail extends React.Component {
constructor(props) {
    super(props);
    this.state = {
        markTest: ""
    };
  }

  componentDidMount() {
    if (this.props.token !== undefined && this.props.token !== null) {
      this.props.getGradedTestDetail(this.props.token, this.props.match.params.id);
    }
  }

  componentWillReceiveProps(newProps) {
    if (newProps.token !== this.props.token) {
      if (newProps.token !== undefined && newProps.token !== null) {
        this.props.getGradedTestDetail(newProps.token, this.props.match.params.id);
      }
    }
  }

  render() {
    const { currentGradedTest } = this.props;
    const { username } = this.props;
    //const id = currentGradedTest[0].student;
    //const stupid =username[id].username;
    return (
      <Hoc>
        {Object.keys(currentGradedTest).length > 0 ? (
          <Hoc>
          <Card>
          <h1>{currentGradedTest[0].title}</h1>
          <h1>{username}</h1>
            {this.props.loading ? (
              <Skeleton active />
            ) : (
              <Editor
                        apiKey="caqgz1g1ze14148861c0gwvlwwzn68pkg5bcwmkuaw3qcd1o"
                        initialValue={currentGradedTest[0].test}
                        value={currentGradedTest[0].test}
                        init={{
                            height: 500,
                            menubar: true,
                            resize: true,
                            autosave_ask_before_unload: true,
                            image_title: true,
                            automatic_uploads: false,
                            images_upload_url: 'postAcceptor.php',
                            menu: {
                                format: {
                                    title: 'Format',
                                    items: 'bold italic underline strikethrough superscript subscript codeformat | formats blockformats fontformats fontsizes align | forecolor backcolor | removeformat'
                                },
                            },
                            plugins: [
                                'link',
                                'searchreplace',
                                'searchreplace table template visualblocks wordcount',
                                'preview',
                                'print',
                                'lists',
                                'paste',
                                'advlist autolink lists link image charmap print preview anchor',
                                'searchreplace visualblocks fullscreen',
                                'insertdatetime media table paste code help wordcount'
                            ],
                            toolbar:
                                'print | undo redo | formatselect | preview searchreplace | bold italic backcolor | mybutton | alignleft aligncenter alignright alignjustify | language spellcheckdialog | bullist numlist outdent indent | help',
                        }}
                    />
            )}
            </Card>
          </Hoc>
        ) : null}
      </Hoc>
    );
  }
}

const mapStateToProps = state => {
  return {
    token: state.auth.token,
    currentGradedTest: state.gradedTest.currentGradedTest,
    loading: state.gradedTest.loading,
    username: state.auth.username,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getGradedTestDetail: (token, id) => dispatch(getGradedTestDetail(token, id)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GradedTestDetail);
