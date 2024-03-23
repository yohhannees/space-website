import React from "react";

interface EventCard {
  title: string;
  description: string;
  date: string;
  time: string;
  link: string;
}

const ImageGrid: React.FC = () => {
  const events: EventCard[] = [
    {
      title: "Stargazing Night",
      description:
        "Join us for a night of stargazing at the local observatory. We'll be observing various celestial bodies and constellations. Don't miss the chance to see the beauty of our universe through powerful telescopes. No prior experience needed. Refreshments will be provided.",
      date: "2024-03-25",
      time: "10:00 PM",
      link: "https://www.example.com/event1",
    },
    {
      title: "Astrophotography Workshop",
      description:
        "Ever wondered how to capture the night sky with a camera? In this workshop, you'll learn the basics of astrophotography. We'll cover equipment setup, shooting techniques, and post-processing. Bring your DSLR camera and tripod. Limited spots available.",
      date: "2024-03-26",
      time: "07:00 PM",
      link: "https://www.example.com/event2",
    },
    {
      title: "Meteor Shower Viewing",
      description:
        "Come and join us for the spectacular meteor shower event. We'll be heading to a dark sky location for the best viewing experience. Bring your blankets and picnic baskets. It's going to be a memorable night under the stars.",
      date: "2024-03-27",
      time: "09:00 PM",
      link: "https://www.example.com/event3",
    },
    {
      title: "Lunar Eclipse Gathering",
      description:
        "Experience the awe-inspiring sight of a lunar eclipse with fellow astronomy enthusiasts. We'll provide telescopes for viewing, but feel free to bring your own equipment. Don't forget to dress warmly!",
      date: "2024-03-28",
      time: "11:00 PM",
      link: "https://www.example.com/event4",
    },
    {
      title: "Space Documentary Screening",
      description:
        "Join us for a screening of a popular space documentary. This is a great opportunity to learn more about space exploration and the mysteries of the universe. Popcorn and drinks will be served.",
      date: "2024-03-29",
      time: "06:00 PM",
      link: "https://www.example.com/event5",
    },
    {
      title: "Astronomy Club Monthly Meeting",
      description:
        "Come to our monthly meeting to discuss recent astronomical events, club news, and upcoming activities. New members are always welcome! This is a great chance to meet fellow astronomy lovers and share experiences.",
      date: "2024-03-30",
      time: "07:00 PM",
      link: "https://www.example.com/event6",
    },
  ];

  const handleCardClick = (link: string) => {
    window.open(link, "_blank");
  };

  // Define an array of colors
 const colors = [
   "#EEA870",
   "#FFF59E",
   "#B0DAFB",
   "#B0FBB7",
   "#F3EEEA",
   "#ED98AA",
 ];

  return (
    <div className="grid grid-cols-3 gap-4">
      {events.map((event, index) => (
        <div
          key={index}
          className="relative h-64 w-80 cursor-pointer border-2 border-gray-700 rounded p-4"
          style={{ backgroundColor: colors[index % colors.length] }}
        >
          <div className="mb-2">
            <h3 className="text-lg font-bold">{event.title}</h3>
            <p className="text-sm">{event.description}</p>
          </div>
          <div className="mb-2">
            <p className="text-sm font-bold">Date: {event.date}</p>
            <p className="text-sm font-bold">Time: {event.time}</p>
          </div>
          <div
            className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 hover:opacity-100 bg-black bg-opacity-50"
            onClick={() => handleCardClick(event.link)}
          >
            <span className="text-white text-lg font-bold">See more</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ImageGrid;
