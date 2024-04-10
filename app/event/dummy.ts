export type eventDataType = {
    imageURL: string;
    date: string;
    title: string;
    text: string;
    buttonText: string;
    buttonURL: string;
}
const eventData: eventDataType[] = [
    {
        imageURL: "/pictures/pic4.avif",
        date: "18/06/2023",
        title: "ASTRONAUTS WE KNOW",
        text: "Join us for a talk about the fascinating lives of astronauts, the challenges they face in space, and their groundbreaking contributions to scientific discovery.",
        buttonText: "Learn More",
        buttonURL: "",
    },
    {
        imageURL: "/pictures/events/Galaxy.png", // Replace with a placeholder image if needed
        date: "20/04/2024",
        title: "James Webb Space Telescope: Unveiling the Universe's Secrets",
        text: "Explore the capabilities of the James Webb Space Telescope, the most powerful telescope ever built, and delve into its recent groundbreaking discoveries about the early universe and exoplanets.",
        buttonText: "Read More",
        buttonURL: "https://webb.nasa.gov/content/about/what-is-webb.html", // Link to NASA's Webb Telescope website
    },
    {
        imageURL: "/pictures/events/EclipsImage.png", // Replace with a placeholder image if needed
        date: "15/07/2025 (Target)",
        title: "The Perseverance Rover: Searching for Life on Mars",
        text: "Learn about the ongoing mission of the Perseverance rover on Mars, its search for signs of ancient microbial life, and the ongoing exploration to determine if Mars was ever habitable.",
        buttonText: "Mission Updates",
        buttonURL: "https://mars.nasa.gov/perseverance/", // Link to NASA's Perseverance mission website
    },
    {
        imageURL: "/pictures/events/BlueGalaxy.png", // Replace with a placeholder image if needed
        date: "04/10/2024",
        title: "The Importance of Satellites: From Navigation to Communication",
        text: "Discover the diverse applications of satellites in our daily lives, from GPS navigation and weather forecasting to communication and Earth observation.",
        buttonText: "Explore Uses",
        buttonURL: "https://www.esa.int/Applications/Satellites", // Link to European Space Agency's satellites page
    },
    {
        imageURL: "/pictures/events/3Astronauts.png", // Replace with a placeholder image if needed
        date: "Upcoming (Check Website)",
        title: "Stargazing Night: Explore the Cosmos with Us",
        text: "Join us for a stargazing night where you can observe the wonders of the night sky through telescopes, learn about constellations, and gain insights from astronomers.",
        buttonText: "See Schedule",
        buttonURL: "https://(your-organization's-website).com/events", // Replace with your website's events page
    },
]

export default eventData;