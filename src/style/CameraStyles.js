import { StyleSheet, Dimensions } from 'react-native'
const { height, width } = Dimensions.get('window')

export default StyleSheet.create({
  // ...ApplicationStyles.screen,
  tabBarScanTable: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(255,255,255,0.5)',
    height: 49
  },

  container: {
    flex: 1,
    backgroundColor: 'transparent'
  },
  preview: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 49
  },
  cameraContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  scanFrame: {
    width: width * 0.75,
    height: width * 0.75
    // alignItems: 'center',
    // justifyContent: 'center'
  },
  line: {
    width: width * 0.75 - 2,
    height: 2,
    backgroundColor: 'red',
    alignSelf: 'center'
  },
  box: {
    width: width * 0.70,
    height: width * 0.70,
    backgroundColor: 'transparent',
    borderWidth: 3,
    borderColor: 'rgba(255,255,255,0.5)'
  },
  cameraActions: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 20,
    backgroundColor: 'transparent',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  icon: {
    backgroundColor: 'transparent'
  },
  button: {
    width: 35,
    height: 35,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.8)',
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    borderRadius: 17,
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonSelected: {
    width: 35,
    height: 35,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.8)',
    backgroundColor: 'rgba(255,255,255,0.5)',
    borderRadius: 17,
    alignItems: 'center',
    justifyContent: 'center'
  },
  actionLeft: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  btnHelp: {
    marginLeft: 20
  }

})
