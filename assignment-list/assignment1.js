import { useState } from 'react';
import '../assignment-list/assignment1.css'

function Assignment1() {

    const [inputs, setInputs] = useState({});

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
    }

  return (
    <form>
        <h1>Function to compute the product of value1 and value2</h1>
        <label>Enter value1:
        <input
            type="number"
            name="value1" 
            value={inputs.value1 || ""}
            onChange={handleChange}
        />
        </label>
        <label>Enter value2:
        <input
            type="number"
            name="value2" 
            value={inputs.value2 || ""} 
            onChange={handleChange}
        />
        </label>
        <br></br>
        <span>
            <label>{getResult(inputs.value1, inputs.value2)}
            </label>
        </span>
    </form>
  );
}

function getResult(value1, value2){
    return value1 && value2 ? "Product of " + value1 + " and " + value2 + " is " + getProduct(value1, value2) : "Enter value1 & value2";
}

function getProduct(p1, p2) {
    return p1 * p2;
  }

export default Assignment1;