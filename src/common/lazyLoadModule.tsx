import * as React from "react";

class LazyLoadModule extends React.Component<any, any> {
  state = {
    error: null,
    isError: false
  };

  componentDidCatch(error: any) {
    this.setState({ isError: true, error });
  }

  render() {
    const { view } = this.props;
    const { isError } = this.state;

    // error handling case, when error boundry raise exception
    if (isError) {
      return <div>{"error loading module"}</div>;
    }

    if (view) {
      // passing location,history and match as second parimeter.
      return React.createElement(view, this.props);
    } else {
      return <div>{"loading module"}</div>;
    }
  }
}

export default LazyLoadModule;
