import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import { miladi_be_shamsi } from "../../../util/DateConvertor";
import { Context } from "../../../../context/context";
import { useContext } from "react";
import persianDate from "persian-date";

export default function ArrivalDetail({ ticket }) {
  const context = useContext(Context);

  const arrivalDateTime = new Date(
    ticket.originDestinationOptions[0].flightSegments[0].arrivalDateTime
  );
  const arrivalDate = miladi_be_shamsi(
    parseInt(arrivalDateTime.getFullYear()),
    parseInt(arrivalDateTime.getMonth()),
    parseInt(arrivalDateTime.getDay())
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
            {(arrivalDateTime.getHours() < 10
              ? "0" + arrivalDateTime.getHours()
              : arrivalDateTime.getHours()
            )
              .toString()
              .replace(/\d/g, (d) => "۰۱۲۳۴۵۶۷۸۹"[d])}
            :
            {(arrivalDateTime.getMinutes() < 10
              ? "0" + arrivalDateTime.getMinutes()
              : arrivalDateTime.getMinutes()
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
                  .arrivalAirportLocationCode
              ).cityFa
            }
            <span style={{ marginRight: "5px" }}>
              (
              {
                ticket.originDestinationOptions[0].flightSegments[0]
                  .arrivalAirportLocationCode
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
              {arrivalDate.day
                .toString()
                .replace(/\d/g, (d) => "۰۱۲۳۴۵۶۷۸۹"[d]) + " "}
              {new persianDate([
                Number(arrivalDate.year),
                Number(arrivalDate.month),
                Number(arrivalDate.day),
              ])
                .toLocale("fa")
                .format("MMMM")}
              {" " +
                arrivalDate.year
                  .toString()
                  .replace(/\d/g, (d) => "۰۱۲۳۴۵۶۷۸۹"[d])}
            </span>

            <span>
              {`(${arrivalDateTime.toLocaleString("default", {
                month: "long",
              })} ${arrivalDateTime.getDay()})`}
            </span>
          </Typography>
        </Box>
      </Grid>
      <Grid item xs={12} lg={2}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: { xs: "right", lg: "center" },
            mb: { xs: "8px", lg: "24px" },
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
                  .arrivalAirportLocationCode
              ).name
            }
          </Typography>
        </Box>
      </Grid>
    </>
  );
}
