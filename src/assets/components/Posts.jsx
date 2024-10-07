import { deletePost, getPost } from "../../PostApi";
import { useEffect, useState } from "react";
import {Form} from "./Form"
import "../../App.css"
export const Posts = () => {
  const [data, setData] =useState([]);  

  const getPostData = async() => {
    const res = await getPost();
    console.log(res); 
    console.log(res.data)
    setData(res.data)
  }
  useEffect(() =>{
    getPostData();
  }, [])
  //function to delete post
  const handleDeletePost =async (id) => {
    try{
   const res= await deletePost(id)
   console.log(res)
   if(res.status ===200) {
    const newUpdatedPosts = data.filter((curPost) => {
        return curPost.id !=id;
    })
    setData(newUpdatedPosts)
   } else {
    console.log("Failed to delete the post:", res.status)
   }
    } catch(error) {
        console.log(error)

    }

  }
  
  return (
    <>
    <section className="section-form">
        <Form data ={data} setData={setData} />
    </section>
    <section className="section-post">
        <ol>
            {
                data.map((curElem) => {
                    const {id, body, title} = curElem;
                    return <li key={id}>
                        <p> title:{title}</p>
                        <p> body:{body}</p>
                        <button>Edit</button>
                        <button className="btn-delete"onClick={() => handleDeletePost(id)}  
                        >
                            Delete</button>
                    </li>
                })
            }
        </ol>

    </section>
    </>
  )
 

}