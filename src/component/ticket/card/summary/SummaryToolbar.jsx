import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";

export default function SummaryToolbar({ expanded, setExpanded, ticket }) {
  return (
    <Grid container sx={{ px: "16px" }}>
      <Grid
        item
        xs={12}
        lg={9}
        sx={{
          height: "41.5px",
          borderTop: { xs: "1px solid rgba(0,0,0,0.1)", lg: "0" },
          borderBottom: { xs: "1px solid rgba(0,0,0,0.1)", lg: "0" },
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            height: "100%",
          }}
        >
          <Box
            sx={{
              width: "52px",
              height: "25px",
              padding: "2px 13px 4px 14px",
              borderRadius: "2px",
              backgroundColor: "#f4f4f4",
              ml: "6.5px",
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
                color: "var(--greyish-brown)",
              }}
            >
              چارتر
            </Typography>
          </Box>
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
              color: "var(--greyish-brown)",
            }}
          >
            <span style={{ marginLeft: "6.5px" }}>اکونومی</span>
            <span style={{ marginLeft: "6.5px" }}>.</span>
            <span style={{ marginLeft: "6.5px" }}>
              {ticket.originDestinationOptions[0].flightSegments[0].seatsRemaining
                .toString()
                .replace(/\d/g, (d) => "۰۱۲۳۴۵۶۷۸۹"[d])}{" "}
              صندلی خالی
            </span>
            <span style={{ marginLeft: "6.5px" }}>.</span>
            <span style={{ marginLeft: "6.5px" }}>
              ‏شماره پرواز :{" "}
              {ticket.originDestinationOptions[0].flightSegments[0].flightNumber
                .toString()
                .replace(/\d/g, (d) => "۰۱۲۳۴۵۶۷۸۹"[d])}
            </span>
            <span style={{ marginLeft: "6.5px" }}>.</span>
          </Typography>
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
              color: "var(--greyish-brown)",
              display: { xs: "none", lg: "inline-block" },
            }}
          >
            <span
              style={{
                marginLeft: { xs: "0px", lg: "6.5px" },
              }}
            >
              تامین‌کننده: پرایس لاین
            </span>
          </Typography>
        </Box>
      </Grid>
      <Grid
        item
        xs={0}
        lg={3}
        sx={{
          textAlign: "center",
          height: "41.5px",
          display: { xs: "none", lg: "inline-block" },
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "100%",
            cursor: "pointer",
          }}
          onClick={() => setExpanded(!expanded)}
        >
          <Typography
            variant="subtitle1"
            sx={{
              fontFamily: "IRANSans",
              fontSize: "12px",
              fontWeight: "normal",
              fontStretch: "normal",
              fontStyle: "normal",
              lineHeight: "1.75",
              letterSpacing: "normal",
              textAlign: "left",
              color: "#ff7913",
              display: "flex",
              alignItems: "center",
            }}
          >
            جزئیات بیشتر
            {expanded ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
}
