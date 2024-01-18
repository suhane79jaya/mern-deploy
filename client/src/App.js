import React, { useEffect, useState } from "react";

const App = () => {
  const [message, setMessage] = useState("");
  useEffect(() => {
    fetch("https://mern-deploy-backend-r53j.onrender.com/")
      .then((res) => res.json())
      .then((data) => setMessage(data.message));
  }, []);

  return (
    <div>
      <h1>{message}</h1>
    </div>
  );
};

export default App;
