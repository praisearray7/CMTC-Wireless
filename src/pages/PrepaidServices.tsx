import { Box } from '@mui/material';
import TransitionSlider from '../components/TransitionSlider';
import { imagePaths, getImagePath } from '../data/imagePaths';

const PrepaidServices = () => {
    // Get full paths for the slider images
    // @ts-ignore
    const sliderImages = imagePaths.wowSlider.map(path => getImagePath(path));

    return (
        <Box sx={{ width: "100%", overflowX: "hidden" }}>
            <TransitionSlider images={sliderImages} />
        </Box>
    );
};

export default PrepaidServices;
