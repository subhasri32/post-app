import {BrowserRouter,Redirect,Route,Switch,NavLink} from "react-router-dom";
// import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./Home";
import About from "./About";
import Posts from "./Posts";
import post from "./post";
import NotFound from "./NotFound";

function App(){
  return(
    
    <BrowserRouter>
    
    <div>
      <NavLink exact activeStyle={{margin:5}} to="/">home</NavLink>
      <NavLink exact activeStyle={{margin:5}}  to="/about">About</NavLink>
      <NavLink exact activeStyle={{margin:5}}  to="/posts">Post</NavLink>
    </div>
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/about" component={About}/>
        <Route path="/about" component={About}/>
        <Route path="/posts/:id" component={post}/>
        <Route path="/posts" component={Posts}/>
        <Route path="/home">
          <Redirect to="/"></Redirect>
        </Route>
        <Route path="*" component={NotFound}/>
      </Switch>
    </BrowserRouter>
    
  );
}
export default App;
