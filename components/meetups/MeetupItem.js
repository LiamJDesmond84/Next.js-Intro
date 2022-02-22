import Card from "../ui/Card";
import Image from 'next/image'
import style from "./MeetupItem.module.css";

function MeetupItem(props) {

    const { image, title, address } = props;

    return (
        <li className={style.item}>
            <Card>
                <div className={style.image}>
                    <Image loader={() => image} src={image} width={500} height={500} alt={title} />
                </div>
                <div className={style.content}>
                    <h3>{title}</h3>
                    <address>{address}</address>
                </div>
                <div className={style.actions}>
                    <button>Show Details</button>
                </div>
            </Card>
        </li>
    );
}

export default MeetupItem;
