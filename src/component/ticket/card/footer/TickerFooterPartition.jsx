import { Box, Grid, Typography } from "@mui/material";
import React from "react";

export default function TickerFooterPartition({ info }) {
  return (
    <Grid
      item
      xs={12}
      lg={3}
      sx={{
        borderLeft: { xs: "0", lg: "1px solid rgba(0,0,0,0.1)" },
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "100%",
        }}
      >
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
            textAlign: { xs: "right", lg: "center" },
            color: "var(--greyish-brown)",
            width: "100%",
          }}
        >
          <span style={{ marginLeft: "6px" }}>
            {info.passengerTypeQuantity.quantity
              .toString()
              .replace(/\d/g, (d) => "۰۱۲۳۴۵۶۷۸۹"[d])}
          </span>
          <span style={{ marginLeft: "7px" }}>×</span>
          <span style={{ marginLeft: "14px" }}>
            {" "}
            {info.passengerTypeQuantity.passengerType == "Adt"
              ? "بزرگسال"
              : info.passengerTypeQuantity.passengerType}
          </span>
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
            textAlign: { xs: "left", lg: "center" },
            color: "var(--greyish-brown)",
            width: "100%",
          }}
        >
          <span style={{ marginLeft: "4px" }}>
            {Intl.NumberFormat("en-US")
              .format(info.passengerFare.totalFareWithMarkupAndVat)
              .toString()
              .replace(/\d/g, (d) => "۰۱۲۳۴۵۶۷۸۹"[d])}
          </span>
          <span>تومان</span>
        </Typography>
      </Box>
    </Grid>
  );
}
