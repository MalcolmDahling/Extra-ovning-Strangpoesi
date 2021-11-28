words = ['boat', 'apple', 'car', 'and', 'to', 'in', 'chips', 'code', 'crap', 'he', 'she', 'it', 'snus', 'coffee', 'stuff'];
result = [];

for(let i = 0; i < words.length; i++){
    document.body.innerHTML += '<button>'+words[i]+'</button>';    
}


let buttons = document.getElementsByTagName('button');

for(let i = 0; i < buttons.length; i++){
    if(buttons[i].id != 'print'){
        buttons[i].addEventListener('click', function(){
            result.push(this.innerHTML);
            this.style.backgroundColor = 'green';
        });
    }
}


document.getElementById('print').addEventListener('click', function(){
    for(let i = 0; i < result.length; i++){
        document.getElementById('output').innerHTML += result[i] + ' ';
    }
});