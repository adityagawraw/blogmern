
import { AppBar, Toolbar, styled } from "@mui/material";
import { useContext } from "react";
import {Link} from "react-router-dom";
import { DataContext2 } from '../../App';

const Component = styled(AppBar)`
color : white;
`
const Container = styled(Toolbar)`
justify-content: center;
& > a {
    padding : 20px
    color : #FFFFFF;
    text-decoration : none;
}
`


export default function Header(){
    let {accountValue,setAccountValue, isAuthenticated , setAuthentication }= useContext(DataContext2);
    function logout(){
        // setAuthentication(isAuthenticated=>isAuthenticated=false);
        // setAccountValue ({name:'', username:'' });
        console.log(isAuthenticated, accountValue);
    }

return (
    <Component>
        <Container>
            <Link to='/' style={{color: 'white', padding : '20px', textDecoration : "none"}}>Home</Link>
            <Link to='/' style={{color: 'white', padding : '20px', textDecoration : "none"}}>About</Link>
            <Link to='/' style={{color: 'white', padding : '20px', textDecoration : "none"}} onClick={()=> console.log(isAuthenticated, accountValue)}>Contact</Link>
            <Link to='/login' style={{color: 'white', padding : '20px', textDecoration : "none"}}
            onClick ={logout}>
                {isAuthenticated ? <>Logout</>:<>Login</>}
            </Link>
        </Container>
    </Component>
)
}