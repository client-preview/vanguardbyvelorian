import { PolicyPage } from "../../components/policy-page";

export default function TermsPage() {
  return <PolicyPage title="Terms & Conditions" intro="These Terms & Conditions govern your use of the VANGUARD by VELORIAN — Business Ecosystem website and related product inquiries." sections={[
    { title: "Website Use", paragraphs: ["You may use this website for lawful personal and commercial inquiry purposes. You must not interfere with the website, misuse its content, or use it to submit false, harmful, or fraudulent requests."] },
    { title: "Product Information and Availability", paragraphs: ["We aim to present product names, descriptions, images, and prices accurately. Product availability, final pricing, and specifications remain subject to confirmation before an order is completed. We may correct errors or update product information without prior notice."] },
    { title: "Orders and Payment Arrangement", paragraphs: ["Adding products to the cart creates an inquiry summary only; it does not form a completed order or collect payment. Orders are confirmed directly through Messenger or email. Available payment arrangements, including Bank Transfer and E-wallet options, will be confirmed with the customer before completion."] },
    { title: "Delivery", paragraphs: ["Delivery arrangements and applicable shipping fees are confirmed directly with the customer before an order is completed. Please review our Shipping & Delivery Policy for more information."] },
    { title: "Returns and Replacements", paragraphs: ["Return and replacement requests are handled under our Return & Replacement Policy. Eligibility depends on the product condition, issue reported, and applicable consumer rights."] },
    { title: "Intellectual Property and Third-Party Links", paragraphs: ["Website content, branding, and design may not be copied or used without permission. Links to third-party websites, including Facebook, are provided for convenience; their content and practices are governed by their own terms."] },
    { title: "Limitation of Liability", paragraphs: ["To the extent allowed by law, VANGUARD is not liable for indirect or consequential loss arising from website use. Nothing in these Terms limits rights that cannot be excluded under applicable Philippine law."] },
    { title: "Changes, Governing Law, and Contact", paragraphs: ["We may update these Terms as the website or services evolve. These Terms are governed by the laws of the Republic of the Philippines. Questions may be sent to vanguardbusinessecosystem@gmail.com."] },
  ]} />;
}
