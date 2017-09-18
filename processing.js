PROCESSING 3.3.6 (REV 0263) - 4 September 2017

A collection of mostly minor bug fixes that have accreted 
since the last release back in June.


[ contributions, we love 'em ]

+ Add Italian translation
  httpsgithub.comprocessingprocessingpull5169
  
+ Wrong tab for missing brace
  httpsgithub.comprocessingprocessingpull5180
  httpsgithub.comprocessingprocessingissues5165

+ Fix typo in German translation
  httpsgithub.comprocessingprocessingpull5195
  httpsgithub.comprocessingprocessingissues5187
  
+ Movie Maker only works once
  httpsgithub.comprocessingprocessingissues5168
  httpsgithub.comprocessingprocessingpull5230
  
+ Add more build products to linux.gitignore
  httpsgithub.comprocessingprocessingpull5229

+ Add issue template to the repo
  httpsgithub.comprocessingprocessingissues5239
  httpsgithub.comprocessingprocessingpull5245

+ Add workaround for window size = 0 crash
  httpsgithub.comprocessingprocessingpull5234
  httpsgithub.comprocessingprocessingissues5052


[ jakub, we love him ]

+ Fix commentuncomment adding slashes at wrong indent
  httpsgithub.comprocessingprocessingissues5171
  httpsgithub.comprocessingprocessingpull5185
  
+ Add JavaFX runtime to error checker class path
  httpsgithub.comprocessingprocessingpull5186


[ gottfried, with gusto ]

+ Ironing out the new shell() command
  httpsgithub.comprocessingprocessingpull5082

+ Workaround issues with August 2017 release of Raspbian
  httpsgithub.comprocessingprocessingpull5222

+ Fix bugs in line vert shader
  httpsgithub.comprocessingprocessingpull5184
  httpsgithub.comprocessingprocessingissues5181
  httpsgithub.comprocessingprocessingissues5182
  httpsgithub.comprocessingprocessingissues5183
  httpsgithub.comprocessingprocessingissues5194


[ behind the scenes ]

+ Updated to Java 8u144

+ Fixed issue with call to remove value instead of key in mode contrib hash
  (this was only in the code used by the command line mode loader)


. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .


PROCESSING 3.3.5 (REV 0262) - 23 June 2017

Fixes for a couple problems introduced in the last release.


[ everything that went bad ] 

+ Console window was only remembering two lines of text 
  because of a name collision in the preferences handling.
  httpsgithub.comprocessingprocessingissues5110
  
+ Something went wrong with the 64-bit Linux release
  libjli.so cannot open shared object file No such file or directory 
  httpsgithub.comprocessingprocessingissues5111

+ Could not parse -1 for --display message on some Windows machines
  httpsgithub.comprocessingprocessingissues5118
  httpsgithub.comprocessingprocessingpull5141


[ some new things hopefully going good ]

+ Fix a NullPointerException that showed up with textWidth() and OpenGL
  httpsgithub.comprocessingprocessingissues5137
  httpsgithub.comprocessingprocessingpull5138

+ Per request, use native file choosers by default on Linux. I'm told
  that the default Linux file choosers have grown up in the last decade. 
  I'm trusting the person who is making that claim and making them default.
  httpsgithub.comprocessingprocessingissues5122
  To get the old behavior in the Editor, change preferences.txt to say
  chooser.files.native = false
  Or in your code, add this line
  useNativeSelect = false;


. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .


PROCESSING 3.3.4 (REV 0261) - 3 June 2017

Several useful bug fixes and improvements. Some big, many small.


[ fixes you'll notice ]

+ Exported applications no longer report as Damaged on macOS Sierra
  httpsgithub.comprocessingprocessingissues4705

+ Prevent the console from freezing up when print() and println()
  are used to print thousands of lines of output.
  httpsgithub.comprocessingprocessingpull4935
  httpsgithub.comprocessingprocessingissues4825

+ Apple broke key repeat in macOS Sierra, here's how to fix it
  httpsgithub.comprocessingprocessingwikiTroubleshooting#key-repeat-on-macos-sierra

+ Fix the keyPressed variable when multiple keys are pressed
  httpsgithub.comprocessingprocessingpull5050
  httpsgithub.comprocessingprocessingissues5049


[ some you probably won't ]

+ Clarify wording of error message regarding sketchbook location
  httpsgithub.comprocessingprocessingissues4942

+ Remove 'run sketches on display' error text that showed up even 
  when using Processing for the first time

+ Implement alternate 'ant app' target for macOS application debugging

+ Added a null check to sketch loading to prevent some issues such as
  httpsgithub.comprocessingprocessingissues4980

+ Handle edge case for set() being called with a 2D vector, on a 3D vector
  httpsgithub.comprocessingprocessingissues5092
  

[ incomplete additions ]

+ Add exec() with StringList options (documentation coming soon)

+ Begin work on a shell() function to do exec() via a shell


[ other contributions - thank you! ] 
  
+ Add installuninstall scripts for Linux and correct mime types for the PDE 
  httpsgithub.comprocessingprocessingpull5106

+ IO library updates for ARM
  httpsgithub.comprocessingprocessingpull5044
  
+ Check $SUDO_USER on Linux for locating the sketchbook folder
  httpsgithub.comprocessingprocessingpull5055
  httpsgithub.comprocessingprocessingpull5054

+ Debugging the files changed detector in the Editor
  httpsgithub.comprocessingprocessingissues4713
  httpsgithub.comprocessingprocessingpull5021
  httpsgithub.comprocessingprocessingpull4849

+ Still more updates to the change detector
  httpsgithub.comprocessingprocessingpull5075
  
+ Warn user to use L when creating a number constant that won't fit into an int
  httpsgithub.comprocessingprocessingissues4878
  httpsgithub.comprocessingprocessingpull5077


. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .


PROCESSING 3.3.3 (REV 0260) - 2 May 2017

Happy birthday to my Dad and baby brother!

Let's celebrate with a couple of bug fixes

+ keyPressed not returning false once a key is released
  httpsgithub.comprocessingprocessingissues5033

+ Image tint() was broken in 3.3.x
  httpsgithub.comprocessingprocessingissues5040
  httpsgithub.comprocessingprocessingpull5042
  
+ Deal with loadBytes() regressions introduced by their rewrite
  (was breaking p5jsMode because of its use of loadBytes(File)


. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .


PROCESSING 3.3.2 (REV 0259) - 25 April 2017

Broke a few eggs with that last omelette, and left a little eggshell behind.
This version takes care of a handful of revisions.

[ bug fixes, mostly for regressions in 3.3.1 ]

+ ArrayIndexOutOfBoundsException when using tint() or loadFont()
  httpsgithub.comprocessingprocessingissues5028
  httpsgithub.comprocessingprocessingpull5029
  
+ createInput() wasn't returning null for files that were not found
  httpsgithub.comprocessingprocessingissues5026

+ Assigning Pixels Vertically Flipped in P2D
  httpsgithub.comprocessingprocessingissues5013


[ useful updates, that hopefully aren't regressions ]

+ Improve loadBytes() performance 
  httpsgithub.comprocessingprocessingpull5027

+ Add (far) more efficient file loading for loadBytes(File)

+ Add loadBytes(URL) variant that uses content length header for array size

+ keyPressed is false if one key is released while multiple keys are pressed
  httpsgithub.comprocessingprocessingissues4993


. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .


PROCESSING 3.3.1 (REV 0258) - 23 April 2017

With Casey and Ben together in Boston for a conference, we managed to
wrap up a few things and prepare a new release. Highlights include

+ The UI now supports Arabic with a new translation provided by Omar Hommos

+ Several bug fixes have been implemented for high-res display support
  on Windows and Linux

+ Several updates from Gottfried for ARM devices like Raspberry Pi and CHIP

+ Lots of pixelDensity() and sketch scaling work has been developed by
  Jakub Valtar and is in the current release, though we've not yet
  activated these features entirely. Expect those in the 3.4 release.

And now on with the countdown


[ bug fixes ]

+ Fix gap between tab headers and text area at 125% and 150% scaling on Windows
  httpsgithub.comprocessingprocessingissues4902

+ Some line heights were wrong on hi-dpi displays
  httpsgithub.comprocessingprocessingissues4936
  httpsgithub.comprocessingprocessingissues5007

+ Fix small tooltip text on high-dpi screens
  httpsgithub.comprocessingprocessingissues4914
  
+ Ugly button images at 125% and 150% scaling on Windows
  httpsgithub.comprocessingprocessingissues4901
  httpsgithub.comprocessingprocessingpull4906

+ Get rid of error message when exporting sketches with the video library
  httpsgithub.comprocessingprocessingissues4971

+ Fix preprocessing of code with double backslash in string or char literal
  httpsgithub.comprocessingprocessingissues4903
  httpsgithub.comprocessingprocessingpull4907
  
+ Fix breakpoints in inner classes
  httpsgithub.comprocessingprocessingpull5008
  httpsgithub.comprocessingprocessingissues2946
  
+ Fix preprocessor skipping one char after a block comment
  httpsgithub.comprocessingprocessingissues4995
  httpsgithub.comprocessingprocessingpull4999
  
+ Synchronize input event processing
  httpsgithub.comprocessingprocessingpull4998
  
+ Scrub comments skip the second chracter in the escape sequence
  httpsgithub.comprocessingprocessingpull5019
  httpsgithub.comprocessingprocessingissues5016


[ additions & changes ]

+ Added Arabic translation
  httpsgithub.comprocessingprocessingpull4970

+ Added Jump to Declaration
  httpsgithub.comprocessingprocessingpull4707
  httpsgithub.comprocessingprocessingissues4668

+ Fix the JRE downloader and upgrade to Java 8 update 131

+ Add another warning for yet another a bad NVIDIA driver
  httpsgithub.comprocessingprocessingissues4997
  
+ Make the Error Table extend white to the bottom
  
+ Use built-in font for any non-Roman or CJK language


[ graphics & the core ]

+ Major work on window placement and pixel density by Jakub
  httpsgithub.comprocessingprocessingpull5011

+ Improve sum() functions in processing.data
  Add sum() to IntDict and FloatDict
  Add sumLong() to IntList, IntDict (to handle cases outside integer range)
  Add sumDouble() to FloatList, FloatDict (to handle outside float range)
  Throw exception when using sum() with numbers that are too large or small

+ createInput() and createOutput() now both use buffered streams by default
  createInputRaw() does not, however
  
+ Don't derive the font again if the size is unchanged
  httpsgithub.comprocessingprocessingissues4956
  
+ fix temporary file handling for saveBytes(), saveStream(), etc
  wasn't handling gzip output properly
  also could have problems w names under length 3


[ gottfried's arms ] 

+ Add support for 64-bit ARM boards
  httpsgithub.comprocessingprocessingpull5002
  
+ Hardware IO updates for ARM
  httpsgithub.comprocessingprocessingpull4931

+ Fix MeshTweening vertex shader
  httpsgithub.comprocessingprocessing-docsissues523
  httpsgithub.comprocessingprocessing-docspull524
  
+ ARM Allow Raspberry Pi's Mesa GL driver to use up to 8 lights
  httpsgithub.comprocessingprocessingpull4915
  ...and revert it back again
  httpsgithub.comprocessingprocessingpull4922
  
+ Retry with multisampling disabled if creating a framebuffer 
  fails because of INCOMPLETE_MULTISAMPLE
  httpsgithub.comprocessingprocessingpull4921

+ Report more error conditions in validateFramebuffer
  httpsgithub.comprocessingprocessingpull4920

+ Add more Raspberry Pi related fixes to JOGL
  httpsgithub.comprocessingprocessingpull4911

+ Unblock hardware-accelerated P3D on ARM Mali devices
  httpsgithub.comprocessingprocessingpull5014


. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .


PROCESSING 3.3 (REV 0257) - 12 February 2017

This release adds the ability to the scale the UI or high-resolution
(known as HiDPI) screens on Windows and Linux. Sketches don't scale yet,
but this will at least make the Editor and Contribution Manager usable
again on more recent Windows and Linux laptops.

Note the scaling feature is only meant to patch up problems on HiDPI
devices, it does not provide an all-purpose means for scaling UI elements
independent of the OS.

This release also attempts to fix several other Windows bugs, detailed
below. The unconfirmed fixes section is a handful of issues that I've
never been able to reproduce, but that should now be fixed. Please
confirm at the links listed to let me know if it's working.

This is release 3.3 instead of 3.2.5 due to the huge change to the PDE
for scaling, as well as minor API modifications (see below). 


[ big fixes ]

+ PDE was too small on high-res Windows and Linux machines. If you're
  having trouble with this, change the Interface scaling option in
  the Preferences window. On Windows, it will attempt to auto-detect. 
  httpsgithub.comprocessingprocessingissues2411
  httpsgithub.comprocessingprocessingissues4183


[ unconfirmed fixes ]

+ Visual artifacts on Windows 10 when using menus
  httpsgithub.comprocessingprocessingissues4700
  
+ Broken characters in the Welcome Page and the Contribution Manager
  httpsgithub.comprocessingprocessingissues4747

+ Add a dialog box to warn Windows users about NVIDIA driver problems
  httpsgithub.comprocessingprocessingissues4853

+ Blank window on startup where the Welcome screen should be
  httpsgithub.comprocessingprocessingissues3933


[ minor fixes ]

+ Prevent unnecessary 'file not found' errors in the console during Export


[ fixed earlier ]

+ Contribution Manager does not show all libraries until filter cleared
  httpsgithub.comprocessingprocessingissues4840


[ changes to core ]

+ StringDict(TableRow) constructor to create a dictionary from a table row

+ Allow lone double quotes in the midst of CSV strings. This improves
  compatibility with spreadsheets exported from Google Sheets. 

+ Return null (rather than NullPointerException) for PApplet.trim(null)

+ Make trim() work on column titles as well

+ Make Table.trim() also remove unused rows and columns. This will remove
  extra rows or columns at the beginning as well, since that's what trim()
  does to whitespace on strings.

+ Consume Unicode BOM (0xFEFF) in createReader() and Table parser

+ Return null for getString(), getJSONObject(), and getJSONArray()
  when key is not present, more in line w other API

+ Several fixes for memory leaks from jdf
  httpsgithub.comprocessingprocessingpull4862
  httpsgithub.comjdfprocessing.pyissues233
  httpsgithub.comprocessingprocessingpull4873


. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .


PROCESSING 3.2.4 (REV 0256) - 29 January 2017

Just getting in as many bug fixes as we can before the end of days.

The majority of these are from Jakub Valtar, plus a handful of other
contributors are noted below. Read all the way to the end for fun
new features.

  
[ the pde & the editor ]

+ Detect changes to 'hosts' file in case users modifyremove localhost.
  No sketch window would open after hitting Run if someone had monkeyed
  with their etchosts file.
  httpsgithub.comprocessingprocessingissues4738
  httpsgithub.comprocessingprocessingissues1868
  httpsgithub.comprocessingprocessingissues3123
  httpsgithub.comprocessingprocessingissues4735

+ Ctrl-J (for debugger) is inserting newline
  httpsgithub.comprocessingprocessingissues3830
  httpsgithub.comprocessingprocessingpull4806
  httpsgithub.comprocessingprocessingissues4804

+ Spaces not handled correctly in when installing processing-java on macOS
  httpsgithub.comprocessingprocessingissues4779

+ println(int(byte(245))) throwing error
  httpsgithub.comprocessingprocessingissues4652
  httpsgithub.comprocessingprocessingpull4744
  
+ 'web colors' next to each other fail to parse in certain situations
  httpsgithub.comprocessingprocessingissues4752
  httpsgithub.comprocessingprocessingpull4753
  
+ Pasting code from editor to empty editor produces Exception
  httpsgithub.comprocessingprocessingissues4522
  httpsgithub.comprocessingprocessingpull4761
  
+ possible infinite loop on modified externally
  httpsgithub.comprocessingprocessingissues3965
  httpsgithub.comprocessingprocessingpull4762
  
+ Report missing brace in correct tab, suppress other errors until fixed
  httpsgithub.comprocessingprocessingpull4777
  
+ Improvements to sketch launching and stopping
  httpsgithub.comprocessingprocessingpull4848

+ Syntax highlighting issues (fixed with #4761)
  httpsgithub.comprocessingprocessingissues4286
  
+ Sketchbook window wasn't updating when sketches added, renamed, etc
  httpsgithub.comprocessingprocessingissues2944
  httpsgithub.comprocessingprocessingpull4842


[ contribution manager ]

+ Set text style properly for Contribution Manager error message

+ Added the remove filter feature (Akarshit)
  httpsgithub.comprocessingprocessingpull3890

+ Several Contribution Manager fixes
  httpsgithub.comprocessingprocessingpull4844

+ Add missing equals() and hashCode() to Contribution
  httpsgithub.comprocessingprocessingpull4843

+ Contribution Manager does not show all libraries until filter cleared
  httpsgithub.comprocessingprocessingpull4843
  httpsgithub.comprocessingprocessingissues4840
  
+ Mode, requiring update, appears in Updates tab but not in Modes tab
  httpsgithub.comprocessingprocessingissues4822
  also fixed w httpsgithub.comprocessingprocessingpull4843


[ internal changes ]

+ Only require reference.zip to be present for build

+ Move the DEBUG flag into an external file or preferences.txt.
  Replace java.util.logging code with built-in logging.

+ Split GUI and non-GUI portions of console for earlier startup.
  (Otherwise System.errout not going to a file unless we have a GUI,
   which means we couldn't debug before the GUI shows up)
   
+ Fix JRE download failure during ant build due to Oracle change
  httpsgithub.comprocessingprocessingissues4823


[ the core ]

+ Write exec() documentation
  httpsgithub.comprocessingprocessingissues4740

+ XML fixes for getChild() producing valid XML. Add xmlns to
  elements procured from getChild(), and making sure newline
  is added after XML header when formatting.

+ Adding missing docs and keywords for TableRow
  httpsgithub.comprocessingprocessingpull4333
  
+ PShape in Java2D wasn't respecting 'kind'
  httpsgithub.comprocessingprocessingissues4826
  httpsgithub.comprocessingprocessingpull4834
  
+ Sketches still running in the background after closing
  httpsgithub.comprocessingprocessingissues4831
  (needed to allow JAVA2D to terminate when animation thread dies)
  httpsgithub.comprocessingprocessingpull4839


[ closing bugs in opengl ]

+ PShape array index out of bounds when using P3D 
  httpsgithub.comprocessingprocessingissues4773
  
+ Disable modelXYZ() in P2D because they don't exist in 2D
  httpsgithub.comprocessingprocessingissues4813
  
+ Fix typo in GLSL preprocessor
  httpsgithub.comprocessingprocessingissues4810
  httpsgithub.comprocessingprocessingpull4816
  
+ Keep Windows timer resolution high for OpenGL sketches.
  Prevents frame rate in OpenGL hovering around 30 instead of 60.
  httpsgithub.comprocessingprocessingpull4847
  httpsgithub.comprocessingprocessingissues4846


[ the jakubfx renderer ]

+ FX Prevent matrix stack overflow
  httpsgithub.comprocessingprocessingpull4799
  httpsgithub.comprocessingprocessingissues4206
  
+ FX Reset transform to identity before drawing background
  httpsgithub.comprocessingprocessingpull4795
  
+ FX Implement mouse wheel event
  httpsgithub.comprocessingprocessingissues4169
  httpsgithub.comprocessingprocessingpull4796
  
+ FX Fix curveVertex drawing all curves together as one long curve
  httpsgithub.comprocessingprocessingpull4800
  httpsgithub.comprocessingprocessingissues4382
  
+ FX Add exception handler which reports exceptions from user code
  httpsgithub.comprocessingprocessingpull4798
  httpsgithub.comprocessingprocessingissues4339
  
+ Unify mouse pressedreleased events across renderers
  httpsgithub.comprocessingprocessingissues4361
  httpsgithub.comprocessingprocessingpull4797


[ new features ]

+ Add listPaths(), listFiles()
  httpsgithub.comprocessingprocessingissues4622
  
+ Add increment() method that takes IntDict to merge another dictionary.
  Calling this increment() since it doesn't make sense in practice for
  the other dictionary types, even though it's technically an add().
  
+ Added Entry class for iterating StringDict, IntDict, FloatDict

+ Added XML.print() method (prints with indent of 2)


. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .


PROCESSING 3.2.3 (REV 0255) - 7 November 2016

Lots of fixes to the Contribution Manager and a couple OpenGL tweaks.


[ contributions manager ]

+ If prettyVersion isn't present, just use version number

+ Ensure that update.id is set before checking for contrib updates

+ Clicking Update button in contrib manager shows non-retina version of icon
  httpsgithub.comprocessingprocessingissues4715
  Other instances of the double-size icon found, should be fixed now

+ Fix the library reporting scripts on the server

+ Missing version number putting 'null' in the UI
  httpsgithub.comprocessingprocessing-docsissues478
  httpsgithub.comprocessingprocessingissues4696
  httpsgithub.comprocessingprocessingpull4712
  
+ Major clean-ups to the Contribution Manager code


[ contributions to the manager ]

+ Up-to-date status disappears after filter is removed (contributed)
  httpsgithub.comprocessingprocessingissues4084
  
+ Updates tab blank after adding, removing, updating a contribution
  httpsgithub.comprocessingprocessingissues4082
  httpsgithub.comprocessingprocessingissues4704
  
+ Fixes the removal of redundant contribution and update related issues
  httpsgithub.comprocessingprocessingpull4086


[ another fix ]

+ Warn user to restart browser when it hangs on macOS
  httpsgithub.comfathominfoprocessing-p5js-modeissues4


[ opengl improvements ]

+ Automatic detection of POINT and LINE shaders fails
  httpsgithub.comprocessingprocessingissues4725
  
+ Show warning when frameRate() less than 1 is called with P2D and P3D
  httpsgithub.comprocessingprocessingissues4716


. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .


PROCESSING 3.2.2 (REV 0254) - 30 October 2016

Lots of bug fixes.


[ fixes ] 

+ Find in reference for size() opens StringList.size()
  httpsgithub.comprocessingprocessingissues4224
  httpsgithub.comprocessingprocessingissues4655

+ Limit rollovers on EditorStatus to the text portion. Clicking the status
  area when a URL was showing was problematic because it's also the separator
  used to adjust the relative size of the two panels.

+ Switch to Java 8u111. Not using 8u112 because the build numbers are
  different depending on the platform, and no 112 fixes are known useful.

+ Errant Could not open the URL when clicking on error messages
  httpsgithub.comprocessingprocessingissues4695
  
+ Fix extensions handling in CFBundleDocument code from appbundler
  httpsgithub.comprocessingprocessingissues4615
  
+ Update launch4j to 3.9, fixing a problem with exported applications
  on Windows reporting This application requires a Java Runtime Environment
  1.8.0_74, when 1.8.0_101 or later were installed.
  httpsgithub.comprocessingprocessingissues4682

+ Minor String comparison fix for Tweak mode
  httpsgithub.comprocessingprocessingissues4670

+ Fix quoting problem in IntDict.toJSON()

+ Add getRenderer() to SurfaceInfo for Andres
  httpsgithub.comprocessingprocessingissues4441
  
+ Exceptions thrown in OpenGL apps when hitting the window's close box
  httpsgithub.comprocessingprocessingissues4690
  
+ Add getRowMap() function to Table

+ Go back to textMode(MODEL) is native font not available for textMode(SHAPE)
  httpsgithub.comprocessingprocessingissues4680
  
+ NPE thrown when using textMode(SHAPE) with a .vlw font
  httpsgithub.comprocessingprocessingissues4680
  
+ Add toJSON() method to the data classes (IntDict, FloatDict, StringDict,
  IntList, FloatList, and StringList). Returns an object of one of those
  six types as a JSON-formatted String. For something more like the old
  toString() behavior, use print().


[ gottfried's goodness ] 

+ Simplify font situation to make it possible to use vanilla JRE trees
  httpsgithub.comprocessingprocessingpull4639
  httpsgithub.comprocessingprocessingpull4641
  
+ Updates for ARM
  httpsgithub.comprocessingprocessingpull4640


[ andres can do anything ]

+ Automatic handling of screen FBOs breaks readPixels() for user-provided FBO
  httpsgithub.comprocessingprocessingissues4643
  
+ PGraphicsOpenGL camera info not updated
  httpsgithub.comprocessingprocessingissues4609
  
+ Fix PShape, updateTessellation, matrix transformations
  httpsgithub.comprocessingprocessingissues4662
  
+ QUAD_STRIP as child shape draws extra lines
  httpsgithub.comprocessingprocessingissues4656
  
+ Remove extra glClear() calls
  httpsgithub.comprocessingprocessingissues4694
  
+ PShapes do not show up in PDF with P2D renderer
  httpsgithub.comprocessingprocessingissues4647
  
+ Some semi-transparent edges of sphere() meshes rendered in higher density
  httpsgithub.comprocessingprocessingissues4720
  
+ P2D and P3D not stopping with empty draw() blocks
  httpsgithub.comprocessingprocessingissues4722


[ other contributed fixes ] 

+ Chinese translation updates
  httpsgithub.comprocessingprocessingpull4661
  
+ Spanish translation updates
  httpsgithub.comprocessingprocessingpull4697
  
+ Spanish open sketch folder fix
  httpsgithub.comprocessingprocessingpull4710
  
+ Contribution Manager showing 'null' for PeasyCam version
  httpsgithub.comprocessingprocessingpull4712
  httpsgithub.comprocessingprocessingissues4696

+ Call glGetProgramiv to retrieve program log length
  httpsgithub.comprocessingprocessingissues4659
  httpsgithub.comprocessingprocessingpull4660
  
+ JSONObject get() method is private
  httpsgithub.comprocessingprocessingissues4334
  httpsgithub.comprocessingprocessingpull4336


. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .


PROCESSING 3.2.1 (REV 0253) - 19 August 2016

Fixes for a couple major bugs that showed up in the last release.


[ fixes ]

+ Could not replace preferences.old error message on startup 
  when using Processing for the first time.
  httpsgithub.comprocessingprocessingissues4626

+ Version 3.2 won't run from paths with spaces on Windows
  httpsgithub.comprocessingprocessingissues4623

+ Python Mode was crashing on startup


[ additions ]

+ When quitting an OS X sketch, sometimes it was necessary to quit
  twice. Added some code to work around this; we'll see how it goes.


. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .


PROCESSING 3.2 (REV 0252) - 16 August 2016

This release includes a handful of fixes to deal with startup bugs, 
plus several internal changes for how Modes are implemented.

For those semantic versioning enthusiasts keeping track at home, the version
has been bumped from 3.1.x to 3.2.x to denote the internal API changes.


[ bug fixes ] 

+ Processing .jar files in CLASSPATH can cause startup crash
  httpsgithub.comprocessingprocessingissues4128

+ Remove java.ext.dirs on startup to avoid conflicts and startup errors
  httpsgithub.comprocessingprocessingissues4608
  httpsgithub.comprocessingprocessingissues4470
  httpsgithub.comprocessingprocessingissues4566
  httpsgithub.comprocessingprocessingissues4492
  httpsgithub.comprocessingprocessingissues4128
  httpsgithub.comprocessingprocessingissues4503

+ Add 2016 to the About screen.

+ Write preferences.txt using a temporary file (and save the previous
  version as preferences.old)
  httpsgithub.comprocessingprocessingissues4614

+ Some Table cleanup based on other CSV parsing work

+ Can't render PGraphics object using image() within a PDF
  httpsgithub.comprocessingprocessingissues4473


[ contributed fixes ]

+ Use HTML to print (a contributed fix for a handful of printing issues)
  httpsgithub.comprocessingprocessingpull4369
  httpsgithub.comprocessingprocessingissues213
  httpsgithub.comprocessingprocessingissues50

+ NullPointerException in SketchCode.getDocumentText()
  httpsgithub.comprocessingprocessingissues4555
  httpsgithub.comprocessingprocessingpull4547
  httpsgithub.comprocessingprocessingpull4596
  
+ Error checker now adds 'public' to all default access methods
  httpsgithub.comprocessingprocessingpull4597
  httpsgithub.comprocessingprocessingissues4583

+ Fix resizing targets for async save
  httpsgithub.comprocessingprocessingpull4607
  httpsgithub.comprocessingprocessingissues4578

+ Make loadStrings() and loadJSONObjectloadJSONArray() error msgs consistent
  httpsgithub.comprocessingprocessingissues4265
  httpsgithub.comprocessingprocessingpull4268


[ changes ]

+ Implement template sketches
  httpsgithub.comprocessingprocessingwikiTemplates
  httpsgithub.comprocessingprocessingissues4306
  httpsgithub.comprocessingprocessingissues4352

+ PApplet.main(Blah.class) now works (for easy refactoring)

+ Rewrite Util.listFiles() because it wasn't working properly

+ Add printStackTrace() method in PApplet that can be overridden
  httpsgithub.comprocessingprocessingissues222


[ depeche modes ]

+ Add template support for Modes

+ Added getSketchbookTemplatesFolder() to Base

+ Move general PDE code out of JavaMode and into general base classes
  httpsgithub.comprocessingprocessingissues4606
  
+ Change default PdeInputHandler constructor slightly (added another
  copy so that older Modes will still work properly)
  
+ Change PdeKeywords to PdeTokenMarker (please notify us if this 
  breaks anything).

+ Added Mode.requireExampleCompatibility() so that Modes can specify
  whether example packages should specifically mention their Mode
  in order to be visible when that Mode is in use.

+ Mode.getTokenMarker(SketchCode code) passes through to 
  no arg version if not overridden.


[ input method work from Tsuyoshi Fukuda (tyfkda) ]
  
+ Enable input method support by default on JapaneseKoreanChinese systems
  httpsgithub.comprocessingprocessingpull4598
  
+ Set text color for InputMethod
  httpsgithub.comprocessingprocessingpull4593
  
+ Set sketch as modified when any character committed using input method
  httpsgithub.comprocessingprocessingpull4599
  
+ Insert characters by InputMethod at one time
  httpsgithub.comprocessingprocessingpull4594
  
+ Insert string when it is committed
  httpsgithub.comprocessingprocessingpull4602

+ Simplify conditional branch
  httpsgithub.comprocessingprocessingpull4589


. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .


PROCESSING 3.1.2 (REV 0251) - 29 July 2016

Happy Fathom Fiesta Day! We'll be taking the afternoon off to enjoy 
the summer, maybe you should take the afternoon off and dive into 
a new Processing release


[ pde fixes ] 

+ NullPointerException in LanguageBundle.read() on startup that prevented
  Processing from starting up on Windows machines. Network drive issue.
  httpsgithub.comprocessingprocessingissues4417
  httpsgithub.comprocessingprocessingpull4582
  httpsgithub.comprocessingprocessingissues4476

+ Bring back preference to hide the error checking. Error checking will 
  continue in the background because it's needed for parsingpreprocessing,
  but some were complaining about the error checker messages.
  httpsgithub.comprocessingprocessingpull4491
  httpsgithub.comprocessingprocessingissues4485

+ Updates to Japanese translation
  httpsgithub.comprocessingprocessingpull4564

+ Make preferences button wider for Japanese
  httpsgithub.comprocessingprocessingpull4558

+ Fix logic for warning message when the Mode cannot be changed
  httpsgithub.comprocessingprocessingpull4559

+ Update to Java 8u102 build 14


[ api fixes ] 

+ Rewrite CSV handling to take care of some parsing bugs and improve
  performance. Note that the 'newlines' option is no longer necessary 
  when loading files that contain newline characters mid-field.

+ Prevent random(low, high) from returning 'high'
  httpsgithub.comprocessingprocessingissues4551

+ Fixed iterator remove() methods so they don't skip container elements
  httpsgithub.comprocessingprocessingpull4519

+ Added a check for length 0 arrays in expand()
  httpsgithub.comprocessingprocessingpull4520


[ graphics ] 

+ Disable asynchronous saveFrame() by default. This can really improve
  performance, but can cause weird glitches. Bring it back by using
  hint(ENABLE_ASYNC_SAVEFRAME) in your code to blissfully and speedily
  create image sequences. 
  httpsgithub.comprocessingprocessingissues4578

+ Prevent NPE in loadImage() when called before setup()
  httpsgithub.comprocessingprocessingpull4505

+ Fix crash when calling getUniformLoc() called in PShader.set()
  httpsgithub.comprocessingprocessingissues4542


[ raspberry pi ]

+ IO Fix drawing for SPIAnalogDigital examples
  httpsgithub.comprocessingprocessingpull4480

+ Update JVM warning text on Linux
  httpsgithub.comprocessingprocessingpull4512

+ Undo the 8u91 workaround, add Mesa warning for ARM
  httpsgithub.comprocessingprocessingpull4508

+ IO We want motors, they said (implements SoftwareServo)
  httpsgithub.comprocessingprocessingpull4546

+ Add a temporary workaround for the CHIP to deal with cursor problems
  httpsgithub.comprocessingprocessingpull4554

+ Fix GLExceptions on Raspberry Pi when using offscreen PGraphics 
  httpsgithub.comprocessingprocessingpull4524


[ fixed earlier ] 

+ Debugger deadlocks when choosing Step Into on println()
  httpsgithub.comprocessingprocessingissues3923

+ Suggestions switch scope to first import
  httpsgithub.comprocessingprocessingissues4016

+ loadImage() immediately after saveFrame() foiled by async default
  httpsgithub.comprocessingprocessingissues4218
  the hint() mostly works, but gross to use a hint frequently

+ Fix the Downloader so that builds work again
  httpsgithub.comprocessingprocessingissues4496
  httpsgithub.comprocessingprocessingpull4511


. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .


PROCESSING 3.1.1 (REV 0250) - 16 May 2016

Happy Day-after-my-Mother-in-Law's-birthday! (After the last two releases
happened on holidays, I'm just gonna keep pushing the festive thing. Hard.)

Most importantly, this release fixes a handful of bug fixes for regressions
(a smart-sounding word for making dumb mistakes) in the last release, 
plus a handful of other improvements we picked up along the way.


[ the big ones ]

+ Fix InvocationTargetException when using the command line
  httpsgithub.comprocessingprocessingissues4452
  httpsgithub.comprocessingprocessingpull4453

+ Block loadImage() and requestImage() while images still being saved
  httpsgithub.comprocessingprocessingissues4218
  httpsgithub.comprocessingprocessingpull4465


[ the editor ] 

+ Out of date Modes no longer hand Processing 3 on startup, 
  and will cause less trouble when changing Modes
  httpsgithub.comprocessingprocessingissues4467

+ Undo is a little jerky in insert mode
  httpsgithub.comprocessingprocessingissues4302
  httpsgithub.comprocessingprocessingpull4310

+ Replace and Replace All do not undo in a single step
  httpsgithub.comprocessingprocessingissues4303
  httpsgithub.comprocessingprocessingpull4310

+ Commentuncomment removes indenting
  httpsgithub.comprocessingprocessingissues4249
  httpsgithub.comprocessingprocessingpull4313

+ Remove poorly implemented rectangular selection support from the editor
  httpsgithub.comprocessingprocessingpull4462
  httpsgithub.comprocessingprocessingpull4326
  httpsgithub.comprocessingprocessingissues4250

+ Loader is not visible when opening the Updates tab
  httpsgithub.comprocessingprocessingissues4088
  httpsgithub.comprocessingprocessingpull4089

+ Make CommentUncomment trigger on numpad slash
  httpsgithub.comprocessingprocessingpull4457

+ Hex values throwing errors in 3.1
  httpsgithub.comprocessingprocessingissues4458
  httpsgithub.comprocessingprocessingpull4460

+ Fix up cmd-clickctrl-click behavior, add preference to disable it
  httpsgithub.comprocessingprocessingissues4466
  httpsgithub.comprocessingprocessingpull4472

+ Make undoredo mark all affected tabs as modified
  httpsgithub.comprocessingprocessingpull4479

+ Switch back to JRE 8u77 on ARM to fix GL video library performance
  httpsgithub.comprocessingprocessingpull4454


[ the core ] 

+ Implement support for encoding= option in loadTable()

+ PShapeOBJ error String for missing MTL texture file
  httpsgithub.comprocessingprocessingissues3990
  httpsgithub.comprocessingprocessingcommit49a4c815557214fc1bf92e381ffaa398f262361a

+ Shape (OBJ) import texture data is 0.0
  httpsgithub.comprocessingprocessingissues3156
  httpsgithub.comprocessingprocessingcommit9f1d2988dc80ca7d5ee861b944cb59020ff771c5


[ you'll never notice ] 

+ Fix 'ant clean' so that it actually... cleans.

+ Fix error messages from Javadocs
  httpsgithub.comprocessingprocessingpull4191
  httpsgithub.comprocessingprocessingissues1492


[ fixed but forgot to tell you ] 

+ Complex text input issues (fixed in 3.0.2)
  httpsgithub.comprocessingprocessingissues3860
  httpsgithub.comprocessingprocessingissues3475

+ Allow Movie Maker to cope with bad files (fixed prior to 3.0)
  httpsgithub.comprocessingprocessingissues2727
  httpsgithub.comprocessingprocessingpull3635


. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .


PROCESSING 3.1 (REV 0249) - 8 May 2016

Happy Mother's Day! I celebrated by kicking off a Processing release 
while my beautiful wife and daughter took a well-deserved nap.

This release includes several bug fixes, while some of your donation dollars 
were fed through Jakub Valtar to produce bug fixes and code improvements, 
including some serious reworking of the error checker. Meanwhile, the rest 
of the community pitched in with several additional fixes to keep this 
caravan rolling, and Gottfried brought up the rear with fistfuls of 
improvements for Raspberry Pi and ARM support.


[ contributed pde fixes ] 

+ Grab bag of smaller, mainly ARM-related updates
  httpsgithub.comprocessingprocessingpull4300

+ IDE code disappearing due to a concurrency bug
  httpsgithub.comprocessingprocessingissues4322
  httpsgithub.comprocessingprocessingpull4325

+ Fix non-ARM Linux deb build process
  httpsgithub.comprocessingprocessingissues4308
  httpsgithub.comprocessingprocessingpull4309

+ Sketchbook window shows Empty sketchbook when sketchbook is... empty
  httpsgithub.comprocessingprocessingpull4311

+ Change the command line version on Windows to use the default encoding
  httpsgithub.comprocessingprocessingissues1633
  httpsgithub.comprocessingprocessingpull4350

+ Add support for symlinks to exported applications in Linux
  httpsgithub.comprocessingprocessingissues4318
  httpsgithub.comprocessingprocessingpull4319

+ Added Ukrainian localization
  httpsgithub.comprocessingprocessingpull4343

+ Load fallback font for Chinese, Japanese and Korean
  httpsgithub.comprocessingprocessingpull4348

+ Fix hint text for toolbar buttons when Chinese, Japanese, Korean in use
  httpsgithub.comprocessingprocessingissues2886

+ Added readBytes(max) to net library
  httpsgithub.comprocessingprocessingpull4320

+ Added readBytes(max) to serial library
  httpsgithub.comprocessingprocessingpull4321

+ Improve error message The nested type cannot hide an enclosing type
  httpsgithub.comprocessingprocessingissues4228
  httpsgithub.comprocessingprocessingpull4337
  httpsgithub.comprocessingprocessingpull4451

+ Multi-line comments ending in '' cause ArrayIndexOutOfBoundsException
  httpsgithub.comprocessingprocessingissues4397
  httpsgithub.comprocessingprocessingpull4402


[ jakub edits the editor ] 

+ Update app to Java 8
  httpsgithub.comprocessingprocessingpull4383

+ More Java 8 updates
  httpsgithub.comprocessingprocessingpull4388

+ Update minimum JRE version for Windows
  httpsgithub.comprocessingprocessingpull4389

+ Update JDT to 4.5.2
  httpsgithub.comprocessingprocessingpull4387

+ Java Mode cleanup
  httpsgithub.comprocessingprocessingpull4390

+ Several bugs with tabs not working properly
  httpsgithub.comprocessingprocessingissues3975
  httpsgithub.comprocessingprocessingpull4410

+ File paths not decoding properly, causing a NullPointerException
  in LanguageBundle.read() on startup for some people
  httpsgithub.comprocessingprocessingissues4417
  httpsgithub.comprocessingprocessingpull4426

+ Java Mode refactoring
  httpsgithub.comprocessingprocessingpull4440

+ Fix jump to variable declaration
  httpsgithub.comprocessingprocessingissues4287

+ Numbers in scientific notation not recognized as floats in 3.0
  httpsgithub.comprocessingprocessingissues4190

+ Adding .java files to sketch causes the Error Checker to weird out
  httpsgithub.comprocessingprocessingissues4368

+ Show usage... does not locate keywords on correct line
  httpsgithub.comprocessingprocessingissues3988

+ Threading fixes
  httpsgithub.comprocessingprocessingpull4442

+ Move PDEX listeners from JavaEditor to PDEX
  httpsgithub.comprocessingprocessingpull4446
  httpsgithub.comprocessingprocessingpull4447

+ control-clicks misbehaving
  httpsgithub.comprocessingprocessingissues4281

+ Fix listeners not firing on first preprocessing run
  httpsgithub.comprocessingprocessingpull4450

+ Remove some unnecessary calls from rename
  httpsgithub.comprocessingprocessingpull4449


[ gohaiv6 ] 

+ Add automatic mipmap support to GLES2
  httpsgithub.comprocessingprocessingpull4416

+ Add a few IO library examples
  httpsgithub.comprocessingprocessingpull4384

+ Be more verbose with drawExceptions with cause null
  httpsgithub.comprocessingprocessingpull4432

+ Ignore memory options when exporting for ARM
  httpsgithub.comprocessingprocessingpull4406

+ Update JNA to 4.2.0
  httpsgithub.comprocessingprocessingpull4443

+ Add two Raspberry Pi related fixes to JOGL
  httpsgithub.comprocessingprocessingpull4379
  httpsgithub.comsgotheljoglpull96
  httpsgithub.comsgotheljoglpull97


[ core ]

+ FloatIntDict minIndex() and maxIndex() return -1 when count is zero,
  rather than throwing an exception

+ Couple bug fixes for sorting FloatIntDict

+ Add optional stable parameter to the FloatIntDict sort methods

+ Drastic (2x) performance increas for sorting FloatIntDict

+ Added print() and write(PrintWriter) methods to TableTableRow
  httpsgithub.comprocessingprocessingissues4396

+ Several JavaFX fixes
  httpsgithub.comprocessingprocessingpull4411

+ cursor() and noCursor() not working on FX2D
  httpsgithub.comprocessingprocessingissues4405

+ Make sure PImage.parent is set in loadImage()
  httpsgithub.comprocessingprocessingpull4412

+ Change convention for directional lights in OpenGL-Binding for GLSL
  httpsgithub.comprocessingprocessingissues4275

+ Internal texture copy does not update immediately in GL
  httpsgithub.comprocessingprocessingissues4404

+ Font corruption issue in OpenGL
  httpsgithub.comprocessingprocessingissues4392

+ setStroke() does not work with imported OBJ Pshapes
  httpsgithub.comprocessingprocessingissues4377

+ blendMode() resetting with getGraphics()
  httpsgithub.comprocessingprocessingissues4019
  httpsgithub.comprocessingprocessingpull4341
  httpsgithub.comprocessingprocessingissues4376


. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .


PROCESSING 3.0.2 (REV 0248) - 13 February 2016

Happy Valentine's Day! Nothing says I LOVE YOU like a bouquet of bug fixes.
And nothing says, I LOVE YOU TOO like the sampler box of contributed fixes 
and pull requests that the community has put together for me since 3.0.1.


[ editor contributions ] 

+ Add full screen option to the Editor on OS X
  httpsgithub.comprocessingprocessingissues3993
  httpsgithub.comprocessingprocessingpull4078

+ Add install script for site for ARM
  httpsgithub.comprocessingprocessingpull4110

+ Searchreplace shouldn't include the string being replaced, 
  otherwise it can get into an infinite loop. 
  httpsgithub.comprocessingprocessingissues4270
  httpsgithub.comprocessingprocessingpull4271

+ 'Background Color when Presenting' not visible on Preferences window
  httpsgithub.comprocessingprocessingissues4272
  httpsgithub.comprocessingprocessingpull4278

+ Fix minor autoformatter bugs (enums not working)
  httpsgithub.comprocessingprocessingissues4185
  httpsgithub.comprocessingprocessingpull4200

+ Update Source Code Pro and Source Sans Pro fonts to the latest versions
  httpsgithub.comprocessingprocessingpull4150
  httpsgithub.comprocessingprocessingissues3836

+ Minor fixes for Java Mode
  httpsgithub.comprocessingprocessingpull4114

+ Add i18n support for the PopUp menu
  httpsgithub.comprocessingprocessingpull4060

+ Add Turkish to the list of languages
  httpsgithub.comprocessingprocessingpull4073

+ Make the error message for stack overflows clearer 
  httpsgithub.comprocessingprocessingpull4152

+ Get rid of dt_socket message, making command line run a little better
  httpsgithub.comprocessingprocessingissues4098
  httpsgithub.comprocessingprocessingpull4103

+ Message when reference is find out on nothing selected
  httpsgithub.comprocessingprocessingpull4296

+ Better handling of quotes in command line args
  httpsgithub.comprocessingprocessingpull4145
  httpsgithub.comprocessingprocessingissues3996
  httpsgithub.comprocessingprocessingissues4119

+ Fix crashing bugs when user's name has non-ASCII characters
  httpsgithub.comprocessingprocessingpull4204

+ ARM updates to include GPIO numbers and images of wiring diagrams
  httpsgithub.comprocessingprocessingpull4297
  httpsgithub.comprocessingprocessingpull4298

+ Icon instead of an X for the could not connect message
  httpsgithub.comprocessingprocessingissues3706
  httpsgithub.comprocessingprocessingpull4096
  httpsgithub.comprocessingprocessingpull4055

+ Several fixes for ChineseJapaneseKorean InputMethod support
  httpsgithub.comprocessingprocessingpull4293
  httpsgithub.comprocessingprocessingissues2968
  httpsgithub.comprocessingprocessingissues3475
  httpsgithub.comprocessingprocessingissues3860

+ Add 'downloading' indicator to the Contribution Manager
  httpsgithub.comprocessingprocessingpull4154
  httpsgithub.comprocessingprocessingissues4105


[ more editor ] 

+ Move to Java 8u74, also fixes JavaFX issue.

+ Actually require OS X 10.8.5 (was set to 10.7). The Wiki said 10.8.3 
  was required for 3.0 (it is), but has since been updated to 10.8.5. 
  If you're gonna run Mountain Lion, at least make sure he's patched.


[ graphics contributions ] 

+ Fill out the Javadoc for PMatrix
  httpsgithub.comprocessingprocessingpull4155

+ Have PSurfaceFX pay attention to the setVisible argument
  httpsgithub.comprocessingprocessingpull4210

+ Use xdg-open in PApplet#launch(String)
  httpsgithub.comprocessingprocessingpull4171


[ moar graphics ] 

+ Fix another Zero length string passed to TextLayout constructor error

+ Add additional clarification for IDE users on where to call smooth()
  httpsgithub.comprocessingprocessingissues4211

+ Flipped Y-axis in JavaFX is now repaired (the JDK bug now fixed)
  httpsgithub.comprocessingprocessingissues3795


[ Andres fires an arrow of love into the cold heart of OpenGL ]

+ Stop button in OpenGL exported applications does not use preference settings
  httpsgithub.comprocessingprocessingissues4064

+ Export without a stop button using P3D or P2D
  httpsgithub.comprocessingprocessingissues4056

+ glClearDepthf() not available on older hardware
  httpsgithub.comprocessingprocessingissues4106

+ Drawing a sphere with shape() first changes sphereDetail from default
  httpsgithub.comprocessingprocessingissues4192

+ PShape.scale() affects strokeWeight differently in P2D and P3D
  httpsgithub.comprocessingprocessingissues4231

+ createShape(GROUP) + textured child + non-textured child = P3D render problems
  httpsgithub.comprocessingprocessingissues4176

+ pixelDensity() and createGraphics() with P3D
  httpsgithub.comprocessingprocessingissues4039

+ Friendlier message when running drawing commands outside animation thread
  httpsgithub.comprocessingprocessingissues4196

+ strokeWeight() not working properly with point() in P2D and P3D
  httpsgithub.comprocessingprocessingissues4188

+ exit() is not called in P2DP3D
  httpsgithub.comprocessingprocessingissues4156

+ attrib() function does not work well with PShape 
  httpsgithub.comprocessingprocessingissues4048


[ Jakub is just Czech for cupid ]

+ Initialize sketch args before calling settings() 
  httpsgithub.comprocessingprocessingissues4219
  httpsgithub.comprocessingprocessingpull4220

+ Workaround for JRE bug freezing the PDE during code completion
  httpsgithub.comprocessingprocessingpull4079

+ Prevent NPE because editor UI was not updated on AWT
  httpsgithub.comprocessingprocessingpull4117

+ Fix NPE when stepping into static method
  httpsgithub.comprocessingprocessingissues3590

+ Step button works correctly when SHIFT or ALT is pressed
  httpsgithub.comprocessingprocessingissues4116

+ More editor fixes
  httpsgithub.comprocessingprocessingpull4113

+ Tooltip over variable decl has wrong style and content
  httpsgithub.comprocessingprocessingissues3940

+ May have fixed this NullPointerException in initiateToolTip()
  httpsgithub.comprocessingprocessingissues3286

+ String index out of range error with bracket handling in the editor
  httpsgithub.comprocessingprocessingissues1940


. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .


PROCESSING 3.0.1 (REV 0247) - 23 October 2015

Lots and lots of bug fixes.


[ graphics fixes ]

+ curveVertex() does not work with FX2D renderer
  httpsgithub.comprocessingprocessingissues3960
  
+ Hide menu bar on OS X when FX2D is running full screen

+ Add quotes to the necessary parameters in the size() error messages

+ Editor menu is outside the visible screen with 800x480 display
  httpsgithub.comprocessingprocessingissues3913
  httpsgithub.comprocessingprocessingpull3999
  httpsgithub.comprocessingprocessingpull3992
  
+ Add a patch for FX2D menubar not hiding, root cause not sorted out

+ Fix depth sorter ordering when two triangles in a plane share vertices
  httpsgithub.comprocessingprocessingpull4010
  
+ Turn off fixed rate scheduling in OpenGL
  httpsgithub.comprocessingprocessingpull4004
  
+ Fix GLSL preprocessing issues with variable name mangling
  httpsgithub.comprocessingprocessingpull4052
  httpsgithub.comprocessingprocessingissues3961
  httpsgithub.comprocessingprocessingissues3968

+ cursor() fails to work as expected with P2DP3D 
  httpsgithub.comprocessingprocessingissues3955
  
+ TopicsShaderConvay broken
  httpsgithub.comprocessingprocessingissues3947
  httpsgithub.comprocessingprocessingissues3973
  
+ Regressions wrt GLES2 support between b4 and b7
  httpsgithub.comprocessingprocessingissues3976
  
+ stroke glitches in P3D
  httpsgithub.comprocessingprocessingissues4007
  httpsgithub.comprocessingprocessingissues4027
  httpsgithub.comprocessingprocessingissues4012
  
+ Line loops incorrectly closed in P3D
  httpsgithub.comprocessingprocessingissues4031
  
+ pixelDensity() not working with createGraphics() and OpenGL
  httpsgithub.comprocessingprocessingissues4039
  
+ GL related crashes when closing the display window on Ubuntu (Intel)
  httpsgithub.comprocessingprocessingissues4041
  
+ GL related crashes when closing window on MacBook Air (Intel) running 10.9.5
  httpsgithub.comprocessingprocessingissues3977

+ Update to JogAmp JOGL 2.3.2
  httpsgithub.comprocessingprocessingissues3979
  
+ Output window cannot be set as non-resizable with the P2D or P3D renderers
  httpsjogamp.orgbugzillashow_bug.cgiid=1188
  httpsgithub.comprocessingprocessingissues3952
  
+ setAlwaysOnTop() does not work in P2D and P3D on Mac
  httpsgithub.comprocessingprocessingissues3793
  
+ P2D and P3D windows behave strangely when larger than the screen size
  httpsgithub.comprocessingprocessingissues3401
  
+ Remove Gluegen & JOGL sources
  httpsgithub.comprocessingprocessingpull3982


[ not graphics fixes ] 

+ NullPointerException in ContributionManager.deleteTemp()
  httpsgithub.comprocessingprocessingissues4026

+ Tweak Mode sometimes freezes while running, require a force quit
  httpsgithub.comprocessingprocessingissues3928
  httpsgithub.comprocessingprocessingpull4014
  
+ Tweak Mode Some numbers ignored in second tab
  httpsgithub.comprocessingprocessingissues4017
  httpsgithub.comprocessingprocessingpull4023
  
+ Update Japanese translation
  httpsgithub.comprocessingprocessingpull3956
  httpsgithub.comprocessingprocessingpull3971
  
+ processing-java stealing focus even with --build flag
  httpsgithub.comprocessingprocessingissues3996
  httpsgithub.comprocessingprocessingpull3998
  
+ Documentation updates and other serial fixes
  httpsgithub.comprocessingprocessingpull4015

+ Include Example packs into update count
  httpsgithub.comprocessingprocessingpull3932
  
+ Editor objects are staying in memory
  httpsgithub.comprocessingprocessingissues3930
  httpsgithub.comprocessingprocessingpull3934
  httpsgithub.comprocessingprocessingissues3929
  
+ Library path for Error Checker and Suggestions
  httpsgithub.comprocessingprocessingpull3989
  httpsgithub.comprocessingprocessingissues3924
  
+ A serious error occurred while trying to create a new editor window
  httpsgithub.comprocessingprocessingissues3974
  httpsgithub.comprocessingprocessingpull4001
  
+ Export - fix Java not being embedded on 64bit
  httpsgithub.comprocessingprocessingpull4005
  
+ Add error checker document listeners to all tabs
  httpsgithub.comprocessingprocessingpull4009
  
+ Fix memory leak in Recent menu
  httpsgithub.comprocessingprocessingpull4044
  
+ Error checker update (also enables switch on String objects)
  httpsgithub.comprocessingprocessingissues4034
  httpsgithub.comprocessingprocessingpull4042
  
+ Fix occasional exception while editing text
  httpsgithub.comprocessingprocessingpull4043
  
+ Prevent preprocessor from crashing when setup() has no body
  httpsgithub.comprocessingprocessingpull4045

+ IO library implementation and fixes for ARM
  httpsgithub.comprocessingprocessingpull3997
  httpsgithub.comprocessingprocessingpull3985


. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .


PROCESSING 3.0 (REV 0246) - 30 September 2015, 3pm ET

This one is huge. 

This document covers (in detail) the individual changes between releases. 
For an overview abut what's new, different, and exceptional in 3.0, read
httpsgithub.comprocessingprocessingwikiChanges-in-3.0

Most of the changes from the previous beta involve the final beautification
of the GUI, and the beatification of the error checker and auto-completion
features. 


[ gui updates and fixes ] 

+ Saving messages never clear on Save As
  httpsgithub.comprocessingprocessingissues3861

+ Show number of updates available in the footer
  httpsgithub.comprocessingprocessingissues3518
  httpsgithub.comprocessingprocessingpull3896
  httpsgithub.comprocessingprocessingpull3901

+ Click the Updates item in the footer to open the Contribution Manager

+ Make breakpoints more prominent
  httpsgithub.comprocessingprocessingissues3307

+ Implement the side gradient on the Editor

+ Replace startupabout screen (1x and 2x versions)
  httpsgithub.comprocessingprocessingissues3665

+ Implement splash screen on OS X. Shout out to this article
  httpwww.randelshofer.choopjavasplashjavasplash.html

+ Make the left edge of the Console match the Error List
  httpsgithub.comprocessingprocessingissues3904

+ Windows suggests Documents as a new location for the 3.0 sketchbook
  httpsgithub.comprocessingprocessingissues3920


[ errors and warnings the checking and completion story ]

+ error checkersuggestions fixes
  httpsgithub.comprocessingprocessingpull3871
  httpsgithub.comprocessingprocessingpull3879

+ Hide useless error in error checker
  httpsgithub.comprocessingprocessingpull3887

+ Error checker updates for toggle and listeners
  httpsgithub.comprocessingprocessingpull3915

+ If fewer lines in sketch than can be shown in window, show ticks adjacent
  httpsgithub.comprocessingprocessingpull3903

+ Distinguish errors and warnings in the error list
  httpsgithub.comprocessingprocessingissues3406

+ Clicking an error or warning should give the focus back to the editor
  httpsgithub.comprocessingprocessingpull3905

+ Fix placement and visual design when showing error on hover
  httpsgithub.comprocessingprocessingissues3173

+ Fix the design of the completions window, new icons, etc
  httpsgithub.comprocessingprocessingissues3906

+ Update status errorwarning when changing the line
  httpsgithub.comprocessingprocessingpull3907


[ contribution manager ] 

+ Contributions filter ignored after clicking Install
  httpsgithub.comprocessingprocessingissues3826
  httpsgithub.comprocessingprocessingpull3872
  httpsgithub.comprocessingprocessingpull3883

+ Exception in thread Contribution List Downloader
  httpsgithub.comprocessingprocessingissues3882
  httpsgithub.comprocessingprocessingpull3884

+ Grab bag of Contribution Manager fixes
  httpsgithub.comprocessingprocessingissues3895
  httpsgithub.comprocessingprocessingpull3897

+ ArrayIndexOutOfBoundsException freak out when clicking the header line


[ plumbing ] 

+ Fix nasty file counting problem in the change detector
  httpsgithub.comprocessingprocessingpull3917
  httpsgithub.comprocessingprocessingissues3898
  httpsgithub.comprocessingprocessingissues3387

+ Clean up delete dir function
  httpsgithub.comprocessingprocessingpull3910

+ Don't follow symlinks when deleting directories
  httpsgithub.comprocessingprocessingpull3916


. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .


PROCESSING 3.0b7 (REV 0245) - 22 September 2015

It's 857pm and Jakub and Ben are still holed up at Fathom's studio in Boston.
Ben is wishing he was Jakub's age, as his wrists, neck, and back all feel 
like a bag of broken pretzels after several hoursdaysweeksmonths of coding. 
A bleary-eyed Jakub emerges from deep inside the error checker and completion 
code, removes his headphones and grunts, I think it's working.


[ changes and additions ] 

+ Changed the Tool API to pass Base instead of Editor
  httpsgithub.comprocessingprocessingwikiTool-Basics


[ error checking and auto-completion fixes ] 

+ Huge rewrite of auto-complete and error checking code
  httpsgithub.comprocessingprocessingissues3812
  httpsgithub.comprocessingprocessingpull3845
  httpsgithub.comprocessingprocessingpull3856

+ Make preprocessor scope-aware
  httpsgithub.comprocessingprocessingissues3799
  httpsgithub.comprocessingprocessingpull3810

+ Red error underline is sometimes at wrong location
  httpsgithub.comprocessingprocessingissues3759
  httpsgithub.comprocessingprocessingpull3848

+ Using new color() instead of color() results in color type detected 
  httpsgithub.comprocessingprocessingissues3739
  httpsgithub.comprocessingprocessingpull3850

+ Code editor wrongly detects errors for libraries in code folder
  httpsgithub.comprocessingprocessingissues3732


[ watcher bug fixes ] 

+ Your sketch has been modified externally with encrypted OS X volumes
  httpsgithub.comprocessingprocessingissues3650

+ sketch modified externally with FAT32 volumes on OS X
  httpsgithub.comprocessingprocessingissues3387

+ Prevent re-prompting users when they say no to sketch modified message

+ Add more preferences for editor.watcher to help with debugging

+ Cleaning up the logic in the watcher


[ contribution manager fixes ] 

+ Contributions Manager UI design
  httpsgithub.comprocessingprocessingissues3482

+ CM selected tabs are too tall 
  httpsgithub.comprocessingprocessingissues3598

+ CM Clicking item in Libraries list throws exception
  httpsgithub.comprocessingprocessingissues3667

+ CM Libraries missing descriptions and Foundation credit
  httpsgithub.comprocessingprocessingissues3688

+ Clean up the header for the scrolling lists

+ Use real version of bold font, rather than the fake version, 
  in several locations.

+ Remove the v from the version numbers in the updates tab

+ Set the frame title

+ Remove tooltip that repeats the contents of the tab labels

+ Fix spacing of buttons relative to the scroll bar
  httpsgithub.comprocessingprocessingissues3643

+ Updates tab has ugly horizontal line at top

+ Get rid of fake italic subheads on the Updates page

+ Remove extra component borders and focus quirks

+ Don't focus the window on the search box on opening

+ Prevent updating to a still-incompatible version of a contrib
  httpsgithub.comprocessingprocessingissues3801
  httpsgithub.comprocessingprocessingpull3805

+ Tools are getting redundantly added when installing new Tool
  httpsgithub.comprocessingprocessingissues3818
  httpsgithub.comprocessingprocessingpull3820

+ After clicking 'install' it's still possible to click it again
  httpsgithub.comprocessingprocessingissues3806
  httpsgithub.comprocessingprocessingpull3817

+ CM list should be sortable by status and author name
  httpsgithub.comprocessingprocessingissues3608

+ Update All button appears to do nothing in library manager
  httpsgithub.comprocessingprocessingissues3837
  httpsgithub.comprocessingprocessingpull3842


[ miscellaneous bug fixes ]

+ JNA errors on startup when run from an account w non-ASCII characters
  httpsgithub.comprocessingprocessingissues3624

+ UnsatisfiedLinkError on startup Access is denied on Windows 10
  httpsgithub.comprocessingprocessingissues3800

+ SVG not highlighting as a keyword
  httpsgithub.comprocessingprocessingissues3752

+ Implement retina (2x) versions of all Contribution Manager icons
  httpsgithub.comprocessingprocessingissues3478

+ Show hover text when the mouse is over the 'debug' button

+ Update rollover label for buttons when pressing shift or alt

+ Replace the coffee cup icon for the Welcome window

+ ctrl-space first inserts space, then deletes it, with completion
  httpsgithub.comprocessingprocessingissues3847

+ Fix the bold text in the welcome window to not use fake bold


[ we still care about graphics, too ]

+ FX2D display is inverted in 3.0b6
  httpsgithub.comprocessingprocessingissues3795

+ surface.setLocation(x,y) not working with the default renderer
  httpsgithub.comprocessingprocessingissues3821

+ Make the PApplet regex cache LRU
  httpsgithub.comprocessingprocessingpull3815

+ Minor OpenGL improvements
  httpsgithub.comprocessingprocessingpull3849

+ Cannot re-enable stroke or fill of a PShape with P2D
  httpsgithub.comprocessingprocessingissues3808

+ setResizable() with OpenGL broke in 3.0b6
  httpsgithub.comprocessingprocessingissues3825
  httpsgithub.comprocessingprocessingcommit42c0150da0f400637de916db1f94a687a7bc4288

+ surface.setLocation() with OpenGL causing a freeze on Windows 
  httpsgithub.comprocessingprocessingcommit4c0f9234c0a48f62363233cafc9c9951ee351d3e

+ selectInputOutput() is behind the drawing window (Windows)
  httpsgithub.comprocessingprocessingissues3775

+ MouseWheel count wrong (backwards) in P2D and P3D
  httpsgithub.comprocessingprocessingissues3840


. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .


PROCESSING 3.0b6 (REV 0244) - 11 September 2015

And I beheld when he had released the sixth beta, and, lo, there was 
a great earthquake; and the sun became black as sackcloth of hair, 
and the moon became as blood.

Aside from bug fixes, the FX2D renderer has received a lot of attention. 
On the plus side, it's working really well. On the minus side, we're giving
up on making it the default for 3.0. The underlying JavaFX technology it uses
is just not ready for our use. It is, however, super fast and makes great
looking 2D sketches on retina devices. But it can be a little balky so we
don't want it to be the first experience that beginners have with Processing.
Especially if you're doing 2D on a retina Mac, you should definitely try FX2D. 
We're at the limit of what we can do performance-wise with the default 
(JAVA2D) renderer, so if you're having performance problems, try FX2D. 


[ bug fixes and improvements ] 

+ Deal with ConcurrentModificationException in Editor 
  Error repainting line range and ConcurrentModificationException 
  httpsgithub.comprocessingprocessingissues3726

+ Major surgery performed to drastically reduce the memory footprint
  and startup time for individual editor windows.

+ Remove old versions of processing-java when installing on OS X
  httpsgithub.comprocessingprocessingissues3786

+ Confusion when  tweak was used accidentally, changed to  tweak
  httpsgithub.comprocessingprocessingissues3742

+ Don't allow breakpoints to be set on blank lines
  httpsgithub.comprocessingprocessingissues3765

+ Fixed a couple hard crashes back in alpha 10
  EXC_BAD_ACCESS inside AppleIntelHD5000GraphicsGLDriver when starting 3.0a8+
  httpsgithub.comprocessingprocessingissues3359
  Hard crash on startup inside strlen call when using 3.0a8+ on OS X
  httpsgithub.comprocessingprocessingissues3360
  Though the workaround re-introduces issues that had been fixed earlier
  httpsgithub.comprocessingprocessingissues3790

+ Add the ContentsJava folder to java.library.path on OS X to fix
  exported applications that use native libraries (i.e. Sound)

+ Add surface.setAlwaysOnTop(boolean)
  httpsgithub.comprocessingprocessingissues3718

+ Implement standard cursor types in OpenGL
  httpsgithub.comprocessingprocessingissues3554

+ Change value of constants PRIMITIVE, PATH, and GEOMETRY constants in PShape
  This avoids a collision with entries in PConstants which causes 
  confusing errors or no errors to be thrown at all
  httpsgithub.comprocessingprocessingissues3776

+ Fix flickering cursor regression with Java2D on Windows introduced by
  httpsgithub.comprocessingprocessingissues3472


[ Jakub won't be here forever, but his contributions are eternal ] 

+ Errorwarning location visualisation not updating when editor resizes
  httpsgithub.comprocessingprocessingissues3619
  httpsgithub.comprocessingprocessingpull3778

+ unexpected token on anonymous instance of parameterized Comparator
  httpsgithub.comprocessingprocessingissues533
  httpsgithub.comprocessingprocessingpull3780

+ Incomplete text rendering of strings with consecutive line breaks
  httpsgithub.comprocessingprocessingissues3736
  httpsgithub.comprocessingprocessingpull3737
  httpsgithub.comprocessingprocessingissues3761

+ FX - fix transformation stack NPE
  httpsgithub.comprocessingprocessingpull3710

+ FX - fix rad-deg conversion in rotate()
  httpsgithub.comprocessingprocessingpull3711

+ FX - basic pixel operations (get, set, load, update) 
  httpsgithub.comprocessingprocessingpull3709

+ FX - align to pixel grid when drawing 1 px strokes
  httpsgithub.comprocessingprocessingpull3712

+ FX - keyChar and keyCode are super wonky and unlike AWT
  httpsgithub.comprocessingprocessingissues3290

+ FX - arc - infamous deg-rad conversion strikes again
  httpsgithub.comprocessingprocessingpull3713

+ FX - paths, contours, curves
  httpsgithub.comprocessingprocessingpull3715

+ FX - fix AIOOBE when pressing ESC on Mac
  httpsgithub.comprocessingprocessingpull3719

+ FX - framerate fix
  httpsgithub.comprocessingprocessingpull3724

+ FX - loadPixels, updatePixels, get and set optimizations
  httpsgithub.comprocessingprocessingpull3725

+ FX - keep track of whether pixels are up to date
  httpsgithub.comprocessingprocessingpull3716

+ FX - improve key events
  httpsgithub.comprocessingprocessingpull3729

+ FX - add FX2D keyword, remove JFX keyword
  httpsgithub.comprocessingprocessingpull3731

X JOGL - normalize enter key
  httpsgithub.comprocessingprocessingpull3735

+ FX - normalize enter key
  httpsgithub.comprocessingprocessingpull3730

+ Render text starting with space properly
  httpsgithub.comprocessingprocessingpull3746

+ FX - smooth for the main surface
  httpsgithub.comprocessingprocessingpull3749

+ OpenGL - clean up loaded and modified for pixels
  httpsgithub.comprocessingprocessingpull3768

+ FX - text stuff, move createFont() into PGraphics
  httpsgithub.comprocessingprocessingpull3766

+ FX - fix bug where fonts would share a tint cache
  httpsgithub.comprocessingprocessingpull3771

+ textFont() and textSize() are each calling one another

+ move createFont() to PGraphics

+ Fix PShape creation in P3D 
  httpsgithub.comprocessingprocessingpull3781

+ keyTyped() not firing with P2D and P3D
  httpsgithub.comprocessingprocessingissues3582
  httpsgithub.comprocessingprocessingpull3652

+ Implement a way to disable automatic key repeat
  implemented for OpenGL, where key repeat is now disabled by default
  hint(ENABLE_KEY_REPEAT) will turn it back on
  httpsgithub.comprocessingprocessingissues1622

+ With the P2D and P3D renderers, a generic set of cursors are 
  used because the OpenGL renderer doesn't have access to the 
  default cursor images for each platform.
  httpsgithub.comprocessingprocessingissues3791


[ Manindra re-emerges ]

+ Code auto-complete not working with imported libraries
  httpsgithub.comprocessingprocessingissues3720


[ Google Summer of Contribution Manager ] 

+ CM Category dropdown alignment
  httpsgithub.comprocessingprocessingissues3644
  httpsgithub.comprocessingprocessingpull3666
  httpsgithub.comprocessingprocessingpull3669

+ finalize CM tab order
  httpsgithub.comprocessingprocessingissues3613
  httpsgithub.comprocessingprocessingpull3714

+ Several of those below were in beta 5... 

+ CM - Focus is shifted out of the filter field when something is searched
  httpsgithub.comprocessingprocessingissues3682
  httpsgithub.comprocessingprocessingpull3701

+ CM - info panel text color
  httpsgithub.comprocessingprocessingissues3642
  httpsgithub.comprocessingprocessingpull3695
  httpsgithub.comprocessingprocessingpull3696

+ CM - Filter field display
  httpsgithub.comprocessingprocessingissues3689
  httpsgithub.comprocessingprocessingpull3698

+ Update buttom enabled when updates are present and background is set
  httpsgithub.comprocessingprocessingissues3614
  httpsgithub.comprocessingprocessingpull3694

+ Fix info panel text color and alignment in CM
  httpsgithub.comprocessingprocessingissues3642
  httpsgithub.comprocessingprocessingpull3684

+ Ready to add contributed example packages
  httpsgithub.comprocessingprocessingissues2953


[ Dr. Colubri, I presume ]

+ P2D error calling surface.setTitle()
  httpsgithub.comprocessingprocessingissues3721
  httpsgithub.comprocessingprocessingcommita384cbf0890a49dbf6e0fdd80e048de80e5d78d2

+ Error message with noLoop() and P2D renderer
  httpsgithub.comprocessingprocessingissues3558

+ Concurrency issues in OpenGL renderer prevent proper garbage collection
  httpsgithub.comprocessingprocessingissues3384

+ In P2DP3D the background is cleared to black on each frame
  httpsgithub.comprocessingprocessingissues3559

+ cursor() command with PImage stopped working in 3.0 with P2D
  httpsgithub.comprocessingprocessingissues3769

+ DemosGraphicsWiggling regressed from 17 fps to 8.3 fps between a11 and b1
  httpsgithub.comprocessingprocessingissues3561

+ Library not installed properly message inconsistent in P2DP3D vs. JAVA2D
  httpsgithub.comprocessingprocessingissues3453

+ PShape 3D strange extra lines (another fix)
  httpsgithub.comprocessingprocessingissues3006

+ Line direction vectors are incorrectly transformed
  httpsgithub.comprocessingprocessingissues3779

+ Strokes in 3D PShapes are not properly connected
  httpsgithub.comprocessingprocessingissues3756

+ Setting surface properties hangs OpenGL sketches
  httpsgithub.comprocessingprocessingissues3789


. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .


PROCESSING 3.0b5 (REV 0243) - 24 August 2015

Fixing a handful of regressions in beta 4, and clearing out some of the
nooks and crannies as people report issues with the default download.


[ changes ] 

+ Removed support for fixed-function pipeline in OpenGL. I'm told 
  this brings us out of the 90s and gets things a bit more up-to-date
  and compatible across many platforms and varying device types.
  httpsgithub.comprocessingprocessingissues3505
  If you're a beginPGL() and endPGL() fan, see the updated docs
  httpsgithub.comprocessingprocessingwikiAdvanced-OpenGL

+ Remove legacy GL functions from PGL
  httpsgithub.comprocessingprocessingissues3674
  httpsgithub.comprocessingprocessingpull3691
  httpsgithub.comprocessingprocessingissues3671
  httpsgithub.comprocessingprocessingissues3621

+ Update LowLevelGL to use VBOs
  httpsgithub.comprocessingprocessing-docspull289


[ bug fixes ] 

+ Line selected for errors is off by one or two
  httpsgithub.comprocessingprocessingissues3654

+ NullPointerException in selectFolder() on OS X
  httpsgithub.comprocessingprocessingissues3661

+ Wrong positioning of circles in SVG shapes (regression from 2)
  httpsgithub.comprocessingprocessingissues3685

+ setFill() on PShape in Java2D throws ArrayIndexOutOfBoundsException
  httpsgithub.comprocessingprocessingissues3677

+ saveJSONObject() doesn't close the file
  httpsgithub.comprocessingprocessingissues3705

+ processing-java fixed for OS X 10.11 El Capitan
  httpsgithub.comprocessingprocessingissues3497

+ Prevent a prompt to install Xcode coming up on Export to Application

+ Live error checker complains about F instead of f after floats
  httpsgithub.comprocessingprocessingissues3707

+ NoClassDefError with CLibrary and getenv when switching to Android Mode
  httpsgithub.comprocessingprocessingissues3704


[ foundation $$ = bug fixe$ + improvement$ ] 

+ keyTyped() not firing with P2D and P3D
  httpsgithub.comprocessingprocessingissues3582
  httpsgithub.comprocessingprocessingpull3652

+ rect() sizing in JavaFX
  httpsgithub.comprocessingprocessingpull3656

+ FX - Proper sketch sizing
  httpsgithub.comprocessingprocessingpull3658

+ FX - implement frameRate()

+ FX - Fix key typed
  httpsgithub.comprocessingprocessingpull3672

+ FX - Make key events little bit more sane
  httpsgithub.comprocessingprocessingpull3686

+ Internal graphics not initialized yet
  httpsgithub.comprocessingprocessingissues3690
  httpsgithub.comprocessingprocessingpull3692

+ NullPointerException in Demos  Graphics  Planets
  httpsgithub.comprocessingprocessingissues3551

+ PDE window leaks undisposed Timer objects even when closed
  httpsgithub.comprocessingprocessingissues3655


[ contributed fixes ] 

+ Undo does not move to the correct location in the editor window
  httpsgithub.comprocessingprocessingissues707
  httpsgithub.comprocessingprocessingpull3660

+ Undo sometimes causes the editor to go blank
  httpsgithub.comprocessingprocessingissues3003
  httpsgithub.comprocessingprocessingpull3693
  httpsgithub.comprocessingprocessingpull3702

+ Miscellaneous language improvements
  httpsgithub.comprocessingprocessingpull3700


[ google summer of code ] 

+ Foundation libraries disapear from CM after restart
  httpsgithub.comprocessingprocessingissues3659
  httpsgithub.comprocessingprocessingpull3663

+ CM blue bar missing
  httpsgithub.comprocessingprocessingissues3599
  httpsgithub.comprocessingprocessingpull3636

+ CM column widths change with selection
  httpsgithub.comprocessingprocessingissues3609
  httpsgithub.comprocessingprocessingpull3675

+ Remove category dropdown from CM except when viewing libraries
  httpsgithub.comprocessingprocessingissues3668
  httpsgithub.comprocessingprocessingpull3676

+ Right-clicking popup menu closes instead of shifting its location
  httpsgithub.comprocessingprocessingissues3649

+ Use 1x or 2x icons in the CM
  httpsgithub.comprocessingprocessingpull3681

+ Shifted the text right a little bit
  httpsgithub.comprocessingprocessingpull3696

+ No underline and no blue color
  httpsgithub.comprocessingprocessingpull3695

+ Make auto-format into a compund edit
  httpsgithub.comprocessingprocessingpull3693

+ Focus is shifted out of the filter field after CM search
  httpsgithub.comprocessingprocessingissues3682
  httpsgithub.comprocessingprocessingpull3701


. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .


PROCESSING 3.0b4 (REV 0242) - 17 August 2015

Fixes for several long-standing bugs, plus some internal changes 
to make the code slightly more usable by contributors. 

For Tool and Mode developers, several functions have moved out of 
processing.app.Base and into the Messages and Platform classes.
For instance, Base.isWindows() has moved to Platform.isWindows()
(seems almost logical, right) We're not keeping deprecated versions
of these functions around since we're breaking other things in 3.0.

LibraryModeTool authors, there's a section for you at the end of
this page httpsgithub.comprocessingprocessingwikiChanges-in-3.0
If there's anything that's not covered properly, please file an issue
httpsgithub.comprocessingprocessingissuesnew

Meanwhile, Jakub Valtar is holed up at Fathom in Boston, fixing all of
the bugs. See your contributions are funding graphics fixes, below.


[ bug fixes ] 

+ Fix NullPointerException with some sketches that have no size() command
  httpsgithub.comprocessingprocessingissues3585

+ Fix reports of invalid OS X code signature on some machines
  httpsgithub.comprocessingprocessingissues3575

+ Canceling create folder, move sketch, and continue will cause crash
  httpsgithub.comprocessingprocessingissues3586

+ Move Platform into its own class, also Messages and others
  httpsgithub.comprocessingprocessingissues2765

+ dataPath() not working when app is not run from app dir on Linux
  httpsgithub.comprocessingprocessingissues2195

+ Zero length string passed to TextLayout constructor message
  httpsgithub.comprocessingprocessingissues3487

+ improve speed of text(x, y, w, h) when using large strings with no spaces
  httpsgithub.comprocessingprocessingissues211

+ filter(PShader) was broken in HDPI mode
  httpsgithub.comprocessingprocessingissues3577

+ Ctrl+R (Cmd+R) not restarting sketch when debug is enabled.
  Hitting Run while a sketch is running should restart the sketch.
  httpsgithub.comprocessingprocessingissues3623


[ apiimplementation changes ] 

+ Several platform-oriented features have moved to Platform
  i.e. Platform.isWindows(), Platform.openURL(), Platform.getJavaPath()

+ Base.showXxxx() and Base.log() have moved to Messages.showXxxx()

+ Make fields and functions in PdeKeywords protected
  httpsgithub.comprocessingprocessingissues2383

+ Added EditorException, which is thrown when loading bad sketches

+ Pass command line arguments to sketches with processing-java
  httpsgithub.comprocessingprocessingissues2552

+ Implement add(x, y) and sub(x, y) in PVector
  httpsgithub.comprocessingprocessingissues3593

+ Add method to JavaMode for search path
  httpsgithub.comprocessingprocessingpull3648


[ google summer of code ]

+ Second round of arm patches (v5)
  httpsgithub.comprocessingprocessingpull3583

+ Third bunch of arm patches
  httpsgithub.comprocessingprocessingpull3622

+ Contribution Manager GUI updates
  httpsgithub.comprocessingprocessingpull3596
  
+ Sorting CM by the author name inplemented
  httpsgithub.comprocessingprocessingpull3615
  
+ CM needs minimum window size enforced
  httpsgithub.comprocessingprocessingissues3600
  httpsgithub.comprocessingprocessingpull3607

+ Deactivate install button when incompatible
  httpsgithub.comprocessingprocessingissues3603
  httpsgithub.comprocessingprocessingpull3611

+ CM Updates badge appears even when there are no updates
  httpsgithub.comprocessingprocessingissues3597
  httpsgithub.comprocessingprocessingpull3625

+ Ignore accented characters when filtering in the CM
  httpsgithub.comprocessingprocessingissues3627
  httpsgithub.comprocessingprocessingpull3633

+ Enable arrow keys for navigating lists in the CM
  httpsgithub.comprocessingprocessingissues3610
  httpsgithub.comprocessingprocessingpull3631

+ CM filter input glitchy
  httpsgithub.comprocessingprocessingissues3612
  httpsgithub.comprocessingprocessingpull3630

+ Set font correctly in Contribution Manager dialog
  httpsgithub.comprocessingprocessingissues3601
  httpsgithub.comprocessingprocessingpull3626


[ fixed earlier, spring cleaning ]

+ Closing the color selector makes things freeze (only Linux and Windows)
  httpsgithub.comprocessingprocessingissues2381

+ CommentUncomment should ignore leading whitespace
  httpsgithub.comprocessingprocessingissues1961

+ Export unsaved sketch  agree to save prompt  export doesn't finish
  httpsgithub.comprocessingprocessingissues2724

+ Add disconnectEvent() to Server 
  httpsgithub.comprocessingprocessingissues2133

+ False positive for mixing activestatic mode in Tweak Mode 3.0 alpha 5
  httpsgithub.comprocessingprocessingissues3140

+ Determine shortcut for Export vs Use Selection for Find
  httpsgithub.comprocessingprocessingissues2985

+ PDE erroneously detects changes in non-sketch files
  httpsgithub.comprocessingprocessingissues2759

+ Proper handling of sketchPath() for OS X in exported apps
  httpsgithub.comprocessingprocessingissues2181

+ textWidth() incorrect with default (JAVA2D) renderer and default font
  httpsgithub.comprocessingprocessingissues2175

+ Error on size() when using FX2D due to stage inset issues
  httpsgithub.comprocessingprocessingissues3412


[ your contributions are funding graphics fixes ]

+ Remove alpha filler (hopefully no regression here)
  httpsgithub.comprocessingprocessingpull3523

+ Huge Java2D blending patch
  httpsgithub.comprocessingprocessingpull3592

+ Accuracy problems make alpha channel go to FE with image.copy()
  httpsgithub.comprocessingprocessingissues258

+ Fix blue-channel bias on blend()
  httpsgithub.comprocessingprocessingissues514

+ Improve blend() accuracy when using ADD
  httpsgithub.comprocessingprocessingissues172

+ Upgrade OpenGL (remove support for fixed-function pipeline)
  httpsgithub.comprocessingprocessingissues3505
  httpsgithub.comprocessingprocessingpull3604
  httpsgithub.comprocessingprocessingpull3605
  httpsgithub.comprocessingprocessingpull3606
  httpsgithub.comprocessingprocessingpull3628

+ Improve OpenGL extensions checks on OS X
  httpsgithub.comprocessingprocessingpull3646


. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .


PROCESSING 3.0b3 (REV 0241) - 11 August 2015

You get a beta! YOU get a beta! YOU get a beta! Everybody gets a beta!


[ bug fixes & changes ] 

+ Prevent 'examples' from showing as a folder in the sketchbook window
  (instead only show it in the Examples window)

+ Don't show breakpoints when debugger is off
  httpsgithub.comprocessingprocessingissues3093

+ No setting breakpoints when debugger is off
  httpsgithub.comprocessingprocessingissues3306

+ Foundation library examples should appear under Core or Foundation
  httpsgithub.comprocessingprocessingissues3524

+ Use ctrl-pageupdown on Linux for prevnext tab
  httpsgithub.comprocessingprocessingissues3416

+ Library names not showing up correctly (pdf instead of PDF Export)
  httpsgithub.comprocessingprocessingissues3574

+ Contributed Examples were using their folder name, not the 'name' field 
  from their properties file when shown in the Examples window.

+ Include name of sketch when asking user Save sketch before closing
  Did i18n changes for OS X and other platforms, though some languages
  will need additional updates to be compatible.
  httpsgithub.comprocessingprocessingissues3418

+ Modify naming of contributed examples
  httpsgithub.comprocessingprocessingissues3573

+ Show a warning when map() prints a bad value
  httpsgithub.comprocessingprocessingissues3314

+ Implement a nf(float) function to support the changes in map()

+ Breakpoints don't 'jump' after hitting Enter on blank line
  httpsgithub.comprocessingprocessingissues3552
  httpsgithub.comprocessingprocessingpull3571

+ Implement focusGained(), focusLost(), and 'focused' variable in P2DP3D
  httpsgithub.comprocessingprocessingissues3564

+ IndexOutOfBoundsException with pixelDensity(2) and P2D
  httpsgithub.comprocessingprocessingissues3568

+ Shaders output to bottom left corner rather than full window in 3.0b2
  httpsgithub.comprocessingprocessingissues3572


. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .


PROCESSING 3.0b2 (REV 0240) - 9 August 2015

Several delicious bug fixes to repair things that cropped up in the first
beta release. Please keep the reports & code coming and help us get to 3.0.


[ bug fixes ]

+ Add Library... fails with Could not write to temporary directory
  httpsgithub.comprocessingprocessingissues3548

+ Make size(displayWidth, displayHeight) still run in a window.
  Fixes fullScreen() cannot be used here message on startup.
  httpsgithub.comprocessingprocessingissues3545
  In the past we were auto-detecting if it was the screen size, 
  and switching to full screen mode. But that's now removed because
  fullScreen() is so easy, and full screen may not be wanted.

+ Cannot find processing.core library. Line 12 in tab sketch_150704a
  also happens with import to com.jogamp.opengl.GL2
  httpsgithub.comprocessingprocessingissues3547
  Code still ran properly, but looked like errors in the editor.

+ Remove pair is debug messages from Welcome screen

+ Save Export to Application settings between uses
  
+ Fix NullPointerException in setVertex()
  httpsgithub.comprocessingprocessingpull3553
  httpsgithub.comprocessingprocessingissues3550

+ Toggling between noLights and PointLight in draw() behaving strangely
  httpsgithub.comprocessingprocessingissues3546
  
+ NullPointerException in Planets demo
  httpsgithub.comprocessingprocessingissues3551

+ Late breaking fix to repair Tweak mode
  httpsgithub.comprocessingprocessingissues3562
  httpsgithub.comprocessingprocessingpull3563


[ changes and improvements ]

+ Show contributed examples in the Examples window
  httpsgithub.comprocessingprocessingissues3420

+ Initialize the Find dialog with the current selection
  httpsgithub.comprocessingprocessingissues3457

+ Disable Export button when no platforms selected. In previous releases,
  it would report done exporting! but nothing had actually happened.

+ Prevent Export with examples and untitledunsaved sketches
  
+ Links in error bar are not selectable nor clickable
  httpsgithub.comprocessingprocessingissues3471


[ internaldevelopment fixes ]

+ Building make the download-jdk-macosx target work properly

+ Throw an error when using methods that require sketchPath outside setup()
  httpsgithub.comprocessingprocessingissues3433

+ Cleaned up the advanced OpenGL wiki page
  
+ cursor(CROSS) breaks when using surface.setTitle()
  httpsgithub.comprocessingprocessingissues3472


[ fixed earlier ]

+ blend() and copy() are not pixel accurate for copyscale
  httpsgithub.comprocessingprocessingissues324
  Fixed somewhere between 0179 and 0184


. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .


PROCESSING 3.0b1 (REV 0239) - 6 August 2015

This is the big one! The first beta, which will now be the default download
on the site. That means we think this is the best release of Processing that's
currently available, and that nearly everyone should be using it. It doesn't
mean we've worked out all the bugs just yet, but hey, who has

A still-in-progress rundown of the changes in Processing 3 is here
httpsgithub.comprocessingprocessingwikiChanges-in-3.0

2.x Modes, Tools, and Libraries will need to be updated for 3.x, so if you're
an author of these, see the notes in the link above. We're also planning some
sort of online Q & A  office hours  talk to Ben about what's changed session
to help folks along. We want to help, we just need to find the time.

And for those into the nitty gritty, or who enjoy lame jokes about esoteric 
technical details, the detailed changes since 3.0 alpha 11 are below.


[ bug fixes ] 

+ The new Welcome screen! was... completely broken
  httpsgithub.comprocessingprocessingissues3474

+ StringIndexOutOfBoundsException while preprocessing
  httpsgithub.comprocessingprocessingissues3531

+ RunStopDebug buttons do not fire if the mouse moves during the click
  httpsgithub.comprocessingprocessingissues3529

+ Some contributions were listed multiple times
  httpsgithub.comprocessingprocessingissues3353

+ Do not filter Ctrl+Alt+ out as menu mnemonics
  httpsgithub.comprocessingprocessingissues3536
  httpsgithub.comprocessingprocessingpull3537

+ Fix delete tab shortcut in toolbar popup
  httpsgithub.comprocessingprocessingpull3535

+ Deleted tab still present in tab menu
  httpsgithub.comprocessingprocessingissues3534
  httpsgithub.comprocessingprocessingpull3542
  httpsgithub.comprocessingprocessingpull3541

+ Make PFont.size protected again
  httpsgithub.comprocessingprocessingissues3519

+ Tweak implementation of PVector.heading()
  httpsgithub.comprocessingprocessingissues3511

+ Fix problem with JAR loading inside createInputRaw()
  httpsgithub.comprocessingprocessingpull3514


[ changes, because not everything is a bug ] 

+ Add new consoleerrors icons to the tabs in the footer

+ Get images working in the Welcome screen
  httpsgithub.comprocessingprocessingissues3494

+ Add getSurface() method ('surface' is protected in PApplet)

+ Remove 'contrib updates available' dialog box for now. A new version
  is coming soon that will be better-integrated with the editor.


[ internal changes you'll probably never notice ] 

+ Add message that says it's safe to ignore the tools.jar warning

+ Add git pull on processing-docs for dist target

+ Update to launch4j 3.8


[ contributions by our fine community ] 

+ Fix contribution compatibility check
  httpsgithub.comprocessingprocessingpull3479

+ Update Spanish translation
  httpsgithub.comprocessingprocessingpull3480

+ Fix bug with tab sorting when adding new tabs
  httpsgithub.comprocessingprocessingpull3540
  httpsgithub.comprocessingprocessingissues3099


[ this summer, Google's paying folks to stay indoors & work on Processing ]

+ CM updates dialog box doesn't open CM
  httpsgithub.comprocessingprocessingissues3481
  httpsgithub.comprocessingprocessingpull3489

+ Adding CM ellipses only when text is long
  httpsgithub.comprocessingprocessingpull3470

+ Include mode imports when rewriting .properties file
  httpsgithub.comprocessingprocessingpull3499
  httpsgithub.comprocessingprocessingissues3492

+ Assortment of patches from gohai's arm-3.0 branch
  httpsgithub.comprocessingprocessingpull3522


[ Jakub joins Andres in a battle of wits and test of wills against OpenGL ] 

+ Implement depth sorting! Use hint(ENABLE_DEPTH_SORT) and say goobye
  to your 3D transparency woes! 
  httpsgithub.comprocessingprocessingissues90
  httpsgithub.comprocessingprocessingissues2235
  httpsgithub.comprocessingprocessingpull3507
  httpsgithub.comprocessingprocessingpull3477
  httpsgithub.comprocessingprocessingpull3410
  httpsgithub.comprocessingprocessingpull3372

+ Remove size() from setup() when copying to settings()
  httpsgithub.comprocessingprocessingpull3517

+ Remove mode parameters from createShape(), fixes parameter collision issues
  httpsgithub.comprocessingprocessingpull3516

+ Radius for rect not working on PShape
  httpsgithub.comprocessingprocessingissues2646

+ Bug in arc with createShape()
  httpsgithub.comprocessingprocessingissues3018

+ OpenGL sketch flickers when draw() is missing or empty
  httpsgithub.comprocessingprocessingissues3473
  httpsgithub.comprocessingprocessingpull3521

+ size() errors
  httpsgithub.comprocessingprocessingissues3483

+ rect() with stroke outline renders 1px wider and taller in P2D
  behavior is correct, explanation provided
  httpsgithub.comprocessingprocessingissues2065
  httpsgithub.comprocessingprocessingissues2065

+ setVertex() not working in P3D and P2D
  httpsgithub.comprocessingprocessingissues3022
  httpsgithub.comprocessingprocessingpull3528

+ Add hint(ENABLE_BUFFER_READING) to handle stencildepth buffers
  httpsgithub.comprocessingprocessingpull3527
  httpsgithub.comprocessingprocessingissues2771

+ ArrayIndexOutOfBoundsException error when enabling depth sorting in P3D
  httpsgithub.comprocessingprocessingpull3477
  httpsgithub.comprocessingprocessingissues3476

+ Fix curves - properly this time
  httpsgithub.comprocessingprocessingpull3501

+ Remove duplicate curve vertex
  httpsgithub.comprocessingprocessingpull3496
  httpsgithub.comprocessingprocessingissues2937

+ JOGL window size is now set properly
  httpsgithub.comprocessingprocessingpull3493
  httpsgithub.comprocessingprocessingissues3223

+ Device parsing on Linux is incorrect, causing display 1 doesn't exist msg
  httpsgithub.comprocessingprocessingissues3532

+ Flush geometry when lighting changes, otherwise lights apply to entire scene
  httpsgithub.comprocessingprocessingissues3533


. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .


PROCESSING 3.0a11 (REV 0238) - 16 July 2015

Hopefully the last release before we go to beta. 


[ new additions ]

+ You'll be greeted by a Welcome screen. We haven't finished the text for
  one of these yet, so you'll see some lorem ipsum (fake) text instead.
  We'll wrap that up before the beta release.
  httpsgithub.comprocessingprocessingissues3358


[ breaking all of the things ]

+ For Tool and Mode authors, you'll need to make some (small) changes.
  These aren't structural, but will require a rebuild of your code.
  Our hope is that this will be the last round of changes for the 3.x
  series, and that it's now safe to update your Modes and Tools to be
  compatible with the final 3.x release. Changes in this release
  
  - Several classes have been moved to a new processing.app.ui package.
    The processing.app package was much too unwieldy and made it difficult
    for people to hack on the PDE code.
    
  - Several functions have moved out of Base and into Util (or Toolkit).
    Most of these are file-related (removeDir() and others), but the
    Base class had simply grown to a ridiculous size. It remains enormous
    but is a little less ridiculous.

+ Removed the init() method from PApplet; it's no longer needed


[ fixing all of the things ]

+ Show warning when display spanning is turned off with fullScreen(SPAN)
  httpsgithub.comprocessingprocessingissues3381

+ Add note about headless exceptions that points to Github

+ Resize children[] so that getChildren() returns a correctly-sized array
  httpsgithub.comprocessingprocessingissues3347
  
+ clear() was broken (maybe related to #3317)
  httpsgithub.comprocessingprocessingissues3378
  
+ PGraphic ignores PNG transparency (regression from 3.0a5, same as #3378)
  httpsgithub.comprocessingprocessingissues3317

+ Move error messages out of PConstants

+ Remove launch(String) since it was calling itself, and anachronistic

+ Sketches with new fullScreen() method should grab focus by default
  httpsgithub.comprocessingprocessingissues3380
  
+ Sketches not getting focus with Java2D
  httpsgithub.comprocessingprocessingissues3389
  
+ draw() executes twice when noLoop() called in setup()
  httpsgithub.comprocessingprocessingissues3310

+ displayDensity() not functioning properly
  httpsgithub.comprocessingprocessingissues3436
  
+ surface.setXxx() handling
  httpsgithub.comprocessingprocessingissues3388
  Methods for setResizable(), setVisible(), setTitle(), setIconImage()

+ Add the don't use this warning to the JFrame in PSurfaceAWT

+ ArithmeticException  by zero when using fonts opened with loadFont()
  httpsgithub.comprocessingprocessingissues3413
  
+ SVG briefly broken for Java2D
  httpsgithub.comprocessingprocessingissues3417
  
+ Change how font metrics are pulled to fix text width issues

+ Check alpha when image extension is unknown
  httpsgithub.comprocessingprocessingissues3442
  
+ Add support for more Image types (BGR) with PImage(java.awt.Image)

+ Move Java2D and JavaFX classes to their own packages


[ multithreading is hard ] 

+ Sketch not always showing with empty draw()
  httpsgithub.comprocessingprocessingissues3363
  
+ Static mode broken with Java2D on Windows and Linux
  httpsgithub.comprocessingprocessingissues3315
  
+ Sketch sometimes doesn't show with noLoop() on Linux
  httpsgithub.comprocessingprocessingissues3316
  
+ Window never shows with exported application on 64-bit Linux
  httpsgithub.comprocessingprocessingissues3303

+ Fix presentation mode

+ Re-enable the display menu in Preferences after display added
  Previously, the checkbox menu stayed disabled (though it updated the list)

+ sketch.isReadOnly returns false for examples coming from multiple modes
  httpsgithub.comprocessingprocessingissues773
  
+ Drag and Drop & Add File broken for .pde files in 3.0a10
  httpsgithub.comprocessingprocessingissues3383

+ Show not compatible error message in the manager
  httpsgithub.comprocessingprocessingissues3386
  
+ Add more code for handling low-level errors on startup

+ Update the Supported Platforms wiki page with current status

+ displayDensity() not functioning properly
  httpsgithub.comprocessingprocessingissues3436

+ Error message caused by curly bracket in a println string
  httpsgithub.comprocessingprocessingissues3394
  
+ Tweak mode broken (re new settings() function)
  httpsgithub.comprocessingprocessingissues3435

+ Add build.xml prompt for OS X developers to download the JDK update


[ contribution manager ] 

+ Change the .properties file syntax a little bit
  compatibleModesList - modes
  authorList - authors
  category - categories

+ Send list of installed Libraries, Modes, Tools, and Examples on update
  httpsgithub.comprocessingprocessingissues3365
  
+ Disable contrib manager updates when check for updates is turned off
  in Preferences. Also updated the FAQ to cover the changes.


[ pull requests, summer of code, and other community help ]

+ Use correct localized strings in JavaEditor.java
  httpsgithub.comprocessingprocessingpull3376
  
+ Dim edit menus as appropriate during selectionno selectionetc
  httpsgithub.comprocessingprocessingissues53
  httpsgithub.comprocessingprocessingpull3419
  
+ Internationalize MovieMaker.java
  httpsgithub.comprocessingprocessingpull3424

+ Auto-completion does not seem to be working
  httpsgithub.comprocessingprocessingissues3111

+ Re-enable export to application with command line
  httpsgithub.comprocessingprocessingpull3451
  httpsgithub.comprocessingprocessingissues2760
  
+ Change undefined constructor error message for clarity
  httpsgithub.comprocessingprocessingissues3434

+ Mode problems window wasn't doing line breaks
  httpsgithub.comprocessingprocessingissues3369
  httpsgithub.comprocessingprocessingpull3370
  
+ Add missing internationalization in appSketch.java
  httpsgithub.comprocessingprocessingpull3392

+ Examples window shows contributed examples
  httpsgithub.comprocessingprocessingpull3421
  httpsgithub.comprocessingprocessingpull3421
  
+ Reworking the Contribution Manager according to Scott's redesign
  httpsgithub.comprocessingprocessingpull3423
  
+ Finish adding 'examples' contribs
  httpsgithub.comprocessingprocessingissues2953

+ Error during installation of any contribution
  httpsgithub.comprocessingprocessingissues3429
  httpsgithub.comprocessingprocessingpull3438

+ Significant work by Akarshit for Google Summer of Code
  httpsgithub.comprocessingprocessingpull3432
  httpsgithub.comprocessingprocessingpull3452
  httpsgithub.comprocessingprocessingpull3444
  httpsgithub.comprocessingprocessingpull3454
  httpsgithub.comprocessingprocessingpull3465
  httpsgithub.comprocessingprocessingpull3468
  httpsgithub.comprocessingprocessingissues3443

+ Fix NullPointerException in DepthSorter
  httpsgithub.comprocessingprocessingpull3410


[ retinahidpi fixes ] 

+ Make g.pixelDensity public inside PApplet (so accessible by sketches)

+ Add pixelWidthHeight to PApplet

+ Text looks blurry in GL Retina
  httpsgithub.comprocessingprocessingissues2739

+ Text not getting the correct font in Retina2D
  httpsgithub.comprocessingprocessingissues2617
  
+ Text is half size in PGraphicsRetina2D
  httpsgithub.comprocessingprocessingissues2738


[ andres loves opengl ] 

+ Add attrib() method
  httpsgithub.comprocessingprocessingissues2963

+ The ortho() function seems broken
  httpsgithub.comprocessingprocessingissues1278
  
+ Errors with loading SVGs in P3DP2D
  httpsgithub.comprocessingprocessingissues3379
  
+ Sketch window briefly appears on top left corner when using OpenGL
  httpsgithub.comprocessingprocessingissues3308

+ beginShape(POINTS) don't show up in P2D
  httpsgithub.comprocessingprocessingissues3029


[ fixed earlier ]

+ Sketch window is not placed at correct location when running a second time
  httpsgithub.comprocessingprocessingissues3125
  
+ Full screen needs to ignore prev location setting for frame
  httpsgithub.comprocessingprocessingissues3305
  
+ save() and saveFrame() with 2X renderers fails
  httpsgithub.comprocessingprocessingissues3255
  
+ NPE when using image() created with createGraphics(PGraphicsRetina2D)
  httpsgithub.comprocessingprocessingissues2510
  
+ Closing OpenGL sketch from the PDE doesn't stop java.exe process
  httpsgithub.comprocessingprocessingissues2335


. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .


PROCESSING 3.0a10 (REV 0237) - 9 June 2015

Huge release! Knocking on the door for beta, this includes many changes
and improvements for how displays of all kinds (single, multiple, retina, 
high dpi) are handled, plus smoothing, full screen, etc etc. 


[ breaking things for the future ] 

+ Added fullScreen() method to make it far easier to run sketches 
  using the full screen. Reference notes and explanation here
  httpsgithub.comprocessingprocessing-docsissues250
  httpsgithub.comprocessingprocessingissues3296

+ smooth() and noSmooth() can only be used once per sketch, in setup().
  See the changes, the explanation, and the discussion here
  httpsgithub.comprocessingprocessing-docsissues251
  httpsgithub.comprocessingprocessingissues3357

+ Re-opened the Gates of Hell by adding chaining operations to PVector
  httpsgithub.comprocessingprocessingissues257
  
+ Changed exec() and open() to use varargs. Changed open() to launch()
  to prevent problems with Python Mode.

+ Replaced --full-screen command line option with --present to untangle
  full screen versus the Present command that places blanks the rest
  of the screen around a sketch.
  
+ ortho() function is being reworked to make it compliant
  httpsgithub.comprocessingprocessingissues1278


[ other changes and additions ]

+ Added new application and export icons. Mmm!

+ Add retinahigh-res display support to OpenGL
  httpsgithub.comprocessingprocessingissues2573

+ Add pixelDensity(2) command to enable retina or high-dpi mode for
  your sketch. Make things look beautiful and crisp on expensive hardware!
  httpsgithub.comprocessingprocessingissues3361

+ Added displayDensity() methods to get the pixel density for individual
  displays. displayDensity() returns the density (1 or 2) of the default
  (or currently selected) display, displayDensity(1) returns the density
  of display 1. Guess how you get the density of display 2

+ Add useful constructors to the IntFloatStringList classes


[ bug fixes ]

+ Fix monitor numbering problems
  httpsgithub.comprocessingprocessingissues3309

+ Full screen doesn't work on second window wo present mode
  httpsgithub.comprocessingprocessingissues3271
  
+ Full screen on OS X 10.9 has incorrect placement
  httpsgithub.comprocessingprocessingissues3305

+ Run sketches on display not working properly
  httpsgithub.comprocessingprocessingissues3264

+ Comments influencing code (preproc issues in parsing)
  httpsgithub.comprocessingprocessingissues3326
  
+ Sketch not appearing depending on arangement of external display on OS X
  httpsgithub.comprocessingprocessingissues3118
  
+ Sketch launching on second display that's not currently in use
  httpsgithub.comprocessingprocessingissues3082
  
+ strokeWeight() in setup() not working for default renderer
  httpsgithub.comprocessingprocessingissues3331

+ Retain original java.awt.Frame when it's available from PSurfaceAWT

+ Set frame icon images for Java2D (dock and cmd-tab) 
  httpsgithub.comprocessingprocessingissues257

+ Debug message showing up in 3.0a9 when dragging and dropping files

+ Rolled back to 3.0a5 version of appbundler due to crash on startup
  httpsgithub.comprocessingprocessingissues3359
  httpsgithub.comprocessingprocessingissues3360
  This re-introduces a few bugs related to the serial library and 
  scrolling and any other changes later than 16 November 2015
  httpsgithub.comprocessingprocessingcommitsmasterbuildmacosxappbundler.jar
  httpsgithub.comprocessingprocessingcommitsmasterbuildmacosxappbundlernativemain.m


[ andres vs opengl, episode eleventy three ]

+ set(0, 0, image) does not set alpha channel to opaque in P2DP3D
  httpsgithub.comprocessingprocessingissues2125
  
+ GROUP shapes are broken in 3.0a9
  httpsgithub.comprocessingprocessingissues3336
  
+ Only a quarter of the sketch is appearing in 2x mode
  httpsgithub.comprocessingprocessingissues3332
  httpsgithub.comprocessingprocessingissues3327
  
+ Single transparent pixel at end of textures in OpenGL
  httpsgithub.comprocessingprocessingissues115
  
+ Implement setImpl() instead of set() inside PGraphicsOpenGL
  httpsgithub.comprocessingprocessingissues160
  httpsgithub.comprocessingprocessingissues3012
  
+ Strange extra lines with PShape 3D
  httpsgithub.comprocessingprocessingissues3006
  
+ BACKSPACE key is identified as DELETE in OpenGL renderers
  httpsgithub.comprocessingprocessingissues3338

+ More key issues in OpenGL 
  httpsgithub.comprocessingprocessingissues3352

+ Set icon for OpenGL windows
  httpsgithub.comprocessingprocessingissues3348
  
+ save() and saveFrame() with OPENGL renderer fails
  httpsgithub.comprocessingprocessingissues3334
  
+ Errors in glsl code are only caught when set() is used
  httpsgithub.comprocessingprocessingissues2268
  
+ Strips when rendering spheres with lights and anti-aliasing
  httpsgithub.comprocessingprocessingissues1185


[ valuable contributions from the community ]

+ Several Greek translation updates
  httpsgithub.comprocessingprocessingissues3329
  httpsgithub.comprocessingprocessingpull3330
  httpsgithub.comprocessingprocessingpull3340
  httpsgithub.comprocessingprocessingpull3354

+ Add i18n for Archiver Tool and missing text
  httpsgithub.comprocessingprocessingpull3349
  
+ Fix case-related bugs in Toolkit.setMenuMnemonics()
  httpsgithub.comprocessingprocessingpull3366

+ Contribution manager scroll bar only shows up when needed
  httpsgithub.comprocessingprocessingpull3343

+ Progress bar added to Contribution Manager
  httpsgithub.comprocessingprocessingissues3160
  httpsgithub.comprocessingprocessingpull3319


. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 


PROCESSING 3.0a9 (REV 0236) - 19 May 2015

More work as we head toward beta. Mostly improvements to the GUI 
and fixes for many bugs. So close to beta I can practically smell it.


[ changes ] 

+ Implement more of the bottom half of the editor window GUI

+ Show screen dimensions in the Preferences window for display selector

+ Change how the variablesdebug window works. Automatically 
  show the window when debugging, hide when not.
  httpsgithub.comprocessingprocessingissues3298
  httpsgithub.comprocessingprocessingissues3091

+ Enabling and disabling the debugger toggles the StepContinue 
  buttons in the toolbar

+ Remove techie options from the Debug menu
  httpsgithub.comprocessingprocessingissues3267

+ Add more visual states to the toolbar buttons

+ Lots of internal cleaning


[ bug fixes ] 

+ Implement Cmd-Q handler on Mac OS X to shut down sketches properly
  httpsgithub.comprocessingprocessingissues3301

+ Changing background color when Presenting causes Exception
  httpsgithub.comprocessingprocessingissues3299

+ displayWidth and displayHeight not set properly on startup
  httpsgithub.comprocessingprocessingissues3295


[ andres vs. opengl, episode 7 ]

+ Offscreen rendering broken in OpenGL renderers
  httpsgithub.comprocessingprocessingissues3292
  httpsgithub.comprocessingprocessingissues3259

+ Initial location of OpenGL window hides the title bar
  httpsgithub.comprocessingprocessingissues2981

+ OpenGL sketches do not terminate, have to be killed
  httpsgithub.comprocessingprocessingissues2982

+ Quitting P3D sketch throws an error
  httpsgithub.comprocessingprocessingissues3293


[ fixed in 3.0a8, confirmed later ] 

+ Step not working properly
  httpsgithub.comprocessingprocessingissues3266

+ Cmd-click behavior on functionvariable is firing when cmd-click not pressed
  httpsgithub.comprocessingprocessingissues3242

+ Full screen window on second monitor without using present mode
  httpsgithub.comprocessingprocessingissues3271


. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 


PROCESSING 3.0a8 (REV 0235) - 17 May 2015

Stabilizing the mess from 3.0a6 and 3.0a7. Read the release notes for
those versions (below) if you haven't already.

If you're using Eclipse or another IDE, be sure to read the changes
section below, for a change in how the size() command works.


[ fixes ]

+ size() sometimes erratic (i.e default size used) This was often 
  seen with large setup() functions, or on more esoteric platforms.
  httpsgithub.comprocessingprocessingissues1672

+ Command line processing-java was broken
  httpsgithub.comprocessingprocessingissues3224

+ Sketchbook window requires restart of Processing before updating
  after sketchbook location change.
  httpsgithub.comprocessingprocessingissues3214
  
+ Replace & Find was reading Find & Replace 
  httpsgithub.comprocessingprocessingissues3247

+ One file added to sketch message when two files added

+ pop() was not implemented correctly in StringIntFloatList

+ Errors in file name case differences not correctly reported
  httpsgithub.comprocessingprocessingissues3235

+ Single Frame (no screen display) PDF broken
  httpsgithub.comprocessingprocessingissues3280

+ Buffers have not been created error for sketches wo draw()
  httpsgithub.comprocessingprocessingissues2469


[ changes ]

+ Behind the scenes, the size() method is now moved out of setup()
  and into a method named settings(). The settings() is called before
  setup() and is the only place where size() can be used. If using
  Processing without the PDE (i.e. with another IDE like Eclipse),
  remove the size() method from setup() and instead place it like so
  
  public void settings() {
    size(400, 400, P3D);   your size() command here
  }
  
  The rest of your code remains unchanged. The PDE does this 
  transparently, so 99% of people won't even notice this change.
  However, it allows us to fix (and avoid) a lot of really nasty
  complications that come from how Processing lets you switch
  between 2D drawing and OpenGL and even something like PDF with
  simple changes to the size() method.

  We're trying settings() as the method name, but that may change
  in a future alpha release. Once we hit beta, it will not change.

  For those familiar with them, the sketchWidth(), sketchHeight(),
  sketchRenderer(), etc methods should no longer be used. This new
  implementation of the settings() method is a simpler solution.

+ Added SVG Export library (works like PDF Export). This has not
  been tested heavily yet. 

+ Replace Tweak Mode ColorSelector with JComponent version
  httpsgithub.comprocessingprocessingissues3209

+ Fairly major rewrite of createShape(), shouldn't affect anything,
  but keep an eye out for regressions.

+ Add new StringIntFloatDict constructors that take an array for
  useful staticinit initialization

+ Move svgz handling to PApplet, remove objz handling

+ Implement blendMode in FX2D
  httpsgithub.comprocessingprocessingissues3275

+ Added StringList(Object...) constructor to handle a grab bag of objects

+ Added appendUnique() to IntFloatStringList to only add unique items
  to a list. Replaces the following code, making set operations easier
  if (!theList.hasValue(value)) {
    thiList.append(value);
  }

+ Inside main(), don't set 'args' to a zero-length array if no args 
  were passed in, instead leave 'args' null. 


[ debugger ]

+ Debugger String is null error when hitting breakpoint
  httpsgithub.comprocessingprocessingissues3265

+ Change method to function in a few error messages
  httpsgithub.comprocessingprocessingissues3225
  
+ Error message for incorrect function arguments is wonky
  httpsgithub.comprocessingprocessingissues3268
  
+ String concatenation mistakes produce odd error messages
  httpsgithub.comprocessingprocessingissues3253


[ contributed fixes ]

+ Window size not passing into Tweak Mode
  httpsgithub.comprocessingprocessingissues3208
  httpsgithub.comprocessingprocessingpull3227
  
+ Keep the tab menu at the right-hand side
  httpsgithub.comprocessingprocessingpull3236

+ Your sketch has been modified externally... appears erroneously
  httpsgithub.comprocessingprocessingissues3222

+ Prevent breakpoints from causing a reload prompt
  httpsgithub.comprocessingprocessingpull3263
  
+ Added buffer to file detection time
  httpsgithub.comprocessingprocessingpull3262


[ akarshit contributions ]

+ Preferences window fixes for Linux
  httpsgithub.comprocessingprocessingpull3232
  httpsgithub.comprocessingprocessingissues3231
  
+ Clear error message in Contribution Manager after retrying
  httpsgithub.comprocessingprocessingpull3240
  httpsgithub.comprocessingprocessingissues3239
  
+ Add SOCKS proxy support to the PDE
  httpsgithub.comprocessingprocessingissues2643
  httpsgithub.comprocessingprocessingpull3260
  
+ Use system proxy by default
  httpsgithub.comprocessingprocessingissues1476
  httpsgithub.comprocessingprocessingpull3251


[ opengl by andres ]

+ Moved back to JOGL instead of LWJGL for OpenGL
  httpsgithub.comprocessingprocessingblobmastercoreREADME.md

+ OpenGL sketches work only after running a sketch with default renderer
  httpsgithub.comprocessingprocessingissues3218
  
+ static mode - no setup()  draw() - broken in OpenGL
  httpsgithub.comprocessingprocessingissues3163
  
+ Deal with some performance issues
  httpsgithub.comprocessingprocessingissues3210
  
+ Can't run sketches with offscreen PGraphics
  httpsgithub.comprocessingprocessingissues3259


. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 


PROCESSING 3.0a7 (REV 0234) - 26 April 2015

Read the notes in 3.0a6 for major changes! This is only a minor bug fix
release to take care of a few things that were broken in 3.0a6.


[ fixes ] 

+ Fix bug that prevented the Preferences window from opening
  httpsgithub.comprocessingprocessingissues3215

+ Installremove buttons not working in the LibraryModeTool Managers
  httpsgithub.comprocessingprocessingissues3172

+ Preferences window elements not sized correctly in 3.0a6
  httpsgithub.comprocessingprocessingissues3212
  httpsgithub.comprocessingprocessingpull3217
  httpsgithub.comprocessingprocessingpull3220

+ Fixed FindReplace layout regressions in 3.0a6
  httpsgithub.comprocessingprocessingissues3213
  httpsgithub.comprocessingprocessingpull3216

+ Avoid minor memory leak in StringList.pop()


[ known issues ] 

+ OpenGL sketches work on Windows (32- and 64-bit) only after running 
  a sketch that uses the default renderer
  httpsgithub.comprocessingprocessingissues3218

+ Other issues that are our highest priority for the next release
  httpsgithub.comprocessingprocessinglabelscritical

+ Other high priority items to be fixed before 3.0
  httpsgithub.comprocessingprocessingissuesq=is%3Aopen+label%3Ahigh+-label%3Aenhancement


. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 


PROCESSING 3.0a6 (REV 0233) - 25 April 2015

This is the big one! We've jettisoned PApplet as the base class so that
we can improve performance, reduce flicker, and have a better base from
which to build better, more modern graphics rendering. More of the 
gory details for the PAppletPGraphics changes can be found here
httpsgithub.comprocessingprocessingtreemastercore

Speaking of breaking things, we're on the road to a new GUI as well
httpsgithub.comprocessingprocessingissues3072
and that means all Modes and some Tools will need to be updated
httpsgithub.comprocessingprocessingissues3080

We've also made major changes to better integrate PDE X, Tweak Mode, 
and other nice features for the default Java Mode. These will be the
center of the changes for 3.x, which is focused on improving the editing 
and debugging experience in general. 

Suffice to say, this is truly an ALPHA quality release. We're pushing it
out so that we can get more people testing it. If you want something more
stable, we recommend 3.0a5 (not 2.2.1, that thing is old!) 

LibraryModeTool authors Please help us get 3.0 ready by getting your
code ready for 3.0! Because 2.x and 3.x contributions are separate, you
can maintain separate versions if you like (or only support 3.x). You 
can also specify the earliest and latest revisions of Processing that 
your code supports, so that it's only installed with the correct version. 
If anything is unclear, please file an issue. I've not had time to write
up all the changes yet (and some are still in progress), but what you see
in this release is representative of where we're headed for 3.0.


[ known issues ] 

The full list is here httpsgithub.comprocessingprocessingissues
but a few that you might be likely to run across

+ installremove buttons not working in the managers
  httpsgithub.comprocessingprocessingissues3172

+ static mode - no setup()  draw() - broken in OpenGL
  httpsgithub.comprocessingprocessingissues3163

+ sketch window is not placed at correct location when running a second time
  httpsgithub.comprocessingprocessingissues3125


[ general fixes and changes ] 

+ Merge experimental into the main Java mode, move Java Mode to its own area

+ Deal with ctrl-alt-n regression 
  httpsgithub.comprocessingprocessingissues2979

+ Don't add a ^M to files when writing
  httpsgithub.comprocessingprocessingissues3014

+ Add more bulletproofing to the save process
  httpsgithub.comprocessingprocessingissues2923

+ Text improvements for retina displays on OS X

+ Menu mnemonics (alt-f, etc) getting typed into the editor
  httpsgithub.comprocessingprocessingissues3057

+ Opening and closing preferences window prompts user to save unmodified sketch
  httpsgithub.comprocessingprocessingissues3074

+ Internal fixes and cleanups to TweakMode
  httpsgithub.comprocessingprocessingissues2799

+ Implement line numbers in the editor
  httpsgithub.comprocessingprocessingissues3128

+ Run button w debugger shouldn't require continue before actually starting
  httpsgithub.comprocessingprocessingissues3096

+ Change how platform-specific preferences are handled

+ Auto-insert after ANTLR @SuppressWarnings({ unused, unchecked, cast })

+ Your sketch has been modified externally appearing on OS X
  httpsgithub.comprocessingprocessingissues2852

+ Make sure the JRE downloads correctly before renaming
  httpsgithub.comprocessingprocessingissues2960

+ Update build scripts for Windows and Linux to use JRE downloader Ant Task
  httpsgithub.comprocessingprocessingissues3059

+ Moved to Java 8 because Java 7 will be discontinued
  httpwww.oracle.comtechnetworkjavajavaseeol-135779.html
  Requires Vista SP2 (let's just say 7), OS X 10.8.3, and Ubuntu 12.04

+ Update ECJ for Java 8 change
  httpdownload.eclipse.orgeclipsedownloadsdrops4R-4.4.1-201409250400

+ Update to launch4j 3.6
  httpsourceforge.netprojectslaunch4jfileslaunch4j-33.6


[ fixed earlier, not mentioned in revisions.txt ]

+ Move import suggestion to errors console
  httpsgithub.comprocessingprocessingissues2947

+ Server.stop() produces an error java.net.SocketException socket closed
  httpsgithub.comprocessingprocessingissues74
  httpsgithub.comprocessingprocessingpull2474

+ NPE when calling Client.ip() after the connection has been closed
  httpsgithub.comprocessingprocessingissues2576
  httpsgithub.comprocessingprocessingpull2922


[ who loves pull requests I do. ] 

+ Splash screen for Linux
  httpsgithub.comprocessingprocessingpull3005

+ Pressing PgDn in a code without scrollbar gives Exception
  httpsgithub.comprocessingprocessingissues2990

+ Add mnemonics for menus (alt-f to open 'file')
  httpsgithub.comprocessingprocessingissues51
  httpsgithub.comprocessingprocessingpull2382

+ getCaretLocation() bug in syntax.im package
  httpsgithub.comprocessingprocessingissues2934

+ Finish up debian package support
  httpsgithub.comprocessingprocessingissues114
  httpsgithub.comprocessingprocessingpull2972
  httpsgithub.comprocessingprocessingissues2973
  httpsgithub.comprocessingprocessingpull2974

+ Replace ColorChooser PApplets with custom Swing components
  httpsgithub.comprocessingprocessingpull2975

+ Fix encodings, line endings, and mime types in the repo
  httpsgithub.comprocessingprocessingissues2955
  httpsgithub.comprocessingprocessingpull2978
  httpsgithub.comprocessingprocessingpull2977

+ Add control for dependencies (i.e. svg needs xml), needed for export
  httpsgithub.comprocessingprocessingissues109
  httpsgithub.comprocessingprocessingpull3010

+ Lots of Auto Format fixes
  httpsgithub.comprocessingprocessingpull3002
  httpsgithub.comprocessingprocessingissues2540
  httpsgithub.comprocessingprocessingissues1041

+ Update name of sketch in the Recent menu
  httpsgithub.comprocessingprocessingissues2984
  httpsgithub.comprocessingprocessingpull3046

+ File change detection rewrite
  httpsgithub.comprocessingprocessingpull3048
  httpsgithub.comprocessingprocessingpull3070

+ Broken Windows build due to launch4j .jar not updated
  httpsgithub.comprocessingprocessingissues3062
  httpsgithub.comprocessingprocessingpull3066

+ Exported Linux sketches must be run from the sketch folder
  httpsgithub.comprocessingprocessingissues1046
  httpsgithub.comprocessingprocessingpull3083

+ processing.net.Server only cleans up internal Clients when trying to write
  httpsgithub.comprocessingprocessingissues3089
  httpsgithub.comprocessingprocessingpull3097

+ Display download percentage when fetching contribution info
  httpsgithub.comprocessingprocessingpull3161

+ Recreating Client instance will cause an out-of-memory error
  httpsgithub.comprocessingprocessingissues1400
  httpsgithub.comprocessingprocessingpull3088

+ Greek translation and new fonts
  httpsgithub.comprocessingprocessingpull3025

+ Show tooltip when hovering over errors
  httpsgithub.comprocessingprocessingpull3119

+ Fix multi-touch horizontal scrolling on OS X
  httpsgithub.comprocessingprocessingpull3170
  httpsgithub.comprocessingprocessingissues180

+ Refactor examples manager window
  httpsgithub.comprocessingprocessingissues3133
  httpsgithub.comprocessingprocessingpull3177

+ Fix ColorChooser cursor
  httpsgithub.comprocessingprocessingpull3186

+ Improve Spanish localization 
  httpsgithub.comprocessingprocessingpull3185

+ Internationalization of editor error messages and Greek translations
  httpsgithub.comprocessingprocessingpull3189

+ Improve internationalization and localization in Greek
  httpsgithub.comprocessingprocessingpull3197

+ Fix for Probably a ++ should go here messages
  httpsgithub.comprocessingprocessingissues2956

+ Missing opening curly bracket error
  httpsgithub.comprocessingprocessingissues3104

+ Missing parenthesis error message
  httpsgithub.comprocessingprocessingissues3103


[ pulls from Joel ]

+ Add reference for installed tools and libraries to the Help menu
  httpsgithub.comprocessingprocessingissues943
  httpsgithub.comprocessingprocessingpull2804

+ examples.properties file missing prevents startup
  httpsgithub.comprocessingprocessingissues3037
  httpsgithub.comprocessingprocessingpull3047

+ Several new French translations
  httpsgithub.comprocessingprocessingpull3061

+ contributions.txt now gets deleted and recreated instead of overwritten
  httpsgithub.comprocessingprocessingpull3073
  httpsgithub.comprocessingprocessingissues2994

+ Contrib Manager does not stop parsing contribs.txt if an error exists
  httpsgithub.comprocessingprocessingpull3132

+ Offer to install libraries imported libraries that are not available
  httpsgithub.comprocessingprocessingpull3155
  httpsgithub.comprocessingprocessingissues2566

+ Make fatal errors terminate the pde
  httpsgithub.comprocessingprocessingissues3068
  httpsgithub.comprocessingprocessingpull3069

+ Java 8 method replace() used, removed
  httpsgithub.comprocessingprocessingissues3168
  httpsgithub.comprocessingprocessingpull3169

+ Closing a few unclosed BufferedReaders and InputStreams
  httpsgithub.comprocessingprocessingpull2961


[ Akarshit pulls away from the pack ]

+ Rewrite preferences window to use proper layout
  httpsgithub.comprocessingprocessingissues67
  httpsgithub.comprocessingprocessingissues2708
  httpsgithub.comprocessingprocessingissues2986

+ FindReplace dialog changed to GroupLayout
  httpsgithub.comprocessingprocessingpull3190
  httpsgithub.comprocessingprocessingpull3131

+ Issues with cutcopy shortcuts not working
  httpsgithub.comprocessingprocessingpull3138
  httpsgithub.comprocessingprocessingissues3136
  httpsgithub.comprocessingprocessingissues3107

+ IllegalArgumentException when clicking between editor windows
  httpsgithub.comprocessingprocessingissues2530
  httpsgithub.comprocessingprocessingpull3101

+ Newline after a very long line moves the visible area right
  httpsgithub.comprocessingprocessingissues3148
  httpsgithub.comprocessingprocessingpull3196

+ lerpColor() outside of setup()draw() kills sketch
  httpsgithub.comprocessingprocessingissues3145

+ Use default colorMode() with lerpColor() outside setup()
  httpsgithub.comprocessingprocessingpull3146

+ textAlign(RIGHT) adds extra space to the right
  httpsgithub.comprocessingprocessingpull3078
  httpsgithub.comprocessingprocessingissues3028

+ rectMode() broken for createShape with JAVA2D
  httpsgithub.comprocessingprocessingissues3024
  httpsgithub.comprocessingprocessingpull3102


[ processing.core ] 

+ Remove Applet as the base class. 
  httpsgithub.comprocessingprocessingtreemastercore

+ Replaced JOGL with LWJGL. Ongoing JOGL support is unclear and LWJGL
  seems to be more consistently maintained. Unfortunately, it trades 
  one set of quirks for another.

+ Renamed 2x (hidpiretina) versions of renderers to JAVA2D_2X, P3D_2X, etc.

+ add warning message when a negative textSize() is used
  httpsgithub.comprocessingprocessingissues3110

+ loadXxxx() methods will truly follow redirects (including http - https)
  httpsgithub.comprocessingprocessing-docsissues218

+ noSmooth() not sticking, has to be called again inside draw()
  httpsgithub.comprocessingprocessingissues3113

+ Sketch window dimensions off in Java2D
  httpsgithub.comprocessingprocessingissues3129
  httpsgithub.comprocessingprocessingpull3162

+ Dragging sketch window hides it
  httpsgithub.comprocessingprocessingissues3092

+ size(640,360 , P3D) doesn't work properly (fixed in 3.0a5)
  httpsgithub.comprocessingprocessingissues2924
  httpsgithub.comprocessingprocessingissues2925


[ more contributions! ] 

+ saveFrame() doesn't save opaque PNG files
  httpsgithub.comprocessingprocessingissues3031
  httpsgithub.comprocessingprocessingpull3067

+ Fixes to SVG, implement percentages and some named colors
  httpsgithub.comprocessingprocessingpull3205
  httpsgithub.comprocessingprocessingissues2992

+ Add option to save JSON in compact form
  httpsgithub.comprocessingprocessingpull3202

+ Remove extra edges in sphere tessellation
  httpsgithub.comprocessingprocessingissues3193
  httpsgithub.comprocessingprocessingpull3211

+ Add exceptions for FloatList and IntList when using add() wo enough elements
  httpsgithub.comprocessingprocessingpull3053
  httpsgithub.comprocessingprocessingissues3052

+ Video library is incompatible with 0233
  httpsgithub.comprocessingprocessingissues3114


[ processing.data ] 

+ Ensure # of columns and titles lines up with Table(iterator) constructor

+ Add table header to saveTable() with HTML output

+ Remove extra spaces from HTML output

+ Make save() and write() consistent between JSONObject and JSONArray

+ Add indent=N to saveJSONObjectArray() methods

+ Add 'compact' to JSONArray (see PR for the add to JSONObject)

+ Add push() and pop() to StringIntFloatList


[ sketch ]

+ Added E2D, an experimentalenhanced renderer that draws directly 
  to the Graphics context without an intermediate image. This greatly 
  speeds up performance (especially on retinahidpi displays), but 
  prevents pixel access (no save(), saveFrame(), loadPixels(), etc). 
  It also causes some rendering hiccups (frame rate is not as smooth), 
  but that's why it's experimental.

+ Remove isGL(), is2D(), is3D(), displayable() from PApplet
  (these were unintentionally auto-imported from PGraphics)

+ Remove pause variable from PApplet (was not documented)

+ Added copy() to PImage (to work like get(), ala PVector)

+ Added getFontRenderContext() to PGraphics

+ Add error message when doing loadFont() on an OTF
  httpsgithub.comprocessingprocessingissues2876

+ Memory usage insane increasing in 3.0a5
  httpsgithub.comprocessingprocessingissues3007

+ Remove setgetremoveCache() methods from PApplet, these should
  have been marked ignore in PGraphics all along

+ Fixprevent flicker on startup
  httpsgithub.comprocessingprocessingissues3134

+ static mode - no setup()  draw() - broken in Java2D
  httpsgithub.comprocessingprocessingissues3130

+ Switch to using the EDT for launching sketch and talking to the OS

+ Roll back problematic full screen changes on OS X
  httpsgithub.comprocessingprocessingissues2641


. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 


PROCESSING 3.0a5 (REV 0232) - 16 November 2014

Hello from the University of Denver! I'm here with Casey, Dan, Andres, 
and Manindra working on 3.0. Chris Coleman and Laleh Mehran have been 
hosting us on behalf of the EDP program. It all looks a bit like this
httpstwitter.comdigitalcolemanstatus533784122179596288


[ changes ]

+ Removed the sound library. It's now available as its own library 
  from the Library Manager.

+ Change how languages are loaded, adding a local override.

+ Update to use JREJDK 7u72

+ Implement the active() method for Serial and Server 
  httpsgithub.comprocessingprocessingissues2364
  httpsgithub.comprocessingprocessingpull2588

+ Detect CMYK JPEG images and return null
  httpscommunity.oracle.comthread1272045start=0&tstart=0

+ Fix XML.getString() with a default when no attrs are present at all.
  It was causing a NullPointerException; this also fixes getInt(), et al.

+ Fix how dictionary classes return '0' for missing values. Add optional
  second parameter so that it's possible to avoid the exceptions.

+ Fix how nulls are handled with Table.replace()

+ Add (simple) ODS writer to Table

+ Add addRows(Table) method (more efficient, one resize)

+ Support header option with ODS files

+ Show a warning when calling getVertexCount() on GROUP or PRIMITIVE shapes
  httpsgithub.comprocessingprocessingissues2873
  httpsgithub.comprocessingprocessing-docsissues167

+ Change code completion preferences a bit. It's still turned off by
  default, but enable it and help us test!


[ bug fixes ]

+ Remove debug message printed to the console when the control key 
  is pressed, when using the new editor.

+ size(640,360 , P3D) doesn't work properly (strange spacing)
  httpsgithub.comprocessingprocessingissues2924
  httpsgithub.comprocessingprocessingpull2925

+ Fix the shortcut keybindings in editor tab popup menu
  httpsgithub.comprocessingprocessingissues179
  httpsgithub.comprocessingprocessingpull2821

+ Fix for ToolTipManager error
  httpsgithub.comprocessingprocessingissues2926

+ Confusing message The shader doesn't have a uniform called foo
  httpsgithub.comprocessingprocessingissues2593

+ Exceptions in P3D  P2D not showing up properly
  httpsgithub.comprocessingprocessingissues2930


[ contributed fixes ] 

+ Cmd + H runs sketch instead of hiding the PDE (OS X)
  httpsgithub.comprocessingprocessingissues2881

+ Migrate to unsynchronized data structures
  httpsgithub.comprocessingprocessingpull2863

+ Improve contrib manager localization
  httpsgithub.comprocessingprocessingpull2870

+ Fix typo in spanish translation
  httpsgithub.comprocessingprocessingpull2906

+ Update ECJ, use 1.7 as source and target Java version
  httpsgithub.comprocessingprocessingpull2907

+ Fix infinite recursion in sound library
  httpsgithub.comprocessingprocessingpull2897

+ Add missing generic type parameters
  httpsgithub.comprocessingprocessingpull2899

+ Remove unused Base.builtOnce instance variable
  httpsgithub.comprocessingprocessingpull2864

+ Other miscellaneous fixes
  httpsgithub.comprocessingprocessingpull2865

+ Moved the language stuff to its own separate folder
  httpsgithub.comprocessingprocessingpull2941

+ Some minor UpdateChecker refactorings
  httpsgithub.comprocessingprocessingpull2830

+ Minor improvements to the Contribution Manager's updates check
  httpsgithub.comprocessingprocessingpull2861

+ Make Cut and Copy in the edit menu active only if some text is selected
  httpsgithub.comprocessingprocessingpull2834

+ Fix renaming from RGB to Rgb.java and others
  httpsgithub.comprocessingprocessingpull2825

+ Sketches should only write to the console of their editor window
  httpsgithub.comprocessingprocessingissues153
  httpsgithub.comprocessingprocessingissues2858
  httpsgithub.comprocessingprocessingpull2827

+ Extend translations and update German language
  httpsgithub.comprocessingprocessingpull2949

+ NullPointerException message when Server writes to a disconnected client
  httpsgithub.comprocessingprocessingissues2577
  httpsgithub.comprocessingprocessingpull2578

+ Fix check in loadShader()
  httpsgithub.comprocessingprocessingpull2867

+ Refined PShader uniform missing message fixes
  httpsgithub.comprocessingprocessingpull2869

+ Use correct parameter types in FloatList methods
  httpsgithub.comprocessingprocessingpull2902

+ Pass correct offset to glCopyTexSubImage2D
  httpsgithub.comprocessingprocessingpull2898

+ beginShape(POINTS) not working for PShape
  httpsgithub.comprocessingprocessingissues2912
  httpsgithub.comprocessingprocessingpull2915

+ Multiple blending fixes & improvements
  httpsgithub.comprocessingprocessingpull2921
  httpsgithub.comprocessingprocessingissues2807
  httpsgithub.comprocessingprocessingissues1224
  httpsgithub.comprocessingprocessingpull2601
  httpsgithub.comprocessingprocessingissues1844

+ Prevent lerpColor from always rounding down
  httpsgithub.comprocessingprocessingissues2812
  httpsgithub.comprocessingprocessingpull2813

+ Allow mask() with PGraphicsJava2D
  httpsgithub.comprocessingprocessingpull2910

+ OpenGL renderers ignore vertex winding in contours
  httpsgithub.comprocessingprocessingissues2665
  httpsgithub.comprocessingprocessingpull2927

+ NPE when calling Client.ip() after the connection has been closed
  httpsgithub.comprocessingprocessingissues2576
  httpsgithub.comprocessingprocessingpull2922

+ 'return' keyword not treated as such when followed by a bracket
  httpsgithub.comprocessingprocessingissues2099
  httpsgithub.comprocessingprocessingpull2958


. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 


PROCESSING 3.0a4 (REV 0231) - 12 September 2014

Another release to deal with a handful of bugs found in the last alpha.
The next alpha release will contain major changes and break a few libraries
and tools, so this is an attempt at a final stable alpha that can be used
until all those issues are sorted out.

[ changes ] 

+ Contributions (Libraries, Modes, Tools) are now read from their own
  listing that's specific to Processing 3.
  httpsgithub.comprocessingprocessingissues2850
  httpsgithub.comprocessingprocessingissues2849

+ Made the new editor the default. 

+ The OS X default File menu (shown when no windows are open) now has the
  ordernaming changes found in the sketch window File menu. 

+ Turning off file watching because of errant this sketch has changed
  messages. Hopefully this will return soon.
  httpsgithub.comprocessingprocessingissues2852

+ Turned off code completion by default and reset its preference name.


[ bug fixes ] 

+ TGAs from saveFrame() create transparentblack movies with Movie Maker
  httpsgithub.comprocessingprocessingissues2851

+ Fix export problem on Windows when using the new editor
  httpsgithub.comprocessingprocessingissues2806

+ Fix black outline around scaled fonts with the OpenGL renderer
  httpsgithub.comprocessingprocessingissues2845
  httpsgithub.comprocessingprocessingpull2856

+ Several fixes to the contributions manager
  httpsgithub.comprocessingprocessingissues2798
  httpsgithub.comprocessingprocessingissues2831


[ internal tweaks ] 

+ Optimize creation of boxed primitives
  httpsgithub.comprocessingprocessingpull2826

+ Add static modifier to inner classes that don't access parent
  httpsgithub.comprocessingprocessingpull2839

+ Fix localization in OS X (requires writing property files)
  httpsgithub.comprocessingprocessingpull2844


. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 


PROCESSING 3.0a3 (REV 0230) - 26 August 2014

The 3.0 process continues as we've wrapped up a very successful 
Google Summer of Code, and have also been integrating contributions
(internationalization!) from some helpful community members. 

In particular, Jakub Valtar, Darius M, and Frederico Bond are my heroes
httpsgithub.comprocessingprocessingcommitsmasterauthor=jakubvaltar
httpsgithub.comprocessingprocessingcommitsmasterauthor=federicobond
httpsgithub.comprocessingprocessingcommitsmasterauthor=voidplus


[ changes ]

+ Removed toolbar buttons except for startstop. This is part of a larger
  set of GUI changes for 3.0. At the moment it makes the design really
  awkward, but we needed to take the step in preparation for the larger
  changes to come.


[ fixes and updates ]

+ The sound library is now available for 64-bit Windows and Linux. 
  32-bit versions are still in the works.

+ Don't write sketch.properties unless it's a non-default mode
  httpsgithub.comprocessingprocessingissues2531

+ Add another NaN check when sorting FloatListDict classes.
  If all values were NaN, an ArrayIndexOutOfBoundsException was thrown.

+ PShape for JAVA2D (in progress)
  httpsgithub.comprocessingprocessingpull2756

+ Add trim() method to the XML library to remove whitespace #text.

+ Maximizing window leads to erroneous mouse coordinates
  httpsgithub.comprocessingprocessingissues2562


[ summer of code ]

+ Fixes for modetool installation
  httpsgithub.comprocessingprocessingpull2705

+ Fix mode updating to work properly
  httpsgithub.comprocessingprocessingissues2579

+ Contribution manager temp folders weren't always deleting
  httpsgithub.comprocessingprocessingissues2606

+ Problems when deleting a mode
  httpsgithub.comprocessingprocessingissues2507

+ Autocompletion dialog box sticking
  httpsgithub.comprocessingprocessingissues2741

+ Line warning indicators next to scrollbar break after moving around text
  httpsgithub.comprocessingprocessingissues2655

+ Code completion generates wrong code
  httpsgithub.comprocessingprocessingissues2753

+ Code completion Hide overloaded methods unless inside parentheses
  httpsgithub.comprocessingprocessingissues2755

+ Close auto-completion suggestion box when deletingbackspacing code
  httpsgithub.comprocessingprocessingissues2757

+ Error checking too aggressive in the current alpha
  httpsgithub.comprocessingprocessingissues2677

+ If 'void' left out before setup or draw, cryptic error message ensues
  httpcode.google.compprocessingissuesdetailid=8
  httpsgithub.comprocessingprocessingissues47

+ Improve how the Contributions Manager handles no internet connection
  httpsgithub.comprocessingprocessingpull2800

+ Added examples-package as a new contribution type
  httpsgithub.comprocessingprocessingpull2795
  httpsgithub.comprocessingprocessingissues2444
  httpsgithub.comprocessingprocessingissues2582

+ Contributions Managers now show specific titles
  httpsgithub.comprocessingprocessingpull2777

+ Add rank (starred  recommended) to contributions manager items
  httpsgithub.comprocessingprocessingissues2580


[ contributions ]

+ Add internationalization (support for other languages)
  httpsgithub.comprocessingprocessingissues632
  httpsgithub.comprocessingprocessingpull2084
  httpcode.google.compprocessingissuesdetailid=593
  httpsgithub.comprocessingprocessingpull2704
  httpsgithub.comprocessingprocessingpull2725
  httpsgithub.comprocessingprocessingpull2726
  httpsgithub.comprocessingprocessingpull2770
  httpsgithub.comprocessingprocessingpull2780

+ Add localizations (support for individual languages)
  Japanese httpsgithub.comprocessingprocessingpull2688
  Spanish httpsgithub.comprocessingprocessingpull2691
  and httpsgithub.comprocessingprocessingpull2769
  Dutch httpsgithub.comprocessingprocessingpull2694
  French httpsgithub.comprocessingprocessingpull2695
  Portugese httpsgithub.comprocessingprocessingpull2701
  Korean httpsgithub.comprocessingprocessingcommit7b60e2ded9ca81f6a5a08a818aaf84ee4bb029e3
  Turkish httpsgithub.comprocessingprocessingpull2740
  Chinese httpsgithub.comprocessingprocessingpull2748

+ Add polling to detect file system changes
  httpsgithub.comprocessingprocessingissues1939
  httpsgithub.comprocessingprocessingpull2628
  httpsgithub.comprocessingprocessingpull2794
  httpsgithub.comprocessingprocessingissues2759

+ Indent breaks when hitting enter before spaces
  httpsgithub.comprocessingprocessingissues2004
  httpsgithub.comprocessingprocessingpull2690

+ Localize status messages and contributions panel
  httpsgithub.comprocessingprocessingpull2696

+ Prevent adding files to read-only sketches
  httpsgithub.comprocessingprocessingissues2459
  httpsgithub.comprocessingprocessingpull2697

+ Add thread names for easier debugging and profiling
  httpsgithub.comprocessingprocessingpull2729

+ Fix firstLine when modifying lines above it
  httpsgithub.comprocessingprocessingissues2654
  httpsgithub.comprocessingprocessingpull2674

+ Clean up completion panel styling when using Nimbus LAF
  httpsgithub.comprocessingprocessingpull2718
  httpsgithub.comprocessingprocessingpull2762

+ Implement support for enums
  httpsgithub.comprocessingprocessingissues1390
  httpcode.google.compprocessingissuesdetailid=1352
  httpsgithub.comprocessingprocessingpull2774

+ Combining charintetc casts in one statement causes preproc trouble
  httpsgithub.comprocessingprocessingissues1936
  httpsgithub.comprocessingprocessingpull2772

+ Make --output optional in the command line version
  httpsgithub.comprocessingprocessingpull1866
  httpsgithub.comprocessingprocessingissues1855
  httpsgithub.comprocessingprocessingissues1816

+ Fix unneeded scroll bar display in code completion suggestion box
  httpsgithub.comprocessingprocessingpull2763

+ Replace Thread with invokeLater in PreferencesFrame
  httpsgithub.comprocessingprocessingpull2811

+ Initialize the ColorSelector tool on demand
  httpsgithub.comprocessingprocessingpull2823

+ Call applet.exit() instead of System.exit() from Present Mode's 'stop'
  httpsgithub.comprocessingprocessingpull2680
  
+ Drawing RECT PShape with rounded corners crashes the sketch
  httpsgithub.comprocessingprocessingissues2648

+ Corrected a typo in Tessellator#addQuadraticVertex()
  httpsgithub.comprocessingprocessingpull2649

+ Fix tiny typo in Table writeHTML()
  httpsgithub.comprocessingprocessingpull2773


[ fixed earlier but un-noted ]

+ PShape disableStyle() does not work with createShape()
  httpsgithub.comprocessingprocessingissues1523

+ Multisampled offscreen PGraphics don't clear the screen properly
  httpsgithub.comprocessingprocessingissues2679


. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 


PROCESSING 3.0a2 (REV 0229) - 31 July 2014

The 3.0 train gains steam and continues to hurtle down the track.


[ changes ] 

+ Added a new sketchbook location, so that you can have separate sketchbooks
  with 2.0 and 3.0 releases. The downside is that they won't stay in sync, 
  but the upside is that sketches that haven't been updated, or conflicting
  Libraries, Modes, or Tools won't cause trouble with the other version. 
  The new preference is called sketchbook.location.three (the old preference
  was sketchbook.location). If you already have a 2.0 sketchbook, that will
  be used by default with 3.0 until you change it in the Preferences window.

+ Neglected to mention with the previous release that the video library has
  been removed from the default download. This decreases the size of the
  Processing download by about 20%. In addition, it was only the video 
  library for the platform being downloaded, and with the return of cross-
  platform application export, that could cause sadness. To use the video
  library, use the Add Library... menu and select it from the list.

+ Added a new preference for the 3.0 sketchbook location, so that a separate
  sketchbook (and with it, different Modes, Tools, and Libraries) can be 
  used with Processing 3.0 versus older versions of 2.x.

+ Remove default menu bar hack for OS X
  httpbugs.sun.combugdatabaseview_bug.dobug_id=8022667

+ Move to native OS X full screen (supported in 10.7 and later)
  httpsgithub.comprocessingprocessingissues2641
  This allows us to remove native code for hiding the menu bar. 
  But it may introduce more quirks, we'll have to test it out.


[ fixes ] 

+ The Examples weren't included in 3.0a1. Oops.
  httpsgithub.comprocessingprocessingissues2652

+ Fix No such file or directory error when exporting on Mac OS X.
  This bug actually meant that OS X apps weren't signed
  httpsgithub.comprocessingprocessingissues2614

+ Prevent opening sketches multiple times
  httpsgithub.comprocessingprocessingissues2506

+ Disable Mac OS X export button on other platforms
  httpsgithub.comprocessingprocessingissues2642

+ Removed duplicate 'fonts' folder in the download

+ Removed welcome message from the sound library

+ Get the 'modified' indicator working on OS X document windows again
  httpsgithub.comprocessingprocessingissues2194

+ Do bounds check on setVertex(PVector)
  httpsgithub.comprocessingprocessingissues2556

+ Using createGraphics() wo beginendDraw(), don't attempt drawing w image()
  httpsgithub.comprocessingprocessingissues2208


[ the data classes ] 

+ Add copy() method to Table

+ Return null from getString() with float and double values that are NaN.
  Fixes how saveTable() works (writes blank entries instead of NaN).

+ get(5) with an empty IntFloatStringList was returning 0
  httpsgithub.comprocessingprocessingpull2343

+ FloatDict and FloatList should always put NaN values at the end on sort.

+ Add print() method to the various data types.


[ summer of code ]

+ URL opening problem fixed by use of getCanonicalPath() on Windows
  httpsgithub.comprocessingprocessingissues2656

+ If Server constructor fails, throw an exception
  httpsgithub.comprocessingprocessingissues2604

+ Clear status messages in the Contribution Manager
  httpsgithub.comprocessingprocessingpull2667
  httpsgithub.comprocessingprocessingissues2599

+ Add a progress bar for slow Save As (and Add File) operations
  httpcode.google.compprocessingissuesdetailid=31
  httpsgithub.comprocessingprocessingissues70
  httpsgithub.comprocessingprocessingpull2370

+ NullPointerException in addBreakpointComments() when saving sketch
  httpsgithub.comprocessingprocessingissues2675

+ Run button was staying highlighted permanently
  httpsgithub.comprocessingprocessingissues2676

+ Dialog box for new tabrename tabsketch
  httpsgithub.comprocessingprocessingissues2431

X Fixed issue where the browser wasn't opening the reference properly
  httpsgithub.comprocessingprocessingpull2657


[ you request, we pull ] 

+ Insert tabs properly when prefs set for tabs mode
  httpsgithub.comprocessingprocessingpull2607

+ Improve the appearance when using the Nimbus LAF 
  httpsgithub.comprocessingprocessingpull2671

+ Implement A and a (elliptical arcs)
  httpsgithub.comprocessingprocessingissues169
  httpcode.google.compprocessingissuesdetailid=130
  httpsgithub.comprocessingprocessingpull2659

+ Fix typo in StringList.insert()
  httpsgithub.comprocessingprocessingpull2672
  httpsgithub.comprocessingprocessingissues2548

+ PImage resize() causes images to not draw
  httpsgithub.comprocessingprocessingissues2228
  httpsgithub.comprocessingprocessingpull2324


[ fixed in earlier releases ] 

+ maxHeapSize typo in the build scripts
  httpsgithub.comprocessingprocessingissues2603

+ for() loop with nothing inside parens crashes Auto Format
  httpsgithub.comprocessingprocessingissues2141

+ Chinese text is overlapped in Processing 2.1 editor
  httpsgithub.comprocessingprocessingissues2173

+ Implement Windows menu in the PDE
  httpsgithub.comprocessingprocessingissues584

+ Default font fixes (merged for 2.2.1 or earlier)
  httpsgithub.comprocessingprocessingissues2331
  httpsgithub.comprocessingprocessingpull2338

+ image resize() takes oddly long time
  httpsgithub.comprocessingprocessingissues5


. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 


PROCESSING 3.0a1 (REV 0228) - 26 July 2014

Kicking off the 3.0 release process. The focus for Processing 3 is improving
the editor and the coding process, so we'll be integrating what was formerly
PDE X as the main editor.

This release also includes a number of bug fixes and changes, based on 
in-progress Google Summer of Code projects and a few helpful souls on Github.

Please contribute to the Processing 3 release by testing and reporting bugs.
Or better yet, helping us fix them and submitting pull requests.


[ contributed fixes! ] 

+ Fix blendMode() problems in the default renderer (thanks Jakub Valtar!)
  httpsgithub.comprocessingprocessingissues2012
  httpsgithub.comprocessingprocessingissues2275
  httpsgithub.comprocessingprocessingissues2276
  httpsgithub.comprocessingprocessingissues2483

+ Lighting issues with non-planar triangle strips or quad strips
  httpsgithub.comprocessingprocessingissues2014
  httpsgithub.comprocessingprocessingissues2018
  httpsgithub.comprocessingprocessingpull2644

+ Set the application name on Linux
  httpsgithub.comprocessingprocessingissues2534
  httpsgithub.comprocessingprocessingpull2584

+ Serial library not working on export
  httpsgithub.comprocessingprocessingissues2559

+ Fix build problems on Windows
  httpsgithub.comprocessingprocessingissues2603
  httpsgithub.comprocessingprocessingpull2610

+ filter() not applying to images produced by saveframe() consistently
  httpsgithub.comprocessingprocessingissues2619

+ drawLatch in PJOGL can be null after requesting frame rendering
  httpsgithub.comprocessingprocessingissues2630


[ summer of code ] 

+ Line coloring incorrect for filtered contribution listings
  httpsgithub.comprocessingprocessingissues2583
  httpsgithub.comprocessingprocessingpull2598

+ Added Present's background color as an option to the Preferences window
  httpsgithub.comprocessingprocessingpull2568

+ Check for updates on startup
  httpsgithub.comprocessingprocessingpull2636

+ Avoid problems with out-of-date contribution list
  httpsgithub.comprocessingprocessingissues2572

+ Integrate tweak mode into the new editor
  httpsgithub.comprocessingprocessingpull2624

+ Implementation of a list of open sketches in the Sketch menu
  httpsgithub.comprocessingprocessingpull2551

+ Add preference to set the present color
  httpsgithub.comprocessingprocessingpull2568

+ Fix a problem where mode menu selection would change even if 
  the change was canceled due to the sketch being modified
  httpsgithub.comprocessingprocessingissues2615

+ Add date and time stamps to the Contribution Manager
  httpsgithub.comprocessingprocessingpull2651


[ more bug fixes ] 

+ Prevent the current Mode from being de-selected
  httpsgithub.comprocessingprocessingissues2545

+ Prevent ArrayIndexOutOfBoundsException when calling minmaxValue() 
  on a FloatDict that only contains NaN values

+ Last row was being skipped on tables with the 'newlines' option set

+ Debug table parsing with header rows

+ Bug fix for setting Table data types

+ Fixes for new Table(Iterable). Category data types were not importing
  their dictionary, column titles weren't set, and performance improvements
  were badly needed.

+ When using setColumnType(), replace nulls with missingInt, missingFloat, etc
  Formerly, this was throwing a NullPointerException.


[ changes ] 

+ A new sound library has been added, and Minim has been removed. Minim
  will now available via the Contributions Manager. 

+ Add copy() method to PVector

+ Major performance improvements to parsing w the 'newlines' option

+ add getColumnTitle(int) and getColumnTitles() to TableRow interface


. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 


PROCESSING 2.2.1 (REV 0227) - 19 May 2014

A handful of bug fixes, the most prominent rolls back a change that broke
PDE X and other Modes and Tools. 

+ Bring back setIcon(Frame) for PDE X and others
  httpsgithub.comprocessingprocessing-experimentalissues64

+ Add additional code for crashing when the Mode is changed or new editor
  windows opened.

+ Use mouseReleased() instead of mousePressed() in the color selector, 
  otherwise it registers the release as a click in the color window
  httpsgithub.comprocessingprocessingissues2514

+ Missing 'version' in contribution properties file causes NullPointerException
  httpsgithub.comprocessingprocessingissues2517

+ A handful of fixes to Auto Format
  httpsgithub.comprocessingprocessingpull2271

+ Command line tools not working on OS X due to AppleDouble file boogers.
  httpsgithub.comprocessingprocessingissues2520

+ Make Archive Sketch Tool force a .zip file extension
  httpsgithub.comprocessingprocessingissues2526

+ Event handling modifications in video and serial libraries w Python Mode
  httpsgithub.comprocessingprocessingpull2527
  httpsgithub.comprocessingprocessingpull2528
  httpsgithub.comprocessingprocessingpull2529

+ Permit mouse PRESS to set mouseXmouseY
  httpsgithub.comprocessingprocessingpull2509

+ Fix for video the loop() method was broken in the last release.
  httpsgithub.comprocessingprocessingissues2524

+ Updated reference files included in the download.


. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 


PROCESSING 2.2 (REV 0226) - 12 May 2014

Major changes to, and improvements upon, how Export to Application works.
Plus dozens of bug fixes for all manner of atrocities.


[ bug fixes and additions ] 

+ Sketches only starting once, or half-starting and hanging on Mac OS X.
  A major problem on OS X, thanks to David Fokkema for tracking down a fix.
  httpsgithub.comprocessingprocessingissues2402
  httpsgithub.comprocessingprocessingpull2455

+ Re-open current sketch in new mode editor if file extension is compatible.
  This was a regression in 2.1.2 due to the Python Mode changes.
  httpsgithub.comprocessingprocessingpull2457
  httpsgithub.comprocessingprocessingissues2456

+ Crash in the 'recent' menu on startup
  httpsgithub.comprocessingprocessingissues2463

+ Avoid conflict when some goofball has installed JNA DLLs in your path.
  httpsgithub.comprocessingprocessingissues2239

+ Add support for import static syntax from Java
  httpsgithub.comprocessingprocessingissues8
  httpsgithub.comprocessingprocessingpull2273

+ Improve error handling during Tool loading. In previous releases, an
  out of date QuickReference Tool was able to hang Processing. No longer.
  httpsgithub.comprocessingprocessingissues2229

+ Save the previous open dialog so that we return to the directory
  httpsgithub.comprocessingprocessingpull2366

+ if-else block formatting wasn't following Processing conventions
  httpsgithub.comprocessingprocessingissues364
  httpsgithub.comprocessingprocessingpull2477

+ Tab characters not recognized or handled in the editor (since 2.1)
  httpsgithub.comprocessingprocessingissues2180
  httpsgithub.comprocessingprocessingissues2183

+ Chinese text is overlapped in Processing 2.1 editor
  httpsgithub.comprocessingprocessingissues2173
  httpsgithub.comprocessingprocessingpull2318
  httpsgithub.comprocessingprocessingpull2323


[ export to application ]

+ The return of multi-platform export! Create applications for Windows
  and Linux while using OS X. Create a Linux application from Windows. 
  Against my better judgement, we're supporting it again. It's extremely
  difficult, but was disappointing to remove it earlier.

+ When exporting with local Java embedded, always use that version
  httpsgithub.comprocessingprocessingissues2349

+ Change Windows export to use launch4j instead of our custom launcher.
  This will fix many, many problems, but may introduce some new ones. 

+ Windows (64-bit) now creates a proper .exe instead of a .bat file
  httpsgithub.comprocessingprocessingissues923

+ Exported apps on Windows 64 were not quite working correctly
  httpsgithub.comprocessingprocessingissues2468

+ Improved icons on Windows for exported apps

+ Add additional language and explanation to the Export dialog box

+ Make it possible to edit the background colors for full screen as well as
  the stop button color directly from the Export dialog box
  httpsgithub.comprocessingprocessingissues69

+ Exported apps reporting as damaged on OS X
  httpsgithub.comprocessingprocessingissues2095
  You'll have to install Xcode to remove the warnings, but it's possible


[ core ]

+ Fix for splice() throwing a ClassCastException with other object types
  httpsgithub.comprocessingprocessingissues1445
  httpsgithub.comprocessingprocessingpull2461

+ Add candDraw() method to the retina renderer to fix embedding problems

+ Fix sketchPath() issue when used in other environments (i.e. Eclipse)

+ Substitute MOVE cursor with HAND on OS X
  httpsgithub.comprocessingprocessingissues2358

+ Allow textWidth() with the default font
  httpsgithub.comprocessingprocessingissues2331
  httpsgithub.comprocessingprocessingpull2338

+ Bug in relative moveto commands for SVG
  httpsgithub.comprocessingprocessingissues2377

+ Add a constructor to bind Server to a specific address 
  httpsgithub.comprocessingprocessingissues2356

+ Fonts from loadFont() show up as blocks in P3D (regression)
  httpsgithub.comprocessingprocessingissues2465

+ loadPixels() problems in OpenGL
  httpsgithub.comprocessingprocessingissues2493


. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 


PROCESSING 2.1.2 (REV 0225) - 15 April 2014

Lots of small bug fixes plus some additional changes to support 
the new Python Mode, coming soon httpsgithub.comjdfprocessing.py


[ the pde ] 

+ The PDE was using 15% of CPU while just sitting idle. Thanks to
  David Fokkema for the fix (and pull request).
  httpsgithub.comprocessingprocessingissues1561
  httpsgithub.comprocessingprocessingpull2451

+ Fix exception caused by Runner when it can't find location
  httpsgithub.comprocessingprocessingissues2346
  httpsgithub.comprocessingprocessingpull2359

+ Serial Update to latest upstream (fixes potential port handle leak)
  httpsgithub.comprocessingprocessingpull2361

+ Add affordance for mode developers to run from Eclipse
  httpsgithub.comprocessingprocessingpull2422

+ Non-PDE extensions for modes cause a crash
  httpsgithub.comprocessingprocessingissues2419

+ Remove some hardcoding for .pde as extension
  httpsgithub.comprocessingprocessingissues2420

+ Update code signing for Processing.app for Mavericks changes
  httpsgithub.comprocessingprocessingissues2453


[ the core ] 

+ sketchPath() was returning user.home in exported apps on OS X
  httpsgithub.comprocessingprocessingissues2181

+ Fix bug in StringDict(Reader) that wasn't setting the indices hashmap

+ Call revalidate() via reflection so that build works under 1.6 (using
  1.6 very much not supported, but we need it for regression testing).

+ Some text rendering improvements. Fairly limited in what we can fix here.

+ PGraphics.colorCalcARGB(int, float) wasn't properly capping alpha values
  httpsgithub.comprocessingprocessingissues2439

+ Make sure that the window background color isn't the same as the default 
  sketch background color (otherwise the sketch area isn't clear). 
  httpsgithub.comprocessingprocessingissues2297

+ Fix for occasional NullPointerException in paint()
  httpsgithub.comprocessingprocessingissues2354


[ andres vs opengl, episode 225 ] 

+ copy() under OPENGL uses upside-down coordinates for cropping
  httpsgithub.comprocessingprocessingissues2345

+ Video on Windows causes exception
  httpsgithub.comprocessingprocessingissues2327

+ Shape Font Rendering was broken with the OpenGL Renderer
  httpsgithub.comprocessingprocessingissues2375

+ Depth buffer shouldn't be cleared when depth mask is disabled
  httpsgithub.comprocessingprocessingissues2296

+ Set pixels transparent by default in P2DP3D
  httpsgithub.comprocessingprocessingissues2207

+ Unwind depth sorting because it was breaking DXF export
  httpsgithub.comprocessingprocessingissues2404

+ Sketch hangs if sketchRenderer() returns an OpenGL renderer
  httpsgithub.comprocessingprocessingissues2363

+ buffer uniform triggers shader compilation error
  httpsgithub.comprocessingprocessingissues2325
  buffer has been renamed to ppixels for shaders

+ noLoop() clears screen on Windows 8
  httpsgithub.comprocessingprocessingissues2416

+ Fix pixels[] array for video capture
  httpsgithub.comprocessingprocessingissues2424


[ fixed in earlier releases ] 

+ draw() called again before finishing on OS X (retina issue)
  httpsgithub.comprocessingprocessingissues1709

+ get() not always setting alpha channel when used with point()
  httpsgithub.comprocessingprocessingissues1756

+ support for geometry and tessellation shaders (on desktop)
  httpsgithub.comprocessingprocessingissues2252


. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 


PROCESSING 2.1.1 (REV 0224) - 21 January 2014

Several fixes for issues in 2.1 that weren't found in the 2.1 beta release.
Still a number of known issues, but this cleans up several of the biggies.

+ Fixed infinite loop in FindReplace
  httpsgithub.comprocessingprocessingissues2082

+ Updated to Minim 2.2
  httpsgithub.comprocessingprocessingpull2250

+ Minor change to bracket handling
  httpsgithub.comprocessingprocessingpull2313

+ On the command line version, --no-java wasn't working properly
  httpsgithub.comprocessingprocessingissues2182

+ get() + video requires loadPixels in P2DP3D
  httpsgithub.comprocessingprocessingissues2202


[ windows ] 

+ Export to Application was broken on Windows
  httpsgithub.comprocessingprocessingissues2219

+ Right-click on selection was causing text to de-select on Windows
  httpsgithub.comprocessingprocessingissues2210


[ mac os x ]

+ On Mac OS X, the app was called procesing.app.Base
  httpsgithub.comprocessingprocessingissues2217

+ Better support for native libraries in exported applications on OS X
  httpsgithub.comprocessingprocessingpull2269


[ serial library ]

+ readStringUntil() missing from new serial library
  httpsgithub.comprocessingprocessingissues2174

+ Miscellaneous pdates to the serial library
  httpsgithub.comprocessingprocessingpull2265

+ Serial (apears to be) running slowly
  httpsgithub.comprocessingprocessingissues2249
  httpsgithub.comprocessingprocessingissues2214

+ Read a single character at a time to emulate RXTX behavior
  httpsgithub.comprocessingprocessingpull2240

+ Add basic tests for throughput and latency
  httpsgithub.comprocessingprocessingpull2225

+ Add a debug() method to Serial
  httpsgithub.comprocessingprocessingpull2237

+ Switch the examples over to use printArray()
  httpsgithub.comprocessingprocessingpull2226

+ Handle the UnsatisfiedLinkError when loading the native library fails
  httpsgithub.comprocessingprocessingpull2266


[ core fixes ] 

+ PImage resize() causes PImage not to be rendered in JAVA2D
  httpsgithub.comprocessingprocessingissues2179

+ Remove make.sh from core source folder... ancient

+ Remove println() from the dataPath() method

+ Add special case for 'null' to println()

+ Added print() method to IntList

+ Fix esoteric typo with alpha and color
  httpsgithub.comprocessingprocessingissues2230

+ pushStylepopStyle should saverestore blendMode
  httpsgithub.comprocessingprocessingissues2232


[ opengl updates ]

+ PImage copy() function used with P2D flips the image
  httpsgithub.comprocessingprocessingissues2171

+ Filter shaders don't need to use the texture uniform
  httpsgithub.comprocessingprocessingissues2204

+ texture() bug with stroke() in P2D
  httpsgithub.comprocessingprocessingissues2205

+ Allow sharing of GL context amongst multiple windows
  httpsgithub.comprocessingprocessingissues1698

+ Texture sampling setting ignored when creating an offscreen PGraphics
  httpsgithub.comprocessingprocessingissues1900

+ Rounded rectangle broken with Processing 2.1 P3D renderer
  httpsgithub.comprocessingprocessingissues2193

+ Clear the global PGL on dispose()
  httpsgithub.comprocessingprocessingpull2279

+ Pie arcs have stroke between endpoints in P2DP3D
  httpsgithub.comprocessingprocessingissues2233


[ missing in the 2.1 release notes ] 

+ init() not called on tools until later 
  httpsgithub.comprocessingprocessingissues1859

+ Finish changes so the PDE can use an unmodified JRE
  httpsgithub.comprocessingprocessingissues1840


. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 


PROCESSING 2.1 (REV 0223) - 27 October 2013

There have been major changes since 2.0.3, most of them are outlined in 
the release notes for 2.1 beta 1 (look down a few dozen lines).

This release includes a few updates to fix problems introduced in the beta 
release, as well as additional general bug fixes, especially for OpenGL.

+ Added an option to not embed the Java runtime into an exported application.
  This saves you the 100 MB footprint, but requires your users to install
  Java 7u45 or later. Details on the same page that nobody read last time
  httpwiki.processing.orgwExport_Info_and_Tips

+ The new println() (see the beta 1 notes) makes some old code behave a 
  little differently. In the past, println() with an array would write 
  out the array, one element per line, with the index in the front. i.e.
  PFont.list()) would write something like this to the console

  [0] Serif
  [1] SansSerif
  [2] Monospaced
  [3] Dialog
  [4] DialogInput
  [5] ACaslonPro-Bold
  [6] ACaslonPro-BoldItalic
  ...and so on

  Now it's going to write out something like

  Serif SansSerif Monospaced Dialog DialogInput ACaslonPro-Bold...

  To get the old behavior, use printArray(). It's the price of progress, 
  and shouldn't really break anyone's code since it's just writing to the
  console. We think the new syntax outweighs the downside of the change. 

  With arrays of primitive types (int[], float[], anything that's not an
  object), we've added code so that println() works as before. But we
  can't do the same for arrays of objects, such as String. 

+ The preference for font smoothing (anti-aliasing) in the editor has been
  reset in this release. Fonts are unusably gross on OS X (and Linux) 
  without smoothing and Oracle's version of Java (now in use with 2.1),
  and many longtime users have anti-aliasing turned off. You can still 
  turn off smoothing in the Preferences window, but the results may be poor.
  httpsgithub.comprocessingprocessingissues2164
  httpsgithub.comprocessingprocessingissues2160


[ bug fixes ]

+ Fix dataPath() problem with OS X (was breaking Movie on export)

+ Command line processing-java was broken in 2.1 beta 1 on OS X
  httpsgithub.comprocessingprocessingissues2159

+ Fix a situation where processing-java would return 0 instead of 1 on errors
  httpsgithub.comprocessingprocessingissues1798#issuecomment-26711847

+ Alpha values from the pixels array were coming back as 0
  httpsgithub.comprocessingprocessingissues2030

+ Additional UI font tweaks due to decreased legibility with Oracle Java
  httpsgithub.comprocessingprocessingissues2135


[ OpenGL updates ] 

+ Using sketchQuality() does not work properly with P3D, OPENGL, P2D
  httpsgithub.comprocessingprocessingpull2157

+ Fix crashes when the sketch window is resized
  httpsgithub.comprocessingprocessingissues1880
  httpsgithub.comprocessingprocessingpull2156

+ scale() wasn't affecting stroke weight in P3D
  httpsgithub.comprocessingprocessingissues2162

+ Add set(boolean) to PShader
  httpsgithub.comprocessingprocessingissues1991
  httpsgithub.comprocessingprocessingpull1993

+ Add PMatrix.preApply(PMatrix)
  httpsgithub.comprocessingprocessingpull2146
  httpsgithub.comprocessingprocessingissues2145

+ Updated to another version of JOGL (jogl-2.1-b1115, gluegen-2.1-b735)
  for OS X 10.9 support.

+ Add warning when no uv texture coordinates are supplied
  httpsgithub.comprocessingprocessingissues2034

+ Flicker issues when resizing P2DP3DOPENGL
  httpsgithub.comprocessingprocessingissues15

+ Additional fix for occasional flashflicker with drawing complex scenes
  httpsgithub.comprocessingprocessingcommitcca2f08a24ef892c494f5a75aa0e4b01de7e5d8a


. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 


PROCESSING 2.1 beta 1 (REV 0222) - 20 October 2013

This release contains major changes. The big ones

+ Java 7 is now used across all platforms. On Mac OS X, 
  we're now embedding Java 7u45. More info here
  httpwiki.processing.orgwSupported_Platforms#Java_Versions

+ Major changes have been made to Export to Application. 
  Read here httpwiki.processing.orgwExport_Info_and_Tips

+ print() and println() now make debugging fun! They can now take any 
  number of parameters, which means that code like
  println(x, y, mouseX, mouseY);
  will print out
  3 5 142 220
  No more println(x +   +  y +   + mouseX +   + mouseY);
  that was for suckers!

+ A new serial library has been added! The results of Gottfried Haider's
  Google Summer of Code project now replaces the old serial library.

And everyone should wish Casey Reas happy birthday today! 
This release is my birthday present for him. What did you get him

Here's a more detailed rundown of what else is in this release


[ new features and additions ] 

+ For people using Eclipse, the new print() and println() methods add
  some quirks because of how println() works for arrays in previous
  versions of Processing. When printing an array, you should instead use
  the new printArray() function, which works the same as the old println().
  This will help avoid the compiler warnings with Eclipse and others.
  In the PDE, this should be transparent, because warnings are not shown.
  httpsgithub.comprocessingprocessingissues2056

+ Update the JavaDoc, remove java. package prefix ugliness. Also link
  out to the online version of the Oracle documentation. 

+ Major work on the source and the build scripts as we completed the 
  transition to Java 7, and away from Apple's deprecated Java 6.
  httpwiki.processing.orgwSupported_Platforms#Mac_OS_X

+ Incorporated a version of Oracle's appbundler for OS X build. Made heavy
  modifications to the original version to add features and simplify.

+ Culled un-needed resources from the Java 7 runtime to save space.
  Unfortunately Java 7 is also much larger than Java 6, so the size change
  isn't as considerable as we would hope.

+ Remove unusedoutdated 'Mangler' Tool example

+ Remove video library for other platforms in download. This saves 
  significant space because we're not doing cross-platform export anymore.

+ Update apple.jar file with new version
  httpsdeveloper.apple.comlegacylibrarysamplecodeAppleJavaExtensionsIntroductionIntro.html

+ Update build instructions on Github
  httpsgithub.comprocessingprocessingwikiBuild-Instructions
  httpsgithub.comprocessingprocessingissues1629

+ Many changes to the Supported Platforms page
  httpwiki.processing.orgwSupported_Platforms

+ Updates to the Export page to cover changes in this release
  httpwiki.processing.orgwExport_Info_and_Tips

+ Removed the 32- and 64-bit selector from the Preferences on OS X.
  Java 7 on OS X only supports 64-bit, so 32-bit is no longer available.


[ editor fixes ] 

+ Deal with nullmissing folders for Tools and Modes
  httpsgithub.comprocessingprocessingissues2068

+ Non-compliant libraries cause crash on Add Library
  httpsgithub.comprocessingprocessingissues2026

+ Bad tools could bring down the environment
  httpcode.google.compprocessingissuesdetailid=798
  httpsgithub.comprocessingprocessingissues836

+ Open new PDE maximized when current PDE is maximized
  httpsgithub.comprocessingprocessingpull2037

+ cmd-left was bringing up the text area popup, causing X Mode weirdness
  httpsgithub.comprocessingprocessingissues2103


[ core bug fixes ]

+ Screen stops updating sometimes with retina displays on OS X
  httpsgithub.comprocessingprocessingissues1699
  This was an Apple bug, and is fixed by our switch to Oracle's Java 7.

+ Background color for present mode had no effect
  httpsgithub.comprocessingprocessingissues2071
  httpsgithub.comprocessingprocessingpull2072

+ Add desktopPath() and desktopFile() methods for testing (not finished)

+ Unicode NLF causing problems in XML files
  httpsgithub.comprocessingprocessingissues2100

+ Fix image transparency in PDF output
  httpsgithub.comprocessingprocessingpull2070

+ Java2D images crash after being resized
  httpsgithub.comprocessingprocessingissues2113

+ Constrain lerpColor() between 0 and 1. Unlike lerp(), where it might 
  make mathematical sense, going outside the boundary colors produces 
  really messy results.

+ JSONObjectArray.format(-1) not working on embedded JSONObjects
  httpsgithub.comprocessingprocessingissues2119

+ Fix insertRow() bug with Table
  httpsgithub.comprocessingprocessingissues2137


[ opengl updates ]

+ Updated to JOGL 2.1.0
  httpsgithub.comprocessingprocessingissues2136

+ Fixed inconsistency with P2D and resetMatrix()
  httpsgithub.comprocessingprocessingissues2087

+ Deal with text rendering problems
  httpsgithub.comprocessingprocessingissues2109

+ Fix textSize() problem with P2D
  httpsgithub.comprocessingprocessingissues2073

+ Repair incorrectly applied transformations in retained mode
  httpsgithub.comprocessingprocessingissues2097

+ pushpopStyle() was causing color problems with P2DP3D
  httpsgithub.comprocessingprocessingissues2102

+ Child SVG elements were misplaced when rendering with P2DP3D
  httpsgithub.comprocessingprocessingissues2086

+ SUBTRACT and DIFFERENCE blend modes are swapped
  httpsgithub.comprocessingprocessingissues2075

+ Throw an error for textureMode(REPEAT)
  httpsgithub.comprocessingprocessingissues2052

+ Vertex codes were not being properly set in P2DP3D
  httpsgithub.comprocessingprocessingissues2131

+ Some box normals were inverted
  httpsgithub.comprocessingprocessingissues2151


[ new serial library ] 

+ Incorporate the new serial library. Woohoo!
  httpsgithub.comprocessingprocessingpull2093

+ 64-bit version of serial library
  httpcode.google.compprocessingissuesdetailid=1237
  httpsgithub.comprocessingprocessingissues1275

+ Closed several serial bugs because they're no longer relevant
  httpcode.google.compprocessingissuesdetailid=52
  httpcode.google.compprocessingissuesdetailid=318
  httpsgithub.comprocessingprocessingissues2114
  httpsgithub.comprocessingprocessingissues2066
  httpsgithub.comprocessingprocessingissues1460
  httpsgithub.comprocessingprocessingissues1374


[ font fixes and changes ] 

+ Add ability to change the editor (and console) font from a menu 
  in the Preferences window.
  httpsgithub.comprocessingprocessingissues2078

+ Add ability to change the console font size from the Preferences window.
  httpcode.google.compprocessingissuesdetailid=226
  httpsgithub.comprocessingprocessingissues265

+ Allow editor and console font changes without restart.

+ Anti-aliasing fix for the editor line status. 

+ Change to bold instead of semibold version of Source Code Pro. 
  The semibold wasn't mapping properly as the same family.

+ Use the same font in the console as the editor.

+ Fix WindowsLinux console font issues.


[ movie maker ]

+ Fix default gamma issues inside MovieMaker by adding extra atom

+ TGA files cause Movie Maker to not work properly
  httpsgithub.comprocessingprocessingissues1933

+ Fix file selection dialog with MovieMaker (instead of the nasty
  Swing-based version that was in use)

+ Add support for many other image file types to Movie Maker


. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 


PROCESSING 2.0.3 (REV 0221) - 5 September 2013

Lots of bug fixes, primarily a ton of work by Andres to improve 
OpenGL rendering with P2D and P3D.


[ andres vs the volcano ]

+ blendMode() change causes OpenGL renderer to be very slow
  httpsgithub.comprocessingprocessingissues2021

+ Serious OpenGL performance issues on OS X, this was fixed 
  with the JOGL update in 2.0.2, but we neglected to note it.
  httpsgithub.comprocessingprocessingissues1714

+ P2D low quality text rendering
  httpsgithub.comprocessingprocessingissues1972

+ Fix issues with slow text rendering and OpenGL
  httpsgithub.comprocessingprocessingissues2025

+ Corrupted text with large font and OpenGL
  httpsgithub.comprocessingprocessingissues1869

+ loadFont hangs on Processing 2.0 with any OpenGL renderer
  httpsgithub.comprocessingprocessingissues1854

+ Rendering artifacts on the diagonal line (topleft to bottomright) in P2D
  httpsgithub.comprocessingprocessingissues1964

+ loadShape doesn't load OBJ files in subdirectories properly
  httpsgithub.comprocessingprocessingissues2003

+ more OpenGL issues fixed by JOGL or newer drivers
  httpsgithub.comprocessingprocessingissues1986

+ Vertical offset when sketch height is indivisible by 2
  httpsgithub.comprocessingprocessingissues1985

+ ellipse() causes RuntimeException java.lang.OutOfMemoryError
  httpsgithub.comprocessingprocessingissues1941

+ beginShape()...endShape() lines look wrong at joinscaps with P2D
  httpsgithub.comprocessingprocessingissues1927

+ Problem with bit shifting and video
  httpsgithub.comprocessingprocessingpull2023
  httpsgithub.comprocessingprocessingpull2022
  httpsgithub.comprocessingprocessingissues2021

+ Copy doesn't produce a true copy with P2D and P3D renderers
  httpsgithub.comprocessingprocessingissues1924

+ Additional improvements to memory handling with images
  httpsgithub.comprocessingprocessingissues1975

+ Additional memory handling changes for render buffers
  httpsgithub.comprocessingprocessingissues1776

+ PShape does not draw arc properly
  httpsgithub.comprocessingprocessingissues1990

+ PShape style is not restored after calling enableStyle in P2DP3D
  httpsgithub.comprocessingprocessingissues2061


[ other bug fixes ] 

+ Fix options parsing on loadTable() to handle spaces.

+ PVector.angleBetween() returns 0 for 3D vectors whenever x and y are both 0
  httpsgithub.comprocessingprocessingissues2045
  httpsgithub.comprocessingprocessingpull2046


. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 


PROCESSING 2.0.2 (REV 0220) - 14 August 2013

Many small bug fixes and lots of work on the LibraryToolMode Manager. 
Full screen is back for Windows, and lots more.


[ bug fixes ] 

+ Fix Windows issues with associating .pde files 
  httpsgithub.comprocessingprocessingissues286
  httpcode.google.compprocessingissuesdetailid=247

+ Present Mode does not work properly on Windows
  httpsgithub.comprocessingprocessingissues1955

+ pixels[] array not updated with Capture and P2DP3D
  httpsgithub.comprocessingprocessingissues1852

+ Unable to get TAB key event with P2DP3D renderer
  httpsgithub.comprocessingprocessingissues1967

+ Setting an INT4 uniform in PShader causes an out of bounds exception
  httpsgithub.comprocessingprocessingissues1994

+ Fix less less typo 
  httpsgithub.comprocessingprocessingissues1928

+ Slash breaks syntax highlighting when spaces are involved
  httpsgithub.comprocessingprocessingissues1681
  Fix from Github user hamzaissa - thanks!

+ selectInput() in exported OS X sketch treats .app package as a folder
  httpsgithub.comprocessingprocessingissues1959

+ Code with a NUL character causes an error
  httpsgithub.comprocessingprocessingissues1973
  Also remove NUL characters when loading PDE files

+ Allow delete of files in unsaved sketches
  httpsgithub.comprocessingprocessingissues1942
  httpsgithub.comprocessingprocessingpull1945

+ UnsatisfiedLinkError was causing hugeunreadable message

+ selectInput() in exported OS X sketch treats .app package as a folder
  httpsgithub.comprocessingprocessingissues1959

+ Retain blendMode() between frames
  httpsgithub.comprocessingprocessingissues1962


[ contribution managers ] 

+ Support multiple categories for libraries
  httpsgithub.comprocessingprocessingissues1970

+ Notify users that Modes and Tools require restart.
  httpsgithub.comprocessingprocessingissues1782
  httpsgithub.comprocessingprocessingissues1504
  httpcode.google.compprocessingissuesdetailid=1466

+ Change the location of the manager download to something more stable.

+ Restrict library categories to the ones in the document. If it's not
  correct, shows up as 'other'.

+ Catch Errors (not just Exceptions) when loading libraries, modes, 
  and tools. Handles UnsupportedClassVersionError and other quirks.

+ Redo handling of old versions of contributions.

+ Update example list when library is installed
  httpsgithub.comprocessingprocessingissues1909
  httpsgithub.comprocessingprocessingpull1925


[ data, data, data ] 

+ Error in IntList and FloatList insert()
  httpsgithub.comprocessingprocessingissues1929

+ Add a sort() method to Table.

+ Implement version of Table that takes a dictionary file. Syntax is
  Table t = loadTable(bigdata.tsv, dictionary=bigdata-dict.tsv)
  This allows you to set the data type of columns before loading, which
  provides much better performance and lower memory usage.

+ Constructing table from an Iterator is missing
  httpsgithub.comprocessingprocessingissues1956

+ Add sum() to IntList and FloatList
  httpsgithub.comprocessingprocessingissues1893

+ When using increment() on IntList, make sure the index exists and
  automatically resize the list if necessary. This is more in keeping 
  with increment() in the Dict classes.

+ getSubset() broken in IntList, StringList, and missing from FloatList
  httpsgithub.comprocessingprocessingissues1979

+ Add join() method to IntFloatStringList

+ Add getContent(defaultValue) to XML

+ Add isNull() (returns boolean) to JSONObjectArray
  httpsgithub.comprocessingprocessingissues2009

+ Add getXxxx(xxx, defaultValue) methods to JSONObjectArray
  httpsgithub.comprocessingprocessingissues2007


[ internal changes you'll never notice... unless I broke something ] 

+ Add an exception wrapper for startup, hopefully we can catchdebug
  more Processing can't start! issues with this.

+ Update JNA from 3.2.4 to 3.5.2.

+ Updated JOGL to 2.0.2.

+ Added methods to move files to TrashRecycle Bin where available.

+ Implement basic proxy server support for update checking and the
  contribution managers.
  httpsgithub.comprocessingprocessingissues1476

+ Basic getShape(ch) implementation for font glyph shapes. Not finished
  and (therefore) not yet documented.

+ Change QUAD_BEZIER_VERTEX to QUADRATIC_VERTEX to match the API call
  (because this lives inside PConstants).

+ Add retina switch for PApplet to set useActive with OS X and 7u40.
  Prevents speedperformance issues with old sketches on retina macs.

+ Add error message for raspberry pi (and others) about int buffers
  httpsgithub.comprocessingprocessingissues2010


[ changes ] 

+ Experimental Mode has been removed from the default download, 
  so that it can be updated more frequently. Install it and help us 
  test what will become the 3.0 release of Processing!

+ Add Processing Foundation to the Help menu.
  httpsgithub.comprocessingprocessingissues1908


. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 


PROCESSING 2.0.1 (REV 0219) - 21 June 2013

Bug fixes for some of what ailed the Processing 2.0 release, including
two contributed from Josh Giesbrecht. Thanks Josh!

[ bug fixes ] 

+ Modes, Tools, Libraries not moving properly on Windows
  httpsgithub.comprocessingprocessingissues1781

+ Undo seems to not be going to the right location (now with example)
  httpsgithub.comprocessingprocessingissues707
  httpcode.google.compprocessingissuesdetailid=668

+ Fix a problem with exporting Windows applications from OS X and Linux. 
  httpsgithub.comprocessingprocessingissues1890

+ getVertex() trying to get three values when no Z-coord is available
  PShape getVertex() not implemented properly for SVG files
  httpsgithub.comprocessingprocessingissues1596

+ Fix typo in default printProjection() method
  httpsgithub.comprocessingprocessingissues1863

[ additions ] 

+ Add error message for that reports what line was bad while parsing a table.
  (Otherwise confusing ArrayIndexOutOfBoundsException while parsing bad CSV.)

+ Added option to remove the background image at the top of the window.


. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 


PROCESSING 2.0 (REV 0218) - 3 June 2013

And just like that, here we are at 2.0. 

[ bug fixes ] 

+ Example window has the Java application icon
  httpsgithub.comprocessingprocessingissues1800

+ The update checker sometimes insisted there were updates, 
  even though there were not, due to a build problem.
  httpsgithub.comprocessingprocessingissues1792

+ Removed the 'modes' folder from the sketchbook listing
  httpsgithub.comprocessingprocessingissues1832

+ Add return code to processing-java on Linux
  httpsgithub.comprocessingprocessingissues1798

+ Command line tool on OS X was broken due to classpath problems.
  httpsgithub.comprocessingprocessingissues1787

+ saveJSONArray() loops forever, triggers error
  httpsgithub.comprocessingprocessingissues1827

+ patch to make font textures smaller in P2DP3D
  httpsgithub.comprocessingprocessingpull1775

+ .png data written when .jpg file specified with savesaveFrame()
  httpsgithub.comprocessingprocessingissues1810

+ remove() broken in the List classes
  httpsgithub.comprocessingprocessingissues1826

+ PGraphics objects that used JAVA2D weren't updating when used with OpenGL
  httpsgithub.comprocessingprocessingissues1786

+ P2DP3D sketches don't get focus until clicked
  httpsgithub.comprocessingprocessingissues1700

[ changes ] 

+ A handful of tweaks to smooth out the 2.0 user interface. 
  Incorporates some of the feedback suggested here 
  httpsgithub.comprocessingprocessingpull1822
  while trying to preserve the look & feel of our PDE design.

+ Added built-in fonts (Source Sans and Source Code from Adobe)
  as the default font for the UI and editor. As usual, the editor 
  font can be changed in preferences.txt. And if you already have 
  a preferences.txt file, the new font won't override it. Fonts
  for GUI elements can be modified in libtheme.txt, but be careful
  with those, and don't complain ifwhen they break.

+ Added several additional functions for data classes. More details 
  in the reference and coming soon.

+ Changed how null values were handled with binary tables. If anyone
  was using the (undocument) .bin format for Table, you'll need to 
  re-save your data.

+ Changed XML.toString() (what's called when you print() or println() 
  an XML object) to just send a single line of text instead of a full 
  XML document with a header. Use format(numSpaces) if you want a
  properly formatted document with declaration at the top.

[ andres on the attack ] 

+ PImage not drawn after resize()get() in P2DP3D
  httpsgithub.comprocessingprocessingissues1830

+ Can't disable textures for loaded OBJ shapes (2b9)
  httpsgithub.comprocessingprocessingissues1825

+ Can't mask PGraphics with another PGraphics
  httpsgithub.comprocessingprocessingissues1738

+ PGL.readPixels() causes invalid operation error
  httpsgithub.comprocessingprocessingissues1666

+ Strange behavior of PGraphics pixels[] when using P2D and P3D renderer
  httpsgithub.comprocessingprocessingissues1815

+ PShape setVertex has a memory leak
  httpsgithub.comprocessingprocessingissues1670

+ PGL lacks a wrapper for the alphaFunc() method and the ALPHA_TEST constant
  httpsgithub.comprocessingprocessingissues1703

+ Implement textMode(SHAPE) for 3D
  httpsgithub.comprocessingprocessingissues777

+ An internal change so that PImage.loadPixels() doesn't call the renderer.
  Fixes some odd quirks in saveFrame() and other drawgetsave operations.

+ Setting smooth(n) affects disables background in setup()
  httpsgithub.comprocessingprocessingissues1452

+ textureWrap(REPEAT) + textureMode(IMAGE) clamps positive coordinates
  httpsgithub.comprocessingprocessingissues1809

+ P2D, P3D drawing errors in static mode, gray screen
  httpsgithub.comprocessingprocessingissues1648

+ Window shorter than 127 pixels high is not rendered correctly in P2DP3D
  httpsgithub.comprocessingprocessingissues1683

+ Multiple screen crash with OpenGL
  httpsgithub.comprocessingprocessingissues1515


. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 


PROCESSING 2.0b9 (REV 0217) - 18 May 2013

The 2.0 interface has arrived! Mmm... pretty.

We've removed Android and JavaScript modes from the default download. You 
can easily install them by selected Add Mode from the Mode menu. They've
been removed because the changes have not kept pace with the rest of 
Processing, and it was holding up the release of 2.0. As separate projects, 
we hope it'll be easier for volunteers to get involved, rather than our
tiny, worn out development team. View the projects here
httpsgithub.comfjenettjavascript-mode-processing
httpsgithub.comprocessingprocessing-android

There are also lots of goodies in the new data classes found in the
processing.data package that will make it much easier to handle data from
inside Processing. More documentation coming soon!

We're hoping this is the last beta before 2.0, but we're still haggling
with one or two issues that could require a beta 10. That's a lot of beta.

[ fixes ] 

+ Major OutOfMemoryError problem with images fixed by Andres!
  httpcode.google.compprocessingissuesdetailid=1353
  httpsgithub.comprocessingprocessingissues1391

+ Lots of fixes for the librarymodetool manager. 
  Repairing colors, layout, etc. along with lots of internal fixes.

+ Fix MovieMaker, it was completely broken
  httpsgithub.comprocessingprocessingissues1669

+ processing-java dialog window was huge
  httpsgithub.comprocessingprocessingissues1748

+ Library with bad version number in version causes stack trace to print. 
  Added warning message about it with a pointer to the remedy.

+ New version available mesage is showing HTML tags around it
   httpsgithub.comprocessingprocessingissues1684

+ Update not working in the manager
  httpsgithub.comprocessingprocessingissues1701

+ tint() with JAVA2D does not automatically refresh (with possible fix)
  httpsgithub.comprocessingprocessingissues1730

+ Lines not properly renderered in P3D when using ortographic projection
  httpsgithub.comprocessingprocessingissues1661

+ Fix JSON and get it working properly. Now official API.
  httpsgithub.comprocessingprocessingissues1660
  httpsgithub.comprocessingprocessingissues1680

+ Plus dozens of other P2DP3D fixes that Andres snuck in there.

+ Last lines of a beginShape(LINES) are invisible in the P2D renderer
  httpsgithub.comprocessingprocessingissues1761

+ Incorrect number of vertices on beginShape(TRIANGLES) affect subsequent Shapes
  httpsgithub.comprocessingprocessingissues1760

+ Rendering unlit geometry with TEXLIGHT shader throws misleading error message
  httpsgithub.comprocessingprocessingissues1757

[ changes ]

+ New images for modes. New design!

+ Added loadJSONArray(), loadJSONObject. 

+ Hundreds of changes to the new data classes, sorting out their API, etc.

+ Fix autoformat to indent like the p5 bookexamples. Thanks pif!
  httpcode.google.compprocessingissuesdetailid=325
  httpsgithub.comprocessingprocessingissues364

+ Removed netscape.javascript stuff that was only relevant for applets

+ Change error message for libraries (especially serial) for 32- vs 64-bit
  to clarify that the 32- or 64-bit version of Processing can be used instead.

+ Rebuilt the internal Runner to use SocketAttach... This may bring up 
  a firewall message on some machines. Don't worry, it's safe (as long as
  the message is showing up when you hit Run, that's expected).

+ Add set(x, y) to PVector. 

+ Removed div() and mult() from PVector, since not a legit math operation.
  httpscode.google.compprocessingissuesdetailid=1506
  httpsgithub.comprocessingprocessingissues1544

+ loadImage() with TGA causing images to be upside-down
  httpsgithub.comprocessingprocessingissues1682

+ Added getIntContent(), getFloatContent() to XML

+ Table switch to CATEGORY instead of CATEGORICAL (not documented)

+ removed createXML() and createTable()... just use 'new' for these

+ Add official API for mouse wheel support
  httpsgithub.comprocessingprocessingissues1461
  httpcode.google.compprocessingissuesdetailid=1423

+ Incorporated JDI changes from Manindra. This makes the download a little
  larger, but is a step toward being able to have a simpler download that
  only requires a JRE (and is therefore much smaller!)


. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 


PROCESSING 2.0b8 (REV 0216) - 24 February 2013

Dead bugs on the windscreen as we head down the road to 2.0. 
(The fact that we're still in bad metaphor territory suggests
we're still a little ways off from 2.0 final.)

[ bugs fixed ] 

+ Find in Reference broken in 2.0b7
   httpcode.google.compprocessingissuesdetailid=1456

+ Add java.io.File to default imports
  httpcode.google.compprocessingissuesdetailid=1453

+ Default Renderer slow on retina displays
  httpcode.google.compprocessingissuesdetailid=1262
  httpsgithub.comprocessingprocessingissues1300

+ Remove extra separator at the top of the Help menu on Windows and Linux

+ MovieMaker tool will not start on Windows 8
  httpcode.google.compprocessingissuesdetailid=1447

+ On Windows, the Help menu starts with a separator (no more)

+ Color coding for ifelse in Processing IDE doesn't match
  httpcode.google.compprocessingissuesdetailid=1457

+ Ignore ArrayIndexOutOfBoundsException in JEditTextArea.xToOffset() 

+ Fix IllegalStateException on WindowsLinux in Save prompt
  happened when hitting ESC or otherwise closing the window

+ Don't open Changes page on the Wiki from command line
  httpcode.google.compprocessingissuesdetailid=1520

+ Prevent inertia scrolling on OS X from making the editor jumpy

+ processing-java throws java.lang.ArrayIndexOutOfBoundsException -1
  httpcode.google.compprocessingissuesdetailid=1548

+ Auto Format should not scroll current line to first line
  httpcode.google.compprocessingissuesdetailid=1533

+ Fix Bounds out of range when outdenting a block of text
  Exception in thread AWT-EventQueue-0 
  java.lang.IllegalArgumentException Bounds out of range 5374,5376 [5375]
  at processing.app.syntax.JEditTextArea.select(JEditTextArea.java1214)
  at processing.app.Editor.handleIndentOutdent(Editor.java1819)

+ Play button (and others) no longer highlighting
  httpcode.google.compprocessingissuesdetailid=688
  Patch from John Li (jli at circularly.org) Thanks!

+ readlink error when running processing-java on Linux
  Patch from richard at crash.net.nz. Thanks!
  httpcode.google.compprocessingissuesdetailid=1578

+ Fix table loading quirk with extensions

+ PImage.resize() greater than image size hangs 
  httpcode.google.compprocessingissuesdetailid=1463

+ loadBytes() does not close input stream
  httpcode.google.compprocessingissuesdetailid=1542

+ Fixes for removeColumn()

+ Remove SVG warning about #text ignored

+ Fix bug where noDelays wasn't being used in PApplet

+ XML.format(0) throws error
  httpcode.google.compprocessingissuesdetailid=1512

[ improvements, updates, and changes ]

+ Add basic retina support (textlabels, buttons not yet updated) 
  to the Mac OS X version.

+ Clean up the code and interface for the Movie Maker tool
  httpcode.google.compprocessingissuesdetailid=836 

+ Suggest possible import statements for common Java classes
  httpcode.google.compprocessingissuesdetailid=1550

+ Add 6u37 as the Java runtime (unfortunately woefully outdated by now)

+ Add ESC and cmdctrl-W to the Examples window

+ Move tokensyntax coloring out of theme.txt and back into preferences

+ Discern variable vs function with Find in Reference

+ If no selection, attempt to expand the selection for Find in Reference

+ Add cmd-shift-O to Open Examples on OS X with no window open

+ Remove Quaqua library
  httpcode.google.compprocessingissuesdetailid=1509

+ Most recent moved to the top of the Recent menu

+ Disable single-click expand on OS X for the examples

+ Add clear() to replace background(0, 0, 0, 0)
  httpcode.google.compprocessingissuesdetailid=1446

+ Change heading2D() to just heading() 
  httpcode.google.compprocessingissuesdetailid=987

+ Remove hint(ENABLE_NATIVE_FONTS)

+ Add warning message when registering AWT mousekey events

+ Show warning when registering mousekey events with OpenGL

+ Add functions for mousePressed(event) and keyPressed(event) et al

+ Add randomGaussian() method

+ Add TAU as alias for TWO_PI
  httpcode.google.compprocessingissuesdetailid=1488
  reference httpsgithub.comprocessingprocessing-webissues9

+ Miscellaneous XML fixes and cleanups

[ toolmodelibrary manager ] 

+ General cleanup of the visualslayout

+ Library manager leaves temporary folders in sketchbook folder
  httpcode.google.compprocessingissuesdetailid=1527

+ Add Mode is also reporting that it's a library that contains multiple

+ Add Tool is having problems
  httpsgithub.comprocessingprocessingissues1607
  httpcode.google.compprocessingissuesdetailid=1569

+ Make already installed libraries distinguishable in the list
  httpsgithub.comprocessingprocessingissues1250
  httpcode.google.compprocessingissuesdetailid=1212

+ Fix up the design of the list entries themselves

+ Using Add Library requires restart of Processing before lib recognized
  httpsgithub.comprocessingprocessingissues1425
  httpcode.google.compprocessingissuesdetailid=1387

[ android ] 

+ Update documentation and tools for Android SDK Tools revision 21
  httpcode.google.compprocessingissuesdetailid=1398

+ Update Wiki to reflect no need for Google APIs

+ Add clear and close to some stream methods
  httpcode.google.compprocessingissuesdetailid=244

+ OpenGL sketch crashes on older Android devices
  httpcode.google.compprocessingissuesdetailid=1455

+ Remove mouseEvent and keyEvent variables (deprecated on desktop)

[ table ] 

+ Added lastRowIndex()

+ rows() instead of getRows() (doesn't perform like our other get() functions)

+ addRow() returns TableRow object to be modified

+ lastRowIndex() (to avoid getRowCount() - 1)

+ Change makeNullEmpty() - replace(null, ); and
  makeEmptyNull() - replace(, null);

+ Add saveTable(filename.tsv) or saveTable(filename.txt, tsv)

+ createTable() method in PApplet

+ Removed getUniqueXxxx() and some others, pending naming decision

+ Added getColumnCount() to TableRow

[ andres assault ] 

+ P3D sketches failing to run
  httpcode.google.compprocessingissuesdetailid=1500

+ Transparent pixels are not set on multisampled offscreen GL surfaces
  httpcode.google.compprocessingissuesdetailid=1516

+ Clean-up PShape API
  httpcode.google.compprocessingissuesdetailid=1518

+ Several keymouse event issues in the db
  httpcode.google.compprocessingissuesdetailid=1464

+ Finalize shader API
  httpsgithub.comprocessingprocessingissues13

+ focused become false when window is clicked in OPENGL and P2D renderer
  httpcode.google.compprocessingissuesdetailid=1483
  httpsgithub.comprocessingprocessingissues1521

+ cursor(...) and noCursor() having trouble in P2D or P3D mode
  httpcode.google.compprocessingissuesdetailid=1574
  httpsgithub.comprocessingprocessingissues1612

+ OpenGLP3D sketches show graphical corruption
  httpcode.google.compprocessingissuesdetailid=1452
  httpsgithub.comprocessingprocessingissues1490

+ Disable stroke perspective by default
  httpsgithub.comprocessingprocessingissues1598
  httpcode.google.compprocessingissuesdetailid=1560

+ Fix get()set() problems with images and OpenGL
  httpsgithub.comprocessingprocessingissues1613
  httpcode.google.compprocessingissuesdetailid=1575

+ Child PShape disappears when geometric transformations are applied
  httpcode.google.compprocessingissuesdetailid=1460
  httpsgithub.comprocessingprocessingissues1498

+ Repeated fill() in P3D throws ex for groups, weird behavior for single shapes
  httpcode.google.compprocessingissuesdetailid=1524
  httpsgithub.comprocessingprocessingissues1562

+ Incorrect sampler2D alpha channel from PGraphics.filter(shader)
  httpsgithub.comprocessingprocessingissues1557
  httpcode.google.compprocessingissuesdetailid=1519

+ Mouse data erratic in P2D
  httpsgithub.comprocessingprocessingissues1626

+ Destroying an OpenGL PApplet doesn't terminate SharedResourceRunner thread
  httpsgithub.comprocessingprocessingissues1483
  httpcode.google.compprocessingissuesdetailid=1445

+ exit() crashes Java on P2D and 3D when fullscreen only
  httpsgithub.comprocessingprocessingissues12

+ Default filter on PGraphics does nothing (JAVA2D) or causes crash (P2DP3D)
  httpsgithub.comprocessingprocessingissues1534
  httpcode.google.compprocessingissuesdetailid=1496

+ Crash when running latest P2DP3D under VMware
  httpsgithub.comprocessingprocessingissues1644

+ SVG width and height not properly set with P2D, P3D & OPENGL renderers
  httpsgithub.comprocessingprocessingissues1641

+ Re-implement per-vertex coloring in P2DP3D
  httpsgithub.comprocessingprocessingissues1196
  httpcode.google.compprocessingissuesdetailid=1158

+ P2D, P3D drawing errors in static mode, gray screen
  httpsgithub.comprocessingprocessingissues1648
  Still seeing a few of these in some cases, but hopefully 
  this is fixed for the most part.

[ manindra magic ]

+ Problems with Find & Replace getting stuck in a loop, or replacing
  with odd text after text was no longer found.
  httpsgithub.comprocessingprocessingissues1643
  httpsgithub.comprocessingprocessingpull1652

+ Error checker broken in experimental mode (fix from Manindra)
  httpcode.google.compprocessingissuesdetailid=1449

+ Bug that was causing the Debugger to point to wrong break point line numbers
  'Debug' button does not re-run the project when it is already running.
  httpcode.google.compprocessingissuesdetailid=1504


. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 


PROCESSING 2.0b7 (REV 0215) - 7 December 2012

475,382 bug fixes in this release as we work on finalizing 2.0. 

[ changes ] 

+ Removed all imports that aren't covered in the Processing reference. 
  If you use java.awt, java.util, or other classes in your sketch, you
  will need to add an import line to the beginning of your sketch.

  Only the classes that are covered in the reference (HashMap, ArrayList, 
  and some others) are now imported by default. This has been done to improve
  overall cross-platform parity and to avoid users unknowingly adding 
  Java classes, and then the sadness that comes when switching to Android
  or JavaScript modes. 

  The list of imports is now hard-coded (no longer read from preferences.txt)
  and includes the following
  import java.util.HashMap;
  import java.util.ArrayList;
  import java.io.BufferedReader;
  import java.io.PrintWriter;
  import java.io.InputStream;
  import java.io.OutputStream;
  import java.io.IOException;

  If we're missing anything that's covered in the reference, please let us 
  know via the bugs database.

+ A new experimental mode has been added. It's the start of combining two
  of our Google Summer of Code projects (DebugMode and XQMode) to enable 
  a debugger and on-the-fly error checking. We're including it in the release
  so that folks can test it out and let us know how it's doing. The interface
  still needs work and its innards may be a bit buggy, but it represents
  some exciting upcoming improvements for the PDE.

+ hint(ENABLE_ACCURATE_2D) has been renamed to hint(DISABLE_OPTIMIZED_STROKE)
  to better reflect what it actually does. Reference has been added.
  OpenGL drawing is significantly faster when the fill and stroke of a shape
  is drawn separately. This leads to visual artifacts on shapes where both
  fill and stroke is enabled (not a great idea in 3D anyway), so this option
  fixes the visual artifacts at the expense of speed.
  httpcode.google.compprocessingissuesdetailid=1302

+ Sketch names can no longer begin with underscores (fixes an Android
  compatibility issue). This was changed in recent releases, but missing here.
  httpcode.google.compprocessingissuesdetailid=859

+ More Mac OS X key bindings have been implemented in the editor
  httpcode.google.compprocessingissuesdetailid=1354
  httpguides.macrumors.comKeyboard_shortcuts&section=10#Text_Shortcuts

+ Set quality level higher when exporting JPEG images. This will result 
  in larger JPEG files with save() and saveFrame(), but the default quality 
  setting in the past was unacceptable for manymost projects. 
  httpcode.google.compprocessingissuesdetailid=58
  See the bug report link for how to implement in case you want to set 
  the quality lower (or even higher) than the new default.

+ Table row iterating syntax has changed. This code
  for (TableRow row  table) { ... }
  has now changed to 
  for (TableRow row  table.getRows()) { ... }
  (This may change to rows() on the next round, pending other API tweaks)

+ Change default for shift-backspace to just be backspace. To change it back,
  set editor.keys.shift_backspace_is_delete=true in preferences.txt.

+ Implement clip() and noClip() to set the clipping region.

+ Added blendMode() feature.
  httpcode.google.compprocessingissuesdetailid=1385

+ Add different styles of arc drawing.
  httpcode.google.compprocessingissuesdetailid=711
  httpcode.google.compprocessingissuesdetailid=1406

+ Added XML.getLong() (also updated Android)
  httpcode.google.compprocessingissuesdetailid=1378

+ Implement back-buffer sampler in OpenGL renderers.
  httpcode.google.compprocessingissuesdetailid=1169

+ Change how get(x, y, w, h) was handled with offscreen areas.
  httpcode.google.compprocessingissuesdetailid=925

+ Make key and mouse events interleave, also improve threading.
  httpcode.google.compprocessingissuesdetailid=79

+ Changed event constants to PRESS, RELEASE, CLICK, DRAG, MOVE, ENTER, EXIT
  instead of past-tense versions of the same.

+ Removed mask(int[]) from PImage.

+ Implement postEvent() to put new events on the queue.

+ Add mouseEnteredExited on the desktop.
  httpcode.google.compprocessingissuesdetailid=500

+ Change output from processing-java to be UTF-8 encoded.
  httpcode.google.compprocessingissuesdetailid=1418

+ Disable Quartz renderer to fix line blending problem on OS X. 
  This older renderer was faster but had some bugs, like one that
  caused lines to composite incorrectly when alpha was used. 
  Add PApplet.useQuartz = true; into your PApplet.main() 
  function to switch back to the old method
  httpprocessing.googlecode.comsvntrunkprocessingbuildjavadoccoreprocessingcorePApplet.html#useQuartz

+ Remove requirement for Google APIs in Android mode.
  httpcode.google.compprocessingissuesdetailid=613


[ bug fixes ] 

+ mouseButton not being set properly in mouseClicked.
  httpcode.google.compprocessingissuesdetailid=1350

+ mouseButton is 0 in mouseReleased() on OS X
  httpcode.google.compprocessingissuesdetailid=1373

+ mousePressed() coloring now different from mousePressed
  httpcode.google.compprocessingissuesdetailid=41
  Still not necessarily perfect, but it's a big improvement.
  Note for people implementing their own Modes FUNCTION1 and 
  FUNCTION2 have now been added for functions with parens.

+ 32-bit mode  64-bit mode preference was ignored on OS X.
  httpcode.google.compprocessingissuesdetailid=1426

+ Prevent errors on first line of a new tab from highlighting the last 
  line of the previous tab. In particular, a single letter on a new tab 
  was highlighting the last line of the tab to its left.

+ Android debug information wasn't being passed through to the console. 
  In addition, on Windows, error reporting wasn't working properly
  (couldn't find the right line or report the error correctly).
  httpcode.google.compprocessingissuesdetailid=1440

+ Fix ugly results from resize() command on PImage
  httpcode.google.compprocessingissuesdetailid=332
  and similar on Android
  httpcode.google.compprocessingissuesdetailid=239

+ P2DP3D PGraphics buffer failing to draw if larger than main surface.
  httpcode.google.compprocessingissuesdetailid=1255

+ Fix double error report when textMode(SCREEN) was used 
  textMode(SCREEN) has been removed from Processing 2.0.
  textMode(256) is not supported by this renderer.

+ image(pgraphics, x, y, w, h) was only drawing once when shrinking.
  httpcode.google.compprocessingissuesdetailid=1382

+ beginShape(QUAD) was not working with Java2D.
  httpcode.google.compprocessingissuesdetailid=1365

+ Relative coordinates not updated properly on closepath with SVG files.
  httpcode.google.compprocessingissuesdetailid=1058

+ PShape and lights results in more lit vertices.
  httpcode.google.compprocessingissuesdetailid=1342

+ Implement anisotropic filtering when using OPENGL.
  httpcode.google.compprocessingissuesdetailid=502

+ Update reference for beginendContour.
  httpcode.google.compprocessingissuesdetailid=1396

+ Fix expecting EOF, found 'import' error on previously working sketch.
  httpcode.google.compprocessingissuesdetailid=1376

+ Prevent potential race condition when resizing sketches.
  httpcode.google.compprocessingissuesdetailid=697

+ Mode detection wasn't properly ignoring code inside comments.
  httpcode.google.compprocessingissuesdetailid=1404

+ Fix error line numbers from command line version to count from one
  instead of zero, so that they're compatible with other systems.
  httpcode.google.compprocessingissuesdetailid=1392

+ Sketches exported to Linux weren't passed the command line arguments
  httpcode.google.compprocessingissuesdetailid=1359

+ electricScroll feature was causing weird jumps when double-clicking
  httpcode.google.compprocessingissuesdetailid=1055

+ Crash during library download was causing empty library list
  httpcode.google.compprocessingissuesdetailid=1093

+ In the net library, clientEvent() called even wo data from server
  httpcode.google.compprocessingissuesdetailid=189

+ Add Server.ip() method to get the IP address of the host machine.
  httpcode.google.compprocessingissuesdetailid=1228

+ Modify “Copy as HTML” to add second HTML data type when writing the clipboard
  httpcode.google.compprocessingissuesdetailid=1065
  Fix contributed by Ostap Andrusiv--thanks!

+ Shaders are passed wrong defaults when calling filter on a PGraphics object
  httpcode.google.compprocessingissuesdetailid=1301

+ beginContour() behaves differently in immediate and retained modes
  httpcode.google.compprocessingissuesdetailid=1417

+ P2DP3D crashes when trying to display unicode text
  httpcode.google.compprocessingissuesdetailid=1308

+ Fix for PMatrix3D.mult() when vectors are identical
  httpcode.google.compprocessingissuesdetailid=921

+ Curves weren't rendered seperately when P3D or P2D specified.
  httpcode.google.compprocessingissuesdetailid=1317

+ FBO handling in PGL is not transparent.
  httpcode.google.compprocessingissuesdetailid=1282

+ Use of pixels[] array breaks after resize in OpenGL.
  httpcode.google.compprocessingissuesdetailid=1119

+ No stroke with OpenGL sketches on a 2007 Mac Mini (GMA 950)
  httpcode.google.compprocessingissuesdetailid=1222

+ ortho() displays strange line widths.
  httpcode.google.compprocessingissuesdetailid=1285

+ Resizeable frame crashes sketch with AMD video card.
  httpcode.google.compprocessingissuesdetailid=1175

+ set(x, y, PImage) doesn't work with P2DP3D.
  httpcode.google.compprocessingissuesdetailid=1185

+ beginendShape with a single vertex causing crash on P2DP3D.
  httpcode.google.compprocessingissuesdetailid=1421

+ Using a PGraphics as a texture produces visual artifacts.
  httpcode.google.compprocessingissuesdetailid=1420

[ android ] 

+ Like the desktop release, removed default imports. This includes
  android.view.MotionEvent, android.view.KeyEvent,android.graphics.Bitmap
  due to conflicts w the new event system, and hoping to enforce better
  cross-platform compatibility between Java, JavaScript, and Android modes.

+ Changed event handling to hopefully clean up some inconsistencies.
  Removed motionXYPressure... these need to be handled separately. 
  More here httpwiki.processing.orgwAndroid

+ mouseXY no longer include history with moves, which reduces fidelity 
  a bit, but will hopefully prevent us overdoing it for future releases.

+ Fix how pmouseXY are set.
  httpcode.google.compprocessingissuesdetailid=238
  httpcode.google.compprocessingissuesdetailid=1018

[ fixed earlier  cleaning ] 

+ When turning smoothing on, internal lines of shapes are visible.
  httpcode.google.compprocessingissuesdetailid=53

+ textAlign(CENTER) with P3D and OPENGL produces messy result
  httpcode.google.compprocessingissuesdetailid=65

+ Signature issue on contributed libraries affects unrelated OpenGL sketches
  httpcode.google.compprocessingissuesdetailid=261

+ Implement efficient version of copy() in PGraphicsOpenGL.
  httpcode.google.compprocessingissuesdetailid=119

+ copy() does not update the screen with OpenGL.
  httpcode.google.compprocessingissuesdetailid=118

+ strokeCap() and strokeJoin() for use with OPENGL.
  httpcode.google.compprocessingissuesdetailid=123

+ Fix inconsistent anti-aliasing with OpenGL.
  httpcode.google.compprocessingissuesdetailid=217

+ noCursor() + OPENGL = won't get past setup()
  httpcode.google.compprocessingissuesdetailid=1345

+ set() requires updatePixels() with OpenGL.
  httpcode.google.compprocessingissuesdetailid=89

+ Chopping out triangles in OpenGL (though it's only 2D drawing).
  httpcode.google.compprocessingissuesdetailid=193

+ Share interface for 3D across desktop and Android.
  httpcode.google.compprocessingissuesdetailid=970

+ Distortion of 2D shapes when sphereDetail() is used.
  httpcode.google.compprocessingissuesdetailid=762

+ OPENGL renderer stops rendering after text is written using textMode(SCREEN)
  httpcode.google.compprocessingissuesdetailid=710

+ Support 'black' as color for SVG files (fix from PhiLho)
  httpcode.google.compprocessingissuesdetailid=1010

+ Catch sun.dc.pr.PRException
  httpcode.google.compprocessingissuesdetailid=39

+ Image created with img.get() works incorrectly when using filter()
  httpcode.google.compprocessingissuesdetailid=167

+ copy(image with transparency) doesn't keep the transparency at start up.
  httpcode.google.compprocessingissuesdetailid=601

+ Defects in the tessellation of SVG shapes in A3D
  httpcode.google.compprocessingissuesdetailid=291

+ Blacked-out screen when restoring Android app from background.
  httpcode.google.compprocessingissuesdetailid=381

+ Excessive rotation of application causes memory to run out
  httpcode.google.compprocessingissuesdetailid=235

+ Should alpha PImage stuff use a non-4byte config
  httpcode.google.compprocessingissuesdetailid=242

+ Rounded rect support on Android
  httpcode.google.compprocessingissuesdetailid=929


. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 


PROCESSING 2.0b6 (REV 0214) - 2 November 2012

Patching up command line issues that went backwards in the last release, 
a number of OpenGL fixes, and more internal changes and updates. 

[ bug fixes ] 

+ Command line support was broken in 2.0b5, with an error about
  processing-java ClassNotFoundException BatchCompiler
  httpcode.google.compprocessingissuesdetailid=1334
  On Mac OS X, you may need to re-run the Install Command Line tool.

+ Make sure the sketchbook is being picked up on the command line,
  so that imported libraries are handled correctly.

+ Import statements were executed within multiline comments.
  httpcode.google.compprocessingissuesdetailid=911

+ Editor not responding properly if the External Editor preference
  had been enabled with a previous release. 
  httpcode.google.compprocessingissuesdetailid=1355

+ A number of OpenGL fixes to better handle older chipsets, like the
  GMA 950 (found on lots of older Mac Minis and similar hardware). 

+ Reverted back to an older version of the JOGL library to prevent
  issues with sketches locking up. In particular, this should fix 
  sketches that use the video library 
  httpcode.google.compprocessingissuesdetailid=1338
  httpcode.google.compprocessingissuesdetailid=1364

+ Icon loading was causing an error if you used a package for your code.
  httpcode.google.compprocessingissuesdetailid=1346

+ No longer using --request on OS X 10.6, since it's not available. 
  Avoids a harmless warning message on the console when running a sketch.

[ changesadditions ] 

+ Added an option to Preferences to enabledisable advanced input method
  support to handle complex scripts like Japanese, Korean, or Chinese.
  httpcode.google.compprocessingissuesdetailid=526

+ Add option for blinking andor block caret in the editor. To disable 
  caret blinking in the text editor, add this line to preferences.txt
  editor.caret.blink = true
  Or to just a block caret, use this
  editor.caret.block = false
  httpcode.google.compprocessingissuesdetailid=1136

[ internal ]

+ Removed applet-related preferences, and the 'applet' subfolder in the 
  sourcedistribution.

+ Removed the old 'cmd' folder from the sourcedistribution

+ Preferences are now written in sorted order to make it easier to handle
  comparisons or other debugging.

+ Major change to handle how the 'lib' folder is found, hopefully does a 
  better job with command line support.


. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 


PROCESSING 2.0b5 (REV 0213) - 22 October 2012

Fixes for a few regressions that showed up in 2.0b4, plus some internal
changes to simplify how modes are handled.

[ bug fixes ] 

+ Libraries not installed through IDE had blank names.
  httpcode.google.compprocessingissuesdetailid=1331

+ mouseButton not being set properly on Windows (and probably Linux).
  httpcode.google.compprocessingissuesdetailid=1332

+ Console disappearing with increased editor font size.
  httpcode.google.compprocessingissuesdetailid=1275

[ changesinternal ] 

+ Change how modes are set up so that XQMode, our Google Summer of Code
  project can work properly.

+ Implement multiple sizes of icons for PDE and core. This improves 
  the quality of the icon seen on Windows and Linux attached to frames.
  httpcode.google.compprocessingissuesdetailid=632


. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 


PROCESSING 2.0b4 (REV 0212) - 21 October 2012

Command line support is back! Find and Replace works over multiple tabs!
The Mac OS X version should work again in spite of Apple's best efforts!

[ additions & removals ] 

+ Command line support is now available for Java mode. On Windows and Linux, 
  use the processing-java program. On Mac OS X, there's an option in the 
  Tools menu to install the command line tool. 
  httpcode.google.compprocessingissuesdetailid=142

  Build and export options should even work in headless mode when enabled
  (no guarantees, but simple test results were promising).
  httpcode.google.compprocessingissuesdetailid=220

  Android and JavaScript mode are not supported, contributions are welcome
  httpcode.google.compprocessingissuesdetailid=1323

+ Added a Tool for Mac OS X to help set up serial port. Using serial on 
  OS X requires some incantations on the command line, and this prompts for
  an administrator password and takes care of them for you. The commands
  involve creating a folder and setting a few permissions. If everything 
  is already set properly, the Tool will not be present in the Tools menu.

+ With the arrival of command line support, the misunderstood and sometimes
  maligned Use External Editor option has been removed. 
  httpcode.google.compprocessingissuesdetailid=515

+ Fix several problems introduced by Apple's recent Java update.
  Apple's most recent Java update may render older versions of Processing
  completely unusable, it's not quite clear yet. 

[ bug fixes ] 

+ Fix the exceptionally slow startup (a 5 second delay) in recent releases.

+ Find & Replace over multiple tabs (thanks to Manindra Moharana for the patch!)
  httpcode.google.compprocessingissuesdetailid=25

+ calling jump() resets movie speed
  httpcode.google.compprocessingissuesdetailid=1303

+ Fixed sketch renaming regression in underscore handling
  httpcode.google.compprocessingissuesdetailid=1310

+ Fix library manager temporary folder problem on Linux)
  httpcode.google.compprocessingissuesdetailid=1295

+ Default sketchbook folder was going to wrong location on Linux
  httpcode.google.compprocessingissuesdetailid=1286

+ mouseButton wasn't getting set on mouseReleased()
  httpcode.google.compprocessingissuesdetailid=1294

[ technical updates ] 

+ JOGL has been updated, which may help iron out some GL quirks.

+ Change all build.xml files to use Java 6 as both source and target
  (avoids Java 7 warnings during build).

+ Updated ecj.jar to use jdt-core.jar... This is a larger file but were 
  hoping that this would get our GSoC project XQMode working without
  the need for patches. Sadly that's not the case, but stay tuned.

[ known issues ] 

+ Fewer exclamation points will be used to introduce future releases.


. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 


PROCESSING 2.0b3 (REV 0211) - 10 September 2012

Shaking out the beta bugs.

[ major fixes ] 

+ registerMethod(keyEvent, ...) not calling key event methods.
  httpcode.google.compprocessingissuesdetailid=1225

+ Processing is damaged and should be put in the trash with 2.0b2.
  Apple's asinine code signing strikes back!
  httpcode.google.compprocessingissuesdetailid=1226

+ Restore deprecated versions of getFont() and getImage() to address
  library compatibility issues. The similar getBitmap() and getTypeface() 
  methods on Android will not be restored.
  httpcode.google.compprocessingissuesdetailid=1223

[ minor fixes ] 

+ Changing the default display in Preferences does not reset editor 
  location, so it appears to have no effect.
  httpcode.google.compprocessingissuesdetailid=1162

+ Remove bad cast in PGL during error reporting.

+ Make Mode menu into a radio button, so it cannot be de-selected
  httpcode.google.compprocessingissuesdetailid=1227

[ changes and additions ] 

+ Show error message when using createGraphics() with P2D, P3D, or OPENGL
  and the main drawing surface is not an OpenGL renderer.
  httpcode.google.compprocessingissuesdetailid=1217

+ Make file selectable from the OS X menu bar. Thanks to Hansi for the
  patch. Note that this only works for sketches that have been saved.
  httpcode.google.compprocessingissuesdetailid=1215

+ Added registerMethod(keyEvent) to Android, though motion and mouse
  events are still unavailable.

+ Cleaning up the internals of Preferences and untitled sketches.
  Fingers crossed that these don't give us last-minute regressions.


. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 


PROCESSING 2.0b2 (REV 0210) - 7 September 2012

One major fix for libraries that use key events, and a number of minor 
fixes that we've found along the way. 

[ fixes and updates ] 

+ Libraries with using key events were reporting
  java.lang.IllegalArgumentException argument type mismatch
  in beta 1, this is now fixed. 

+ Added hint(ENABLE_STROKE_PURE) to deal with Java 2D regression.
  httpcode.google.compprocessingissuesdetailid=1137

+ Fix for stroke with beginShape(TRIANGLE_FAN)
  httpcode.google.compprocessingissuesdetailid=1137

+ hint() documentation now updated (except for the hint above). 
  httpcode.google.compprocessingissuesdetailid=1144

+ Using ortho() breaks stroke rendering
  httpcode.google.compprocessingissuesdetailid=1207

[ fixed earlier ] 

+ POINTS mode vertices are huge
  httpcode.google.compprocessingissuesdetailid=1037

+ Potentially insufficient ellipse detail with P3DOPENGL when scaled
  httpcode.google.compprocessingissuesdetailid=87

+ Implement support for complex shapes when using the OpenGL renderer 
  httpcode.google.compprocessingissuesdetailid=122

+ modelXYZ broken when aiming a camera
  httpcode.google.compprocessingissuesdetailid=148

+ OpenGL broken with JDK 7 on OS X, fixed with new JOGL updates
  httpcode.google.compprocessingissuesdetailid=1070

+ Problems with OpenGL example sketches
  httpcode.google.compprocessingissuesdetailid=902

+ Memory improvements for updatePixels() with OpenGL (P2D and P3D)
  httpcode.google.compprocessingissuesdetailid=77

+ Text characters showing up as opaque rectangles 
  httpcode.google.compprocessingissuesdetailid=80

+ Changing framerate causes program to crash with P2D in 2.0a6
  httpcode.google.compprocessingissuesdetailid=1116

[ android ] 

+ Updated examples from Andres and categories in the examples browser.


. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 


PROCESSING 2.0b1 (REV 0209) - 3 September 2012

Bug fixes, new registered methods for libraries, updated keywords,
and we're beta!

[ changes ] 

+ Require 10.6.8 as minimum Mac OS X system version. 

+ Change name from Standard to Java mode.

+ Save openedclosed state of entries in the examples browser
  httpcode.google.compprocessingissuesdetailid=827

+ Lots of internal changes to loadShape() and PShape. 

+ Work on making API more generic and consistent for cross-platform use.
  Font PFont.getFont() - Object PFont.getNative()
  Typeface PFont.getTypeface() - Object PFont.getNative()
  Image PImage.getImage() - Object PImage.getNative()
  Bitmap PImage.getBitmap() - Object PImage.getNative()

+ beginGL() and endGL() are gone, and beginPGL() and endPGL() exist 
  in their place. The PGL class is a layer that lets us talk to 
  OpenGL in a way that's cross-platform and consistent. It also has
  many GL calls for people who want to access GL directly.

+ New syntax introduced for libraries and registered methods. 
  Documentation coming soon.

[ bug fixes ] 

+ Handle dimming the FindReplace buttons.
  httpcode.google.compprocessingissuesdetailid=1056

+ Any double-click inside Examples window opened the last selection on Windows
  httpcode.google.compprocessingissuesdetailid=1201

+ loadImage() with spaces in path broken with exported applications on OS X
  httpcode.google.compprocessingissuesdetailid=1073

+ Minor speed fix for PVector.limit()
  httpcode.google.compprocessingissuesdetailid=1122

+ Jagged  Glitchy JAVA2D shape strokes in Java 1.6 due to recent
  change introduced in Java update from Oracle.
  httpcode.google.compprocessingissuesdetailid=1068

+ GL Android sketches halting after rotation.
  httpcode.google.compprocessingissuesdetailid=1146

[ known issues ] 

+ createShape() is not implemented with the default 2D renderer.

+ See the Changes page on the Wiki for more. 


. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 


PROCESSING 2.0a9 (REV 0208) - 1 September 2012

As we inch closer to beta, a quick release for testing. 

Plenty of video and OpenGL graphics fixes from Andres, and some functions
disappearing due to cleanups by Ben. (Andres giveth, Ben taketh away). 

Consider this one to be 'nightly build' quality. 

[ general ] 

+ Help menu broken when Processing has spaces in its path name in 2.0a8
  httpcode.google.compprocessingissuesdetailid=1164

+ We now have repeating textures. Use textureWrap(CLAMP) (the usual
  version) or textureWrap(REPEAT). If this feature is used for evil
  and cheesiness, it will be removed in future releases. 
  httpcode.google.compprocessingissuesdetailid=94

+ Fix lights in GL renderers on low-end android devices.
  httpcode.google.compprocessingissuesdetailid=1145

+ Pixels for createGraphics() now transparent for P2D, P3D.
  httpcode.google.compprocessingissuesdetailid=1156

[ video ] 

+ GettingStartedCapture in 2.0a8 launches X11 in Mountain Lion
  httpcode.google.compprocessingissuesdetailid=1191

+ Some videos were giving OpenGL error with P2DP3D.
  httpcode.google.compprocessingissuesdetailid=1166

+ Jump movie to multiple of the framerate for better accuracy.
  httpcode.google.compprocessingissuesdetailid=1182

+ Movie functions not working correctly in setup().
  httpcode.google.compprocessingissuesdetailid=1181

+ Fix initialization API for Capture.
  httpcode.google.compprocessingissuesdetailid=1184

+ Some movie examples were not working in P2D, P3D in 2.0a8
  httpcode.google.compprocessingissuesdetailid=1178

+ Wrong resolutions reported by Capture.list()
  httpcode.google.compprocessingissuesdetailid=1192

[ advanced ] 

+ Several constants moved out of PConstants and into PGraphics.

+ API cleanup to PShape and unapproved methods.

+ Synchronized Android sources a bit (PShape, PConstants, etc.)

+ Removed several video functions that weren't approved.


. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 


PROCESSING 2.0a8 (REV 0207) - 5 August 2012

A handful of bug fixes. Not as large a release as 2.0a7, but I decided 
it best to get the updates out there and in use rather than waiting for
beta 1 since I'm not sure when we'll be able to get that out. 

[ miscellaneous ] 

+ Make sure smooth() is the default with both renderers
  httpcode.google.compprocessingissuesdetailid=1157

+ Open dialog on Linux wasn't showing directories
  httpcode.google.compprocessingissuesdetailid=1151

+ Double-click was immediately closing example folder (Windows and Linux)
  httpcode.google.compprocessingissuesdetailid=1150

+ Support native code in Android libraries. Thanks to m4rlonj for the patch!
  httpcode.google.compprocessingissuesdetailid=1117

+ Don't expand the folders in the examples window (Casey request)

+ Added cmd-shift-O (ctrl-shift-O) for opening examples window

+ Added recent sketches menu to the toolbar

+ Added 'empty sketchbook' indicator when the sketchbook menus are empty

+ Prevent users from deleting the last tab on the only sketch that is 
  currently open on Windows and Linux. 

[ serial ] 

+ Added 64-bit RXTX for Mac OS X serial from this page
  httpblog.iharder.net20090818rxtx-java-6-and-librxtxserial-jnilib-on-intel-mac-os-x

+ Added warning message on Mac OS X when varlock folders aren't available
  httpcode.google.compprocessingissuesdetailid=944
  httpcode.google.compprocessingissuesdetailid=937

+ bufferUntil() with values above 127 do not work properly
  httpcode.google.compprocessingissuesdetailid=1079

[ plumbing ] 

+ Switch to using java.awt.Desktop classes for opening folders, links, etc.

+ Include createTextArea() in Editor for the GSOC projects.

+ Add code for setting the L&F from the prefs file for Linux.

+ Added 'all tabs' checkbox to Find & Replace, but not implemented yet.
  This would be a great project for someone to finish
  httpcode.google.compprocessingissuesdetailid=25

+ Added notes about color(0, 0, 0, 0) produces black to the Wiki.


. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 


PROCESSING 2.0a7 (REV 0206) - 29 July 2012

Hopefully the last alpha before we hit 2.0 beta. 

The big change is that we're dropping support for applets in 2.0, and in
this release. See the Changes section of the Wiki for details. We've not
updated all of the documentation to reflect this yet.

OS X 10.8 Mountain Lion support has also been added, by virtue of our 
paying $99year for the privilege of releasing our free and open source
application on OS X. When run on 10.8, versions prior to 2.0a7 would report
that they were corrupt, invalid, or not trusted. Which is definitely us. 

[ editor ] 

+ Implemented a Recent Sketches menu. This replaces re-opening 
  sketches on startup, which behaved inconsistently anyway. 
  httpcode.google.compprocessingissuesdetailid=188

+ Use Swing file choosers by default on Linux. The default opensave
  dialogs provided by Java are pretty gruesome, so we're switching to 
  the Swing JFileChooser instead. To swap the behavior, set 
  'chooser.files.native' in your preferences.txt file.

+ Suppress invalid context 0x0 and invalid drawable because they're
  (unfixable) Apple Java bugs and being reported as Processing bugs.
  Also suppress XInitThreads message on Linux with JOGL, which is a
  JOGL bug that'll hopefully be fixed in their next release.

+ Fix Movie Maker tool on OS X.

+ Update to Java 6 update 33 on Windows and Linux.

+ Add separate 32- and 64-bit releases for Windows and Linux. Lots of other
  updates for 3264-bit support in general.
  httpcode.google.compprocessingissuesdetailid=955

+ Replace processing.exe with a more standard version from launch4j, 
  which should hopefully clean up some launcher issues.
  httpcode.google.compprocessingissuesdetailid=943
  httpcode.google.compprocessingissuesdetailid=176

+ Change how sketches open so that there's no longer differences between
  the File menu 'Open' and the way it worked from the toolbar. Simplifies 
  additional code that was quirky.
  httpcode.google.compprocessingissuesdetailid=1034

+ Add a warning dialog for libraries that aren't compatible.
  httpcode.google.compprocessingissuesdetailid=884

+ Fix up the file choosers used on Linux.
  httpcode.google.compprocessingissuesdetailid=1014

+ Instead of prompting for sketchbook location on Linux, just default to
  a folder named 'sketchbook' in the user's home directory. This can easily
  be changed later but simplifies things internally a bit. 

+ No longer allow underscore at beginning of sketch name (causes problems 
  with Android, and also with applets, though we care less about those...)
  httpcode.google.compprocessingissuesdetailid=1047

+ Fixed a problem where sanitized names (underscores replacing unusable 
  characters) could potentially overwrite existing folders.

[ core ] 

+ Major changes to selectInput(), selectOutput(), and selectFolder(). 
  See the Wiki httpwiki.processing.orgwChanges#Change_and_Removed
  The changes are there to prevent a threading bug
  httpcode.google.compprocessingissuesdetailid=173
  httpcode.google.compprocessingissuesdetailid=931
  And also include an option to set the default file path
  httpcode.google.compprocessingissuesdetailid=233

+ Change 'appletViewer' back to 'online'. Still deprecated, especially
  because applets are going away. 

+ Add beginendGL added to PGraphicsPApplet. 

+ Add hasChildren() to XML library.
  httpcode.google.compprocessingissuesdetailid=1045

+ Fix where displayWidthHeight not being set properly before setup()
  httpcode.google.compprocessingissuesdetailid=1120

+ XML now throws exceptions in its constructor (for advanced users). 
  Use loadXML() instead of new XML(this, ....) 
  httpcode.google.compprocessingissuesdetailid=1138

+ loadXML() returns null when the file did not open properly
  httpcode.google.compprocessingissuesdetailid=1138

+ ortho() causing line and fill to be misaligned
  httpcode.google.compprocessingissuesdetailid=1143

+ Add some extra options for PApplet.main() for advanced users
  PApplet.main(SketchName) and PApplet.main(SketchName, args) 

[ android ] 

+ Add full PAppletMethods implementation to Android, so that PGraphics  
  and PImage methods are brought into PApplet.

+ Swap Run on Device and Run on Emulator
  httpcode.google.compprocessingissuesdetailid=1083

+ Fix XML crash on loading because of desktop-specific attribute
  error httpapache.orgxmlfeaturesnonvalidatingload-external-dtd
  httpcode.google.compprocessingissuesdetailid=1128
  This also fixes PShape on Android
  httpcode.google.compprocessingissuesdetailid=1054


. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 


PROCESSING 2.0a6 (REV 0205) - 1 June 2012

Lots of changes since the last update as we move closer to beta.

Major updates for 2.0 can be seen on the Changes page of the Wiki
httpwiki.processing.orgwChanges

[ changes ]

+ Lots of updates to how full screen, multiple displays, etc work
  httpwiki.processing.orgwWindow_Size_and_Full_Screen

+ Added an option for selecting the default display inside Preferences.

+ P2D and P3D are now variations of the OpenGL renderer. 

+ XML and Table are now part of the processing.data. package. 
  There's also new loadTable() and loadXML() methods in PApplet.

[ bug fixes ]

+ Renaming .pde to .java (or vice versa) complains
  httpcode.google.compprocessingissuesdetailid=776
  regression from httpprocessing.orgbugsbugzilla543.html

+ handleFindReference in Editor.java should be public for alternative modes ()
  httpcode.google.compprocessingissuesdetailid=713

+ Base.listFiles does not list recursively if extension is given
  httpcode.google.compprocessingissuesdetailid=718

+ ByteUnderflowException thrown and Font not reported
  httpcode.google.compprocessingissuesdetailid=442

+ Convert tabs to spaces when pasting text
  httpcode.google.compprocessingissuesdetailid=69

+ Fixed up some of the error messages inside Compiler.

+ When internal tools crash, don't add them to the menu
  (prevents the PDE from locking up on startup).

[ fixed earlier ] 

+ Export reports Could not copy source file (even though it works)
  httpcode.google.compprocessingissuesdetailid=638

+ Preferences window not visible on taskbar
  httpcode.google.compprocessingissuesdetailid=63

+ Paste value into color picker tool does not update box-slider
  httpcode.google.compprocessingissuesdetailid=68

+ Unable to access Javascript examples
  httpcode.google.compprocessingissuesdetailid=909

+ Closing sketch file closes applet
  httpcode.google.compprocessingissuesdetailid=606

[ core ]

+ Add support for println(long) because it was converting the type to float
  httpcode.google.compprocessingissuesdetailid=969

+ createGraphics for JAVA2D generates the wrong error msg w wh = 0
  httpcode.google.compprocessingissuesdetailid=983

+ Removed NanoXML, added save() method, other wish list features.
  httpcode.google.compprocessingissuesdetailid=904

+ Fix whitespace issue with XML
  httpcode.google.compprocessingissuesdetailid=975

+ Make displayWidthHeight work properly with multiple screen.
  (In the past, screen.width and screen.height just returned the default
  display size, not necessarily the display being used.) 

+ Built in Hansi's full screen API for OS X, so that sketches can use
  full screen without exclusive mode. See the Wiki for details.
  httpwiki.processing.orgwWindow_Size_and_Full_Screen

+ Now attempts detect when a sketch's size is the full screen, 
  and if so removes the frame border, etc.

+ --display option now works properly (on OS X and elsewhere)
  httpcode.google.compprocessingissuesdetailid=71

[ OpenGL by Andres ] 

+ polygon shapes without fill slowdown render progressively
  httpcode.google.compprocessingissuesdetailid=1028

+ screenY(x,y,z) returns incorrect coordinate
  httpcode.google.compprocessingissuesdetailid=1007

+ lights() behaving differently with OPENGL2 than original OPENGL
  httpcode.google.compprocessingissuesdetailid=619

+ directionalLight() is wrong on box()
  httpcode.google.compprocessingissuesdetailid=966

+ PShape3D uses a lot of memory
  httpcode.google.compprocessingissuesdetailid=1046

+ triangle in first ring of sphere() not being made properly
  httpcode.google.compprocessingissuesdetailid=1005

+ beginRaw() not working with 3D
  httpcode.google.compprocessingissuesdetailid=744

+ set() in 3D does not work on 2.0a5
  httpcode.google.compprocessingissuesdetailid=1069

+ frustum() and ortho() broken in P3D
  httpcode.google.compprocessingissuesdetailid=867

+ get() with OPENGL is grabbing the wrong part of the image
  httpcode.google.compprocessingissuesdetailid=191

+ OpenGL noSmooth() does not work
  httpcode.google.compprocessingissuesdetailid=328

[ android ] 

+ Android SDK Tools revision 19 (later may work too) are required.

+ Android mode no longer broken on Windows. Google has fixed the bug, 
  but you'll need to use the latest SDK.
  httpcode.google.compprocessingissuesdetailid=1022

+ GL2 specific code in Processing 2.0a5 break P3D on GLES2 hardware
  httpcode.google.compprocessingissuesdetailid=1029

+ OpenGLES requires precision specifier on float types
  httpcode.google.compprocessingissuesdetailid=1035

+ loadShape() with obj files was broken in 2.0a5
  httpcode.google.compprocessingissuesdetailid=1048

+ camera() and arc() now work together
  httpcode.google.compprocessingissuesdetailid=751


. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 


PROCESSING 2.0a5 (REV 0204) - 23 March 2012

Major updates in this release include a huge revamp of the OpenGL library
by Andres, fixes to get Android Mode working again, and a number of bug 
fixes and additions as we head toward 2.0.

Unfortunately, however, Android mode is still broken on Windows.
httpcode.google.compprocessingissuesdetailid=1022

On the OpenGL front, we're working to have a single library that works 
across both desktop and mobile, which is good news because it means we have 
a fighting chance of making it work (rather than maintaining two entire sets 
of a very complicated set of code), but the downside is that it requires 
newer versions of OpenGL on both the desktop and mobile, so it may cause 
problems with old OSes, mediocre graphics drivers, etc that worked with 
earlier releases.

[ bug fixes ] 

+ OpenGL applets are working again.
  httpcode.google.compprocessingissuesdetailid=845

+ Abnormal high Java CPU usage at empty sketch with draw() 
  httpcode.google.compprocessingissuesdetailid=729

+ Framingham example has BufferOverflowException
  httpcode.google.compprocessingissuesdetailid=900

+ Repeatedly calling texture() with new image raises memory error
  httpcode.google.compprocessingissuesdetailid=806

+ Doc comments not being properly terminated in export of applet
  httpcode.google.compprocessingissuesdetailid=877

+ Tweaks to the code to prevent multiple copies of Processing from 
  running at once.

+ Fix bug with 'base' not getting set in the Mac OS X platform class.

+ Syntax highlighting not case sensitive in 1.5 through 2.0+
  httpcode.google.compprocessingissuesdetailid=913

+ Fix problem with application export on Linux
  httpcode.google.compprocessingissuesdetailid=945

+ Fix PImage.get() issue with width or height  0.

+ (Mostly failed) attempts to improve the performance of tint() with Java2D.

+ Fix so that normals aren't attempted when no texture is set.

+ Several bug fixes inside Table as they relate to insertingadding columns.

[ changesadditions ] 

+ Enable smooth() by default.

+ Added setContent() to the XML library, other tweaks to XML export.

+ Make note of when library is not available (serial) with error msg
  i.e. if running in 64-bit mode on OS X, can't do serial

+ Update to Java 6u29 for Linux and Windows (OS X now updated).

+ Don't show library conflict warning until someone tries to build 
  with code that actually calls on one of those packages.

+ urlEncode() and urlDecode() added (docs coming later).

+ delay() is back again. Fking delay().

+ Added anti-alias methods so that FSAA can set up properly. The API for
  these is not set yet. 

[ in earlier releases ] 

+ Commenting via menu or shortcut does not set sketch to need save.
  httpcode.google.compprocessingissuesdetailid=860

+ Moved the data folder outside the main jar in exported applications.
  Otherwise enormous files are sometimes added to the jar, which makes
  things needlessly slow.

+ Create new MovieMaker tool to write uncompressed QuickTime movies.
  www.randelshofer.chblog201010writing-quicktime-movies-in-pure-java

+ Library imports failing for libs that define the same packages in 1.5.1
  httpcode.google.compprocessingissuesdetailid=725

+ Closing applet window in Processing 1.5 causes serial crash.
  httpcode.google.compprocessingissuesdetailid=635

[ javascript ] 

+ Finalize JavaScript mode export folder name.
  httpcode.google.compprocessingissuesdetailid=848

+ Intermittent hangs of PDE when launching JavaScript Server
  httpcode.google.compprocessingissuesdetailid=936


. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 


PROCESSING 2.0a4 (REV 0203) - 10 November 2011

This is just a quick release so that I can procrastinate on packing for
Chicago a little longer. A handful of bug fixes here

+ Video capture was broken in 2.0a3 on OS X due to an issue with the build 
  process. Should be all set now.

+ Fixed incessant inefficient font rendering debug message on Android.

+ Fixed androidcodebuild.xml to point at the correct SDK version.

+ Changing between 32- and 64- bit mode on OS X wasn't properly reloading
  library paths. Now it should pick up the necessary 32- and 64-bit version
  of a library that's needed. (However there are still no useful error
  messages when natives aren't available for the platform--just an
  UnsatisfiedLinkError when you try to run. Will fix.)

[ andres' bug victims ] 

+ Multiple calls to curve() connect subsequent curves with lines in P3DOPENGL
  httpcode.google.compprocessingissuesdetailid=865

+ Arc not drawn in P3D and OpenGL mode (2.0a2)
  httpcode.google.compprocessingissuesdetailid=890


. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 


PROCESSING 2.0a3 (REV 0202) - 5 November 2011

Some weekend bug fixing and regression repair for the recent alpha releases.

Also several Android fixes to get things working again with more recent 
updates from Google. You'll need to upgrade to this version of Processing 
in order to continue using Android mode.

[ environment ] 

+ Fix problem with serial not loading on Mac OS X.

+ Fix problem with popup menus on the toolbar disappearing immediately
  when used on Mac OS X 10.7 (Lion).
  httpcode.google.compprocessingissuesdetailid=846
  httpcode.google.compprocessingissuesdetailid=887

+ Incorrect tabline shown for preprocessor errors when more than 2 tabs
  httpcode.google.compprocessingissuesdetailid=873

+ Commenting via menu or shortcut does not set sketch to need save
  httpcode.google.compprocessingissuesdetailid=766

+ IDE Export Application button exports applet (fixed in 2.0a2)
  httpcode.google.compprocessingissuesdetailid=863

[ core ] 

+ Fix for video frames not showing up in 3D.

+ Rounded rect() does not have a maximum length for corner radius
  httpcode.google.compprocessingissuesdetailid=813

[ android ] 

+ Fix libraries when used with Android. Libraries can also specify
  an Android version by including an 'android' subfolder.
  httpcode.google.compprocessingissuesdetailid=766

+ Fix problem with export menu, keys, toolbar being different.

+ Change default package name a bit.

+ Switch to SDK 8 (Android 2.2) as the minimum that we're supporting.
  This allows us to rely on far more consistent OpenGL implementations.

+ Update the project files for Android SDK Tools Revision 15 (now required)
  httpcode.google.compprocessingissuesdetailid=876

+ Improve launching with the emulator.

+ Remove 'includeantruntime' warning during build.

+ Date could not be parsed error.
  httpcode.google.compprocessingissuesdetailid=864


. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 


PROCESSING 2.0a2 (REV 0201) - 31 October 2011

Happy Halloween! I'll be dressing up as an ArrayIndexOutOfBoundsException.

This release is primarily focused on the new video library and making it
usable across platforms. It also has some changes for how applications 
are exported, and a number of other bug fixes and tweaks.

[ platforms ] 

+ With this release, Java 1.6 is now required. We will no longer be 
  supporting Java 1.5.

+ In perhaps related news, we are no longer supporting Mac OS X 10.5.
  We have to support 10.6 and 10.7 across both 32- and 64-bit, and adding
  yet another to that is simply not possible.

[ 32- and 64-bit support is a nightmare ]

+ A great deal of effort is being put into supporting the emergence of
  64-bit. Library support has changed significantly to get things working,
  more on this coming soon.

+ Serial on Mac OS X and Windows is currently only available for 32-bit. 
  Hoping someone can help us support a 64-bit version sometime soon. 

+ When exporting a 64-bit application for Windows, a .bat file is created,
  because our .exe doesn't yet support 64-bit. Assuming you have a 64-bit
  JVM installed, the .bat file should load things properly.

+ Because serial only supports 32-bit on OS X, exporting an application 
  that uses serial will only create a application.macosx32 folder, which 
  is a 32-bit app for Mac OS X. No application.macosx64 will be created, 
  nor will a universal application.macosx folder. This is also the case 
  for other libraries that have only 32- or 64-bit support. See earlier
  note that 32- and 64-bit support is an fing nightmare.

[ video ] 

+ The most significant change in this release is that the new video library
  from Andres (based on his old gsvideo library) is nearing fully fucntional.

+ MovieMaker is going to be replaced by a Tool that allows you to sequence
  a set of images together into a movie file. The tool currently has a GUI
  bug that breaks it, but this will be fixed sometime soon.

[ other changes ]

+ Application is now the default export (instead of Applet). 

+ Change to how dataPath() and dataFile() work. This is an undocumented
  function, but for those using it, here's the skinny 

  dataPath() is only available with applications, not applets or Android.
  On Windows and Linux, this is simply the data folder, which is located
  in the same directory as the EXE file and lib folders. On Mac OS X, this
  is a path to the data folder buried inside ContentsResourcesJava.
  For the latter point, that also means that the data folder should not be
  considered writable. Use sketchPath() for now, or inputPath() and
  outputPath() once they're available in the 2.0 release.

  dataPath() is not supported with applets because applets have their data
  folder wrapped into the JAR file. To read data from the data folder that
  works with an applet, you should use other methods such as createInput(),
  createReader(), or loadStrings().

+ Additional library files included with application exports are now placed 
  in the 'lib' folder on Linux and Windows, or buried inside the OS X app.
  This helps prevent the unsightly mess of DLLs that were crowding the
  root folder of exported applications on Windows and Linux.

+ If noLoop() has been called but a sketch is resized, redraw() will be 
  called to update the screen.


. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 


PROCESSING 2.0a1 (REV 0200) - 2 September 2011

First alpha release as we head toward 2.0. Please read the changes page 
to learn about what's different httpwiki.processing.orgwChanges

[ since we last spoke ] 

+ Lots of video work from Andres. 

+ Updated to Java 6u26 on Windows and Linux.

+ HTML escapes for  and  were not working properly
  httpcode.google.compprocessingissuesdetailid=771

+ Quit if multiple instances of Processing are running (see the Wiki).

+ Fixed another problem with missing shearXY() in JAVA2D
  httpcode.google.compprocessingissuesdetailid=784

+ Removed textMode(SCREEN).

+ Added expand(long) and expand(double) because of Table.

+ PImage.save() with full path raises exception
  httpcode.google.compprocessingissuesdetailid=808

+ Fix problem where loading data from an http stream would 
  run out of memory on Android. 


. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 


PROCESSING REV 0199 - 27 June 2011

Handful of bug fixes, primarly to deal with issues introduced in 0198. 

+ Remove error messages for UpdateCheck wo internet connection.

+ char c = 'u' breaks sketches in 0198
  httpcode.google.compprocessingissuesdetailid=752
  Also additional fixes to handling bad character constants in the preprocessor

+ Deal with extraneous error messages about the emulator and AVD when trying
  to run Processing on an Android device.

+ Fix broken loadShape().

+ Fix broken loadNode() and XML usage in general.

+ Fix problem with save() writing multiple image files with an extra .tif
  at the end. 

+ Added no-op orientation() method to the desktop version so that code
  will work unchanged between Android and desktop.

+ Add warning for missing glyphs in PFont. 


. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 


PROCESSING REV 0198 - 23 June 2011

Major internal work as we start blowing things up for 2.0. The main things are
covered on the changes page in the Wiki httpwiki.processing.orgwChanges

This is an interim release so that Andres can do a workshop. Not recommended
for casual use. Hostile or belligerent whiners need not apply.

Android mode has received zero testing, so XML, SVG, 3D, and other major 
features may be broken. See statement directly above.

[ bugs fixed ] 

+ Examples window placed off-screen when PDE window is maximized
  httpcode.google.compprocessingissuesdetailid=669

+ Make examples window respond to ESC, and double-click events to 
  expandcollapse nodes.

+ Launch script for Linux fails to open a sketches with relative paths
  httpcode.google.compprocessingissuesdetailid=707

+ Badly formed character constant exception
  httpcode.google.compprocessingissuesdetailid=714

+ Resize box on OS X is not present in Examples box
  httpcode.google.compprocessingissuesdetailid=730

+ NewRename Tab commands inhibited when ConsoleMessage Area is hidden
  httpcode.google.compprocessingissuesdetailid=745

+ Make sketch.properties usable elsewhere by loadingreloading
  httpcode.google.compprocessingissuesdetailid=722

+ Export to Application reports Could not copy source file 
  httpcode.google.compprocessingissuesdetailid=638

+ Automatically insert the 'import processing.opengl' when P3D used.

+ Export Application Fails When Large File in Data Folder
  httpcode.google.compprocessingissuesdetailid=747

[ reference ]

+ Add some notes about how to work with deployJava.js and applets
  httpdev.processing.orgbugsshow_bug.cgiid=1259

[ core ]

+ Added quadraticVertex() method to do a quadratic bezier vertex.

+ More efficient version of copy() added for 2D.

+ Implemented rounded rectangle method.
  httpcode.google.compprocessingissuesdetailid=265

+ Removed the delay() method. It was awful.

+ Addded thread() method that takes a function name as a parameter, 
  and runs it on its own thread. No more classes!

+ PImage.save() returns a success boolean (rather than throwing an 
  exception when it fails).

[ core bugs fixed ]

+ saveBytes() error when writing to existing file
  httpcode.google.compprocessingissuesdetailid=667

+ problem with destroy() calling System.exit()
  httpcode.google.compprocessingissuesdetailid=698

+ post() is called after setup() 
  httpcode.google.compprocessingissuesdetailid=455

+ Remove auto-sizing from binary() (was inconsistent with hex() method).

[ libraries ]

+ Reverted back to the older serial libs, which should improve stability a bit.
  Also grabbed the 64 bit Linux driver and a patch for devttyACM0 from
  the Arduino guys. Thanks to Dave Mellis for the pointer.
  httpcode.google.compprocessingissuesdetailid=634

+ Fix applet exporting for new OpenGL, also fixes signed applet requirement.
  httpcode.google.compprocessingissuesdetailid=429

+ New XML library that more accurately reflects how DOM parsing works.
  Also straightening out the API a bit. Documentation to come later.
  httpcode.google.compprocessingissuesdetailid=277
  httpcode.google.compprocessingissuesdetailid=440

[ andres' bag of awesome ]

+ Finish OPENGL2 renderer
  httpcode.google.compprocessingissuesdetailid=495

+ Using createGraphics() image repeatedly runs out of memory with OPENGL
  httpcode.google.compprocessingissuesdetailid=483

+ Resizing window in OPENGL breaks ImageCaches
  httpcode.google.compprocessingissuesdetailid=184

+ Resize not working in revision 5707
  camera() and perspective() were commented out in setSize()
  httpdev.processing.orgbugsshow_bug.cgiid=1391

+ Resizing opengl destroys context and textures
  httpdev.processing.orgbugsshow_bug.cgiid=1176

+ Implement repeating textures
  httpcode.google.compprocessingissuesdetailid=94

[ android ] (these were missing from the actual release notes)

+ mask() has no effect unless image has already been drawn in A3D
  httpcode.google.compprocessingissuesdetailid=623

+ point() doesn't render in A3D
  httpcode.google.compprocessingissuesdetailid=592

+ excessive rotation of application causes memory to run out
  httpcode.google.compprocessingissuesdetailid=235

+ mirroring in A3D when background() not called within draw()
  httpcode.google.compprocessingissuesdetailid=624

+ removed A2D and A3D constants

+ colorMode() error 
  httpcode.google.compprocessingissuesdetailid=223


. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 


PROCESSING 1.5.1 (REV 0197) - 15 May 2011

This release fixes a handful of regressions and quirks that were found in
the Processing 1.5 release last month. 

[ editor ] 

+ Windows splash screen for version 1.5 says 1.2
  httpcode.google.compprocessingissuesdetailid=631

+ Import Library was broken for several built-in libraries.
  httpcode.google.compprocessingissuesdetailid=637

+ Fixed broken update checker.

+ Reverted to the old shell script on Linux.
  httpcode.google.compprocessingissuesdetailid=633

+ Applets exported on Windows can't find files in the data folder.
  httpcode.google.compprocessingissuesdetailid=666

+ File  New and Command-N stop working on OS X after running a sketch
  httpcode.google.compprocessingissuesdetailid=664

[ core ] 

+ Reverted to the old createFont() behavior, where native fonts will
  be used with createFont() in more situations.
  httpcode.google.compprocessingissuesdetailid=662

[ svg ] 

+ Improve handling of transformations in SVG files.
  httpcode.google.compprocessingissuesdetailid=388

+ Fix bug in SVG parser for shorthand curves (Tt and Ss)
  httpcode.google.compprocessingissuesdetailid=350

+ Prevent shape(PshapeSVG) from failing if SVG contains path d=
  httpcode.google.compprocessingissuesdetailid=434

+ Fix misshapen quadratic bezier curves when drawing SVG files.

[ examples ] 

+ HsvSpace example sketch in 1.5 download requires additional import
  httpcode.google.compprocessingissuesdetailid=661

+ Obsolete Network  HTTPClient sketch
  httpcode.google.compprocessingissuesdetailid=655


. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 


PROCESSING 1.5 (REV 0196) - 17 April 2011

A lot has changed in the nine months since 1.2.1 was released, the biggest
being the introduction of modes for the editor, allowing you to switch
between Android development or the classic desktopweb mode. More modes are
coming in future releases.

Another significant change is a fix for applets that were stuttering or 
appearing to run very, very slowly in Firefox 4 and Chrome. That's the major
reason that we're releasing this version in advance on 2.0 later this summer.

All of the changes since 1.2.1 are listed in this document. If you get stuck,
give it a search to see if there might be a clue about something that has
changed. Or if you have problems, please file a bug.

For people who have been using OPENGL2 in the pre-releases, the library
has been removed from 1.5, and will return in future pre-releases before
eventually replacing the built-in OpenGL library for 2.0.

Meanwhile, here are the changes since revision 0195, the last pre-release

[ pde ] 

+ A new version of the reference and examples have been posted online.

+ Upgraded to Quaqua 7.3.4 on OS X. Fixes mode menu checkbox on OS X

+ Added a fix for text focus handling in the editor (0195 problem)
  httpcode.google.compprocessingissuesdetailid=627

+ File - Save no longer stops the running sketch
  httpdev.processing.orgbugsshow_bug.cgiid=810
  httpcode.google.compprocessingissuesdetailid=100

+ Fixed a bug in the LoadFile2 example 
  httpcode.google.compprocessingissuesdetailid=522

+ Shift-indent without selection increases indention
  httpcode.google.compprocessingissuesdetailid=458

+ Allow more than one sketch to run at a time (problem in 01945)
  httpcode.google.compprocessingissuesdetailid=567

+ Fix caret bug leading to slow degredation of the PDE.

+ Fix Color Selector to be more efficient with many sketch windows.

+ Fix sketch marked as modified too aggressively
  httpdev.processing.orgbugsshow_bug.cgiid=328
  httpcode.google.compprocessingissuesdetailid=57
  httpcode.google.compprocessingissuesdetailid=620

+ Prevent save from clearing undo information
  httpcode.google.compprocessingissuesdetailid=411

+ RenameSave As doesn't properly have its focus set (fixed in 0195)
  httpdev.processing.orgbugsshow_bug.cgiid=31
  httpcode.google.compprocessingissuesdetailid=13

[ peter lewis ]

Several fixes for text selection and editing, provided by a
Mac software developer hero of my youth, Peter N Lewis.

+ Use Selection For Find
  httpcode.google.compprocessingissuesdetailid=571

+ Double-clicking whitespace selects adjacent chars
  httpcode.google.compprocessingissuesdetailid=59
  httpcode.google.compprocessingissuesdetailid=576

+ FindReplace all around very ugly, fix it up
  httpdev.processing.orgbugsshow_bug.cgiid=67
  httpcode.google.compprocessingissuesdetailid=23
  httpcode.google.compprocessingissuesdetailid=580

+ Several additional tweaks
  httpdev.processing.orgbugsshow_bug.cgiid=68
  httpcode.google.compprocessingissuesdetailid=24

[ core ]

+ Fix minor native fonts issue.

[ android ] 

+ Workaround for loadImage(url) bug in Google's Android source.  
  Issue tracked down by psoden. (Thanks!)
  httpcode.google.compprocessingissuesdetailid=629

+ Build an interface for control of permissions on Android (earlier)
  httpcode.google.compprocessingissuesdetailid=275

+ Implement createGraphics() (completed in earlier releases)
  httpcode.google.compprocessingissuesdetailid=240

+ Android 0192 sketch in static mode crashes on exit (fixed in 0193 or so)
  httpcode.google.compprocessingissuesdetailid=518


. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 


PROCESSING REV 0195 - 10 April 2011

Bug fixes and several Android updates. Working to close in on a proper 
Processing 1.5 release.

This release has several changes to renaming sketches, using Save As, 
and how untitled sketches are handled. Please help test!

Note that on the Android side, this release once again requires installation
of the Google APIs. See the Android Wiki page for details.

[ general ] 

+ Sketch restarts automatically after pressing stop button on PDE
  httpcode.google.compprocessingissuesdetailid=561

+ 'unexpected token void' for any type of error (due to fallback)
  httpcode.google.compprocessingissuesdetailid=551

+ Deal with weird states when closing last editor window on OS X

+ With one sketch open, changing the mode doesn't close the original editor
  httpcode.google.compprocessingissuesdetailid=569

+ Move library examples to the examples menu
  httpdev.processing.orgbugsshow_bug.cgiid=1278
  httpcode.google.compprocessingissuesdetailid=181

+ Ctrl-slash not working on Linux (fix from pkalauskas, thanks!)
  httpcode.google.compprocessingissuesdetailid=596

+ Update to Java 6u24 for Linux and Windows

+ Export .java source files with applets and applications.
  httpcode.google.compprocessingissuesdetailid=570

+ Reference broken in 0194.
  httpcode.google.compprocessingissuesdetailid=572

+ Other reference tweaks

+ Fix exception spew when clicking between editor windows.

+ Don't reload sketch on save as
  httpcode.google.compprocessingissuesdetailid=62

+ Smooth text on the status bar on Linux.

+ Clear up some issues with focus handling in the editor.

+ Save AsRename don't properly set focus
  httpcode.google.compprocessingissuesdetailid=13

+ No library found message when using import statements and the code folder
  httpcode.google.compprocessingissuesdetailid=568

+ Remove version number from splash image
  httpcode.google.compprocessingissuesdetailid=324

+ Subfolders in libraries folder not supported in 0194, 
  bring them back for toxi and the toxiclibs folks.
  httpcode.google.compprocessingissuesdetailid=578

[ core ] 

+ Deal with bad screen updates for sketches running  60 fps in JAVA2D

+ OPENGL2 record only saves one line in a LINES shape (fix from Andres)
  httpcode.google.compprocessingissuesdetailid=579

+ normal() command commented out in sphere() method
  httpcode.google.compprocessingissuesdetailid=602

+ save() and other pixel operations no longer working with JAVA2D in 0194
  httpcode.google.compprocessingissuesdetailid=594

[ android ] 

+ point() doesn't render in A3D
  httpcode.google.compprocessingissuesdetailid=592

+ Android stuck at Starting Build
  httpcode.google.compprocessingissuesdetailid=590

+ Deal with missing android-core.zip (No such file or directory)
  httpcode.google.compprocessingissuesdetailid=577

+ Error messages about No library found for android.

+ When returning to android application, sometimes screen stays black
  httpcode.google.compprocessingissuesdetailid=237

+ Device Killed or Disconnected Error Message with Libraries
  httpcode.google.compprocessingissuesdetailid=565

+ Better error handling when certain SDK components are not installed.

+ Canceling an attempt to find the Android SDK leaves no window open, 
  or crash when trying to change to Android mode w no Android SDK
  httpcode.google.compprocessingissuesdetailid=605


. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 


PROCESSING REV 0194 - 9 March 2011

Lots of fixes for late-breaking problems in release 0193.

[ fixes ] 

+ The Auto Format command went missing in 0193. It's back for 0194, but is 
  now located in the Edit menu, where it will stay for the rest of its long
  and happy life.

+ The Import Library menu wasn't being updated properly in 0193. Note that
  for the time being, there are no core libraries on Android. (OpenGL is built
  in, for instance.)

+ Fix mode switching for Windows and Linux.

+ Library examples weren't showing up in 0193, now they're back.

+ Fix for flicker problem in the default renderer.
  httpcode.google.compprocessingissuesdetailid=558

+ The examples menu wasn't completely removed in 0193. 

+ Remove temporarily skipping deletion of debugging message on export.

+ Properly reload examples & libraries when changing the sketchbook location.

+ Fix a problem with untitled sketches and mode switching.

+ Fix problem with Sketch Permissions for Android.
  httpcode.google.compprocessingissuesdetailid=559

[ notes ] 

+ Because both OpenGL and OpenGL2 are present, there may be conflicts if you
  implement any OpenGL-specific code outside the Processing API. If your sketch
  includes either of the following lines

  import javax.media.opengl.;
  import javax.media.opengl.glu.;

  then you should remove one of the OpenGL libraries, depending on which you
  would like to use. 

+ OpenGL is built-in on Android. You don't need to add it as a library, the
  way you do with the desktop. A import processing.opengl. line won't
  hurt anything (the preprocessor removes it), but it's also not necessary.
  (This is also noted in the Android wiki.)

+ Library examples no longer show up buried in the sketchbook. Instead they
  can be found in the Libraries and Contributed Libraries sections of
  the examples window.

[ additions ]

+ Added a new icon for Export to Application, along the lines of the 
  icons used on the Android side. 

+ Remove warning about the broken build.
  httpcode.google.compprocessingissuesdetailid=519


. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 


PROCESSING REV 0193 - 8 March 2011

The PDE is receiving a major overhaul. The most obvious change is that 
there's now a menu that allows you to switch between modes. Standard
is the Java-based mode that we're all used to, and Android compiles 
things for Android devices. 

Basically it's all pre-releases from here until 2.0. 

With the mode support, it will soon be possible to embed other projects, 
like the Python version, or the JS exporter, directly inside the PDE. 
More on this later.

This release also fixes a handful of Android problems, like the use of
libraries, the code folder, and so on.

[ core ] 

+ Fix problem that made applets suck in Google Chrome and Firefox 4.

+ Fix java.lang.OutOfMemoryError using get() and image() inside a tight loop.
  httpcode.google.compprocessingissuesdetailid=42

+ Changed default font to Lucida Sans, available on all platforms. 
  This means that your text may be a slightly different size if you haven't
  used textFont(), but hey, you probably don't use the default font, right 
  A fella (or gal) like you

+ textAlign() incorrect with default font on Mac OS X 10.6
  httpcode.google.compprocessingissuesdetailid=362

+ Clean up how PDF fonts are handled. Default to writing fonts as shapes, 
  which makes PDF files larger, but is likely to work in more cases. If you
  want editablereal text, you can call textMode(MODEL) right after creating
  the PDF renderer (directly below size() or beginRecord()).
  httpcode.google.compprocessingissuesdetailid=416

+ Saving a PGraphics as jpg using save() makes a cmyk file
  httpcode.google.compprocessingissuesdetailid=415

+ Fix bizarre window placement when using Present mode on OS X.

[ pde changesfixes ] 

+ Added support for separate 32 and 64 bit versions of libraries.

+ Added a 64 bit version of the OpenGL library.

+ Updates to Java 6u23 in the download.

+ Fix issue with javac.exe not being included in the download.

+ Also added opengl2, which rolls GLGraphics and the new Android OpenGL
  library into a newer, faster, more amazinger OpenGL that will eventually
  be the default.

+ Added a lot of examples. This has also had the effect of making the 
  download enormous. It's currently obese. We'll sort that out later.

+ Code folder oddity on application export (in SVN)
  httpcode.google.compprocessingissuesdetailid=486

+ Processing cannot run because it could not ... store your settings.
  httpcode.google.compprocessingissuesdetailid=410

+ AutoFormat unecessarily adds spaces to function with multiple args
  httpcode.google.compprocessingissuesdetailid=462

+ Fix for linux build script (thanks to Kevin Keraudren)
  httpcode.google.compprocessingissuesdetailid=466

+ Fix the encoding on OS X for the Fix Encoding and Reload function

+ Hex value from color picker does not start with #
  httpcode.google.compprocessingissuesdetailid=529

+ Console, preferences cleanup removed build.path, as well as
  console.output.file, and console.error.file. Also removed 'console' 
  truefalse from preferences.

+ Change console to write to the 'console' folder in settings.
  This may eventually create a problem with logs that need to be cleaned,
  but we'll keep an eye on it for now.

+ Add splash image on OS X.

+ Added window for examples. It's a bit ugly, but the menu was too much
  and we should be able to clean this feller up later. Also makes the 
  examples a bit more obvious.

+ Updated the serial library for Mac OS X
  httpcode.google.compprocessingissuesdetailid=503
  httprxtx.qbang.orgwikiindex.phpDownload

+ Accented letter input is broken (on OS X and Windows)
  httpcode.google.compprocessingissuesdetailid=335
  Had to disable input method support (Japanese) for now.

+ For projects with too many tabs, condense the ones that are used less.
  httpdev.processing.orgbugsshow_bug.cgiid=54
  httpcode.google.compprocessingissuesdetailid=17

[ fixed in 0192 ] 

+ Auto-format screws up ifelseelse if blocks
  httpcode.google.compprocessingissuesdetailid=325

+ Exported libraries don't mantain symbolic links
  httpcode.google.compprocessingissuesdetailid=353

[ android edits ]

+ Add better icons from Casey for exported applications. 

+ Remove the need to download the android core.jar separately
  httpcode.google.compprocessingissuesdetailid=421

+ Remove the Google APIs requirement, just use the standard.
  This means losing the standard skin on the emulator, but we'll see
  about bringing it back in some other fashion in the future.
  We weren't actually using the Google APIs, so it seemed silly
  because of how much complexity it added.

+ Deal with issue of debug certificates expiring.
  httpforum.processing.orgtopicant-rules-r3-xml-209-395-error#25080000000262001

+ Fix use of .java files in Android projects
  httpcode.google.compprocessingissuesdetailid=404

+ Save state for whether using Android or Standard mode
  httpdev.processing.orgbugsshow_bug.cgiid=1380
  httpcode.google.compprocessingissuesdetailid=202

+ New mode support makes the Android switch less clunky
  httpdev.processing.orgbugsshow_bug.cgiid=1379
  httpcode.google.compprocessingissuesdetailid=201

+ With mode support, Run on Device and Run in Emulator instead of 
  Run and Present.

[ internal changes ] 

+ Removed build.path from preferences.txt.
  Not really used anywhere, just trying to clean things up.

+ Removed 'console.output.file' and 'console.error.file'.
  These weren't respected as paths, no reason for them.

+ Change console to write to the 'console' folder in settings. 
  This may eventually create a problem with logs that need to be cleaned, 
  but we'll keep an eye on it for now.

+ Removed 'console' truefalse from preferences.

+ Cannot reproduce problem with wrong character encoding in the console.
  httpcode.google.compprocessingissuesdetailid=197


. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 


PROCESSING REV 0192 - 18 December 2010

This release contains a roll-up of lots of bug fixes. However, it's being
released before it's ready, so it should only be used by people who are having
trouble with the new Android SDK release (revision 8) from Google, which 
broke Android support last week.

This version of Processing for Android requires Android SDK Tools Release 8. 
If you're not using release 8, and don't have the necessary components 
installed, you'll get (confusing) error messages saying that the SDK location 
is not set, and that it could not find an SDK in the location that you specify.

As for this being an early release, the problem is that major changes were
underway regarding how libraries are handled, so it's quite possible that
library support (in both the standard or Android version) or code folder
support is somewhat broken. So with that caveat, no whining, please.

On a happier note, the changes

[ android fixes ] 

+ Compile android-core with Java 5 as the target so that it works on OS X 10.5.

[ additions from andres ] 

+ A3D should use lower color depth on older devices.
  httpcode.google.compprocessingissuesdetailid=391

+ New API for beginendRecord().

+ Finish OpenGL blending modes in A3D
  httpcode.google.compprocessingissuesdetailid=290

+ Automatic normal calculation in A3D
  httpcode.google.compprocessingissuesdetailid=345

+ Improve texture handling in A3D's PFont
  httpcode.google.compprocessingissuesdetailid=394

+ OpenGL resource release mechanism in A3D is broken
  httpcode.google.compprocessingissuesdetailid=456

+ Multitexturing in A3D
  httpcode.google.compprocessingissuesdetailid=344

+ Problems when loading images asynchronously in A3D.
  httpcode.google.compprocessingissuesdetailid=465

[ preprocessor, from jdf ]

+ Fixed Syntax error on token else, } expected
  httpcode.google.compprocessingissuesdetailid=400

+ Autoformat bug (new java for loop syntax)
  httpcode.google.compprocessingissuesdetailid=420

+ Fix matching brace problem in PDE
  httpcode.google.compprocessingissuesdetailid=417

+ Fix syntax highlighting of focusGained and others
  httpdev.processing.orgbugsshow_bug.cgiid=659
  httpcode.google.compprocessingissuesdetailid=82

+ Error when compiling with static final global variable.
  httpcode.google.compprocessingissuesdetailid=427

+ AutoFormat unecessarily adds spaces to function with multiple args
  httpcode.google.compprocessingissuesdetailid=462

[ edits from Lonnen ] 

+ Fix for disappearing horizontal scroll bar regression
  httpcode.google.compprocessingissuesdetailid=316

+ Fix problems with stop().
  httpdev.processing.orgbugsshow_bug.cgiid=131
  httpcode.google.compprocessingissuesdetailid=43
  ...as a result, dispose() methods aren't being called on libraries
  httpdev.processing.orgbugsshow_bug.cgiid=131
  httpdev.processing.orgbugsshow_bug.cgiid=77 (dupe)
  httpdev.processing.orgbugsshow_bug.cgiid=183 (dupe)
  ...also a double stop() called with noLoop()
  httpdev.processing.orgbugsshow_bug.cgiid=1270
  httpcode.google.compprocessingissuesdetailid=180

+ Properly enforce the minimum size for editor windows.
  httpcode.google.compprocessingissuesdetailid=451

+ Patch Processing IDE destroys symbolic links
  httpcode.google.compprocessingissuesdetailid=432

+ Windows Processing cannot run because it could not ... store your settings.
  httpcode.google.compprocessingissuesdetailid=410

+ PGraphicsJava2D.resize() not working the same as PGraphics2D.resize()
  httpdev.processing.orgbugsshow_bug.cgiid=1107
  httpcode.google.compprocessingissuesdetailid=150
  Resize is not available with renderers, use createGraphics().
  Added a note to the reference.

[ more fixes and edits ]

+ Don't let PDE open sketches with bad names (reported by Max)

+ Exported libraries don't mantain symbolic links
  httpcode.google.compprocessingissuesdetailid=353

+ Repair regression in XMLElement.getBoolean(String, boolean)
  httpcode.google.compprocessingissuesdetailid=399

+ color() problem with alpha
  httpcode.google.compprocessingissuesdetailid=327

+ PVector.angleBetween() regression
  httpcode.google.compprocessingissuesdetailid=435

+ Fix for linux build script (thanks to Kevin Keraudren)
  httpcode.google.compprocessingissuesdetailid=466

+ shearX and shearY not properly implemented with P2D and JAVA2D
  httpcode.google.compprocessingissuesdetailid=452

+ frame.setResizable(true) does not enable maximize button. 
  Thanks to Christian Thiemann for a workaround.
  httpcode.google.compprocessingissuesdetailid=467


. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 


PROCESSING REV 0191 - 30 September 2010

Bug fix release. Contains major fixes to 3D for Android.

[ changes ] 

+ Added option to preferences panel to enabledisable smoothing of text
  inside the editor.

+ Added more anti-aliasing to the Linux interface. Things were downright
  ugly in places where defaults different from Windows and Mac OS X.

[ bug fixes ] 

+ Fix a problem with Linux permissions in the download.
  httpcode.google.compprocessingissuesdetailid=343

+ Fix 'redo' command to follow various OS conventions.
  httpcode.google.compprocessingissuesdetailid=363
  Linux ctrl-shift-z, macosx cmd-shift-z, windows ctrl-y
  httpen.wikipedia.orgwikiTable_of_keyboard_shortcuts
  httpdeveloper.apple.commaclibrarydocumentationUserExperienceConceptualAppleHIGuidelinesXHIGUserInputXHIGUserInput.html

+ Remove extraneous console messages on export.

+ When exporting, don't include a library multiple times. 

+ Fixed a problem where no spaces in the size() command caused an error.
  httpcode.google.compprocessingissuesdetailid=390

[ andres 1, android 0 ]

+ Implemented offscreen operations in A3D when FBO extension is not available
  httpcode.google.compprocessingissuesdetailid=300

+ Get OpenGL matrices in A3D when GL_OES_matrix_get extension is not available
  httpcode.google.compprocessingissuesdetailid=286

+ Implemented calculateModelviewInverse() in A3D
  httpcode.google.compprocessingissuesdetailid=287

+ Automatic clearnoClear() switch in A3D
  httpcode.google.compprocessingissuesdetailid=289

+ Fix camera issues in A3D
  httpcode.google.compprocessingissuesdetailid=367

+ Major fixes for type to work properly in 3D (fixes KineticType)
  httpcode.google.compprocessingissuesdetailid=358

+ Lighting and materials testing in A3D
  httpcode.google.compprocessingissuesdetailid=294

+ Generate mipmaps when the GL_OES_generate_mipmaps extension is not available.
  httpcode.google.compprocessingissuesdetailid=288

+ Finish screen pixelstexture operations in A3D
  httpcode.google.compprocessingissuesdetailid=298

+ Fixed a bug in the camera handling. This was a quite urgent issue, 
  since affected pretty much everything. It went unnoticed until now because
  the math error canceled out with the default camera settings.
  httpforum.processing.orgtopicpossible-3d-bug

+ Also finished the implementation of the getImpl() method in PImage, 
  so it initializes the texture of the new image in A3D mode. 
  This makes the CubicVR example to work fine.

[ core ] 

+ Fix background(PImage) for OpenGL
  httpcode.google.compprocessingissuesdetailid=336

+ Skip null entries with trim(String[]) 

+ Fix NaN with PVector.angleBetween
  httpcode.google.compprocessingissuesdetailid=340

+ Fix missing getFloat() method in XML library

+ Make sure that paths are created with saveStream(). 
  (saveStream() wasn't working when intermediate directories didn't exist)

+ Make createWriter() use an 8k buffer by default. 


. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 


PROCESSING REV 0190 - 18 August 2010

This release is primarily for Android users. For the desktop version, there
are some problems with fonts. If you're using text, especially with PDFs,
you may want to wait until the next release.

Android users should read the Wiki (httpwiki.processing.orgwAndroid)
which has a lot of new information. 

[ android ] 

+ Added a new menu to cover enablingdisabling Android mode. 

+ Added a Permissions dialog, so that you can set permissions for your 
  applications, e.g. so you can read from the internet or save files.

+ Added support for icons. Put files named icon-32.png, icon-48.png, 
  and icon-72.png in your sketch folder, and they'll be added to your
  project when it's created. Otherwise you'll get an ugly blue dot 
  default icon. You've been warned.

+ Finish implementing the size() command on Android. See the Wiki for notes.
  httpdev.processing.orgbugsshow_bug.cgiid=1397
  httpcode.google.compprocessingissuesdetailid=211

+ Finish implementation of P3DOpenGLA3D for Android.
  httpdev.processing.orgbugsshow_bug.cgiid=1396
  httpdev.processing.orgbugsshow_bug.cgiid=1401

+ Allow screenWidthHeight as parameters to size().

+ Fix mouseXY mapping when using smaller screen sizes.

+ Fix text ascentdescent problem, text(blahnblah) wasn't working.

+ Fixed how the manifest file is readwritten. 
  httpdev.processing.orgbugsshow_bug.cgiid=1429
  httpcode.google.compprocessingissuesdetailid=221

+ Copied the XML and font changes from the desktop version of core.

+ Removing 'import processing.opengl.' in the preprocessor, since it's
  not needed, and will cause a conflict.

+ Added functions to lock orientation if necessary. Use
  orientation(LANDSCAPE) and orientation(PORTRAIT) if you need control.

+ createGraphics() works with A3DP3DOPENGL for phones that support it.
  httpdev.processing.orgbugsshow_bug.cgiid=1488
  httpcode.google.compprocessingissuesdetailid=240

+ Fix errors showing up that .java files were duplicates.
  httpcode.google.compprocessingissuesdetailid=232

[ core ] 

+ Changed skewXY to shearXY.

+ ENABLE_NATIVE_FONTS was being ignored, native fonts were always used 
  in some cases. However, this broke some other things. But that's why
  this is a pre-release, not a final.

[ xml fixes and changes ] 

+ Changed the XML constructor to take a String for a node name, instead of
  parsing a document from a String. Instead, use XMLElement.parse(String) 
  if you want to read a file.

+ Added getBoolean() methods.
  httpcode.google.compprocessingissuesdetailid=304

+ Removed namespace versions of the getXxxx() methods. These were never
  documented, and cause more trouble than they're worth.

+ Changing getIntAttribute() et al to getInt(). The old versions are still
  there, but have been deprecated.

+ Added listChildren() method.

+ XML attributes named xmlns always returned NULL, now fixed.
  httpdev.processing.orgbugsshow_bug.cgiid=1196
  httpcode.google.compprocessingissuesdetailid=166

+ When re-saving an .ods file, wasn't including all the namespace at the top.

+ Several fixes to how namespaces are handled (or not handled).

+ Methods to saved XML elements back out again.
  httpdev.processing.orgbugsshow_bug.cgiid=963
  httpcode.google.compprocessingissuesdetailid=126

+ Update XMLElement constructor problem.
  httpcode.google.compprocessingissuesdetailid=342

[ environment ] 

+ Added more specific language to LnuxSunJava error messages on Linux. 
  Also added support for Oracle in the name.

+ Fix the NewOpen buttons on the toolbar
  httpcode.google.compprocessingissuesdetailid=323

+ Changed how Save As works, now copies everything in the sketch folder.
  But still ignores applet, application., screen- filesfolders

+ Edit  Copy as HTML didn't properly encode  and 
  Also added support for other Unicode entities for non-ASCII characters.
  httpcode.google.compprocessingissuesdetailid=351

+ Ctrl-Z will undo, but not scroll to where the undo happens. Fixed earlier.
  httpdev.processing.orgbugsshow_bug.cgiid=35
  httpcode.google.compprocessingissuesdetailid=15


. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 


PROCESSING 1.2.1 (REV 0189) - 14 July 2010

Fix for a problem with some static-mode programs. See below for
the other changes since 1.1.


. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 


PROCESSING 1.2 (REV 0188) - 13 July 2010

Changes too numerous to mention, see the notes below for all the 
revisions that followed the 1.1 release in March.


. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 


PROCESSING REV 0187 - 12 July 2010

More bug fixes, and one new treat for OS X users. Hopefully we're about 
set to call this one 1.2. Please test and report any issues you find
httpcode.google.compprocessingissueslist

[ additions ] 

+ On Mac OS X, you're no longer required to have a sketch window open at 
  all times. This will make the application feel more Mac-like--a little
  more elegant and trendy and smug with superiority.

+ Added a warning to the Linux version to tell users that they should be 
  using the official version of Java from Sun if they're not.
  httpwiki.processing.orgwSupported_Platforms#Linux
  There isn't a perfect way to detect whether Sun Java is in use, 
  so please let us know how it works or if you have a better idea. 

[ fixes ] 

+ Unexpected token error when creating classes with recent pre-releases.
  httpcode.google.compprocessingissuesdetailid=292

+ Prevent horizontal scroll offset from disappearing. 
  Thanks to Christian Thiemann for the fix. 
  httpcode.google.compprocessingissuesdetailid=280
  httpcode.google.compprocessingissuesdetailid=10

+ Fix NullPointerException when making a new sketch on non-English systems.
  httpcode.google.compprocessingissuesdetailid=283

+ Fixed a problem when using command-line arguments with exported sketches
  on Windows. Thanks to davbol for the fix.
  httpcode.google.compprocessingissuesdetailid=303

+ Added requestFocusInWindow() call to replace Apple's broken requestFocus(),
  which should return the previous behavior of sketches getting focus 
  immediately when loaded in a web browser.
  httpcode.google.compprocessingissuesdetailid=279

+ Add getDocumentBase() version of createInput() for Internet Explorer. 
  Without this, sketches will crash when trying to find files on a web server
  that are not in the exported .jar file. This fix is only for IE. Yay IE!


. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 


PROCESSING REV 0186 - 26 June 2010

Minor updates following up on 0185.

[ mixed bag ] 

+ Android SDK requirement is now API 7 (Android 2.1), because Google has
  deprecated API 6 (2.0.1). 

+ More Linux PDF fixes from Matthias Breuer. Thanks!

+ PDF library matrix not reset between frames. (Fixed in 0185.)
  httpdev.processing.orgbugsshow_bug.cgiid=1227

+ Updated the URLs opened by the software to reflect the new site layout.
  httpcode.google.compprocessingissuesdetailid=278

+ Updated the included examples with recent changes.


. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 


PROCESSING REV 0185 - 20 June 2010

Primarily a bug fix release. The biggest change are a couple tweaks for 
problems caused by Apple's Update 2 for Java on OS X, so this should make
Processing usable on Macs again. 

[ bug fixes ] 

+ Fix for Apple bug that caused an assertion failure when requestFocus() 
  was called in some situations. This was causing the PDE to become unusable
  for opening sketches, and focus highlighting was no longer happening.
  httpcode.google.compprocessingissuesdetailid=258
  httpdev.processing.orgbugsshow_bug.cgiid=1564
  httpdev.processing.orgbugsshow_bug.cgiid=1569

+ Fixed two bugs with fonts created with specific charsets.

+ Fix from jdf for PImage(java.awt.Image img) and ARGB images
  public PImage(java.awt.Image) was setting the format to RGB (even if ARGB)

+ Large number of beginShape(POINTS) not rendering correctly on first frame
  httpdev.processing.orgbugsshow_bug.cgiid=1572

+ Fix for PDF library and createFont() on Linux, thanks to Matthias Breuer.
  httpdev.processing.orgbugsshow_bug.cgiid=1566

+ Fix from takachin for a problem with full-width space with Japanese IME.
  httpdev.processing.orgbugsshow_bug.cgiid=1531

+ Reset matrix for the PDF library in-between frames
  also added beginendDraw between frames
  httpdev.processing.orgbugsshow_bug.cgiid=1227

[ additions ] 

+ Add the changes for Copy as HTML to replace the Copy for Discourse
  function, now that we've shut down the old YaBB discourse board.
  httpcode.google.compprocessingissuesdetailid=271

+ Option to disable re-opening sketches when you start Processing. 
  The default will stay the same, but if you don't like the feature, 
  alter your preferences.txt file to change
  last.sketch.restore=true
  to the following
  last.sketch.restore=false
  The issue was originally filed here
  httpdev.processing.orgbugsshow_bug.cgiid=1501
  httpcode.google.compprocessingissuesdetailid=245
  However the main problem with this is that due to other errors, the wrong
  sketches are being opened, sketches are sometimes forgotten, or windows
  are opened concurrently on top of one another, creating a bad situation
  httpcode.google.compprocessingissuesdetailid=177
  httpcode.google.compprocessingissuesdetailid=179
  Those bugs are not yet fixed, but will be addressed in future releases.

+ Option to change the default naming of sketches via preferences.txt. 
  First, you can change the prefix, which defaults to
  editor.untitled.prefix=sketch_
  And the suffix is handled using dates. The current default (since 1.0) is
  editor.untitled.suffix=MMMdd
  Or if you want to switch back to the old (six digit) style, you could use
  editor.untitled.suffix=yyMMdd
  httpdev.processing.orgbugsshow_bug.cgiid=1091

+ Updated bundled JREtools to 6u20 for Windows and Linux

+ Several SVG fixes and additions, including some tweaks from PhiLho. These
  changes will be documented in a future release once the API changes are
  complete.

+ Added option to launch a sketch directly w linux. Thanks to Larry Kyrala.
  httpdev.processing.orgbugsshow_bug.cgiid=1549

+ Pass actual exceptions from InvocationTargetException in registered 
  methods, which improves how exceptions are reported with libraries.

+ Added loading.gif to the js version of the applet loader. Not sure 
  if this is actually working or not, but it's there.

[ android ] 

+ Added permissions for INTERNET and WRITE_EXTERNAL_STORAGE to the default
  AndroidManifest.xml file. This will be addressed in greater detail here
  httpcode.google.compprocessingissuesdetailid=275
  And with the implementation of code signing here
  httpcode.google.compprocessingissuesdetailid=222

+ Lots of work happening underneath with regards to Android, more updates
  soon as things start evening out a bit.

+ Defaulting to a WVGA screen for the default Processing AVD. 


. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 


PROCESSING REV 0184 - 14 April 2010

Pre-release version with more bug fixes. Proper release notes will 
accompany an actual release. If you're curious in the meantime, look
at todo.txt and done.txt from the source tree.

+ The 'Export' option now works in Android, so that you can get at 
  the debug APK that's created.

+ Problems finding javac.exe on Windows should now be fixed. 


. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 


PROCESSING REV 0183 - 31 March 2010

Bug fixes for Android, should remove the API v5 requirement and make
things work fine with API v6, the new minimum.


. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 


PROCESSING REV 0182 - 29 March 2010 

Bug fix pre-release. This updates three areas

+ All known bugs with auto-format have been fixed (!)

+ A handful of bug fixes for the Java 5 syntax changes.

+ Fixes for using text with PDF Export.

A more thorough revisions update will be written for the next full
release version (1.2 1.5 2.0) that includes all these changes.


. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 


PROCESSING REV 0181 - 19 March 2010

Another update for the preprocessor changes (see below).


. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 


PROCESSING REV 0180 - 15 March 2010

This is a interim release with a reworked preprocessor that adds Java 5 
syntax. We're releasing this interim version because we need help testing 
it since it has an impact on any sketch created in the Processing environment.
Basically, we mighta goofed something up big, and we wanna catch it before
we throw it to the wolves. 

The release also fixes a number of preprocessor bugs. Those changes will
be documented a bit later. 


. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 


PROCESSING 1.1 (REV 0179) - 11 March 2010

This is the first general-purpose release since 1.0.9. The text below merges 
all of the changes from all the interim revisions, with the exception of the
changes for the upcoming Android tools, which are not enabled in this release.

Lots of bug fixes over 1.0.9, and several changes that improve how fonts are
handled. Because of the large number of changes (and that some functionality
actually changes, if that's actually a word), this is release 1.1 instead
of release 1.0.10. Which is nice, because release 1.0.10 sounds baffling.

[ font changes ]

+ It's no longer necessary to use textFont() before text() and other 
  text-handling functions. The default SansSerif font is used, which 
  varies by platform. 

+ Also in this release, the createFont() method will only load characters 
  as they are used, which should greatly improve the font situation on 
  non-Roman systems like Japanese. This will use far less memory, and should
  be all around much more efficient. Formerly, createFont() took several 
  seconds to run, depending on the speed of your system. 
  httpdev.processing.orgbugsshow_bug.cgiid=1111

+ Fixed a problem with the Create Font tool ignoring the 'smooth' setting
  on some systems.

+ Fixed a separate problem with the createFont() method also ignoring the
  'smooth' setting.

+ With the Create Font tool, you can also specify what Unicode character 
  blocks you'd like to use, making a much smaller font.

+ Fonts are no longer power of 2 by default. This should also make them more
  memory efficient. With future OpenGL updates, this will work even better.

[ other changes ] 

+ Lots of edits to the HTML that's used for exported applets. If JavaScript
  is enabled, Sun's new loading functions are used, which offer the best
  compatibility across browsers. If not, the old loading method is used.
  httpdev.processing.orgbugsshow_bug.cgiid=1057

+ Changed the OpenGL HTML template to load differently, which should fix a
  NullPointerException in JOGLAppletLanucher with Java 6 Update 18 on Windows,
  and should also be more efficient altogether, because the JOGL libraries can 
  be downloaded just once from Sun, rather than for each sketch that uses them.
  httpdev.processing.orgbugsshow_bug.cgiid=1452

+ Code from Takachin that handles full input method support in the editor for
  Japanese and other scripts that are more complicated than Roman text.
  httpdev.processing.orgbugsshow_bug.cgiid=854
  Thanks Takachin! 

+ Now using iText 2.1.7.

+ Changed how imports are handled in sketches. This may break some sketches
  that use java.xxx packages that aren't covered in the Processing reference.

+ With great help from Hansi, moved the build scripts over to Ant.
  httpdev.processing.orgbugsshow_bug.cgiid=151
  Also moved the special JRE for Linux and Windows out of SVN. It'll only be
  downloaded when 'ant dist' is run. 

+ Javadoc is slowly improving. More on that later.

+ Deprecated 'screen', and added screenWidth and screenHeight. Discussion here
  httpdev.processing.orgbugsshow_bug.cgiid=1499

[ bug fixes ] 

+ Fix for filter(DILATEERODE) from Dave Bollinger
  httpdev.processing.orgbugsshow_bug.cgiid=1477

+ Added implementation for getset methods inside PImage (wo pixels[])

+ Updated JNA to version 3.2.4 to support Windows 7 64-bit
  httpdev.processing.orgbugsshow_bug.cgiid=1424
  Thanks to Maik for tracking down the problem and solution!

+ Fix from taifun_browser to handle texture memory leak with OpenGL and P3D.
  httpdev.processing.orgbugsshow_bug.cgiid=1423

+ Hitting ESC inside Color Selector would quit Processing
  httpdev.processing.orgbugsshow_bug.cgiid=1006

+ To fix video, and some other libraries on Snow Leopard, exported applications
  are now explicitly set to run 32-bit on OS X.

+ Fix LITERAL_class so that blah.class syntax can be used in PDE code. 
  Found and fixed by Christian Thiemann. Thank you!
  httpdev.processing.orgbugsshow_bug.cgiid=1466

+ Fix from Chris Lonnen to lock the minimum size for the main processing editor
  frame. (When too small, the console would disappear, etc.) Thanks Chris!
  httpdev.processing.orgbugsshow_bug.cgiid=25

+ If you overwrite PApplet.main(), you're responsible for what happens.
  httpdev.processing.orgbugsshow_bug.cgiid=1446

+ Re-enabled hack for temporary clipping. Clipping still needs to be
  implemented properly, however. Please help!
  httpdev.processing.orgbugsshow_bug.cgiid=1393

+ SVG paths that use 'e' (exponent) not handled properly
  httpdev.processing.orgbugsshow_bug.cgiid=1408

+ Change build scripts to use UTF-8 for encoding with javac
  httpdev.processing.orgbugsshow_bug.cgiid=1394

+ Fix ant.jarant-launcher.jar error in the windowslinux build scripts
  httpdev.processing.orgbugsshow_bug.cgiid=1403

+ Fixed a problem where imports inside comments were being included.

[ keys ] 

+ Added ctrl-ins, shift-ins, shift-delete for cutcopypaste on Windows and 
  Linux, but disabled by default on Mac OS X. You can change the setting by
  altering editor.keys.alternative_cut_copy_paste in preferences.txt.
  httpdev.processing.orgbugsshow_bug.cgiid=162

+ Added a preference to change shift-backspace to just mean backspace, 
  rather than delete. Set this entry in preferences.txt
  editor.keys.shift_backspace_is_delete = true
  httpdev.processing.orgbugsshow_bug.cgiid=1463

+ Added an option for home and end keys traveling to the startend of the 
  current line rather than the beginningending of a sketch. The latter is
  the HIG default for Mac OS X, but drives some people nuts. Change with
  editor.keys.home_and_end_travel_far = false


. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 


PROCESSING REV 0178 - 4 March 2010

Tons of Android work in this release. A2D has been tested and runs correctly
for all of the examples in Basics and Topics. A3D is not quite finished
yet, and the size() command is still causing crashes. 

This release also contains lots of work on Android Mode for the PDE, which
is being worked on by Jonathan Feinberg.

[ core ] 

+ Fix for filter(DILATEERODE) from Dave Bollinger
  httpdev.processing.orgbugsshow_bug.cgiid=1477

+ Deprecated 'screen', adding screenW and screenH. See discussion here
  httpdev.processing.orgbugsshow_bug.cgiid=1499

+ Added implementation for getset methods inside PImage (wo pixels[])

[ fixes to android core ] 

+ Fix noLoop() and static-mode sketches.
  httpdev.processing.orgbugsshow_bug.cgiid=1467

+ Fix the freakout that happens with onPause()
  httpdev.processing.orgbugsshow_bug.cgiid=1483

+ App not pausing or closing when switching to another activity
  httpdev.processing.orgbugsshow_bug.cgiid=1404

+ Bezier curves were broken in A2D (extra point is drawn connecting the 
  shape to the corner).

+ Fixed other minor bugs in shape drawing.

+ mask() now implemented in A2D

+ updatePixels() now work properly for A2D

+ set() should now be working

+ Using set() on an image that doesn't have a bitmap, or has pixels loaded.

+ requestImage() now working

+ Drastically improve the performance of the time functions (minute() et al)

+ Point wasn't detecting different stroke weights. 

+ Point wasn't working with strokeWeight  1.

+ Fix rotate() bug (was using degrees instead of radians)
  httpdev.processing.orgbugsshow_bug.cgiid=1497

+ arc() now working properly

+ createGraphics() works, at least with A2D (or aliases P2D and JAVA2D)

+ Fixed The application ... has stopped unexpectedly. when quitting slow app
  httpdev.processing.orgbugsshow_bug.cgiid=1485

+ test createFont()

+ createGraphics() broken
  httpdev.processing.orgbugsshow_bug.cgiid=1437

+ Remove legacy PGraphics3D class from processing.core.android
  httpdev.processing.orgbugsshow_bug.cgiid=1402

[ android mode ] 

+ Exception handling is much improved.

+ Get stdout and stderr from the emulatordevice (println() now works).
  httpdev.processing.orgbugsshow_bug.cgiid=1381

+ Removed the ANDROID_SDK env variable requirement.
  httpdev.processing.orgbugsshow_bug.cgiid=1471
  httpdev.processing.orgbugsshow_bug.cgiid=1469


PROCESSING REV 0177 - 21 February 2010

Fix for the Android tools complaining Open quote is expected for 
attribute {1} associated with an element type androidminSdkVersion.

Just posting a new revision because it's easier than writing instructions
for swapping the pde.jar file.


PROCESSING REV 0176 - 20 February 2010

Android changes are at the top, changes for the rest of Processing are listed
below that (a tipoff being that there's no PDF library on Android...)

[ android ]

+ Minimum platform support is changing to 2.0 instead of 1.6. That means 
  Eclair or later, and goodbye to my T-Mobile G1, undoubtedly the ugliest
  cell phone I have ever owned. Hello to Droid and Nexus One. 
  Performance is very poor on pre-2.0 devices anyway. 

+ Known issue Sketches that use noLoop() are currently broken. 
  httpdev.processing.orgbugsshow_bug.cgiid=1467

+ Added support for libraries and the code folder.

+ Classes have moved to the processing.core package instead of 
  processing.android.core.

+ Slashes in the SDK path are now escaped properly on Windows.

+ Fix problems preventing Android Mode from running on Windows
  httpdev.processing.orgbugsshow_bug.cgiid=1432

+ The tint() method now works.
  httpdev.processing.orgbugsshow_bug.cgiid=1435

+ loadFont() and text() now work properly. createFont() has not been tested.

[ changes ] 

+ Lots of edits to the HTML that's used for exported applets. If JavaScript
  is enabled, Sun's new loading functions are used, which offer the best
  compatibility across browsers. If not, the old loading method is used.
  httpdev.processing.orgbugsshow_bug.cgiid=1057

+ Changed the OpenGL HTML template to load differently, which should fix a
  NullPointerException in JOGLAppletLanucher with Java 6 Update 18 on Windows,
  and should also be more efficient altogether, because the JOGL libraries can 
  be downloaded just once from Sun, rather than for each sketch that uses them.
  httpdev.processing.orgbugsshow_bug.cgiid=1452

+ Code from Takachin that handles full input method support in the editor for
  Japanese and other scripts that are more complicated than Roman text.
  httpdev.processing.orgbugsshow_bug.cgiid=854
  Thanks Takachin! 

+ Downgraded the PDF library to use iText 1.5.4, because later versions seem
  to load slower, and don't seem to offer additional benefits. If the PDF 
  library gets worse, please post a bug and we'll go back to the 2.x release
  we were using, or upgrade to the more recent 5.x series.

+ Changed how imports are handled in sketches. This may break some sketches
  that use java.xxx packages that aren't covered in the Processing reference.

+ With great help from Hansi, moved the build scripts over to Ant.
  httpdev.processing.orgbugsshow_bug.cgiid=151
  Also moved the special JRE for Linux and Windows out of SVN. It'll only be
  downloaded when 'ant dist' is run. This makes the build and maintenance 
  more of a mess for me, but will save me from people whining about the 
  large files.

+ Javadoc is slowly improving. More on that later.

[ bug fixes ] 

+ Updated JNA to version 3.2.4 to support Windows 7 64-bit
  httpdev.processing.orgbugsshow_bug.cgiid=1424
  Thanks to Maik for tracking down the problem and solution!

+ Fix from taifun_browser to handle texture memory leak with OpenGL and P3D.
  httpdev.processing.orgbugsshow_bug.cgiid=1423

+ Hitting ESC inside Color Selector would quit Processing
  httpdev.processing.orgbugsshow_bug.cgiid=1006

+ To fix video, and some other libraries on Snow Leopard, exported applications
  are now explicitly set to run 32-bit on OS X.

+ Fix LITERAL_class so that blah.class syntax can be used in PDE code. 
  Found and fixed by Christian Thiemann. Thank you!
  httpdev.processing.orgbugsshow_bug.cgiid=1466

+ Fix from Chris Lonnen to lock the minimum size for the main processing editor
  frame. (When too small, the console would disappear, etc.) Thanks Chris!
  httpdev.processing.orgbugsshow_bug.cgiid=25

+ If you overwrite PApplet.main(), you're responsible for what happens.
  httpdev.processing.orgbugsshow_bug.cgiid=1446

[ keys ] 

+ Added ctrl-ins, shift-ins, shift-delete for cutcopypaste on Windows and 
  Linux, but disabled by default on Mac OS X. You can change the setting by
  altering editor.keys.alternative_cut_copy_paste in preferences.txt.
  httpdev.processing.orgbugsshow_bug.cgiid=162

+ Changed shift-backspace to just mean backspace, rather than delete. You
  can change back to the old behavior by setting this entry in preferences.txt
  editor.keys.shift_backspace_is_delete = true
  httpdev.processing.orgbugsshow_bug.cgiid=1463

+ Added an option for home and end keys traveling to the startend of the 
  current line rather than the beginningending of a sketch. The latter is
  the HIG default for Mac OS X, but drives some people nuts. Change with
  editor.keys.home_and_end_travel_far = false

[ fonts ]

+ Starting in this release, the createFont() method will only load characters 
  as they are used, which should greatly improve the font situation on 
  non-Roman systems like Japanese. This will use far less memory, and should
  be all around much more efficient. Formerly, createFont() took several 
  seconds to run, depending on the speed of your system. 
  httpdev.processing.orgbugsshow_bug.cgiid=1111

+ Fixed a problem with the Create Font tool ignoring the 'smooth' setting
  on some systems.

+ Fixed a separate problem with the createFont() method also ignoring the
  'smooth' setting.

+ With the Create Font tool, you can also specify what Unicode character 
  blocks you'd like to use, making a much smaller font.

+ Fonts are no longer power of 2 by default. This should also make them more
  memory efficient. With future OpenGL updates, this will work even better.


. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 


PROCESSING REV 0172 through 0175

These releases are mostly about Android (listed at the top), but also contain
any interim fixes that happened in the meantime.

[ android ] 

+ Fix problem with Android HTML dialog box
  several BR items showing up when first loading
  httpdev.processing.orgbugsshow_bug.cgiid=1395

+ Fix problem with windows claiming does not appear to contain an Android SDK

+ Implement loadImage() and other loadXxxx() functions
  httpdev.processing.orgbugsshow_bug.cgiid=1414

+ Correctly handle space bar, tab, other special keys
  httpdev.processing.orgbugsshow_bug.cgiid=1405

+ Fix problem with motion events not coming through
  httpdev.processing.orgbugsshow_bug.cgiid=1382

+ taskdef class com.android.ant.SetupTask cannot be found on Linux
  httpdev.processing.orgbugsshow_bug.cgiid=1407

+ Updates for r4 version of the SDK.

[ changes ] 

+ In the editor toolbar, shift-new and shift-open on the toolbar open a 
  new window. Also, when shift is down, change text of the toolbar item 
  to represent what it does. 

+ Replaced com.apple.eawt.Application invocation to deal with deprecation.
  This may cause problems with older releases (or on 10.4 or 10.5), not sure.

+ Use xdg-open as launcher on linux
  httpdev.processing.orgbugsshow_bug.cgiid=1358

+ Default wildcard imports are causing naming conflicts, changed how 
  they're set up in the preferences file.
  httpdev.processing.orgbugsshow_bug.cgiid=1103

+ Changed createInputRaw() to only bother checking URLs if  present

[ bug fixes ] 

+ Re-enabled hack for temporary clipping. Clipping still needs to be
  implemented properly, however. Please help!
  httpdev.processing.orgbugsshow_bug.cgiid=1393

+ SVG paths that use 'e' (exponent) not handled properly
  httpdev.processing.orgbugsshow_bug.cgiid=1408

+ Change build scripts to use UTF-8 for encoding with javac
  httpdev.processing.orgbugsshow_bug.cgiid=1394

+ Fix ant.jarant-launcher.jar error in the windowslinux build scripts
  httpdev.processing.orgbugsshow_bug.cgiid=1403

+ Fixed a problem where imports inside comments were being included.


. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 


PROCESSING 1.0.9 (REV 0171) - 20 October 2009

Happy birthday to Casey!

[ bug fixes ]

+ Removed NPOT texture support until further testing, because it was 
  resulting in blurring images in OPENGL sketches.
  httpdev.processing.orgbugsshow_bug.cgiid=1352

+ Complete the excision of the Apple menu bug code.
  httpdev.processing.orgbugsshow_bug.cgiid=786


. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 


PROCESSING 1.0.8 (REV 0170) - 18 October 2009

A bonfire of bug fixes. 

[ environment ]

+ Fix bug causing preferences to not save correctly.
  httpdev.processing.orgbugsshow_bug.cgiid=1320
  httpdev.processing.orgbugsshow_bug.cgiid=1322
  httpdev.processing.orgbugsshow_bug.cgiid=1325
  httpdev.processing.orgbugsshow_bug.cgiid=1329
  httpdev.processing.orgbugsshow_bug.cgiid=1336
  httpdev.processing.orgbugsshow_bug.cgiid=1337
  httpdev.processing.orgbugsshow_bug.cgiid=1344

+ Remove menu dimming code, in-frame menu bar, and warning message on OS X.
  A year later, Apple fixed the spinning wheel w the menu bar problem.
  httpdev.processing.orgbugsshow_bug.cgiid=786

+ Fix Unrecognized option -d32 on OS X 10.4
  httpdev.processing.orgbugsshow_bug.cgiid=1324

+ Update the outdated Get the latest Java Plug-in here in exported applets.
  httpdev.processing.orgbugsshow_bug.cgiid=1331

+ Use temporary files when saving files inside the PDE. Prevents problems
  when the save goes badly (e.g. disk is full).
  httpdev.processing.orgbugsshow_bug.cgiid=967

+ Fix problem with Save changes before closing was being ignored.
  httpdev.processing.orgbugsshow_bug.cgiid=1193

+ Fix problems with addingdeleting tabs.
  httpdev.processing.orgbugsshow_bug.cgiid=1332
  httpdev.processing.orgbugsshow_bug.cgiid=1092

+ Saving the project with the same name (but different case) 
  as an existing tab was deleting code on Windows and OS X.
  httpdev.processing.orgbugsshow_bug.cgiid=1102

[ core ] 

+ filter(RGB) supposed to be filter(OPAQUE) 
  httpdev.processing.orgbugsshow_bug.cgiid=1346

+ Implement non-power-of-2 textures for OpenGL (on cards where available). 
  This is a partial fix for texture edge problems
  httpdev.processing.orgbugsshow_bug.cgiid=602

+ Fix get() when used with save() in OpenGL mode

+ Immediately update projection with OpenGL. In the past, projection 
  updates required a new frame. This also prevents cameraproject from 
  being reset when the drawing size is changed.

+ Removed an error that caused the cameraNear value to be set to -8. 
  This may cause other problems with drawingclipping however.

+ Removed methods from PApplet that use doubles. These were only temporarily
  available in SVN, but that's that.

+ Use temporary file with saveStrings(File) and saveBytes(File).

[ updates ]

+ Updated to Minim 2.0.2. (Thanks Damien!)
  httpcode.compartmental.nettoolsminim

+ Updated Java on Linux and Windows to 6u16.

+ Updated Quaqua to 6.2 on Mac OS X.


. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 


PROCESSING 1.0.7 (REV 0169) - 4 September 2009

Bug fixes and updates, also some tweaks for Mac OS X Snow Leopard. 

[ changes ] 

+ Tweaks for Mac OS X Snow Leopard, to force it to run in 32-bit mode.
  This should bring back the video library (if temporarily), and hopefully
  fix serial as well, though I didn't have a serial device handy to test. 

+ Fix problem where line highlighting was off in 'static' mode.
  httpdev.processing.orgbugsshow_bug.cgiid=1263

+ Auto-format was killing Unicode characters (how did this last so long)
  httpdev.processing.orgbugsshow_bug.cgiid=1312

+ PVector.angleDistance() returning NaN due to precision errors
  httpdev.processing.orgbugsshow_bug.cgiid=1316

+ Removed a major trycatch block from PApplet.main(), hopefully 
  this will allow some exception stuff to come through properly.


. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 


PROCESSING 1.0.6 (REV 0168) - 12 August 2009

Bug fixes and minor changes. Most important are replacement JOGL libraries
so that OpenGL applets won't present an expired certificate error.

[ bug fixes ] 

+ Replaced the faulty JOGL library that had expired certificates (Sun bug).
  httpdev.processing.orgbugsshow_bug.cgiid=1271
  httpsjogl.dev.java.netservletsProjectDocumentListfolderID=9260&expandFolder=9260&folderID=0

+ Updated the Linux launcher script that enables Processing to be run
  from other directories, symlinks, or from launch items.
  httpdev.processing.orgbugsshow_bug.cgiid=825
  Thanks to Ferdinand Kasper for the fix!

+ strokeWeight() was making lines 2x too thick with P2D
  httpdev.processing.orgbugsshow_bug.cgiid=1283

+ PImage.getImage() setting the wrong image type
  httpdev.processing.orgbugsshow_bug.cgiid=1282

+ image() not working with P2D, P3D, and OPENGL when noFill() used
  httpdev.processing.orgbugsshow_bug.cgiid=1299
  httpdev.processing.orgbugsshow_bug.cgiid=1222

+ Auto format problem with program deeper then 10 levels
  httpdev.processing.orgbugsshow_bug.cgiid=1297

+ Fixed a crash on startup problem (console being null)

+ Recursive subfolder copy of library folders when exporting application
  httpdev.processing.orgbugsshow_bug.cgiid=1295

[ changes ]

+ PDF member functions set protected instead of private
  httpdev.processing.orgbugsshow_bug.cgiid=1276

+ On OS X, update Info.plist to be 3264 explicit and also updated 
  JavaApplicationStub for update 4.

+ Clicking the preferences location in the Preferences window will 
  now open the parent folder for the preferences file. 
  httpdev.processing.orgbugsshow_bug.cgiid=1279

+ Update to Java 6 update 15 for the Windows and Linux releases.

[ fixed earlier ] 

+ Mangled menu text with Java 6u10.
  httpdev.processing.orgbugsshow_bug.cgiid=1065


. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 


PROCESSING 1.0.5 (REV 0167) - 7 June 2009

Bug fix release, mostly dealing with regressions from 1.0.4.

[ bug fixes ] 

+ Make the tab key work again inside the editor
  httpdev.processing.orgbugsshow_bug.cgiid=1267

+ Deal with duplicate entries for sketchbook in the file menu
  httpdev.processing.orgbugsshow_bug.cgiid=1260

[ changes ]

+ Support for smooth text in the PDE editor. Set editor.antialias=true
  inside preferences.txt to enable smooth text.
  httpdev.processing.orgbugsshow_bug.cgiid=1266

+ Updated reference files.


. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 


PROCESSING 1.0.4 (REV 0166) - 31 May 2009

Bug fix release. 

[ changes ] 

+ Changed the workaround for Apple's Java bug related to the menus in OS X.
  Rather than placing the menubar inside the sketch window, File  Sketchbook
  and File  Examples are simply dimmed out. Instead, use the Open button
  on the toolbar, which provides access to the same items. The preference
  to place the menu bar inside the window is still available, in case you 
  prefer the previous workaround.
  httpdev.processing.orgbugsshow_bug.cgiid=786

+ Also updated the included runtime on Windows and Linux to Java 6u14.

[ bug fixes ]

+ Fixed IDE crash when changing color scheme on windows 
  httpdev.processing.orgbugsshow_bug.cgiid=1237

+ Typo in the Linux shell script was preventing it from running
  httpdev.processing.orgbugsshow_bug.cgiid=1250

+ OS X finder info on application updated to say 1.0.4
  httpdev.processing.orgbugsshow_bug.cgiid=1226

+ Removed warning message Non-String for 8 value in 'Properties' 
  sub-dictionary in 'Java' sub-dictionary of Info.plist on OS X

+ Added warning to build script for users on OS X 10.4
  httpdev.processing.orgbugsshow_bug.cgiid=1179

+ Disable point() going to set() from PGraphicsJava2D. The set() command 
  doesn't honor alpha consistently, and it also causes problems with PDF

+ PImage cacheMap problem when using PImage.get() 
  httpdev.processing.orgbugsshow_bug.cgiid=1245

+ Fix problems with  512 points and P3DOPENGL
  httpdev.processing.orgbugsshow_bug.cgiid=1255
  Thanks to user DopeShow for the patch

+ imageMode(CENTER) doesn't work properly with P2D
  httpdev.processing.orgbugsshow_bug.cgiid=1232

+ Reset matrices when using beginRecord() with PDF
  httpdev.processing.orgbugsshow_bug.cgiid=1227

+ Resizing window no longer distorts OpenGL graphics
  httpdev.processing.orgbugsshow_bug.cgiid=1176
  Many thanks to Pablo Funes for the patch

+ Fix significant point() and set() slowdown on OS X
  httpdev.processing.orgbugsshow_bug.cgiid=1094

[ known issues ] 

+ Currently no 64-bit support for any platforms. On some platforms, you'll 
  simply need to replace the Java folder with the distribution with something
  more suitable for your operating system. 

+ Command line support is currently broken
  httpdev.processing.orgbugsshow_bug.cgiid=1048

+ Text of menusinterface elements sometimes mangled (e.g. toolbar repeats
  several times, other oddness). See bug report for a workaround
  httpdev.processing.orgbugsshow_bug.cgiid=1065

+ Video library threading problems with other libraries
  httpdev.processing.orgbugsshow_bug.cgiid=882

+ See dev.processing.orgbugs for much, much more!


. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 


PROCESSING 1.0.3 (REV 0165) - 24 February 2009

Bug fix release to repair a couple of regressions caused by changes in 1.0.2, 
as well as a couple other new problems encountered since.

[ bug fixes ]

+ endRecord or endRaw produces a RuntimeException with the PDF library
  httpdev.processing.orgbugsshow_bug.cgiid=1169

+ Problem with beginRawendRaw and OpenGL
  httpdev.processing.orgbugsshow_bug.cgiid=1171

+ Set strokeWeight on points and lines with beginendRaw
  httpdev.processing.orgbugsshow_bug.cgiid=1172

+ Fix strokeWeight quirks with P3D when used with points and lines

+ ArrayIndexOutOfBoundsException with point()
  httpdev.processing.orgbugsshow_bug.cgiid=1168

[ changes ] 

+ Update to iText 2.1.4 for the PDF library


. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 


PROCESSING 1.0.2 (REV 0164) - 21 February 2009

This release fixes many bugs and adds two minor functions to the XML library.

[ bug fixes ] 

+ Empty code folder causing problems with Export
  httpdev.processing.orgbugsshow_bug.cgiid=1084

+ Sketches not loading when .pde file is opened from the Windows Explorer 
  on Asian Windows systems. 
  httpdev.processing.orgbugsshow_bug.cgiid=1089

+ Disable copying of metadata and resource forks in OS X build
  httpdev.processing.orgbugsshow_bug.cgiid=1098

+ Suppress goofy Apple error message about JVMArchs 

+ StringIndexOutOfBoundsException caused by import statements with no dots
  httpdev.processing.orgbugsshow_bug.cgiid=1145

+ Pressing Esc in Are you sure you want to Quit dialog causes quit
  httpdev.processing.orgbugsshow_bug.cgiid=1134

+ Fix QUADS and QUAD_STRIP with P2D
  httpdev.processing.orgbugsshow_bug.cgiid=1162

+ ArrayIndexOutOfBoundsException when drawing curves in P3D and OPENGL
  httpdev.processing.orgbugsshow_bug.cgiid=1153

+ Problems with negatve arc() angles in OpenGL, P3D, other inconsistencies
  httpdev.processing.orgbugsshow_bug.cgiid=1095

+ requestImage() causing problems with JAVA2D

+ Fix minor strokeWeight bug with OpenGL

+ Minor bug fix to SVG files that weren't being resized properly

+ OpenGL is rendering darker in 0149+
  httpdev.processing.orgbugsshow_bug.cgiid=958
  Thanks to Dave Bollinger for tracking this down and providing a solution

+ OutOfMemoryError with ellipse() in P3D and OPENGL
  httpdev.processing.orgbugsshow_bug.cgiid=1086

+ ArrayIndexOutOfBoundsException with P3D and OPENGL
  httpdev.processing.orgbugsshow_bug.cgiid=1117

+ point(x,y) ignores noStroke() in some renderers
  httpdev.processing.orgbugsshow_bug.cgiid=1090

+ Fix Windows startup problem when scheme coloring was odd
  httpdev.processing.orgbugsshow_bug.cgiid=1109
  Changes to the system theme could cause Processing to not launch

+ Fix several point() problems with P3D
  httpdev.processing.orgbugsshow_bug.cgiid=1110

+ nextPage() not working properly with PDF as the renderer
  httpdev.processing.orgbugsshow_bug.cgiid=1131

+ Save style information when nextPage() is called in PDF renderer

+ beginRaw() broken (no DXF, etc working)
  httpdev.processing.orgbugsshow_bug.cgiid=1099
  httpdev.processing.orgbugsshow_bug.cgiid=1144

+ Fix algorithm for quadratic to cubic curve conversion 
  httpdev.processing.orgbugsshow_bug.cgiid=1122
  Thanks to user bits.in.shambles for providing a fix.

+ tint() not working in P2D
  httpdev.processing.orgbugsshow_bug.cgiid=1132

+ blend() y coordinates inverted when using OpenGL
  httpdev.processing.orgbugsshow_bug.cgiid=1137

+ Fix for getChild() and getChildren() with XML elements that have null names

[ additions ] 

+ Added listChildren() method to XMLElement

+ Added optional toString(boolean) parameter to enabledisable indents
  in XMLElement


. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 


PROCESSING 1.0.1 (REV 0163) - 29 November 2008

Processing 1.0 has arrived! You can read an overview of changes introduced
in the last few months here httpprocessing.orgreferencechanges.html

Also see the known issues section of the troubleshooting page
httpprocessing.orgreferencetroubleshooting#known

This release (1.0.1) fixes a handful of issues that only showed up once we 
had more testing, particularly with the wider audience we've received in the
past week following the announcement.

[ bug fixes ] 

+ ArrayIndexOutOfBoundsException with File  New
  httpdev.processing.orgbugsshow_bug.cgiid=1067

+ CallStaticVoidMethod() threw an exception on some Mac OS X machines
  httpdev.processing.orgbugsshow_bug.cgiid=1063
  httpdev.processing.orgbugsshow_bug.cgiid=1078

+ editor.indent preference setting does not work properly
  httpdev.processing.orgbugsshow_bug.cgiid=1073

+ Fixed some An error occurred while starting the application problems

+ Added a note about the Minim library to the changes page.

+ Disable parsing of regexps with the split() command
  httpdev.processing.orgbugsshow_bug.cgiid=1060

+ Fixed ArrayIndexOutOfBoundsException in ellipseImpl().
  httpdev.processing.orgbugsshow_bug.cgiid=1068

+ Fixed problem where small ellipses weren't showing up.

[ changes ] 

+ Implement multi-line tab via tab key (also outdent)
  httpdev.processing.orgbugsshow_bug.cgiid=1075

+ Code with 'import' and a space incorrectly parsed as an import statement
  httpdev.processing.orgbugsshow_bug.cgiid=1064


. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 


PROCESSING 1.0 (REV 0162) - 24 November 2008

Processing 1.0 has arrived! You can read an overview of changes introduced
in the last few months here httpprocessing.orgreferencechanges.html

[ known issues ] 

+ Sketches that size(w, h, OPENGL) and do not clear the background on each 
  frame can cause major flickering or problems when the screen clears anyway.
  There are several possible solutions

  1. You may need to disable the default 2x smoothing by using
     hint(DISABLE_OPENGL_2X_SMOOTH).
  
  2. Update the drivers for your graphics card.

  3. Get a decent graphics card -- the OpenGL renderer is for advanced
     use, we don't support using it with cheaper built-in graphics hardware 
     like the Intel GMA 950. 

  4. If you're running Windows Vista, try disabling the Aero theme. 

  This flickering issue is being tracked here
  httpdev.processing.orgbugsshow_bug.cgiid=1056

+ An error occurred while starting the application when launching
  Processing.exe on Windows. This is a high priority however we cannot
  reproduce it on any of our test machines, which has delayed a fix.
  httpdev.processing.orgbugsshow_bug.cgiid=986

+ With P2D, P3D, and OPENGL, series of connected lines (such as the stroke 
  around a polygon, triangle, or ellipse) produce unattractive results when 
  strokeWeight is set.
  httpdev.processing.orgbugsshow_bug.cgiid=955

+ Unlike most applications, the menu bar is inside the editor window when
  Processing is used with Mac OS X 10.5. This is a workaround for an Apple 
  bug in Java 1.5 and 1.6 on Mac OS X 10.5 that causes the menu bar to be 
  so excessively slow that the application appears to have crashed.
  httpdev.processing.orgbugsshow_bug.cgiid=786

  Please file a bug report with Apple at bugreporter.apple.com if you want
  this fixed. The problem has existed since the spring, and we first filed 
  a bug  with them in June, and we have received no indication that it when 
  it will be fixed, or if it will ever be fixed.

  Or if you want to take your chances with the slow menu bar, 
  you can change the default setting in the Preferences window.

+ Sketches that use the video library plus OpenGL have a problem on some
  OS X machines. The workaround is listed in Comment #16 of this bug
  httpdev.processing.orgbugsshow_bug.cgiid=882#c16

+ Command line support arrived in a recent release, but is not working yet.
  httpdev.processing.orgbugsshow_bug.cgiid=1048

+ OpenGL rendering is more dimdarker in release 0149 and later.
  httpdev.processing.orgbugsshow_bug.cgiid=958
  Any help tracking this down would be most appreciated.

+ The first few frames of OpenGL sketches on Windows run slowly.
  httpdev.processing.orgbugsshow_bug.cgiid=874

+ When used with P3D, strokeWeight does not interpolate the Z-coordinates 
  of the lines, which means that when rotated, these flat lines may 
  disappear. (Since, uh, lines are, you know, flat.) The OPENGL renderer 
  setting does not share this problem because it always draws lines 
  perpendicular to the screen (which we hope to do in a future release).
  httpdev.processing.orgbugsshow_bug.cgiid=956


. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 


in spite of their historical feel good campiness, i've removed the
notes from earlier releases because this file was getting out of hand. 