import React, { useState } from "react";
import useContent from "../custom-hooks/useContent";
import HeaderWrapper from "../components/Header/HeaderWrapper";
import NavBar from "../components/Header/NavBar";
import Logo from "../components/Header/Logo";
import FeatureWrapper from "../components/Header/FeatureWrapper";
import FeatureTitle from "../components/Header/FeatureTitle";
import FeatureSubTitle from "../components/Header/FeatureSubTitle";
import PlayButton from "../components/Header/PlayButton";
import HeaderLink from "../components/Header/HeaderLink";
import AllSlidesWrapper from "../components/Movies/AllSlidesWrapper";
import SlideWrapper from "../components/Movies/SlideWrapper";
import SlideTitle from "../components/Movies/SlideTitle";
import AllCardsWrapper from "../components/Movies/AllCardsWrapper";
import CardWrapper from "../components/Movies/CardWrapper";
import CardImage from "../components/Movies/CardImage";
import CardTitle from "../components/Movies/CardTitle";
import CardDescription from "../components/Movies/CardDescription";
import CardFeatureWrapper from "../components/Movies/CardFeatureWrapper";
import CardFeatureClose from "../components/Movies/CardFeatureClose";
import PlayerVideo from "../components/Movies/PlayerVideo";
import PlayerOverlay from "../components/Movies/PlayerOverlay";
import FooterCompound from "../compounds/FooterCompound";

// Genre ordering for the movie slides
const GENRE_ORDER = [
  { title: "Drama", genre: "drama" },
  { title: "Thriller", genre: "thriller" },
  { title: "Children", genre: "children" },
  { title: "Suspense", genre: "suspense" },
  { title: "Romance", genre: "romance" },
];

/**
 * Groups films by genre according to the predefined genre order.
 * Only includes genres that have at least one film.
 */
function groupFilmsByGenre(films) {
  return GENRE_ORDER.map(({ title, genre }) => ({
    title,
    data: films.filter((item) => item.genre === genre),
  }));
}

function MoviesPage() {
  const { films: rawFilms } = useContent("films");
  const filmsByGenre = groupFilmsByGenre(rawFilms);

  // Card feature state: tracks which movie card is expanded for details
  const [showCardFeature, setShowCardFeature] = useState(false);
  const [activeItem, setActiveItem] = useState(null);

  // Video player state: controls overlay video player visibility
  const [showPlayer, setShowPlayer] = useState(false);

  const handleCardClick = (cardItem) => {
    setShowCardFeature(true);
    setActiveItem(cardItem);
  };

  const handleCloseCardFeature = () => {
    setShowCardFeature(false);
  };

  const handleShowPlayer = () => {
    setShowPlayer(true);
  };

  const handleClosePlayer = () => {
    setShowPlayer(false);
  };

  return (
    <>
      <HeaderWrapper className="header-wrapper-movies">
        <NavBar className="navbar-movies">
          <Logo />
          <HeaderLink className="header-link-bold">Movies</HeaderLink>
        </NavBar>
        <FeatureWrapper>
          <FeatureTitle className="feature-title-movies">
            Watch Fight Club Now
          </FeatureTitle>
          <FeatureSubTitle className="feature-subtitle-movies">
            An insomniac office worker and a devil-may-care soap maker form an
            underground fight club that evolves into much more. A journey into
            the chaos of modern masculinity and consumerism.
          </FeatureSubTitle>
          <PlayButton onClick={handleShowPlayer}>Play</PlayButton>
          {showPlayer && (
            <PlayerOverlay onClick={handleClosePlayer}>
              <PlayerVideo src="./videos/video.mp4" type="video/mp4" />
            </PlayerOverlay>
          )}
        </FeatureWrapper>
      </HeaderWrapper>

      <AllSlidesWrapper>
        {filmsByGenre.map((slideItem) => (
          <SlideWrapper key={`films-${slideItem.title.toLowerCase()}`}>
            <SlideTitle>{slideItem.title}</SlideTitle>
            <AllCardsWrapper>
              {slideItem.data.map((cardItem) => (
                <CardWrapper key={cardItem.docId}>
                  <CardImage
                    onClick={() => handleCardClick(cardItem)}
                    src={`../images/films/${cardItem.genre}/${cardItem.slug}/small.jpg`}
                  />
                </CardWrapper>
              ))}
            </AllCardsWrapper>
            {/* Show expanded card details within the matching genre slide */}
            {showCardFeature &&
              activeItem &&
              slideItem.title.toLowerCase() === activeItem.genre && (
                <CardFeatureWrapper
                  style={{
                    backgroundImage: `url(../images/films/${activeItem.genre}/${activeItem.slug}/large.jpg)`,
                  }}
                >
                  <CardTitle>{activeItem.title}</CardTitle>
                  <CardDescription>{activeItem.description}</CardDescription>
                  <CardFeatureClose onClick={handleCloseCardFeature} />
                  <PlayButton onClick={handleShowPlayer}>Play</PlayButton>
                  {showPlayer && (
                    <PlayerOverlay onClick={handleClosePlayer}>
                      <PlayerVideo src="../videos/video.mp4" type="video/mp4" />
                    </PlayerOverlay>
                  )}
                </CardFeatureWrapper>
              )}
          </SlideWrapper>
        ))}
      </AllSlidesWrapper>
      <FooterCompound />
    </>
  );
}

export default MoviesPage;
