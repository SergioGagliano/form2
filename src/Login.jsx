import { useState } from "react";

export function Login() {
  const [dataUser, setDataUser] = useState({
    username: "",
    password: "",
    remember: false,
  });

  const inputData = (event) => {
     
    const { type, name, value, checked } = event.target;
    const inputValue = type == "checkbox" ? checked : value;

    setDataUser({
      ...dataUser,
      [name]: inputValue,
    });
  };



  return (
    <>
      <div class="form">
        <h1>FORM</h1>
        <span>Username</span>
        <input
          type="text"
          name="username"
          value={dataUser.username}
          onChange={inputData}
        />

        <span>Password</span>
        <input
          type="password"
          name="password"
          value={dataUser.password}
          onChange={inputData}
        />

        <span>Ricorda i miei dati</span>
        <input
          type="checkbox"
          name="remember"
          checked={dataUser.remember}
          onChange={inputData}
        />
      </div>
    </>
  );
}
