import React from 'react';
import { Button, Input } from 'semantic-ui-react';

const LoginForm = (props) => {
  return (
    <form>
      <div>
        {/* <label >Email</label> */}
        <Input 
        placeholder='Email'
        id="email" 
        onChange={props.inputChangeHandler} />
      </div>

      <div>
        {/* <label>Password</label> */}
        <Input 
        placeholder='Password'
        id="password" 
        onChange={props.inputChangeHandler} />
      </div>
      
      <Button
        primary
        onClick={(e) => props.loginHandler(e)} 
        id="submit">Submit</Button>
    </form>
  )
}

export default LoginForm;