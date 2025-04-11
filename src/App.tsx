import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { AccountCard } from "@/components/account-card";
import { DisbursementCard } from "@/components/disbursement-card";
import { ElementCard } from "@/components/element-card";
import { Layout } from "@/components/layout";
import { PaymentCard } from "@/components/payment-card";
import { PolicyCard } from "@/components/policy-card";
import { QuoteCard } from "@/components/quote-card";
import { TransactionCard } from "@/components/transaction-card";

function App() {
  return (
    <Layout>
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="element">
          <AccordionTrigger>Element </AccordionTrigger>
          <AccordionContent>
            <ElementCard title="Element" />
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="new-account">
          <AccordionTrigger>New Account</AccordionTrigger>
          <AccordionContent>
            <AccountCard useExistingAccount={false} title="Account" />
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="existing-account">
          <AccordionTrigger>Existing Account</AccordionTrigger>
          <AccordionContent>
            <AccountCard useExistingAccount={true} title="Account" />
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="quote">
          <AccordionTrigger>Quote</AccordionTrigger>
          <AccordionContent>
            <QuoteCard title="Quote" />
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="policy">
          <AccordionTrigger>Policy</AccordionTrigger>
          <AccordionContent>
            <PolicyCard title="Policy" />
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="transaction">
          <AccordionTrigger>Transaction</AccordionTrigger>
          <AccordionContent>
            <TransactionCard title="Transaction" />
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="newPayment">
          <AccordionTrigger>New Payment</AccordionTrigger>
          <AccordionContent>
            <PaymentCard title="New Payment" />
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="existingPayment">
          <AccordionTrigger>Apply Existing Payment</AccordionTrigger>
          <AccordionContent>
            <PaymentCard
              formType={"existingPayment"}
              title="Existing Payment"
            />
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="reversePayment">
          <AccordionTrigger>Reverse Payment</AccordionTrigger>
          <AccordionContent>
            <PaymentCard formType="reversePayment" title="Reverse Payment" />
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="disbursement">
          <AccordionTrigger>New Disbursement</AccordionTrigger>
          <AccordionContent>
            <DisbursementCard title="New Disbursement" />
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </Layout>
  );
}

export default App;
