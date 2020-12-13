import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import Axios from 'axios';

export default function Login() {
  const redirect = useHistory()
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  function goToPage(e) {
    e.preventDefault();
    Axios.get('/api/database/check-user', {
      params: {
        email: login,
        password: password
      }
    })
    .then(function (res) {
      console.log(res)
      return res === true ? redirect.push('/profile') : null
    })
    .catch(function (err) {
      console.log(err);
    })
  }
  
  return (
    <div>
      <main>
        <form onSubmit={(e) => goToPage(e)} className="login">
          <div className="login_field">
            <label className="login_field_label">email</label>
            <input type="text" onChange={(e)=>setLogin(e.target.value)} value={login} placeholder="example@mail.ru"></input>
          </div>
          <div className="login_field">
            <label className="login_field_label">password</label>
            <input type="text" onChange={(e)=>setPassword(e.target.value)} value={password}></input>
          </div>
          <div className="login_field">
            <input type="submit" value="LogIn" />
            <Link to='/profile'>Профиль</Link>
          </div>
        </form>
      </main>
    </div>
  )
}
