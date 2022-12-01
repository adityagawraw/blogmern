import {Box, Button, TextField, styled} from '@mui/material';
import { useState, useContext } from 'react';
import { DataContext2 } from '../../App';
import blogLogo from '../../blogImage.png';
import { useNavigate } from 'react-router-dom';

const Component = styled(Box)`
width : 400px;
margin : auto;
box-shadow: 5px 2px 5px 3px black;
margin-top: 30px;
`;
const  Image = styled('img')`
width: 100px;
display: flex;
margin : auto;
padding: 15px 0px 0px ;
`
const Wrapper = styled(Box)`
display : flex;
flex-direction: column;
`;
const LoginButton = styled(Button)`

`;
const SignUpButton = styled(Button)`

`;

const signupInitialValues = {
    name:"",
    username:"",
    password:""
}

const loginInitialValues = {
    username:"",
    password:""
}

export default function Login(){


const [account, setAccount] = useState('login');
const [signup, setSignup] = useState(signupInitialValues);
const [login, setLogin] = useState(loginInitialValues);
let {accountValue,setAccountValue,isAuthenticated , setAuthentication }= useContext(DataContext2);
// console.log(typeof(accountValue));
let navigate= useNavigate();


function toggleaccount(){
    account =='login' ? setAccount('signup'): setAccount('login');
}

function signUpValue(e){
setSignup({...signup, [e.target.name]:e.target.value});
// console.log(signup);
}

function loginValue(e){
    setLogin({...login, [e.target.name]:e.target.value});
    console.log(login);
}


async function saveToDB(){
    const {name, username, password} = signup;
    console.warn(name,username, password );
    const result = await fetch('http://localhost:4001/signup',{
        method:'post',
        body: JSON.stringify({name, username, password}),
        headers:{
            "Content-Type":"application/json"
        }
    });
    console.log(await result.json());
}

async function loginuser(){
    const { username, password} = login; 
    const result = await fetch('http://localhost:4001/login',{
        method:'post',
        body: JSON.stringify(login),
        headers:{
            "Content-Type":"application/json"
        }
    });
    const userdata = await result.json()
    console.log(userdata);

    await setAuthentication(!isAuthenticated);
    setAccountValue({ name:userdata.data.name, username: userdata.data.username});
    console.log(isAuthenticated, accountValue);
    navigate('/');
}


    return(
        <Component>
            <Image src={blogLogo} />
            {account == 'login' ?
            <Wrapper>
            <TextField label="Enter your Username" onChange={(e)=>loginValue(e)} name="username"/>
            <TextField label="Enter your Password" onChange={(e)=>loginValue(e)} name="password"/>
            <LoginButton variant="contained" onClick={loginuser}>Log In</LoginButton>
            <p>OR</p>
            <SignUpButton variant="outlined" onClick={toggleaccount}>Create an account</SignUpButton>
            </Wrapper>
            :
            <Wrapper>
            <TextField label="Enter your Name" onChange={(e)=>signUpValue(e)} name="name"/>
            <TextField label="Enter your Username" onChange={(e)=>signUpValue(e)} name="username"/>
            <TextField label="Enter your Password" onChange={(e)=>signUpValue(e)} name="password"/>
            <SignUpButton variant="outlined"  onClick={saveToDB}>Sign Up</SignUpButton>
            <p>OR</p>
            <LoginButton variant="contained" onClick={toggleaccount}>Log In</LoginButton>
            </Wrapper>
            }

        </Component>
    )
}