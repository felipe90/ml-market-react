import React, { Component } from "react";
import { Message } from "primereact/message";

class ErrorBoundary extends Component {
  state = {
    hasError: false,
    errorMsg: "",
  };

  componentDidCatch = (error, info) => {
    this.setState({ hasError: true, errorMsg: error });
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="p-col-12 p-md-3">
          <Message severity="error" text={this.state.errorMsg} />
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
