import React, { useEffect, useState } from 'react';

const Handlecomplaint = () => {
  const [complaints, setComplaints] = useState([]);

  useEffect(() => {
    fetch('/api/complaints')
      .then(res => res.json())
      .then(data => setComplaints(data));
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Handle Complaints</h1>
      <ul>
        {complaints.map(c => (
          <li key={c.id}>{c.message} - Status: {c.status}</li>
        ))}
      </ul>
    </div>
  );
};

export default Handlecomplaint;
