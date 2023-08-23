import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";


const Nav = () => {

    const [column, setColumn] = useState([])
    const [records, setRecords] = useState([])
    const [name, setName] = useState('')
    const eventID = useLocation().pathname;


    useEffect(() => {
        fetch('http://localhost:3000/API.json')
            .then(res => res.json())
            .then(data1 => {
                setColumn(data1.data)
                // console.log(data1.events)
                setRecords(data1.events);
                setName(data1.events[0].name)
            })
    }, [])

    const [events, setEvents] = useState([])
    const [eventIndex, setEventIndex] = useState(0)


    useEffect( () => {
        fetch('http://localhost:3000/events.json')
            .then(res => res.json())
            .then(data => {
                setEvents(data.events)
            })
    })
    // console.log(events[0])
    const [selected, setSelected] = useState("");

    const handleChange = event => {
        console.log(event.target.value);
        setSelected(event.target.value);
        setEventIndex(events.findIndex(object => {
            return object.name === event.target.value;
        }))
    };
    // console.log(selected)

    

    return (
        <>
            <select value={selected} onChange={handleChange}>
                {events?.map(event => (
                    <option key={event.id}>{event.name}</option>
                ))}
            </select>
            <div className='container'>
                {records.length > 0 && eventIndex >= 0 && (
                    <div>
                        <h1>{records[eventIndex].name}</h1>
                        <table className='table'>
                            <thead>
                                <tr>
                                    {column.map((c, i) => (
                                        <th key={i}>{c}</th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                {records[eventIndex].participants.map((participants, i) => (
                                    <tr key={i}>
                                        {column.map((c, i) => (
                                            <td key={i}>{participants[c]}</td>
                                        ))}
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>
            {/* <Table /> */}
        </>
    );
    
}

export default Nav;
