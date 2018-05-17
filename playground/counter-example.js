

class Counter extends React.Component {
    constructor(props){
        super(props);
        this.handleAddOne = this.handleAddOne.bind(this);
        this.handleMinusOne = this.handleMinusOne.bind(this);
        this.handleReset = this.handleReset.bind(this);
        this.state = {
            count: 0
        };
    }
    componentDidMount(){
        try {
            const num = localStorage.getItem('count');
            const count = parseInt(num, 10);
            if(!isNaN(count)){
                this.setState(() => ({count: count}));
            }
        } catch (error) {
            
        }
    }
    componentDidUpdate(prevProps, prevState){
        if(prevState.count !== this.state.count){
            localStorage.setItem('count', this.state.count);
        }
    }
    handleAddOne(){
        this.setState((prevState) => {
            return {
                count: prevState.count+1
            };
        });
    }
    handleMinusOne(){
        this.setState((prevState) => {      
            return {
                count: prevState.count-1
            };
        });
    }
    handleReset(){
        // this.setState(() => {   ---- Old version
        //     return {
        //         count: 0
        //     }
        // });
        this.setState({
            count: 0
        });
    }
    render(){
        return (
            <div>
                <h1>Count: {this.state.count}</h1>
                <button onClick={this.handleAddOne}>+1</button>
                <button onClick={this.handleMinusOne}>-1</button>
                <button onClick={this.handleReset}>reset</button>
            </div>
        );
    }
}
ReactDOM.render(<Counter />, document.getElementById('app'));





// let count = 0;
// const addOne = () => {
//     count++;
//     renderCountApp();
// };
// const minusOne = () => {
//     count--;
//     renderCountApp();
// };
// const reset = () => {
//     count=0;
//     renderCountApp();
// };


// const appRoot = document.getElementById('app');

// const renderCountApp = () => {
//     const template2 = (
//         <div>
//             <h1>Count: {count}</h1>
//             <button onClick={addOne}>+1</button>
//             <button onClick={minusOne}>-1</button>
//             <button onClick={reset}>Reset</button>
//         </div>
//     );
//     ReactDOM.render(template2, appRoot);
// }

// renderCountApp();












// const user = {
//     name: "Alex Fadeev",
//     age: 28,
//     location: "Israel, Tel-Aviv"
// };

// function getLocation(location){
//     if(location){
//         return <p>Location: {location}</p>;
//     }
// }

// const template2 = (
//     <div>
//         <h1>{user.name ? user.name : 'None'}</h1> 
//         {(user.age && user.age > 18) && <p>age: {user.age}</p>}
//         {getLocation(user.location)}
//     </div>
// );