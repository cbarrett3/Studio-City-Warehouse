### Local Development Setup with Android Studio Device Emulator ###

#### 1) Start Metro

   run ``npx react-native start`` in a new terminal

#### 2) Start the Android Emulator

   open Android Studio and select the play button on a device

#### 3) Start the React Native Project from VS Code

   run ``npx react-native run-android`` in a new terminal

#### 4) To Open DevMenu in Android Emulator on Windows Computer

   run ``adb shell input keyevent 82`` in a new terminal

#### 5) Remote JS Debugging (found wihtin the devMenu)
   http://localhost:8081/debugger-ui/

#### 6) To Open React-Dev-Tools

   run ``react-devtools`` in a new terminal

#### 7) To Display Console Logs
   run ``npx react-native log-android`` in a new terminal

#### 8) Tailwind (not sure if this is necessary every time, yet)
   run ``npm run dev:tailwind`` in a new terminal to build tailwind in watch mode



#### AWS Amplify Backend 

###### amplify status
will show you what you've added already and if it's locally configured or deployed
###### amplify add <category> (api, login, etc)
will allow you to add features like user login or a backend API
###### amplify push
will build all your local backend resources and provision it in the cloud
###### amplify console
will open the Amplify Console and view your project status
###### amplify publish
will build all your local backend and frontend resources (if you have hosting category added) and provision it in the cloud