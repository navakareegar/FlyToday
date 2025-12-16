export const resetFilters = (context) => {
  let hardCodeTemp = { ...context.hardCodeData };
  let temp = [...hardCodeTemp.pricedItineraries];
  temp.map((hSample) => {
    hSample.mode = true;
  });
  hardCodeTemp.pricedItineraries = temp;
  context.setHardCodeData(hardCodeTemp);

  const filterTemp = [...context.filters];
  filterTemp.map((filter) => {
    filter.items?.map((item) => {
      item.mode = false;
    });
  });
  context.setFilters(filterTemp);
};
