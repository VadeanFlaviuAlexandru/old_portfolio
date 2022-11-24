import './Work.scss'
import React, { Component } from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import { CardContent, CardMedia } from '@mui/material';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardActions from '@mui/material/CardActions';
import calculator from "../../assets/calculator.png"
import catalogue from "../../assets/catalogue.png"
import portfolio from "../../assets/portfolio.PNG"
import rps from "../../assets/rps.png"
import hero from "../../assets/hero.png"
import Familiar from './familiar.js'
import Proficient from './proficient.js'
import { info } from "../../info/info.js"

const projects = [
  {
    name: "Rock Paper Scissors",
    description: "A local Rock Paper Scissors game with client-side leaderboard.",
    image: rps,
  },
  {
    name: "Hero Association",
    description: "C.R.U.D. of a Hero Database, including a reactive form.",
    image: hero,
  },
  {
    name: "Fiction Catalogue",
    description: "A simple catalogue to find movies, films and novels after an inputted keyword.",
    image: catalogue,
  },
  {
    name: "Calculator",
    description: "A simple working calculator with a night and day theme button.",
    image: calculator,
  },
  {
    name: "Portfolio",
    description: "This very own portfolio! Was built from scratch with React and Materil UI.",
    image: portfolio,
  }
]



export default class Work extends Component {
  render() {
    return (
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <h1 className='text'>A couple of <span style={{ background: info.gradient, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>projects</span> I managed to finish</h1>
        <Box sx={{ display: 'flex', justifyContent: 'center', margin: "1%" }} container spacing={{ xs: 2, md: 3 }} columns={{ xs: 12, sm: 8, md: 3 }}>
          <Grid container justifyContent="center">
            {projects.map((project, i) => (
              <Grid className="Cards" margin="1%" item xs={12} sm={8} md={2} key={i}>
                <Card sx={{ maxWidth: 330 }} >
                  <CardMedia
                    component="img"
                    height="150"
                    image={project.image}
                    alt="poza"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {project.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {project.description}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">Demo</Button>
                    <Button size="small">Github</Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent:'space-evenly'}}>
          <Box sx={{ display: 'flex' ,flexDirection: 'column', width: '600px', justifyContent:"center", alignItems:'center',alignContent:'center', textAlign:'center' }}>
            <h1 className='text'>What I'm <span style={{ background: info.gradient, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>proficient</span> with</h1>
            <Proficient />
          </Box>
          <Box sx={{ display: 'flex' ,flexDirection: 'column', width: '600px', justifyContent:"center", alignItems:'center',alignContent:'center', textAlign:'center' }}>
            <h1 className='text'>What I'm <span style={{ background: info.gradient, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>familiar</span> with</h1>
            <Familiar />
          </Box>
        </Box>
      </Box>
    )
  }
}

