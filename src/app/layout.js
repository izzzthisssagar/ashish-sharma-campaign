import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";

export const metadata = {
  title: "Ashish Sharma | स्वतन्त्र उम्मेदवार | कपिलवस्तु-१",
  description: "Official website of Ashish Sharma, Independent Candidate for House of Representatives from Kapilvastu-1. आशीष शर्मा - कपिलवस्तु क्षेत्र नं. १ बाट स्वतन्त्र उम्मेदवार।",
  keywords: "Ashish Sharma, आशीष शर्मा, Kapilvastu, कपिलवस्तु, Independent Candidate, स्वतन्त्र उम्मेदवार, Election 2082, Nepal",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Mukta:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body>
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
