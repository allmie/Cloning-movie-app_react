import { moviesApi, tvApi } from "api";
import React from "react";
import DetailPresenter from "Routes/Detail/DetailPresenter";

export default class extends React.Component {
  constructor(props) {
    super(props);
    const {
      match: { url },
    } = props;
    this.state = {
      result: null,
      error: null,
      loading: true,
      isMovie: url.includes("/movie/"),
    };
  }

  async componentDidMount() {
    const {
      history: { push },
      match: {
        params: { id },
      },
    } = this.props;
    const { isMovie } = this.state;
    const parsedId = parseInt(id);
    if (isNaN(parsedId)) {
      return push("/");
    }

    let result = null;
    try {
      if (isMovie) {
        ({ data: result } = await moviesApi.detail(id));
      } else {
        ({ data: result } = await tvApi.detail(id));
      }
      console.log("data", result);
      // this.setState({
      //   result,
      // });
    } catch {
      this.setState({
        error: "Can`t find results.",
      });
    } finally {
      this.setState({
        loading: false,
        result,
      });
    }
  }

  render() {
    const { result, error, loading } = this.state;
    console.log(this.state);
    return <DetailPresenter result={result} error={error} loading={loading} />;
  }
}
