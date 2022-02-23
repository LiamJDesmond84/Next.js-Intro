import React from "react";
import { useRouter } from "next/router";
import style from "../../components/MeetupItem.module.css";
import { MongoClient } from "mongodb";
const MeetupDetails = (props) => {
    const router = useRouter();
    // const { oneMeetup } = props;
    return (
        <div>
            <img className={style.image} src={props.image} alt="image" />
            <div className={style.content}>{props.title}</div>
            <div className={style.address}>{props.address}</div>
            <div className={style.address}>{props.description}</div>
        </div>
    );
};

export async function getStaticPaths() {

    const client = await MongoClient.connect("mongodb+srv://" + process.env.DB_USER + ":" + process.env.DB_PASS + "@cluster0.kz3wd.mongodb.net/nextjs-intro?authSource=admin&replicaSet=atlas-7wj273-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true")

    const db = client.db();

    const meetupsCollection = db.collection("meetups");

    const meetups = await meetupsCollection.find({}, { _id: 1 }).toArray();

    client.close();

    return {
		fallback: false,
        paths: meetups.map(x => ({
            params: {id: x._id.toString()} 
    }))

    };
}

export async function getStaticProps(context) {
    const id = context.params.id;
    const client = await MongoClient.connect("mongodb+srv://" + process.env.DB_USER + ":" + process.env.DB_PASS + "@cluster0.kz3wd.mongodb.net/nextjs-intro?authSource=admin&replicaSet=atlas-7wj273-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true")

    const db = client.db();

    const meetupsCollection = db.collection("meetups");

    const oneMeetup = await meetupsCollection.findOne({_id: id});

    client.close();

    console.log(oneMeetup);

    return {
        props: {
            oneMeetup: oneMeetup
        },
    };
}
console.log
export default MeetupDetails;
