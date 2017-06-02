import React, {
    Component, PropTypes as PT
}                               from "react"
import {
    ListView, Text, View,
    Image, TouchableOpacity
}                               from "react-native"
import myTheme                  from '../../themes/base-theme'
import styles                   from "./style"

class Movie extends Component {
    static propTypes = {
        image:  PT.string,
        title:  PT.string,
        hours:  PT.array,
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
                    <Image
                        source={{uri: image}}
                        defaultSource={require('../../images/backdrop.png')}
                        style={styles.image}>
                        <View style={styles.textIntoImage}>
                            <Text
                                style={styles.title}
                                numberOfLines={1}>
                                {title}
                            </Text>
                            <View style={styles.hours}>
                                <Text
                                    style={styles.hour}
                                    numberOfLines={1}>
                                    {
                                        hours.map((hour, i) => {
                                            const date = new Date(hour)
                                            const hourFormated = date.getHours()
                                            const minutesFormated = date.getHours()
                                            const time = `${hourFormated}:${minutesFormated}   `
                                            return time
                                        })
                                    }
                                </Text>
                            </View>
                        </View>
                    </Image>
                </View>
            </TouchableOpacity>
        )
    }
}

const OPACITY = 0.75

export default Movie
