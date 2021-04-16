import { useHistory, useParams } from "react-router";
import useFetch from "./hoc/usefetch";

const BlogDetails = () => {
    const {id}=useParams()
    const history=useHistory()
    const{isloading ,error,data:blog}=useFetch("http://localhost:8000/blogs/" +id);
    const handleDelete= () => {
        fetch('http://localhost:8000/blogs/' + blog.id, {
          method: 'DELETE'
        }).then(() => {
          history.push('/');
        }) 
      }
    return (
        <div className="blog-details">
        {isloading && 
        <div class="bouncer">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
        
        }
        {error && <div>{error}</div>}
        {blog && (
            <article>
                <h2>{blog.title}</h2>
                <p>written by {blog.author}</p>
                 <div>{blog.body}</div>
                 <button onClick={handleDelete}>delete</button>
            </article>
        )}
        

        </div>
      );
}
 
export default BlogDetails;