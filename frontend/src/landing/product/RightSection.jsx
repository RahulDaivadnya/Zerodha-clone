function RightSection({
  title,
  description,
  image,
  imageAlt,
  primaryLink,
  secondaryLink,
  badges = [],
}) {
  return (
    <div className="container py-5" style={{ width: "72%" }}>
      <div className="row align-items-center">
        <div className="col-4">
          <h2 className="mb-3" style={{ fontSize: "2rem" }}>
            {title}
          </h2>
          <p className="text-muted" style={{ lineHeight: "1.8" }}>
            {description}
          </p>

          <div className="d-flex gap-4 mt-4">
            {primaryLink ? (
              <a
                href={primaryLink.href}
                style={{ textDecoration: "none", fontWeight: "500" }}
                className="link"
              >
                {primaryLink.label}
              </a>
            ) : null}
            {secondaryLink ? (
              <a
                href={secondaryLink.href}
                style={{ textDecoration: "none", fontWeight: "500" }}
                className="link"
              >
                {secondaryLink.label}
              </a>
            ) : null}
          </div>

          {badges.length > 0 ? (
            <div className="d-flex gap-3 mt-4">
              {badges.map((badge) => (
                <a key={badge.href} href={badge.href}>
                  <img src={badge.src} alt={badge.alt} style={{ height: "40px" }} />
                </a>
              ))}
            </div>
          ) : null}
        </div>
        <div className="col-7 offset-1 text-center">
          <img src={image} alt={imageAlt} style={{ width: "92%" }} />
        </div>
      </div>
    </div>
  );
}

export default RightSection;
