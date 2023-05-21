import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import InputTable from './InputTable';

function App() {

  const [inp, setIn]=useState();
  const [inp2, setIn2]=useState();
  const [in3, setIn3]=useState();
  const [in4, setIn4]=useState();
  const [rows, setRows] = useState([]);
 
//   console.log("in dispaly function ");
 


function addRows()
{
  const rowsInput={
    inp,
    inp2,
    in3,
    in4
    
    } 
    console.log(" data stored in rows input is here" + rowsInput)
    setRows([...rows, rowsInput])
    console.log("rows are here = "+ {rows})
  
}

const handleChange = (index,evnt)=>{


const {head,val }=evnt.target;
console.log("heading is here = "+ head);
console.log("value is = "+ val)

const temp=[...rows];
temp[index][head]=val;
setRows(temp);


}

  return (
    <>
  <h1>
Click on the Plus sign to add New Line.
</h1>  
<div  className='table-position'>


      <table id="app-tab">
      <thead >
        <tr>
          <th>
            sr
          </th>
         <th >name</th>
        
        
        <th  >Place</th> 
        
      
         <th > Thing</th>
        
        
       <th >Total</th> 

            <th >
          <button onClick={addRows} id='btn' >+</button>
              
              </th>
        </tr>

      </thead>
     <tbody>

      <InputTable rows={rows} handleChange={handleChange} />
     </tbody>
     
 

     
      </table>


</div>
     
</>
  );
}

export default App;
