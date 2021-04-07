import React from 'react';

function Coursel(){

    return(
    <section id="custom">
    <div id="carouselExampleIndicators" className="carousel slide " data-ride="carousel">
        
    
        <ol className="carousel-indicators">
           
          <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        
        </ol>
        
        <div className="carousel-inner">
          <div className="carousel-item active" data-interval="5000" style={{height: "600px"}}>
            <img src="./images/8.jpg" className="d-block w-100" alt="first"style={{height: "100%"}} />
           
            <h3 className="ft">About LA POLO </h3>
                <p className="fp" >LA POLO is providing the
                     exclusive insights about <br /> the regal sport and the opulence associated with a<br /> diversified yet 
                     a unified  approach to an imperial <br /> and contemporary world we admire</p>
           
          </div>
          <div className="carousel-item" data-interval="5000" style={{height: "600px"}}>
            <img src="./images/10.jpg" className="d-block w-100" alt="second" style={{height: "100%"}} />
            <h3 className="ft">About LA POLO </h3>
                <p className="fp" >LA POLO is providing the
                     exclusive insights about <br /> the regal sport and the opulence associated with a<br /> diversified yet 
                     a unified  approach to an imperial <br /> and contemporary world we admire</p>
          </div>
          <div className="carousel-item" data-interval="5000" style={{height: "600px"}}>
            <img src="./images/11.jpg" className="d-block w-100" alt="third" style={{height: "100%"}} />
            <h3 className="ft">About LA POLO </h3>
                <p className="fp" >LA POLO is providing the
                     exclusive insights about <br /> the regal sport and the opulence associated with a<br /> diversified yet 
                     a unified  approach to an imperial <br /> and contemporary world we admire</p>
          </div>
        </div>
        <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
          <span  aria-hidden="true"><p className="inditext">&larr; Prev</p> </span>
         
          <span className="sr-only">Previous</span>
        </a>
        <p style={{position: "absolute",color:"white",fontSize: "small",top:"22%",left:"6%"}}>01</p>
        <p style={{position: "absolute",color:"white",fontSize: "small",top:"84%",left:"6%"}}>03</p>
        <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
            <span  aria-hidden="true"><p className="inditext"> Next &rarr;</p></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    





</section>);}

export default Coursel;
