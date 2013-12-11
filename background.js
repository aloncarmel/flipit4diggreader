function addCustomActions(){

    if($('.story-actions').find('.btn-story-action-flipboard').length) {

    } else {

        //Lets add some stuff.
        console.log('add');
         var html = '<li class="story-action-item story-action story-flipboard"><a href="#" class="btn-story-action-flipboard" onClick="flipboard(this)"></a></li>';

        $('.story-actions').append(html);


    }


}

function flipboard(thisdiv) {
    var urlofarticle = $(thisdiv).parent().parent().parent().find('.story-title').find('a').attr('href');
    var titleofpage = $(thisdiv).parent().parent().parent().find('.story-title').find('a').text();
    var w = window,
        d = document,
        wi = 536,
        hi = 565,
        top = (w.screenTop || w.screenY) + 50,
        left = (w.screenX || w.screenLeft) + ((w.innerWidth || d.documentElement.offsetWidth || 0) / 2) - (wi / 2);
    var pop = function () {
        var url = encodeURIComponent(urlofarticle),
            title = encodeURIComponent(titleofpage || '');

        var share = w.open('https://share.flipboard.com/bookmarklet/popout?v=2&title=' + title + '&url=' + url + '&t='+(new Date().getTime()), '__flipboard_share_window', 'status=no,resizable=yes,scrollbars=no,personalbar=no,directories=no,location=yes,toolbar=no,menubar=no,width=' + wi + ',height=' + hi + ',top=' + top + ',left=' + left);
        console.log(share);
        //var share = w.open('https://share.flipboard.com/flipit/load?v=1.0&url=' + url + '&title=' + title + '&device=wbookmarklet&t=' + (new Date().getTime()), '__flipboard_share_window', 'status=no,resizable=yes,scrollbars=no,personalbar=no,directories=no,location=yes,toolbar=no,menubar=no,width=' + wi + ',height=' + hi + ',top=' + top + ',left=' + left);
        setTimeout(function () {
            share.focus()
        }, 50)
    };
    pop();
}


$(document).ready(function() {
    
        console.log('Flipit for digg.com loaded with new stuff');

        $('head').append('<style> article { padding-right:20% !important; } .btn-story-action-flipboard { background-image: url("data:image/gif;base64,R0lGODlhEQARANUAAAAAAP////39/fT09PDw8OTk5OHh4eDg4N7e3tvb29jY2NXV1dHR0dDQ0LS0tKSkpKOjo4KCgn19fWpqamZmZmVlZWNjY2JiYmBgYF9fX1dXV1NTU1JSUk1NTUxMTEtLS 0pKSkdHR0VFRURERENDQ0JCQkFBQUBAQD8/Pz4+Pj09PTk5OTg4OP///wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAEAAC0ALAAAAAARABEAAAZuwIBwSCwaj8gkksRsOplF0oqUqqJSpxGUSDJ1MhUM5qL5lEhRFKdBMBgGkNE5zUEECgxHJDTnojYJAgsPKiEefUMkam8SEyAeh2h+GwoHISIdkIhCXR0WFJmQHZsBUiMpKk1aLJKJT69KsbKzSEEAOw==") !important;} </style>');
     

		var script = document.createElement("script");

		// Add script content

		script.innerHTML = 'function flipboard(e){var t=$(e).parent().parent().parent().find(".story-title").find("a").attr("href");var n=$(e).parent().parent().parent().find(".story-title").find("a").text();var r=window,i=document,s=535,o=565,u=(r.screenTop||r.screenY)+50,a=(r.screenX||r.screenLeft)+(r.innerWidth||i.documentElement.offsetWidth||0)/2-s/2;var f=function(){var e=encodeURIComponent(t),i=encodeURIComponent(n||"");var f=r.open("https://share.flipboard.com/bookmarklet/popout?v=2&url="+e+"&title="+i+"&device=wbookmarklet&t="+(new Date).getTime(),"__flipboard_share_window","status=no,resizable=yes,scrollbars=no,personalbar=no,directories=no,location=yes,toolbar=no,menubar=no,width="+s+",height="+o+",top="+u+",left="+a);setTimeout(function(){f.focus()},50)};f()}';

		// Append

        document.head.appendChild(script);

        addCustomActions();

        document.addEventListener("DOMNodeInserted", function(event){

            var element = event.target;

            var html = '<li class="story-action-item story-action story-flipboard"><a href="#" class="btn-story-action-flipboard"``` onClick="flipboard(this)"></a></li>';

            if($(element).find('.story-actions').find('.btn-story-action-flipboard').length) {

            } else {
             
                $(element).find('.story-actions').append(html);


            }


        });


    });