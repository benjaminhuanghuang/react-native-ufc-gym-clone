# Splash Screen in Expo
## Show splash screen
- https://docs.expo.io/versions/latest/guides/splash-screens.html

Expo provide splash support by adding 'splash' config under 'expo' field in app.json
```
{
  "expo": {
    "splash": {
      "image": "./assets/images/ufc-logo.png",
      "backgroundColor": "#D20A0A",
      "resizeMode": "contain"
    }
  }
}
```

## Control the splash screen
- https://docs.expo.io/versions/latest/sdk/splash-screen
You can control when the splash screen disappears by using the AppLoading component or SplashScreen module.


