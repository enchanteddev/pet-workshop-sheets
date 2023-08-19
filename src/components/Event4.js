import {React,useState,useEffect} from 'react'

export default function Event4() {
    const [column, setColumn] = useState([])
    const [records, setRecords] = useState([])
    const [name, setName] = useState('')

    useEffect(() => {
        fetch('http://localhost:3000/API.json')
            .then(res => res.json())
            .then(data => {
                setColumn(Object.keys(data.participants[0]))
                setRecords(data.participants)
                setName(data.name)
            })
    }, [])
    console.log(column)
  return (
    <div className='container'>
            <div>
                <h1>Event4</h1>
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
                            records.map((record, i) => (
                                <tr key={i}>
                                    {column.map((c, i) => (
                                        <td key={i}>{record[c]}</td>
                                    ))
                                    }
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
  )
}
