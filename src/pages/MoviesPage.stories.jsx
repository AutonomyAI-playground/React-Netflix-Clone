import React from "react";
import { MemoryRouter } from "react-router-dom";
import { FirebaseContext } from "../context/FirbaseContext";
import MoviesPage from "./MoviesPage";

/**
 * Mock film data representing the various genres displayed on the Movies page.
 * Includes samples for Drama, Thriller, Children, Suspense, and Romance genres.
 */
const mockFilms = [
  // Drama
  {
    docId: "1",
    title: "Fight Club",
    description:
      "An insomniac office worker and a devil-may-care soap maker form an underground fight club.",
    genre: "drama",
    maturity: "18",
    slug: "fight-club",
  },
  {
    docId: "2",
    title: "The Prestige",
    description: "Two stage magicians engage in a competitive rivalry.",
    genre: "drama",
    maturity: "15",
    slug: "the-prestige",
  },
  {
    docId: "3",
    title: "The King's Speech",
    description:
      "The story of King George VI's struggle to overcome his stammer.",
    genre: "drama",
    maturity: "12",
    slug: "kings-speech",
  },
  {
    docId: "4",
    title: "The Revenant",
    description:
      "A frontiersman on a fur trading expedition fights for survival.",
    genre: "drama",
    maturity: "18",
    slug: "the-revenant",
  },
  {
    docId: "5",
    title: "The Social Network",
    description: "The founding of Facebook and the lawsuits that followed.",
    genre: "drama",
    maturity: "12",
    slug: "the-social-network",
  },
  // Thriller
  {
    docId: "6",
    title: "Joker",
    description: "A failed comedian descends into madness in Gotham City.",
    genre: "thriller",
    maturity: "18",
    slug: "joker",
  },
  {
    docId: "7",
    title: "A Quiet Place",
    description: "A family must live in silence to avoid mysterious creatures.",
    genre: "thriller",
    maturity: "15",
    slug: "a-quiet-place",
  },
  {
    docId: "8",
    title: "Black Swan",
    description:
      "A ballerina loses her grip on reality as she strives for perfection.",
    genre: "thriller",
    maturity: "15",
    slug: "black-swan",
  },
  {
    docId: "9",
    title: "Nightcrawler",
    description: "A driven man discovers the world of crime journalism.",
    genre: "thriller",
    maturity: "15",
    slug: "nightcrawler",
  },
  {
    docId: "10",
    title: "The Silence of The Lambs",
    description:
      "An FBI trainee seeks help from a cannibalistic serial killer.",
    genre: "thriller",
    maturity: "18",
    slug: "the-silence-of-the-lambs",
  },
  // Children
  {
    docId: "11",
    title: "Frozen",
    description: "A fearless princess sets off to find her sister.",
    genre: "children",
    maturity: "PG",
    slug: "frozen",
  },
  {
    docId: "12",
    title: "Up",
    description: "An elderly widower travels to Paradise Falls.",
    genre: "children",
    maturity: "PG",
    slug: "up",
  },
  {
    docId: "13",
    title: "Despicable Me",
    description: "A supervillain plans to steal the moon.",
    genre: "children",
    maturity: "PG",
    slug: "despicable-me",
  },
  {
    docId: "14",
    title: "Hotel Transylvania",
    description: "Dracula runs a high-end resort for monsters.",
    genre: "children",
    maturity: "PG",
    slug: "hotel-transylvania",
  },
  {
    docId: "15",
    title: "Spirited Away",
    description: "A girl wanders into a world of spirits.",
    genre: "children",
    maturity: "PG",
    slug: "spirited-away",
  },
  // Suspense
  {
    docId: "16",
    title: "Shutter Island",
    description:
      "U.S. Marshal Teddy Daniels investigates a psychiatric facility.",
    genre: "suspense",
    maturity: "15",
    slug: "shutter-island",
  },
  {
    docId: "17",
    title: "Gone Girl",
    description: "A man becomes the prime suspect in his wife's disappearance.",
    genre: "suspense",
    maturity: "18",
    slug: "gone-girl",
  },
  {
    docId: "18",
    title: "Prisoners",
    description:
      "When his daughter goes missing, a father takes matters into his own hands.",
    genre: "suspense",
    maturity: "15",
    slug: "prisoners",
  },
  {
    docId: "19",
    title: "Seven",
    description:
      "Two detectives hunt a serial killer who uses the seven deadly sins.",
    genre: "suspense",
    maturity: "18",
    slug: "seven",
  },
  {
    docId: "20",
    title: "Zodiac",
    description: "The true story of the hunt for the Zodiac killer.",
    genre: "suspense",
    maturity: "15",
    slug: "zodiac",
  },
  // Romance
  {
    docId: "21",
    title: "A Star Is Born",
    description: "A musician helps a young singer find fame.",
    genre: "romance",
    maturity: "15",
    slug: "a-star-is-born",
  },
  {
    docId: "22",
    title: "The Notebook",
    description: "A poor man falls for a rich girl in the 1940s.",
    genre: "romance",
    maturity: "12",
    slug: "the-notebook",
  },
  {
    docId: "23",
    title: "La La Land",
    description: "A jazz musician and an actress fall in love in Los Angeles.",
    genre: "romance",
    maturity: "12",
    slug: "la-la-land",
  },
  {
    docId: "24",
    title: "Titanic",
    description: "A romance blooms aboard the doomed ship.",
    genre: "romance",
    maturity: "12",
    slug: "titanic",
  },
  {
    docId: "25",
    title: "Blue Valentine",
    description:
      "A couple navigates the evolution and eventual dissolution of their relationship.",
    genre: "romance",
    maturity: "15",
    slug: "blue-valentine",
  },
];

/**
 * Mock Firebase context that provides film data without requiring
 * a real Firebase connection. Used for Storybook preview and testing.
 */
const mockFirebase = {
  firestore: () => ({
    collection: () => ({
      get: () =>
        Promise.resolve({
          docs: mockFilms.map((film) => ({
            id: film.docId,
            data: () => film,
          })),
        }),
    }),
  }),
};

const meta = {
  title: "Pages/MoviesPage",
  component: MoviesPage,
  parameters: {
    layout: "fullscreen",
  },
  decorators: [
    (Story) => (
      <MemoryRouter>
        <FirebaseContext.Provider value={{ firebase: mockFirebase }}>
          <Story />
        </FirebaseContext.Provider>
      </MemoryRouter>
    ),
  ],
};

export default meta;

export const Default = {
  name: "Default",
};
