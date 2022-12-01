import { Box ,styled} from "@mui/material"
import { useEffect, useState } from "react"
import { DataContext2 } from "../../App"
import Post from "./Post"

const Container = styled(Box)`

// background: #878787;
width: 90%;
display: flex;
flex-direction: column;
align-items: center;
`

export default  function Posts(){
    useEffect(()=>{
        async function fetchPostData(){
          const result = await fetch ('http://localhost:4001/postdata');
        const post = await result.json();
        console.log(post.data);
        setPostData(post.data);
        
        }
        fetchPostData();
    },[]);
    let [postData , setPostData ] = useState();
    return( 
    <>
    <Container>
    {postData?postData.map((data)=>{
        return (
            <Post data ={data} />
        )
    }): null}
    </Container>
    </>
    )
}