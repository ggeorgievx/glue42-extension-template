(async () => {
  const fsAssistant = require('fs-assistant');

  const extensionContents = await fsAssistant.readFile('./extension.js');

  console.log(`Successfully read extension.js' contents (length: ${extensionContents.length}) 📗`);

  const manifestContents = await fsAssistant.readFile('./manifest.json');
  const extensionName = JSON.parse(manifestContents).name;

  console.log(`Successfully read manifest.json's contents (extension name: ${extensionName}) 📘`);

  const patternExtension = /(\/\/ START)(.|\s)*?(\/\/ END)/;

  console.log(`Using the following Regex pattern: ${patternExtension} 🔍`);

  await fsAssistant.replaceStringInFile(`./content.js`, patternExtension, `$1\n${extensionContents}\n$3`);

  console.log('Successfully wrote the extension.js\' contents to content.js ✍️');

  const patternManifest = /(Extension:)(.|\s)*?(;)/;

  console.log(`Using the following Regex pattern: ${patternManifest} 🔍`);

  await fsAssistant.replaceStringInFile(`./content.js`, patternManifest, `$1 ${extensionName}$3`);

  console.log('Successfully wrote the extension name to content.js ✍️');

  console.log('Please restart Glue Desktop for the changes to take place 🖥');
})();
