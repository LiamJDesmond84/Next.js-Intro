import MeetupItem from "./MeetupItem";
import classes from "./MeetupList.module.css";

function MeetupList(props) {
    return (
        <ul className={classes.list}>
            {props.meetups.map((x) => (
                <MeetupItem
                    key={x.id}
                    id={x.id}
                    image={x.image}
                    title={x.title}
                    address={x.address}
                />
            ))}
        </ul>
    );
}

export default MeetupList;
