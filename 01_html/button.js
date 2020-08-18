"use strict";

const e = React.createElement;

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      liked: false,
    };

    this.data = {
      name: "Gabriel",
    };
  }

  render() {
    if (this.state.liked) {
      return "Soy un texto";
    }

    return e(
      "button",
      { onClick: () => this.setState({ liked: true }) },
      "Like"
    );
  }
}

const domContainer = document.querySelector("#myButton");
ReactDOM.render(e(LikeButton), domContainer);
