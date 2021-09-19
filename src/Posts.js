import 'bootstrap/dist/css/bootstrap.min.css';
import './AppCrud.css';
import AppCrud from "./AppCrud";

function Posts(props){
    return (
        <div class="body">
        <AppCrud/>
        {/*posts.map((p)=>{
            return <p key={p.id}><Link to={`/posts/${p.id}`}>{p.title}</Link></p>
        })} */}
    </div>
    ); 
}
export default Posts;