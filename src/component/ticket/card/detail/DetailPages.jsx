import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import doc from "./../../../../asset/images/Group12837@3x.png";
import airplane from "./../../../../asset/images/Group12836@3x.png";
import FlightIcon from "@mui/icons-material/Flight";
import DescriptionIcon from "@mui/icons-material/Description";

export default function DetailPages({ page, setPage }) {
  return (
    <Grid container>
      <Grid item xs={12}>
        <Box
          sx={{
            display: "flex",
            borderBottom: "1px solid rgba(0,0,0,0.1)",
          }}
        >
          <Box
            sx={{
              width: "121px",
              height: "40px",
              margin: "27.5px 15.5px 0px 1px",
              padding: "6.5px 12px 11.5px 12px",
              borderRadius: "4px 4px 0px 0px",
              backgroundColor: page == 1 ? "#1773dc" : "white",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            onClick={() => {
              setPage(1);
            }}
          >
            <FlightIcon
              src={airplane}
              style={{
                width: "19px",
                height: "17px",
                color: page == 1 ? "#fff" : "#8d8d8d",
              }}
            />
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
                color: page == 1 ? "#fff" : "#8d8d8d",
                mr: "5px",
              }}
            >
              جزئیات پرواز
            </Typography>
          </Box>
          <Box
            sx={{
              width: "121px",
              height: "40px",
              margin: "27.5px 15.5px 0px 1px",
              padding: "6.5px 12px 11.5px 12px",
              borderRadius: "4px 4px 0px 0px",
              backgroundColor: page == 2 ? "#1773dc" : "white",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            onClick={() => {
              setPage(2);
            }}
          >
            <DescriptionIcon
              src={doc}
              style={{
                width: "19px",
                height: "21px",
                color: page == 2 ? "#fff" : "#8d8d8d",
              }}
            />
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
                color: page == 2 ? "#fff" : "#8d8d8d",
                whiteSpace: "nowrap",
                mr: "5px",
              }}
            >
              قوانین و شرایط
            </Typography>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
}
