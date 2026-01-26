import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Typography } from '@mui/material';
import RepairCard from './RepairCard';
import { colors } from '../theme/colors';

interface RepairServiceCardProps {
    title: string;
    description: React.ReactNode;
    image: string;
    icon: any;
    rows: any[];
    serviceId: string;
    modelId: string;
}

const RepairServiceCard: React.FC<RepairServiceCardProps> = ({
    title,
    description,
    image,
    icon: Icon,
    rows,
    serviceId,
    modelId
}) => {
    const navigate = useNavigate();

    // Helper to format price
    const getPriceValue = (p: string) => {
        const val = parseFloat(p.replace(/[^0-9.]/g, ''));
        return isNaN(val) ? 0 : val;
    };

    const formatPrice = (p: string, extra: number = 0) => {
        const val = getPriceValue(p);
        if (val === 0) return "Contact";
        return `$${(val + extra).toFixed(2)}`;
    };

    const handleRowClick = () => {
        // Updated Logic: Navigate to dynamic repair detail page
        // Route: /:serviceId/:modelId/:repairType
        // repairType needs to be slugified from title (e.g. "Screen Replacement" -> "screen-replacement")

        const slug = title.toLowerCase().replace(/ /g, '-').replace('/', '-');
        navigate(`/${serviceId}/${modelId}/${slug}`);
    };

    return (
        <RepairCard
            title={title}
            description={description}
            image={image}
            icon={Icon}
            onClick={handleRowClick}
        >
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                {rows.map((r, i) => (
                    <Box
                        key={i}
                        onClick={() => handleRowClick()}
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            p: 1.5,
                            borderRadius: 1.5,
                            bgcolor: '#fafafa',
                            cursor: 'pointer',
                            border: '1px solid transparent',
                            transition: 'all 0.2s',
                            '&:hover': {
                                bgcolor: '#f0fdf4',
                                borderColor: colors.primary,
                                '& .price-text': { color: colors.primary }
                            }
                        }}
                    >
                        <Typography variant="body2" sx={{ fontWeight: 600, color: '#2C3E50', fontSize: '0.9rem' }}>
                            {r['Sub-Type Title'] === 'Standard' ? 'Service Price' : r['Sub-Type Title']}
                        </Typography>
                        <Typography className="price-text" variant="body2" sx={{ fontWeight: 700, color: '#2C3E50' }}>
                            {formatPrice(r['Sub-Type Price (USD)'])}
                        </Typography>
                    </Box>
                ))}
            </Box>
        </RepairCard>
    );
};

export default RepairServiceCard;
