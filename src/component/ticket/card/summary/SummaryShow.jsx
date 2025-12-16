import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";
import { calculateTotalPrice } from "../../../util/calculateTotalPrice";
import NumberToPersianWord from "number_to_persian_word";

export default function SummaryShow({ ticket }) {
  return (
    <Grid
      item
      xs={12}
      lg={3}
      sx={{
        textAlign: "center",
        height: "142.5px",
        display: { xs: "none", lg: "inline-block" },
      }}
    >
      <Typography
        variant="subtitle1"
        sx={{
          fontFamily: "IRANSans",
          fontSize: "12px",
          fontWeight: "normal",
          fontStretch: "normal",
          fontStyle: "normal",
          lineHeight: "2",
          letterSpacing: "normal",
          textAlign: "center",
          color: "#8d8d8d",
          pt: "16px",
        }}
      >
        {NumberToPersianWord.convert(
          ticket.airItineraryPricingInfo.ptcFareBreakdown.length
        )}{" "}
        نفر
      </Typography>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography
          variant="subtitle1"
          sx={{
            fontFamily: "IRANSans",
            fontSize: "20px",
            fontWeight: "bold",
            fontStretch: "normal",
            fontStyle: "normal",
            lineHeight: "1.6",
            letterSpacing: "normal",
            textAlign: "right",
            color: "#1773dc",
            ml: "8px",
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
            fontSize: "13px",
            fontWeight: "normal",
            fontStretch: "normal",
            fontStyle: "normal",
            lineHeight: "1.85",
            letterSpacing: "normal",
            textAlign: "right",
            color: "#8d8d8d",
          }}
        >
          تومان
        </Typography>
      </Box>
      <Button
        variant="contained"
        sx={{
          width: "169px",
          height: "40px",
          margin: "2px 0px 26.5px 0",
          padding: "8px 50px 10px 51px",
          borderRadius: "4px",
          backgroundColor: "#1773dc",
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
            lineHeight: "1.14",
            letterSpacing: "normal",
            textAlign: "center",
            color: "#fff",
          }}
        >
          انتخاب بلیط
        </Typography>
      </Button>
    </Grid>
  );
}
