import { Component } from 'react';
import { Card } from 'antd'
import logo from '../../assets/logo.png';
import "./index.css"
class Login extends Component {
  constructor(props) {
    super(props);
  }
  state = {}
  render() {
    return (<div className='login'>
      <Card className='login-container'>
        <img className='login-logo' src={logo} alt="" />
      </Card>
    </div>);
  }
}

export default Login;