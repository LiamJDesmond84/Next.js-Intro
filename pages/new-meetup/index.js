import React from 'react'
import NewMeetupForm from '../../components/NewMeetupForm'

const NewMeetupPage = () => {

  const onAddMeetup = (data) => {
    console.log(data);

  }

  return (
    <div>
      <NewMeetupForm onAddMeetup={onAddMeetup} />
    </div>
  )
}

export default NewMeetupPage