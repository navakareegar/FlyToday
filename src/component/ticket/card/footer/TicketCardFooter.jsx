import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { calculateTotalPrice } from "../../../util/calculateTotalPrice";
import TickerFooterPartition from "./TickerFooterPartition";

export default function TicketCardFooter({ ticket }) {
  return (
    <Grid
      container
      sx={{
        border: "1px solid rgba(0,0,0,0.1)",
        mt: "31.9px",
        height: { xs: "140px", lg: "45px" },
        px: "14.8px",
      }}
      justifyContent="space-between"
    >
      {ticket.airItineraryPricingInfo.ptcFareBreakdown.map((info) => (
        <TickerFooterPartition key={info.id} info={info} />
      ))}
      <Grid item xs={12} lg={3}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: { xs: "space-between", lg: "center" },
            height: "100%",
          }}
        >
          <Typography
            variant="subtitle1"
            sx={{
              fontFamily: "IRANSans",
              fontSize: "14px",
              fontWeight: "bold",
              fontStretch: "normal",
              fontStyle: "normal",
              lineHeight: "2",
              letterSpacing: "normal",
              textAlign: "left",
              color: "var(--greyish-brown)",
              ml: "6px",
            }}
          >
            مجموع:
          </Typography>
          <Box sx={{ display: "flex" }}>
            <Typography
              variant="subtitle1"
              sx={{
                fontFamily: "IRANSans",
                fontSize: "14px",
                fontWeight: "bold",
                fontStretch: "normal",
                fontStyle: "normal",
                lineHeight: "2",
                letterSpacing: "normal",
                textAlign: "right",
                color: "#1773dc",
                marginLeft: "4px",
              }}
            >
              {calculateTotalPrice(ticket)
                .toString()
                .replace(/\d/g, (d) => "۰۱۲۳۴۵۶۷۸۹"[d])}
            </Typography>
            <Typography
              variant="subtitle1"
              sx={{
                fontFamily: "IRANSans",
                fontSize: "14px",
                fontWeight: "normal",
                fontStretch: "normal",
                fontStyle: "normal",
                lineHeight: "2",
                letterSpacing: "normal",
                textAlign: "right",
                color: "#1773dc",
              }}
            >
              تومان
            </Typography>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
}
