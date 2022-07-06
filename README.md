# Ancubic Kobra Dark UI
A dark and improved UI for the Anycubic Kobra 3d printer

### Disclaimer
I am not responsible for any damage or malfunction caused to your printer because of those files. Any modding made to your printer is made at your own risk, this includes any damage that could happen in real life.

### Description
I happened to use the printer quite often in the dark and the default white UI was occasionally killing my soul so I decided to make this improved dark UI. It provides better translations, more explicit buttons and much more...

### Features
- Brand new UI look with a dark theme
- Starting animation shortened to remove the fading to white
- Improved buttons placements and size (bigger buttons for those who were too small and hard to tap)
- Improved translations for less ambiguity
- Much better image compression for less artifacts (The default UI was really bad)

### Known issues
- The file selection menu text becomes blue after being deselected instead of white
- The number input page input text is blue instead of white
- The UI is only available in english, the language button was disabled

### Other things to know
I am not sure if providing all the information to make your own modded UI is a good idea, for now, if you really want to you can contact me and I will give you the key elements to make your own.

# How to install
### Updating your printer screen to the latest version
1. Go to your printer -> Settings -> About -> UI Version -> If you're on Anycubic_20211220 you can skip to installing the modded firmware
2. Head on to the official page of the Anycubic Kobra (https://www.anycubic.com/products/kobra)
3. Scroll down and download the Firmware V2.7.9 (Do NOT follow this procedure if the firmware is not this exact version as I don't know the consequences of a mismatching firmware)
4. Follow the instructions in the Read Me.txt of their file
5. If the installation succeed you should see `SD card Process... END !` at the top, you can then turn off the printer and remove the SD card

 ### Installing the modded UI firmware
 1. Download the latest release in the release tab (https://github.com/jojos38/ancubic-kobra-dark-ui/releases)
 2. Unzip the DWIN_SET folder at the root of your SD card, do not put anything else but this folder, if you had the old folder from the official firmware, **remove it before**
 3. Turn off your printer and put the SD card
 4. Turn on your printer and wait until you see `SD card Process... END !` on the second line, do NOT turn off the printer before this line appears. The process shoudn't take more than 5 minutes unless your SD card is broken or very slow
 5. Make sure the number next to .BIN Files shows `003` and the number next to .ICL Files `001`
 6. Turn off your printer, remove the SD card
 7. Done, you can turn it on
 
 # FAQ
 ### Can I revert to the old version if I don't like it?
 Yes you can, just follow the steps to update the screen firmware to the latest version above
 
 ### Are there any risk in doing that?
 I have no idea if updating the screen firmware by itself is risky or not, maybe turning off the printer while it's updating could brick it, I don't know.
 That being said, the potentials risks of using the custom UI itself could be that I did something wrong causing the printer to not behave as expected. You should always keep that in mind when installing this UI and read the disclaimer at the beginning.
 
 ### Can I modify your files to make my own version?
 Yes you can, but please credit me if you publish it (unless you changed everything of course)
 To use my files, simply change the HTML code and execute index.js to generate all the .BMP files automatically.
 You need to at least know how to use HTML and CSS in order to make your own version from my files.
 Please note that I made all of this very quickly, I know the code is bad.
 
 ### I made my own version, I have the .BMP files, how do I go from that to a usable .bin and .icl files?
 Please refer to `Other things to know`
