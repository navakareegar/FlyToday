import React from "react";
import { Box } from "@mui/material";
import { Grid } from "@mui/material";
import TicketLayout from "../ticket/TicketLayout";
import { useState } from "react";
import Filter from "../filter/Filter";
import MainInfo from "./MainInfo";
import MainButton from "./MainButton";

export default function MainComponent() {
  const [filterMode, setFilterMode] = useState(true);
  const [sortMode, setSortMode] = useState(true);

  return (
    <>
      <Grid
        container
        justifyContent="center"
        gap="24px"
        sx={{
          my: 3,
          py: 3,
        }}
      >
        <MainButton
          filterMode={filterMode}
          setFilterMode={setFilterMode}
          sortMode={sortMode}
          setSortMode={setSortMode}
        />
        <Filter filterMode={filterMode} />
        <Grid item xs={12} lg={8}>
          <MainInfo sortMode={sortMode} />
          <Box>
            <TicketLayout />
          </Box>
        </Grid>
      </Grid>
    </>
  );
}
