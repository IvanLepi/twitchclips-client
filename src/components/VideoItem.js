import React from 'react';

import { Grid, Paper, Typography} from '@material-ui/core';

const VideoItem = ({video, onVideoSelect}) => {
  return (
    <Grid item xs={12}>
      <Paper elevation={6} style={{display:'flex', alignItems: 'center', cursor: 'pointer'}} onClick={() => onVideoSelect(video)}>
        <img style={{width:'100%'}} alt="thumb" src={video.thumbnail_url}/>
      </Paper>
      <Paper elevation={6} style={{padding: '5px'}}>
        <Typography variant="subtitle1">{video.title}</Typography>
      </Paper>
    </Grid>
  );
}

export default VideoItem;