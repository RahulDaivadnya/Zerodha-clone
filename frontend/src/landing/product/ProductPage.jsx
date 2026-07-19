import Hero from "./Hero";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
import Universe from "./Universe";

const products = [
  {
    title: "Kite",
    description:
      "Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices.",
    image: "media/images/kite.png",
    imageAlt: "Kite",
    primaryLink: { label: "Try demo", href: "https://kite-demo.zerodha.com" },
    secondaryLink: {
      label: "Learn more",
      href: "https://zerodha.com/products/kite",
    },
    badges: [
      {
        src: "media/images/googlePlayBadge.svg",
        href: "https://play.google.com/store/apps/details?id=com.zerodha.kite3",
        alt: "Google Play",
      },
      {
        src: "media/images/appstoreBadge.svg",
        href: "https://apps.apple.com/in/app/kite-zerodha/id1449453802",
        alt: "App Store",
      },
    ],
  },
  {
    title: "Console",
    description:
      "The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations.",
    image: "media/images/console.png",
    imageAlt: "Console",
    primaryLink: {
      label: "Learn more",
      href: "https://zerodha.com/products/console",
    },
  },
  {
    title: "Coin",
    description:
      "Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices.",
    image: "media/images/coin.png",
    imageAlt: "Coin",
    primaryLink: { label: "Coin", href: "https://coin.zerodha.com" },
    badges: [
      {
        src: "media/images/googlePlayBadge.svg",
        href: "https://play.google.com/store/apps/details?id=com.zerodha.coin",
        alt: "Google Play",
      },
      {
        src: "media/images/appstoreBadge.svg",
        href: "https://apps.apple.com/in/app/coin-by-zerodha/id1392892554",
        alt: "App Store",
      },
    ],
  },
  {
    title: "Kite Connect API",
    description:
      "Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase.",
    image: "media/images/kiteconnect.png",
    imageAlt: "Kite Connect",
    primaryLink: {
      label: "Kite Connect",
      href: "https://zerodha.com/products/api/",
    },
  },
  {
    title: "Varsity mobile",
    description:
      "An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go.",
    image: "media/images/varsity.png",
    imageAlt: "Varsity",
    primaryLink: {
      label: "Learn more",
      href: "https://zerodha.com/varsity/",
    },
    badges: [
      {
        src: "media/images/googlePlayBadge.svg",
        href: "https://play.google.com/store/apps/details?id=com.zerodha.varsity",
        alt: "Google Play",
      },
      {
        src: "media/images/appstoreBadge.svg",
        href: "https://apps.apple.com/in/app/varsity-by-zerodha/id1474610753",
        alt: "App Store",
      },
    ],
  },
];

function ProductPage() {
  return (
    <>
      <Hero />

      {products.map((product, index) =>
        index % 2 === 0 ? (
          <LeftSection key={product.title} {...product} />
        ) : (
          <RightSection key={product.title} {...product} />
        )
      )}

      <div className="container text-center py-3" style={{ width: "70%" }}>
        <p className="mb-0 text-muted">
          Want to know more about our technology stack? Check out the{" "}
          <a
            href="https://zerodha.tech/"
            style={{ textDecoration: "none", fontWeight: "500" }}
            className="link"
          >
            Zerodha.tech
          </a>{" "}
          blog.
        </p>
      </div>

      <Universe />

      <div className="container text-center py-5">
        <a
          href="https://zerodha.com/open-account/"
          className="btn btn-primary fs-5 px-4"
          style={{ width: "18%" }}
        >
          Sign up for free
        </a>
      </div>
    </>
  );
}

export default ProductPage;
