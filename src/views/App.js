import logo from './logo.svg';
import './App.scss';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Nav from './Nav/Nav';
// import MyComponent from './Example/MyComponent';
// 2 components : class component / funtion component( funtion , arrow)
import MyComponent from './Example/MyComponent';
import ListToDo from './ToDo/ListToDo'
import Welcome from './Example/MyComponent'
import Home from './Example/Home';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  BrowserRouter
} from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Nav></Nav>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Routes>
            <Route exact path='/mycom' element={<MyComponent></MyComponent>} />
            <Route exact path='/Todo' element={<ListToDo></ListToDo>} />
            <Route exact path='/' element={<Home></Home>} />
          </Routes>
          {/* <MyComponent></MyComponent> */}
        </header>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
        />
        {/* Same as */}
        <ToastContainer />

      </div>
    </BrowserRouter>
  );
}

export default App;
