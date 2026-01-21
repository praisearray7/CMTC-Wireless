import { Box, Card, CardActionArea, CardMedia, Typography, useTheme } from '@mui/material';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import { keyframes } from '@emotion/react';

const scroll = keyframes`
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
`;

export interface VideoItem {
    title: string;
    category: string;
    folderId: string;
    thumbnail: string;
}

interface VideoMarqueeProps {
    videos: VideoItem[];
    onPlay: (folderId: string) => void;
}

const VideoMarquee = ({ videos, onPlay }: VideoMarqueeProps) => {
    const theme = useTheme();
    // Duplicate the array to ensure seamless looping
    const displayVideos = [...videos, ...videos, ...videos, ...videos];

    // Calculate duration based on number of items to ensure consistent speed
    // 10s per item allows for a slow, readable scroll. 
    // Logic Board (100 items) will take 1000s, others (10 items) will take 100s.
    const duration = Math.max(videos.length * 10, 40);

    return (
        <Box sx={{
            overflow: 'hidden',
            width: '100%',
            position: 'relative',
            py: 4,
            '&::before, &::after': {
                content: '""',
                position: 'absolute',
                top: 0,
                width: '150px',
                height: '100%',
                zIndex: 2,
                pointerEvents: 'none',
            },
            '&::before': {
                left: 0,
                background: 'linear-gradient(to right, #fbfbfb, transparent)',
            },
            '&::after': {
                right: 0,
                background: 'linear-gradient(to left, #fbfbfb, transparent)',
            }
        }}>
            <Box sx={{
                display: 'flex',
                width: 'fit-content',
                animation: `${scroll} ${duration}s linear infinite`,
                gap: 4,
                px: 2,
                '&:hover': {
                    animationPlayState: 'paused',
                }
            }}>
                {displayVideos.map((video, index) => (
                    <Card key={`${video.title}-${index}`} sx={{
                        minWidth: 320,
                        maxWidth: 320,
                        borderRadius: 4,
                        boxShadow: '0 8px 24px rgba(0,0,0,0.08)',
                        transition: 'transform 0.3s ease',
                        border: `1px solid ${theme.palette.divider}`,
                        '&:hover': {
                            transform: 'translateY(-8px) scale(1.02)',
                            boxShadow: `0 12px 32px ${theme.palette.primary.main}40`,
                        }
                    }}>
                        <CardActionArea
                            onClick={() => onPlay(video.folderId)}
                            sx={{ height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}
                        >
                            <Box sx={{ position: 'relative', width: '100%', height: 180 }}>
                                {video.thumbnail ? (
                                    <CardMedia
                                        component="img"
                                        height="180"
                                        image={video.thumbnail}
                                        alt={video.title}
                                        sx={{ objectFit: 'cover' }}
                                    />
                                ) : (
                                    <Box sx={{
                                        height: 180,
                                        width: '100%',
                                        background: 'linear-gradient(135deg, #2C3E50 0%, #3498DB 100%)',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center'
                                    }}>
                                        <PlayCircleOutlineIcon sx={{ fontSize: 48, color: 'rgba(255,255,255,0.5)' }} />
                                    </Box>
                                )}
                                <Box sx={{
                                    position: 'absolute',
                                    top: 0,
                                    left: 0,
                                    width: '100%',
                                    height: '100%',
                                    bgcolor: 'rgba(0,0,0,0.3)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    opacity: 0,
                                    transition: 'opacity 0.3s ease',
                                    '.MuiCardActionArea-root:hover &': {
                                        opacity: 1
                                    }
                                }}>
                                    <PlayCircleOutlineIcon sx={{ fontSize: 64, color: '#fff' }} />
                                </Box>
                            </Box>

                            <Box sx={{ p: 3, width: '100%' }}>
                                <Typography variant="h6" sx={{ fontWeight: 700, mb: 0.5, lineHeight: 1.2 }}>
                                    {video.title}
                                </Typography>
                                <Typography variant="body2" color="textSecondary">
                                    {video.category}
                                </Typography>
                            </Box>
                        </CardActionArea>
                    </Card>
                ))}
            </Box>
        </Box>
    );
};

export default VideoMarquee;
