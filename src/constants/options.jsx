import { FaHeart, FaHome } from "react-icons/fa";
import { MdAttachMoney, MdMoneyOff, MdDiamond,MdOutlineTravelExplore } from "react-icons/md";
import { GiPartyPopper } from "react-icons/gi";

export const SelectTravelesList = [
  {
    id: 1,
    title: "Solo Explorer",
    desc: "Venture into new destinations with complete freedom.",
    icon: <MdOutlineTravelExplore className="text-blue-500 text-5xl" />,
    people: "1 Person",
  },
  {
    id: 2,
    title: "Romantic Escape",
    desc: "Enjoy an unforgettable journey with your special someone.",
    icon: <FaHeart className="text-pink-500 text-5xl" />,
    people: "2 People",
  },
  {
    id: 3,
    title: "Family Adventure",
    desc: "Create lasting memories with your loved ones.",
    icon: <FaHome className="text-yellow-500 text-5xl" />,
    people: "3 to 5 People",
  },
  {
    id: 4,
    title: "Group Fun",
    desc: "Laugh, explore, and enjoy with your best friends.",
    icon: <GiPartyPopper className="text-purple-500 text-5xl" />,
    people: "5 to 10 People",
  },
];

export const SelectBudgetOptions = [
  {
    id: 1,
    title: 'Budget-Friendly',
    desc: 'Travel smart and maximize experiences while keeping costs low.',
    icon: <MdMoneyOff className="text-green-500 text-5xl" />,
  },
  {
    id: 2,
    title: 'Moderate',
    desc: 'Enjoy a balanced trip with reasonable spending and comfort.',
    icon: <MdAttachMoney className="text-blue-500 text-5xl" />,
  },
  {
    id: 3,
    title: "Luxury",
    desc: "Experience the finest accommodations and premium services.",
    icon: <MdDiamond className="text-red-500 text-5xl" />,
  },
];

export const AI_PROMPT =
  "Generate Travel Plan for Location : {location}, for {totalDays} Days for {traveler} with a {budget} budget, give me Hotels options list with HotelName, Hotel address, Price, hotel image url, geo coordinates, rating, descriptions and  suggest itinerary with placeName, Place Details, Place Image Url, Geo Coordinates,Place address, ticket Pricing, Time travel each of the location for {totalDays} days with each day plan with best time to visit in JSON format.";
