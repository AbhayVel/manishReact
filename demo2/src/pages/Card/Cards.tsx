import React, { useState } from 'react';
// import logo from '../../assets/images/icons/logo.svg'
 
export const Card = () => {
 
const [cardData, setCardData ]= useState([
  {
    title:"Title 1332 ",
    text:"Some quick example text to build on the card title and make up the bulk of the cards content",

  }

]);

    return (
      <div className="container">
 <div className='row'>
      <div className='col-lg-4'>
          <div className="card">
       {/* <img className="card-img-top" src="{logo}" alt="Card cap"/> */}
        <div className="card-body">
          
          {
            cardData.map((e) => {

              return (
                <div>
                  <h5 className="card-title">{e.title}</h5>
                  <p className="card-text">{e.text}</p>
                  <a href="about.html" className="btn btn-primary">Go somewhere</a>
                </div>


              )
            })
              
              
          }


          
          </div>
        </div>  
      </div>
      </div>
      </div>
     
      

    )
}




