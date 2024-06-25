import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
function Main(){


    const[data,setData]=useState([])



    useEffect(()=>{

fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(data =>{
                setData(data)
                console.log(data)
            })
           

           

           

    },[])





    return(
        <>

        <div >
            <nav className=" nav-div d-flex flex-row justify-content-between">
               <Link to="/" className="link"> HOME</Link>
               <h4>D-MART</h4>
               <Link to="/about" className="link"> ABOUT</Link>
            
            </nav>

            <div className="container">
                <div className="row">


               {data.map((item)=>{

                return(
                        <div className="menClothings-div">

                            <div>
                            <img src={item.image } width="200px" height="100px"/>
                            </div>
                            <hr/>
                            <p>Price:{item.price}</p>



                        </div>
                )
               })}




</div>

            </div>
        </div>
        </>
    )
}

export default Main 