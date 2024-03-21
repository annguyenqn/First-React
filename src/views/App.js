import logo from './logo.svg';
import './App.scss';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Nav from './Nav/Nav';
// import MyComponent from './Example/MyComponent';
// 2 components : class component / funtion component( funtion , arrow)
import MyComponent from './Example/MyComponent';
import ListToDo from './ToDo/ListToDo'
import Home from './Example/Home';
import Flex from './FlexBox/Flex';
import Redux from './Redux/Redux';
import Todo from './HookComponent/Todo';
import ListUser from './HookComponent/ListUser';
import ReactHook from './HookComponent/ReactHook';
import ArrMethod from './HookComponent/ArrMethod';
import SetStructure from './HookComponent/SetStructure'
import MapStructure from './HookComponent/MapStructure';
import TaskManager from './HookComponent/TaskManager';
import FetchData from './HookComponent/fetchData'
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  BrowserRouter
} from "react-router-dom";
import HookCom from './HookComponent/HookCom';
function App() {
  return (
    <BrowserRouter>
      {/* <div className="h-80"> */}
      <Nav></Nav>
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <Routes>
          <Route exact path='/mycom' element={<MyComponent></MyComponent>} />
          <Route exact path='/Todo' element={<ListToDo></ListToDo>} />
          <Route exact path='/hookcom' element={<HookCom />} />
          <Route exact path='/' element={<Home></Home>} />
          <Route exact path='/Flex' element={<Flex></Flex>} />
          <Route exact path='/redux' element={<Redux></Redux>} />
          <Route exact path='/TodoHook' element={<Todo></Todo>} />
          <Route exact path='/ListUser' element={<ListUser></ListUser>} />
          <Route exact path='/ReactHook' element={<ReactHook></ReactHook>} />
          <Route exact path='/ArrMethod' element={<ArrMethod></ArrMethod>} />
          <Route exact path='/SetStructure' element={<SetStructure></SetStructure>} />
          {/* <Route exact path='/MapStructure' element={<TaskManager></TaskManager>} /> */}
          <Route exact path='/FetchData' element={<FetchData></FetchData>} />



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

      {/* </div> */}
    </BrowserRouter>
  );
}

export default App;
