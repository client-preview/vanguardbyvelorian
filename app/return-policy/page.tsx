import { PolicyPage } from "../../components/policy-page";

export default function ReturnPolicyPage() {
  return <PolicyPage title="Return & Replacement Policy" intro="VANGUARD by VELORIAN — Business Ecosystem is committed to helping customers resolve eligible issues with products purchased through VANGUARD." sections={[
    { title: "Eligible Issues", paragraphs: ["Please contact us as soon as possible if an item arrives damaged, defective, incomplete, or materially different from the product you ordered. We will assess the concern and, where appropriate, arrange a replacement, refund resolution, or another remedy consistent with applicable Philippine consumer rights."] },
    { title: "Reporting an Issue", items: ["Contact us through Messenger or at vanguardbusinessecosystem@gmail.com.", "Provide your name, order or inquiry details, a clear description of the issue, and photos or videos when available.", "Keep the item, original packaging, and proof of purchase available while we assess the request."] },
    { title: "Replacement Eligibility", paragraphs: ["Eligibility depends on the nature of the concern, product condition, available evidence, and confirmation that the item was purchased through VANGUARD. We may request additional details to verify a claim before a replacement or refund resolution is approved."] },
    { title: "Hygiene and Change of Mind", paragraphs: ["For health, beauty, wellness, and personal-care products, opened, used, altered, or improperly stored items may not be eligible for return or replacement unless there is a verified defect, damage, or incorrect item. Change-of-mind requests are assessed case by case and do not override hygiene restrictions or applicable law."] },
    { title: "Customer Mishandling", paragraphs: ["Damage resulting from misuse, mishandling, improper storage, normal wear, or failure to follow product directions may not be eligible for replacement or refund resolution."] },
    { title: "Contact Information", paragraphs: ["For return or replacement concerns, contact VANGUARD by VELORIAN — Business Ecosystem at vanguardbusinessecosystem@gmail.com."] },
  ]} />;
}
