'use strict';

class Test extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    return (
   <div>
       Hi! Testing
   </div>
    );
  }
}

const domContainer = document.querySelector('#test');
ReactDOM.render(e(Test), domContainer);

