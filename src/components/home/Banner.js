import { Box, Typography, styled } from "@mui/material";
import bannerpic from '../home/bannerpic.jpg';

const Image =  styled(Box)`
background:url(${bannerpic});
width : 100%;
height : 200px;
display:flex ;
flex-direction: column;
justify-content: center;
align-items: center;
`
const Heading  = styled(Typography)`
font-size:30px;
color:white;

`
const SubHeading  = styled(Typography)`
background:white;
padding:0 5px 0 5px;

`

export default function Banner (){
return (
<Image>
    {/* <img src={bannerpic}></img> */}
    <Heading>BLOG</Heading>
    <SubHeading>by aditya</SubHeading>
</Image>

)
}