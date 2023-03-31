import Header from "../components/Header";

 
const IndexPage = () => {
  return (
    <div>
      <Header />
      <div className="hero-container">
        <img src="./img/header.jpg" className="hero-image" alt="" />
        <div className="inner-hero-container">
          <h1 className="hero-title">Welcome To Recipe Boutique</h1>
          <p className="hero-content-paragraph">What would you do if you had a thousand receipes just right in your pocket?</p>
          <div className="hero-button-container">
            
          </div>
        </div>
      </div>
 
      <div className="container">
        <div className="inner-container">
          <div className="element-items">
            <img src="./img/images.svg" className="element-image" alt="" />
            <p className="element-paragraph">Contributed by an amazing community of foodies. With hundreds of cuisines curated and tens of recipes created each day, start cooking and experience what you can do with your kitchen!</p>
          </div>
          <div className="element-items">
            <p className="element-paragraph">Contributed by an amazing community of foodies. With hundreds of cuisines curated and tens of recipes created each day, start cooking and experience what you can do with your kitchen!</p>
            <img src="./img/bigstock.svg" className="element-image" alt="" />
          </div>
          <div className="element-items">
            <img src="./img/SHB.svg" className="element-image" alt="" />
            <p className="element-paragraph">Contributed by an amazing community of foodies. With hundreds of cuisines curated and tens of recipes created each day, start cooking and experience what you can do with your kitchen!</p>
          </div>
        </div>
       
      </div>
      
    </div>
  );
}
 
export default IndexPage;
