
console.log('Current file:', __filename);
console.log('Current directory:', __dirname);


global.myAppName = 'NodeGlobalDemo';


setTimeout(() => {
  console.log('1 seconds passed');
  console.log('App name from global:', global.myAppName);

  console.log('Memory usage:', process.memoryUsage());
}, 1000);

console.log('Running on platform:', process.platform);
console.log('Environment:', process.env);
