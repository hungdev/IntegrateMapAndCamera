install google map  first. after that edit node module like this comment: 
```
https://github.com/react-community/react-native-maps/issues/2152#issuecomment-377842731
```

node_modules/react-native-maps/lib/android/build.gradle and changing

these lines
```
  compileOnly "com.facebook.react:react-native:+"
  implementation "com.google.android.gms:play-services-base:$googlePlayServicesVersion"
  implementation "com.google.android.gms:play-services-maps:$googlePlayServicesVersion"
  implementation "com.google.maps.android:android-maps-utils:$androidMapsUtilsVersion"
```
to
```
  provided "com.facebook.react:react-native:+"
  compile "com.google.android.gms:play-services-base:$googlePlayServicesVersion"
  compile "com.google.android.gms:play-services-maps:$googlePlayServicesVersion"
  compile "com.google.maps.android:android-maps-utils:$androidMapsUtilsVersion"
```
  
install as normal

/android/app/build.gradle:

change : implementation project(':react-native-maps') to compile project(':react-native-maps')

like this:

https://github.com/hungdev/IntegrateMapAndCamera/blob/master/android/app/build.gradle#L141

note:
add some lines in android/build.gradle

```
        maven {
            url 'https://maven.google.com'
            }
        maven { url "https://jitpack.io" }
            }
```
after that, install camera
add some lines in android/app/build.gradle

```
    compile (project(':react-native-camera')) {
    exclude group: "com.google.android.gms"
    }
    compile ("com.google.android.gms:play-services-vision:10.2.0") {
        force = true;
    }
```

look at my commit to understand more.

https://github.com/hungdev/IntegrateMapAndCamera/commits/master
