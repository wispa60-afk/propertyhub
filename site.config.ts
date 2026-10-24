export const siteConfig = {
  name: "PropertyHub",
  description: "Property guides for Australian homeowners, buyers, sellers and renters: prep, maintenance and renovation tips, plus free quotes from local tradies.",
  tagline: "Australia's Property & Real Estate Guide",
  domain: "propertyhubai.com.au",
  port: 3203,
  accent: { primary: "#10b981", hover: "#059669" },
  categories: [
    "Buying",
    "Selling",
    "Investing",
    "Renting",
    "Home Loans",
    "Market Trends",
    "First Home Buyers",
    "Renovating",
  ],
  crossPromo: {
    primary: {
      label: "Get Free Quotes",
      url: "https://tradihubai.com.au/jobs/new?trade=renovations&ref=propertyhub",
      cta: "Get Quotes Now",
    },
    network: ["tradihubai.com.au", "renohubai.com.au", "solarhubai.com.au"],
  },
  newsletter: { enabled: true },
  ads: { adsense: false, houseAds: true },
  socials: { facebook: "", instagram: "", tiktok: "" },
}

export type SiteConfig = typeof siteConfig
