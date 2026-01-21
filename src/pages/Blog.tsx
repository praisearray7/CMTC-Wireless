import { useState } from 'react';
import { Box, Container, Typography, Dialog, DialogContent, IconButton } from '@mui/material';
import VideoMarquee, { type VideoItem } from '../components/VideoMarquee';
import CloseIcon from '@mui/icons-material/Close';
import macbookThumb from '../assets/macbook_repair_thumb.jpg';

import logicBoardThumb from '../assets/logic_board_thumb.jpg';

// Helper to generate video items. 
const generateVideos = (count: number, category: string, folderId: string, thumb: string, baseTitle: string): VideoItem[] => {
    return Array.from({ length: count }, (_, i) => ({
        title: `${baseTitle} ${i + 1}`,
        category: category,
        folderId: folderId,
        thumbnail: thumb
    }));
};

// 1. MacBook Repair Data
const macbookVideos: VideoItem[] = generateVideos(10, 'Laptop Repair', '1v3R2eqYYU6GWtrHFBbsRXEdggma_wxwh', macbookThumb, 'MacBook Repair Guide');

// 2. PC Assembly Data
const pcVideos: VideoItem[] = generateVideos(10, 'Custom Builds', '1N8vswoII1zu2g_yfGZvL7zHwcCT5bmeu', 'https://images.unsplash.com/photo-1587202372775-e229f172b9d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80', 'PC Build Series');

// 3. Cell Phone Repair Data
const phoneVideos: VideoItem[] = generateVideos(10, 'Mobile Repair', '1T-vw8ipPax6YjME1UzUqJs6uo3M9n89J', 'https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80', 'Phone Fix');

// 4. Logic Board Repair (100 Items)
const logicBoardVideos: VideoItem[] = generateVideos(100, 'Micro Soldering', '1yLD3ib0-Di-4lQGtmsmvLwM2oeJ0wFJ9', logicBoardThumb, 'Logic Board Reel');

const Blog = () => {
    const [open, setOpen] = useState(false);
    const [currentVideoSrc, setCurrentVideoSrc] = useState<string | null>(null);

    const handlePlayVideo = (id: string) => {
        // Use the folder embed view for all videos
        const src = `https://drive.google.com/embeddedfolderview?id=${id}#grid`;

        setCurrentVideoSrc(src);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        setCurrentVideoSrc(null);
    };

    const renderSection = (title: string, description: string, videos: VideoItem[]) => (
        <Box sx={{ mb: 8 }}>
            <Container maxWidth="lg" sx={{ mb: 4 }}>
                <Typography variant="h4" sx={{ fontWeight: 700, mb: 1 }}>{title}</Typography>
                <Typography variant="body1" color="textSecondary">{description}</Typography>
            </Container>
            <VideoMarquee videos={videos} onPlay={handlePlayVideo} />
        </Box>
    );

    return (
        <Box sx={{ minHeight: '80vh', bgcolor: '#fbfbfb' }}>
            {/* Header Section */}
            <Box sx={{
                py: 8,
                textAlign: 'center',
                background: 'linear-gradient(135deg, #2C3E50 0%, #1a252f 100%)',
                color: 'white',
                mb: 6
            }}>
                <Container maxWidth="md">
                    <Typography variant="h3" sx={{ fontWeight: 800, mb: 2 }}>
                        Tech Lab Videos
                    </Typography>
                    <Typography variant="h6" sx={{ opacity: 0.9, fontWeight: 400 }}>
                        Watch our expert technicians in action.
                    </Typography>
                </Container>
            </Box>

            {/* 1. MacBook Section */}
            {renderSection('MacBook Repairs', 'Expert screen, battery, and logic board repairs for all Mac models.', macbookVideos)}

            {/* 2. PC Assembly Section */}
            {renderSection('PC Custom Builds', 'Watch us build high-performance gaming and workstation PCs.', pcVideos)}

            {/* 3. Cell Phone Section */}
            {renderSection('Cell Phone Repairs', 'iPhone and Android screen replacements, battery swaps, and more.', phoneVideos)}

            {/* 4. Logic Board Section */}
            {renderSection('Logic Board Microsoldering', 'Advanced component-level repairs and soldering work.', logicBoardVideos)}

            {/* Video Player Modal */}
            <Dialog
                open={open}
                onClose={handleClose}
                maxWidth="lg"
                fullWidth
                PaperProps={{
                    sx: {
                        borderRadius: 3,
                        bgcolor: 'background.paper',
                        overflow: 'hidden'
                    }
                }}
            >
                <Box sx={{
                    p: 2,
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    borderBottom: '1px solid #eee'
                }}>
                    <Typography variant="h6" sx={{ fontWeight: 700 }}>
                        Select a Video to Play
                    </Typography>
                    <IconButton onClick={handleClose}>
                        <CloseIcon />
                    </IconButton>
                </Box>
                <DialogContent sx={{ p: 0, height: '80vh', bgcolor: '#f5f5f5' }}>
                    {currentVideoSrc && (
                        <iframe
                            src={currentVideoSrc}
                            style={{
                                width: '100%',
                                height: '100%',
                                border: 'none'
                            }}
                            title="Video Player"
                            allowFullScreen
                        />
                    )}
                </DialogContent>
            </Dialog>
        </Box>
    );
};

export default Blog;
