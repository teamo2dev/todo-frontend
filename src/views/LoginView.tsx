import React from 'react';
import { useForm } from 'react-hook-form';

interface IFormInput {
  username: string;
  password: string;
}

const LoginView: React.FC = () => {
  const { register, handleSubmit } = useForm();

  const submitFormHandler = (data: IFormInput) => {
    alert(`Are you sure? Username: ${data.username} Password: ${data.password}`);
  }

  return (
    <div className='container'>
      <header>
        <div className='header-headings'>
          <span>SIGN IN</span>
        </div>
      </header>
      <form className='account-form' onSubmit={handleSubmit(submitFormHandler)}>
        <div className='account-form-fields'>
          <input id='username' name='username' type='email' placeholder='E-mail' required ref={register} />
          <input id='password' name='password' type='password' placeholder='Password' required ref={register} />
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
