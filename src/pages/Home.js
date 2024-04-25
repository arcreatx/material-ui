import React from 'react'
import { Grid } from '@mui/material';
import MediaCard from '../components/MediaCard';
import jobs from '../jobs.json';
import Container from '@mui/material/Container';
import PaginationControlled from '../components/PaginationControlled';
import { useParams } from 'react-router-dom';

let a; 
let b;


function Home() {
  const param = useParams();
  const page = Number(param.page);
  if (page === 1) {
    a = 0;
    b = 5;
  } else if (page === 2) {
    a = 6;
    b = 10
  } else if (page === 3) {
    a = 11; b = 14;
  };

  console.log(param);

  return (
    <Container>
          <Grid container spacing={2} sx={{mt:1}}>
          {jobs.slice(a,b).map(job=>(
              <Grid key={job.id} item xs={12} md={4} lg={4} sm={5}>
                  <MediaCard job={job}/>
              </Grid>
          ))}
        </Grid>
        <PaginationControlled/>
    </Container>
  )
}

export default Home