import { tvApi } from "api";
import React from "react";
import TVPresenter from "Routes/TV/TVPresenter";

export default class extends React.Component {
  state = {
    topRated: null,
    popular: null,
    airingToday: null,
    loading: true,
    error: null,
  };

  async componentDidMount() {
    try {
      const {
        data: { results: topRated },
      } = await tvApi.topRated();
      const {
        data: { results: popular },
      } = await tvApi.topRated();
      const {
        data: { results: airingToday },
      } = await tvApi.topRated();

      this.setState({
        topRated,
        popular,
        airingToday,
      });
    } catch (error) {
      this.setState({
        error: "Can`t find TV show.",
      });
    } finally {
      this.setState({
        loading: false,
      });
    }
  }

  render() {
    const { topRated, popular, airingToday, loading, error } = this.state;

    return (
      <TVPresenter
        topRated={topRated}
        popular={popular}
        airingToday={airingToday}
        loading={loading}
        error={error}
      />
    );
  }
}
