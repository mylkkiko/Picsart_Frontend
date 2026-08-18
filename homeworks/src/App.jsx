import { useState } from 'react'
import './App.css'

const initial_employees = [
  { id: 1, name: 'John Smith', salary: 120000, gender: 'male' },
  { id: 2, name: 'Emma Johnson', salary: 150000, gender: 'female' },
  { id: 3, name: 'Michael Brown', salary: 95000, gender: 'male' },
  { id: 4, name: 'Sophia Davis', salary: 110000, gender: 'female' },
  { id: 5, name: 'James Wilson', salary: 140000, gender: 'male' }
];

function App() {
  const [employees, setEmployees] = useState(initial_employees);

  function handleRemove(id) {
    setEmployees((prev) => prev.filter((empl) => empl.id !== id))
  }

  return (
    <>
      <div className="container-md">
        <h1 className='homework_title'>Homework</h1>
        <table>
          <thead>
            <tr>
              <th>id</th>
              <th>name</th>
              <th>salary</th>
              <th>gender</th>
              <th>actions</th>
            </tr>
          </thead>
          <tbody>
            {employees.map(({ id, name, salary, gender }) => {
              return (
                <tr key={id} className='employee_row'>
                  <td>{id}</td>
                  <td>{name}</td>
                  <td>{salary}</td>
                  <td>{gender}</td>
                  <td>
                    <button className='btn btn-danger' onClick={() => handleRemove(id)}>Remove</button>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </>
  )
}

export default App
