import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { List, Skeleton } from "antd";
import * as actions from "../store/actions/class";
import Hoc from "../hoc/hoc";

class ClassList extends React.PureComponent {
  componentDidMount() {
    if (this.props.token !== undefined && this.props.token !== null) {
      this.props.getClass(this.props.token);
    }
  }

  componentWillReceiveProps(newProps) {
    if (newProps.token !== this.props.token) {
      if (newProps.token !== undefined && newProps.token !== null) {
        this.props.getClass(newProps.token);
      }
    }
  }

  renderItem(item) {
    return (
      <Link to={`/class/${item.id}`}>
        <List.Item>{item.title}</List.Item>
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
            <h3 style={{ margin: "16px 0" }}>Class List</h3>
            <List
              size="large"
              bordered
              dataSource={this.props.class}
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
    class: state.class.class,
    loading: state.class.loading
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getClass: token => dispatch(actions.getClass(token))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ClassList);
