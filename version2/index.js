
// POSTs TABLE (DATA_BASE)
const MY_POSTS_HOME = [
    { img: "./image4.jpeg", title: "10 Days in Japan", author: "Sara Rassy" },
    { img: "./image2.jpeg", title: "Best destination for summer", author: "ilyass chemlal" },
    { img: "./image3.jpeg", title: "Let's discover Egypt", author: "Yassine Rassy" },
];

//parents Els
const postsEl = document.querySelector('#posts')
const divEl = "<div>"


const post1 = MY_POSTS_HOME[0]
const post2 = MY_POSTS_HOME[1]
let postEl = `<div><article class="post">
                        <img src=${post1.img} alt=${post1.title} />
                        <span>${post1.title}</span>
                        <span>By : ${post1.author}</span>
                        </article>
                        <article class="post">
                            <img src=${post2.img} alt=${post2.title} />
                            <span>${post2.title}</span>
                            <span>By : ${post2.author}</span>
                            </article>
                </div>`
postsEl.innerHTML = postEl

const post3 = MY_POSTS_HOME[2]

postEl = `<article class="post last-post">
                        <img src=${post3.img} alt=${post3.title} />
                        <span>${post3.title}</span>
                        <span>By : ${post3.author}</span>
                        </article>`
postsEl.innerHTML += postEl


///----- 
function gotoShareYourPage(){
    window.location = "./shareYours.html"
}