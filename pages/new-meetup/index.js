import React from 'react'
import NewMeetupForm from '../../components/NewMeetupForm'
import { useRouter } from 'next/router';
import axios from "axios"

const NewMeetupPage = () => {
  const router = useRouter();

  
  const onAddMeetup = async (title, image, address, description) => {

    // can also use axios
    axios.post("/api/new-meetup", {
      title, image, address, description
    }).then(
      (res)=>{
        console.log(res.data);
        router.push("/");
    }).catch(
      (err) => {
        console.log(err)
    })
    // const response = await fetch("/api/new-meetup", {
    //   method: "POST",
    //   body: JSON.stringify(newData),
    //   headers: {
    //     "Content-Type": "application/json"
    //   }
    // });

    // const data = await response.json();
    
    // console.log(data);
  }
  

  return (
    <div>
      <NewMeetupForm onAddMeetup={onAddMeetup} />
    </div>
  )
}

export default NewMeetupPage