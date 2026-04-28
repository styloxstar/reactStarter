const fs = require('fs');
const path = require('path');

const dir = 'c:/my_practice_projects/reactStarter/src/components/common/pages';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.jsx'));

const filesWithPlaceholders = [];
const filesMissingCopyButton = [];
const fullyUpdatedFiles = [];

files.forEach(f => {
  const content = fs.readFileSync(path.join(dir, f), 'utf8');
  if (!content.includes('<CopyButton')) {
    filesMissingCopyButton.push(f);
  } else if (content.includes('See JSX tab') || content.includes('component`}')) {
    filesWithPlaceholders.push(f);
  } else {
    fullyUpdatedFiles.push(f);
  }
});

console.log('Fully Updated Files:', fullyUpdatedFiles.length);
if (filesMissingCopyButton.length > 0) {
  console.log('Files missing CopyButton:', filesMissingCopyButton);
}
if (filesWithPlaceholders.length > 0) {
  console.log('Files still with placeholders:', filesWithPlaceholders);
}
