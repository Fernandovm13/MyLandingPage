const fs = require('fs');
const html = fs.readFileSync('/tmp/deployed_index.html', 'utf8');
const links = html.match(/href="([^"]*)"/g);
console.log('Hrefs:');
if (links) {
    links.forEach(l => {
        if (l.includes('.css') || l.includes('_next')) {
            console.log(l);
        }
    });
}
const srcs = html.match(/src="([^"]*)"/g);
console.log('Srcs:');
if (srcs) {
    srcs.forEach(s => {
        if (s.includes('.js') || s.includes('_next')) {
            console.log(s);
        }
    });
}
