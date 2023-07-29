import Navbar from "./Navbar";


export default function LayOutPage({children}) {
  return (
   <div>
    <Navbar></Navbar>
    <div style={{height: "100vh"}}>
        {children}
    </div>

  
   </div>
   
  
  )
}
