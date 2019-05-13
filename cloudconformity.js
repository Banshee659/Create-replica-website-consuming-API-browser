$(document).ready(function() {

    $.getJSON('services.json', function(obj) {
        var columnLeft = document.getElementById('columnLeft');
        var columnRight = document.getElementById('columnRight');
        let ruleDataIdMap = {};
        ruleIds = new Array();

        for (let i = 0; i < obj.data.length; i++) {
            ruleIds[i] = obj.data[i].id;
            for (let j = 0; j < obj.data[i].relationships.rules.data.length; j++) {
                ruleDataIdMap[obj.data[i].relationships.rules.data[j].id] = ruleIds[i];
            }
        }

        ruleIds.sort();

        for (let i = 0; i < ruleIds.length; i++) {
            let ul = document.createElement('ul');
            ul.setAttribute('id', ruleIds[i]);
            let li = document.createElement('li');
            li.innerHTML = "<li><a href='./" + ruleIds[i] + "/' class='ruleGrplink'>" + ruleIds[i] + "</a><li></li>";
            ul.appendChild(li);

            if (i < ruleIds.length / 2)
                columnLeft.appendChild(ul);
            else
                columnRight.appendChild(ul);
        }

        for (let i = 0; i < obj.included.length; i++) {
            let ruleGrp = ruleDataIdMap[obj.included[i].id];
            if (var1 = document.getElementById(ruleGrp)) {
                var1.innerHTML += "<li><a href='./" + ruleGrp + "/" + obj.included[i].attributes.slug + ".html'>" + obj.included[i].attributes.title + "</a></li>";
            }
        }

    });

});

// add sticky header on scroll page down
window.onscroll = function() { myScroll() };

var header = document.getElementById("myHeader");
var sticky = header.offsetTop;

function myScroll() {
    if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
}