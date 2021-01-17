import React from 'react';
import Grid from '@material-ui/core/Grid';
import styled from 'styled-components';
import { videosList } from 'src/videos';
import { Video } from '../types';
import { makeStyles } from '@material-ui/core/styles';
import { Modal, Backdrop, Fade } from '@material-ui/core';
import ReactPlayer from 'react-player';
import ClosePlayer from 'src/assets/img/closePlayer.svg';


const ThumbnailText = styled.span`
    position: absolute;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 2.5vh;
    color: white;
    transition: 0.2s ease-in-out;
    bottom: 15%;
    left: 10%;
    opacity: 0;
    transition: 0.2s ease-in-out;

    :after {
        content: ''; 
        display: block;
        width: 0;
        height: 2px;
        background: white;
        transition: width .3s;
    }
    
`;

const VideoThumbnail = styled.div`
    display: block;
    width: 100%;
    position: relative;
    height: 0;
    padding: 41.66% 0 0 0;
    overflow: hidden;
    background-color: #2d2d2d;
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    transition: 0.2s ease-in-out;
    letter-spacing: 6px;
    font-weight: 500;
    :hover {
        cursor: pointer;
        opacity: 0.8;
    }

    :hover ${ThumbnailText}:after {
        width: 100%;
    }

    :hover ${ThumbnailText} {
        opacity: 1;
        color: white;
        border-color: white;
        border-width: 1px;
        cursor: pointer;
        transition: 0.3s;
    }
`;

const VideosContainer = styled.div`
    padding: 80px 60px 30px 60px;
    width: 100%;
    height: 100%;
`;

const PlayerWrapper = styled.div `
    width: 50vw;
    max-width: 88.89vh;
    /* 16/9 = 1.778 */
    height: 28.12vw;
    /* height:width ratio = 9/16 = .5625  */
    max-height: 50vh;
`;



const useStyles = makeStyles(theme => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    }
}));

const Videos: React.FC = () => {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const [currrentVideo, setCurrentVideo] = React.useState('placeholder')
    let selectedVideoIndex: number = 0;

    const setKey = (key: number): number => {
        selectedVideoIndex = key;
        return key;
    }

    const handleOpen = (key: number) => {return () => {
        setCurrentVideo(videosList[key].videoLink);
        setOpen(true);
    }};

    const handleClose = () => {
        setOpen(false);
    };

    const renderVideosGrid = (video: Video, key: number) => {
        return (
            <Grid item xs={12} sm={12} md={6} lg={6} xl={4}>
                <VideoThumbnail style={{
                    backgroundImage: `url(${video.imageUrl})`
                }} key={setKey(key)} onClick={handleOpen(key)}>
                    <ThumbnailText>{video.title}</ThumbnailText>
                </VideoThumbnail>
            </Grid>
        );
    };
    return (
        <>
        <VideosContainer>
            <Grid container spacing={2} justify={'center'} direction={'row'} alignItems={'center'}>
                {videosList.map((video, key) => renderVideosGrid(video, key))}
            </Grid>
        </VideosContainer>
        <Modal
            className={classes.modal}
            open={open}
            onClose={handleClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
                timeout: 500,
            }}
        >
            <Fade in={open}>
                <div style={{outline: 'none'}}>
                    <img src={ClosePlayer} style={{float: 'right'}} />
                    <PlayerWrapper>
                        <ReactPlayer className='player' url={currrentVideo} width='100%' height='100%' controls={true}/>
                    </PlayerWrapper>
                </div>
            </Fade>
        </Modal>
        </>
    )
};

export default Videos;


