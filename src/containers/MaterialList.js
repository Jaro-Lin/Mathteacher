import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { List, Skeleton } from "antd";
import * as actions from "../store/actions/upload";
import Hoc from "../hoc/hoc";
import { materialDownload } from "../store/actions/upload";

class MaterialList extends React.PureComponent {
  componentDidMount() {
    if (this.props.token !== undefined && this.props.token !== null) {
      this.props.materialList(this.props.token);
    }
  }

  componentWillReceiveProps(newProps) {
    if (newProps.token !== this.props.token) {
      if (newProps.token !== undefined && newProps.token !== null) {
        this.props.materialList(newProps.token);
      }
    }
  }

  renderItem(item) {
    return (
      <Link to={`/material`} onClick={() => this.props.materialDownload(this.props.token, item.file)}>
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
            <h3 style={{ margin: "16px 0" }}>Material List</h3>
            <List
              size="large"
              bordered
              dataSource={this.props.material}
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
    material: state.upload.material,
    loading: state.upload.loading
  };
};

const mapDispatchToProps = dispatch => {
  return {
    materialList: token => dispatch(actions.materialList(token)),
    materialDownload: (token, file) => dispatch(materialDownload(token, file))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MaterialList);
