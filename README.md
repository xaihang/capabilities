# A Tour of Web Capabilities

## What's a capability?
- ability of a web browser or web app to perform a specific task or function using typically a built in API
- progressive enchancement 

Max's indept courses:
https://frontendmasters.com/courses/background-javascript/
https://frontendmasters.com/courses/web-storage-apis/
https://frontendmasters.com/courses/web-auth-apis/ 
https://frontendmasters.com/courses/pwas/   

### capabilities by maturity
- green  100% mature
- light-green, 99% 
- yellow, not yet mature
- red, not secure, cannot be use
- user agent in chrome for IOS

## Chrome Origin Trials 
- sign up and token will be given; test real user who are in your website

## resources
[web.dev](web.dev) 
[caniuse.com](caniuse.com)
[developer.mozilla.org](developer.mozilla.org)
[webkit.org/blog](webkit.org/blog)
[chromestatus.com](chromestatus.com)

## basic capabilities
- fetch 
- web workers
- web assembly
- web performance apis
- network info
- device memory (ram)
- webOTP (one time password)
- web crypto
- web storage apis - frontend master course avail 
- ui capabilties 
- PWAs - build progressive web app (course avail on frontend )
- background capabilities == web push and notifications (js in the bg course avail)



## permissions and security
to enable some permissioms you define a name and list of origins or the list can inlcude the special value list
* to dsiable some permissions you define a name and an empty list 
permissions-policy: `bluetooth=()`, `geolocation=()`

## Permissions API 
it let us query about current permission state. it's chaos! 
```js
const response = await navigator.permissions.query(
    {name: "geolocation"}
);
```
## Sensors 
There are different sensors on devices, mostly on mobile devices:
    * accelerometer, 3 axis
    * gyroscope 
    * magnetometer - commpass
    * proximity 
    * light sensor 

We have two ways to consume them:
    * old APIs - global DOM APIs
    * sensor API 

Classic sensors API - still available on all mobile devices; including iosa nd ipados. it's a set of event on the window object.

## Geolocation API
How does it work? 
* read user's location 
* provider-agnostic
* it needs user's permission
* it relies on the browser or operating system service
* works only in the foreground
* not suitable for geofencing or beacon-based location

TIPS:
* Chrome - console drawer for more features; 

## Touch Events
they work only with touch screens

## Web HID (human interface device)
- let us access devices connected to a user's computer via usb

## Speech Recognition API
- it allows us to listen for uer's voice and get a text transcript
- it works only after a user gesture and microphone permission

## Speech Synthesis API
we can make the web app speak in the standard speaker based on a text transcript

## Shape Detection 
detect things with the camera without actually opening it up
- barcode; enable by default 
- face detector;
- text detector (ocr); needs to he enable 

## Media Devices
itlet you open the camera and microphone 

## Advanced control camera 
- also known as camera PTZ (pan, tilt, zoom)
- it can be aused to adjustment

## AR, XR, Augmented Reality 
- we can use webxr to use vr/ar devices and then render content in webgl/webgpu
- we can use highlevel solution for augmented reality obj on the screen
- webxr, different apis are avail for:
    * devices avail
    * 3d space detection
    * pose
    * depth sensing
    * create vectors representing the movement of input control
    * AR quick look - it works only on iOS and iPadOS
    * Model Viewer - check modelviwer.dev 
    * Screen Wake Lock API - it can make our screen visible all the time, disabling lock from OS
    ```js
    wakeLock = await navigator.wakeLock.request();
    ```

## Web Bluetooth API
- only on chrome and base browser
- with this API we can:
    * scan BLE devices
    * scan servies avail
    * connect to these services - gap
    * send and recvd data
    * it's a low-level API
    * we need to manipulate binary data 

## Bluetooth API
we can connect to devices that we never connected before on that particular device
- web bluetooth / device info sample

## Web Audio API
- we can use the web audio API for
- low level; reciving and sending 
* ssocket, sonicSocket 
- using web audio for ultra sound newtworking 
- sonnicnet library

## Web  MIDI API
- low level API
- connect to music devices 
- avail on chrome and firefox
- send and recieve 

## Web Serial API
- build on top of existing serial protocol 
- sending and reciving data

## Web USB API
- another low level, 
- read and write data directly to and from USB devices, without the need for custom drivers or proprietary software.
- it requires user permission befow allowing web app

## vibration API
```js
window.navigator.vibrate(300);
window.navigator.vibrate([200,100, 200]);
```

## battery status API
it doesn't work on many browsers 

## Idle Detection 
to check if the user is still there or not - chat application 
```js
if (await idleDetector.requestPermission()=== "granted") {
    const idleDetector = new IdleDetector();

    idleDetector.addEventListener("change", () => {
        //... rest of code
    })
}
```

## Web NFC (Near Field Communication) API
we will need user's permission and then we will start scanning for NFC tags; mainly used on andriod
- access tap to pay
- tap to share, etc...
- we can access tags within 2-4 inches
- the current scope is limited to NDEF (NFC data exchange format): a lightweight binary mesg format
- NFC tag (serial number are unique) 
- activation by tab~scan

## OS integration API
- multi screen windowns
- windows controls ovelay; new feature - "MANIFEST"
* Web App Manifest can express our intentions 
- file handler 
- protocol handler 
- web share (can share file & recvd file)
```js
navigator.share({
    title: 'abc.dev',
    text: 'content for website ....',
    url: 'https://abc.dev',

})
```
- web share target 

## Contact Picker API
we can read contants from user's database, need to enable it manually

## fullscreen API
we can request one DOM element to enter fullscreen 
* on iphone it works only with <video> 
* Safari uses prefix 

## payment request API
- browser is the intermediary
- merchant (website)
- user
- payment processor
- apple pay js is also available

## get installed related apps API
- we start with the web app API

## Smart App Banner 
- meta tag 

## App Badging 
- alert the user that there is new content or pending tasks in our app

## App shortcuts API


