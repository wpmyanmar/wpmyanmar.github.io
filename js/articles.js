import { data } from "./config.js";
fetch(`${data}posts/`)
.then(a => a.json())
.then(b => {
    let p = b.posts;
    p.forEach(q => {
        let w = document.querySelector('#w');
        console.log(q);

        let tagStr = JSON.stringify(q.tags)
        // FOR TAGS    
        tagStr = tagStr.substring(tagStr.indexOf('{"I') + 1);
        tagStr = tagStr.replaceAll('"ID":',':<a class="tag plaina" href="tag.html?id=');
        tagStr = tagStr.replaceAll(',"name":"','&slug=');
        tagStr = tagStr.replaceAll(',"slug":"','> #');
        tagStr = tagStr.replaceAll('","description":"","post_count":','<sup class="tag-post-count">');
        tagStr = tagStr.replaceAll(',"meta":','</sup> ');
        tagStr = tagStr.replaceAll('{"links":','</a>');
        tagStr = tagStr.replaceAll('{"self":"','<rm>');
        tagStr = tagStr.replaceAll('"}}},"','</rm><rf>');
        tagStr = tagStr.replaceAll('":{:','</rf>');

        let catStr = JSON.stringify(q.categories);
        catStr = catStr.substring(catStr.indexOf(',"nam') + 5);
        catStr = catStr.replaceAll('e":"','<a class="cat plaina" href="cat.html?name=');
        catStr = catStr.replaceAll('","slug":"','">');
        catStr = catStr.replaceAll('","description":','</a>(rm>');
        catStr = catStr.split('(rm>')[0];

        w.innerHTML += '<div class="w3-card w3-round"> <div class="article-ih"> <div class="w3-padding-small"><img src="'+q.author.avatar_URL+'" class="avatar w3-round-xxlarge w3-card"/></div><div style="width:87%; line-height: 1;">'+q.author.name+'<br/><small>'+q.date+'</small></div><div class="w3-right w3-margin-right" style="width:20%"><span class="w3-right w3-margin-righ">'+'...'+'</span></div></div><div class="w3-container"> <p>'+q.title+'</p><p>'+tagStr+'<a href="article.html?id="'+q.ID+'" class="plaina">See More...</a></p></div><img src="'+q.featured_image+'"/> <a href="#" class="plaina"> <div class="w3-btn w3-bar w3-block"> Sponsored by WPMyanmar </div></a> </div><br/>';

        /**
         * <div class="w3-card w3-round"> <div class="article-ih"> <div class="w3-padding-small"><img src="
         * q.author.avatar_URL
         * " class="avatar w3-round-xxlarge w3-card"/></div><div style="width:87%; line-height: 1;">
         * Category Name
         * <br/><small>
         * Published Date
         * </small></div><div class="w3-right w3-margin-right" style="width:20%"><span class="w3-right w3-margin-righ">
         * 69
         * </span></div></div><div class="w3-container"> <p>
         * Some text.. specific Character #To remove everything after a specific character in a string:
         * </p><p>
         * #tag01, #tag02, #tag03 <a href="
         * #
         * " class="plaina">See More...</a></p></div><img src="
         * https://www.w3schools.com/w3css/img_snowtops.jpg
         * "/> <a href="#" class="plaina"> <div class="w3-btn w3-bar w3-block"> Sponsored by WPMyanmar </div></a> </div><br/>
         */


        // w.innerHTML += '<div id="'+q.ID+'" class="article-in-homepage"><div><strong>Title</strong>: '+q.title+'<br/>'+'<strong>Tags</strong>'+tagStr+'</div><br/><STRONG>CATEGORIES</STRONG>: '+catStr+'</div><hr/>';
        
        
    });
})
