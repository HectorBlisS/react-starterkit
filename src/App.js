import React from 'react';

class App extends React.Component {
  render(){
    return(
      <div className="">
        <p>Header</p>
        {this.props.children}
      </div>
    );
  }
}


export default App;
