import { useState } from 'react';
import { Box, Container, Typography, Dialog, DialogContent, IconButton } from '@mui/material';
import VideoMarquee from '../components/VideoMarquee';
import CloseIcon from '@mui/icons-material/Close';
import { blogSections } from '../data/blogVideos';
import { colors } from '../theme/colors';
import SEO from '../components/SEO';

const Blogs = () => {
    const [open, setOpen] = useState(false);
    const [currentVideoSrc, setCurrentVideoSrc] = useState<string | null>(null);

    const handlePlayVideo = (link: string) => {
        let src = link;
        if (link.includes('drive.google.com/drive/folders/')) {
            const folderId = link.split('folders/')[1]?.split(/[/?]/)[0];
            src = `https://drive.google.com/embeddedfolderview?id=${folderId}#grid`;
        }
        else if (!link.includes('http') && !link.includes('drive.google.com')) {
            src = `https://drive.google.com/embeddedfolderview?id=${link}#grid`;
        }
        else if (link.includes('/view')) {
            src = link.replace('/view', '/preview');
        }

        setCurrentVideoSrc(src);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        setCurrentVideoSrc(null);
    };

    return (
        <Box sx={{ minHeight: '80vh' }}>
            <SEO
                title="Tech Lab Videos"
                description="Watch our expert repair technicians in action. Learn about our repair process for iPhones, MacBooks, and more."
            />
            {/* Header Section */}
            <Box sx={{
                py: 8,
                textAlign: 'center',
                background: 'linear-gradient(135deg, #1a252f 0%, #2e7d32 100%)',
                color: 'white',
                mb: 6
            }}>
                <Container maxWidth="md">
                    <Typography variant="h3" sx={{ fontWeight: 800, mb: 2 }}>
                        <span style={{ color: 'white' }}> Tech </span>
                        <span style={{ color: colors.primary }}>Lab </span>
                        <span style={{ color: colors.primaryBlue }}>Videos</span>
                    </Typography>
                    <Typography variant="h6" sx={{ opacity: 0.9, fontWeight: 400 }}>
                        Watch our expert technicians in action.
                    </Typography>
                </Container>
            </Box>

            {/* Dynamic Sections from Data File */}
            {blogSections.map((section) => (
                <Box key={section.id} sx={{ mb: 8 }}>
                    <Container maxWidth="lg" sx={{ mb: 4 }}>
                        <Typography variant="h4" sx={{
                            fontWeight: 800,
                            mb: 1,
                            background: 'linear-gradient(90deg, #1b5e20 0%, #2e7d32 100%)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            display: 'inline-block'
                        }}>
                            {section.title}
                        </Typography>
                        <Typography variant="body1" color="textSecondary">
                            {section.description}
                        </Typography>
                    </Container>
                    <VideoMarquee
                        videos={section.videos.map(v => ({
                            title: v.title,
                            category: v.category,
                            folderId: v.link,
                            thumbnail: v.thumbnail || ''
                        }))}
                        onPlay={handlePlayVideo}
                    />
                </Box>
            ))}

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

export default Blogs;
