import Header from "../components/Header";

 
const AboutUs = () => {
  return (
    <div>
      <Header />
      <div className="container">
        <div style={{ marginTop: "100px" }} className="inner-container">
          <div className="comunity-header">
            <img src="/img/about.svg" className="community-image" alt="" />
          </div>
 
          <div className="community-content">
            <h3>We are on a mission to rebrand the presentation of our local African foods and ingredients so as to reach international standards. Our goal is to fundamentally change the way the world appreciates and engages with African food. In addition to this we took on a challenge to introduce creative and exceptional ways food in general could be exploited and unconventionally manipulated.
While doing an in-depth research into African ingredients and coming up with innovative recipes, this then inspired us to hold masterclasses and also establish a culinary school which emphasizes on our African culinary arts called RB school of African culinary and food science (SACAFS) to share and educate the masses far and wide on our indigenous ways of cooking with a blend of modern techniques, this drew us even more closer to the thought of supporting food related brands across the continent with our skill and expertise.
For us that meant a dedication to creating high quality, innovative and exceptional services in line with the objectives of these diverse food brands.</h3>
          </div>
        </div>
        
      </div>
      
    </div>
  );
}
 
export default AboutUs;