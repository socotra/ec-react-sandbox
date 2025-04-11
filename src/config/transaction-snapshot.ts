import { TransactionSnapshotResponse } from "@socotra/ec-react-schemas";

export const transactionSnapshot: TransactionSnapshotResponse = {
  locator: "01J8J7615GKN8SSFJ22XP7R4WY",
  issuedTime: "2024-09-24T14:36:00.580870Z",
  effectiveTime: "2024-09-24T05:00:00Z",
  segment: {
    locator: "01J8J7BS5GHPZNHAX4EERE9ZFN",
    startTime: "2024-09-24T05:00:00Z",
    endTime: "2025-09-03T05:00:00Z",
    duration: 11.3,
    element: {
      locator: "01J8J7BS5GHPZNHAX4EERE9ZFN",
      staticLocator: "01J8FYEXGFKVPNHX1N14DRHEC3",
      type: "PersonalAutoSegment",
      data: {
        creditScore: 755,
        otherDrivers: [
          {
            firstName: "Jade",
            lastName: "Clark",
            licenseNum: "123123",
            middleName: "Kitty",
          },
        ],
        driver: {
          firstName: "Buzz",
          lastName: "Clark",
          licenseNum: "123123",
          middleName: "Kitty",
        },
      },
      parentLocator: "01J8J7BS5GHPZNHAX4EERE9ZFN",
      coverageTerms: {
        PADeductible: "PAD1000",
        PALiabilityLimit: "PAL1_000_000",
      },
      originalEffectiveTime: "2024-09-03T05:00:00Z",
      elements: [
        {
          locator: "01J8J7BS5GEP91QVNR6NX0HRYB",
          staticLocator: "01J8FYG89SQF85PN2GF6G3B37J",
          type: "PersonalVehiclePolicy",
          data: {
            make: "Miata",
            year: 2024,
            milesPerYear: 12000,
            vin: "1FVXA7AS24LM58815",
            model: "Mazda",
            vehicleType: "Coupe",
            value: 24000,
            usage: "Personal",
          },
          parentLocator: "01J8J7BS5GHPZNHAX4EERE9ZFN",
          coverageTerms: {
            PAIncidentLimit: "PA200_500_100",
            PALiabilityLimit: "PAL1_000_000",
          },
          originalEffectiveTime: "2024-09-03T05:00:00Z",
          elements: [
            {
              locator: "01J8J7BS5HKQPN9XNY9H4YJJDX",
              staticLocator: "01J8FYH08HERGXT2NHQ103YAV6",
              type: "RentalReimbursementCoveragePolicy",
              parentLocator: "01J8J7BS5GEP91QVNR6NX0HRYB",
              originalEffectiveTime: "2024-09-03T05:00:00Z",
            },
            {
              locator: "01J8J7BS5NV1TQMXGVP8GYGE30",
              staticLocator: "01J8FYH0XH7X3T9H9YW702JC8G",
              type: "CollisionCoveragePolicy",
              parentLocator: "01J8J7BS5GEP91QVNR6NX0HRYB",
              originalEffectiveTime: "2024-09-03T05:00:00Z",
            },
            {
              locator: "01J8J7BS5JBFEF59CCWMBMP1J6",
              staticLocator: "01J8FYH1DTJH8CVCBJHEH1WABG",
              type: "RoadsideAssistanceCoveragePolicy",
              data: {
                serviceLevel: "Premium",
              },
              parentLocator: "01J8J7BS5GEP91QVNR6NX0HRYB",
              originalEffectiveTime: "2024-09-03T05:00:00Z",
            },
            {
              locator: "01J8J7BS5K2M5WG1EE3S75X1FT",
              staticLocator: "01J8FYH21VFTT3F7Z0Y5WVNJV4",
              type: "ComprehensiveCoveragePolicy",
              parentLocator: "01J8J7BS5GEP91QVNR6NX0HRYB",
              originalEffectiveTime: "2024-09-03T05:00:00Z",
              elements: [
                {
                  locator: "01J8J7BS5M2NJ7WBZHST9QK9W9",
                  staticLocator: "01J8FYHHF8TNXJ8WKF8FG3RM59",
                  type: "FooCoveragePolicy",
                  parentLocator: "01J8J7BS5K2M5WG1EE3S75X1FT",
                  originalEffectiveTime: "2024-09-03T05:00:00Z",
                },
              ],
            },
          ],
        },
      ],
    },
    segmentType: "coverage",
    basedOn: "01J8G9J3N6P96ETQBNNB9DNC3W",
  },
  transactionCategory: "change",
  transactionType: "change",
};
