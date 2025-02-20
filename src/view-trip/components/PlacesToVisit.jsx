import React from "react";
import PlaceCardItem from "./PlaceCardItem";

function PlacesToVisit({ trip }) {
  return (
    <div>
      <h2 className="font-bold text-lg">Places to Visit</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-3 gap-5 my-5">
        {Object.entries(trip?.tripData?.itinerary || {}).map(([day, data]) => (
          <div className="mt-5">
            <h2 className="font-medium text-lg">{data.day}</h2>
            <div>
              {data?.plan.map((place, index) => (
                <div className="mb-4">
                  <h2 className="font-medium text-sm text-orange-600 mb-2">
                    {place.time}
                  </h2>
                  <PlaceCardItem place={place} />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PlacesToVisit;
