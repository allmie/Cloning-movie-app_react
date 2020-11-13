import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Section from "Components/Section";
import Loader from "Components/Loader";
import Message from "Components/Message";
import Poster from "Components/Poster";

const Container = styled.div`
  padding: 20px;
`;

const TVPresenter = ({ topRated, popular, airingToday, loading, error }) =>
  loading ? (
    <Loader />
  ) : (
    <Container>
      {topRated && topRated.length > 0 && (
        <Section title="Top Rated">
          {topRated.map((tv) => (
            <Poster
              id={tv.id}
              imgUrl={tv.poster_path}
              title={tv.original_name}
              rating={tv.vote_average}
              year={tv.first_air_date.split("-", 1)}
            />
          ))}
        </Section>
      )}
      {popular && popular.length > 0 && (
        <Section title="Popular">
          {popular.map((tv) => (
            <Poster
              id={tv.id}
              imgUrl={tv.poster_path}
              title={tv.original_name}
              rating={tv.vote_average}
              year={tv.first_air_date.split("-", 1)}
            />
          ))}
        </Section>
      )}
      {airingToday && airingToday.length > 0 && (
        <Section title="Airing Today">
          {airingToday.map((tv) => (
            <Poster
              id={tv.id}
              imgUrl={tv.poster_path}
              title={tv.original_name}
              rating={tv.vote_average}
              year={tv.first_air_date.split("-", 1)}
            />
          ))}
        </Section>
      )}
      {error && <Message color="#27c3c" text={error} />}
    </Container>
  );

TVPresenter.propTypes = {
  topRated: PropTypes.array,
  popular: PropTypes.array,
  airingToday: PropTypes.array,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string,
};

export default TVPresenter;
