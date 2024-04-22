
const LIST_POSTS = []
//hada bach n3alam bih hadak element liradi khasni nupdati 
let updatedPostEl = null

function deletePost(e) {
    const res = confirm("You wanna delete the element for sure 🚨 ?")
    if (res) {
        e.parentElement.parentElement.remove()
    }
}

function editPost(e) {

    //target the current post clicked on edit 
    const imgTxt = e.parentElement.parentElement.children[0].src
    const title = e.parentElement.parentElement.children[1].textContent
    const authorTxt = e.parentElement.parentElement.children[2].textContent


    ///--format data
    const imageStrs = imgTxt.split('/')
    const img = imageStrs[imageStrs.length - 1]
    const authorStrs = authorTxt.split(' ')
    const author = authorStrs[authorStrs.length - 1]

    //--- put the current post to the form inputs
    //---- target all the inputs 
    const imageLinkEl = document.getElementById("imageLink")
    imageLinkEl.value = img
    const titleEl = document.getElementById("title")
    titleEl.value = title
    const authorEl = document.getElementById("author")
    authorEl.value = author

    //update post with an id bach ikon unique dart fih date 
    updatedPostEl = e.parentElement.parentElement


}

function savePost() {

    //target all the inputs 
    const imageLinkEl = document.getElementById("imageLink")
    const titleEl = document.getElementById("title")
    const authorEl = document.getElementById("author")

    // console.log(imageLinkEl, titleEl, authorEl)
    ///--- get the values 
    const imageLinkVal = imageLinkEl.value
    const titleVal = titleEl.value
    const authorVal = authorEl.value

    //---
    let newPost = {}

    ///--- validation of fields
    if (imageLinkVal === "" || titleVal === "" || authorVal === "")
        alert("Fields can't be empty 🚨")
    else {
        //--create post object 
        newPost = {
            img: imageLinkVal,
            title: titleVal,
            author: authorVal
        }
        //-- add object to list post array 
        LIST_POSTS.push(newPost)
        //-- display the new post 
        const postsEl = document.getElementById("posts")

        const newPostEl = `<article class="post">
                                <img src="${newPost.img}" alt="10" >
                                <span>${newPost.title}</span>
                                <span>By : ${newPost.author}</span>
                                <div class='action'>
                                    <button onclick="deletePost(this)" class='del'>DEL</button>
                                    <button  onclick="editPost(this)" class='edit'>EDIT</button>
                                </div>
                            </article> 
                            `

        postsEl.innerHTML = postsEl.innerHTML + newPostEl

        //reset all fields 
        imageLinkEl.value = ""
        titleEl.value = ""
        authorEl.value = ""
    }




    return false
}


function updatePost() {
    //target all the inputs 
    const imageLinkEl = document.getElementById("imageLink")
    const titleEl = document.getElementById("title")
    const authorEl = document.getElementById("author")

    //---
    ///--- get the values 
    const imageLinkVal = imageLinkEl.value
    const titleVal = titleEl.value
    const authorVal = authorEl.value


    ///--- validation of fields
    if (imageLinkVal === "" || titleVal === "" || authorVal === "")
        alert("Fields can't be empty 🚨")
    else {
        updatedPostEl.children[0].src = imageLinkVal
        updatedPostEl.children[1].textContent = titleVal
        updatedPostEl.children[2].textContent = "By : " + authorVal

        updatedPostEl = null
         //reset all fields 
         imageLinkEl.value = ""
         titleEl.value = ""
         authorEl.value = ""
    }
    return false
}