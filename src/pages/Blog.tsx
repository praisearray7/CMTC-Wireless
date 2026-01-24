import { useState } from 'react';
import { Box, Container, Typography, Dialog, DialogContent, IconButton } from '@mui/material';
import VideoMarquee from '../components/VideoMarquee';
import CloseIcon from '@mui/icons-material/Close';
import { blogSections } from '../data/blogVideos';

const Blog = () => {
    const [open, setOpen] = useState(false);
    const [currentVideoSrc, setCurrentVideoSrc] = useState<string | null>(null);

    const handlePlayVideo = (link: string) => {
        // Simple logic: if it looks like a full URL, use it (or convert to embed if needed).
        // If it looks like just an ID, assume it's a folder ID.

        let src = link;

        // 1. If it's a standard Google Drive Folder Link, convert to Embed View
        if (link.includes('drive.google.com/drive/folders/')) {
            const folderId = link.split('folders/')[1]?.split(/[/?]/)[0];
            src = `https://drive.google.com/embeddedfolderview?id=${folderId}#grid`;
        }
        // 2. If it's just an ID (old data format fallback)
        else if (!link.includes('http') && !link.includes('drive.google.com')) {
            src = `https://drive.google.com/embeddedfolderview?id=${link}#grid`;
        }
        // 3. If it's a direct file link (e.g. /file/d/ID/view), we might need to change /view to /preview for embedding
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
                        Tech Lab Videos
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
                    {/* 
                        Mapping data to VideoMarquee. 
                        Note: The component expects { title, category, folderId, thumbnail }.
                        We map our new 'link' to 'folderId' property for compatibility.
                    */}
                    <VideoMarquee
                        videos={section.videos.map(v => ({
                            title: v.title,
                            category: v.category,
                            folderId: v.link, // Passing the full link as the ID
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

export default Blog;
