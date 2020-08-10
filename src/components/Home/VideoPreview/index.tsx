import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import {Paper} from '@material-ui/core';

import PlayerController from './PlayerController';

interface PropsVideoPreview {
  videoUrl: string;
}

const VideoPreview: React.FC<PropsVideoPreview> = ({videoUrl}) => {
  const [videoId, setVideoId] = useState('');

  useEffect(() => {
    getVideoIdFromUrl(videoUrl);
  }, [videoUrl]);

  const getVideoIdFromUrl = (url: string) => {
    const filterRegex = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
    const match = url.match(filterRegex);

    setVideoId(match && match[7].length === 11 ? match[7] : '');
  };

  return (
    <Container elevation={0}>
      {videoId && (
        <>
          <StyledIframe
            width="560"
            height="315"
            title="oi"
            src={`https://www.youtube.com/embed/${videoId}`}
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          />
          <PlayerController />
        </>
      )}
    </Container>
  );
};

const Container = styled(Paper)`
  border-radius: 0px;
`;

const StyledIframe = styled.iframe`
  width: 100vw;
  height: 56vw;
  max-width: 920px;
  max-height: 520px;

  margin-top: 20px;
`;

export default VideoPreview;
