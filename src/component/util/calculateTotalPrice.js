let dollarUSLocale = Intl.NumberFormat("en-US");

export const calculateTotalPrice = (ticket) => {
  let totalPrice = 0;
  ticket.airItineraryPricingInfo.ptcFareBreakdown.map((item) => {
    totalPrice += item.passengerFare.totalFareWithMarkupAndVat;
  });
  return dollarUSLocale.format(totalPrice);
};
