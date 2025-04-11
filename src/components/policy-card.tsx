import { useState } from "react";
import { PolicyForm } from "@socotra/ec-react-components";
import {
  DataTypeConfigRecord,
  ProductConfigRecord,
} from "@socotra/ec-react-schemas";
import { JsonEditor } from "json-edit-react";

import { dataModel } from "@/config/data-model";
import { policy } from "@/config/policy";
import { segMentResponse } from "@/config/segment-response";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";

interface PolicyCardProps {
  title: string;
}

export const PolicyCard = (props: PolicyCardProps) => {
  const [dataTypes, setDataTypes] = useState<DataTypeConfigRecord | undefined>(
    dataModel.dataTypes,
  );
  const [productsModel, setProductsModel] = useState<ProductConfigRecord>(
    dataModel.products,
  );

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
              <div className="flex flex-col gap-2 py-2">
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
                <span className="text-md font-bold">Policy Form</span>
                <PolicyForm
                  dataModel={dataModel}
                  policy={policy}
                  segment={segMentResponse}
                />
              </div>
            </div>
          </ResizablePanel>
        </ResizablePanelGroup>
      </CardContent>
    </Card>
  );
};
