import { StyleSheet } from 'react-native';
import myTheme        from '../../themes/base-theme';

module.exports = StyleSheet.create({
  tab: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 5,
    backgroundColor: myTheme.light
  },
  tabs: {
    height: 50,
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderWidth: 1,
    borderTopWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    backgroundColor: myTheme.light,
  },
  tabsShadow: {
    backgroundColor: myTheme.light,
    shadowColor: myTheme.shadowColor,
    shadowOpacity: 1,
    shadowRadius: 5,
    shadowOffset: {
      height: 5,
      width: 5
    }
  },
  tabUnderlineStyle: {
    position: 'absolute',
    height: 4,
    backgroundColor: myTheme.primary,
    top: 0
  },
	tabName: {
		fontSize: 10,
    paddingLeft: 5,
    paddingRight: 5,
    paddingTop: 2,
    textAlign: 'center'
	}
});
