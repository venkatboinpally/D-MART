import { Link } from "react-router-dom"
function About(){

    return(
        <>
       

        

        <div className="About-div">

            <h3><span className="span">Name </span>: Venkat</h3>
            <hr/>

            <h3><span className="span">Qualification </span>: Btech in Information Technology </h3>
            <hr/>


            <h3><span className="span">TechnicalSkills</span> : HTML,CSS,JavaScript,Reactjs,Python,Sql,Expressjs,Nodejs</h3>
            <hr/>


            <div className="projects">
                <h3 className="span">Projects</h3>

               <ul>

                
                    <li>Food Munch Wesite using Html,css,bootsrap</li>
                    <li>Movie Serach app using Reactjs</li>
                    <li>CRUD operations using Reactjs </li>
                    <li>Transcation Module(CRUD) using Express.js,MongoDb,Node.js,React.js</li>
               
                    </ul>
            </div>




         <Link to="/">  <button className="btn btn-primary">Back</button></Link>

            
            

        </div>




        
        
        </>
    )
}

export default About