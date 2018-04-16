install google map  first. after that edit node module like this comment: 
```
https://github.com/react-community/react-native-maps/issues/2152#issuecomment-377842731
```
install as normal

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
