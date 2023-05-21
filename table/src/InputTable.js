

 export default function  InputTable ({rows,handleChange}) {
  
  const No=rows.length;
  

return(

  rows.map((data,index)=>
  {
const {inp,inp2,in3,in4}=data
    console.log("data is here = " +data);
    return(
  <tr key={index}>
    <td>
      {index+1}
    </td>
    <td>  <input  value={inp} onChange={(evnt)=>(handleChange(index, evnt))} className="input" /></td> 
     <td>  <input   value={inp2} onChange={(evnt)=>(handleChange(index, evnt))} className="input"/></td> 
    <td>  <input  value={in3} onChange={(evnt)=>(handleChange(index, evnt))} className="input"/></td> 
    <td>  <input value={in4} onChange={(evnt)=>(handleChange(index, evnt))} className="input"/></td> 
    {/* <h1> Hello World </h1> */}
    </tr>
    )

  }
   )
);
        

  



  
  
}
