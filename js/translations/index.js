import I18n from 'react-native-i18n'

I18n.fallbacks = true;

I18n.translations = {
  es: {
    title: 'Cinecor',
    app: {
      search: "Buscar",
      cancel: "Cancelar",
			errorText: "Ups, algo salió mal",
			emptySearch: "Ups, no se encontraron resultados",
			movie: {
				duration: "Duración: ",
        mins: "mins",
        genres: "Géneros: ",
        releaseDate: "Fecha de estreno: "
			}
    }
  },
  en: {
    title: "Cinecor",
    app: {
      search: "Search",
      cancel: "Cancel",
			errorText: "Oops, something went wrong",
			emptySearch: "Oops, no results were found",
			movie: {
				duration: "Duration: ",
        mins: "mins",
        genres: "Genres: ",
        releaseDate: "Release date: "
			}
    }
  }
}
