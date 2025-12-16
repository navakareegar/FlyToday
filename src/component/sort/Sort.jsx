import CustomSelectBox from "../util/CustomSelectBox";
import React, { useContext, useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import { Context } from "../../context/context";

export default function Sort({ sortMode }) {
  const context = useContext(Context);
  const [sortValue, setSortValue] = useState("");

  useEffect(() => {
    if (sortValue) {
      let hardCodeTemp = { ...context.hardCodeData };
      let temp = [...hardCodeTemp.pricedItineraries];
      if (sortValue == "زمان") {
        temp = temp.sort(function (a, b) {
          return new Date(
            a.originDestinationOptions[0].flightSegments[0].departureDateTime
          ) <
            new Date(
              b.originDestinationOptions[0].flightSegments[0].departureDateTime
            )
            ? -1
            : 1;
        });
      } else if (sortValue == "قیمت") {
        temp = temp.sort(function (a, b) {
          return new Date(a.airItineraryPricingInfo.itinTotalFare.totalTax) <
            new Date(b.airItineraryPricingInfo.itinTotalFare.totalTax)
            ? -1
            : 1;
        });
      }
      hardCodeTemp.pricedItineraries = temp;
      context.setHardCodeData(hardCodeTemp);
    }
  }, [sortValue]);

  return (
    <>
      {sortMode ? (
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            my: { xs: 2, lg: 0 },
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
              ml: "14px",
            }}
          >
            مرتب‌سازی:
          </Typography>
          <CustomSelectBox
            items={[
              { id: 1, name: "قیمت" },
              { id: 2, name: "زمان" },
            ]}
            title=""
            placeholder="قیمت"
            itemName={sortValue}
            setItemName={setSortValue}
            sx={{
              width: { xs: "200px", lg: "155px" },
              backgroundColor: "white",
            }}
          />
        </Box>
      ) : null}
    </>
  );
}
