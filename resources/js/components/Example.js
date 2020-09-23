import React,{Component} from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom';
import { extend } from 'jquery';

export default class PersonList extends Component{
    state ={

        persons:[]
    }
    componentDidMount(){
        axios.get('').then(res=>{
            const persons = res.data;
            this.setState({persons})
        })
    }
    render(){
        return(
        <ul>{this.state.persons.map(person=><li>{person.name}</li>)}</ul>
        )
    }
}
// function Example() {
//     return (
//         <div className="container">
//             <div className="row justify-content-center">
//                 <div className="col-md-8">
//                     <div className="card">
//                         <div className="card-header">Example Component</div>
                    
//                         <div className="card-body">I'm an example component!</div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default Example;

// if (document.getElementById('example')) {
//     ReactDOM.render(<Example />, document.getElementById('example'));
// }
