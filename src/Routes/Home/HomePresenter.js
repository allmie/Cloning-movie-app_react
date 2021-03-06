import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Section from "Components/Section";
import Loader from "Components/Loader";
import Message from "Components/Message";
import Poster from "Components/Poster";

const Container = styled.div`
  padding: 20px;
  padding: 20px;
`;

const HomePresenter = ({ nowPlaying, upcoming, popular, error, loading }) =>
  loading ? (
    <Loader />
  ) : (
    <Container>
      {upcoming && upcoming.length > 0 && (
        <Section title="Upcoming">
          {upcoming.map((movie) => (
            <Poster
              key={movie.id}
              id={movie.id}
              imgUrl={movie.poster_path}
              rating={movie.vote_average}
              title={movie.original_title}
              year={movie.release_date && movie.release_date.split("-", 1)}
              isMovie={true}
            />
          ))}
        </Section>
      )}
      {nowPlaying && nowPlaying.length > 0 && (
        <Section title="Now Playing">
          {nowPlaying.map((movie) => (
            <Poster
              key={movie.id}
              id={movie.id}
              imgUrl={movie.poster_path}
              rating={movie.vote_average}
              title={movie.original_title}
              year={movie.release_date && movie.release_date.split("-", 1)}
              isMovie={true}
            />
          ))}
        </Section>
      )}
      {popular && popular.length > 0 && (
        <Section title="Popular">
          {popular.map((movie) => (
            <Poster
              key={movie.id}
              id={movie.id}
              imgUrl={movie.poster_path}
              rating={movie.vote_average}
              title={movie.original_title}
              year={movie.release_date && movie.release_date.split("-", 1)}
              isMovie={true}
            />
          ))}
        </Section>
      )}
      {error && <Message color="#27c3c" text={error} />}
    </Container>
  );

HomePresenter.propTypes = {
  nowPlaying: PropTypes.array,
  upcoming: PropTypes.array,
  popular: PropTypes.array,
  error: PropTypes.bool.isRequired,
  loading: PropTypes.string,
};

export default HomePresenter;
