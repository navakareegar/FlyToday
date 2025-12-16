import { Box, Typography } from "@mui/material";
import React, { useEffect } from "react";
import DateObject from "react-date-object";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import Sort from "../sort/Sort";
import { Context } from "../../context/context";
import { useContext } from "react";
import { useState } from "react";

export default function MainInfo({ sortMode }) {
  const context = useContext(Context);
  const [number, setNumber] = useState(0);

  useEffect(() => {
    let counter = 0;
    context.hardCodeData.pricedItineraries.map((hSample) => {
      if (hSample.mode) {
        counter++;
      }
    });
    setNumber(counter);
  }, [context.hardCodeData]);

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        flexDirection: { xs: "column-reverse", lg: "row" },
      }}
    >
      <Box sx={{ px: { xs: "16px", lg: 0 } }}>
        <Typography
          variant="subtitle1"
          sx={{
            fontFamily: "IRANSans",
            fontSize: "20px",
            fontWeight: "bold",
            fontStretch: "normal",
            fontStyle: "normal",
            lineHeight: "2",
            letterSpacing: "normal",
            textAlign: "right",
            color: "var(--greyish-brown)",
          }}
        >
          بلیط هواپیمای تهران به استانبول
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
            color: "var(--greyish-brown)",
          }}
        >
          {number.toString().replace(/\d/g, (d) => "۰۱۲۳۴۵۶۷۸۹"[d]) + " "}
          پرواز یافت شد.
          {" " +
            new DateObject()
              .setCalendar(persian)
              .setLocale(persian_fa)
              .setFormat("dddd DD MMMM YYYY")
              .parse()
              .format()}
        </Typography>
      </Box>
      <Sort sortMode={sortMode} />
    </Box>
  );
}
