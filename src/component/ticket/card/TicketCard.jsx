import React from "react";
import { useState } from "react";
import TicketCardSummary from "./summary/TicketCardSummary";
import TicketCardDetail from "./detail/TicketCardDetail";
import { Box } from "@mui/material";

export default function TicketCard({ ticket }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <Box
      sx={{
        backgroundColor: "white",
        my: "16px",
      }}
    >
      <TicketCardSummary
        expanded={expanded}
        setExpanded={setExpanded}
        ticket={ticket}
      />
      {expanded ? <TicketCardDetail ticket={ticket} /> : null}
    </Box>
  );
}
