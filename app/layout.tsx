import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.euromodelhub.ai"),
  title: {
    default: "EuroModel Hub — Deploy AI models in the EU. Trust AI. Together.",
    template: "%s · EuroModel Hub",
  },
  description:
    "EuroModel Hub is the EU-hosted platform to deploy, serve, manage, and scale AI models with GDPR-compliant data residency. Deploy in minutes, pay per use, keep your data in Europe.",
  keywords: [
    "AI model deployment",
    "EU AI hosting",
    "GDPR compliant AI",
    "model serving",
    "PyTorch",
    "TensorFlow",
    "ONNX",
    "European AI platform",
  ],
  openGraph: {
    title: "EuroModel Hub — Trust AI. Together.",
    description:
      "Deploy, serve, and scale AI models on EU-hosted, GDPR-compliant infrastructure. Framework-agnostic. Pay per use. Data stays in Europe.",
    url: "https://www.euromodelhub.ai",
    siteName: "EuroModel Hub",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "EuroModel Hub — Trust AI. Together.",
    description:
      "EU-hosted AI model deployment platform. GDPR-compliant. Framework-agnostic. Pay per use.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
