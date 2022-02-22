import React from "react";
import { useRouter } from "next/router";
import style from "../../components/MeetupItem.module.css";
const MeetupDetails = (props) => {
    const router = useRouter();
    const { oneMeetup } = props;
    return (
        <div>
            <div className={style.content}>{oneMeetup.title}</div>
            <div className={style.address}>{oneMeetup.address}</div>
            <img className={style.image} src={oneMeetup.image} alt="image" />
        </div>
    );
};

export async function getStaticPaths() {
    return {
		fallback: false,
        paths: [
            {
                params: {
                    id: "m1",
                },
            },
        ],
    };
}

export async function getStaticProps(context) {
    const id = context.params.id;
    console.log(id);

    return {
        props: {
            oneMeetup: {
                id: "m1",
                image: "https://imageio.forbes.com/specials-images/dam/imageserve/1120536785/960x0.jpg?fit=bounds&format=jpg&width=960",
                title: "San Diego",
                address: "12345 Booyah St",
            },
        },
    };
}
export default MeetupDetails;
