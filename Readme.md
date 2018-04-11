cài google map trước
sửa lại node module của nó
https://github.com/react-community/react-native-maps/issues/2152
map cài như bt
thêm ở android/build.gradle

```
        maven {
            url 'https://maven.google.com'
            }
        maven { url "https://jitpack.io" }
            }
```
sau đó cài camera
thêm dòng này ở android/app/build.gradle

```
    compile (project(':react-native-camera')) {
    exclude group: "com.google.android.gms"
    }
    compile ("com.google.android.gms:play-services-vision:10.2.0") {
        force = true;
    }
```

xem commit để rõ hơn