import { QuoteResponse } from "@socotra/ec-react-schemas";

export const quote: QuoteResponse = {
  locator: "01JAEMP4KFR9PVKCE19Z39MYCA",
  quoteState: "draft",
  productName: "Quantifier_Product",
  accountLocator: "01JAEMJ16TDXB67HB3TE846MRV",
  timezone: "America/New_York",
  underwritingStatus: "none",
  element: {
    type: "Quantifier_ProductQuote",
    locator: "01JAEMP4KFR9PVKCE19Z39MYCA",
    parentLocator: "01JAEMP4KFR9PVKCE19Z39MYCA",
    elements: [
      {
        type: "VehicleQuote",
        locator: "01JAEMQ46RTDKYFEN0EBAV3EB3",
        parentLocator: "01JAEMP4KFR9PVKCE19Z39MYCA",
        staticLocator: "01JAEMQ46RTDKYFEN0EBAV3EB3",
      },
      {
        type: "VehicleQuote",
        locator: "01JAEMQ5EX7FZA83H1CZCHBRH9",
        parentLocator: "01JAEMP4KFR9PVKCE19Z39MYCA",
        staticLocator: "01JAEMQ5EX7FZA83H1CZCHBRH9",
      },
      {
        type: "ConstraintVehicleQuote",
        locator: "01JAEMS2D8BKQN8MGEC5MGJDK3",
        parentLocator: "01JAEMP4KFR9PVKCE19Z39MYCA",
        staticLocator: "01JAEMS2D8BKQN8MGEC5MGJDK3",
      },
      {
        type: "ConstraintVehicleQuote",
        locator: "01JAEMS3WTW8BY14KT3APKHP4F",
        parentLocator: "01JAEMP4KFR9PVKCE19Z39MYCA",
        staticLocator: "01JAEMS3WTW8BY14KT3APKHP4F",
      },
    ],
    staticLocator: "01JAEMP4KFR9PVKCE19Z39MYCA",
  },
  groupLocator: "01JAEMP4KFR9PVKCE19Z39MYCA",
  billingLevel: "inherit",
};
