export const sortByAirline = (context, iata) => {
  let hardCodeTemp = { ...context.hardCodeData };
  let temp = [...hardCodeTemp.pricedItineraries];
  temp.map((hSample) => {
    if (
      hSample.originDestinationOptions[0].flightSegments[0]
        .marketingAirlineCode == iata
    ) {
      hSample.mode = hSample.mode && true;
    } else {
      hSample.mode = false;
    }
  });

  hardCodeTemp.pricedItineraries = temp;
  context.setHardCodeData(hardCodeTemp);
};
