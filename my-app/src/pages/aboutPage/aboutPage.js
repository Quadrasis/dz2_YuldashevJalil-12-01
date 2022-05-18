import React from "react";
import { Header } from "../../components/header/Header"
import { Servises } from "../../components/servises/Servises";


 function AboutPage () {
     return (
         <>
         <h2>About Page</h2>
         <Header/>
         <Servises servises={servises}/>
         </>
     )
 }


 export default AboutPage;