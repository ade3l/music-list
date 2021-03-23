import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import './App.css';
import classnames from 'classnames';
import SearchIcon from '@material-ui/icons/Search';
import Grid from '@material-ui/core/Grid';
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar className="navbar">
          
          <Typography variant="h4" className={classnames("navbar-title",classes.title)}>
            Home
          </Typography>
          <IconButton aria-label="search" color="inherit">
            <SearchIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Grid container spacing={3} >
        
        <Grid item xs={6} style={ { display: "flex", justifyContent: "space-around" } }>
        
        <Card className={classnames("card",classes.root)}>
            <CardMedia
              component="img"
              
              alt="Contemplative Reptile"
              className={classnames("album-art",classes.media)}
              image={'https://firebasestorage.googleapis.com/v0/b/musicapp-iste.appspot.com/o/Cover%2FHozier.jpeg?alt=media&token=f1b04756-b67c-4869-8368-1f3991c8bab8'}
              title="Paella dish"
            />

            <CardContent style={{backgroundColor: "black"}}>
              <Typography gutterBottom variant="h5" component="h2">
                Song name
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Artist
              </Typography>
            </CardContent>
          </Card>
    
        </Grid>
        <Grid item xs={6} style={ { display: "flex", justifyContent: "space-around" } }>
        <Card className={classnames("card",classes.root)}>
            <CardMedia
              component="img"
              
              alt="Contemplative Reptile"
              className={classnames("album-art",classes.media)}
              image={'https://firebasestorage.googleapis.com/v0/b/musicapp-iste.appspot.com/o/Cover%2FHozier.jpeg?alt=media&token=f1b04756-b67c-4869-8368-1f3991c8bab8'}
              title="Paella dish"
            />

            <CardContent style={{backgroundColor: "black"}}>
              <Typography gutterBottom variant="h5" component="h2">
                Song name
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Artist
              </Typography>
            </CardContent>
          </Card>
    
        </Grid>
        
      </Grid>

      <Grid container spacing={3} >
        
        <Grid item xs={6} style={ { display: "flex", justifyContent: "space-around" } }>
        
        <Card className={classnames("card",classes.root)}>
            <CardMedia
              component="img"
              
              alt="Contemplative Reptile"
              className={classnames("album-art",classes.media)}
              image={'https://firebasestorage.googleapis.com/v0/b/musicapp-iste.appspot.com/o/Cover%2FHozier.jpeg?alt=media&token=f1b04756-b67c-4869-8368-1f3991c8bab8'}
              title="Paella dish"
            />

            <CardContent style={{backgroundColor: "black"}}>
              <Typography gutterBottom variant="h5" component="h2">
                Song name
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Artist
              </Typography>
            </CardContent>
          </Card>
    
        </Grid>
        <Grid item xs={6} style={ { display: "flex", justifyContent: "space-around" } }>
        <Card className={classnames("card",classes.root)}>
            <CardMedia
              component="img"
              
              alt="Contemplative Reptile"
              className={classnames("album-art",classes.media)}
              image={'https://firebasestorage.googleapis.com/v0/b/musicapp-iste.appspot.com/o/Cover%2FHozier.jpeg?alt=media&token=f1b04756-b67c-4869-8368-1f3991c8bab8'}
              title="Paella dish"
            />

            <CardContent style={{backgroundColor: "black"}}>
              <Typography gutterBottom variant="h5" component="h2">
                Song name
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Artist
              </Typography>
            </CardContent>
          </Card>
    
        </Grid>
        
      </Grid>

      <Grid container spacing={3} >
        
        <Grid item xs={6} style={ { display: "flex", justifyContent: "space-around" } }>
        
        <Card className={classnames("card",classes.root)}>
            <CardMedia
              component="img"
              
              alt="Contemplative Reptile"
              className={classnames("album-art",classes.media)}
              image={'https://firebasestorage.googleapis.com/v0/b/musicapp-iste.appspot.com/o/Cover%2FHozier.jpeg?alt=media&token=f1b04756-b67c-4869-8368-1f3991c8bab8'}
              title="Paella dish"
            />

            <CardContent style={{backgroundColor: "black"}}>
              <Typography gutterBottom variant="h5" component="h2">
                Song name
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Artist
              </Typography>
            </CardContent>
          </Card>
    
        </Grid>
        <Grid item xs={6} style={ { display: "flex", justifyContent: "space-around" } }>
        <Card className={classnames("card",classes.root)}>
            <CardMedia
              component="img"
              
              alt="Contemplative Reptile"
              className={classnames("album-art",classes.media)}
              image={'https://firebasestorage.googleapis.com/v0/b/musicapp-iste.appspot.com/o/Cover%2FHozier.jpeg?alt=media&token=f1b04756-b67c-4869-8368-1f3991c8bab8'}
              title="Paella dish"
            />

            <CardContent style={{backgroundColor: "black"}}>
              <Typography gutterBottom variant="h5" component="h2">
                Song name
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Artist
              </Typography>
            </CardContent>
          </Card>
    
        </Grid>
        
      </Grid>
    </div>
  );
}