import { PolicySnapshotResponse } from "@socotra/ec-react-schemas";

export const policySnapshot: PolicySnapshotResponse = {
  locator: "01J5M51TWC4YXZPY1X172WWFT2",
  accountLocator: "01J59M1PV46KHCFBPANAJJT6CQ",
  productName: "Personal_auto",
  currency: "GBP",
  timezone: "America/New_York",
  transaction: {
    locator: "01J5M51TWC4YXZPY1X172WWFT2",
    issuedTime: "2024-08-19T01:47:13.284717Z",
    effectiveTime: "2024-08-18T00:00:00Z",
    preferences: {
      billingPreferences: {
        billingLevel: "policy",
      },
      installmentPreferences: {
        anchorMode: "dueDay",
        cadence: "monthly",
        dueLeadDays: 0,
        generateLeadDays: 0,
        maxInstallmentsPerTerm: 24,
      },
    },
    segment: {
      locator: "01J5M528G5YQ6FC6MRZ0E9CZTM",
      segmentType: "coverage",
      startTime: "2024-08-18T00:00:00Z",
      endTime: "2025-02-18T01:00:00Z",
      element: {
        type: "PersonalAutoSegment",
        locator: "01J5M528G5YQ6FC6MRZ0E9CZTM",
        parentLocator: "01J5M528G5YQ6FC6MRZ0E9CZTM",
        elements: [
          {
            type: "PersonalVehiclePolicy",
            locator: "01J5M528G5ABSE6HGD3WKD7H79",
            parentLocator: "01J5M528G5YQ6FC6MRZ0E9CZTM",
            elements: [
              {
                type: "CollisionCoveragePolicy",
                locator: "01J5M528G5KPK23VRS1WR0SB3S",
                parentLocator: "01J5M528G5ABSE6HGD3WKD7H79",
                staticLocator: "01J5M51TWCG8Y3B5B3G4Z1PRJM",
                originalEffectiveTime: "2024-08-18T00:00:00Z",
              },
              {
                type: "RoadsideAssistanceCoveragePolicy",
                locator: "01J5M528G50GPGNHNM9SXGBS6M",
                parentLocator: "01J5M528G5ABSE6HGD3WKD7H79",
                data: {
                  serviceLevel: "Premium",
                },
                staticLocator: "01J5M51TWCK76H972DREH815KB",
                originalEffectiveTime: "2024-08-18T00:00:00Z",
              },
              {
                type: "ComprehensiveCoveragePolicy",
                locator: "01J5M528G5ZRB1ATM751AFH39X",
                parentLocator: "01J5M528G5ABSE6HGD3WKD7H79",
                elements: [
                  {
                    type: "FooCoveragePolicy",
                    locator: "01J5M528G5AB1CZH4RMHVXCCXM",
                    parentLocator: "01J5M528G5ZRB1ATM751AFH39X",
                    staticLocator: "01J5M528CH4V4EV5807N85HYH4",
                    originalEffectiveTime: "2024-08-18T00:00:00Z",
                  },
                ],
                staticLocator: "01J5M528CHTZE3P9J8RJG1BX5A",
                originalEffectiveTime: "2024-08-18T00:00:00Z",
              },
            ],
            coverageTerms: {
              PAIncidentLimit: "PA200_500_100",
            },
            data: {
              model: "Camry",
              VIN: "4T1R11AK5MU610710",
              milesPerYear: 12000,
              year: 2021,
              make: "Toyota",
              usage: "Personal",
              value: 30000,
              vehicleType: "Sedan",
            },
            staticLocator: "01J5M51TWCP5H6MCSZDGVGS3N1",
            originalEffectiveTime: "2024-08-18T00:00:00Z",
          },
        ],
        coverageTerms: {
          PADeductible: "PAD500",
          PALiabilityLimit: "PAL100_000",
        },
        data: {
          driver: {
            firstName: "firstName",
            lastName: "lastName",
            licenseNum: "licenseNum",
            middleName: "lastName",
          },
          creditScore: 1,
        },
        staticLocator: "01J5M51TWC4YXZPY1X172WWFT2",
        originalEffectiveTime: "2024-08-18T00:00:00Z",
      },
      duration: 6,
    },
    transactionCategory: "issuance",
    transactionType: "issuance",
  },
  delinquencyPlanName: "Standard",
};
