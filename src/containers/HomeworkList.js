import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { List, Skeleton } from "antd";
import * as actions from "../store/actions/upload";
import Hoc from "../hoc/hoc";
import { homeworkDownload } from "../store/actions/upload";

class HomeworkList extends React.PureComponent {
  componentDidMount() {
    if (this.props.token !== undefined && this.props.token !== null) {
      this.props.homeworkList(this.props.token);
    }
  }

  componentWillReceiveProps(newProps) {
    if (newProps.token !== this.props.token) {
      if (newProps.token !== undefined && newProps.token !== null) {
        this.props.homeworkList(newProps.token);
      }
    }
  }

  renderItem(item) {
    return (
      <Link to={`/homework`} onClick={() => this.props.homeworkDownload(this.props.token, item.file)}>
        <List.Item>{item.file}</List.Item>
      </Link>
    );
  }

  render() {
    return (
      <Hoc>
        {this.props.loading ? (
          <Skeleton active />
        ) : (
          <div>
            <h3 style={{ margin: "16px 0" }}>Homework List</h3>
            <List
              size="large"
              bordered
              dataSource={this.props.homework}
              renderItem={item => this.renderItem(item)}
            />
          </div>
        )}
      </Hoc>
    );
  }
}

const mapStateToProps = state => {
  return {
    token: state.auth.token,
    homework: state.upload.homework,
    loading: state.upload.loading
  };
};

const mapDispatchToProps = dispatch => {
  return {
    homeworkList: token => dispatch(actions.homeworkList(token)),
    homeworkDownload: (token, file) => dispatch(homeworkDownload(token, file))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeworkList);
