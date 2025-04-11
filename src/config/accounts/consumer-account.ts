import { AccountResponse } from "@socotra/ec-react-schemas";

export const consumerAccount: AccountResponse = {
  locator: "01J5V8NM2GSXK6HG42PD5Z1VAE",
  type: "consumerAccount",
  accountState: "validated",
  data: {
    lastName: "Clark",
    firstName: "Devin",
    tier: "Silver",
  },
  autoRenewalPlanName: "Standard",
  delinquencyPlanName: "Standard",
  billingLevel: "policy",
};
