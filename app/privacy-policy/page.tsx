import { PolicyPage } from "../../components/policy-page";

export default function PrivacyPolicyPage() {
  return <PolicyPage title="Privacy Policy" intro="This policy explains how VANGUARD by VELORIAN — Business Ecosystem handles information voluntarily provided through this website and during customer inquiries." sections={[
    { title: "Information We May Receive", paragraphs: ["We may receive your name, contact number, email address, delivery details, order or cart inquiry details, and other information you choose to send when contacting us through Messenger, email, or a website form."] },
    { title: "How Information Is Used", items: ["To respond to product, cart, order, delivery, and customer-support inquiries.", "To arrange and confirm orders, payment arrangements, and delivery details directly with you.", "To communicate about an inquiry or service request you have made."] },
    { title: "Website Storage", paragraphs: ["This website stores cart contents and product-management changes locally in your browser so the storefront can function during your visit. It does not provide customer accounts, process online card payments, or operate a payment gateway."] },
    { title: "Sharing and Protection", paragraphs: ["We do not sell personal information. Information may be shared only when reasonably necessary to respond to your order or inquiry, or when required by law. We take reasonable steps to protect information that we handle, but no online communication method can be guaranteed completely secure."] },
    { title: "Third-Party Services", paragraphs: ["When you choose to contact us through Facebook Messenger or email, those communications are also handled under the privacy practices of the service you choose. This website does not state that it uses analytics, advertising trackers, or a payment processor."] },
    { title: "Your Requests and Updates", paragraphs: ["You may request access to, correction of, or deletion of personal information you have provided to us, subject to any legal or operational requirement to retain it. We may update this policy as our services change."] },
    { title: "Contact Information", paragraphs: ["For privacy questions or requests, contact VANGUARD by VELORIAN — Business Ecosystem at vanguardbusinessecosystem@gmail.com."] },
  ]} />;
}
