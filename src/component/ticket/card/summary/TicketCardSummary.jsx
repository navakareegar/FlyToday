import React from "react";
import { Grid } from "@mui/material";
import { Box } from "@mui/material";
import ConstantSummary from "./ConstantSummary";
import SummaryToolbar from "./SummaryToolbar";
import SummaryShow from "./SummaryShow";
import SummaryShowMobile from "./SummaryShowMobile";

export default function TicketCardSummary({ expanded, setExpanded, ticket }) {
  return (
    <Box sx={{ height: { xs: "270px", lg: "185px" } }}>
      <Grid
        container
        sx={{
          height: "142.5px",
          borderBottom: {
            xs: "0",
            mlgd: "1px solid rgba(0,0,0,0.1)",
          },
        }}
      >
        <Grid
          item
          xs={12}
          lg={9}
          sx={{
            borderLeft: { xs: "0", lg: "1px solid rgba(0,0,0,0.1)" },
            height: "142.5px",
          }}
        >
          <ConstantSummary ticket={ticket} />
        </Grid>
        <SummaryShow ticket={ticket} />
      </Grid>
      <SummaryToolbar
        expanded={expanded}
        setExpanded={setExpanded}
        ticket={ticket}
      />
      <SummaryShowMobile
        expanded={expanded}
        setExpanded={setExpanded}
        ticket={ticket}
      />
    </Box>
  );
}
