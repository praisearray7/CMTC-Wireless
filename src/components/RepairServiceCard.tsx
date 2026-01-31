import React from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Box, Typography, Tooltip } from '@mui/material';
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
  const router = useRouter();

  // Helper to format price
  const getPriceValue = (p: string) => {
    const val = parseFloat(p.replace(/[^0-9.]/g, ''));
    return isNaN(val) ? 0 : val;
  };

  const formatPrice = (p: string, extra: number = 0) => {
    const val = getPriceValue(p);
    if (val === 0) return 'Contact';
    return `$${(val + extra).toFixed(2)}`;
  };

  return (
    <RepairCard
      title={title}
      description={description}
      image={image}
      icon={Icon}
      // Main card click disabled as per user request
      // onClick={handleRowClick}
    >
      <Box
        sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}
        onClick={(e) => e.stopPropagation()}
      >
        {rows.map((r, i) => {
          const subSlug = r['Sub-Type Title']
            .toLowerCase()
            .replace(/\s+/g, '-')
            .replace(/[^a-z0-9-]/g, '');
          const href = `/${serviceId}/${modelId}/${subSlug}`;

          return (
            <Tooltip title={r['Description'] || ''} arrow placement='bottom' key={i}>
              <Link href={href} style={{ textDecoration: 'none' }}>
                <Box
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
                  <Typography
                    variant='body2'
                    sx={{ fontWeight: 600, color: '#000000', fontSize: '0.9rem' }}
                  >
                    {r['Sub-Type Title'] === 'Standard' ? 'Service Price' : r['Sub-Type Title']}
                  </Typography>
                  <Typography
                    className='price-text'
                    variant='body2'
                    sx={{ fontWeight: 700, color: '#000000' }}
                  >
                    {formatPrice(r['Sub-Type Price (USD)'])}
                  </Typography>
                </Box>
              </Link>
            </Tooltip>
          );
        })}
      </Box>
    </RepairCard>
  );
};

export default RepairServiceCard;
