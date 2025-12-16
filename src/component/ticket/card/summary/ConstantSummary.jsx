import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import logo from "./../../../../asset/images/W5@3x.png";
import { Context } from "../../../../context/context";
import { useContext } from "react";
import { Divider } from "@mui/material";

export default function ConstantSummary({ ticket }) {
  const context = useContext(Context);

  return (
    <Grid
      container
      alignItems="center"
      justifyContent="center"
      sx={{ height: "100%", px: "16px" }}
    >
      <Grid item xs={2} lg={1}>
        <img
          src={logo}
          style={{
            width: "56px",
            height: "56px",
          }}
          alt="logo"
        />
      </Grid>
      <Grid item xs={1}>
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
            textAlign: "center",
            color: "var(--greyish-brown)",
          }}
        >
          {
            context.findAirLineInfo(
              ticket.originDestinationOptions[0].flightSegments[0]
                .marketingAirlineCode
            ).nameFa
          }
        </Typography>
      </Grid>
      <Grid item xs={1}></Grid>
      <Grid item xs={2}>
        <Typography
          variant="subtitle1"
          sx={{
            fontFamily: "IRANSans",
            fontSize: "24px",
            fontWeight: "bold",
            fontStretch: "normal",
            fontStyle: "normal",
            lineHeight: "1.67",
            letterSpacing: "normal",
            textAlign: "right",
            color: "var(--greyish-brown)",
          }}
        >
          {(new Date(
            ticket.originDestinationOptions[0].flightSegments[0].departureDateTime
          ).getHours() < 10
            ? "0" +
              new Date(
                ticket.originDestinationOptions[0].flightSegments[0].departureDateTime
              ).getHours()
            : new Date(
                ticket.originDestinationOptions[0].flightSegments[0].departureDateTime
              ).getHours()
          )
            .toString()
            .replace(/\d/g, (d) => "۰۱۲۳۴۵۶۷۸۹"[d])}
          :
          {(new Date(
            ticket.originDestinationOptions[0].flightSegments[0].departureDateTime
          ).getMinutes() < 10
            ? "0" +
              new Date(
                ticket.originDestinationOptions[0].flightSegments[0].departureDateTime
              ).getMinutes()
            : new Date(
                ticket.originDestinationOptions[0].flightSegments[0].departureDateTime
              ).getMinutes()
          )
            .toString()
            .replace(/\d/g, (d) => "۰۱۲۳۴۵۶۷۸۹"[d])}
        </Typography>
        <Box sx={{ display: "flex" }}>
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
              ml: "3px",
            }}
          >
            {
              context.findAirPortInfo(
                ticket.originDestinationOptions[0].flightSegments[0]
                  .departureAirportLocationCode
              ).cityFa
            }
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
              color: "#8d8d8d",
            }}
          >
            (
            {
              ticket.originDestinationOptions[0].flightSegments[0]
                .departureAirportLocationCode
            }
            )
          </Typography>
        </Box>
      </Grid>
      <Grid item xs={4}>
        <Box sx={{ display: "flex" }}>
          <Box
            sx={{
              width: "12px",
              height: "12px",
              border: "solid 1px #1773dc",
              backgroundColor: "#fff",
              borderRadius: "100%",
            }}
          ></Box>
          <Box sx={{ width: "80%", position: "relative", mt: "5px" }}>
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
                color: "#8d8d8d",
                position: "absolute",
                top: "-20px",
                width: "100%",
                textAlign: "center",
                display: { lg: "none" },
              }}
            >
              {ticket.originDestinationOptions[0].flightSegments[0].journeyDuration
                .replace(/\d/g, (d) => "۰۱۲۳۴۵۶۷۸۹"[d])
                .split(":")[0] + " "}
              ساعت و
              {" " +
                ticket.originDestinationOptions[0].flightSegments[0].journeyDuration
                  .replace(/\d/g, (d) => "۰۱۲۳۴۵۶۷۸۹"[d])
                  .split(":")[1]}
              دقیقه
            </Typography>
            <Divider sx={{ width: "100%" }} />
          </Box>
          <Box
            sx={{
              width: "12px",
              height: "12px",
              border: "solid 1px #ff7913",
              backgroundColor: "#fff",
              borderRadius: "100%",
            }}
          ></Box>
        </Box>
      </Grid>
      <Grid item xs={2}>
        <Box sx={{ display: "flex" }}>
          <Box>
            <Typography
              variant="subtitle1"
              sx={{
                fontFamily: "IRANSans",
                fontSize: "24px",
                fontWeight: "bold",
                fontStretch: "normal",
                fontStyle: "normal",
                lineHeight: "1.67",
                letterSpacing: "normal",
                textAlign: "right",
                color: "var(--greyish-brown)",
              }}
            >
              {(new Date(
                ticket.originDestinationOptions[0].flightSegments[0].arrivalDateTime
              ).getHours() < 10
                ? "0" +
                  new Date(
                    ticket.originDestinationOptions[0].flightSegments[0].arrivalDateTime
                  ).getHours()
                : new Date(
                    ticket.originDestinationOptions[0].flightSegments[0].arrivalDateTime
                  ).getHours()
              )
                .toString()
                .replace(/\d/g, (d) => "۰۱۲۳۴۵۶۷۸۹"[d])}
              :
              {(new Date(
                ticket.originDestinationOptions[0].flightSegments[0].arrivalDateTime
              ).getMinutes() < 10
                ? "0" +
                  new Date(
                    ticket.originDestinationOptions[0].flightSegments[0].arrivalDateTime
                  ).getMinutes()
                : new Date(
                    ticket.originDestinationOptions[0].flightSegments[0].arrivalDateTime
                  ).getMinutes()
              )
                .toString()
                .replace(/\d/g, (d) => "۰۱۲۳۴۵۶۷۸۹"[d])}
            </Typography>
            <Box sx={{ display: "flex", position: "relative" }}>
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
                  ml: "3px",
                }}
              >
                {
                  context.findAirPortInfo(
                    ticket.originDestinationOptions[0].flightSegments[0]
                      .arrivalAirportLocationCode
                  ).cityFa
                }
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
                  color: "#8d8d8d",
                }}
              >
                (
                {
                  ticket.originDestinationOptions[0].flightSegments[0]
                    .arrivalAirportLocationCode
                }
                )
              </Typography>
            </Box>
          </Box>
          <Typography
            variant="subtitle1"
            sx={{
              fontFamily: "IRANSans",
              fontSize: " 13px",
              fontWeight: "normal",
              fontStretch: "normal",
              fontStyle: "normal",
              lineHeight: "1.85",
              letterSpacing: "normal",
              textAlign: "right",
              color: "#ff1d23",
              mt: -1,
              display: { xs: "none", lg: "inline-block" },
            }}
          >
            ۱+
          </Typography>
        </Box>
      </Grid>
      <Grid item xs={0} lg={1}></Grid>
    </Grid>
  );
}
