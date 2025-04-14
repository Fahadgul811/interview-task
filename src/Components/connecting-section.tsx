import { Button } from "react-bootstrap";

const ConnectingSection = () => {
  return (
    <>
      <div
        className="px-4 py-5 d-flex align-items-center justify-content-center"
        style={{
          clipPath: "ellipse(180% 75% at 50% 25%)",
          backgroundColor: "#ffffff",
        }}
      >
        <div className="container row align-items-center justify-content-center gap-4 gap-md-0">
          <div className="col-12 col-md-7">
            <div className="d-flex flex-column gap-3">
              <h1 className="fs-1">
                Connecting Muslims. Supporting Businesses. Empowering the Ummah.
              </h1>
              <p className="fs-4">
                SMBF revives the sunnah of creating mutually beneficial
                relationships between Muslims, as the Messenger of Allah ﷺ did
                when he paired up the Muhajiruun with the Ansar, to establish
                the market of Medinah, which was the world’s first tax-free
                zone.
              </p>
              <Button className="px-5 me-auto">LEARN MORE</Button>
            </div>
          </div>
          <div className="col-12 col-md-5">
            <img
              src="/image5.png"
              alt="People"
              className="img-fluid h-100 w-100 rounded-4"
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>
      </div>
      <div
        className="px-4 py-5 d-flex align-items-center justify-content-center"
        style={{
          backgroundColor: "#F2F7FF",
          clipPath: "ellipse(180% 75% at 50% 25%)",
        }}
      >
        <div className="container row align-items-center justify-content-center">
          <div className="col-12 col-md-5">
            <img
              src="/image6.png"
              alt="People"
              className="img-fluid h-100 w-100 rounded-4"
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className="col-12 col-md-7">
            <div className="d-flex flex-column gap-3">
              <h1 className="fs-1">Join A Supportive Business Community</h1>
              <p className="fs-4">
                We help our members with a wide range of services designed to
                support their business journey. From securing Shariah-compliant
                investments to personalised mentorship for business growth and
                professional development. Connecting members with essential
                business and professional services. Career support or strategic
                advice for international expansion. We provide our members with
                invaluable support at every stage.
              </p>
              <Button className="px-5 me-auto">LEARN MORE</Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ConnectingSection;
