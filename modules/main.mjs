import {userName} from'../client.js'
import {content} from'../content/index.mjs'
if(userName == ""){
    document.querySelector('#content').innerHTML = content
}else{
    console.log(userName);
}
