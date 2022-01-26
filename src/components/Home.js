import React from 'react';
import styled from "styled-components";
import Section from "./Section";

const Home= ()=>{
	return(
		<>
		 <Container>
           <Section
             title="Model S"
             description="Order Online For Touchless Delivery"
             backgroundImg="model-s.jpg"
             leftBtnText="Custom Order"
             rightBtnText=" Existing Inventory"
           />
           <Section
             title="Model Y"
             description="Order Online For Touchless Delivery"
             backgroundImg="model-y.jpg"
             leftBtnText="Custom Order"
             rightBtnText=" Existing Inventory"
           />
           <Section
             title="Model 3"
             description="Order Online For Touchless Delivery"
             backgroundImg="model-3.jpg"
             leftBtnText="Custom Order"
             rightBtnText=" Existing Inventory"
           />
           <Section
             title="Model X"
             description="Order Online For Touchless Delivery"
             backgroundImg="model-x.jpg"
             leftBtnText="Custom Order"
             rightBtnText=" Existing Inventory"
           />
           <Section
             title="Lowest Cost Solar Panels in America"
             description="Honey-back Guarantee"
             backgroundImg="solar-panel.jpg"
             leftBtnText=" Order Now"
             rightBtnText=" Learn More "
           />
           <Section
             title="Solar For New Roof"
             description="Solar Roof Costs Less Then a New Roofs"
             backgroundImg="solar-roof.jpg"
             leftBtnText=" Order Now"
             rightBtnText=" Learn More "
           />
           <Section
             title="Accessories"
             description=""
             backgroundImg="accessories.jpg"
             leftBtnText=" Shop Now"
             
           />

          
         </Container>
		</>
		)
}
export default Home;


//styleing here

const Container = styled.div`
  height:100vh;
`