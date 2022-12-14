import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";

import TextField from "@mui/material/TextField";
import CssBaseline from "@mui/material/CssBaseline";

import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Colors from "../utils/Colors";
import Recorder from "../Components/Recorder";
import "./RecorderPage.css";

import { quotesData } from "../data.js";

const theme = createTheme({
  status: {
    danger: "#e53e3e",
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 545,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
  palette: {
    primary: {
      main: "#0971f1",
      darker: "#053e85",
    },
    neutral: {
      main: Colors.darkgreen,
      contrastText: "#fff",
    },
  },
});
const RecorderPage = () => {
  const [textAreaValue, setTextAreaValue] = useState(
    "Lips red as the rose, hair"
  );

  const handleChange = (event) => {
    setTextAreaValue(event.target.value);
  };

  const generateQuote = () => {
    const random = Math.floor(Math.random() * 10) + 1;
    setTextAreaValue(quotesData[random].text);
  };

  return (
    <ThemeProvider theme={theme} sx={{ background: Colors.lightgreen }}>
      <CssBaseline />
      <AppBar position="relative" sx={{ background: "#0C1821" }}>
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap marginLeft={10}>
            LearnIt
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        {/* Hero unit */}
        <div className="main">
          <Box
            sx={{
              background: Colors.lightgreen,
              pt: 8,
              pb: 6,
            }}
          >
            <Container maxWidth="sm">
              <Typography
                component="h3"
                variant="h3"
                align="center"
                color="inherit"
                gutterBottom
              >
                Speak Here
              </Typography>
              <div className="textContainer">
                <Stack
                  sx={{ pt: 4 }}
                  direction="row"
                  spacing={2}
                  justifyContent="center"
                >
                  <Typography
                    component="h6"
                    variant="h6"
                    align="center"
                    color="inherit"
                    gutterBottom
                  >
                    1. Copy and paste a piece of text you would like to read or{" "}
                    <span> </span>
                    <Button
                      variant="contained"
                      sx={{ m: 2, background: "#0C1821", color: "#fff" }}
                      onClick={generateQuote}
                    >
                      Generate something to Read!
                    </Button>
                  </Typography>
                </Stack>
                <TextField
                  className="textArea"
                  fullWidth
                  id="lastName"
                  label="Enter Text Here"
                  name="lastName"
                  multiline
                  variant="outlined"
                  value={textAreaValue}
                  onChange={handleChange}
                />
              </div>
              <Typography
                component="h6"
                variant="h6"
                align="center"
                color="inherit"
                gutterBottom
              >
                2. Hit the start button to record as you read through the
                paragraph.
              </Typography>

              <Recorder textValue={textAreaValue} />
            </Container>
          </Box>
        </div>
        <Box
          sx={{
            background: Colors.lightgreen,
            pt: 1,
            pb: 1,
          }}
        ></Box>
      </main>
    </ThemeProvider>
  );
};

export default RecorderPage;
