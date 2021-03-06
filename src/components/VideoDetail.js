import React from 'react';
import {Paper, Typography, Link} from '@material-ui/core';

const VideoDetail = ({video, fetchClips}) => {
  if(!video) return <div>Loading...</div>;
  console.log(video.id);
  const videoSrc = video.embed_url + "&parent=localhost";
  return (
    <React.Fragment>
      <Paper elevation={6} style={{height: '70vh'}}>
        <iframe frameBorder="0" height="100%" width="100%" allowFullScreen={true} src={videoSrc} />
      </Paper>
      <Paper elevation={6} style={{padding: '15px'}}>
      <Link href="#" onClick={() =>fetchClips(video.broadcaster_id)}> {video.broadcaster_name} </Link>
        <Typography variant="h4">{video.title}</Typography>
        <Typography variant="subtitle1">{video.broadcaster_name} </Typography>
        <Typography variant="subtitle2">{video.game_id}</Typography>
        <Typography variant="subtitle2">{video.view_count} views</Typography>
      </Paper>
    </React.Fragment>

  )
}

export default VideoDetail;