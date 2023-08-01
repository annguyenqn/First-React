import logo from './logo.svg';
import './App.scss';
// import MyComponent from './Example/MyComponent';
// 2 components : class component / funtion component( funtion , arrow)
import MyComponent from './Example/MyComponent';
import Welcome from './Example/MyComponent'
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />


        <MyComponent></MyComponent>
      </header>
    </div>
  );
}

export default App;
