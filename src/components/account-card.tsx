import { useMemo, useState } from "react";
import { AccountForm } from "@socotra/ec-react-components";
import {
  AccountConfigRecord,
  DataTypeConfigRecord,
} from "@socotra/ec-react-schemas";
import { JsonEditor } from "json-edit-react";

import {
  accountWithNestedData,
  commercialAccount,
  consumerAccount,
} from "@/config/accounts";
import { dataModel } from "@/config/data-model";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

import { Label } from "./ui/label";
import { Switch } from "./ui/switch";

interface AccountCardProps {
  title: string;
  useExistingAccount?: boolean;
}

export const AccountCard = (props: AccountCardProps) => {
  const accounts = useMemo(
    () => ({
      consumerAccount,
      commercialAccount,
      accountWithNestedData,
    }),
    []
  );
  const [accountType, setAccountType] = useState<keyof typeof accounts>(
    "accountWithNestedData"
  );
  const [dataTypes, setDataTypes] = useState<DataTypeConfigRecord | undefined>(
    dataModel.dataTypes
  );
  const [accountsModel, setAccountsModel] = useState<AccountConfigRecord>(
    dataModel.accounts
  );
  const [validateInLine, setValidateInLine] = useState(false);
  const [submittedData, setSubmittedData] = useState({});

  const documents = dataModel.documents ?? {};
  const invoiceScopedDocuments: string[] = [];
  Object.keys(documents).forEach((key) => {
    const document = documents[key];
    if (document.scope === "invoice") {
      invoiceScopedDocuments.push(key);
    }
  });

  return (
    <Card>
      <CardHeader className="mb-10 border-b">
        <div className="flex flex-row items-start justify-between">
          <span className="text-xl font-bold">{props.title}</span>
          <fieldset className="flex flex-row items-center gap-2">
            <label className="text-xs font-bold" htmlFor="accountType">
              Account Type
            </label>
            <Select
              onValueChange={(e: any) => setAccountType(e)}
              defaultValue={accountType}
              name="accountType"
            >
              <SelectTrigger className="w-48">
                <SelectValue />
              </SelectTrigger>

              <SelectContent>
                {Object.keys(dataModel.accounts).map((key) => (
                  <SelectItem key={key} value={key}>
                    {key}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </fieldset>
        </div>
      </CardHeader>
      <CardContent>
        <ResizablePanelGroup direction="horizontal">
          <ResizablePanel defaultSize={45}>
            <div className="grid-col-span-1 grid h-[32rem] grid-rows-2 gap-4 px-8">
              <div className="row-span-1 h-full py-2">
                <span className="text-md font-bold">Account Model</span>
                <JsonEditor
                  className="h-full w-full overflow-y-auto"
                  data={accountsModel}
                  onUpdate={({ newData }) => {
                    setAccountsModel(newData as AccountConfigRecord);
                  }}
                />
              </div>
              {dataTypes && (
                <div className="row-span-1 h-full py-2">
                  <span className="text-md font-bold">Data Types</span>
                  <JsonEditor
                    className="h-full w-full overflow-y-auto"
                    data={dataTypes}
                    onUpdate={({ newData }) => {
                      setDataTypes(newData as DataTypeConfigRecord);
                    }}
                  />
                </div>
              )}
            </div>
          </ResizablePanel>
          <ResizableHandle withHandle />
          <ResizablePanel>
            <div className="flex h-[64rem] flex-col gap-4 overflow-y-auto px-8">
              <div className="flex flex-col gap-2 py-2">
                {props.useExistingAccount ? (
                  <AccountForm
                    key={`existing-account-form-${accountType}`}
                    handleSubmit={(data) => {
                      setSubmittedData(data);
                    }}
                    account={accounts[accountType]}
                    accountType={accountType}
                    validateOnSubmit={validateInLine}
                    dataModel={dataModel}
                  />
                ) : (
                  <AccountForm
                    account={accounts[accountType]}
                    accountType={accountType}
                    handleSubmit={(data) => {
                      setSubmittedData(data);
                    }}
                    validateOnSubmit={validateInLine}
                    dataModel={dataModel}
                  />
                )}
                <div className="flex items-center space-x-2">
                  <Switch
                    id="enable-validation"
                    checked={validateInLine}
                    onCheckedChange={(checked) => setValidateInLine(checked)}
                  />
                  <Label
                    htmlFor="enable-validation"
                    defaultChecked={validateInLine}
                  >
                    Enable Validation
                  </Label>
                </div>
              </div>
              <div>
                <span className="text-md font-bold">Submitted Data</span>
                <Textarea
                  className="h-full w-full overflow-y-auto rounded border"
                  value={JSON.stringify(submittedData, null, 2)}
                  onChange={(e) => setSubmittedData(JSON.parse(e.target.value))}
                  readOnly
                />
              </div>
            </div>
          </ResizablePanel>
        </ResizablePanelGroup>
      </CardContent>
    </Card>
  );
};
