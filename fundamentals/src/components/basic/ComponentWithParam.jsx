export default function funcWithParam(props){

    console.log(props);
    const note = props.note;

    const msg = note >= 5 ? <h2>Was approved with note {note}</h2> : <h2>was not approved note {note}</h2>;

    return (
        <div>
            <h2>{props.title}</h2>
            <h2>{props.student}</h2>
            {msg}
        </div>
    )
}