import React, { useState } from 'react';

const LoginView: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const changeUsernameHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  }

  const changePasswordHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  }

  const submitFormHandler = (event: React.FormEvent<HTMLFormElement>) => {
    alert(`Are you sure? Username: ${username} Password: ${password}`);
    event.preventDefault();
  }

  return (
    <div className='container'>
      <header>
        <div className='header-headings'>
          <span>SIGN IN</span>
        </div>
      </header>
      <form className='account-form' onSubmit={submitFormHandler}>
        <div className='account-form-fields'>
          <input id='email' name='email' type='email' placeholder='E-mail' required onChange={changeUsernameHandler} />
          <input id='password' name='password' type='password' placeholder='Password' required onChange={changePasswordHandler} />
        </div>
        <button className='btn-submit-form' type='submit'>
          Sign in
        </button>
      </form>
      <footer>
        <p>This is footer area</p>
      </footer>
    </div>
  )
}

export default LoginView;
