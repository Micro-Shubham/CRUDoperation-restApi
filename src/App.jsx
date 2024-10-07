import { useEffect } from "react";
import { getPost } from "./PostApi";
function App() {
  console.log(getPost());
  const getPostData = async() => {
    const res = await getPost();
    console.log(res); 
    console.log(res.data)
  }
  useEffect(() =>{
    getPostData();
  }, [])
  return (
    <>
       <h1> hello there</h1>
    </>
  )
}

export default App
