
class Visability extends React.Component {
    constructor(props){
        super(props);
        this.toggleVisibility = this.toggleVisibility.bind(this);
        this.state = {
            visability: false
        };
    }
    toggleVisibility(){
        this.setState((prevState) => {
            return{
                visability: !prevState.visability
            } 
        });
    }
    render(){
        return(
            <div>
                <h1>Visibility Toggle</h1>
                <button onClick={this.toggleVisibility}>{this.state.visability? 'Hide details' : 'Show details'}</button>
                {
                    this.state.visability && (
                        <div>
                            <p>Hey. These are some details you can now see!</p>
                        </div>
                    )
                }
            </div>
        );
    }
}

ReactDOM.render(<Visability />, document.getElementById('app'));

// let visibility = false;

// const toggleVisibility = () => {
//   visibility = !visibility;
//   render();
// };

// const render = () => {
//   const jsx = (
//     <div>
//       <h1>Visibility Toggle</h1>
//       <button onClick={toggleVisibility}>
//         {visibility ? 'Hide details' : 'Show details'}
//       </button>
//       {visibility && (
//         <div>
//           <p>Hey. These are some details you can now see!</p>
//         </div>
//       )}
//     </div>
//   );

//   ReactDOM.render(jsx, document.getElementById('app'));
// };

// render();
