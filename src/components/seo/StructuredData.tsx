import Script from "next/script";

const StructuredData = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Event",
    name: "AWS Student Community Mega Manila 2025",
    description:
      "AWS Cloud Clubs Philippines is excited to host the first AWS Student Community Mega Manila this August 2025. Join us to learn from the story and advocacy of the community, industry, and academe experts.",
    startDate: "2025-08-01",
    endDate: "2025-10-31",
    eventStatus: "https://schema.org/EventScheduled",
    eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
    location: {
      "@type": "Place",
      name: "Manila, Philippines",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Manila",
        addressCountry: "Philippines",
      },
    },
    organizer: {
      "@type": "Organization",
      name: "AWS Cloud Clubs Philippines",
      url: "https://scdmm.awscloudclubs.ph",
    },
    offers: {
      "@type": "Offer",
      url: "https://tinyurl.com/AWSSCD-RegistrationForm",
      price: "150",
      priceCurrency: "PHP",
      availability: "https://schema.org/InStock",
      category: "primary",
    },
    image: ["https://scdmm.awscloudclubs.ph/og-image.png"],
    performer: {
      "@type": "Organization",
      name: "AWS Cloud Clubs Philippines",
    },
  };

  return (
    <Script
      id="structured-data"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData),
      }}
    />
  );
};

export default StructuredData;
