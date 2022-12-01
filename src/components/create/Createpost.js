import {Box, FormControl, styled, InputBase,TextareaAutosize, Button} from '@mui/material'
import postpic from './postpic.jpg';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import categories from '../../constants/categories';
import { useContext, useState } from 'react';
import { DataContext2 } from '../../App';

const Container = styled(Box)`


`

const Image = styled('img')`
width: 100%;
height: 300px;
`
const PostForm = styled(FormControl)`
display:flex;
flex-direction: row;
justify-content: space-around;

`

const TitleField = styled(InputBase)`
width: 40%;
font-size: 30px;
`
const PostArea = styled(TextareaAutosize)`
width: 80%;
margin:10px 30px 10px 30px;
border:none;
font-size:25px;
& : focus-visible{
    outline : none;
}

`

let postObj ={
    username:'',
    title:'',
    post:'',
    date:new Date(),
   category:'Music',
}
 
export default function CreatePost(){
    let [postData ,setPostData ] = useState(postObj);
    let {accountValue }= useContext(DataContext2);

function setData(e){
    setPostData({...postData, [e.target.name]: e.target.value, username:accountValue.username});
}

async function savePostToDb (){
    const {username,title,post,date,category} = postData;
  const result = await fetch('http://localhost:4001/post',{
    method : 'post',
    body: JSON.stringify({username,title,post,date,category}),
    handlers : {"Content-Type":"application/json"}
  })
    console.log( await result.json());
    console.log(postData)
}

    return (
        <>
       <Container>
         <Image src={postpic}></Image>
       
        <PostForm>
            <label htmlFor='picInput'><AddCircleIcon fontSize='large' /></label>
            <input 
            id='picInput'
            type={'file'}
            style={{display:'none'}}
            ></input>
            <TitleField placeholder="Title" value={postData.title} onChange={(e)=>setData(e)} name='title'></TitleField>
            <Button variant='contained' onClick={savePostToDb}>Publish</Button>
            
        </PostForm>
        {categories.map(category=>
        <Button 
         variant ={postData.category==category.value? "contained":"text"}  key={category.id}
         onClick={()=>{setPostData({...postData, category:category.value});
         }}>
            {category.value}
            </Button>)}
        <PostArea placeholder='Write your blog...' value={postData.post} onChange={(e)=>setData(e)} name='post'></PostArea>
       
        </Container>
        </>
    )
}