export const sortByTime = (context, description) => {
  let start =
    (Number(description.startH) < 10
      ? Number(description.startH) == 0
        ? "00"
        : "0" + description.startH
      : description.startH) +
    ":" +
    (Number(description.startM) < 10
      ? Number(description.startM) == 0
        ? "00"
        : "0" + description.startM
      : description.startM);

  //--------------------------------------
  let end =
    (Number(description.endH) < 10
      ? Number(description.endH) == 0
        ? "00"
        : "0" + description.endH
      : description.endH) +
    ":" +
    (Number(description.endM) < 10
      ? Number(description.endM) == 0
        ? "00"
        : "0" + description.endM
      : description.endM);

  //--------------------------------------
  let hardCodeTemp = { ...context.hardCodeData };
  let temp = [...hardCodeTemp.pricedItineraries];
  temp.map((hSample) => {
    const startHSample = new Date(
      hSample.originDestinationOptions[0].flightSegments[0].departureDateTime
    ).getHours();
    const startMSample = new Date(
      hSample.originDestinationOptions[0].flightSegments[0].departureDateTime
    ).getMinutes();
    let startSample =
      (Number(startHSample) < 10
        ? Number(startHSample) == 0
          ? "00"
          : "0" + startHSample
        : startHSample) +
      ":" +
      (Number(startMSample) < 10
        ? Number(startMSample) == 0
          ? "00"
          : "0" + startMSample
        : startMSample);
    //--------------------------------------
    const endHSample = new Date(
      hSample.originDestinationOptions[0].flightSegments[0].arrivalDateTime
    ).getHours();
    const endMSample = new Date(
      hSample.originDestinationOptions[0].flightSegments[0].arrivalDateTime
    ).getMinutes();

    let endSample =
      (Number(endHSample) < 10
        ? Number(endHSample) == 0
          ? "00"
          : "0" + endHSample
        : endHSample) +
      ":" +
      (Number(endMSample) < 10
        ? Number(endMSample) == 0
          ? "00"
          : "0" + endMSample
        : endMSample);
    //--------------------------------------
    if (startSample >= start && endSample <= end) {
      hSample.mode = hSample.mode && true;
    } else {
      hSample.mode = false;
    }
  });

  hardCodeTemp.pricedItineraries = temp;
  context.setHardCodeData(hardCodeTemp);
};
