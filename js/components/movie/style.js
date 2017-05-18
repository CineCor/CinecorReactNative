import { StyleSheet } from 'react-native';
import myTheme        from '../../themes/base-theme';

module.exports = StyleSheet.create({
	container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  containerList: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: myTheme.light,
    height: 100
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    height: 100,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  textIntoImage: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'rgba(120,120,120,0.3)',
    padding: 20
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
    textAlign: 'left',
    color: myTheme.light
  },
  hours: {
    flexDirection: 'row'
  },
  hour: {
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'left',
    color: myTheme.light
  }
});
