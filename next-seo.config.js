/** @type {import('next-seo').DefaultSeoProps} */
const defaultSEOConfig = {
  title: "nextarter-base",
  titleTemplate: "%s | nextarter-base",
  defaultTitle: "nextarter-base",
  description: "Next.js + chakra-ui + TypeScript template",
  canonical: "https://nextarter-base.sznm.dev",
  openGraph: {
    url: "https://nextarter-base.sznm.dev",
    title: "nextarter-base",
    description: "Next.js + chakra-ui + TypeScript template",
    images: [
      {
        url: "https://og-image.sznm.dev/**nextarter-base**.sznm.dev.png?theme=dark&md=1&fontSize=125px&images=https%3A%2F%2Fsznm.dev%2Favataaars.svg&widths=250",
        alt: "nextarter-base.sznm.dev og-image",
      },
    ],
    site_name: "nextarter-base",
  },
  twitter: {
    handle: "@sozonome",
    cardType: "summary_large_image",
  },
};

export default defaultSEOConfig;
