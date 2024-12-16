import { useState } from "react";



function App(){
  const [age, setAge] = useState('');
  const [message , setMessage] = useState('');

  const handleAge = (event) => {
    setAge(event.target.value);
  };

  const checkEligibility = () => {
    if(age >= 18) {
      setMessage("You are eligible to vote");
    }
    else{
      setMessage("You are not eligible to vote");
    }
  };

  return(
    <div>
    <h2>Check you are eligible to vote or not</h2>
    <input  type="number" onChange={handleAge}  value={age}  placeholder="Type Your Age" />
    <button onClick={checkEligibility}>Check</button>
    <h3>{message}</h3>
    </div>
  );
};

export default App;
