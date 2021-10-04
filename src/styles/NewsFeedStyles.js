import {StyleSheet, Dimensions} from 'react-native';
const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;
export default StyleSheet.create({
  mainContainer: {flex: 1},
  carouselContainer: {
    height: windowHeight,
    width: windowWidth,
    backgroundColor: 'black',
    transform: [{scaleY: -1}],
    backgroundColor: 'white',
  },
  imageStyles: {
    width: windowWidth,
    resizeMode: 'cover',
    height: '45%',
  },
  newsTitle: {
    fontSize: 22,
    paddingBottom: 10,
    fontFamily: 'Roboto-Medium',
  },
  newsDescription: {
    fontSize: 16,
    fontFamily: 'Roboto-Light',
    lineHeight: 22,
  },
  authorNameContainer: {
    paddingLeft: 20,
  },
  authorText: {
    fontSize: 10,
    fontFamily: 'Roboto-Thin',
  },
  imgBackgroundStyles: {
    height: 60,
    width: windowWidth,
    position: 'absolute',
    bottom: 0,
    justifyContent: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#d7be69',
  },
  content: {
    color: 'white',
  },
  readMoreText: {
    fontSize: 17,
    fontWeight: 'bold',
    color: 'white',
  },
  carousel: {
    flex: 1,
    transform: [{scaleY: -1}],
  },
  titleAndDescriptionContainer: {
    paddingHorizontal: 20,
    paddingTop: 20,
  },
});
