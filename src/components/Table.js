import {React,useState,useEffect} from 'react'
import { useLocation } from 'react-router-dom'



export default function Table() {
    const [column, setColumn] = useState([])
    const [records, setRecords] = useState([])
    const [name, setName] = useState('')
    const eventName = useLocation();


    useEffect(() => {
        fetch('http://localhost:3000/API.json')
            .then(res => res.json())
            .then(data1 => {
                setColumn(data1.data)
                setRecords(data1.events)
                setName(data1.events.name)
            })
    }, [])
    
    return (
        <div className='container'>
            <div>
                <h1>{name}: @ {eventName.pathname}</h1>
                <table className='table'>
                    <thead>
                        <tr>
                            {
                                column.map((c, i) => (
                                    <th key={i}>{c}</th>
                                ))
                            }
                        </tr>
                    </thead>
                    <tbody>
                        {
                            records.map((record) => (
                                record.participants.map((participants,i) => (
                                <tr key={i}>
                                    {column.map((c, i) => (
                                        <td key={i}>{participants[c]}</td>
                                    ))
                                    }
                                </tr>
                                ))
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}
