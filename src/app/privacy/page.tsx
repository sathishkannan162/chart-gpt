"use client";
import ComingSoon from "@/components/ComingSoon";

export default function PrivacyPage() {
  return (
    <ComingSoon
      pageTitle="Privacy Policy"
      description="Learn how ChartDB protects your data and respects your privacy. Our commitment to security and transparency ensures your information stays safe."
      backToHome={true}
      footerLinks={true}
    />
  );
}