const fs = require('fs');
const html = fs.readFileSync('out/index.html', 'utf8');
const links = html.match(/href="([^"]*)"/g);
console.log('Href links found:');
if (links) {
    links.forEach(l => {
        if (l.includes('.css') || l.includes('_next')) {
            console.log(l);
        }
    });
}
const srcs = html.match(/src="([^"]*)"/g);
console.log('Src links found:');
if (srcs) {
    srcs.forEach(s => {
        if (s.includes('.js') || s.includes('assets') || s.includes('_next')) {
            console.log(s);
        }
    });
}
