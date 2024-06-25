
import { Link } from "react-router-dom"
function Home(){

    return(
        <>
       <div className="main-div p-3">

       <nav className=" nav-div d-flex flex-row justify-content-between">
               <Link to="/" className="link"> HOME</Link>
               <h4>D-MART</h4>
               <Link to="/about" className="link"> ABOUT</Link>
            
            </nav>

<div className="land-div">

   

        <h1> D-MART</h1>



        <h2>D-MART is one of the unique online shopping sites in India where fashion is accessible to all</h2>



        <Link to="/products"><button className="btnn">View Products</button></Link>

        
        </div>

       

        

      
       </div>
        </>
    )
}
export default Home