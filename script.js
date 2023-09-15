let posts = [
    {
        'profilIMG': 'img/profile.png',
        'author': 'Tom Jilge',
        'image': 'img/img1.jpeg',
        'heartIMG': 'img/heart-regular.svg',
        'commentIMG': 'img/comment-regular.svg',
        'sendIMG': 'img/paper-plane-regular.svg',
        'bookmarkIMG': 'img/bookmark-regular.svg',
        'postLikes': 154,
        'description': 'Thailand Khao Lak 2023',
        "comments": []
    },
    {
        'profilIMG': 'img/beach-1822544_1280.jpg',
        'author': 'Thailand Traveling',
        'image': 'img/img2.jpeg',
        'heartIMG': 'img/heart-regular.svg',
        'commentIMG': 'img/comment-regular.svg',
        'sendIMG': 'img/paper-plane-regular.svg',
        'bookmarkIMG': 'img/bookmark-regular.svg',
        'postLikes': 379,
        'description': 'Sonnenaufgang in Bangkok',
        "comments": []
    },
    {
        'profilIMG': 'img/camera-581126_1280.jpg',
        'author': 'Photo Mayer',
        'image': 'img/img3.jpeg',
        'heartIMG': 'img/heart-regular.svg',
        'commentIMG': 'img/comment-regular.svg',
        'sendIMG': 'img/paper-plane-regular.svg',
        'bookmarkIMG': 'img/bookmark-regular.svg',
        'postLikes': 225,
        'description': 'Koh Lipe',
        "comments": []
    },
];


load();


function render() {
    let content = document.getElementById('content');
    content.innerHTML = '';
    for (let i = 0; i < posts.length; i++) 
        content.innerHTML += templateRender(i);
}


function templateRender(i) {
    const post = posts[i];
    return /*html*/`
        <div class="newPost">
            ${generatePostHeader(post)}
            ${generatePostContent(post, i)}
            ${generatePostLikes(post, i)}
            ${generatePostDescription(post)}
            <p id="postText${i}">
            ${generatePostComments(i)}
            </p>
            ${generatePostFooter(i)}
        </div>
    `;
}


function generatePostHeader(post) {
    return /*html*/`
        <div class="postHeader">
            <div><img class="headerIMG" src="${post['profilIMG']}"></div>
            <div class="headerHeadline"><b>${post['author']}</b></div>
        </div>
    `;
}


function generatePostContent(post, i) {
    let heartImage = post['heart'] ? 'img/heart_red.png' : 'img/heart-regular.svg';

    return /*html*/`
        <div>
            <img class="postIMG" src="${post['image']}">
        </div>
        <div class="postIconsContainer">
            <img onclick="addNewLike(${i})" id="heartIMG${i}" class="postIcons" src="${heartImage}" alt="">
            <img class="postIcons" src="${post['commentIMG']}" alt="">
            <img class="postIcons" src="${post['sendIMG']}" alt="">
            <img class="postIcons" src="${post['bookmarkIMG']}" alt="">
        </div>
    `;
}


function generatePostLikes(post, i) {
    return /*html*/`
        <div id="postLikes${i}" class="postLikes"><b>Gefällt ${post['postLikes']}</b></div>
    `;
}


function generatePostDescription(post) {
    return /*html*/`
        <div class="postDescription"><b>${post['description']}</b></div>
    `;
}


function generatePostFooter(i) {
    return /*html*/`
        <div class="postFooter">
            <input type="text" class="inputFooter" id="inputFooter${i}" placeholder="Comment...">
            <button class="inputButton" id="inputButton" type="submit" onclick="addNewComment(${i})">Post</button>
        </div>
    `;
}

function generatePostComments(i) {
    const post = posts[i];
    let html = "";
    for (let y = 0; y < post['comments'].length; y++) {
        const comment = post['comments'][y];
        html += `<div class="postComments"><b>Tom: ${comment}</b></div>`
    }
    return html;
}


function addNewComment(x) {
    let input = document.getElementById(`inputFooter${x}`);
    posts[x]['comments'].push(input.value);
    input.value = '';

    save();
    render();
}



