
import { Grid, Box, styled } from "@mui/material";
import Category from "../categories/Category";
import Banner from "./Banner";
import Posts from "./Posts";



export default function Home(){
    
    return (
        <h1>
            <Banner/>
            <Grid container>
            <Grid item lg={2} sm={2} xs={12}>
            <Category/>
            </Grid>
            
            <Grid item lg={10} sm={10} xs={12}>
            {/* <Content> */}
            <Posts/>
            {/* </Content> */}
            
            </Grid>
            </Grid>
           
            
        </h1>
    )
}