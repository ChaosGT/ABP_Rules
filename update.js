"use strict";

let request = require('request');
let fs = require('fs');

function download(uri, filename, callback){
  let stream = fs.createWriteStream(filename);
  request(uri).pipe(stream).on('close', callback);
}

function getFileName(uri){
	return uri.split('/').pop();
}

let uriList = ['https://easylist-downloads.adblockplus.org/easyprivacy.txt',
				'https://easylist-downloads.adblockplus.org/abp-filters-anti-cv.txt',
				'https://easylist-downloads.adblockplus.org/easylistchina+easylist.txt']

for(let uri of uriList){
	console.log("Downloading: " + uri);
	download(uri, getFileName(uri), function (){
		console.log("Complete: " + uri);
	});
}