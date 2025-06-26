import React, { useState } from 'react';

function Index() {
  const [name, setName] = useState('');
  const [nameList, setNameList] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim() === '') return;
    setNameList([...nameList, name]);
    setName('');
  };

  return (
    <>
      <div style={{ padding: '20px', fontFamily: 'Arial' }}>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <button type="submit" style={{ marginLeft: '10px' }}>Submit</button>
        </form>

        <h3>Submitted Names:</h3>
        <ul>
          {nameList.map((n, index) => (
            <li key={index}>{n}</li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Index;
