import { Button } from "react-bootstrap";
import AutoCarousel from "./common/carousel";
import CommonAccordion, { AccordionItem } from "./common/common-accordian";

const leftAccordionItems: AccordionItem[] = [
  {
    title: "Muslim International Markets",
    content:
      "Access international markets with support for G2M strategies, business partnerships, and participation in international delegations. Executive members receive personalised advice and contracts for consultancy services as needed.",
  },
  {
    title: "Muslim Venture Builder",
    content:
      "Supporting startups and entrepreneurs through venture-building services.",
  },
];

const rightAccordionItems: AccordionItem[] = [
  {
    title: "Muslim Invest",
    content:
      "Investment services and funding support tailored for Muslim entrepreneurs.",
  },
  {
    title: "Muslim Mentor Academy",
    content:
      "Access to mentoring from successful Muslim professionals and leaders.",
  },
];

const carouselItems = [
  {
    imageUrl: "/MI.png",
    title: "Muslim Invest",
    description: "Your gateway to halal investing.",
  },
  {
    imageUrl: "/MMA.png",
    title: "Muslim Mentor Academy",
    description: "Learn from experienced Muslim professionals.",
  },
  {
    imageUrl: "/MIM.png",
    title: "Muslim Venture Builder",
    description: "Build and scale Islamic startups.",
  },
  {
    imageUrl: "/MVB.png",
    title: "Muslim Venture Builder",
    description: "Build and scale Islamic startups.",
  },
];

const ExpertServices = () => {
  return (
    <div
      style={{
        backgroundColor: "#F2F7FF",
        boxShadow:
          "0px 0px 22px 0px rgba(54.99999999999999, 129.0000000000001, 241.99999999999997, 0.23)",
      }}
      className="container border p-4 p-md-5 rounded-4"
    >
      <div className="d-flex flex-column flex-md-row gap-4">
        <div className="w-100">
          <CommonAccordion items={leftAccordionItems} />
        </div>
        <div className="w-100">
          <CommonAccordion items={rightAccordionItems} />
        </div>
      </div>
      <div className="py-4 py-md-5">
        <AutoCarousel items={carouselItems} />
      </div>
      <div className="d-flex justify-content-center py-3">
        <Button className="px-5">BECOME A MEMBER</Button>
      </div>
    </div>
  );
};

export default ExpertServices;
