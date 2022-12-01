import { Button, Table, TableBody, TableCell, TableHead, TableRow } from "@mui/material";
import categories from "../../constants/categories";
 import {Link} from 'react-router-dom';

export default function Category(){
    // console.log(categories);
return (
    <>
    <Link to='/create' style={{textDecoration: 'none'}}>
    <Button variant='contained'>Create a blog</Button>
    </Link>
    <Table>
     <TableHead>
        <TableRow>
            <TableCell>All Categories</TableCell>
        </TableRow>
     </TableHead>
     <TableBody>
        {categories.map(category=>
            <TableRow key={category.id}>
                <TableCell>{category.value}</TableCell>
            </TableRow>
            )}
     </TableBody>
    </Table>
    </>
)


}