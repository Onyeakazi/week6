import { useState } from 'react';
import './App.css'
import Greet from './components/Greet'

function App() {
  // useState returns an array with 2 items: 
  // 1. The current state variable
  // 2. The setter function used to update it
  const [count, setCount] = useState(0); 
  const [loggedIn, setLoggedIn] = useState(false);
  const [sumbitted, setSubmitted] = useState([]);
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [error, setError] = useState("");

  const products = [
    { id: 1, name: "Laptop", price: 999 },
    { id: 2, name: "Mouse", price: 25 },
    { id: 3, name: "Keyboard", price: 50 }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();

    if(!name || !age){
      setError("Please fill in all fields");
    }

    const user = {
      id: Math.random() * 10,
      name: name,
      age: age
    }

    setSubmitted([...sumbitted, user]);
    setAge("");
    setName("");

  }
  
  return (
    <>
      {loggedIn &&  (
        <div>
          <h1 className='title'>welcome to react</h1>
          <Greet name={"John doe"} color={"green"} bgColor={"orange"}/>
          <Greet name={"andrew"} color={"red"} bgColor={"black"}/>

          <p>Count: {count}</p>
          <button onClick={()=> setCount(count + 1)}>Add</button>
          <button onClick={() => setCount(0)}>Reset</button>
          <button onClick={()=> setCount (count -1)}>Minus</button>

          <ul>
            {products.map((product) => (
              <li key={product.id}>{product.name} - {product.price}</li>
            ))}
          </ul>

          {error && <h3 style={{color: "red"}}>{error}</h3>}

          <form onSubmit={handleSubmit}>
            <label htmlFor="">Name:</label>
            <input type="text" placeholder='Enter your name' onChange={(e) => setName(e.target.value)} value={name}/> <br />
            <label htmlFor="">Age:</label>
            <input type="number" placeholder='Enter your age' onChange={(e) => setAge(e.target.value)} value={age}/> <br />

            <input type="submit"/>
          </form>

          <ol>
            {sumbitted.map((sbt)=> (
              <li key={sbt.id}>{sbt.name} - {sbt.age}</li>
            ))}
          </ol>
        </div>
      )}
      <button onClick={()=> setLoggedIn(!loggedIn)}>{loggedIn ? "Logout" : "Login"}</button>
    </>
  )
}

export default App
