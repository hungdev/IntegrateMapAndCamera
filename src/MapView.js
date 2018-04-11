
import React from 'react'
import { View, TouchableOpacity, Text, Dimensions, Image } from 'react-native'
import MapView, { Callout } from 'react-native-maps'
import MapCallout from './MapCallout'
import styles from './style/MapViewStyles'
var {height, width} = Dimensions.get('window')
// import MCIcons from 'react-native-vector-icons/MaterialCommunityIcons'
// import Modal from 'react-native-modal'
// import { Metrics } from '../../themes'

// Generate this MapHelpers file with `ignite generate map-utilities`
// You must have Ramda as a dev dependency to use this.
// import { calculateRegion } from '../Lib/MapHelpers'

/* ***********************************************************
* IMPORTANT!!! Before you get started, if you are going to support Android,
* PLEASE generate your own API key and add it to android/app/src/main/AndroidManifest.xml
* https://console.developers.google.com/apis/credentials
* Also, you'll need to enable Google Maps Android API for your project:
* https://console.developers.google.com/apis/api/maps_android_backend/
*************************************************************/

class MapScreen extends React.Component {
  constructor (props) {
    super(props)
    const locations = [
      { title: 'Location A', latitude: 37.78825, longitude: -122.4324 },
      { title: 'Location B', latitude: 37.75825, longitude: -122.4624 },
      { title: 'Location C', latitude: 37.73629, longitude: -122.4834 },
      { title: 'Location D', latitude: 37.72835, longitude: -122.3744 },
      { title: 'Location E', latitude: 37.73845, longitude: -122.3654 },
      { title: 'Location F', latitude: 37.74855, longitude: -122.4564 },
      { title: 'Location BG', latitude: 37.77865, longitude: -122.43674 }
    ]
    /* ***********************************************************
    * STEP 2
    * Set your initial region either by dynamically calculating from a list of locations (as below)
    * or as a fixed point, eg: { latitude: 123, longitude: 123, latitudeDelta: 0.1, longitudeDelta: 0.1}
    * You can generate a handy `calculateRegion` function with
    * `ignite generate map-utilities`
    *************************************************************/
    // const region = calculateRegion(locations, { latPadding: 0.05, longPadding: 0.05 })
    const region = {
      latitude: 37.78825,
      longitude: -122.4324,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421
    }
    this.state = {
      region: {
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421
      },
      locations,
      showUserLocation: true,
      isShowBottom: false,
      hackHeight: height
    }
    this.renderMapMarkers = this.renderMapMarkers.bind(this)
    this.onRegionChange = this.onRegionChange.bind(this)
  }

  componentWillMount () {
    setTimeout(() => this.setState({ hackHeight: height - 60 }), 500)
    this.getCurrentLocation()
    // setTimeout(() => this.setState({ hackHeight: height - Metrics.navBarHeight }), 1000)
  }

  getCurrentLocation () {
    const { region } = this.state
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const region = {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01
        }
        this.setRegion(region)
      },
      (error) => this.setState({ error: error.message }),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
    )
  }

  setRegion (region) {
    setTimeout(() => this.refs.mapView.animateToRegion(region), 10)
    // this.setState({ region });
  }

  componentWillReceiveProps (newProps) {
    /* ***********************************************************
    * STEP 3
    * If you wish to recenter the map on new locations any time the
    * props change, do something like this:
    *************************************************************/
    // this.setState({
    //   region: calculateRegion(newProps.locations, { latPadding: 0.1, longPadding: 0.1 })
    // })
  }

  onRegionChange (newRegion) {
    /* ***********************************************************
    * STEP 4
    * If you wish to fetch new locations when the user changes the
    * currently visible region, do something like this:
    *************************************************************/
    // const searchRegion = {
    //   ne_lat: newRegion.latitude + newRegion.latitudeDelta / 2,
    //   ne_long: newRegion.longitude + newRegion.longitudeDelta / 2,
    //   sw_lat: newRegion.latitude - newRegion.latitudeDelta / 2,
    //   sw_long: newRegion.longitude - newRegion.longitudeDelta / 2
    // }
    // Fetch new data...
  }

  calloutPress (location) {
    alert('1')
    console.tron.log('location') // Reactotron
    console.tron.log(location) // Reactotron
  }

  renderMapMarkers (location) {
    let rand = Math.floor(Math.random() * 100) + 1

    return (
      <MapView.Marker
        key={location.title}
        onPress={() => this.setState({ isShowBottom: true, rand })}
        coordinate={{ latitude: location.latitude, longitude: location.longitude }}
      >
        <TouchableOpacity style={styles.markerContent}>
          <Image source={require('./marker.png')} style={{height: 30, width: 30}} />
        </TouchableOpacity>
        <Callout>
          <MapCallout location={location} onPress={() => this.calloutPress()} />
        </Callout>
      </MapView.Marker>
    )
  }

  onPressMap () {
    this.setState({ isShowBottom: false })
  }

  render () {
    const { isShowBottom } = this.state
    return (
      <View style={[styles.container, { height: this.state.hackHeight }]}>
        <MapView
          ref='mapView'
          onPress={() => this.onPressMap()}
          style={styles.map}
          initialRegion={this.state.region}
          onRegionChangeComplete={this.onRegionChange}
          showsUserLocation={this.state.showUserLocation}
        >
          {this.state.locations.map((location) => this.renderMapMarkers(location))}
        </MapView>
        {
          isShowBottom ? (
            <View style={styles.buttonContainer}>
              <View style={styles.bubble}>
                <Text>Tòa Nhà keangNam</Text>
                <Text>Tap on markers to see different callouts {this.state.rand}</Text>
              </View>
            </View>
          ) : null
        }
      </View>
    )
  }
}

export default MapScreen
