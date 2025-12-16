import { Box, Divider, Typography } from "@mui/material";
import React from "react";
import { useContext } from "react";
import { Context } from "../../context/context";
import FilterAccordion from "./FilterAccordion";
import { resetFilters } from "./function/reset";

export default function FilterLayout() {
  const context = useContext(Context);

  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
          p: "16px",
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
          }}
        >
          فیلترها
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
            color: "#1773dc",
            cursor: "pointer",
          }}
          onClick={() => resetFilters(context)}
        >
          حذف فیلترها
        </Typography>
      </Box>
      <Divider />
      {context.filters.map((filter, index) => (
        <FilterAccordion key={filter.id} filter={filter} index={index} />
      ))}
    </Box>
  );
}
