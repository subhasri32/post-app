import logo from './logo.svg';
import './App.css';
function Home(props){
    return (
    <>
    <div className="App">
    <header className="App-header">
        <p>Welcome to React World!</p>
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