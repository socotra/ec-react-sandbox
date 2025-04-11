import { DataModel } from "@socotra/ec-react-schemas";

export const dataModel: DataModel = {
  dataTypes: {
    Driver: {
      abstract: false,
      data: {
        licenseNum: {
          displayName: "License Number",
          type: "string",
          maxLength: 20000,
        },
        firstName: {
          displayName: "First Name",
          type: "string",
          maxLength: 20000,
        },
        middleName: {
          displayName: "Middle Name",
          type: "string?",
          maxLength: 20000,
        },
        lastName: {
          displayName: "Last Name",
          type: "string",
          maxLength: 20000,
        },
      },
    },
    Person: {
      abstract: false,
      data: {
        firstName: {
          displayName: "First Name",
          type: "string",
          maxLength: 20000,
        },
        middleName: {
          displayName: "Middle Name",
          type: "string?",
          maxLength: 20000,
        },
        lastName: {
          displayName: "Last Name",
          type: "string",
          maxLength: 20000,
        },
      },
    },
    AddressWithNestedData: {
      displayName: "Address with nested Data",
      data: {
        street: {
          displayName: "Street",
          type: "string",
          maxLength: 20000,
        },
        locNum: {
          displayName: "Lot/Unit#",
          type: "string?",
          maxLength: 20000,
        },
        city: {
          displayName: "City",
          type: "string",
          maxLength: 20000,
        },
        state: {
          displayName: "State",
          type: "string",
          maxLength: 20000,
        },
        zip: {
          displayName: "ZIP",
          type: "string",
          maxLength: 20000,
        },
        county: {
          displayName: "County",
          type: "string?",
          maxLength: 20000,
        },
        subDataType: {
          displayName: "Test nested data",
          type: "TestNestedData",
        },
      },
      abstract: false,
    },
    Address: {
      displayName: "Address",
      data: {
        street: {
          displayName: "Street",
          type: "string",
          maxLength: 20000,
        },
        locNum: {
          displayName: "Lot/Unit#",
          type: "string?",
          maxLength: 20000,
        },
        city: {
          displayName: "City",
          type: "string",
          maxLength: 20000,
        },
        state: {
          displayName: "State",
          type: "string",
          maxLength: 20000,
        },
        zip: {
          displayName: "ZIP",
          type: "string",
          maxLength: 20000,
        },
        county: {
          displayName: "County",
          type: "string?",
          maxLength: 20000,
        },
      },
      abstract: false,
    },
    TestNestedData: {
      displayName: "Nested Data",
      data: {
        field1: {
          displayName: "Field 1",
          type: "string",
          maxLength: 20000,
        },
        field2: {
          displayName: "Field 2",
          type: "string",
          maxLength: 20000,
        },
      },
      abstract: false,
    },
    BillingInfo: {
      displayName: "Billing Information",
      data: {
        country: {
          displayName: "Country",
          type: "string",
          maxLength: 20000,
          options: ["USA", "AUS"],
        },
        firstname: {
          displayName: "First Name",
          type: "string",
          maxLength: 20000,
        },
        lastname: {
          displayName: "Last Name",
          type: "string",
          maxLength: 20000,
        },
        address1: {
          displayName: "Address 1",
          type: "string",
          maxLength: 20000,
        },
        address2: {
          displayName: "Address 2",
          type: "string",
          maxLength: 20000,
        },
        city: {
          displayName: "City/Town",
          type: "string",
          maxLength: 20000,
        },
        state: {
          displayName: "State",
          type: "string",
          maxLength: 20000,
          options: ["CA", "NY"],
        },
      },
      abstract: false,
    },
    CreditCard: {
      displayName: "Credit Card",
      data: {
        holderName: {
          displayName: "Name",
          type: "string",
          maxLength: 20000,
        },
      },
      abstract: false,
    },
  },
  accounts: {
    commercialAccount: {
      displayName: "Commercial Account",
      abstract: false,
      data: {
        companyName: {
          displayName: "Company Name",
          type: "string",
          maxLength: 20000,
        },
        tier: {
          displayName: "Tier",
          type: "string",
          maxLength: 20000,
          options: ["Gold", "Silver", "Bronze"],
        },
      },
    },
    consumerAccount: {
      displayName: "Consumer Account",
      abstract: false,
      data: {
        firstName: {
          displayName: "First Name",
          type: "string",
          maxLength: 20000,
        },
        middleName: {
          displayName: "Middle Name",
          type: "string?",
          maxLength: 20000,
        },
        lastName: {
          displayName: "Last Name",
          type: "string",
          minLength: 2,
          maxLength: 20000,
        },
        tier: {
          displayName: "Tier",
          type: "string",
          maxLength: 20000,
          options: ["Gold", "Silver", "Bronze"],
        },
      },
    },
    accountWithNestedData: {
      data: {
        companyName: {
          displayName: "Company Name",
          type: "string",
          maxLength: 20000,
        },
        companyTypes: {
          displayName: "Company Type",
          type: "string",
          maxLength: 20000,
          options: [
            "Corporation",
            "Limited Liability Company (LLC)",
            "Partnership",
            "Sole Proprietorship",
            "Non-Profit Organization",
          ],
        },
        email: {
          displayName: "Email",
          type: "string?",
          maxLength: 20000,
        },
        primaryPhone: {
          displayName: "Primary Phone Number",
          type: "string?",
          maxLength: 20000,
        },
        secondaryPhone: {
          displayName: "Secondary Phone Number",
          type: "string?",
          maxLength: 20000,
        },
        address: {
          displayName: "Address with nested Data",
          type: "Address",
        },
        addressWithNestedData: {
          displayName: "Address with nested Data",
          type: "AddressWithNestedData",
        },
      },
      abstract: false,
    },
  },
  products: {
    Bop: {
      abstract: false,
      displayName: "Business Owner's Policy",
      eligibleAccountTypes: ["commercialAccount"],
      contents: [
        "BopPropertyLine",
        "BopLiabilityLine",
        "BopBusinessInterruptionLine?",
      ],
      defaultTermDuration: 0,
      defaultInstallmentPlan: "Monthly10",
    },
    CommercialAuto: {
      abstract: false,
      displayName: "Commercial Auto",
      eligibleAccountTypes: ["commercialAccount"],
      contents: ["CommercialVehicle+"],
      data: {
        Region: {
          type: "string",
          maxLength: 20000,
          options: ["West", "East"],
          scope: "Q",
        },
        driver: {
          type: "Driver",
        },
      },
      defaultTermDuration: 6,
    },
    PersonalAuto: {
      abstract: false,
      displayName: "Personal Auto",
      coverageTerms: [
        "PADeductible!",
        "PALiabilityLimit?",
        "PAIncidentLimitValue",
      ],
      eligibleAccountTypes: ["consumerAccount"],
      contents: ["PersonalVehicle+"],
      charges: ["GST", "ServiceFee"],
      data: {
        otherDrivers: {
          displayName: "Other Drivers",
          type: "Driver*",
        },
        useNhtsaRating: {
          displayName: "Use NHTSA Rating",
          defaultValue: "false",
          type: "boolean",
          scope: "Q",
        },
        region2: {
          displayName: "Region",
          type: "string?",
          maxLength: 20000,
          options: ["West", "East"],
          scope: "QQ",
        },
        creditScore: {
          displayName: "Credit Score",
          type: "decimal?",
          min: "9",
          max: "10",
          precision: 2,
          scope: "Q,P",
        },
        Region: {
          type: "string",
          maxLength: 20000,
          options: ["West", "East"],
          scope: "Q",
        },
        driver: {
          type: "Driver",
        },
      },
      defaultTermDuration: 6,
    },
    GroupBenefits: {
      abstract: false,
      displayName: "Group Benefits",
      contents: ["EmployeeGroup*"],
      data: {
        EmployerName: {
          displayName: "Employer Name",
          type: "string",
          maxLength: 20000,
        },
      },
      defaultTermDuration: 0,
    },
  },
  coverageTerms: {
    PADeductible: {
      type: "deductible",
      options: {
        PAD2000: {
          displayName: "$2,000",
          value: 2000,
          tag: "Two Thousand",
        },
        "*PAD1000": {
          displayName: "$1,000",
          value: 1000,
          tag: "One Thousand",
        },
        PAD500: {
          displayName: "$500",
          value: 500,
          tag: "Five Hundred",
        },
      },
    },
    PAIncidentLimit: {
      type: "splitLimit",
      options: {
        PA200_500_100: {
          displayName: "200/500/100",
          value: 800,
        },
        PA500_1000_200: {
          displayName: "500/1000/200",
          tag: "THX1138",
        },
        "*PA100_300_50": {
          displayName: "100/300/50",
        },
      },
    },
    PALiabilityLimit: {
      type: "limit",
      options: {
        "*PAL100_000": {
          displayName: "$100,000",
        },
        PAL250_000: {
          displayName: "$250,000",
        },
        PAL1_000_000: {
          displayName: "$1,000,000",
        },
        PAL500_000: {
          displayName: "$500,000",
        },
        PAL2_000_000: {
          displayName: "$2,000,000",
        },
        PAL5_000_000: {
          displayName: "$5,000,000",
        },
      },
    },
    PAIncidentLimitValue: {
      type: "SplitLimit",
      value: {
        type: "int",
        defaultValue: "0",
        min: 0,
        max: 10,
      },
    },
  },
  delinquencyPlans: {
    transactionNamedLapse: {
      gracePeriodDays: 0,
      advanceLapseTo: "issued",
      delinquencyLevel: "policy",
      lapseTransactionType: "lapse",
    },
    Standard: {
      displayName: "Standard Delinquency Plan",
      gracePeriodDays: 7,
      advanceLapseTo: "issued",
      delinquencyLevel: "policy",
      lapseTransactionType: "cancellation",
    },
    oldStandard: {
      gracePeriodDays: 7,
      advanceLapseTo: "issued",
      delinquencyLevel: "policy",
      lapseTransactionType: "cancellation",
    },
    lapseToIssued: {
      gracePeriodDays: 0,
      advanceLapseTo: "issued",
      delinquencyLevel: "policy",
      lapseTransactionType: "cancellation",
    },
  },
  autoRenewalPlans: {
    Standard: {
      generateAutoRenewals: false,
      newTermDuration: 6,
      renewalAcceptLeadDays: 2,
      renewalCreateLeadDays: 3,
      renewalIssueLeadDays: 1,
    },
    AutoRenew: {
      generateAutoRenewals: true,
      newTermDuration: 6,
      renewalAcceptLeadDays: 2,
      renewalCreateLeadDays: 3,
      renewalIssueLeadDays: 1,
    },
    AutoRenewalWithCreateOnly: {
      generateAutoRenewals: true,
      renewalCreateLeadDays: 5,
    },
  },
  policyLines: {
    BopLiabilityLine: {
      displayName: "BOP Liability",
      contents: ["LiabilityCoverage!"],
      abstract: false,
    },
    BopPropertyLine: {
      displayName: "BOP Property",
      contents: ["Location*", "Building*"],
      abstract: false,
    },
    BopBusinessInterruptionLine: {
      abstract: false,
    },
  },
  exposures: {
    Human: {
      abstract: false,
      data: {
        Person: {
          type: "string",
          maxLength: 20000,
        },
        FirstName: {
          type: "string",
          maxLength: 20000,
        },
        LastName: {
          type: "string",
          maxLength: 20000,
        },
      },
    },
    Building: {
      contents: ["Lighting"],
      abstract: false,
    },
    Garage: {
      abstract: false,
    },
    Employee: {
      abstract: false,
      data: {
        StartDate: {
          type: "date",
        },
        Person: {
          type: "string",
          maxLength: 20000,
        },
        FirstName: {
          type: "string",
          maxLength: 20000,
        },
        LastName: {
          type: "string",
          maxLength: 20000,
        },
      },
    },
    CommercialVehicle: {
      contents: ["ComprehensiveCoverage!", "CollisionCoverage"],
      abstract: false,
      coverageTerms: ["PAIncidentLimit"],
      data: {
        model: {
          displayName: "Vehicle Model",
          type: "string",
          maxLength: 20000,
          scope: "QQ,P",
        },
        make: {
          displayName: "Vehicle Make",
          type: "string",
          minLength: 2,
          maxLength: 64,
          scope: "Q, QQ, P",
        },
        year: {
          displayName: "Vehicle Year",
          type: "int",
          min: "2000",
          max: "2025",
        },
        vin: {
          displayName: "VIN",
          type: "string",
          maxLength: 20000,
          regex: "[(A-H|J-N|P|R-Z|0-9)]{17}",
          scope: "QQ, Q, P",
        },
        vehicleType: {
          displayName: "Vehicle Type",
          type: "string",
          maxLength: 20000,
        },
        value: {
          displayName: "Value",
          type: "decimal",
          min: "1000",
          max: "2000000",
        },
        milesPerYear: {
          displayName: "Miles Per Year",
          type: "int",
          min: "1000",
          max: "100000",
          scope: "P",
        },
      },
      charges: ["Premium"],
    },
    PersonalVehicle: {
      contents: [
        "RentalReimbursementCoverage?",
        "RoadsideAssistanceCoverage?",
        "ComprehensiveCoverage!",
        "CollisionCoverage",
      ],
      abstract: false,
      coverageTerms: ["PALiabilityLimit?", "PAIncidentLimit"],
      data: {
        usage: {
          displayName: "Usage",
          type: "string?",
          maxLength: 20000,
          options: ["Personal", "Work", "Mixed"],
          scope: "Q,P",
        },
        model: {
          displayName: "Vehicle Model",
          type: "string",
          maxLength: 20000,
          scope: "QQ,P",
        },
        make: {
          displayName: "Vehicle Make",
          type: "string",
          minLength: 2,
          maxLength: 64,
          scope: "Q, QQ, P",
        },
        year: {
          displayName: "Vehicle Year",
          type: "int",
          min: "2000",
          max: "2025",
        },
        vin: {
          displayName: "VIN",
          type: "string",
          maxLength: 20000,
          regex: "[(A-H|J-N|P|R-Z|0-9)]{17}",
          scope: "QQ, Q, P",
        },
        vehicleType: {
          displayName: "Vehicle Type",
          type: "string",
          maxLength: 20000,
        },
        value: {
          displayName: "Value",
          type: "decimal",
          min: "1000",
          max: "2000000",
        },
        milesPerYear: {
          displayName: "Miles Per Year",
          type: "int",
          min: "1000",
          max: "100000",
          scope: "P",
        },
      },
      charges: ["Premium"],
    },
    Lighting: {
      abstract: false,
      data: {
        watts: {
          type: "string",
          maxLength: 20000,
        },
        voltage: {
          type: "string",
          maxLength: 20000,
        },
        cost: {
          type: "string",
          maxLength: 20000,
        },
      },
    },
    Location: {
      contents: ["Lighting"],
      abstract: false,
    },
  },
  exposureGroups: {
    EmployeeGroup: {
      contents: ["Employee*"],
      abstract: false,
    },
  },
  coverages: {
    ComprehensiveCoverage: {
      contents: ["FooCoverage!"],
      abstract: false,
    },
    FooCoverage: {
      abstract: false,
    },
    RoadsideAssistanceCoverage: {
      abstract: false,
      data: {
        serviceLevel: {
          displayName: "Service Level",
          type: "string",
          maxLength: 20000,
          options: ["Concierge", "Premium", "Standard"],
        },
      },
    },
    CollisionCoverage: {
      abstract: false,
    },
    LiabilityCoverage: {
      abstract: false,
    },
    RentalReimbursementCoverage: {
      displayName: "Car Rental Reimbursement",
      abstract: false,
    },
  },
  defaultTimeZone: "America/New_York",
  defaultCurrency: "GBP",
  defaultTermDuration: 12,
  defaultBillingTrigger: "issue",
  defaultInstallmentPlan: "Monthly10",
  defaultAutoRenewalPlan: "Standard",
  defaultBackdatedInstallmentsBilling: "immediate",
  defaultExcessCreditPlan: "Standard",
  defaultDurationBasis: "months",
  defaultDelinquencyPlan: "Standard",
  charges: {
    GST: {
      category: "tax",
    },
    VAT: {
      category: "tax",
    },
    Credit: {
      category: "credit",
    },
    Premium: {
      category: "premium",
    },
    Goodwill: {
      category: "credit",
    },
    Commission: {
      category: "fee",
    },
    ServiceFee: {
      category: "fee",
    },
    CededPremium: {
      category: "cededPremium",
    },
    InceptionFee: {
      category: "fee",
    },
    TechnicalPremium: {
      category: "nonFinancial",
    },
    GoodDriverDiscount: {
      category: "credit",
    },
    SecondaryCommission: {
      category: "fee",
    },
    GoodCustomerDiscount: {
      category: "credit",
    },
  },
  transactionTypes: {
    lapse: {
      category: "cancellation",
      costBearing: true,
    },
    policyChangeWithCBTrue: {
      category: "change",
      costBearing: true,
    },
    policyChangeWithCBFalse: {
      category: "change",
      costBearing: false,
    },
    policyRenewalWithCBTrue: {
      category: "renewal",
      costBearing: true,
    },
    policyRenewalWithCBFalse: {
      category: "renewal",
      costBearing: false,
    },
    policyCancellationWithCBTrue: {
      category: "cancellation",
      costBearing: true,
    },
    policyReinstatementWithCBTrue: {
      category: "reinstatement",
      costBearing: true,
    },
  },
  installmentPlans: {
    Standard: {
      displayName: "Standard Installment Plan",
      cadence: "fullPay",
      anchorMode: "termStartDay",
      generateLeadDays: 14,
      dueLeadDays: 0,
      maxInstallmentsPerTerm: 1000,
    },
    quarterly: {
      cadence: "quarterly",
    },
    weekly: {
      cadence: "weekly",
    },
    Monthly10: {
      displayName: "Monthly Ten Installments",
      cadence: "monthly",
      installmentWeights: [2],
      maxInstallmentsPerTerm: 10,
    },
  },
  payments: {
    StandardPayment: {
      displayName: "Standard",
      data: {
        note: {
          displayName: "Note",
          type: "string",
          maxLength: 20000,
        },
        payerFirstName: {
          displayName: "Payer First Name",
          type: "string",
          maxLength: 20000,
        },
        payerLastName: {
          displayName: "Payer Last Name",
          type: "string",
          minLength: 2,
          maxLength: 20000,
        },
      },
      abstract: false,
    },
    Stripe: {
      displayName: "Stripe",
      data: {
        cardInformation: {
          displayName: "Card Information",
          type: "CreditCard",
        },
        billingInformation: {
          displayName: "Billing Information",
          type: "BillingInfo",
        },
      },
      abstract: false,
    },
  },
  disbursements: {
    StandardDisbursement: {
      displayName: "Standard",
      data: {
        Note: {
          displayName: "Note",
          type: "string",
          maxLength: 20000,
        },
        PayeeFirstName: {
          displayName: "Payee First Name",
          type: "string",
          maxLength: 20000,
        },
        PayeeLastName: {
          displayName: "Payee Last Name",
          type: "string",
          minLength: 2,
          maxLength: 20000,
        },
      },
      abstract: false,
    },
    AutomatedDisbursement: {
      displayName: "Automated",
      abstract: false,
    },
    CustomDisbursement: {
      displayName: "Custom",
      data: {
        Details: {
          displayName: "Details",
          type: "string",
          maxLength: 20000,
        },
        PayeeFirstName: {
          displayName: "Payee First Name",
          type: "string",
          maxLength: 20000,
        },
        PayeeLastName: {
          displayName: "Payee Last Name",
          type: "string",
          minLength: 2,
          maxLength: 20000,
        },
      },
      abstract: false,
    },
  },
  tables: {
    VehicleBaseRate: {
      columns: {
        VehicleType: {
          dataType: "string",
          isKey: true,
        },
        Rate: {
          dataType: "decimal",
          isKey: false,
        },
      },
      selectionTimeBasis: "policyStartTime",
    },
    VehicleTypeFactor: {
      columns: {
        Make: {
          dataType: "string",
          isKey: true,
        },
        Model: {
          dataType: "string",
          isKey: true,
        },
        Rate: {
          dataType: "decimal",
          isKey: false,
        },
        Year: {
          dataType: "int",
          isKey: true,
        },
      },
      selectionTimeBasis: "termStartTime",
    },
    VehicleTypeFactor123: {
      columns: {
        Make: {
          dataType: "string",
          isKey: true,
        },
        Model: {
          dataType: "string",
          isKey: true,
        },
        Year: {
          dataType: "int",
          isKey: true,
        },
        Rate: {
          dataType: "decimal",
          isKey: false,
        },
      },
      selectionTimeBasis: "termStartTime",
    },
  },
  secrets: {
    secret2Config: {
      items: {
        date: {
          dataType: "datetime",
        },
        apiToken: {
          dataType: "decimal",
        },
        timeOutSeconds: {
          dataType: "int",
        },
        other: {
          dataType: "long",
        },
        other2: {
          dataType: "time",
        },
        other3: {
          dataType: "boolean",
        },
        string: {
          dataType: "string",
        },
      },
    },
    externalRaterConfig: {
      items: {
        url: {
          dataType: "string",
        },
        timeOutSeconds: {
          dataType: "int",
        },
        apiToken: {
          dataType: "string",
        },
      },
    },
  },
  documents: {
    Document123: {
      scope: "policy",
      rendering: "prerendered",
    },
    Template123: {
      scope: "policy",
      rendering: "dynamic",
    },
    ValidStaticName: {
      scope: "policy",
      rendering: "prerendered",
    },
    ValidTemplateStaticName: {
      scope: "policy",
      rendering: "dynamic",
    },
    biqruzezjsxksykylxmpuzahzzrtpuqonckjsjwbobpfeovkjtsvebgchqrxcsfavwhgdlvddpbgdjinlvizxnjrslhwihnzmiojogukhfihleixfuemqnmcndxewwuv:
      {
        scope: "policy",
        rendering: "dynamic",
      },
    wkiremtodlhxwlawmyugoeixabpqmesblbkeoyultxnegpfcqqaqyremwultwffpvbuwnnjyetupzpnoavkuaqtzvzybnwloxhzvlripgmwmogvalokcpfmhwohmlxhw:
      {
        scope: "policy",
        rendering: "prerendered",
      },
    invoicedDoc: {
      scope: "invoice",
      rendering: "dynamic",
    },
  },
  excessCreditPlans: {
    Standard: {
      disburseExcess: false,
    },
    plan1: {
      disburseExcess: true,
      disbursementType: "AutomatedDisbursement",
      excludeDebits: "none",
      disbursementThresholds: {
        GBP: 5,
      },
    },
    plan2: {
      disburseExcess: true,
      disbursementType: "AutomatedDisbursement",
      excludeDebits: "pastDueInvoices",
      disbursementThresholds: {
        GBP: 5,
        USD: 5,
      },
    },
    plan3: {
      disburseExcess: true,
      disbursementType: "AutomatedDisbursement",
      excludeDebits: "allInvoices",
      disbursementThresholds: {
        GBP: 1,
        USD: 1,
      },
    },
  },
  reversalTypes: {
    generic: {
      creditType: "any",
    },
    payment: {
      creditType: "payment",
    },
    distribution: {
      creditType: "creditDistribution",
    },
  },
  workManagement: {
    activities: {
      customerService: {
        customerInquiry: {
          blocksUnderwriting: false,
        },
      },
      underwriting: {
        inspectionReview: {
          defaultDeadlineDays: 2.25,
          blocksUnderwriting: true,
        },
      },
    },
  },
};
