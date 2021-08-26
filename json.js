function jsonData(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => getInfo(data));
}
function jsonData2(){
    fetch('https://jsonplaceholder.typicode.com/albums')
    .then(res => res.json())
    .then(data => getAlbum(data));
}
function jsonData3(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => information(data));
}

function information(data){
    const ul = document.getElementById('post')
    for(const post of data){
        console.log(post.id);
        const li = document.createElement('li');
        li.innerText = post.id;
        ul.appendChild(li);
    }

}

function getInfo(data){
    const ul = document.getElementById('post')
    for(const user of data){
        const li = document.createElement('li');
        li.innerText = `name: ${user.name} 
        email: ${user.email}`;
        ul.appendChild(li);
    }
}

function getAlbum(albums){
    const section = document.getElementById('albums')
    for ( const album of albums){
        const div = document.createElement('div')
        div.classList.add('album');
        div.innerHTML= `
        <h2>${album.id}</h2>
        <p>${album.title}
        `
        section.appendChild(div);
    }
}


