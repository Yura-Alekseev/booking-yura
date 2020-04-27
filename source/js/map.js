(function () {
    var setting = {"height":400,"width":1920,"zoom":18,"queryString":"Большая Конюшенная улица, 19/8, Санкт-Петербург, Россия","place_id":"ChIJwVwUyg8xlkYRB4Aj2Egms0I","satellite":false,"centerCoord":[59.93847795240343,30.322837650856762],"cid":"0x42b32648d8238007","lang":"ru","cityUrl":"/russia/saint-petersburg","cityAnchorText":"Карта [CITY1], Северо-Западный регион, Россия","id":"map-9cd199b9cc5410cd3b1ad21cab2e54d3","embed_id":"175608"};
    var d = document;
    var s = d.createElement('script');
    s.src = 'https://embedgooglemap.1map.com/js/script-for-user.js?embed_id=175608';
    s.async = true;
    s.onload = function (e) {
        window.OneMap.initMap(setting)
    };
    var to = d.getElementsByTagName('script')[0];
    to.parentNode.insertBefore(s, to);
})();
