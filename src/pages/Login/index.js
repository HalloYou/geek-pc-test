import { Component } from 'react';
import { Button, DatePicker } from 'antd'
class Login extends Component {
  constructor(props) {
    super(props);
  }
  state = {}
  render() {
    return (<div>Layout
      <Button>add</Button>
      <DatePicker></DatePicker>
    </div>);
  }
}

export default Login;