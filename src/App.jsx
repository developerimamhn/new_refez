// import { useRef } from "react";

import { useState } from "react";


// function App() {
//   let classthisname = useRef();
//   const change =()=>{
//     classthisname.current.classList.remove('sedent');
//     classthisname.current.classList.add('text-[#198]')
//   }

//   return (
//     <dev>
//       <h2 className='sedent font-bold' ref={classthisname}>how are you guy</h2>
//       <button className="border-2 px-5 py-2 bg-slate-900 text-yellow-100" onClick={change}>click</button>
//     </dev>
//   )
// }

// export default App




// import { useRef } from "react";


// function App() {
//   let number =useRef(0)
//   const change =()=>{
//     number.current++;
//     console.log(number.current)
//   }

//   return (
//     <dev>

//       <button className="border-2 px-5 py-2 bg-slate-900 text-yellow-100" onClick={change}>click</button>
//     </dev>
//   )
// }

// export default App

// import { useRef } from "react";


// function App() {
//   const apiData =useRef(null);
//   const myptag=useRef()
  
//   const fatchData = async () => {
//     const response = await fetch("https://dummyjson.com/products")
//     apiData.current=await response.json();
//   }

//   const showData =()=>{
//     myptag.current.innerText=JSON.stringify(apiData.current)
//   }

//   return (
//     <dev>
//       <p ref={myptag}></p>
      
//       <button className="border-2 px-5 py-2 bg-slate-900 text-yellow-100" onClick={fatchData}>call api</button>
//       <button className="border-2 px-5 py-2 bg-slate-900 text-yellow-100" onClick={showData}>show data</button>
//       </dev>
//   )
// }

// export default App




// const App = () => {
//   let [number,setnumber]=useState(0)
//   return (
//     <div>
//       <h2>number: {number}</h2>
//       <button onClick={()=>setnumber(number+1)} className="px-5 py-2 border-2  ml-2 mt-2">&#8592;</button>
//       <button onClick={()=>setnumber(number-1)} className="px-5 py-2 border-2  ml-2 mt-2">&#8594;</button>
//     </div>
//   );
// };

// export default App;


// const App = () => {

//   const [myObject, setmyObject]=useState({
//     key1: "value 1",
//     key2: "value 2",
//     key3: "value 3"
//   });

//   const change = ()=>{
//     setmyObject(
//       prevOBJ=>({
//         ...prevOBJ,
//         key1: "this is my vallue1",
//         key2: "this is my vallue2"
//       })
//     )
//   }


//   return (
//     <div>
//       <h1>{myObject.key1}</h1>
//       <h1>{myObject.key2}</h1>
//       <h1>{myObject.key3}</h1>
//       <button onClick={change}>change value</button>
//     </div>
//   );
// };

// export default App;

// null

// import React from 'react';
// import ReactDOM  from 'react-dom';

// class detainclocck extends React.Component   {
//   render(){
//     return(
//       <h1 className="headding">
//         <span className="text">hello {new Date().toLocaleTimeString(this.props.locale)}</span>
//       </h1>
//     );
//   }
// }

// ReactDOM.render(<detainclocck locale="bd-BD" />,document.getElementById('root'));

import React from 'react';
import ReactDOM from 'react-dom/client';

class Container extends React.Component {
  constructor(props) {
    super(props);
    this.state = {show: true};
  }
  delHeader = () => {
    this.setState({show: false});
  }
  render() {
    let myheader;
    if (this.state.show) {
      myheader = <Child />;
    };
    return (
      <div>
      {myheader}
      <button type="button" onClick={this.delHeader}>Delete Header</button>
      </div>
    );
  }
}

class Child extends React.Component {
  componentWillUnmount() {
    alert("The component named Header is about to be unmounted.");
  }
  render() {
    return (
      <h1>Hello World!</h1>
    );
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Container />);

console.log("index js");
console.log("index ja");
console.log("indexjsx")
