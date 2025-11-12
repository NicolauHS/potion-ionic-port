# Building APK for Android

Your app is now ready to build for Android! Follow these steps:

## Prerequisites

You need to have installed:

1. **Java Development Kit (JDK) 17 or higher**
2. **Android Studio** (recommended) OR **Android SDK Command Line Tools**
3. **Gradle** (usually comes with Android Studio)

## Option 1: Build with Android Studio (Recommended)

1. Open Android Studio
2. Select "Open an existing Android Studio project"
3. Navigate to: `/home/projetos/my-ionic-app/android`
4. Wait for Gradle to sync
5. Go to **Build → Build Bundle(s) / APK(s) → Build APK(s)**
6. Once built, click "locate" in the notification to find your APK
7. The APK will be in: `android/app/build/outputs/apk/debug/app-debug.apk`

## Option 2: Build from Command Line

### Make sure you have the prerequisites:

Check if you have the Android SDK:

```bash
echo $ANDROID_HOME
```

If not set, you need to install Android Studio or Android Command Line Tools.

### Build the APK:

```bash
cd /home/projetos/my-ionic-app
npm run build
npx cap sync android
cd android
./gradlew assembleDebug
```

The APK will be created at:

```
android/app/build/outputs/apk/debug/app-debug.apk
```

## Option 3: Open in Android Studio via Capacitor CLI

```bash
cd /home/projetos/my-ionic-app
npx cap open android
```

This will open the project directly in Android Studio.

## Installing APK on Your Smartphone

### Method 1: USB Connection (ADB)

1. Enable **Developer Options** on your phone:
   - Go to Settings → About Phone
   - Tap "Build Number" 7 times
2. Enable **USB Debugging**:

   - Go to Settings → Developer Options
   - Enable "USB Debugging"

3. Connect your phone via USB and run:

```bash
cd /home/projetos/my-ionic-app/android
./gradlew installDebug
```

Or use ADB directly:

```bash
adb install android/app/build/outputs/apk/debug/app-debug.apk
```

### Method 2: Direct File Transfer

1. Copy `app-debug.apk` to your phone (via USB, cloud, email, etc.)
2. On your phone, navigate to the APK file
3. Tap to install (you may need to allow "Install from Unknown Sources")

## Building a Release APK (For Production)

For a production-ready APK, you'll need to:

1. Generate a signing key
2. Configure signing in `android/app/build.gradle`
3. Build with:

```bash
cd android
./gradlew assembleRelease
```

See the official documentation for more details:
https://capacitorjs.com/docs/android

## Troubleshooting

- **Gradle errors**: Make sure you have JDK 17+ installed
- **SDK not found**: Set ANDROID_HOME environment variable
- **Build fails**: Try running `./gradlew clean` in the android folder first

## Important Notes

- The default `app-debug.apk` is for testing only
- You'll need to sign your app for production/Play Store
- Update `capacitor.config.ts` to change app name and ID
- Remember to rebuild (`npm run build`) after making changes to your web app
