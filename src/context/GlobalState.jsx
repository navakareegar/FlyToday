import React from "react";
import { useState } from "react";
import { Context } from "./context";

export const GlobalState = ({ children }) => {
  const [hardCodeData, setHardCodeData] = useState({
    searchId: 84303,
    pricedItineraries: [
      {
        id: 1,
        mode: true,
        isPassportMandatory: true,
        isDestinationAddressMandatory: false,
        isPassportIssueDateMandatory: false,
        directionInd: 0,
        refundMethod: "Offline",
        validatingAirlineCode: "HH",
        fareSourceCode:
          "346531653036653331303736343334366133613664653734343331303531646426323037302631353338363735",
        airItineraryPricingInfo: {
          fareType: "Publish",
          itinTotalFare: {
            totalService: null,
            totalFare: 9200000,
            grandTotalWithoutDiscount: 9200000,
            discountAmount: null,
            totalVat: 0,
            totalTax: 9200000,
            totalServiceTax: 0,
          },
          ptcFareBreakdown: [
            {
              id: 1,
              passengerFare: {
                baseFare: 0,
                totalFare: 9200000,
                serviceTax: 0,
                taxes: [],
                total: 0,
                tax: 9200000,
                vat: 0,
                baseFareWithMarkup: 0,
                totalFareWithMarkupAndVat: 9200000,
              },
              passengerTypeQuantity: {
                passengerType: "Adt",
                quantity: 1,
              },
            },
          ],
          fareInfoes: [],
        },
        originDestinationOptions: [
          {
            journeyDurationPerMinute: 510,
            connectionTimePerMinute: 0,
            flightSegments: [
              {
                departureDateTime: "2022-03-10T15:30:00",
                arrivalDateTime: "2022-03-11T00:00:00",
                stopQuantity: 0,
                flightNumber: "6342",
                resBookDesigCode: "Y",
                journeyDuration: "08:30",
                journeyDurationPerMinute: 510,
                connectionTimePerMinute: 0,
                departureAirportLocationCode: "THR",
                arrivalAirportLocationCode: "MHD",
                marketingAirlineCode: "HH",
                cabinClassCode: "Y",
                operatingAirline: {
                  code: "HH",
                  flightNumber: "6342",
                  equipment: "",
                  equipmentName: null,
                },
                seatsRemaining: 7,
                isCharter: true,
                isReturn: false,
                baggage: null,
                technicalStops: [],
              },
            ],
          },
        ],
        featured: null,
      },
      {
        id: 2,
        mode: true,
        isPassportMandatory: true,
        isDestinationAddressMandatory: false,
        isPassportIssueDateMandatory: false,
        directionInd: 0,
        refundMethod: "Offline",
        validatingAirlineCode: "HH",
        fareSourceCode:
          "616662373566653230633332343165656139646638333737353035653535663726323037302631353338363735",
        airItineraryPricingInfo: {
          fareType: "Publish",
          itinTotalFare: {
            totalService: null,
            totalFare: 9400000,
            grandTotalWithoutDiscount: 9400000,
            discountAmount: null,
            totalVat: 0,
            totalTax: 9400000,
            totalServiceTax: 0,
          },
          ptcFareBreakdown: [
            {
              id: 1,
              passengerFare: {
                baseFare: 0,
                totalFare: 9400000,
                serviceTax: 0,
                taxes: [],
                total: 0,
                tax: 9400000,
                vat: 0,
                baseFareWithMarkup: 0,
                totalFareWithMarkupAndVat: 9400000,
              },
              passengerTypeQuantity: {
                passengerType: "Adt",
                quantity: 1,
              },
            },
          ],
          fareInfoes: [],
        },
        originDestinationOptions: [
          {
            journeyDurationPerMinute: 900,
            connectionTimePerMinute: 0,
            flightSegments: [
              {
                departureDateTime: "2022-03-10T09:00:00",
                arrivalDateTime: "2022-03-11T00:00:00",
                stopQuantity: 0,
                flightNumber: "6224",
                resBookDesigCode: "Y",
                journeyDuration: "15:00",
                journeyDurationPerMinute: 900,
                connectionTimePerMinute: 0,
                departureAirportLocationCode: "THR",
                arrivalAirportLocationCode: "MHD",
                marketingAirlineCode: "HH",
                cabinClassCode: "Y",
                operatingAirline: {
                  code: "HH",
                  flightNumber: "6224",
                  equipment: "",
                  equipmentName: null,
                },
                seatsRemaining: 5,
                isCharter: true,
                isReturn: false,
                baggage: null,
                technicalStops: [],
              },
            ],
          },
        ],
        featured: null,
      },
      {
        id: 3,
        mode: true,
        isPassportMandatory: true,
        isDestinationAddressMandatory: false,
        isPassportIssueDateMandatory: false,
        directionInd: 0,
        refundMethod: "Offline",
        validatingAirlineCode: "HH",
        fareSourceCode:
          "376631623530313063626265346135653931306533643166346637376537323426323037302631353338363735",
        airItineraryPricingInfo: {
          fareType: "Publish",
          itinTotalFare: {
            totalService: null,
            totalFare: 9400000,
            grandTotalWithoutDiscount: 9400000,
            discountAmount: null,
            totalVat: 0,
            totalTax: 9400000,
            totalServiceTax: 0,
          },
          ptcFareBreakdown: [
            {
              id: 1,
              passengerFare: {
                baseFare: 0,
                totalFare: 9400000,
                serviceTax: 0,
                taxes: [],
                total: 0,
                tax: 9400000,
                vat: 0,
                baseFareWithMarkup: 0,
                totalFareWithMarkupAndVat: 9400000,
              },
              passengerTypeQuantity: {
                passengerType: "Adt",
                quantity: 1,
              },
            },
          ],
          fareInfoes: [],
        },
        originDestinationOptions: [
          {
            journeyDurationPerMinute: 785,
            connectionTimePerMinute: 0,
            flightSegments: [
              {
                departureDateTime: "2022-03-10T10:55:00",
                arrivalDateTime: "2022-03-11T00:00:00",
                stopQuantity: 0,
                flightNumber: "6303",
                resBookDesigCode: "Y",
                journeyDuration: "13:05",
                journeyDurationPerMinute: 785,
                connectionTimePerMinute: 0,
                departureAirportLocationCode: "THR",
                arrivalAirportLocationCode: "MHD",
                marketingAirlineCode: "HH",
                cabinClassCode: "Y",
                operatingAirline: {
                  code: "HH",
                  flightNumber: "6303",
                  equipment: "",
                  equipmentName: null,
                },
                seatsRemaining: 5,
                isCharter: true,
                isReturn: false,
                baggage: null,
                technicalStops: [],
              },
            ],
          },
        ],
        featured: null,
      },
    ],
    additionalData: {
      airlines: [
        {
          iata: "HH",
          name: "Taban",
          nameFa: "تابان",
        },
      ],
      airports: [
        {
          iata: "MHD",
          name: "Mashhad",
          nameFa: "فرودگاه مشهد",
          cityFa: "مشهد",
          cityId: null,
          countryCode: "IR",
          countryFa: "ایران",
        },
        {
          iata: "THR",
          name: "Mehr Abad",
          nameFa: "فرودگاه مهرآباد",
          cityFa: "تهران",
          cityId: "THR",
          countryCode: "IR",
          countryFa: "ایران",
        },
      ],
      cities: null,
    },
  });

  const [filters, setFilters] = useState([
    {
      id: 0,
      mode: "P",
      title: "محدوده قیمت",
      min: "12500000",
      max: "2000000",
    },
    {
      id: 1,
      mode: "C",
      title: "تعداد توقف",
      items: [
        { id: 1, name: "بدون توقف", description: "", mode: false },
        { id: 2, name: "یک توقف", description: "", mode: false },
        { id: 3, name: "بیش از ۲ توقف", description: "", mode: false },
      ],
      isMore: false,
    },
    {
      id: 2,
      mode: "C",
      title: "زمان حرکت",
      items: [
        {
          id: 1,
          name: "صبح",
          description: { startH: "9", startM: "00", endH: "00", endM: "00" },
          mode: false,
        },
        {
          id: 2,
          name: "عصر",
          description: { startH: "15", startM: "30", endH: "00", endM: "00" },
          mode: false,
        },
        {
          id: 3,
          name: "شب",
          description: { startH: "18", startM: "00", endH: "00", endM: "00" },
          mode: false,
        },
      ],
      isMore: false,
    },
    {
      id: 3,
      mode: "C",
      title: "کلاس پروازی",
      items: [
        { id: 1, name: "اکونومی", description: "", mode: false },
        { id: 2, name: "بیزینس", description: "", mode: false },
      ],
      isMore: false,
    },
    {
      id: 4,
      mode: "C",
      title: "نوع پرواز",
      items: [
        { id: 1, name: "پروازهای سیستمی", description: "", mode: false },
        { id: 2, name: "پروازهای چارتری", description: "", mode: false },
      ],
      isMore: false,
    },
    {
      id: 5,
      mode: "C",
      title: "ایرلاین ها",
      items: [
        { id: 1, iata: "MM", name: "ماهان", description: "", mode: false },
        { id: 2, iata: "AA", name: "آلیتالیا", description: "", mode: false },
        {
          id: 3,
          iata: "LL",
          name: "لوفت‌هانزا",
          description: "",
          mode: false,
        },
        { id: 4, iata: "HH", name: "تابان", description: "", mode: false },
      ],
      isMore: true,
    },
  ]);

  const findAirPortInfo = (code) => {
    let val;
    hardCodeData.additionalData.airports.map((airport) => {
      if (airport.iata === code) {
        val = airport;
      }
    });
    return val;
  };

  const findAirLineInfo = (code) => {
    let val;
    hardCodeData.additionalData.airlines.map((airline) => {
      if (airline.iata === code) {
        val = airline;
      }
    });
    return val;
  };

  return (
    <Context.Provider
      value={{
        hardCodeData,
        setHardCodeData,
        filters,
        setFilters,
        findAirPortInfo,
        findAirLineInfo,
      }}
    >
      {children}
    </Context.Provider>
  );
};
export default GlobalState;
