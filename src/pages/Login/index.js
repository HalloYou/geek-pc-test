import { Component, useState } from 'react';
import { Card, Button, Checkbox, Form, Input, message } from 'antd'
import logo from 'assets/logo.png';
import "./index.scss"
import { login } from 'api/user'
import { useNavigate } from "react-router-dom";

//如去首页
// navigate("/home");
const Login = () => {
  const navigate = useNavigate();
  const onFinish = async ({ mobile, code }) => {
    setLoding(true);
    try {
      let res = await login(mobile, code);
      message.success("登录成功", 1, () => {
        localStorage.setItem('token', res.data.token)
        navigate("/home");
      })
    } catch (error) {
      message.error("登录失败！")
      setLoding(false);
    }

  }
  const [loading, setLoding] = useState(false);
  return (
    <div className='login'>
      <Card className='login-container'>
        <img className='login-logo' src={logo} alt="" />

        <Form size='large' onFinish={onFinish} initialValues={{ mobile: '13633032266', code: '246810', agree: true }}>
          <Form.Item name="mobile" rules={[{ required: true, message: "手机号不能为空" }, { pattern: /^1[3-9]\d{9}/, message: "手机号格式错误" }]}>
            <Input placeholder='请输入你的手机号' autoComplete='off' />
          </Form.Item>

          <Form.Item name="code" rules={[{ required: true, message: "验证码不能为空" }, { pattern: /\d{6}/, message: "验证码格式错误" }]}>
            <Input placeholder='请输入验证码' autoComplete='off' />
          </Form.Item>

          <Form.Item
            valuePropName="checked"
            name="agree"
            rules={[{
              validator(isRule, isVal) {
                if (isVal) {
                  return Promise.resolve()
                } else {
                  return Promise.reject(new Error("请阅读并同意用户协议"))
                }
              }
            }]}
          >
            <Checkbox>我已经阅读并同意[隐私条款][用户协议]</Checkbox>
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" block loading={loading}>
              登录
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  )
}


export default Login;