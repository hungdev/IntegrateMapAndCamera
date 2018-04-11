import React from 'react'
import { Text, TouchableOpacity, Image } from 'react-native'
import { Callout } from 'react-native-maps'
import Styles from './style/MapCalloutStyles'

export default class MapScreenCallout extends React.Component {
  constructor (props) {
    super(props)
    this.onPress = this.props.onPress.bind(this, this.props.location)
  }

  render () {
    /* ***********************************************************
    * Customize the appearance of the callout that opens when the user interacts with a marker.
    * Note: if you don't want your callout surrounded by the default tooltip, pass `tooltip={true}` to `Callout`
    *************************************************************/
    const { location } = this.props
    return (
      <Callout style={Styles.callout} >
        <TouchableOpacity onPress={this.onPress}>
          <Text>{location.title}</Text>
          <Image source={{uri: 'http://i.stack.imgur.com/WCveg.jpg'}}
            style={{height: '90%', width: '90%'}} />
        </TouchableOpacity>
      </Callout>
    )
  }
}
