import React, {
    Component, PropTypes as PT
} from "react"
import {
    ListView, Text, View,
    Image, TouchableOpacity
} from "react-native"
import * as Animatable from 'react-native-animatable'
import moment from "moment"
import myTheme from '../../themes/base-theme'
import styles from "./style"

class Movie extends Component {
    static propTypes = {
        image: PT.string,
        title: PT.string,
        hours: PT.array,
        detail: PT.func
    }

    render() {
        const { image, title, hours, detail } = this.props

        return (
            <TouchableOpacity
                onPress={() => detail()}
                activeOpacity={OPACITY}
                underlayColor={myTheme.primary}>
                <View style={styles.containerList}>
					<View style={styles.textIntoImage}>
							<Text
									style={styles.title}
									numberOfLines={1}>
									{title}
							</Text>
							<View style={styles.hours}>
									<Text
											style={styles.hour}>
											{ hours.map((hour, i) => `${moment(hour).format('HH:mm')}  `) }
									</Text>
							</View>
					</View>
                    <Animatable.Image
                        source={{uri: image}}
                        defaultSource={require('../../images/backdrop.png')}
                        style={styles.image}
						animation='fadeIn'
						duration={500}>
                    </Animatable.Image>
                </View>
            </TouchableOpacity>
        )
    }
}

const OPACITY = 0.75

export default Movie
