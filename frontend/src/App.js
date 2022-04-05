import React, { useState } from 'react';
import axios from 'axios';
import Navbar from './Navbar';

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
            axios.post(`http://127.0.0.1:8000/api/get_sentiment/`, { 'message': text })
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
                            sentiment: {result.sentiment}
                            <br />
                            probability: {result.probability}
                        </Box>
                        : null
                    }
                </Grid>
            </Grid>
        </>
    );
}

export default App;
