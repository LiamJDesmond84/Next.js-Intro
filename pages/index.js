import Head from 'next/head'
import MeetupList from '../components/MeetupList'
import { MongoClient } from 'mongodb'


// import Image from 'next/image'
// import styles from '../styles/Home.module.css'

export default function Home(props) {

  const { meetups } = props;




  return (
    <div>
      
      <MeetupList meetups={meetups} />
      <h1>Welcome to Hell</h1>
    </div>
  )
}

// export async function getServerSideProps(context) {
//   const req = context.req;
//   const res = context.res;



//   return {
//     props: {
//       meetups: DUMMY_MEETUPS
//     },
//   }
// }

export async function getStaticProps() {
  
  const client = await MongoClient.connect("mongodb+srv://" + process.env.DB_USER + ":" + process.env.DB_PASS + "@cluster0.kz3wd.mongodb.net/nextjs-intro?authSource=admin&replicaSet=atlas-7wj273-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true")

  const db = client.db();

  const meetupsCollection = db.collection("meetups");

  const meetups = await meetupsCollection.find().toArray();

  client.close();

  return {
    props: {
      meetups: meetups.map(x => ({
        title: x.title,
        image: x.image,
        address: x.address,
        id: x._id.toString()
      }))
    },
    revalidate: 1
  }

}