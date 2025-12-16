import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import { miladi_be_shamsi } from "../../../util/DateConvertor";
import { Context } from "../../../../context/context";
import { useContext } from "react";
import persianDate from "persian-date";

export default function DepartureDetail({ ticket }) {
  const context = useContext(Context);

  const departureDateTime = new Date(
    ticket.originDestinationOptions[0].flightSegments[0].departureDateTime
  );
  const departureDate = miladi_be_shamsi(
    parseInt(departureDateTime.getFullYear()),
    parseInt(departureDateTime.getMonth()),
    parseInt(departureDateTime.getDay())
  );

  return (
    <>
      <Grid
        item
        xs={12}
        lg={2}
        sx={{
          borderLeft: { xs: "0px", lg: "1px solid rgba(0,0,0,0.1)" },
          mb: { xs: "8px", lg: "24px" },
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: { xs: "right", lg: "center" },
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
              textAlign: "right",
              color: "var(--greyish-brown)",
              ml: "16px",
            }}
          >
            {(departureDateTime.getHours() < 10
              ? "0" + departureDateTime.getHours()
              : departureDateTime.getHours()
            )
              .toString()
              .replace(/\d/g, (d) => "۰۱۲۳۴۵۶۷۸۹"[d])}
            :
            {(departureDateTime.getMinutes() < 10
              ? "0" + departureDateTime.getMinutes()
              : departureDateTime.getMinutes()
            )
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
              color: "var(--greyish-brown)",
            }}
          >
            {
              context.findAirPortInfo(
                ticket.originDestinationOptions[0].flightSegments[0]
                  .departureAirportLocationCode
              ).cityFa
            }
            <span style={{ marginRight: "5px" }}>
              (
              {
                ticket.originDestinationOptions[0].flightSegments[0]
                  .departureAirportLocationCode
              }
              )
            </span>
          </Typography>
        </Box>
      </Grid>
      <Grid
        item
        xs={12}
        lg={3}
        sx={{
          borderLeft: { xs: "0px", lg: "1px solid rgba(0,0,0,0.1)" },
          mb: { xs: "8px", lg: "24px" },
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: { xs: "right", lg: "center" },
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
              textAlign: "right",
              color: "var(--greyish-brown)",
            }}
          >
            <span style={{ marginLeft: "5px" }}>
              {departureDate.day
                .toString()
                .replace(/\d/g, (d) => "۰۱۲۳۴۵۶۷۸۹"[d]) + " "}
              {new persianDate([
                Number(departureDate.year),
                Number(departureDate.month),
                Number(departureDate.day),
              ])
                .toLocale("fa")
                .format("MMMM")}
              {" " +
                departureDate.year
                  .toString()
                  .replace(/\d/g, (d) => "۰۱۲۳۴۵۶۷۸۹"[d])}
            </span>
            <span>
              {`(${departureDateTime.toLocaleString("default", {
                month: "long",
              })} ${departureDateTime.getDay()})`}
            </span>
          </Typography>
        </Box>
      </Grid>
      <Grid item xs={12} lg={2} sx={{ mb: { xs: "32px", lg: "24px" } }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: { xs: "right", lg: "center" },
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
              textAlign: "right",
              color: "#8d8d8d",
            }}
          >
            {
              context.findAirPortInfo(
                ticket.originDestinationOptions[0].flightSegments[0]
                  .departureAirportLocationCode
              ).name
            }
          </Typography>
        </Box>
      </Grid>
    </>
  );
}
