document.querySelector('#input').addEventListener('input',(even)=>{
    let inputvalue = even.target.value;

    let valuecount = inputvalue.trim().split(/\s+/).filter(function(word){
        return word.length > 0

    }).length;

    let charcount = inputvalue.length
    document.querySelector('#word-count').textContent = valuecount;
    document.querySelector('#char-count').textContent = charcount;

    let twiterlimit = 200 - charcount
    let facebooklimit = 6300 - charcount

    document.querySelector('#twiter-limit').textContent = twiterlimit >= 0 ?
    twiterlimit : 0

    document.querySelector('#facebook-limit').textContent = facebooklimit 
    

})