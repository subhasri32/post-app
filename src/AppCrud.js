import axios from "axios";
import React from "react";
import {Link} from "react-router-dom";
import {Table,Button} from 'react-bootstrap';
class AppCrud extends React.Component{
    constructor(props)
    {
        super(props)
        this.state={ 
            comments:[],
            posts:[],
            id:"",
            userId:"",
            title:"",
            body:"",
        };
    }
    createPost=async()=>{
        try{
            const{userId,title,body}=this.state;
            const {data:post}=await axios.post("https://jsonplaceholder.typicode.com/posts",{
                userId,
                title,
                body,   
            });
            let posts=[...this.state.posts];
            posts.push(post)
            // console.log(data);  
            this.setState({posts,userId:"",title:"",body:""});  
        }
        catch(err){
            console.error(err);
        }
        
    }
    updatePosts=async()=>{
        try{
            const {id,userId,title,body}=this.state;
            const {data:post}=await axios.put(`https://jsonplaceholder.typicode.com/posts/${id}`,{
                userId, 
                title,
                body,   
            });
           let posts=[...this.state.posts];
           const index=posts.findIndex((post)=>post.id===id);
           posts[index]=post;
           this.setState({posts,id:"",userId:"",title:"",body:""});
        }
        catch(err){
            console.error(err);
        }   
    };
    getposts=async()=>{
            try{
                const {data}=await axios.get("https://jsonplaceholder.typicode.com/posts");
                console.log(data);  
                this.setState({posts:data});  
            }
            catch(err){
                console.log(err);
            }
            
        }
        deletePost=async(postId)=>{
            try{
                await axios.delete(`https://jsonplaceholder.typicode.com/posts/${postId}`);
                let posts=[...this.state.posts];
                posts=posts.filter((post)=>post.id!==postId);
                this.setState({posts});
            }
            catch(err){
                console.error("Error while deleting",err);
            }
        }       

componentDidMount(){
    this.getposts();
}
handleChange=({target:{name,value}})=>{
    this.setState({[name]:value});
}
handleSubmit=(e)=>{
    e.preventDefault();
    if(this.state.id)
    {
        this.updatePosts();
    }
    else
    {
    this.createPost();
    }
}
selectposttoupdate(post){
    this.setState({...post});
}
render()
{
    return (
        <>
        <p>CRUDApp</p>
        <form onSubmit={this.handleSubmit}>
            <div>
            <label>user id</label>
            <input
            name="userId"
            type="text"
            value={this.state.userId}
            onChange={this.handleChange}
            required
            />
            </div>
            <br/>
            <div>
            <label>title</label>
            <input
            name="title"
            type="text"
            value={this.state.title}
            onChange={this.handleChange}
            required
            />
            </div><br/>
            <div>
            <label>body</label>
            <input
            name="body"
            type="text"
            value={this.state.body}
            onChange={this.handleChange}
            required
            />
</div>
<br/>

<Button  variant="primary" type="submit">submit</Button>
        </form>
        <Table striped bordered>
            <tr>
                <th>userId</th>
                <th>Id</th>
                <th>title</th>
                <th>body</th>
                <th>Actions</th>
            </tr>
            {
            this.state.posts.map((post)=>{
                return(
                <tr>
                    
                    <td>{post.id}</td>
                    <td>{post.userId}</td>
                    <td>{post.title}</td>
                    <td>{post.body}</td>
                    <td>
                        <Button variant="primary"  size="sm" active onClick={()=>this.selectposttoupdate(post)}>update</Button>
                        <Button variant="danger"  size="sm" active onClick={()=>this.deletePost(post.id)}>Delete</Button>
                        {
                         <p key={post.id}><Link to={`/posts/${post.id}`}>comments</Link></p>
                        }                       
                    </td>
                </tr>
                );
            })}
        </Table>
      </>
    );
}
}
export default AppCrud;