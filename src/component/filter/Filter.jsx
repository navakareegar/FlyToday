import React from "react";
import FilterLayout from "./FilterLayout";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import { Box, Grid, Typography } from "@mui/material";

export default function Filter({ filterMode }) {
  return (
    <>
      {filterMode ? (
        <Grid item xs={12} lg={3} sx={{ px: 2 }}>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
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
                mb: "24px",
              }}
            >
              مدت زمان اعتبار نتایج
            </Typography>
            <CountdownCircleTimer
              isPlaying
              duration={60}
              colors={["#1773dc"]}
              size={30}
              strokeWidth={3}
            >
              {({ remainingTime }) =>
                remainingTime
                  ?.toString()
                  ?.replace(/\d/g, (d) => "۰۱۲۳۴۵۶۷۸۹"[d])
              }
            </CountdownCircleTimer>
          </Box>
          <Box sx={{ backgroundColor: "white" }}>
            <FilterLayout />
          </Box>
        </Grid>
      ) : null}
    </>
  );
}
