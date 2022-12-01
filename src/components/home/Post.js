import { Box, Typography, styled, Grid, Paper} from "@mui/material";

const Container = styled(Box)`
margin-top: 20px;

width: 90%;
`

export default function Post({data}){
    
    return (
        <>
        
        <Container >
        <Paper elevetion={20} >
            <Grid container>
                <Grid item lg={6} sm={6} xs={12}>
                    <Typography>Author:{data.username}</Typography>
                </Grid>
                <Grid item lg={6} sm={6} xs={12}>
                    <Typography>Date:{data.date}</Typography>
                </Grid>
            </Grid>
           <Typography>title: {data.title}</Typography> 
           <Typography>post: {data.post}</Typography> 
           </Paper >
        </Container>
        </>
    )
}