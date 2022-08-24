import React, { useState, useEffect } from 'react'
import "../components/CSS/style.css"
import { Scrollbars } from 'react-custom-scrollbars-2';
import Userdata from "./Userdata"


const Tasks = () => {

    const [set, setData] = useState([]);
  

    useEffect(() => {
        const fetchApi = async () => {
            const url = "https://api.facthunt.in/fostergem/v1/post/list/public"
            const response = await fetch(url);

            const dataJson = await response.json();
            // console.log(dataJson.content);
            setData(dataJson.content);
        }

        fetchApi();



    }, [setData])

    const handleDelete = () =>{
        setData([])
    } 

    return (

        <>
            <div className="container">
                {/*Sidebar*/}
                <div className="sidebar">

                    <div className="heading">
                        <h2>NextTales Inc</h2>
                    </div>

                    <div className="items">
                        <ul>
                            <a href="/Userdata"><i className="fa-solid fa-folder-closed" style={{marginRight:"1.9rem"}}></i>Profile</a>
                            

                        </ul>

                    </div>

                    <div className="social-web">
                        
                            <a href="https://www.facebook.com/" ><i className="fa-brands fa-facebook-f" ></i></a>
                            <a href="https://twitter.com/?lang=en-in"><i className="fa-brands fa-twitter"></i></a>
                            <a href="https://www.linkedin.com/home"><i className="fa-brands fa-linkedin"></i></a>
                            <a href="https://r.search.yahoo.com/_ylt=AwrKBFg02wRjowMHyXu7HAx.;_ylu=Y29sbwNzZzMEcG9zAzEEdnRpZAMEc2VjA3Ny/RV=2/RE=1661291444/RO=10/RU=https%3a%2f%2fmail.google.com%2fmail/RK=2/RS=fcv_cSMPLo99_b0WkmbZVrHiLwA-"> <i className="fa-solid fa-envelope-open"></i></a>
                       

                    </div>
                </div>

                {/*Right Section*/}

                <div className="right-section">

                 <div className="right-sec-head">
                    <p>Discover</p>
                    <div className="btn_class">
                    <button className="btn" onClick={handleDelete}>Clear Record</button>
                    </div>
                 </div>
                    <div className="parent_cards">
                        <Scrollbars>
                            <div className="contain">
                                {
                                    set.map((curElem) => {

                                        const { user,postId } = curElem
                                        
                                        return <>
                                             <Userdata  {...curElem}/>
                                        </>


                                    })
                                }

                            </div>
                        </Scrollbars>


                    </div>


                </div>
            </div>
        </>
    )
}

export default Tasks
