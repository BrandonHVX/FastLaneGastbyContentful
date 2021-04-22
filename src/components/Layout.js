import React from "react";

import "../styles/scss/style.scss";

import Navigation from "./navigation";

class Template extends React.Component {
  render() {
    const { children } = this.props;

    return (
      <div>
        <Navigation />
        {children}
      </div>
    );
  }
}

export default Template;
