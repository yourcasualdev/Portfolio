import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import reptile from './reptile.jpg'
import { display } from '@mui/system';

export default function MediaCard({ name, description, text, slug }) {
    return (
        <div className='mediacard'>
            <Card sx={{ width: 350, }} key={slug} className="mediaCard">
                <CardMedia
                    component="img"
                    height="140"
                    image={reptile}
                    alt="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {description}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small" href={`/projects/${slug}`}>Learn More</Button>
                </CardActions>
            </Card>
        </div>
    );
}