import React from "react";
import Lnb from "../components/Lnb";

class ACSC04 extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      txtValue1: "",
      txtValue2: "",
      txtValue3: "",
    };
  }

  render() {
    const { txtValue1, txtValue2, txtValue3 } = this.state;
    return (
      <div>
        <Lnb title="Contact" column="Home > Contact" />

        <input
          type="text"
          name="txtValue1"
          value={txtValue1}
          onChange={this._txtHandler}
        />
        <input
          type="text"
          name="txtValue2"
          value={txtValue2}
          onChange={this._txtHandler}
        />
        <input
          type="text"
          name="txtValue3"
          value={txtValue3}
          onChange={this._txtHandler}
        />
        <input type="button" value="확인" onClick={this._btnHandler} />
      </div>
    );
  }

  _txtHandler = (event) => {
    let nextState = {};
    nextState[event.target.name] = event.target.value;

    this.setState(nextState);
  };

  _btnHandler = () => {
    const { txtValue1, txtValue2, txtValue3 } = this.state;

    console.log(txtValue1);
    console.log(txtValue2);
    console.log(txtValue3);
  };
}

export default ACSC04;
