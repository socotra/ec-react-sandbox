import { AccountResponse } from "@socotra/ec-react-schemas";

export const accountWithNestedData: AccountResponse = {
  locator: "01JAVP4KNESG22YPNMJF1B14S4",
  type: "AccountWithNestedData",
  accountState: "draft",
  data: {
    companyTypes: "Limited Liability Company (LLC)",
    addressWithNestedData: {
      city: "f",
      state: "d",
      street: "c",
      zip: "e",
      subDataType: {
        field1: "field 1",
        field2: "field 2",
      },
    },
    companyName: "a",
  },
  delinquencyPlanName: "Standard",
  autoRenewalPlanName: "Standard",
  billingLevel: "policy",
  preferences: {
    installmentPreferences: {
      installmentPlanName: "Standard",
    },
  },
};
