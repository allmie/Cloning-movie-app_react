import { moviesApi, tvApi } from "api";
import React from "react";
import SearchPresenter from "Routes/Search/SearchPresenter";

export default class extends React.Component {
  state = {
    movieResults: null,
    tvResults: null,
    searchTerm: "",
    error: null,
    loading: false,
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { searchTerm } = this.state;
    if (searchTerm !== "") {
      this.searchByTerm(searchTerm);
    }
  };

  updateTerm = (e) => {
    const {
      target: { value },
    } = e;
    this.setState({
      searchTerm: value,
    });
  };

  searchByTerm = async (term) => {
    this.setState({
      loading: true,
    });
    try {
      const {
        data: { results: tvResults },
      } = await tvApi.search(term);
      const {
        data: { results: movieResults },
      } = await moviesApi.search(term);
      this.setState({
        tvResults,
        movieResults,
      });
    } catch (error) {
      this.setState({
        error: "Can`t find results",
      });
    } finally {
      this.setState({
        loading: false,
      });
    }
  };

  render() {
    const { movieResults, tvResults, searchTerm, error, loading } = this.state;
    return (
      <SearchPresenter
        movieResults={movieResults}
        tvResults={tvResults}
        searchTerm={searchTerm}
        error={error}
        loading={loading}
        handleSubmit={this.handleSubmit}
        updateTerm={this.updateTerm}
      />
    );
  }
}
