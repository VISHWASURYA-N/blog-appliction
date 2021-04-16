import BlogList from "./BlogList";
import useFetch from "./hoc/usefetch";

const Home = () => {
 const {data:blogs,error,isloading}=useFetch("http://localhost:8000/blogs")
 
  return (
    <div className="home">
      {isloading && <div class="bouncer">
    <div></div>
    <div></div>
    <div></div>
    <div></div>
  </div>} 
      {error && <div>{error}</div>}
      {blogs && <BlogList  blogs={blogs} title="All Blogs"/>}
       
     </div>
    
  );
}
 
export default Home;