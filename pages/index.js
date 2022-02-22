import Head from 'next/head'
import MeetupList from '../components/MeetupList'

// import Image from 'next/image'
// import styles from '../styles/Home.module.css'
const DUMMY_MEETUPS = [{
  id: "m1",
  title: "San Diego",
  image: "https://imageio.forbes.com/specials-images/dam/imageserve/1120536785/960x0.jpg?fit=bounds&format=jpg&width=960",
  address: "12345 Booyah St"
},
{
  id: "m2",
  title: "Los Angeles",
  image: "https://media.timeout.com/images/105718842/750/562/image.jpg",
  address: "asfds 343435"
},
{
  id: "m3",
  title: "Canada",
  image: "https://a.cdn-hotels.com/gdcs/production159/d204/01ae3fa0-c55c-11e8-9739-0242ac110006.jpg",
  address: "11sdfaf4 f234"
}]
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

  return {
    props: {
      meetups: DUMMY_MEETUPS
    },
    revalidate: 5
  }

}