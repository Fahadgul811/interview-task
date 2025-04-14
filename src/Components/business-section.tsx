import CommonVideoPlayer from "./common/common-video-player";

const BusinessSection = () => {
  return (
    <div
      style={{
        clipPath: "ellipse(180% 75% at 50% 25%)",
      }}
      className="custom-gradient px-3 px-sm-10 rounded-bottom-3"
    >
      <div className="container py-4">
        <div className="row align-items-center">
          <div className="col-12 col-md-7">
            <h1 className="fs-90 text-white">
              Your Global Muslim Business Network
            </h1>
          </div>

          <div className="col-12 col-md-5 mt-4 mt-md-0">
            <div className="d-flex bg-light rounded-4 p-3 px-4 align-items-center gap-4 gap-md-5">
              <div className="d-flex gap-3 gap-md-2">
                <img
                  height="50"
                  className="rounded-circle bg-light border-1 border-primary"
                  src="/image1.jpeg"
                  alt=""
                />
                <img
                  height="50"
                  className="rounded-circle"
                  src="/image2.jpeg"
                  alt=""
                />
                <img
                  height="50"
                  className="rounded-circle"
                  src="/image3.jpeg"
                  alt=""
                />
              </div>
              <div>
                <h3 className="mb-0">30,000+</h3>
                <h4 className="mb-0">Network</h4>
              </div>
            </div>

            <p className="fs-5 mt-3 fw-bold text-white">
              SMBF is a global network of high-value Muslim businesses and
              professionals. We offer unparalleled opportunities, support, and
              connections to economically empower the Muslim Ummah globally.
            </p>
          </div>
        </div>
      </div>
      <div className="container py-5">
        <div className="row gx-4 gy-4">
          <div className="col-12 col-md-8 d-flex flex-column gap-4">
            <CommonVideoPlayer
              src="https://smbf.global/wp-content/uploads/2023/07/SaveTube.io-SMBF-Promotional-Video-480p.mp4"
              aspectRatio="16/9"
              backgroundImage="url('/image4.png')"
            />
            <div className="row g-4">
              <div className="col-12 col-sm-6">
                <div className="bg-white p-4 rounded-4 shadow-sm h-100">
                  <h4 className="text-primary mb-1">£10M+</h4>
                  <h6 className="text-muted mb-2">Facilitated Trade</h6>
                  <p className="text-secondary mb-0">
                    Over 8 figures facilitated in international trade, boosting
                    the Muslim economy.
                  </p>
                </div>
              </div>
              <div className="col-12 col-sm-6">
                <div className="bg-white p-4 rounded-4 shadow-sm h-100">
                  <h4 className="text-primary mb-1">12+</h4>
                  <h6 className="text-muted mb-2">Countries</h6>
                  <p className="text-secondary mb-0">
                    A thriving network of Muslim businesses and professionals
                    across 12 countries.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-4">
            <div className="h-100 rounded-4 overflow-hidden position-relative">
              <img
                src="/image4.png"
                alt="People"
                className="img-fluid h-100 w-100"
                style={{ objectFit: "cover" }}
              />

              <div className="position-absolute pb-4 bottom-0 w-75 end-0 pe-2">
                <button className="btn w-100 p-2 rounded-pill bg-white fs-6 fw-semibold shadow">
                  View Member Benefits →
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessSection;
