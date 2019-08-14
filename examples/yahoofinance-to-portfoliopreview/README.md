Glue42 Extension Template Examples - Yahoo Finance to PortfolioPreview
===========================================================

##### An "Open in Glue42" button inserted inside of the Yahoo Finance instrument page that would launch PortfolioPreview with the selected instrument

### Prerequisites

[```Glue42 Desktop```](https://glue42.com), [```node``` & ```npm```](https://nodejs.org/en/).

### Steps to run the demo

1. Clone https://github.com/Tick42/glue42-extension-template
2. Paste ```glue42-extension-template/examples/yahoofinance-to-portfoliopreview/yahoofinance.json``` inside of %LOCALAPPDATA%/Tick42/GlueDesktop/config/apps
3. Add the path to the glue42-extension-template/examples/yahoofinance-to-portfoliopreview folder inside the ```extensions``` string array inside of ```%LOCALAPPDATA%/Tick42/GlueDesktop/config/system.json```
4. Start ```Glue42 Desktop``` and launch the YahooFinance application
5. Search for an instrument (e.g. AAPL)
6. Click on the inserted "Open in Glue42" to open the PortfolioPreview application with the selected instrument
