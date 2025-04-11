import { useState } from "react";
import { NewDisbursementForm } from "@socotra/ec-react-components";
import {
  DataTypeConfigRecord,
  DisbursementRefRecord,
} from "@socotra/ec-react-schemas";
import { JsonEditor } from "json-edit-react";

import { consumerAccount } from "@/config/accounts";
import { dataModel } from "@/config/data-model";
import { invoice } from "@/config/invoice";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import { Textarea } from "@/components/ui/textarea";

interface DisbursementCardProps {
  title: string;
}

export const DisbursementCard = ({ title }: DisbursementCardProps) => {
  const [dataTypes, setDataTypes] = useState<DataTypeConfigRecord | undefined>(
    dataModel.dataTypes,
  );
  const [disbursementsModel, setDisbursementsModel] =
    useState<DisbursementRefRecord>(dataModel?.disbursements ?? {});
  const [submittedData, setSubmittedData] = useState({});

  return (
    <Card>
      <CardHeader className="mb-10 border-b">
        <div className="flex flex-row items-start justify-between">
          <span className="text-xl font-bold">{title}</span>
        </div>
      </CardHeader>
      <CardContent>
        <ResizablePanelGroup direction="horizontal">
          <ResizablePanel defaultSize={45}>
            <div className="grid-col-span-1 grid h-[32rem] grid-rows-2 gap-4 px-8">
              <div className="flex flex-col gap-2 py-2">
                <span className="text-md font-bold">Products Model</span>
                <JsonEditor
                  className="h-full w-full overflow-y-auto"
                  data={disbursementsModel}
                  onUpdate={({ newData }) => {
                    setDisbursementsModel(newData as DisbursementRefRecord);
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
          <ResizablePanel className="px-2">
            <div className="flex flex-col gap-4 px-8">
              <div className="flex flex-col gap-2 py-2">
                <span className="text-md font-bold">New Disbursement Form</span>
                <NewDisbursementForm
                  dataModel={dataModel}
                  accountLocator={consumerAccount.locator}
                  accountBalance={500}
                  currency={invoice.currency}
                  validateOnSubmit={true}
                  handleSubmit={(data) => {
                    setSubmittedData(data);
                  }}
                />
              </div>
              <div className="py-2">
                <span className="text-md font-bold">Submitted Data</span>
                <Textarea
                  className="h-1/3 overflow-y-auto rounded border p-4"
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
