"use client";
import ComingSoon from "@/components/ComingSoon";

export default function TermsPage() {
  return (
    <ComingSoon
      pageTitle="Terms of Service"
      description="Our Terms of Service outline your rights and responsibilities when using ChartDB. Please review these terms to understand our service agreement."
      backToHome={true}
      footerLinks={true}
    />
  );
}