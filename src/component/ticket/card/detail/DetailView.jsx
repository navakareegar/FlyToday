import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect } from "react";
import logo from "./../../../../asset/images/W5@3x.png";
import { Context } from "../../../../context/context";
import { useContext } from "react";
import { useState } from "react";

export default function DetailView({ ticket }) {
  const context = useContext(Context);
  const [points, setPoints] = useState(window.innerWidth > 1200 ? 18 : 40);
  React.useEffect(() => {
    function handleResize() {
      if (window.innerWidth > 1200) {
        setPoints(18);
      } else {
        setPoints(40);
      }
    }
    window.addEventListener("resize", handleResize);
  });

  return (
    <>
      <Grid item xs={1}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
            height: { xs: "100%", lg: "70%" },
            ml: { xs: "18.2px", lg: "0px" },
          }}
        >
          <img
            src={logo}
            style={{
              width: "40px",
              height: "34px",
            }}
            alt="logo"
          />
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
              color: "#6f6f6f",
            }}
          >
            {
              context.findAirLineInfo(
                ticket.originDestinationOptions[0].flightSegments[0]
                  .marketingAirlineCode
              ).nameFa
            }
          </Typography>
        </Box>
      </Grid>
      <Grid item xs={1}>
        <Box
          sx={{
            width: "8px",
            height: "8px",
            border: "solid 1px #870b1d",
            backgroundColor: "#fff",
            borderRadius: "100%",
            mt: "10px",
          }}
        ></Box>
        {[...Array(points)].map((val, index) => (
          <Box
            sx={{
              width: "4px",
              height: "4px",
              backgroundColor: "rgba(0,0,0,0.1)",
              borderRadius: "100%",
              mt: "5px",
              mr: "2px",
            }}
          ></Box>
        ))}

        <Box
          sx={{
            width: "8px",
            height: "8px",
            border: "solid 1px #870b1d",
            backgroundColor: "#fff",
            borderRadius: "100%",
            mt: "5px",
          }}
        ></Box>
      </Grid>
    </>
  );
}
