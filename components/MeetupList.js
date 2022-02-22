import MeetupItem from "./MeetupItem";


function MeetupList(props) {
    return (
        <ul style={{listStyle: "none",margin: "0",padding: "0"}}>
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
