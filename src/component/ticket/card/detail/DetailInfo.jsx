import { Box, Grid, Typography } from "@mui/material";
import React from "react";

export default function DetailInfo({ ticket }) {
  return (
    <Grid container>
      <>
        <Grid item xs={12} lg={3} sx={{ mb: "8.5px" }} order={{ xs: 1, lg: 1 }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "right",
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
                textAlign: "right",
                color: "#8d8d8d",
                ml: "24.5px",
              }}
            >
              مدت پرواز
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
                textAlign: "right",
                color: "var(--greyish-brown)",
              }}
            >
              {Number(
                ticket.originDestinationOptions[0].flightSegments[0].journeyDuration

                  .toString()
                  .replace(/\d/g, (d) => "۰۱۲۳۴۵۶۷۸۹"[d])
                  .split(":")[0]
                  .replace(/[۰-۹]/g, (d) => "۰۱۲۳۴۵۶۷۸۹".indexOf(d))
              )
                .toString()
                .replace(/\d/g, (d) => "۰۱۲۳۴۵۶۷۸۹"[d]) + " "}
              ساعت
              {Number(
                ticket.originDestinationOptions[0].flightSegments[0].journeyDuration
                  .toString()
                  .replace(/\d/g, (d) => "۰۱۲۳۴۵۶۷۸۹"[d])
                  .split(":")[1]
                  .replace(/[۰-۹]/g, (d) => "۰۱۲۳۴۵۶۷۸۹".indexOf(d))
              ) != 0
                ? " و " +
                  Number(
                    ticket.originDestinationOptions[0].flightSegments[0].journeyDuration
                      .toString()
                      .replace(/\d/g, (d) => "۰۱۲۳۴۵۶۷۸۹"[d])
                      .split(":")[1]
                      .replace(/[۰-۹]/g, (d) => "۰۱۲۳۴۵۶۷۸۹".indexOf(d))
                  )
                    .toString()
                    .replace(/\d/g, (d) => "۰۱۲۳۴۵۶۷۸۹"[d]) +
                  " دقیقه"
                : null}
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} lg={3} sx={{ mb: "8.5px" }} order={{ xs: 4, lg: 2 }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "right",
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
                textAlign: "right",
                color: "#8d8d8d",
                ml: "24.5px",
              }}
            >
              نوع پرواز
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
                textAlign: "right",
                color: "var(--greyish-brown)",
              }}
            >
              سیستمی
            </Typography>
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          lg={3}
          sx={{ mb: { xs: "31.6px", lg: "8.5px" } }}
          order={{ xs: 7, lg: 3 }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "right",
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
                textAlign: "right",
                color: "#8d8d8d",
                ml: "24.5px",
              }}
            >
              استرداد
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
                textAlign: "right",
                color: "#ff1d23",
              }}
            >
              غیر قابل استرداد
            </Typography>
          </Box>
        </Grid>
      </>
      <Grid item xs={12} lg={3} order={{ lg: 4 }}></Grid>
      <>
        <Grid item xs={12} lg={3} sx={{ mb: "8.5px" }} order={{ xs: 2, lg: 5 }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "right",
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
                textAlign: "right",
                color: "#8d8d8d",
                ml: "24.5px",
              }}
            >
              نوع هواپیما
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
                textAlign: "right",
                color: "var(--greyish-brown)",
              }}
            >
              Airbus A320
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} lg={3} sx={{ mb: "8.5px" }} order={{ xs: 5, lg: 6 }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "right",
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
                textAlign: "right",
                color: "#8d8d8d",
                ml: "24.5px",
              }}
            >
              بار مجاز
            </Typography>
            <Typography
              variant="subtitle1"
              sx={{
                fontFamily: "IRANSans",
                fontSize: "12px",
                fontWeight: "bold",
                fontStretch: "normal",
                fontStyle: "normal",
                lineHeight: "2",
                letterSpacing: "normal",
                textAlign: "right",
                color: "var(--greyish-brown)",
                ml: "5px",
              }}
            >
              ۲۰
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
                textAlign: "right",
                color: "var(--greyish-brown)",
              }}
            >
              کیلوگرم
            </Typography>
          </Box>
        </Grid>
      </>
      <Grid item xs={12} lg={6} order={{ lg: 7 }}></Grid>
      <>
        <Grid item xs={12} lg={3} sx={{ mb: "8.5px" }} order={{ xs: 3, lg: 8 }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "right",
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
                textAlign: "right",
                color: "#8d8d8d",
                ml: "24.5px",
              }}
            >
              کلاس پرواز
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
                textAlign: "right",
                color: "var(--greyish-brown)",
              }}
            >
              اکونومی
            </Typography>
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          lg={3}
          sx={{ mb: { xs: "8.5px", lg: "24px" } }}
          order={{ xs: 6, lg: 9 }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "right",
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
                textAlign: "right",
                color: "#8d8d8d",
                ml: "24.5px",
              }}
            >
              کلاس نرخی
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
                textAlign: "right",
                color: "var(--greyish-brown)",
              }}
            >
              {
                ticket.originDestinationOptions[0].flightSegments[0]
                  .cabinClassCode
              }
            </Typography>
          </Box>
        </Grid>
      </>
      <Grid item xs={12} lg={6} order={{ lg: 10 }}></Grid>
    </Grid>
  );
}
