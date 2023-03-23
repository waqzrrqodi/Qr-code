const http = require("https");

const options = {
	"method": "POST",
	"hostname": "qrcode3.p.rapidapi.com",
	"port": null,
	"path": "/qrcode/text",
	"headers": {
		"content-type": "application/json",
		"X-RapidAPI-Key": "fd1b5276fcmsh50dfd68d3408218p17da10jsnab95292dc603",
		"X-RapidAPI-Host": "qrcode3.p.rapidapi.com",
		"useQueryString": true
	}
};

const req = http.request(options, function (res) {
	const chunks = [];

	res.on("data", function (chunk) {
		chunks.push(chunk);
	});

	res.on("end", function () {
		const body = Buffer.concat(chunks);
		console.log(body.toString());
	});
});

req.write(JSON.stringify({
  data: 'https://linqr.app',
  image: {uri: 'icon://appstore', modules: true},
  style: {
    module: {color: 'black', shape: 'default'},
    inner_eye: {shape: 'default'},
    outer_eye: {shape: 'default'},
    background: {}
  },
  size: {width: 200, quiet_zone: 4, error_correction: 'M'},
  output: {filename: 'qrcode', format: 'png'}
}));
req.end();