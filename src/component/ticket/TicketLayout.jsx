import React, { useEffect } from "react";
import { useContext } from "react";
import TicketCard from "./card/TicketCard";
import { Context } from "./../../context/context";
import { sortByTime } from "./../filter/function/time";
import { sortByAirline } from "./../filter/function/airline";
import { Box } from "@mui/material";

export default function TicketLayout() {
  const context = useContext(Context);

  useEffect(() => {
    let hardCodeTemp = { ...context.hardCodeData };
    let temp = [...hardCodeTemp.pricedItineraries];
    temp.map((hSample) => {
      hSample.mode = true;
    });
    hardCodeTemp.pricedItineraries = temp;
    context.setHardCodeData(hardCodeTemp);
    context.filters.map((filter, index) => {
      switch (index) {
        case 0:
          break;
        case 1:
          break;
        case 2:
          filter.items.map((item) => {
            if (item.mode) {
              sortByTime(context, item.description);
            }
          });
          break;
        case 3:
          break;
        case 4:
          break;
        case 5:
          filter.items.map((item) => {
            if (item.mode) {
              sortByAirline(context, item.iata);
            }
          });
          break;
        default:
          break;
      }
    });
  }, [context.filters]);

  return (
    <>
      {context.hardCodeData.pricedItineraries.map((ticket) =>
        ticket.mode ? (
          <Box key={ticket.id} sx={{ px: { xs: "16px", lg: 0 } }}>
            <TicketCard ticket={ticket} />
          </Box>
        ) : null
      )}
    </>
  );
}
