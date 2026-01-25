import {
    SvgIcon,
    type SvgIconProps
} from '@mui/material';
import { colors } from '../theme/colors';

const WarrantyIcon = (props: SvgIconProps) => {
    return (
        <SvgIcon {...props} viewBox="0 0 24 24">
            {/* Shield Body - Green */}
            <path
                d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z"
                fill="#78E335"
            />
            {/* Checkmark - Blue with White outline for contrast */}
            <path
                d="M10 17l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z"
                fill={colors.primaryBlue}
                stroke={colors.white}
                strokeWidth="1"
            />
        </SvgIcon>
    );
};

export default WarrantyIcon;
