import React from 'react'
import { useRouter } from 'next/router';

const MeetupDetails = (props) => {

  const router = useRouter();
  const { oneMeetup } = props;
  return (
    <div>
      {/* <div>{title}</div> */}
      {/* <div>{address}</div> */}Shit
      {/* <img src={image} alt="image" /> */}
    </div>
  )
}

export async function getStaticProps(context) {

  return {
    props: {
      oneMeetup: {
        id: "",
        image: "",
        title: "",
        address: ""

    }
  }
}
}
export default MeetupDetails