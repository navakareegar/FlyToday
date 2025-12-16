import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Checkbox,
  Divider,
  FormControlLabel,
  Typography,
} from "@mui/material";
import React from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { styled } from "@mui/material/styles";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";
import { useContext } from "react";
import { Context } from "../../context/context";

export default function FilterAccordion({ filter, index }) {
  const context = useContext(Context);

  const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 10,
    borderRadius: 5,
    [`&.${linearProgressClasses.colorPrimary}`]: {
      backgroundColor:
        theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
    },
    [`& .${linearProgressClasses.bar}`]: {
      borderRadius: 5,
      backgroundColor: theme.palette.mode === "light" ? "#1a90ff" : "#308fe8",
    },
  }));

  return (
    <>
      <Accordion
        sx={{
          border: "0px",
          py: 1,
        }}
      >
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
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
              color: "var(--greyish-brown",
            }}
          >
            {filter.title}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          {filter.mode == "C" ? (
            filter.items.map((item) => (
              <Box
                key={item.id}
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  pl: "16px",
                  pr: "8px",
                }}
              >
                <FormControlLabel
                  label={item.name}
                  control={
                    <Checkbox
                      checked={item.mode}
                      onChange={(e) => {
                        const temp = [...context.filters];
                        temp[index].items.map((i) => {
                          if (item.id == i.id) {
                            i.mode = !i.mode;
                          }
                        });
                        context.setFilters(temp);
                      }}
                    />
                  }
                />
                {item.description ? (
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
                      color: "#6f6f6f",
                    }}
                  >
                    {item.description.endH
                      .toString()
                      .replace(/\d/g, (d) => "۰۱۲۳۴۵۶۷۸۹"[d])}
                    {item.description.endM != "00"
                      ? ":" +
                        item.description.endM
                          .toString()
                          .replace(/\d/g, (d) => "۰۱۲۳۴۵۶۷۸۹"[d])
                      : ""}
                    {" - "}
                    {item.description.startH
                      .toString()
                      .replace(/\d/g, (d) => "۰۱۲۳۴۵۶۷۸۹"[d])}
                    {item.description.startM != "00"
                      ? ":" +
                        item.description.startM
                          .toString()
                          .replace(/\d/g, (d) => "۰۱۲۳۴۵۶۷۸۹"[d])
                      : ""}
                  </Typography>
                ) : null}
              </Box>
            ))
          ) : (
            <Box sx={{ px: 2 }}>
              <BorderLinearProgress variant="determinate" value={50} />
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
                  }}
                >
                  {Intl.NumberFormat("en-US")
                    .format(filter.min)
                    .toString()
                    .replace(/\d/g, (d) => "۰۱۲۳۴۵۶۷۸۹"[d])}
                  {" تومان"}
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
                  {Intl.NumberFormat("en-US")
                    .format(filter.max)
                    .toString()
                    .replace(/\d/g, (d) => "۰۱۲۳۴۵۶۷۸۹"[d])}
                  {" تومان"}
                </Typography>
              </Box>
            </Box>
          )}
          {filter.mode == "P" ? <></> : null}
        </AccordionDetails>
        {filter.isMore ? (
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              p: "16px",
              cursor: "pointer",
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
                lineHeight: "1.92",
                letterSpacing: "normal",
                textAlign: "right",
                color: "#1773dc",
              }}
            >
              بیشتر
            </Typography>
            <ExpandMoreIcon sx={{ fontSize: "24px", color: "#1773dc" }} />
          </Box>
        ) : null}
      </Accordion>
      <Divider />
    </>
  );
}
