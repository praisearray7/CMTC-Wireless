'use client';

import { Box, Container, Typography, Rating, Avatar } from '@mui/material';
import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import CountUpAnimation from './CountUpAnimation';
import googleLogo from '../assets/google-logo.svg';
import { contactInfo } from '../data/contactInfo';
import { keyframes } from '@emotion/react';

// Keyframes for infinite scrolling
const scrollLeft = keyframes`
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
`;

const scrollRight = keyframes`
  0% { transform: translateX(-50%); }
  100% { transform: translateX(0); }
`;

const GoogleReviews = () => {

    const reviews = [
        {
            id: 1,
            name: 'Jean Gray',
            text: '"My phone screen was shattered, and they fixed it in just a few hours. Highly recommend!"',
            title: 'They saved my day!'
        },
        {
            id: 2,
            name: 'Barry Allen',
            text: '"The battery replacement service was quick and easy"',
            title: 'Phone is like new'
        },
        {
            id: 3,
            name: 'Diana Prince',
            text: '"The friendly staff repaired my water-damaged phone perfectly"',
            title: 'Excellent service'
        },
        {
            id: 4,
            name: 'Peter Parker',
            text: '"Great prices and super fast service. My laptop screen looks brand new!"',
            title: 'Amazing quality'
        },
        {
            id: 5,
            name: 'Natasha Romanoff',
            text: '"I thought my data was lost forever, but they managed to recover everything."',
            title: 'Lifesavers!'
        },
        {
            id: 6,
            name: 'Bruce Wayne',
            text: '"Professional, reliable, and efficient. I trust them with all my gadgets."',
            title: 'Top notch repair'
        },
        {
            id: 7,
            name: 'Tony Stark',
            text: '"They fixed my custom tech setup. Impressive knowledge and skill."',
            title: 'Genius level service'
        },
        {
            id: 8,
            name: 'Clark Kent',
            text: '"Honest pricing and transparent service. A rare find these days."',
            title: 'Superb experience'
        },
        {
            id: 9,
            name: 'Wanda Maximoff',
            text: '"My tablet was glitching badly, but they restored it to perfection."',
            title: 'Magic touch'
        },
        {
            id: 10,
            name: 'Steve Rogers',
            text: '"Old school customer service with modern repair techniques. Highly respected."',
            title: 'Reliable & Trustworthy'
        },
        {
            id: 11,
            name: 'Carol Danvers',
            text: '"Fastest turnaround I have ever seen. Back in action in no time."',
            title: 'Higher, further, faster'
        },
        {
            id: 12,
            name: 'T\'Challa',
            text: '"State-of-the-art repair facility. The quality of work is unmatched."',
            title: 'King of repairs'
        },
        {
            id: 13,
            name: 'Scott Lang',
            text: '"Small details matter, and they nailed it. Big thanks!"',
            title: 'Huge help'
        },
        {
            id: 14,
            name: 'Stephen Strange',
            text: '"They diagnosed a complex motherboard issue that others missed."',
            title: 'Sorcerer supreme of repairs'
        },
        {
            id: 15,
            name: 'Thor Odinson',
            text: '"My device was smashed, but they brought it back to life! Another!"',
            title: 'Worthy repairs'
        },
        {
            id: 16,
            name: 'Kara Zor-El',
            text: '"Friendly atmosphere and super helpful staff. Will definitely come back."',
            title: 'Super service'
        },
        {
            id: 17,
            name: 'Matt Murdock',
            text: '"I rely heavily on my devices for accessibility. They understood and delivered."',
            title: 'See the difference'
        },
        {
            id: 18,
            name: 'Logan',
            text: '"Tough device, but they fixed it. Good work, Bub."',
            title: 'Solid work'
        }
    ];

    // Split reviews into two rows
    const firstRow = reviews.slice(0, Math.ceil(reviews.length / 2));
    const secondRow = reviews.slice(Math.ceil(reviews.length / 2));

    // Duplicate arrays for seamless looping
    const row1Display = [...firstRow, ...firstRow, ...firstRow];
    const row2Display = [...secondRow, ...secondRow, ...secondRow];

    const ReviewCard = ({ review }: { review: typeof reviews[0] }) => (
        <Box sx={{
            minWidth: 350,
            maxWidth: 350,
            mx: 2,
            my: 2,
            p: 3,
            borderRadius: 4,
            bgcolor: '#fff',
            boxShadow: '0 8px 30px rgba(0,0,0,0.06)',
            border: '1px solid #f0f0f0',
            transition: 'transform 0.3s ease, box-shadow 0.3s ease',
            whiteSpace: 'normal', // Allow text wrapping
            '&:hover': {
                transform: 'translateY(-5px) scale(1.02)',
                boxShadow: '0 15px 40px rgba(0,0,0,0.12)',
                zIndex: 10
            }
        }}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <Avatar
                    src={`https://i.pravatar.cc/150?u=${review.name}`}
                    alt={review.name}
                    sx={{ width: 48, height: 48, mr: 2 }}
                />
                <Box>
                    <Typography variant="h6" sx={{ fontWeight: 700, fontSize: '1rem', color: '#0a1929' }}>
                        {review.name}
                    </Typography>
                    <Rating value={5} readOnly size="small" sx={{ color: '#FAAF00' }} />
                </Box>
                <Box sx={{ ml: 'auto' }}>
                    <Box
                        component="a"
                        href={contactInfo.address.both.mapLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            transition: 'opacity 0.2s',
                            '&:hover': { opacity: 0.7 }
                        }}
                        onClick={(e) => e.stopPropagation()} // Prevent card hover effects if necessary, or just good practice
                    >
                        <Box component="img" src={googleLogo.src} alt="Google" sx={{ width: 24, height: 24 }} />
                    </Box>
                </Box>
            </Box>

            <Typography variant="body2" sx={{ color: '#37474F', mb: 2, lineHeight: 1.6, fontStyle: 'italic', height: '4.8em', overflow: 'hidden', display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical' }}>
                {review.text}
            </Typography>

            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mt: 'auto' }}>
                <Typography variant="caption" sx={{ color: '#999', fontWeight: 600 }}>
                    {review.title}
                </Typography>
                <Box sx={{ ml: 'auto', display: 'flex', gap: 1 }}>
                    <ThumbUpAltOutlinedIcon sx={{ fontSize: 16, color: '#ccc' }} />
                    <ChatBubbleOutlineIcon sx={{ fontSize: 16, color: '#ccc' }} />
                </Box>
            </Box>
        </Box>
    );

    return (
        <Box sx={{ py: 10, overflow: 'hidden' }}>
            <Container maxWidth="lg" sx={{ mb: 6, textAlign: 'center' }}>
                <Typography variant="h3" sx={{ fontWeight: 800, color: '#0a1929', mb: 2 }}>
                    Over <CountUpAnimation target={500} duration={2000} />+ Positive Google Reviews
                </Typography>
                <Typography variant="h6" sx={{ color: '#555', fontWeight: 400 }}>
                    Don't just take our word for it. Here is what our customers are saying.
                </Typography>
            </Container>

            <Box sx={{
                position: 'relative',
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
                    background: 'linear-gradient(to right, #fff, transparent)',
                },
                '&::after': {
                    right: 0,
                    background: 'linear-gradient(to left, #fff, transparent)',
                }
            }}>
                {/* Row 1: Left Scroll */}
                <Box sx={{
                    display: 'flex',
                    width: 'fit-content',
                    animation: `${scrollLeft} 120s linear infinite`,
                    '&:hover': { animationPlayState: 'paused' },
                    mb: 1
                }}>
                    {row1Display.map((review, index) => (
                        <ReviewCard key={`row1-${index}`} review={review} />
                    ))}
                </Box>

                {/* Row 2: Right Scroll */}
                <Box sx={{
                    display: 'flex',
                    width: 'fit-content',
                    animation: `${scrollRight} 120s linear infinite`,
                    '&:hover': { animationPlayState: 'paused' }
                }}>
                    {row2Display.map((review, index) => (
                        <ReviewCard key={`row2-${index}`} review={review} />
                    ))}
                </Box>
            </Box>
        </Box>
    );
};

export default GoogleReviews;
