import React, { useState } from 'react';

const Checkbox_and_radio = () => {
  const [hasBike, setHasBike] = useState(false);
  const [gender,setGender] = useState("");
  const [car,setCar] = useState("volvo")

  return (
    <>
      <h1>Checkbox and Radio</h1>

      <select
        value={car}
        onChange={(e)=>{
            setCar(e.target.value)
        }}
      >
            <option value="volvo">volvo</option>
            <option value="soab">soab</option>
            <option value="flat">flat</option>
            <option value="audi">audi</option>
      </select>

      <label>
        <input
          type="checkbox"
          name="vehicle"
          value="bike"
          checked={hasBike}
          onChange={(e) => {
            setHasBike(e.target.checked); 
          }}
        />
        I have a bike
      </label>

      <p>
        Gender:
        <label>
          <input type="radio" 
          name="gender"
           value="male"
           checked={gender==="male"} 
           onChange={(e)=>{
            setGender(e.target.value)
           }}/>
          Male
        </label>
        <label>
          <input type="radio" name="gender" value="female"
           checked={gender==="female"} 
           onChange={(e)=>{
            setGender(e.target.value)
           }} />
          Female
        </label>
        <label>
          <input type="radio" name="gender" value="other" 
           checked={gender==="other"} 
           onChange={(e)=>{
            setGender(e.target.value)
           }}/>
          Other
        </label>
      </p>
    </>
  );
};

export default Checkbox_and_radio;
