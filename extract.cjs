const fs = require('fs');
const text = fs.readFileSync('main.js', 'utf8');
const match = text.match(/Oi=\(\)=>(.{0,30000})/s);
if (match) {
  const code = match[1];
  const strings = code.match(/"[^"]{10,200}"/g);
  if (strings) {
    console.log(strings.slice(0, 80).join('\n'));
  }
}
