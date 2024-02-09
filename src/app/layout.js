import "./globals.css";
import localFont from "next/font/local";

export const metadata = {
  title: "Beacon - Setup Your Business in Saudi Arabia",
  description:
    "Beacon is your global business advisory partner who offers you a range of services that enable your business growth and ultimate business transformation. We provide a plethora of services like Business Incorporation, Digital Marketing, Technology, Finance and Accounting, Audit & Taxation and Business Consulting services.",
  openGraph: {
    title: "Beacon - Setup Your Business in Saudi Arabia",
    description:
      "Beacon is your global business advisory partner who offers you a range of services that enable your business growth and ultimate business transformation. We provide a plethora of services like Business Incorporation, Digital Marketing, Technology, Finance and Accounting, Audit & Taxation and Business Consulting services.",
    url: "https://ksa.bmcglobal.co",
    siteName: "Beacon",
    images: [
      {
        url: "https://ksa.bmcglobal.co/linkImageWhatsApp.png",
        width: 800,
        height: 600,
        alt: "My custom alt1",
      },
      {
        url: "https://ksa.bmcglobal.co/linkImageWhatsApp.png",
        width: 1800,
        height: 1600,
        alt: "My custom alt",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

const Gellix = localFont({
  src: [
    {
      path: "./fonts/Gellix-Regular.woff2",
      weight: "400",
      style: "normal",
      variable: "--font-Sora",
      display : "swap",
    },
    {
      path: "./fonts/Gellix-SemiBold.woff2",
      weight: "600",
      style: "normal",
      variable: "--font-Sora",
      display : "swap",
    },
  ],
});

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          href="/GREEN.svg"
          type="image/svg+xml"
          sizes="16x16 32x32 48x48"
        />

        <meta
          property="og:image"
          content="https://ksa.bmcglobal.co/linkImageWhatsApp.png"
        />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="1024" />
        <meta property="og:image:height" content="1024" />
      </head>
      <body className={Gellix.className}>{children}</body>
    </html>
  );
}
