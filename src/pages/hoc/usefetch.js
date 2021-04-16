import React,{useState,useEffect} from 'react';
const useFetch=(url)=>{
    const [data, setData] = useState(null);
    const [isloading,setIsloading]=useState(true);
    const [error, setError] = useState(null)
   
let getData=async()=>{
    let response=await fetch(url);
    if(response.status !==200){
      throw new Error("unable to fetch the data");
    }
    let data=await response.json()
    return data
  
}
useEffect(()=>{
 setTimeout(()=>{
  getData().then(data=>(
    setData(data),
    setIsloading(false)))
    .catch(err=>(
      setIsloading(false), 
      setError(err.message)
    ))
},3000)
return ()=>{

}
},[url])
return {data,isloading,error}
}
export default useFetch