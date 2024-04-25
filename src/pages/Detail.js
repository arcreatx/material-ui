import React from 'react';
import {useParams} from 'react-router-dom'
import jobs from '../jobs.json';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
// import Box from '@mui/material/Box';
function Detail() {

    const params = useParams();
    const jobId = params.id;
    const job = jobs.find((job) => job.id === jobId)

    if (!job) {
        return (
            <Typography variant="h3" marginTop={3}>
                No job found !
            </Typography>)
    }
  return (
    <Container sx={{width:900}}>
        <Typography variant="h3" marginTop={3}>
            {job.title}

        </Typography>
        {/* <Box marginTop={3} sx={{display:"flex"}}></Box> */}
    </Container>
  )
}

export default Detail