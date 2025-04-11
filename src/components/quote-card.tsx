import { useState } from "react";
import { QuoteForm } from "@socotra/ec-react-components";
import {
  DataTypeConfigRecord,
  ProductConfigRecord,
} from "@socotra/ec-react-schemas";
import { JsonEditor } from "json-edit-react";

import { dataModel } from "@/config/data-model";
import { quote } from "@/config/existing-quote";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import { Textarea } from "@/components/ui/textarea";

import { Label } from "./ui/label";
import { Switch } from "./ui/switch";

interface QuoteCardProps {
  title: string;
}

export const QuoteCard = (props: QuoteCardProps) => {
  const [dataTypes, setDataTypes] = useState<DataTypeConfigRecord | undefined>(
    dataModel.dataTypes,
  );
  const [productsModel, setProductsModel] = useState<ProductConfigRecord>(
    dataModel.products,
  );
  const [validateInLine, setValidateInLine] = useState(false);
  const [submittedData, setSubmittedData] = useState({});

  return (
    <Card>
      <CardHeader className="mb-10 border-b">
        <div className="flex flex-row items-start justify-between">
          <span className="text-xl font-bold">{props.title}</span>
        </div>
      </CardHeader>
      <CardContent>
        <ResizablePanelGroup direction="horizontal">
          <ResizablePanel defaultSize={45}>
            <div className="grid-col-span-1 grid h-[32rem] grid-rows-2 gap-4 px-8">
              <div className="row-span-1 h-full py-2">
                <span className="text-md font-bold">Products Model</span>
                <JsonEditor
                  className="h-full w-full overflow-y-auto"
                  data={productsModel}
                  onUpdate={({ newData }) => {
                    setProductsModel(newData as ProductConfigRecord);
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
                <span className="text-md font-bold">Quote Form</span>

                <QuoteForm
                  handleSubmit={(data) => {
                    setSubmittedData(data);
                  }}
                  quote={quote}
                  dataModel={dataModel}
                  dataTypes={dataTypes}
                  validateOnSubmit={validateInLine}
                />
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
              <div className="py-2">
                <span className="text-md font-bold">Submitted Data</span>
                <Textarea
                  className="h-96 overflow-y-auto rounded border p-4"
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
