import { StyleSheet, Dimensions } from 'react-native'

const { width, height } = Dimensions.get('window')
// Enable this if you have app-wide application styles
// import { ApplicationStyles } from '../../Themes/'

export default StyleSheet.create({
  // Merge in the screen styles from application styles
  // ...ApplicationStyles.screen,
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'flex-end',
    alignItems: 'center'
    // flex: 1
  },
  map: {
    // For Android :/
    // position: 'absolute',
    // top: 0,
    // left: 0,
    // right: 0,
    // bottom: 0
    ...StyleSheet.absoluteFillObject
    // width: width,
    // height: height
  },
  markerContent: {

  },
  // bottom view
  buttonContainer: {
    flexDirection: 'row',
    height: 100,
    // marginVertical: 20,
    // backgroundColor: 'transparent'
    backgroundColor: 'white'
  },
  bubble: {
    flex: 1,
    backgroundColor: 'rgba(255,255,255,0.7)',
    paddingHorizontal: 18,
    paddingVertical: 12
    // borderRadius: 20
  }
})
