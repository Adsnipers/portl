let UnmsAPI = require('node-unmsapi');
let fs = require('fs')
const UISPHost = process.env['UISP_HOST']
const UISPUsername = process.env['UISP_USERNAME']
const UISPPassword = process.env['UISP_PASSWORD']
let uisp = UnmsAPI({
   baseUrl: UISPHost, // The URL of the Unifi Controller
   username: UISPUsername,
   password: UISPPassword,
   debug: true, // More debug of the API (uses the debug module)
   debugNet: true // Debug of the network requests (uses request module)
});

uisp.list_outages()
    .then(done => {
			let data = JSON.stringify(done, null, 4);
			//fs.writeFileSync('./outages.json', data); // Write contents of query to json file
			//console.log(done.items[0].inProgress) // Debug done.items
			for(items in data){
			//checkOutageIfTrue()
				console.log("test")
				}
		})
    .catch(err => console.log('Error',err))

async function checkOutageIfTrue() {
	if (done.items[0].inProgress == true){
		console.log("It worked")
	}
}