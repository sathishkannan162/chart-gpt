"use client";
import ComingSoon from "@/components/ComingSoon";

export default function PricingPage() {
  return (
    <ComingSoon
      pageTitle="Pricing Plans"
      description="Discover our flexible pricing options designed for teams of all sizes. From startups to enterprises, find the perfect plan for your data visualization needs."
      backToHome={true}
      footerLinks={true}
    />
  );
}