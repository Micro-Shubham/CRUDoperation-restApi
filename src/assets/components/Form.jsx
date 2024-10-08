import { useState } from "react";
import { postData } from "../../PostApi";

export const Form = ({data,setData}) => {
 const [addData,setAddData] =useState({title:"",body:""})
 const  handdleInputChange =(e) => {
  const name = e.target.name
  const value = e.target.value
  setAddData((prev) => {
    return {
      ...prev,
      [name]:value,
    }
  })
 }
 const addPostData =async () =>{
   const res = await postData(addData)
   if((res.status ==200)) {
    setData([...data,res.data])
   }
 }
 //form submission
 const handleFormSubmit = (e) => {
 e.preventDefault();
 addPostData();
 }
  return (
    <>
      <form onSubmit={handleFormSubmit} >
        <div>
          <label htmlFor="title"></label>
          <input
            type="text"
            autoComplete="off"
            id="title"
            name="title"
            placeholder="Add Title"
            value={addData.title}
            onChange={handdleInputChange}
          />
        </div>

        <div>
          <label htmlFor="body"></label>
          <input
            type="text"
            autoComplete="off"
            placeholder="Add Post"
            id="body"
            name="body"
            value={addData.body}
            onChange={handdleInputChange}
          />
        </div>
        <button type="submit"> ADD
        </button>
      </form>
    </>
  );
};
