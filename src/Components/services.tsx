import { Button } from "react-bootstrap";
import ImageCard from "./common/image-card";
import ExpertServices from "./expert-services";
import VideoCard from "./video-card";

const Services = () => {
  return (
    <>
      <div className="px-3 py-4 container py-md-5">
        <div className="row py-4 py-md-5 gx-4 gx-md-5">
          <div className="col-12 col-md-6">
            <div className="text-nowrap">
              <h1 className="fs-64">Become a member</h1>
              <h4 className="fs-40">Benefit from our expert Services</h4>
            </div>
          </div>
          <div className="col-12 col-md-6">
            <p className="fs-5 fs-md-4">
              Join SMBF today and unlock a wealth of business and professional
              support services. From expert mentorship to vital business
              connections, we provide the tools you need for growth and success.
            </p>
          </div>
        </div>
        <div>
          <ExpertServices />
        </div>
      </div>

      <div
        className="px-3 py-4 px-md-10 py-md-5"
        style={{
          backgroundColor: "#F2F7FF",
          clipPath: "ellipse(180% 75% at 50% 25%)",
        }}
      >
        <div className="d-flex justify-content-center flex-column align-items-center">
          <h1 className="fs-36 fs-md-64">Some of Our Members</h1>
          <div className="d-flex justify-content-center py-4 py-md-5 gap-3 flex-wrap">
            <ImageCard
              image="/image1.jpeg"
              title="Adama Kiyani"
              description="Fitness Industry & Investment CEO"
            />
            <ImageCard
              image="/image2.jpeg"
              title="Saj Hussain"
              description="Property Investor & Entrepreneur"
            />
            <ImageCard
              image="/image3.jpeg"
              title="Zhagum Arshad"
              description="Offshoring Innovator & Entrepreneurial Mentor"
            />
          </div>
        </div>
      </div>

      <div
        style={{
          marginTop: "-50px",
          clipPath: "ellipse(180% 75% at 50% 25%)",
        }}
        className="custom-gradient px-3 py-4 px-md-10 py-md-5"
      >
        <div className="d-flex justify-content-center flex-column align-items-center mt-4 mt-md-5">
          <h1 className="fs-24 fs-md-40 text-white">
            See How SMBF is Supporting Businesses & Professionals
          </h1>
          <div className="d-flex justify-content-center py-4 py-md-5 gap-3 w-100 flex-wrap">
            <VideoCard
              src="https://smbf.global/wp-content/uploads/2023/07/SaveTube.io-SMBF-Promotional-Video-480p.mp4"
              aspectRatio="16/9"
              backgroundImage="url('/video1.png')"
            />
            <VideoCard
              src="https://smbf.global/wp-content/uploads/2023/07/SaveTube.io-SMBF-Promotional-Video-480p.mp4"
              aspectRatio="16/9"
              backgroundImage="url('/video2.png')"
            />
            <VideoCard
              src="https://smbf.global/wp-content/uploads/2023/07/SaveTube.io-SMBF-Promotional-Video-480p.mp4"
              aspectRatio="16/9"
              backgroundImage="url('/video3.png')"
            />
          </div>
          <Button className="px-5">BECOME A MEMBER</Button>
        </div>
      </div>

      <div
        style={{
          clipPath: "ellipse(180% 75% at 50% 25%)",
        }}
        className="px-3 py-5 container py-md-8"
      >
        <div className="container-fluid">
          <div className="row rounded-4 overflow-hidden shadow">
            <div className="col-md-6 p-4 d-flex flex-column custom-gradient text-white">
              <h1 className="fw-bold mb-4 display-4 fs-28 fs-md-40">
                Now Is Your Chance To Be Supported By A Like Minded Community
              </h1>
              <h5 className="mb-4 fs-6 fs-md-5">
                Together, We'll Empower The Muslim Ummah.
              </h5>
              <div className="text-start">
                <Button className="px-4 py-2 fw-semibold">
                  BECOME A MEMBER
                </Button>
              </div>
            </div>

            <div className="col-md-6 p-0">
              <img
                height={"430px"}
                src="/image7.png"
                alt="Group"
                className="w-100 object-fit-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
