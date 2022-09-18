import './App.css';
import './styles/main.css' ;


const Sapp = () =>{

  const submit = () =>
  {
    alert("Your registration is successful")
  }
  return (
    <div>
      <form>
      Name<  input placeholder='Enter your frist name'></input> <br></br>
      Last name<input placeholder='Enter last name'></input><br></br>
      Email id< input placeholder='Enter your email address'></input><br></br>
      number<input placeholder ='Enter your number'></input><br></br>
      password <input placeholder = 'Enter password'></input><br></br>
      comform password<input placeholder='conform password'></input> <br></br>
      <button  onClick ={submit} type = 'submit'> Sumit </button>
      </form>

    </div>   
  );





}
export default Sapp;

// import { useState } from 'react' ; 

// const App = () => {
//   const [num ,fun ] = useState(0);
//   console.log('state value' ,num);

//   const [name , setname]  = useState(' Hello')
//   const func = (e) => {
//     setname(e.target.value);
//     func("")
//   }

  
//   const [number , setNumber] = useState(100);
//   const changenumber =() =>{
//     fun(1000)
//   };


//   const appname = "A count app";
//   const increse = () => {
//     setNumber(number +1 );
//   };
//   const decrese = () => {
//     setNumber(number -1) ;
//   };



//   return (
//     <div className = 'container'>
//       <h1>{name}</h1>
//       <input onChange = {func}/>


//       <h1> num </h1>
//       <button onClick={changenumber}>change value</button>
//     <h1 >{appname}</h1>
//     <div>
//       <h1>
//       <span style ={{color: 'red'}}>Count - </span>
//       <span>{number}</span>
//       </h1>
//     </div>
//     <button onClick = {decrese}> - </button>
//     <button onClick = {increse}> + </button>
    
//     </div>
//   );

// }

// export default App;


