import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { List, Skeleton } from "antd";
import * as actions from "../store/actions/gradedTest";
import Hoc from "../hoc/hoc";

class GradedTestList extends React.PureComponent {
  componentDidMount() {
    if (this.props.token !== undefined && this.props.token !== null) {
      this.props.getGradedTest(this.props.token);
    }
  }

  componentWillReceiveProps(newProps) {
    if (newProps.token !== this.props.token) {
      if (newProps.token !== undefined && newProps.token !== null) {
        this.props.getGradedTest(newProps.token);
      }
    }
  }

  renderItem(item) {
    return (
      <Link to={`/gradedTest/${item.id}`}>
        <List.Item>{item.title}{item.username}</List.Item>
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
            <h3 style={{ margin: "16px 0" }}>Graded Test List</h3>

            <List
              size="large"
              bordered
              dataSource={this.props.graded_test}
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
    graded_test: state.gradedTest.graded_test,
    loading: state.gradedTest.loading
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getGradedTest: token => dispatch(actions.getGradedTest(token))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GradedTestList);
