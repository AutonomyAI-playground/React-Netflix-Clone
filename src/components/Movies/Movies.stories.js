import React from "react";
import AllSlidesWrapper from "./AllSlidesWrapper";
import SlideWrapper from "./SlideWrapper";
import SlideTitle from "./SlideTitle";
import AllCardsWrapper from "./AllCardsWrapper";
import CardWrapper from "./CardWrapper";
import CardImage from "./CardImage";
import CardTitle from "./CardTitle";
import CardDescription from "./CardDescription";
import CardFeatureWrapper from "./CardFeatureWrapper";
import CardFeatureClose from "./CardFeatureClose";
import PlayerOverlay from "./PlayerOverlay";
import PlayerVideo from "./PlayerVideo";

export default {
  title: "Components/Movies",
  parameters: {
    layout: "fullscreen",
  },
};

// Mock movie data for demonstration purposes
// Each movie contains: id, title, slug (for image paths), and description
const dramaMovies = [
  {
    id: 1,
    title: "Fight Club",
    slug: "fight-club",
    description:
      "An insomniac office worker and a devil-may-care soap maker form an underground fight club.",
  },
  {
    id: 2,
    title: "The Prestige",
    slug: "the-prestige",
    description:
      "Two stage magicians engage in competitive one-upmanship in an attempt to create the ultimate illusion.",
  },
  {
    id: 3,
    title: "The Social Network",
    slug: "the-social-network",
    description:
      "The story of the founders of the social-networking website, Facebook.",
  },
  {
    id: 4,
    title: "The Revenant",
    slug: "the-revenant",
    description:
      "A frontiersman on a fur trading expedition in the 1820s fights for survival after being mauled by a bear.",
  },
  {
    id: 5,
    title: "The King's Speech",
    slug: "kings-speech",
    description: "The story of King George VI and his speech therapist.",
  },
];

const thrillerMovies = [
  {
    id: 1,
    title: "A Quiet Place",
    slug: "a-quiet-place",
    description:
      "A family lives in silence to avoid mysterious creatures that hunt by sound.",
  },
  {
    id: 2,
    title: "Joker",
    slug: "joker",
    description:
      "A mentally troubled stand-up comedian embarks on a downward spiral that leads to the creation of an iconic villain.",
  },
  {
    id: 3,
    title: "Black Swan",
    slug: "black-swan",
    description:
      "A committed dancer struggles to maintain her sanity after winning the lead role in a production of Swan Lake.",
  },
  {
    id: 4,
    title: "Nightcrawler",
    slug: "nightcrawler",
    description:
      "A con man becomes a stringer for a Los Angeles television station, blurring the line between observer and participant.",
  },
  {
    id: 5,
    title: "The Silence of the Lambs",
    slug: "the-silence-of-the-lambs",
    description:
      "A young FBI cadet must receive the help of an incarcerated cannibal to catch another serial killer.",
  },
];

const childrenMovies = [
  {
    id: 1,
    title: "Frozen",
    slug: "frozen",
    description:
      "When the newly crowned Queen Elsa accidentally uses her power to turn things into ice, she must find a way to reverse the curse.",
  },
  {
    id: 2,
    title: "Up",
    slug: "up",
    description:
      "A 78-year-old balloon salesman ties thousands of balloons to his house and flies to South America.",
  },
  {
    id: 3,
    title: "Despicable Me",
    slug: "despicable-me",
    description:
      "A criminal mastermind uses a trio of orphan girls as pawns for a grand scheme.",
  },
  {
    id: 4,
    title: "Spirited Away",
    slug: "spirited-away",
    description:
      "During her family's move to the suburbs, a sullen girl wanders into a world ruled by gods and spirits.",
  },
  {
    id: 5,
    title: "Hotel Transylvania",
    slug: "hotel-transylvania",
    description:
      "Dracula operates a high-end resort away from the human world, but a young backpacker discovers the resort.",
  },
];

// Story: Complete browse interface showing multiple genre slides
// Demonstrates the full movie browsing experience with Drama, Thriller, and Children categories
export const BrowseInterface = {
  render: function BrowseInterface() {
    return (
      <AllSlidesWrapper>
        <SlideWrapper>
          <SlideTitle>Drama</SlideTitle>
          <AllCardsWrapper>
            {dramaMovies.map((movie) => (
              <CardWrapper key={movie.id}>
                <CardImage src={`/images/films/drama/${movie.slug}/small.jpg`} />
              </CardWrapper>
            ))}
          </AllCardsWrapper>
        </SlideWrapper>

        <SlideWrapper>
          <SlideTitle>Thriller</SlideTitle>
          <AllCardsWrapper>
            {thrillerMovies.map((movie) => (
              <CardWrapper key={movie.id}>
                <CardImage
                  src={`/images/films/thriller/${movie.slug}/small.jpg`}
                />
              </CardWrapper>
            ))}
          </AllCardsWrapper>
        </SlideWrapper>

        <SlideWrapper>
          <SlideTitle>Children</SlideTitle>
          <AllCardsWrapper>
            {childrenMovies.map((movie) => (
              <CardWrapper key={movie.id}>
                <CardImage
                  src={`/images/films/children/${movie.slug}/small.jpg`}
                />
              </CardWrapper>
            ))}
          </AllCardsWrapper>
        </SlideWrapper>
      </AllSlidesWrapper>
    );
  },
};

// Story: Featured movie detail view
// Shows the expanded view when a user selects a movie card
export const FeatureView = {
  render: function FeatureView() {
    return (
      <div style={{ padding: "20px" }}>
        <CardFeatureWrapper
          style={{
            backgroundImage: `url(/images/films/drama/fight-club/large.jpg)`,
          }}
        >
          <div style={{ padding: "0 45px" }}>
            <CardTitle>Fight Club</CardTitle>
            <CardDescription>
              An insomniac office worker and a devil-may-care soap maker form an
              underground fight club that evolves into much more.
            </CardDescription>
          </div>
          <CardFeatureClose onClick={() => {}} />
        </CardFeatureWrapper>
      </div>
    );
  },
};

// Story: Single slide showcase
// Demonstrates a single genre slide with limited movies
export const SingleSlide = {
  render: function SingleSlide() {
    return (
      <SlideWrapper>
        <SlideTitle>Drama</SlideTitle>
        <AllCardsWrapper>
          {dramaMovies.slice(0, 3).map((movie) => (
            <CardWrapper key={movie.id}>
              <CardImage src={`/images/films/drama/${movie.slug}/small.jpg`} />
            </CardWrapper>
          ))}
        </AllCardsWrapper>
      </SlideWrapper>
    );
  },
};

// Story: Movie cards collection
// Shows a horizontal collection of movie cards without the slide wrapper
export const MovieCards = {
  render: function MovieCards() {
    return (
      <AllCardsWrapper>
        {childrenMovies.map((movie) => (
          <CardWrapper key={movie.id}>
            <CardImage src={`/images/films/children/${movie.slug}/small.jpg`} />
          </CardWrapper>
        ))}
      </AllCardsWrapper>
    );
  },
};

// Story: Video player overlay
// Demonstrates the full-screen video player overlay component
export const PlayerOverlayView = {
  render: function PlayerOverlayView() {
    return (
      <div style={{ position: "relative", width: "100%", height: "400px" }}>
        <PlayerOverlay>
          <PlayerVideo>
            <source src="/videos/sample.mp4" type="video/mp4" />
          </PlayerVideo>
        </PlayerOverlay>
      </div>
    );
  },
};
