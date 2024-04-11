export type eventDataType = {
  imageURL: string;
  date: string;
  title: string;
  text: string;
  buttonText: string;
  buttonURL: string;
};
const eventData: eventDataType[] = [
  {
   
    imageURL: "/pictures/homeCarousel/event3.jpg", 
    date: "18/06/2023",
    title: "TELESCOPE STAR GAZING",
    text: "Join us for a night of stargazing with telescopes. Explore the cosmos, learn about different celestial bodies, and deepen your understanding of the universe.",
    buttonText: "Learn More",
    buttonURL: "",
  },
  {
    imageURL: "/pictures/space/present.jpg", // Replace with a placeholder image if needed
    date: "20/04/2024",
    title: "Exploring Dark Matter: The Invisible Universe",
    text: "Join us as we delve into the concept of dark matter, an unseen and yet undetectable form of matter that is thought to account for a significant part of the universe. Learn about its implications on our understanding of space and the universe's structure.",
    buttonText: "Read More",
    buttonURL: "https://webb.nasa.gov/content/about/what-is-webb.html", // Link to NASA's Webb Telescope website
  },
  {
    imageURL: "/pictures/space/bigtelescope.jpg", // Replace with a placeholder image if needed
    date: "15/07/2025 (Target)",
    title: "Comet Viewing: A Celestial Spectacle",
    text: "Join us for a special event to observe comets, these icy visitors from the outer regions of our solar system. Learn how to spot them with a telescope and understand their composition and impact on our understanding of the universe.",
    buttonText: "Mission Updates",
    buttonURL: "https://mars.nasa.gov/perseverance/", // Link to NASA's Perseverance mission website
  },
  {
    imageURL: "/pictures/space/telescope.jpg", // Replace with a placeholder image if needed
    date: "04/10/2024",
    title: "Deep Space Observations: Unveiling the Dark Universe",
    text: "Join us for a journey into the depths of the dark universe. Learn how astronomers use advanced telescopes to observe distant galaxies, nebulae, and other celestial phenomena that shed light on the mysteries of our universe.",
    buttonText: "Explore Uses",
    buttonURL: "https://www.esa.int/Applications/Satellites", // Link to European Space Agency's satellites page
  },
  {
    imageURL: "/pictures/homeCarousel/event4.jpg", // Replace with a placeholder image if needed
    date: "Upcoming (Check Website)",
    title: "Stargazing Night: Explore the Cosmos with Us",
    text: "Join us for a stargazing night where you can observe the wonders of the night sky through telescopes, learn about constellations, and gain insights from astronomers.",
    buttonText: "See Schedule",
    buttonURL: "https://(your-organization's-website).com/events", // Replace with your website's events page
  },
];

export default eventData;
