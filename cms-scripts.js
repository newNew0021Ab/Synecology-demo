
const { exec } = require('child_process');
const path = require('path');

// Script to start Strapi CMS
function startCMS() {
  console.log('Starting Strapi CMS...');
  const cmsPath = path.join(__dirname, 'cms');
  
  exec('npm run develop', { cwd: cmsPath }, (error, stdout, stderr) => {
    if (error) {
      console.error(`Error starting CMS: ${error}`);
      return;
    }
    console.log(stdout);
    if (stderr) {
      console.error(stderr);
    }
  });
}

// Script to build Strapi
function buildCMS() {
  console.log('Building Strapi CMS...');
  const cmsPath = path.join(__dirname, 'cms');
  
  exec('npm run build', { cwd: cmsPath }, (error, stdout, stderr) => {
    if (error) {
      console.error(`Error building CMS: ${error}`);
      return;
    }
    console.log(stdout);
    if (stderr) {
      console.error(stderr);
    }
  });
}

// Export functions
module.exports = {
  startCMS,
  buildCMS
};

// If run directly
if (require.main === module) {
  const command = process.argv[2];
  
  switch (command) {
    case 'start':
      startCMS();
      break;
    case 'build':
      buildCMS();
      break;
    default:
      console.log('Usage: node cms-scripts.js [start|build]');
  }
}
