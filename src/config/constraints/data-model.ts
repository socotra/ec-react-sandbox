import { DataModel } from "@socotra/ec-react-schemas";

export const dataModel: DataModel = {
  defaultTimeZone: "America/New_York",
  defaultCurrency: "USD",
  defaultTermDuration: 12,
  defaultInstallmentPlan: "StandardInstallmentPlan",
  defaultDurationBasis: "months",
  defaultBillingTrigger: "issue",
  defaultBackdatedInstallmentsBilling: "immediate",
  defaultDelinquencyPlan: "Standard",
  defaultAutoRenewalPlan: "Standard",
  defaultExcessCreditPlan: "Standard",
  defaultAuxDataSettings: "DefaultAuxDataSetting",
  dataTypes: {
    Address: {
      data: {
        addressNumber: {
          displayName: "Address Number",
          type: "string?",
          maxLength: 20000,
        },
        streetName: {
          displayName: "Street Name",
          type: "string?",
          maxLength: 20000,
        },
        unit: {
          displayName: "Unit/Apt",
          type: "string?",
          maxLength: 20000,
        },
        city: {
          displayName: "City",
          type: "string?",
          maxLength: 20000,
        },
        state: {
          displayName: "State",
          type: "string?",
          maxLength: 20000,
        },
        zip: {
          displayName: "Zip",
          type: "string?",
          maxLength: 20000,
        },
      },
      abstract: false,
    },
    Loss: {
      data: {
        causeOfLoss: {
          displayName: "Cause of loss",
          type: "string",
          maxLength: 20000,
          options: [
            "Animal Liability",
            "Collapse",
            "Earthquake",
            "Falling Objects",
            "Fire / Smoke",
            "Flood",
            "Food Spoilage",
            "Hurricane",
            "Ice / Snow",
            "Liability",
            "Lightning",
            "Mold",
            "Other",
            "Sewer Backup",
            "Sinkhole / Subsidence",
            "Theft / Burglary / Vandalism / Malicious Mischief",
            "Tropical Storm",
            "Volcano",
            "Water",
            "Wind / Hail",
          ],
        },
        dateOfLoss: {
          displayName: "Date of loss",
          type: "date",
        },
        descriptionOfLoss: {
          displayName: "Description of loss",
          type: "string?",
          maxLength: 20000,
        },
        applicantAttribution: {
          displayName: "Applicant Attribution",
          type: "string",
          maxLength: 20000,
          options: ["Primary Applicant", "Co-Applicant"],
        },
        amountOfLoss: {
          displayName: "Amount of loss",
          type: "int?",
        },
      },
      abstract: false,
    },
    Driver: {
      displayName: "Driver",
      data: {
        first_name: {
          displayName: "first_name",
          type: "string",
          maxLength: 20000,
        },
        last_name: {
          displayName: "last_name",
          type: "string",
          maxLength: 20000,
        },
        dob: {
          displayName: "dob",
          type: "date",
        },
        gender: {
          displayName: "gender",
          type: "string",
          maxLength: 20000,
          options: ["Male", "Female", "Non-binary"],
        },
        driver_id: {
          displayName: "driver_id",
          type: "string?",
          maxLength: 20000,
        },
        claims: {
          displayName: "claims",
          type: "string?",
          maxLength: 20000,
          options: ["0", "1", "2", "3", "4", "5+"],
        },
        claims_excess_paid: {
          displayName: "claims_excess_paid",
          type: "string?",
          maxLength: 20000,
          options: ["0", "1", "2", "3", "4", "5+"],
        },
        driver_license_type: {
          displayName: "driver_license_type",
          type: "string?",
          maxLength: 20000,
          options: [
            "Learner Permit or Licence",
            "Provisional/Probationary/Restricted licence",
            "Full/Open licence",
            "International licence",
          ],
        },
        driver_license_age: {
          displayName: "driver_license_age",
          type: "int?",
        },
        driver_mobile: {
          displayName: "driver_mobile",
          type: "string?",
          maxLength: 20000,
        },
        telematics_driver_id: {
          displayName: "telematics_driver_id",
          type: "string?",
          maxLength: 20000,
        },
      },
      abstract: false,
    },
    Policyholder: {
      displayName: "Policy Holder",
      data: {
        full_name: {
          displayName: "Full Name",
          type: "string",
          maxLength: 20000,
        },
        postal_address: {
          displayName: "Postal Address",
          type: "string",
          maxLength: 20000,
        },
      },
      abstract: false,
    },
    Person: {
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
        age: {
          type: "decimal",
        },
      },
      abstract: false,
    },
  },
  accounts: {
    CommercialAccount: {
      displayName: "Commercial Account",
      data: {
        companyName: {
          displayName: "Company Name",
          type: "string",
          maxLength: 20000,
        },
        fein: {
          displayName: "FEIN",
          type: "string?",
          maxLength: 20000,
        },
      },
      abstract: false,
    },
    ConsumerAccount: {
      displayName: "Consumer Account",
      data: {
        firstName: {
          displayName: "First Name",
          type: "string",
          maxLength: 20000,
        },
        lastName: {
          displayName: "Last Name",
          type: "string",
          minLength: 2,
          maxLength: 20000,
        },
        crmKey: {
          displayName: "CRM Key",
          type: "string?",
          maxLength: 20000,
        },
        addressNumber: {
          displayName: "Address Number",
          type: "string?",
          maxLength: 20000,
        },
        streetName: {
          displayName: "Street Name",
          type: "string?",
          maxLength: 20000,
        },
        unit: {
          displayName: "Unit/Apt",
          type: "string?",
          maxLength: 20000,
        },
        city: {
          displayName: "City",
          type: "string?",
          maxLength: 20000,
        },
        state: {
          displayName: "State",
          type: "string?",
          maxLength: 20000,
        },
        zip: {
          displayName: "Zip",
          type: "string?",
          maxLength: 20000,
        },
      },
      abstract: false,
    },
  },
  policyLines: {
    Liability: {
      displayName: "Liability",
      contents: ["Directors_officers", "Epl"],
      abstract: false,
    },
    Property: {
      displayName: "Property",
      contents: ["Campus?"],
      abstract: false,
    },
  },
  exposureGroups: {
    Campus: {
      displayName: "Campus",
      abstract: false,
    },
  },
  exposures: {
    Vehicle: {
      displayName: "Vehicle",
      contents: [
        "OwnDamage?",
        "Fire?",
        "Windscreen?",
        "Transport?",
        "ThirdParty?",
        "Theft?",
        "BabySeat?",
      ],
      data: {
        vehicle_use: {
          displayName: "vehicle_use",
          type: "string?",
          maxLength: 20000,
          options: [
            "Personal use only",
            "Business use only",
            "Personal and business use",
          ],
        },
        telematics_opt_in: {
          displayName: "telematics_opt_in",
          type: "string?",
          maxLength: 20000,
          options: ["Yes", "No"],
        },
        total_sum_insured: {
          displayName: "total_sum_insured",
          type: "string?",
          maxLength: 20000,
        },
        value_boost_percentage: {
          displayName: "value_boost_percentage",
          type: "string?",
          maxLength: 20000,
        },
        vehicle_license_plate: {
          displayName: "vehicle_license_plate",
          type: "string",
          maxLength: 20000,
        },
        vehicle_engine_type: {
          displayName: "vehicle_engine_type",
          type: "string?",
          maxLength: 20000,
        },
        vehicle_alt_engine_torque: {
          displayName: "vehicle_alt_engine_torque",
          type: "string?",
          maxLength: 20000,
        },
        vehicle_alt_engine_power: {
          displayName: "vehicle_alt_engine_power",
          type: "string?",
          maxLength: 20000,
        },
        vehicle_year: {
          displayName: "vehicle_year",
          type: "string",
          maxLength: 20000,
        },
        vehicle_make: {
          displayName: "vehicle_make",
          type: "string",
          maxLength: 20000,
        },
        vehicle_make_label: {
          displayName: "vehicle_make_label",
          type: "string?",
          maxLength: 20000,
        },
        v_facts_segment: {
          displayName: "v_facts_segment",
          type: "string?",
          maxLength: 20000,
        },
        v_facts_class: {
          displayName: "v_facts_class",
          type: "string?",
          maxLength: 20000,
        },
        badge_secondary_description: {
          displayName: "badge_secondary_description",
          type: "string?",
          maxLength: 20000,
        },
        vehicle_model: {
          displayName: "vehicle_model",
          type: "string?",
          maxLength: 20000,
        },
        vehicle_family: {
          displayName: "vehicle_family",
          type: "string?",
          maxLength: 20000,
        },
        vehicle_family_code: {
          displayName: "vehicle_family_code",
          type: "string?",
          maxLength: 20000,
        },
        vehicle_style: {
          displayName: "vehicle_style",
          type: "string?",
          maxLength: 20000,
        },
        vehicle_variant: {
          displayName: "vehicle_variant",
          type: "string?",
          maxLength: 20000,
        },
        vehicle_cylinders: {
          displayName: "vehicle_cylinders",
          type: "string?",
          maxLength: 20000,
        },
        vehicle_cc: {
          displayName: "vehicle_cc",
          type: "int?",
        },
        vehicle_segment: {
          displayName: "vehicle_segment",
          type: "string?",
          maxLength: 20000,
        },
        vehicle_transmission: {
          displayName: "vehicle_transmission",
          type: "string?",
          maxLength: 20000,
        },
        vehicle_damage: {
          displayName: "vehicle_damage",
          type: "string?",
          maxLength: 20000,
          options: ["No Damage", "Hail Damage", "Accident Damage"],
        },
        vehicle_modifications: {
          displayName: "vehicle_modifications",
          type: "string?",
          maxLength: 20000,
          options: ["Yes", "No"],
        },
        vehicle_description: {
          displayName: "vehicle_description",
          type: "string?",
          maxLength: 20000,
        },
        business_registered_for_gst: {
          displayName: "business_registered_for_gst",
          type: "string?",
          maxLength: 20000,
          options: ["Yes", "No"],
        },
        business_use_reason: {
          displayName: "business_use_reason",
          type: "string?",
          maxLength: 20000,
        },
        business_use_reason_other: {
          displayName: "business_use_reason_other",
          type: "string?",
          maxLength: 20000,
        },
        business_itc_percentage: {
          displayName: "business_itc_percentage",
          type: "string?",
          maxLength: 20000,
        },
        business_stamp_duty_exemption: {
          displayName: "business_stamp_duty_exemption",
          type: "string?",
          maxLength: 20000,
          options: ["Yes", "No"],
        },
        telematics_aggregate_driver_score: {
          displayName: "telematics_aggregate_driver_score",
          type: "string?",
          maxLength: 20000,
        },
        telematics_discount_percentage: {
          displayName: "telematics_discount_percentage",
          type: "string?",
          maxLength: 20000,
        },
        telematics_score_timestamp: {
          displayName: "telematics_score_timestamp",
          type: "string?",
          maxLength: 20000,
        },
        telematics_aggregate_score_overwrite: {
          displayName: "telematics_aggregate_score_overwrite",
          type: "string?",
          maxLength: 20000,
        },
        vehicle_business_size: {
          displayName: "vehicle_business_size",
          type: "string?",
          maxLength: 20000,
          options: ["Yes", "No"],
        },
        vehicle_loan_type: {
          displayName: "vehicle_loan_type",
          type: "string?",
          maxLength: 20000,
          options: [
            "No finance",
            "Secured Loan",
            "Unsecured Loan",
            "Lease",
            "Hire purchase arrangement",
          ],
        },
        vehicle_usage_per_week: {
          displayName: "vehicle_usage_per_week",
          type: "string?",
          maxLength: 20000,
          options: ["1-2", "3-4", "5+"],
        },
        vehicle_distance: {
          displayName: "vehicle_distance",
          type: "int?",
        },
        vehicle_driven: {
          displayName: "vehicle_driven",
          type: "int?",
        },
        vehicle_value: {
          displayName: "vehicle_value",
          type: "int?",
        },
        vehicle_length: {
          displayName: "vehicle_length",
          type: "int?",
        },
        vehicle_power: {
          displayName: "vehicle_power",
          type: "int?",
        },
        vehicle_kerbwt: {
          displayName: "vehicle_kerbwt",
          type: "int?",
        },
        vehicle_payload: {
          displayName: "vehicle_payload",
          type: "int?",
        },
        vehicle_torque: {
          displayName: "vehicle_torque",
          type: "int?",
        },
        vehicle_fronttyresize: {
          displayName: "vehicle_fronttyresize",
          type: "string?",
          maxLength: 20000,
        },
        vehicle_gearnum: {
          displayName: "vehicle_gearnum",
          type: "int?",
        },
        vehicle_doornum: {
          displayName: "vehicle_doornum",
          type: "int?",
        },
        vehicle_newprice: {
          displayName: "vehicle_newprice",
          type: "int?",
        },
        vehicle_accessoriesvalue: {
          displayName: "vehicle_accessoriesvalue",
          type: "int?",
        },
        vehicle_accessories: {
          displayName: "vehicle_accessories",
          type: "string?",
          maxLength: 20000,
        },
        vehicle_equipment: {
          displayName: "vehicle_equipment",
          type: "string?",
          maxLength: 20000,
        },
        vehicle_kms_per_year: {
          displayName: "vehicle_kms_per_year",
          type: "int?",
        },
        vehicle_address: {
          displayName: "vehicle_address",
          type: "string?",
          maxLength: 20000,
        },
        full_address: {
          displayName: "full_address",
          type: "string?",
          maxLength: 20000,
        },
        gnaf_PID: {
          displayName: "gnaf_PID",
          type: "string?",
          maxLength: 20000,
        },
        latitude: {
          displayName: "latitude",
          type: "string?",
          maxLength: 20000,
        },
        longitude: {
          displayName: "longitude",
          type: "string?",
          maxLength: 20000,
        },
        flat_unit_number: {
          displayName: "flat_unit_number",
          type: "string?",
          maxLength: 20000,
        },
        unit_type_and_number: {
          displayName: "unit_type_and_number",
          type: "string?",
          maxLength: 20000,
        },
        street_number: {
          displayName: "street_number",
          type: "string?",
          maxLength: 20000,
        },
        street_name_and_type: {
          displayName: "street_name_and_type",
          type: "string?",
          maxLength: 20000,
        },
        suburb: {
          displayName: "suburb",
          type: "string?",
          maxLength: 20000,
        },
        postcode: {
          displayName: "postcode",
          type: "string?",
          maxLength: 20000,
        },
        vehicle_has_equipment: {
          displayName: "vehicle_has_equipment",
          type: "string",
          maxLength: 20000,
          options: ["Yes", "No"],
        },
        vehicle_has_accessories: {
          displayName: "vehicle_has_accessories",
          type: "string?",
          maxLength: 20000,
          options: ["Yes", "No"],
        },
        vehicle_redbook_id: {
          displayName: "vehicle_redbook_id",
          type: "string?",
          maxLength: 20000,
        },
        vehicle_induction_description: {
          displayName: "vehicle_induction_description",
          type: "string?",
          maxLength: 20000,
        },
        vehicle_badge_description: {
          displayName: "vehicle_badge_description",
          type: "string?",
          maxLength: 20000,
        },
        new_vehicle_replacement: {
          displayName: "new_vehicle_replacement",
          type: "string?",
          maxLength: 20000,
          options: ["Yes", "No"],
        },
        import_flag: {
          displayName: "import_flag",
          type: "string?",
          maxLength: 20000,
        },
        previous_quarter_odometer: {
          displayName: "previous_quarter_odometer",
          type: "string?",
          maxLength: 20000,
        },
        expected_quarter_odometer: {
          displayName: "expected_quarter_odometer",
          type: "string?",
          maxLength: 20000,
        },
        vehicle_loan_financial_institution: {
          displayName: "vehicle_loan_financial_institution",
          type: "string?",
          maxLength: 20000,
          options: [
            "AMP Bank Limited",
            "Commonwealth Bank of Australia",
            "HSBC Bank Australia Limited",
            "ING Bank (Australia) Limited",
            "Macquarie Bank Limited",
            "Members Equity Bank Pty Limited (MEBank)",
            "National Australia Bank Limited",
            "Rams Home Loans",
            "St. George Bank Limited",
            "Suncorp-Metway Limited",
            "Westpac Banking Corporation",
            "Arab Bank Australia Limited",
            "Nissan Finance",
            "Esanda Finance",
            "BMW Finance",
            "Macquarie Leasing",
            "Capital Finance",
            "Bank of Melbourne",
            "Toyota Finance",
            "Volkswagen Finance",
            "Nissan Financial Services",
            "Alphera Financial Services",
            "Aussie Home Loans",
            "Audi Finance",
            "RACV Finance",
            "Pepper Asset Finance",
            "People's Choice Credit Union",
            "Other",
            "Australia and New Zealand Banking Group Limited (ANZ)",
            "Bank of Queensland Limited",
            "Bank of Western Australia (BankWest)",
            "Bank SA",
            "Bendigo Bank",
            "Citigroup Pty Limited",
          ],
        },
        vehicle_loan_financial_institution_custom: {
          displayName: "vehicle_loan_financial_institution_custom",
          type: "string?",
          maxLength: 20000,
        },
        excess: {
          displayName: "excess",
          type: "int?",
        },
        premium_payable_overwrite: {
          displayName: "premium_payable_overwrite",
          type: "int?",
        },
        drivers: {
          displayName: "Driver",
          type: "Driver+",
        },
        vehicle_registration_state: {
          displayName: "vehicle_registration_state",
          type: "string",
          maxLength: 20000,
          options: ["NSW", "QLD", "VIC", "SA", "WA", "TAS", "ACT", "NT"],
        },
      },
      abstract: false,
    },
    Building: {
      displayName: "Building",
      contents: [
        "Physical_structure",
        "Biz_personal_property",
        "Business_income",
      ],
      abstract: false,
    },
    AutoGeneratingVehicle: {
      displayName: "Auto Generating Vehicle",
      data: {
        make: {
          displayName: "Make",
          type: "string",
          defaultValue: "Mazda",
          maxLength: 20000,
        },
        model: {
          type: "string",
          defaultValue: "Miata",
          maxLength: 20000,
        },
      },
      abstract: false,
    },
    Dwelling: {
      displayName: "Dwelling",
      contents: [
        "Coverage_a?",
        "Coverage_b?",
        "Water_backup?",
        "Personal_property?",
      ],
      data: {
        dwellingAddress: {
          displayName: "Address",
          type: "Address",
        },
        distanceToCoast: {
          type: "int?",
          min: "0",
          max: "3000",
        },
        occupancy: {
          type: "string",
          maxLength: 20000,
          options: ["Primary", "Seasonal", "Secondary"],
        },
        windHailExclusion: {
          type: "string",
          maxLength: 20000,
          options: ["No", "Yes"],
        },
        yearBuilt: {
          type: "int",
        },
      },
      abstract: false,
    },
    ConstraintVehicle: {
      displayName: "Constraint Vehicle",
      contents: [
        "OwnDamage?",
        "Fire?",
        "Windscreen?",
        "Transport?",
        "ThirdParty?",
        "Theft?",
        "BabySeat?",
      ],
      data: {
        vehicleMake: {
          type: "string",
          maxLength: 20000,
          constraint: {
            table: "VehicleData",
            column: "make_name",
          },
        },
        vehicleModel: {
          type: "string",
          maxLength: 20000,
          constraint: {
            table: "VehicleData",
            column: "model_name",
            where: {
              make_name: {
                key: "vehicleMake",
              },
            },
          },
        },
        vehicleYear: {
          type: "string",
          maxLength: 20000,
          constraint: {
            table: "VehicleData",
            column: "year",
            where: {
              make_name: {
                key: "vehicleMake",
              },
              model_name: {
                key: "vehicleModel",
              },
            },
          },
        },
      },
      abstract: false,
    },
  },
  coverages: {
    Epl: {
      displayName: "Employers Liability",
      abstract: false,
    },
    Personal_property: {
      displayName: "Personal Property",
      data: {
        moneyLimit: {
          displayName: "Money",
          type: "int?",
          min: "200",
        },
        securitiesLimit: {
          displayName: "Securities",
          type: "int?",
          min: "1500",
        },
        jewelryLimit: {
          displayName: "Jewelry, Watches and Furs",
          type: "int?",
          min: "1500",
        },
        firearmsLimit: {
          displayName: "Firearms",
          type: "int?",
          min: "2500",
        },
        silverwareLimit: {
          displayName: "Silverware, Goldware and Pewterware",
          type: "int?",
          min: "2500",
        },
        electronicsLimit: {
          displayName: "Electronic Apparatus",
          type: "int?",
          min: "1500",
        },
      },
      abstract: false,
    },
    Collision: {
      displayName: "Collision",
      abstract: false,
    },
    Windscreen: {
      displayName: "Windscreen",
      charges: ["GST", "Premium"],
      abstract: false,
    },
    Business_income: {
      displayName: "Business Income",
      abstract: false,
    },
    Directors_officers: {
      displayName: "Director & Officers",
      abstract: false,
    },
    Physical_structure: {
      displayName: "Building Physical Structure",
      abstract: false,
    },
    BabySeat: {
      displayName: "Baby Seat",
      charges: ["GST", "Premium"],
      abstract: false,
    },
    Water_backup: {
      displayName: "Water Backup",
      coverageTerms: ["Water_backup_limit?"],
      abstract: false,
    },
    Theft: {
      displayName: "Theft",
      charges: ["GST", "Premium"],
      abstract: false,
    },
    Excess_coverage: {
      displayName: "Excess",
      abstract: false,
    },
    Fire: {
      displayName: "Fire",
      charges: ["GST", "Premium"],
      abstract: false,
    },
    Transport: {
      displayName: "Transport",
      charges: ["GST", "Premium"],
      abstract: false,
    },
    Biz_personal_property: {
      displayName: "Building Personal Property",
      abstract: false,
    },
    OwnDamage: {
      displayName: "Own Damage",
      charges: ["GST", "Premium"],
      abstract: false,
    },
    Coverage_a: {
      displayName: "Coverage A",
      coverageTerms: ["Coverage_a_limit?"],
      charges: ["coverage_a_premium"],
      abstract: false,
    },
    ThirdParty: {
      displayName: "Third Party",
      charges: ["GST", "Premium"],
      abstract: false,
    },
    Coverage_b: {
      displayName: "Coverage B",
      coverageTerms: ["Coverage_b_limit?"],
      charges: ["coverage_b_premium"],
      abstract: false,
    },
  },
  products: {
    Personal_auto: {
      defaultTermDuration: 0,
      displayName: "Motor Product",
      eligibleAccountTypes: ["ConsumerAccount"],
      contents: ["Vehicle"],
      documents: ["Declarations", "DmvReport"],
      charges: ["GST", "Premium"],
      data: {
        policy_canceled: {
          displayName: "policy_canceled",
          type: "string?",
          maxLength: 20000,
          options: ["Yes", "No"],
        },
        claim_denied: {
          displayName: "claim_denied",
          type: "string",
          maxLength: 20000,
          options: ["Yes", "No"],
        },
        conviction: {
          displayName: "conviction",
          type: "string",
          maxLength: 20000,
          options: ["Yes", "No"],
        },
        license_canceled: {
          displayName: "license_canceled",
          type: "string",
          maxLength: 20000,
          options: ["Yes", "No"],
        },
        insurance_denied: {
          displayName: "insurance_denied",
          type: "string",
          maxLength: 20000,
          options: ["Yes", "No"],
        },
        accept_privacy: {
          displayName: "accept_privacy",
          type: "string",
          maxLength: 20000,
          options: ["Yes", "No"],
        },
        vehicle_rule_id: {
          displayName: "vehicle_rule_id",
          type: "int?",
        },
        payment_frequency: {
          displayName: "payment_frequency",
          type: "string?",
          maxLength: 20000,
          options: ["Monthly"],
        },
        previous_discount_percentage: {
          displayName: "previous_discount_percentage",
          type: "string?",
          maxLength: 20000,
        },
        current_discount_percentage: {
          displayName: "current_discount_percentage",
          type: "string?",
          maxLength: 20000,
        },
        promotion_code: {
          displayName: "promotion_code",
          type: "string?",
          maxLength: 20000,
        },
        pds_filename: {
          displayName: "pds_filename",
          type: "string?",
          maxLength: 20000,
        },
        quote_expiry_timestamp: {
          displayName: "quote_expiry_timestamp",
          type: "string?",
          maxLength: 20000,
        },
        discount_expires_at_tenure: {
          displayName: "discount_expires_at_tenure",
          type: "string?",
          maxLength: 20000,
        },
        policy_channel: {
          displayName: "policy_channel",
          type: "string?",
          maxLength: 20000,
          options: ["CC"],
        },
        endorsement_date: {
          displayName: "endorsement_date",
          type: "string?",
          maxLength: 20000,
        },
        reinstate_renewal: {
          displayName: "reinstate_renewal",
          type: "string?",
          maxLength: 20000,
          options: ["Yes"],
        },
        total_premium: {
          displayName: "total_premium",
          type: "string?",
          maxLength: 20000,
        },
        policy_priced_timestamp: {
          displayName: "policy_priced_timestamp",
          type: "string?",
          maxLength: 20000,
        },
        fraud_engine_transaction_id: {
          displayName: "fraud_engine_transaction_id",
          type: "string?",
          maxLength: 20000,
        },
        rdm_data_version: {
          displayName: "rdm_data_version",
          type: "string?",
          maxLength: 20000,
        },
        fraud_engine_result: {
          displayName: "fraud_engine_result",
          type: "string?",
          maxLength: 20000,
          options: ["Accepted", "Decline"],
        },
        fraud_engine_message: {
          displayName: "fraud_engine_message",
          type: "string?",
          maxLength: 20000,
        },
        renewal_fraud_engine_transaction_id: {
          displayName: "renewal_fraud_engine_transaction_id",
          type: "string?",
          maxLength: 20000,
        },
        renewal_fraud_engine_result: {
          displayName: "renewal_fraud_engine_result",
          type: "string?",
          maxLength: 20000,
          options: ["Accepted", "Decline"],
        },
        renewal_fraud_engine_message: {
          displayName: "renewal_fraud_engine_message",
          type: "string?",
          maxLength: 20000,
        },
        telematics_group_id: {
          displayName: "telematics_group_id",
          type: "string?",
          maxLength: 20000,
        },
        policyholder: {
          displayName: "policyholder",
          type: "Policyholder*",
        },
      },
      abstract: false,
    },
    Quantifier_Product: {
      defaultTermDuration: 1,
      displayName: "Quantifier Tester",
      defaultDurationBasis: "years",
      contents: [
        "ConstraintVehicle",
        "Building",
        "Dwelling?",
        "Vehicle+",
        "Campus*",
        "AutoGeneratingVehicle!",
      ],
      abstract: false,
    },
    Ho3: {
      defaultTermDuration: 0,
      eligibleAccountTypes: ["ConsumerAccount"],
      contents: ["Dwelling"],
      data: {
        applicantFirstName: {
          displayName: "First Name",
          type: "string",
          maxLength: 20000,
        },
        applicantLastName: {
          displayName: "Last Name",
          type: "string",
          maxLength: 20000,
        },
        applicantDob: {
          displayName: "Date Of Birth",
          type: "date",
        },
        applicantInsuranceScore: {
          displayName: "Applicant Insurance Score",
          type: "string",
          maxLength: 20000,
        },
        noPriorInsurance: {
          displayName: "No Prior Insurance",
          type: "string",
          maxLength: 20000,
          options: ["Yes", "No"],
        },
      },
      staticData: {
        quoteNumber: {
          displayName: "Quote Number",
          type: "string?",
          scope: "Q",
          maxLength: 20000,
        },
        policyNumber: {
          displayName: "Policy Number",
          type: "string?",
          scope: "P",
          maxLength: 20000,
        },
      },
      abstract: false,
    },
    Commercial_package: {
      defaultTermDuration: 12,
      displayName: "Commercial Package",
      defaultDurationBasis: "months",
      contents: ["Property", "Excess_coverage?", "Liability?"],
      abstract: false,
    },
  },
  coverageTerms: {
    Coverage_a_limit: {
      type: "limit",
      displayName: "test",
      options: {
        ca450000: {
          displayName: "test",
          value: 450000,
          tag: "$450,000",
        },
        ca500000: {
          displayName: "test",
          value: 500000,
          tag: "$500,000",
        },
        ca300000: {
          displayName: "test",
          value: 300000,
          tag: "$300,000",
        },
        ca350000: {
          displayName: "test",
          value: 350000,
          tag: "$350,000",
        },
        ca600000: {
          displayName: "test",
          value: 600000,
          tag: "$600,000",
        },
        ca400000: {
          displayName: "test",
          value: 400000,
          tag: "$400,000",
        },
        ca550000: {
          displayName: "test",
          value: 5500000,
          tag: "$550,000",
        },
      },
    },
    Coverage_b_limit: {
      type: "limit",
      displayName: "test",
      options: {
        cb0: {
          displayName: "test",
          value: 0,
          tag: "0%",
        },
        cb10: {
          displayName: "test",
          value: 10,
          tag: "10%",
        },
        cb2: {
          displayName: "test",
          value: 2,
          tag: "2%",
        },
        cb1: {
          displayName: "test",
          value: 1,
          tag: "1%",
        },
        cb20: {
          displayName: "test",
          value: 20,
          tag: "20%",
        },
        cb5: {
          displayName: "test",
          value: 5,
          tag: "5%",
        },
        cb15: {
          displayName: "test",
          value: 15,
          tag: "15%",
        },
      },
    },
    Water_backup_limit: {
      type: "limit",
      displayName: "test",
      options: {
        wb5000: {
          displayName: "test",
          value: 5000,
          tag: "$5000",
        },
        wb25000: {
          displayName: "test",
          value: 25000,
          tag: "$25,000",
        },
        wb10000: {
          displayName: "test",
          value: 10000,
          tag: "$10,000",
        },
      },
    },
  },
  charges: {
    SD: {
      category: "tax",
    },
    FSL: {
      category: "tax",
    },
    GST: {
      category: "tax",
    },
    VAT: {
      category: "tax",
    },
    Premium: {
      category: "premium",
    },
    ServiceFee: {
      category: "fee",
    },
    coverage_a_premium: {
      category: "premium",
    },
    coverage_b_premium: {
      category: "premium",
    },
    coverage_c_premium: {
      category: "premium",
    },
    coverage_d_premium: {
      category: "premium",
    },
    coverage_a_commission: {
      category: "nonFinancial",
    },
  },
  transactionTypes: {
    addressChange: {
      category: "change",
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
    StandardInstallmentPlan: {
      displayName: "Standard Installment Plan",
      cadence: "fullPay",
      anchorMode: "termStartDay",
      generateLeadDays: 14,
      dueLeadDays: 0,
    },
    monthly10: {
      displayName: "Monthly Ten Installments",
      cadence: "monthly",
      installmentWeights: [2],
      maxInstallmentsPerTerm: 10,
    },
    FullPay: {
      displayName: "Annually",
      cadence: "annually",
      maxInstallmentsPerTerm: 1,
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
  },
  tables: {
    Claims: {
      columns: {
        claims: {
          dataType: "string",
          isKey: true,
        },
        fireCoverage: {
          dataType: "decimal",
          isKey: false,
        },
        theftCoverage: {
          dataType: "decimal",
          isKey: false,
        },
        ownDamageCoverage: {
          dataType: "decimal",
          isKey: false,
        },
        thirdPartyCoverage: {
          dataType: "decimal",
          isKey: false,
        },
      },
      selectionTimeBasis: "termStartTime",
    },
    Excess: {
      columns: {
        excess: {
          dataType: "string",
          isKey: true,
        },
        fireCoverage: {
          dataType: "decimal",
          isKey: false,
        },
        theftCoverage: {
          dataType: "decimal",
          isKey: false,
        },
        ownDamageCoverage: {
          dataType: "decimal",
          isKey: false,
        },
        thirdPartyCoverage: {
          dataType: "decimal",
          isKey: false,
        },
      },
      selectionTimeBasis: "termStartTime",
    },
    BaseRate: {
      columns: {
        coverages: {
          dataType: "string",
          isKey: true,
        },
        baseRate: {
          dataType: "decimal",
          isKey: false,
        },
      },
      selectionTimeBasis: "termStartTime",
    },
    SampleTable: {
      columns: {
        sampleColumn1: {
          dataType: "string",
          isKey: true,
        },
        sampleColumn2: {
          dataType: "decimal",
          isKey: false,
        },
      },
      selectionTimeBasis: "policyStartTime",
    },
    VehicleYear: {
      columns: {
        vehicle_year: {
          dataType: "string",
          isKey: true,
        },
        fireCoverage: {
          dataType: "decimal",
          isKey: false,
        },
        theftCoverage: {
          dataType: "decimal",
          isKey: false,
        },
        ownDamageCoverage: {
          dataType: "decimal",
          isKey: false,
        },
        thirdPartyCoverage: {
          dataType: "decimal",
          isKey: false,
        },
      },
      selectionTimeBasis: "termStartTime",
    },
    VehicleDamage: {
      columns: {
        vehicle_damage: {
          dataType: "string",
          isKey: true,
        },
        fireCoverage: {
          dataType: "decimal",
          isKey: false,
        },
        theftCoverage: {
          dataType: "decimal",
          isKey: false,
        },
        ownDamageCoverage: {
          dataType: "decimal",
          isKey: false,
        },
        thirdPartyCoverage: {
          dataType: "decimal",
          isKey: false,
        },
      },
      selectionTimeBasis: "termStartTime",
    },
    DriverLicenseAge: {
      columns: {
        driver_license_age: {
          dataType: "string",
          isKey: true,
        },
        fireCoverage: {
          dataType: "decimal",
          isKey: false,
        },
        theftCoverage: {
          dataType: "decimal",
          isKey: false,
        },
        ownDamageCoverage: {
          dataType: "decimal",
          isKey: false,
        },
        thirdPartyCoverage: {
          dataType: "decimal",
          isKey: false,
        },
      },
      selectionTimeBasis: "termStartTime",
    },
    DriverLicenseType: {
      columns: {
        driver_license_type: {
          dataType: "string",
          isKey: true,
        },
        fireCoverage: {
          dataType: "decimal",
          isKey: false,
        },
        theftCoverage: {
          dataType: "decimal",
          isKey: false,
        },
        ownDamageCoverage: {
          dataType: "decimal",
          isKey: false,
        },
        thirdPartyCoverage: {
          dataType: "decimal",
          isKey: false,
        },
      },
      selectionTimeBasis: "termStartTime",
    },
    VehicleUsagePerWeek: {
      columns: {
        vehicle_usage_per_week: {
          dataType: "string",
          isKey: true,
        },
        fireCoverage: {
          dataType: "decimal",
          isKey: false,
        },
        theftCoverage: {
          dataType: "decimal",
          isKey: false,
        },
        ownDamageCoverage: {
          dataType: "decimal",
          isKey: false,
        },
        thirdPartyCoverage: {
          dataType: "decimal",
          isKey: false,
        },
      },
      selectionTimeBasis: "termStartTime",
    },
    VehicleRegistrationState: {
      columns: {
        vehicle_registration_state: {
          dataType: "string",
          isKey: true,
        },
        fireCoverage: {
          dataType: "decimal",
          isKey: false,
        },
        theftCoverage: {
          dataType: "decimal",
          isKey: false,
        },
        ownDamageCoverage: {
          dataType: "decimal",
          isKey: false,
        },
        thirdPartyCoverage: {
          dataType: "decimal",
          isKey: false,
        },
      },
      selectionTimeBasis: "termStartTime",
    },
  },
  constraintTables: {
    VehicleData: {
      columns: {
        make_name: {
          dataType: "string",
        },
        model_name: {
          dataType: "string",
        },
        year: {
          dataType: "string",
        },
      },
      selectionTimeBasis: "termStartTime",
    },
  },
  documents: {
    DmvReport: {
      scope: "term",
      format: "pdf",
      rendering: "dynamic",
      selectionTimeBasis: "termStartTime",
      trigger: "issued",
      portrait: true,
      pageSize: "letter",
    },
    Declarations: {
      scope: "policy",
      format: "html",
      rendering: "prerendered",
      trigger: "priced",
    },
  },
  auxDataSettings: {
    noExpire: {
      expirationPeriod: 0,
    },
    shortExpire: {
      expirationPeriod: 7,
    },
    DefaultAuxDataSetting: {
      expirationPeriod: 30,
    },
  },
  customEvents: {
    EventA: {
      type: "custom.event.type.a",
    },
    EventB: {
      type: "custom.event.type.b",
    },
  },
  delinquencyPlans: {
    Plan2: {
      gracePeriodDays: 5,
      delinquencyLevel: "policy",
      advanceLapseTo: "issued",
    },
    Standard: {
      displayName: "Standard Delinquency Plan",
      gracePeriodDays: 7,
      delinquencyLevel: "policy",
      lapseTransactionType: "cancellation",
      advanceLapseTo: "issued",
    },
    defaultDelinquencyPlan: {
      gracePeriodDays: 5,
      delinquencyLevel: "policy",
      advanceLapseTo: "issued",
    },
  },
  shortfallTolerancePlans: {
    BasicShortfallPlan: {
      currencyTolerances: {
        USD: 0.5,
      },
    },
  },
  autoRenewalPlans: {
    Standard: {
      generateAutoRenewals: true,
    },
  },
  excessCreditPlans: {
    Standard: {
      disburseExcess: false,
    },
  },
};
