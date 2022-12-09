import React, { useState } from "react";

import MainHeader from "./components/MainHeader/MainHeader";
import Register from "./Views/Register";

function App() {
  const [IsRegister, setRegister] = useState(false);

  const registerHandler = (first_name, last_name, email, password) => {
    setRegister(true);
  };

  return (
    <React.Fragment>
      <MainHeader isAuthenticated={IsRegister} />
      <main>{!IsRegister && <Register onLogin={registerHandler} />}</main>
    </React.Fragment>
  );
}

export default App;
