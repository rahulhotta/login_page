import { Button, Checkbox, Form, Input } from 'antd';
import { useState } from 'react';
import axios from 'axios';
const App = () => {

const [email,setEmail] = useState("");
const [password, setPassword] = useState("")
const data = {
  emial: email,
  password: password
}
  const onFinish = (values) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

    const handleSubmit = (e) => 
    {
      e.preventDefault();
      axios.post('https://reqres.in/api/login',data)
      .then(res => {
        console.log(res)
      }).catch(err => {
        console.log(err)
      })

    }
  return (
    <div className="login">
        <h1 className='login_heading'>Welcome Back</h1>
        <p className='login_para'>sub-title text goes here</p>
    <Form
    onSubmit={handleSubmit}
      name="basic"
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 8,
      }}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        
        name="username"
        rules={[
          {
            required: true,
            message: 'Please input your username!',
          },
        ]}
      > 
        <Input className="inp" type="email" placeholder="Email address*" value={email} onChange={(e)=> setEmail(e.target.value)}/>
      </Form.Item>

      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
      >
        <Input.Password className="inp" placeholder='password*' value={password} onChange={(e)=> setPassword(e.target.value)}/>
      </Form.Item>
      <Form.Item>
        <Button className='login_btn' type="primary" htmlType="submit">
          Login
        </Button>
      </Form.Item>
      <Form.Item
        name="remember"
        valuePropName="checked"
         >
        <Checkbox  className='checkbox'>Remember Password</Checkbox>
      <span className='forgot_password'>Forgot Password?</span>
        
      </Form.Item>
      
    </Form>
   
    </div>
  );
};

export default App;