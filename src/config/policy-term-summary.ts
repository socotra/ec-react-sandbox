import { TermSummary } from "@socotra/ec-react-schemas";

export const termSummary: TermSummary = {
  locator: "01J5V8ZN6Y6CJVN1WDQX5E3TM5",
  staticLocator: "01J5V8ZN6Y6CJVN1WDQX5E3TM5",
  policyLocator: "01J5V8ZN6Y6CJVN1WDQX5E3TM5",
  startTime: "2024-08-21T05:00:00Z",
  endTime: "2025-08-21T05:00:00Z",
  duration: 12,
  durationBasis: "months",
  termNumber: 0,
  subsegments: [
    {
      locator: "01J601B7N0YEVZ1XFV6MJTAQXJ",
      startTime: "2024-08-21T05:00:00Z",
      endTime: "2025-08-21T05:00:00Z",
      duration: 12,
      type: "coverage",
      elements: [
        {
          locator: "01J601B7N547YPFM4ZKC3NW0NQ",
          staticLocator: "01J5VDN984RS25SMC12Z012YKA",
          type: "CollisionCoveragePolicy",
        },
        {
          locator: "01J601B7N2T6D11B25TBS5BNHV",
          staticLocator: "01J5VDNBRY0AD1DASR1GHM5GCD",
          type: "RoadsideAssistanceCoveragePolicy",
          data: {
            serviceLevel: "Premium",
          },
        },
        {
          locator: "01J601B7N1SWXHK0BN2MCSA31B",
          staticLocator: "01J5VDN6N6VAF0Y4S5YCHZVYES",
          type: "RentalReimbursementCoveragePolicy",
        },
        {
          locator: "01J601B7N1QEJZWCMH6VVDC5VW",
          staticLocator: "01J5V93D3YMXCF0K8FAFV0MX2A",
          type: "PersonalVehiclePolicy",
          chargeSummaries: {
            premium: 1452,
          },
          data: {
            vin: "JH4CU4F40BC000020",
            milesPerYear: 4000,
            year: 2000,
            make: "Miata",
            usage: "Personal",
            value: 20000,
            vehicleType: "Convertible",
            model: "Mazda",
          },
        },
        {
          locator: "01J601B7N0YEVZ1XFV6MJTAQXJ",
          staticLocator: "01J5V8ZN6Y6CJVN1WDQX5E3TM5",
          type: "PersonalAutoSegment",
          chargeSummaries: {
            serviceFee: 10,
            GST: 76.23,
          },
          data: {
            driver: {
              firstName: "Devin",
              lastName: "Clark",
              licenseNum: "123123123",
            },
            otherDrivers: [
              {
                firstName: "Robbie",
                lastName: "Moloski",
                licenseNum: "123123",
              },
            ],
            creditScore: 500,
          },
        },
        {
          locator: "01J601B7N454G09HPF7PTHDQSH",
          staticLocator: "01J5VDPFQ7JAJK14K2GJ9WGGFB",
          type: "FooCoveragePolicy",
        },
        {
          locator: "01J601B7N3CX8N15ZXVDN74JMH",
          staticLocator: "01J5VDNE8T9T4JV90BDSXF9JTB",
          type: "ComprehensiveCoveragePolicy",
        },
      ],
    },
  ],
};
