import React from 'react';
import { Image, StatusBar, StyleSheet, TouchableOpacity, View, ImageBackground, Animated } from 'react-native';
import styles from './style/CameraStyles'
import Camera from 'react-native-camera';




export default class Example extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      torchMode: false,
      cameraType: 'back',
      linePosition: new Animated.Value(0)
    }
  }
  
  lineAnimated = () => {
    this.state.linePosition.setValue(0)

    Animated.timing(this.state.linePosition, {
      toValue: Metrics.screenWidth * 0.75 - 2,
      duration: 5000,
      easing: Easing.linear
    }).start(() => {
      Animated.timing(this.state.linePosition, {
        toValue: 0,
        duration: 5000,
        easing: Easing.linear
      }).start(() => {
        this.lineAnimated()
      })
    })
  }
  _help () {
    // this.scanTable('58f9cd3ace57b745b0bbb432')
    alert('comming soon!')
  }

  barCodeReceived(result) {
    alert(JSON.stringify(result))
    // console.log(result)
    // if (!this.state.isChecking) {
    //   try {
    //     const code = JSON.parse(result.data)
    //     if (__DEV__) console.tron.log(code)
    //     if (code.tableId) {
    //       Vibration.vibrate()
    //       this.scanTable(code.tableId)
    //     } else {
    //       Alert.alert(I18n.t('invalidTable'))
    //     }
    //   } catch (e) {
    //     if (__DEV__) console.tron.log(e)
    //     return false
    //   }
    // }
  }

  _renderCamera () {
    const { camera } = this.props
    const { torchMode } = this.state
    const flash = torchMode && camera ? 'on' : 'off'
    return (
      <Camera
        ref={(cam) => {
          this.camera = cam
        }}
        type={this.state.cameraType}
        torchMode={flash}
        style={styles.preview}
        aspect={Camera.constants.Aspect.fill}
        onBarCodeRead={(result) => this.barCodeReceived(result)}
      >
        <View style={styles.cameraContainer}>
        <ImageBackground source={require('./assets/scan-frame.png')} style={styles.scanFrame}>
            <Animated.View style={[styles.line, { transform: [{ translateY: this.state.linePosition }] }]} />
          </ImageBackground>
          {/* <View style={styles.cameraActions}>
            <View style={styles.actionLeft}>
              <TouchableOpacity onPress={() => this.setState({ torchMode: !torchMode })} style={torchMode ? styles.buttonSelected : styles.button}>
                <Entypo name='light-up' color={Colors.snow} size={16} style={styles.icon} />
              </TouchableOpacity>
            </View>
            <TouchableOpacity onPress={() => this._help()} style={styles.button}>
              <Entypo name='help' color={Colors.snow} size={16} style={styles.icon} />
            </TouchableOpacity>
          </View> */}
        </View>
      </Camera>
    )
  }

  render () {
    const { isScanning, isGetVenue } = this.state
    return (
      <View style={styles.container}>
        {this._renderCamera()}
        <View style={[styles.tabBarScanTable]} />
      </View>
    )
  }
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   preview: {
//     flex: 1,
//     justifyContent: 'flex-end',
//     alignItems: 'center'
//   },
//   overlay: {
//     position: 'absolute',
//     padding: 16,
//     right: 0,
//     left: 0,
//     alignItems: 'center',
//   },
//   topOverlay: {
//     top: 0,
//     flex: 1,
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//   },
//   bottomOverlay: {
//     bottom: 0,
//     backgroundColor: 'rgba(0,0,0,0.4)',
//     flexDirection: 'row',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   captureButton: {
//     padding: 15,
//     backgroundColor: 'white',
//     borderRadius: 40,
//   },
//   typeButton: {
//     padding: 5,
//   },
//   flashButton: {
//     padding: 5,
//   },
//   buttonsSpace: {
//     width: 10,
//   },
// });