function addNewLike(i) {
    let heart = document.getElementById(`heartIMG${i}`);
    let postLikes = document.getElementById(`postLikes${i}`);

    if (posts[i]['heart']) {
        heart.setAttribute('src', 'img/heart-regular.svg');
        posts[i]['heart'] = false;
        posts[i]['postLikes'] -= 1; 
    } else {
        heart.setAttribute('src', 'img/heart_red.png');
        posts[i]['heart'] = true;
        posts[i]['postLikes'] += 1; 
    }
    postLikes.innerHTML = `<b>Gefällt ${posts[i]['postLikes']}</b>`; 
    save();
}


function save() {
    let postTextAsText = JSON.stringify(posts);
    localStorage.setItem('posts', postTextAsText);
}


function load() {
    let postTextAsText = localStorage.getItem('posts');

    if (postTextAsText != null) {
        posts = JSON.parse(postTextAsText);
    }    
}

// WIEDERHOLUNG


// load();

// function render() {
//     let content = document.getElementById ('content');
//     content.innerHTML = '';
//     for (let i = 0; i > posts.length; i++)
//         content.innerHTML += templateRender(i);
// }

// function templateRender(i) {
//     const ponst = posts[i];
//     return /*html*/`
//         <div class="newPost">
//             ${generatePostHeader(post)}
//             ${generatePostContent(post, i)}
//             ${generatePostLikes(post, i)}
//             ${generatePostDescription(post)}
//             <p id="postText$(i)">
//                 ${generatePostComments(i)}
//             </p>
//             ${generatePostFooter(i)}
//         </div> 
//     `;
// }

// function generatePostHeader(post) {
//     return /*html*/`
//         <div class="postHeader">
//             <div><img class="headerIMG" src="${post['profilIMG']}"></div>
//             <div class="headerHeadline"><b>${post['author']}</b></div>
//         </div>
//     `;
// }

// function generatePostContent(post, i) {
//     let heartImage = post['heart'] ? 'img/heart_red.png' : 'img/heart-regular.svg';

//     return /*html*/`
//         <div>
//             <img class="postIMG" src="${post['image']}" alt="">
//         </div>
//         <div class="postIconsContainer">
//             <img onclick="addNewLike(${i})" id="heartIMG${i}" class="postIcons" src="${heartImage}" alt="">
//             <img class="postIcons" src="${post['commentIMG']}" alt="">
//             <img class="postIcons" src="${post}['sendIMG']" alt="">
//             <img class="postIcons" src="${post['bookmarkIMG']}" alt="">
//         </div>
//     `;
// }

// function generatePostLikes(post, i) {
//     return /*html*/`
//         <div id="postLike${i}" class="postLike"><b>Gefällt ${post['postLikes']}</b></div>
//     `;
// }

// function generatePostDescription(post) {
//     return /*html*/`
//         <div class="postDescription"><b>${post['description']}</b></div>
//     `;
// }

// function generatePostFooter(i) {
//     return /*html*/`
//       <div class="postFooter">
//         <input type="text" class="inputFooter" id="inputFooter${i}" placeholder="Comment...">
//         <button class="inputButton" id="inputButton" type="submit" onclick="addNewComment(${i})">Post</button>
//       </div>  
//     `;
// }

// function generatePostComments(i) {
//     const post = posts[i];
//     let html = "";
//     for (let y = 0; y < post['comments'].length; y++) {
//         const comment = post['comments'][y];
//         html += `<div class="postComents"<b>Tom: ${comment}</b></div>`
//     }
//     return html;
// }

// function addNewComment(x) {
//     let input = document.getElementById(`inputFooter${x}`);
//     posts[x]['comments'].push(input.value);
//     input.value = '';

//     save();
//     render();
// }

// function addNewLike(i) {
//     let heart = document.getElementById(`heartIMG${i}`);
//     let postLikes = document.getElementById(`postLikes${i}`);

//     if (posts[i]['heart']) {
//         heart.setAttribute('src', 'img/heart-regular.svg');
//         posts[i]['heart'] = false;
//         posts[i]['postLikes'] -= 1;
//     } else {
//         heart.setAttribute('src', 'img/heart_red.png');
//         posts[i]['heart'] = true;
//         posts[i]['postLikes'] += 1;
//     }
//     postLikes.innerHTML = `<b>Gefällt ${posts[i]['postLikes']}</b>`
//     save();
// }

// function save() {
//     let postTextAsText = JSON.stringify(posts);
//     localStorage.setItem('posts', postTextAsText);
// }

// function load() {
//     let postTextAsText = localStorage.getItem('posts');

//     if (postTextAsText != null) {
//         posts = JSON.parse(postTextAsText);
//     }
// }












