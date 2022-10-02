import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

export default function SliderSizes() {
    return (
        <Box width={500}>
            <Slider
                size="small"
                defaultValue={0}
                aria-label="Small"
                valueLabelDisplay="auto"
            />
            <Slider defaultValue={100} aria-label="Default" valueLabelDisplay="auto" />
        </Box>
    );
}
