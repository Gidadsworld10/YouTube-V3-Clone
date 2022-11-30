import { CheckCircle } from '@mui/icons-material'
import { Card, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import { demoChannelTitle, demoChannelUrl, demoVideoTitle, demoVideoUrl } from '../utils/constants'

const VideoCard = ({ video: { id: { videoId }, snippet } }) => {

    return (
        <Card sx={{ width: {xs: "100%", sm:"358px", md: "320px"  }, boxShadow: "none", borderRadius: "8px" }}>
            <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
                <CardMedia
                    image={snippet?.thumbnails?.high?.url}
                    alt={snippet?.title}
                    sx={{ width: {
                        xs: "100%", sm:"358px", md: "320px",
                    }, height: 180 }}
                />
            </Link>
            <CardContent sx={{ bgcolor: "#1e1e1e", height: "106px" }}>
                <Link
                    to={videoId ? `/video/${videoId}` : demoVideoUrl}>
                    <Typography
                        variant='subtitle1'
                        fontWeight="bold" color="#fff">
                        {snippet ? `${snippet.title.slice(0, 60)}` :
                            `${demoVideoTitle.slice(0, 60)}`}
                    </Typography>
                </Link>
                <Link
                    to={snippet?.channelId ? `/channel/${snippet?.channelId}` :
                        demoChannelUrl}>
                    <Typography
                        variant='subtitle2'
                        fontWeight="bold" color="gray">
                        {snippet ? `${snippet.channelTitle}` :
                            `${demoChannelTitle}`}
                        <CheckCircle
                            sx={{ fontSize: 12, ml: 5, color: "gray" }} />
                    </Typography>
                </Link>
            </CardContent>
        </Card>
    )
}

export default VideoCard