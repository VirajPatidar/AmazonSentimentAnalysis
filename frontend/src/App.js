import React, { useState } from 'react';
import axios from 'axios';
import Navbar from './Navbar';
import ReviewRating from './ReviewRating';

// MUI
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import LoadingButton from '@mui/lab/LoadingButton';



function App() {

    const [text, setText] = useState("")
    const [textError, setTextError] = useState(false)

    const [loading, setLoading] = useState(false)
    const [result, setResult] = useState(null)

    const sentiments = ["Very Bad", "Bad", "OK", "Good", "Very Good"]


    const handleSubmit = e => {
        e.preventDefault();

        let submit = true;
        setTextError(false);

        if (text === "" || text.trim().split(/\s+/).length > 100) {
            submit = false;
            setTextError(true);
        }

        if (submit) {
            setLoading(true);
            axios.post(`https://amazon-sentiments-analysis.herokuapp.com/api/get_sentiment/`, { 'message': text })
                .then((res) => {
                    setLoading(false);
                    console.log(res);
                    setResult(res.data);
                    alert(JSON.stringify(res.data));
                    // window.location.reload();
                })
                .catch(err => {
                    console.log(err);
                    setLoading(false);
                    alert("An error occured! Please try again.")
                });
        }
    }


    return (
        <>
            <Navbar />
            <Grid container justifyContent="center" alignItems="center">
                <Grid item xs={12} sm={8} md={5} mt={8} p={2}>
                    <Typography variant="h5">
                        Enter a product review to analyze its sentiment:
                    </Typography>
                    <Box>
                        <TextField
                            variant="outlined"
                            margin="normal"
                            fullWidth
                            name="text"
                            label="Text"
                            type="textarea"
                            maxRows={6}
                            id="instructions"
                            error={textError}
                            multiline
                            onChange={(e) => setText(e.target.value)}
                        />
                    </Box>
                    <Box mt={3}>
                        <LoadingButton
                            loading={loading}
                            loadingIndicator="Processing..."
                            variant="contained"
                            type="submit"
                            onClick={handleSubmit}
                            color="primary"
                            sx={{ width: '100%' }}
                        >
                            Submit
                        </LoadingButton>
                    </Box>
                    {result ?
                        <Box mt={3}>
                            <Box my={6} sx={{textAlign: "center"}}>
                                <ReviewRating val={result.sentiment} />
                            </Box>
                            <Typography variant="body1" gutterBottom>
                                <strong> Sentiment :</strong> {sentiments[result.sentiment - 1]}
                            </Typography>
                            <Typography variant="body1" gutterBottom>
                                <strong> Sentiment Value (1 to 5):</strong> {result.sentiment}
                            </Typography>
                            <Typography variant="body1" gutterBottom>
                                <strong> Probability of review being a positive sentiment:</strong> {(result.probability * 100).toFixed(2)} %
                            </Typography>
                            <Typography variant="body1" gutterBottom>
                                <strong> Server Response Timestamp:</strong> {result.timestamp}
                            </Typography>
                        </Box>
                        : null
                    }
                </Grid>
            </Grid>
        </>
    );
}

export default App;
