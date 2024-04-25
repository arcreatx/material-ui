import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import Divider from '@mui/material/Divider';
import {useNavigate} from 'react-router';

// const bull = (
//   <Box
//     component="span"
//     sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
//   >
//     •
//   </Box>
// );

// const card = (
//   <React.Fragment>
    
//   </React.Fragment>
// );


export default function MediaCard({job}) {
    const navigate = useNavigate();
    return (
            <Box >
                <Card variant="outlined" sx={{height:300, position: "relative", backgroundColor: "rgb(18, 18, 18)"}} key={job.id}>
                    <CardContent>
                        <Typography variant="h6" component='span'>
                            {job.title}
                        </Typography>
                        <Divider variant="middle" />
                        <Typography sx={{ mb: 1.5 }} color="text.secondary">
                            {job.skills.map((skill) => ( <Chip key={skill} color="primary" label={skill} size="small"/>))}
                        </Typography>
                        <Typography variant="body2">
                            {job.description}
                        </Typography>
                    </CardContent>
                    <CardActions sx={{position: "absolute", bottom: "2rem", left: "30%"}}>
                        <Button variant="contained" sx={{background:"rgb(255, 167, 38)", color: "black"}} size="small" onClick={() => navigate(`/job/${job.id}`)}>Learn More</Button>
                    </CardActions>
                </Card>
            </Box>
    );
}