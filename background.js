function onContextClick(info, tab) {
	openNaoFode(info.linkUrl, info.selectionText);
} 

var id = chrome.contextMenus.create({
	title: "Abrir com naofo.de",
	contexts: ["link"],
	onclick: onContextClick
});

chrome.browserAction.onClicked.addListener(function (tab) {
	openNaoFode(tab.url, tab.title);
});

function openNaoFode(url, title) {
	console.log('Abrindo naofo.de para ', url, 'com titulo: ', title);
	var form = document.createElement('form');
	form.method = 'POST';
	form.action = 'http://naofo.de';
	form.target = '_blank';

	var urlField = document.createElement('input');
	urlField.type = 'text';
	urlField.value = url;
	urlField.name = 'url';
	form.appendChild(urlField);

	var titleField = document.createElement('input');
	titleField.type = 'text';
	titleField.value = title || url;
	titleField.name = 'title';
	form.appendChild(titleField);

	form.submit();
}