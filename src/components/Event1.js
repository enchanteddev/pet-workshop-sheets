import {React,useState,useEffect} from 'react'



export default function Event1() {
    const [column, setColumn] = useState([])
    const [records, setRecords] = useState([])
    const [name, setName] = useState('')


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
                <h1>{name}</h1>
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
