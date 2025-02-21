import { Button } from '@/components/ui/button';
import { GetPlaceDetails, PHOTO_REF_URL } from '@/service/GlobalApi';
import React, { useEffect, useState } from 'react';
import { IoIosSend } from "react-icons/io";

function InfoSection({ trip }) {
  const [photoUrl, setPhotoUrl] = useState();

  useEffect(() => {
    trip && GetPlacePhoto();
  }, [trip]);

  const GetPlacePhoto = async () => {
    const data = {
      textQuery: trip?.userSelection?.location?.label,
    };
    const result = await GetPlaceDetails(data).then((resp) => {
      const PhotoUrl = PHOTO_REF_URL.replace('{NAME}', resp.data.places[0].photos[3].name);
      setPhotoUrl(PhotoUrl);
    });
  };

  return (
    <div className="p-4 sm:p-6 lg:p-8">
      {/* Responsive Image */}
      <img 
        src={photoUrl ? photoUrl : '/placeholder.jpg'} 
        className="w-full h-auto max-h-[400px] object-cover rounded-xl"
        alt="Destination"
      />

      {/* Details Section */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mt-5">
        <div className="flex flex-col gap-3">
          <h2 className="font-bold text-2xl text-gray-900">{trip?.userSelection?.location?.label}</h2>
          
          {/* Details Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-2">
            <h2 className="p-2 px-4 bg-gray-200 rounded-full text-gray-600 text-sm flex items-center">
              📅 {trip?.userSelection?.noOfDays} Days
            </h2>
            <h2 className="p-2 px-4 bg-gray-200 rounded-full text-gray-600 text-sm flex items-center">
              💰 {trip?.userSelection?.budget} Budget
            </h2>
            <h2 className="p-2 px-4 bg-gray-200 rounded-full text-gray-600 text-sm flex items-center">
              🥂 {trip?.userSelection?.traveler} Travelers
            </h2>
          </div>
        </div>

        {/* Send Button */}
        <Button className="mt-4 sm:mt-0">
          <IoIosSend className="text-lg" />
        </Button>
      </div>
    </div>
  );
}

export default InfoSection;
