Glue42 Extension Template Examples - LinkedIn to GlassDoor
==========================================================

##### Selecting a LinkedIn profile syncs company with GlassDoor

### Prerequisites

[```Glue42 Desktop```](https://glue42.com), [```node``` & ```npm```](https://nodejs.org/en/).

### Steps to run the demo

1. Clone https://github.com/Tick42/glue42-extension-template
2. Paste ```glue42-extension-template/examples/linkedin-to-glassdoor/linkedin/linkedin.json``` inside of %LOCALAPPDATA%/Tick42/GlueDesktop/config/apps
3. Paste ```glue42-extension-template/examples/linkedin-to-glassdoor/glassdoor/glassdoor.json``` inside of %LOCALAPPDATA%/Tick42/GlueDesktop/config/apps
4. Add the path to the glue42-extension-template/examples/linkedin-to-glassdoor/linkedin folder inside the ```extensions``` string array inside of ```%LOCALAPPDATA%/Tick42/GlueDesktop/config/system.json```
5. Add the path to the glue42-extension-template/examples/linkedin-to-glassdoor/glassdoor folder inside the ```extensions``` string array inside of ```%LOCALAPPDATA%/Tick42/GlueDesktop/config/system.json```
6. Start ```Glue42 Desktop``` and launch the LinkedIn (you need to login the first time) and GlassDoor applications
7. Opening a profile inside of LinkedIn syncs the current company of the opened profile with the GlassDoor application
