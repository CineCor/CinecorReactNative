import myTheme 				from '../../themes/base-theme'
import { Dimensions }	from 'react-native'
const { width } 			= Dimensions.get('window')

export default styles = {
	mainContainer: {
		backgroundColor: myTheme.backgroundContentCards
	},
	image: {
		flex: 1,
		width,
		height: 200
	},
	poster: {
		width: width / 4.3,
		height: width / 3,
		marginLeft: 30,
		marginTop: -20,
		backgroundColor: myTheme.light
	},
	movieData: {
		flexDirection: 'row'
	},
	container: {
		padding: 20,
		paddingTop: 10
	},
	movieDataContainer: {
		padding: 20,
		paddingTop: 10,
		paddingLeft: 30
	},
	genresContainer: {
		flexDirection: 'row',
		flexWrap: 'wrap',
	},
	genresBubble: {
		backgroundColor: myTheme.divider,
		paddingTop: 5,
		paddingBottom: 5,
		paddingLeft: 11,
		paddingRight: 11,
		marginRight: 5,
		marginBottom: 5,
		borderRadius: 100,
	},
	genresText: {
		color: myTheme.light,
	},
	duration: {
		marginBottom: 5,
		color: myTheme.secondaryText,
	},
	releaseDate: {
		marginBottom: 5,
		color: myTheme.secondaryText
	},
	ratingContainer: {
		marginBottom: 5,
		flexDirection: 'row',
		alignItems: 'center'
	},
	ratingStar: {
		color: myTheme.yellow
	},
	rating: {
		color: myTheme.secondaryText,
		marginLeft: 5
	},
	body: {
		flex: 1,
		flexDirection: 'column',
		marginTop: 10,
	}
}
