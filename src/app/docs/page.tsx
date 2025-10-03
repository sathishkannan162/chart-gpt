"use client";
import ComingSoon from "@/components/ComingSoon";

export default function DocsPage() {
  return (
    <ComingSoon
      pageTitle="Documentation"
      description="Comprehensive guides, API references, and best practices to help you get the most out of ChartDB. From setup to advanced features, everything you need to succeed."
      backToHome={true}
      footerLinks={true}
    />
  );
}