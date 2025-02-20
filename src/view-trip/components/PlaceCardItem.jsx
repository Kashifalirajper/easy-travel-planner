import { GetPlaceDetails, PHOTO_REF_URL } from "@/service/GlobalApi";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function PlaceCardItem({ place }) {
  const [photoUrl, setPhotoUrl] = useState();
  useEffect(() => {
    place && GetPlacePhoto();
  }, [place]);

  const GetPlacePhoto = async () => {
    const data = {
      textQuery: place.placeName,
    };
    const result = await GetPlaceDetails(data).then((resp) => {
      const PhotoUrl = PHOTO_REF_URL.replace(
        "{NAME}",
        resp.data.places[0].photos[3].name
      );
      setPhotoUrl(PhotoUrl);
    });
  };

  return (
    <Link
      to={"https://www.google.com/maps/search/?api=1&query=" + place.placeName}
      target="_blank"
      rel="noopener noreferrer"
      className="block w-full"
    >
      <div
        className="border rounded-xl p-3 mt-2 hover:scale-105 transition-all hover:shadow-md cursor-pointer flex flex-col items-center min-h-[500px]" // Fixed Height for Equal Cards
      >
        {/* Image Section */}
        <img
          src={photoUrl || "/visit.jpg"}
          alt={place.placeName}
          className="w-full h-[250px] object-cover rounded-xl"
        />

        {/* Text Section */}
        <div className="mt-4 text-center w-full px-3 flex flex-col flex-grow">
          <h2 className="font-bold text-lg text-gray-900">{place.placeName}</h2>
          <p className="text-sm text-gray-600 mt-1 flex-grow">
            {place.placeDetails}
          </p>

          {/* Time & Pricing */}
          <div className="mt-2 text-sm text-gray-500 space-y-1">
            <h2>{place.placeAddress ? `📍🗺️ ${place.placeAddress}` : ""}</h2>
            <h2>{place.timeToTravel ? `🕙 ${place.timeToTravel}` : ""}</h2>
            <h2>{place.ticketPricing ? `🎟️ ${place.ticketPricing}` : ""}</h2>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default PlaceCardItem;
