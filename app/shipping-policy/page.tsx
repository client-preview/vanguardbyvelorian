import { PolicyPage } from "../../components/policy-page";

export default function ShippingPolicyPage() {
  return <PolicyPage title="Shipping & Delivery Policy" intro="This policy explains how shipping and delivery are arranged for products purchased through VANGUARD by VELORIAN — Business Ecosystem." sections={[
    { title: "Order Processing", paragraphs: ["Orders are finalized only after details are confirmed directly with the customer through Messenger or email. We may need to confirm product availability, payment arrangement, delivery address, and contact details before processing can begin."] },
    { title: "Shipping and Delivery", paragraphs: ["Delivery arrangements are confirmed with the customer before order completion. Applicable shipping fees and delivery arrangements will be communicated or confirmed with the customer before order completion."] },
    { title: "Delivery Information", paragraphs: ["Customers are responsible for providing complete and accurate recipient, address, and contact information. Please review these details carefully before confirming an order."] },
    { title: "Delays and Incorrect Information", paragraphs: ["Delivery timing may be affected by product availability, location, weather, courier operations, or other circumstances outside our reasonable control. Delays or additional costs resulting from incorrect or incomplete delivery information may require further coordination with the customer."] },
    { title: "Damaged or Incorrect Orders", paragraphs: ["If an order arrives damaged or incorrect, please contact us promptly with your order details and supporting photos or videos when available. Eligible concerns are handled under our Return & Replacement Policy."] },
    { title: "Contact Us", paragraphs: ["For delivery questions, contact VANGUARD by VELORIAN — Business Ecosystem at vanguardbusinessecosystem@gmail.com."] },
  ]} />;
}
