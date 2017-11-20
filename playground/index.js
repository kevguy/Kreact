const React = require('../dist/kreact').default.React
const ReactDOM = require('../dist/kreact').default.ReactDOM

console.info(React)
console.info(React.version)


// class ChildComponent extends React.Component {
//   // constructor(props) {
//   //   super(props)
//   // }
//   render() {
//     return (
//       <div>{this.props.childMeessage}</div>
//     )
//   }
// }
//
// class ExampleApplication extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = { message: 'no message' }
//   }
//
//   componentWillMount() {}
//   componentDidMount() {
//     /* setTimeout(()=> {
//         this.setState({ message: 'timeout state message' });
//     }, 1000); */
//   }
//   shouldComponentUpdate(nextProps, nextState, nextContext) {
//     return true
//   }
//   componentWillReceiveProps(nextProps) {}
//   componentWillUnmount() {}
//
//   onClickHandler() {
//     /* this.setState({ message: 'click state message' }); */
//   }
//
//   render() {
//     return (
//       <div>
//         <button onClick={this.onClickHandler.bind(this)}>set state button</button>
//         <ChildComponent childMessage={this.state.message}></ChildComponent>
//         And some text here as well
//       </div>
//     )
//   }
// }
//
// ReactDOM.render(
//   <ExampleApplication hello={'world'} />,
//   document.getElementById('container'),
//   function() {}
// )
