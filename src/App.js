import { Route, Routes, Link } from 'react-router-dom'
import Home from './pages/Layout';
import Login from './pages/Login'
import NotFound from './pages/NotFound';
function App() {
  return (
    <div className="App">
      {/* <Link to="/login">登录</Link>
      <Link to="/home">首页</Link> */}

      <Routes>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>

  );
}

export default App;
