import React from "react";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import FilterListIcon from "@mui/icons-material/FilterList";
import { Box, Button, Typography } from "@mui/material";

export default function MainButton({
  filterMode,
  setFilterMode,
  sortMode,
  setSortMode,
}) {
  return (
    <Box
      sx={{
        display: { xs: "flex", lg: "none" },
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Button
        sx={{
          width: "160px",
          height: "40px",
          margin: "16px 16px 22px 8px",
          padding: "9px 39.7px 9px 39.7px",
          borderRadius: "4px",
          border: "solid 1px #eee",
          backgroundColor: "#fff",
          display: "flex",
          justifyContent: "center",
        }}
        onClick={() => {
          setFilterMode(!filterMode);
        }}
      >
        <FilterAltIcon sx={{ color: "#161616", ml: "5px" }} />
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
            textAlign: "ricenterght",
            color: "#161616",
            whiteSpace: "nowrap",
          }}
        >
          فیلتر کردن
        </Typography>
      </Button>
      <Button
        sx={{
          width: "160px",
          height: "40px",
          margin: "16px 16px 22px 8px",
          padding: "9px 39.7px 9px 39.7px",
          borderRadius: "4px",
          border: "solid 1px #eee",
          backgroundColor: "#fff",
          display: "flex",
          justifyContent: "center",
        }}
        onClick={() => {
          setSortMode(!sortMode);
        }}
      >
        <FilterListIcon sx={{ color: "#161616", ml: "5px" }} />
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
            textAlign: "ricenterght",
            color: "#161616",
          }}
        >
          مرتب‌سازی
        </Typography>
      </Button>
    </Box>
  );
}
