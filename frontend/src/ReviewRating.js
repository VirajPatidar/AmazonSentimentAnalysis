import React from 'react';
import PropTypes from 'prop-types';
import Rating from '@mui/material/Rating';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import SentimentDissatisfiedIcon from '@mui/icons-material/SentimentDissatisfied';
import SentimentSatisfiedIcon from '@mui/icons-material/SentimentSatisfied';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAltOutlined';
import SentimentVerySatisfiedIcon from '@mui/icons-material/SentimentVerySatisfied';

const customIcons = {
    1: {
        icon: <SentimentVeryDissatisfiedIcon sx={{ fontSize: 100 }} />,
        label: 'Very Dissatisfied',
    },
    2: {
        icon: <SentimentDissatisfiedIcon sx={{ fontSize: 100 }} />,
        label: 'Dissatisfied',
    },
    3: {
        icon: <SentimentSatisfiedIcon sx={{ fontSize: 100 }} />,
        label: 'Neutral',
    },
    4: {
        icon: <SentimentSatisfiedAltIcon sx={{ fontSize: 100 }} />,
        label: 'Satisfied',
    },
    5: {
        icon: <SentimentVerySatisfiedIcon sx={{ fontSize: 100 }} />,
        label: 'Very Satisfied',
    },
};

function IconContainer(props) {
    const { value, ...other } = props;
    return <span {...other}>{customIcons[value].icon}</span>;
}

IconContainer.propTypes = {
    value: PropTypes.number.isRequired,
};

export default function ReviewRating({ val }) {


    return (
        <Rating
            name="highlight-selected-only"
            value={val}
            IconContainerComponent={IconContainer}
            highlightSelectedOnly
        />
    );
}
