import axios from "axios";
import React from "react";
import {Table} from 'react-bootstrap';
//import {Link} from "react-router-dom";
class post extends React.Component{
    constructor(props)
    {
        super(props)
        this.state={
            comments:[],
            id:props.match.params.id,
            
        };
       
        console.log(props);
    }
    getposts=async()=>{
        try{
            
            
            const {data}=await axios.get(`https://jsonplaceholder.typicode.com/posts/${this.state.id}/comments`);
            console.log(data);  
            this.setState({comments:data});  
        }
        catch(err){
            console.log(err);
        }
        
    }
    componentDidMount(){
        this.getposts();
    }
    
    render()
    {
    return (
        <>        
        <Table striped bordered>
            <tr>
                <th>postId</th>
                <th>id</th>
                <th>name</th>
                <th>email</th>
                <th>body</th>
            </tr>
            {
            this.state.comments.map((comment)=>{
                return(
                <tr>
                    
                    <td>{comment.postId}</td>
                    <td>{comment.id}</td>
                    <td>{comment.name}</td>
                    <td>{comment.email}</td>
                    <td>{comment.body}</td>
                </tr>
                );
            })}
        </Table>
      </>
    );
}
}
export default post;