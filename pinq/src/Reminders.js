import React, { useEffect, useState } from 'react';

function Reminders() {
  let[loading, setLoading] = useState(true);
  let[reminders, setReminders] = useState();


  const getReminders = async () => {
    let response = await fetch(`https://cors-anywhere.herokuapp.com/https://mighty-reaches-04321.herokuapp.com/reminders`, {
      method: 'GET',
      headers: {
        'Access-Control-Allow-Origin': '*'
      }
    }
    );
    let data = await response.json()
    console.log(data)
    setReminders(data.data);
    setLoading(false);
  }

  useEffect(() => {
    if(loading){
      getReminders();
    }
  });

  const formatTime = (time) => {
    let t = new Date(time);
    return t.toDateString();
  }

  return (
    <div className="Reminders">
      {!loading &&
        reminders.map( reminder => (
          <div className="reminderCard">
              <div className="container">
                  <h4><b>{reminder.name}</b></h4>
                  <br></br>
                  <p>{reminder.time}</p>
                  <p>{formatTime(reminder.time)}</p><br></br>
                  <p>{reminder.description}</p>
              </div>
          </div>
        ))
      }
    </div>
  );
}

export default Reminders;