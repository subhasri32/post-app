import logo from './logo.svg';
import './App.css';
function Home(props){
    return (
    <>
    <div className="App">
    <header className="App-header">
        <p>Welcome to React World!</p>
        <div>
                                <h3 className="text-start">App is built in React using :</h3>
        </div>
        <div class="text-align-top-left"><h4>Bootstrap</h4></div>
        <div class="text-align-top-right"><h4>React</h4></div>
        <div class="text-align-bottom-left"><h4>React-Router-DOM</h4></div>
      <img src={logo} className="App-logo" alt="logo" />
    </header>
    </div>
    <p>Home Page!</p>
    <p></p>
     {/* <p>{props.location.search}</p>  */}
    </>
    );
}
export default Home;