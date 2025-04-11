import { SegmentResponse } from "@socotra/ec-react-schemas";

export const segMentResponse: SegmentResponse = {
  locator: "01J664KSCASHJH8FG5X5WRXMYQ",
  segmentType: "coverage",
  startTime: "2024-08-24T00:00:00Z",
  endTime: "2025-02-24T01:00:00Z",
  element: {
    type: "PersonalAutoSegment",
    locator: "01J664KSCASHJH8FG5X5WRXMYQ",
    parentLocator: "01J664KSCASHJH8FG5X5WRXMYQ",
    elements: [
      {
        type: "PersonalVehiclePolicy",
        locator: "01J664KSCBCSR1SYV4BKCAM033",
        parentLocator: "01J664KSCASHJH8FG5X5WRXMYQ",
        elements: [
          {
            type: "RoadsideAssistanceCoveragePolicy",
            locator: "01J664KSCCSX0SJPBFYVG0TT9Z",
            parentLocator: "01J664KSCBCSR1SYV4BKCAM033",
            data: {
              serviceLevel: "Premium",
            },
            staticLocator: "01J664KFXF0N8KPZZBBRWZ0DM2",
            originalEffectiveTime: "2024-08-24T00:00:00Z",
          },
          {
            type: "CollisionCoveragePolicy",
            locator: "01J664KSCEBYJ5GF9PDBJ02MTK",
            parentLocator: "01J664KSCBCSR1SYV4BKCAM033",
            staticLocator: "01J664KFXFPF93CZ9PVQPZSPAK",
            originalEffectiveTime: "2024-08-24T00:00:00Z",
          },
          {
            type: "ComprehensiveCoveragePolicy",
            locator: "01J664KSCD6CN4522X7J3M89H7",
            parentLocator: "01J664KSCBCSR1SYV4BKCAM033",
            elements: [
              {
                type: "FooCoveragePolicy",
                locator: "01J664KSCDWB9MS4K5K59KH1DP",
                parentLocator: "01J664KSCD6CN4522X7J3M89H7",
                staticLocator: "01J664KRQAP7K6YFJ7N1M40MCJ",
                originalEffectiveTime: "2024-08-24T00:00:00Z",
              },
            ],
            staticLocator: "01J664KRQ9YE3WQSE15ZW2XNGG",
            originalEffectiveTime: "2024-08-24T00:00:00Z",
          },
        ],
        coverageTerms: {
          PAIncidentLimit: "PA200_500_100",
        },
        data: {
          usage: "Personal",
          value: 30000,
          vehicleType: "Sedan",
          model: "Camry",
          VIN: "4T1R11AK5MU610710",
          milesPerYear: 12000,
          year: 2021,
          make: "Toyota",
        },
        staticLocator: "01J664KFXFFNX90KEV3KZYN2A8",
        originalEffectiveTime: "2024-08-24T00:00:00Z",
      },
      {
        type: "PersonalVehiclePolicy",
        locator: "01J664KSCFN6K2VZMAW722KFCY",
        parentLocator: "01J664KSCASHJH8FG5X5WRXMYQ",
        elements: [
          {
            type: "CollisionCoveragePolicy",
            locator: "01J664KSCFX58QCZHEPNXCGA0W",
            parentLocator: "01J664KSCFN6K2VZMAW722KFCY",
            staticLocator: "01J664KFXFT1K0DDGEMX9XDT12",
            originalEffectiveTime: "2024-08-24T00:00:00Z",
          },
          {
            type: "ComprehensiveCoveragePolicy",
            locator: "01J664KSCFAMRWXMCSAH8AXD3Q",
            parentLocator: "01J664KSCFN6K2VZMAW722KFCY",
            elements: [
              {
                type: "FooCoveragePolicy",
                locator: "01J664KSCF4ZBQ4629TG8H5WAE",
                parentLocator: "01J664KSCFAMRWXMCSAH8AXD3Q",
                staticLocator: "01J664KRQAWASXW36K4AAD4P5R",
                originalEffectiveTime: "2024-08-24T00:00:00Z",
              },
            ],
            staticLocator: "01J664KRQAF7HVCKY60EZC3S4C",
            originalEffectiveTime: "2024-08-24T00:00:00Z",
          },
        ],
        coverageTerms: {
          PAIncidentLimit: "PA100_300_50",
        },
        data: {
          milesPerYear: 5000,
          year: 2019,
          vehicleType: "Sedan",
          model: "A7",
          VIN: "WAUV2AF20KN111732",
          value: 35000,
          make: "Audi",
        },
        staticLocator: "01J664KFXFRP9VQ79KRV1WC7VJ",
        originalEffectiveTime: "2024-08-24T00:00:00Z",
      },
    ],
    coverageTerms: {
      PADeductible: "PAD500",
      PALiabilityLimit: "PAL100_000",
    },
    data: {
      creditScore: 1,
      driver: {
        firstName: "firstName",
        lastName: "lastName",
        licenseNum: "licenseNum",
        middleName: "lastName",
      },
    },
    staticLocator: "01J664KFXF5CWSFRAJV3K0G2FP",
    originalEffectiveTime: "2024-08-24T00:00:00Z",
  },
  duration: 6,
};
