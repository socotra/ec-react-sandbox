import { QuoteResponse } from "@socotra/ec-react-schemas";

export const quote: QuoteResponse = {
  locator: "01J5XB838WK26T017E954VTR2P",
  quoteState: "draft",
  productName: "PersonalAuto",
  accountLocator: "01J5V8NM2GSXK6HG42PD5Z1VAE",
  timezone: "America/New_York",
  currency: "GBP",
  underwritingStatus: "none",
  element: {
    locator: "01J5XB838WK26T017E954VTR2P",
    staticLocator: "01J5XB838WK26T017E954VTR2P",
    type: "PersonalAutoQuote",
    data: {
      driver: {
        licenseNum: "123123123",
      },
      Region: "West",
      creditScore: 600,
    },
    parentLocator: "01J5XB838WK26T017E954VTR2P",

    elements: [
      {
        locator: "01J5XDCV6GP1WNBQ8FQ9RA500Y",
        staticLocator: "01J5XDCV6GP1WNBQ8FQ9RA500Y",
        type: "PersonalVehicleQuote",
        data: {
          vin: "123123",
        },
        parentLocator: "01J5XB838WK26T017E954VTR2P",
      },
    ],
  },
  billingLevel: "inherit",
};
