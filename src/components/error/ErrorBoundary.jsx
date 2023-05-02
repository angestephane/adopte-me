import { Component } from "react";
import { Link } from "react-router-dom";

class ErrorBoundary extends Component {
  state = {
    hasError: false,
  };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  /**
   * @todo Ajouter un log de l'erreur pour probablement des outils comme TrackJS
   * @param {*} error Erreur qui a été levée
   * @param {*} info Les informations sur l'erreur fournie par React
   */
  componentDidCatch(error, info) {
    console.error(
      "Erreur capturée par le component ErrorBoundary : ",
      error,
      info
    );
  }

  render() {
    if (this.state.hasError) {
      return (
        <div>
          <h1>Désolé... Nous allons réparer ça.</h1>
          <Link to="/" style={{ color: "white" }}>
            Cliquez ici pour retourner à la page d'accueil
          </Link>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
