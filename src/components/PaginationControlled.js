import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { useNavigate } from 'react-router-dom';


export default function PaginationControlled() {
    const [page, setPage] = React.useState(1);
    const navigate = useNavigate();
    const handleChange = (event, value) => {
        setPage(value);
        navigate(`/pages/${value}`)
    };
    

    console.log(page);
    return (
        <Stack spacing={2} sx={{position: "relative"}} >
            <Pagination sx={{position: "absolute", top: "2rem"}} count={3} page={page} onChange={handleChange} />
        </Stack>
    );
}
