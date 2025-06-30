import { useState } from "react"



function Dark() {
    const [theme,setTheme]=useState(true)
  return (
   
    <div style={{background:theme?'white':'black',
        color:theme?'black':'white',
           height: "100vh",
        paddingTop:'200px',
        paddingLeft:'400px',
     }}>
    <button onClick={()=>setTheme(!theme)}
        style={{borderRadius:'50PX',height:'50PX',width:'200PX'}}>Switch Theme</button>
 </div>
  )
}

export default Dark