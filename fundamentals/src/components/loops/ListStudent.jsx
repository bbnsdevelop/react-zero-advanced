import React from "react";
import students from "../../mock/data/students";

const ListStudent =  (props) =>{
    
    const list = students.map(s =>{
        return <li key={s.id} >{s.name} - {s.notes}</li>;
    })

    return (
        <div>
            <lu style={{ listStyle: 'none'}}>
                {list}
            </lu>
        </div>
    );
}

export default ListStudent;
