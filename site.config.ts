export const siteConfig = {
  name: "PropertyHub",
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
      label: "Need a tradie?",
      url: "https://tradihubai.com.au",
      cta: "Get Quotes Free",
    },
    network: ["tradihubai.com.au", "renohubai.com.au", "solarhubai.com.au"],
  },
  newsletter: { enabled: true },
  ads: { adsense: false, houseAds: true },
  socials: { facebook: "", instagram: "", tiktok: "" },
}

export type SiteConfig = typeof siteConfig
