import { useRouter } from 'next/router';
import Card from "./Card";
import Image from 'next/image'
import style from "./MeetupItem.module.css";

function MeetupItem(props) {
    const router = useRouter();
    const { id, image, title, address } = props;

    const showDetails = (id) => {
        router.push(`/${id}`)
    }

    return (
        <li className={style.item}>
            <Card>
                <div className={style.image}>
                    <img src={image} width={500} height={500} alt={title} />
                </div>
                <div className={style.content}>
                    <h3>{title}</h3>
                    <address>{address}</address>
                </div>
                <div className={style.actions}>
                    <button onClick={showDetails}>Show Details</button>
                </div>
            </Card>
        </li>
    );
}

export default MeetupItem;
