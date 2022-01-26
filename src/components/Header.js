import React,{useState} from 'react';
import styled from "styled-components";
import MenuIcon from '@mui/icons-material/Menu';
import ClearIcon from '@mui/icons-material/Clear';
import {selectCars} from '../features/Car/carSlice';
import {useSelector} from 'react-redux';

const Header= ()=>{ 

 const[open,setOpen]=useState(false);
const cars =useSelector(selectCars)
console.log(cars)

	return(
		<Container>
         <a href={() => false}>
              <img src="/image/logo.svg" alt="logo"/>
         </a>
         
         <Menu>
	          {cars && cars.map((car,i)=>(
           <a key={i} href={() => false}>{car}</a>
          ))}
	          
         </Menu>
         <RightMenu>
	          <a href={() => false}>Shop</a>
	          <a href={() => false}>Tesla Account</a>
	          <CustomMenu onClick={()=>setOpen(true)}/>
         </RightMenu>
         <BurgerNav show={open}>
           <ClearWrap>
              <CustomClear onClick={()=>setOpen(false)}/>
           </ClearWrap>
           {cars && cars.map((car,i)=>(
           <li><a key={i} href={() => false}>{car}</a></li>
          ))}
             <li><a href={() => false}>Shop</a></li>
             <li><a href={() => false}>Shop</a></li>
             <li><a href={() => false}>Shop</a></li>
             <li><a href={() => false}>Shop</a></li>
             <li><a href={() => false}>Shop</a></li>
             <li><a href={() => false}>Shop</a></li>
         </BurgerNav>
		</Container>
		)
}
export default Header;


const Container = styled.div`
 min-height:60px;
 position:fixed;
 top:0;
 left:0;
 right:0;
 display:flex;
 align-items:center;
 justify-content:space-between;
 padding:0 20px;
 z-index:1;

`
const Menu = styled.div`
  display:flex;
  align-items:center;
  justify-content:center; 
  flex:1;
  a{
  	font-weight:600;
  	text-transform:uppercase;
  	padding:0 10px;
  	flex-wrap:nowrap;

  }
  @media(max-width:768px){
  	display:none;
  }

`

const RightMenu = styled.div`
display:flex;
align-items:center;
a{
  	font-weight:600;
  	text-transform:uppercase;
  	margin-right:10px;
  	flex-wrap:nowrap;

  }

`
const CustomMenu = styled(MenuIcon)`
  cursor:pointer;
`
const BurgerNav = styled.div`
position:fixed;
top:0;
right:0;
bottom:0;
background-color:white;
width:300px;
z-index:16;
padding:20px;
list-style:none;
display:flex:
flex-direction:column;
text-align:left;
transform:${props => props.show ? 'translateX(0)' : 'translateX(100%)'};
transition:transform 0.3s ;
li{
	padding:15px 0;
	border-bottom:1px solid rgba(0,0,0,.2);
	a{
		font-weight:600;

	}
}
`
const CustomClear= styled(ClearIcon)`
cursor:pointer;

`
const ClearWrap = styled.div`
display:flex;
justify-content:flex-end;
`