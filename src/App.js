import { useState } from 'react';
import './App.css';
import Form from './components/Form/Form';
import Navbar from './components/Navbar/Navbar';

function App() {
  const [employs, setEmploys] = useState([]);

  const addNewEmp = (empInfo) => {
    setEmploys([...employs, empInfo]);
  }

  let contentSection = <p className='no-data'>No Data Found.</p>

  if(employs.length > 0) {
    contentSection =
    <div>
        <table>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
          </tr>
          {
            employs.map(emp => (
              <tr>
                <td>{emp.id}</td>
                <td>{emp.name}</td>
                <td>{emp.age}</td>
              </tr>
            ))
          }
        </table>
    </div>
  }
  return (
    <div className="App">
      <Navbar />
      <Form addNewEmp={addNewEmp} />
      {contentSection}
    </div>
  );
}

export default App;
