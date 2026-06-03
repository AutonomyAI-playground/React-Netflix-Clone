import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import BrowsePage from './BrowsePage';
import { FirebaseContext } from '../context/FirbaseContext';

// Mock data for films (based on the public/images directory structure)
const mockFilms = [
  { docId: '1', title: 'Fight Club', description: 'An insomniac office worker and a soap salesman form an underground fight club.', genre: 'drama', slug: 'fight-club' },
  { docId: '2', title: 'The King\'s Speech', description: 'The story of King George VI and his speech therapist.', genre: 'drama', slug: 'kings-speech' },
  { docId: '3', title: 'The Prestige', description: 'Two stage magicians engage in competitive one-upmanship.', genre: 'drama', slug: 'the-prestige' },
  { docId: '4', title: 'The Revenant', description: 'A frontiersman fights for survival after being mauled by a bear.', genre: 'drama', slug: 'the-revenant' },
  { docId: '5', title: 'The Social Network', description: 'The story of the founding of Facebook.', genre: 'drama', slug: 'the-social-network' },
  { docId: '6', title: 'Zodiac', description: 'A San Francisco cartoonist becomes an amateur detective obsessed with tracking down the Zodiac killer.', genre: 'thriller', slug: 'zodiac' },
  { docId: '7', title: 'Kill Bill', description: 'A bride wakes from a coma to exact revenge on her former associates.', genre: 'thriller', slug: 'kill-bill' },
  { docId: '8', title: 'No Country for Old Men', description: 'Violence ensues after a hunter stumbles upon drug money.', genre: 'thriller', slug: 'no-country-for-old-men' },
  { docId: '9', title: 'Pulp Fiction', description: 'The lives of two mob hitmen intertwine in a series of incidents.', genre: 'thriller', slug: 'pulp-fiction' },
  { docId: '10', title: 'Shutter Island', description: 'A U.S. Marshal investigates a psychiatric facility.', genre: 'thriller', slug: 'shutter-island' },
  { docId: '11', title: 'Despicable Me', description: 'A criminal mastermind adopts three orphans.', genre: 'children', slug: 'despicable-me' },
  { docId: '12', title: 'Frozen', description: 'A princess must find her estranged sister to end an eternal winter.', genre: 'children', slug: 'frozen' },
  { docId: '13', title: 'Hotel Transylvania', description: 'Dracula runs a resort for monsters.', genre: 'children', slug: 'hotel-transylvania' },
  { docId: '14', title: 'Spirited Away', description: 'A girl enters a world ruled by gods, witches and spirits.', genre: 'children', slug: 'spirited-away' },
  { docId: '15', title: 'Up', description: 'An elderly widower travels to South America with a young stowaway.', genre: 'children', slug: 'up' },
  { docId: '16', title: 'Gone Girl', description: 'A wife goes missing on their anniversary.', genre: 'suspense', slug: 'gone-girl' },
  { docId: '17', title: 'Joker', description: 'A failed comedian turns to a life of crime.', genre: 'suspense', slug: 'joker' },
  { docId: '18', title: 'Nightcrawler', description: 'A thief becomes a crime journalist in LA.', genre: 'suspense', slug: 'nightcrawler' },
  { docId: '19', title: 'Seven', description: 'Two detectives hunt a serial killer.', genre: 'suspense', slug: 'seven' },
  { docId: '20', title: 'The Silence of the Lambs', description: 'An FBI cadet seeks help from an imprisoned cannibal.', genre: 'suspense', slug: 'the-silence-of-the-lambs' },
  { docId: '21', title: 'A Star is Born', description: 'A musician helps a young singer find fame.', genre: 'romance', slug: 'a-star-is-born' },
  { docId: '22', title: 'Eternal Sunshine', description: 'A couple undergoes a procedure to erase memories of each other.', genre: 'romance', slug: 'eternal-sunshine' },
  { docId: '23', title: 'Groundhog Day', description: 'A reporter relives the same day repeatedly.', genre: 'romance', slug: 'groundhog-day' },
  { docId: '24', title: 'Silver Linings Playbook', description: 'A man with bipolar disorder moves back with his parents.', genre: 'romance', slug: 'silver-linings-playbook' },
  { docId: '25', title: 'The Notebook', description: 'A poor yet passionate man falls for a rich young woman.', genre: 'romance', slug: 'the-notebook' },
];

// Mock data for series
const mockSeries = [
  { docId: 's1', title: 'Making a Murderer', description: 'A documentary series exploring a murder case.', genre: 'documentaries', slug: 'making-a-murderer' },
  { docId: 's2', title: 'Amanda Knox', description: 'Documentary about the Amanda Knox case.', genre: 'documentaries', slug: 'amanda-knox' },
  { docId: 's3', title: 'Tiger King', description: 'Documentary about big cat owners.', genre: 'documentaries', slug: 'tiger-king' },
  { docId: 's4', title: 'The Office', description: 'A mockumentary about office employees.', genre: 'comedies', slug: 'the-office' },
  { docId: 's5', title: 'Arrested Development', description: 'A wealthy family loses everything.', genre: 'comedies', slug: 'arrested-development' },
  { docId: 's6', title: 'Stranger Things', description: 'A boy vanishes into an alternate dimension.', genre: 'children', slug: 'stranger-things' },
  { docId: 's7', title: 'Avatar: The Last Airbender', description: 'A young Avatar must master the elements.', genre: 'children', slug: 'avatar-the-last-airbender' },
  { docId: 's8', title: 'Breaking Bad', description: 'A chemistry teacher turns to drug manufacturing.', genre: 'crime', slug: 'breaking-bad' },
  { docId: 's9', title: 'Narcos', description: 'The rise of drug cartels.', genre: 'crime', slug: 'narcos' },
  { docId: 's10', title: 'The Good Place', description: 'A woman enters the afterlife.', genre: 'feel-good', slug: 'the-good-place' },
  { docId: 's11', title: 'Schitts Creek', description: 'A wealthy family loses everything and moves to a small town.', genre: 'feel-good', slug: 'schitts-creek' },
];

// Mock Firebase context
const createMockFirebase = () => ({
  firestore: () => ({
    collection: (target) => ({
      get: () => {
        return new Promise((resolve) => {
          const data = target === 'films' ? mockFilms : mockSeries;
          resolve({
            docs: data.map(item => ({
              id: item.docId,
              data: () => item,
            })),
          });
        });
      },
    }),
  }),
});

const meta = {
  title: 'Pages/BrowsePage',
  component: BrowsePage,
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [
    (Story) => (
      <MemoryRouter>
        <FirebaseContext.Provider value={{ firebase: createMockFirebase() }}>
          <Story />
        </FirebaseContext.Provider>
      </MemoryRouter>
    ),
  ],
};

export default meta;

export const Default = {};
