import React, { useState } from "react";
import TicketCardFooter from "../footer/TicketCardFooter";
import { Box, Button, Grid, Typography } from "@mui/material";
import { Context } from "../../../../context/context";
import { useContext } from "react";
import DetailPages from "./DetailPages";
import DepartureDetail from "./DepartureDetail";
import ArrivalDetail from "./ArrivalDetail";
import DetailInfo from "./DetailInfo";
import DetailView from "./DetailView";
import { calculateTotalPrice } from "../../../util/calculateTotalPrice";
import NumberToPersianWord from "number_to_persian_word";

export default function TicketCardDetail({ ticket }) {
  const context = useContext(Context);
  const [page, setPage] = useState(1);

  return (
    <>
      <DetailPages page={page} setPage={setPage} />
      {page == 1 ? (
        <Box sx={{ px: "16px", pb: "16.5px " }}>
          <Grid container>
            <Grid item xs={12} sx={{ py: "19.5px" }}>
              <Typography
                variant="subtitle1"
                sx={{
                  fontFamily: "IRANSans",
                  fontSize: "16px",
                  fontWeight: "bold",
                  fontStretch: "normal",
                  fontStyle: "normal",
                  lineHeight: "2.19",
                  letterSpacing: "normal",
                  textAlign: "right",
                  color: "var(--greyish-brown)",
                }}
              >
                پرواز رفت{" "}
                {
                  context.findAirPortInfo(
                    ticket.originDestinationOptions[0].flightSegments[0]
                      .departureAirportLocationCode
                  ).cityFa
                }{" "}
                -{" "}
                {
                  context.findAirPortInfo(
                    ticket.originDestinationOptions[0].flightSegments[0]
                      .arrivalAirportLocationCode
                  ).cityFa
                }
              </Typography>
            </Grid>
            <DetailView ticket={ticket} />
            <Grid item xs={10}>
              <Grid container>
                <DepartureDetail ticket={ticket} />
                <DetailInfo ticket={ticket} />
                <ArrivalDetail ticket={ticket} />
              </Grid>
            </Grid>
          </Grid>
          <TicketCardFooter ticket={ticket} />
          <Grid container>
            <Grid
              item
              xs={12}
              lg={0}
              sx={{
                textAlign: "center",
                mt: "15.5px",
                display: { lg: "none" },
              }}
            >
              <Box
                sx={{
                  display: { xs: "flex", lg: "none" },
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Box>
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
                    {NumberToPersianWord.convert(
                      ticket.airItineraryPricingInfo.ptcFareBreakdown.length
                    )}{" "}
                    نفر
                  </Typography>
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
                </Box>
                <Button
                  variant="contained"
                  sx={{
                    width: "169px",
                    height: "40px",
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
                      whiteSpace: "nowrap",
                    }}
                  >
                    انتخاب بلیط
                  </Typography>
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Box>
      ) : (
        <Box
          sx={{
            height: "100px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
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
              lineHeight: "2.19",
              letterSpacing: "normal",
              textAlign: "right",
              color: "var(--greyish-brown)",
            }}
          >
            فاقد قوانین و شرایط
          </Typography>
        </Box>
      )}
    </>
  );
}
