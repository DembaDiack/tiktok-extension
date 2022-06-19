import * as React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import { Container } from "@mui/system";
import { Button } from "@mui/material";
import toggleFullScreen from "./scripts/toggleFullScreen";
import ButtonAppBar from "./components/AppBar";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function App() {
  return (
    <div>
      <ButtonAppBar/>
      <Box sx={{ width: "200px", height: "auto",padding : "15px" }}>
      
      <Container sx={{marginTop : "15px"}}>
        <Stack spacing={2}>
          <Button
            variant="contained"
            onClick={() => toggleFullScreen()}
          >
            Toggle FullScreen
          </Button>

          <Item>Item 2</Item>
          <Item>Item 3</Item>
        </Stack>
      </Container>
    </Box>
    </div>
  );
}

export default App;
