class MyComponent extends React.Component {
  
    render() {
      return (
          <div>
              <h1>What's up</h1>
          </div>
      );
    }
  }

const domContainer = document.querySelector('#mycomponent');
console.log(domContainer)
ReactDOM.render(React.createElement(MyComponent), domContainer);