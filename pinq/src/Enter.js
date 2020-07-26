import React, { useEffect, useState } from 'react';
import { render } from '@testing-library/react';

function Enter() {
  let[loading, setLoading] = useState(true);
  let[name, setName] = useState("");
  let[date, setDate] = useState("");
  let[time, setTime] = useState("");
  let[description, setDescription] = useState("");
  let[reminders, setReminders] = useState();

  let handleInputChange = function(e){
    switch(e.target.name){
      case "name":
          setName(e.target.value);
          console.log(e.target.value)
          break;
      case "date":
          setDate(e.target.value);
          break;
      case "time":
          setTime(e.target.value);
          break;
      case "description":
          setDescription(e.target.value);
          break;
      default:
          break;
    }
  }

  const Submit = async () =>{

    const b = {
      "reminder": {
        "description":description,
        "name":name,
        "status":"initial",
        "time":"2014-10-02T00:29:12",
        "user_id": 1
      }
    }

    const settings = {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'x-requested-with':'Accept',
            'origin':'localhost:3000'
        },
        body: JSON.stringify(b)
    };
    try {
        let fetchResponse = await fetch(`https://cors-anywhere.herokuapp.com/https://mighty-reaches-04321.herokuapp.com/reminders`, settings);
        let data = await fetchResponse.json();
        console.log(data);
    } catch (e) {
        return e;
    }    
  }

  
  return (
    <div className="Enter">
      <p className="text">Enter a new reminder here:</p>

      <label className="inputType">
        Name of Contact:
        <br></br><input type="text" name="name" className="inputBox" placeholder="Enter name of contact" value={name} onChange={function(e){handleInputChange(e)}}></input>
      </label>
      <br></br><br></br>

      <label className="inputType">
        Snooze until [Date]:
        <br></br><input type="text" name="date" className="inputBox" placeholder="Enter snooze date" value={date} onChange={function(e){handleInputChange(e)}}></input>
      </label>
      <br></br><br></br>

      <label className="inputType">
        Snooze until [Time]: 
        <br></br><input type="text" name="time" className="inputBox" placeholder="Enter snooze time" value={time} onChange={function(e){handleInputChange(e)}}></input>
      </label>
      <br></br><br></br>

      <label className="inputType">
        Description: 
        <br></br><input type="text" name="description" className="inputBox" placeholder="Enter description" value={description} onChange={function(e){handleInputChange(e)}}></input>
      </label>
      <br></br>

      <input type="submit" className="submit" value="Submit" onClick={Submit}/>
    </div>
  );
}

export default Enter;