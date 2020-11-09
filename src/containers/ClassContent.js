import React from "react";
import { connect } from "react-redux";
import { Card, Skeleton, message } from "antd";
import { getClassDetail } from "../store/actions/class";
import Hoc from "../hoc/hoc";

const cardStyle = {
  marginTop: "20px",
  marginBottom: "20px"
};

class ClassContent extends React.Component {

  componentDidMount() {
    if (this.props.token !== undefined && this.props.token !== null) {
      this.props.getClassDetail(this.props.token, this.props.match.params.id);
    }
  }

  componentWillReceiveProps(newProps) {
    if (newProps.token !== this.props.token) {
      if (newProps.token !== undefined && newProps.token !== null) {
        this.props.getClassDetail(newProps.token, this.props.match.params.id);
      }
    }
  }

  render() {
    const { currentClass } = this.props;
    const { title } = currentClass;
    return (
      <Hoc>
        {Object.keys(currentClass).length > 0 ? (
          <Hoc>
            {this.props.loading ? (
              <Skeleton active />
            ) : (
              <Card title={title}>
                <span>
                {currentClass.content}
                </span>
              </Card>
            )}
          </Hoc>
        ) : null}
      </Hoc>
    );
  }
}

const mapStateToProps = state => {
  return {
    token: state.auth.token,
    currentClass: state.class.currentClass,
    loading: state.class.loading,
    username: state.auth.username
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getClassDetail: (token, id) => dispatch(getClassDetail(token, id)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ClassContent);
