import * as React from 'preact';
import * as ReactDOM from 'preact';

class App extends React.Component<{greeting: string}, {count:number}> {
  state = {count: 0};
  render() {
      return (
          <div>
              <h2>{this.props.greeting}</h2>
              <button onClick={() => this.setState(
                {count: this.state.count+1})}>
                This button has been clicked {this.state.count} times.
              </button>
          </div>);
  }
}
ReactDOM.render(
  <App greeting="Hello, world!"/>,
  document.getElementById('app')
);