import React from 'react';
import PropTypes from 'prop-types';
import Rating from '@mui/material/Rating';
import SentimentVeryDissatisfiedTwoToneIcon from '@mui/icons-material/SentimentVeryDissatisfiedTwoTone';
import SentimentDissatisfiedTwoToneIcon from '@mui/icons-material/SentimentDissatisfiedTwoTone';
import SentimentNeutralTwoToneIcon from '@mui/icons-material/SentimentNeutralTwoTone';
import SentimentSatisfiedTwoToneIcon from '@mui/icons-material/SentimentSatisfiedTwoTone';
import SentimentVerySatisfiedTwoToneIcon from '@mui/icons-material/SentimentVerySatisfiedTwoTone';

const customIcons = {
    1: {
        icon: <SentimentVeryDissatisfiedTwoToneIcon sx={{ fontSize: 100 }} />,
        label: 'Very Dissatisfied',
    },
    2: {
        icon: <SentimentDissatisfiedTwoToneIcon sx={{ fontSize: 100 }} />,
        label: 'Dissatisfied',
    },
    3: {
        icon: <SentimentNeutralTwoToneIcon sx={{ fontSize: 100 }} />,
        label: 'Neutral',
    },
    4: {
        icon: <SentimentSatisfiedTwoToneIcon sx={{ fontSize: 100 }} />,
        label: 'Satisfied',
    },
    5: {
        icon: <SentimentVerySatisfiedTwoToneIcon sx={{ fontSize: 100 }} />,
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
