import React, { useEffect, useState } from 'react'
function index() {
  const [message, setMessage] = useState("Loading");
  const [people, setpeople] = useState([]);


  useEffect(() => {
    fetch("http://localhost:8080/home").then(
      response => response.json()
    ).then(
      data => {
        setMessage(data.message);
        console.log(data.message);
        setpeople(data.people);
        console.log(data.people);
      })
  }, [])

  return (
    <div>
      <div>{message}</div>
      {
        people.map((person, index) => (
          <div key={index}>
            {person}
          </div>
        )
        )
      }

    </div>
  )
}

export default index;