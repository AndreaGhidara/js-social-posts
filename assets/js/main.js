const posts = [
    {
        "id": 1,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/300?image=171",
        "author": {
            "name": "Phil Mangione",
            "image": "https://unsplash.it/300/300?image=15"
        },
        "likes": 80,
        "created": "2021-06-25"
    },
    {
        "id": 2,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=112",
        "author": {
            "name": "Sofia Perlari",
            "image": "https://unsplash.it/300/300?image=10"
        },
        "likes": 120,
        "created": "2021-09-03"
    },
    {
        "id": 3,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=234",
        "author": {
            "name": "Chiara Passaro",
            "image": "https://unsplash.it/300/300?image=20"
        },
        "likes": 78,
        "created": "2021-05-15"
    },
    {
        "id": 4,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=24",
        "author": {
            "name": "Luca Formicola",
            "image": null
        },
        "likes": 56,
        "created": "2021-04-03"
    },
    {
        "id": 5,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=534",
        "author": {
            "name": "Alessandro Sainato",
            "image": "https://unsplash.it/300/300?image=29"
        },
        "likes": 95,
        "created": "2021-03-05"
    }
];


for (let i = 0; i < posts.length; i++) {

    const containere = document.getElementById("container");

    const post = document.createElement("div");
    post.classList.add("post");

    const postHeader = document.createElement("div");
    postHeader.classList.add("post__header");

    const postMeta = document.createElement("div");
    postMeta.classList.add("post-meta");

    const PostMetaIcon = document.createElement("div");
    PostMetaIcon.classList.add("post-meta__icon");


    const profilePic = document.createElement("img");
    profilePic.classList.add("profile-pic");
    profilePic.src = posts[i].author.image;
    profilePic.alt = "Phil Mangione";

    const postMetaData = document.createElement("div");
    postMetaData.classList.add("post-meta__data");

    const postMetaAuthor = document.createElement("div");
    postMetaAuthor.classList.add("post-meta__author");
    postMetaAuthor.innerText = posts[i].author.name;

    const postMetaTime = document.createElement("div");
    postMetaTime.classList.add("post-meta__time");
    postMetaTime.innerText = posts[i].created;

    const postText = document.createElement("div");
    postText.classList.add("post__text");
    postText.innerText = posts[i].content;

    const postImage = document.createElement("div");
    postImage.classList.add("post__image");

    const imagePost = document.createElement("img");
    imagePost.src = posts[i].media;

    const postFooter = document.createElement("div");
    postFooter.classList.add("post__footer");

    const likesJsLikes = document.createElement("div");
    likesJsLikes.classList.add("likes", "js-likes");

    const likesCta = document.createElement("div");
    likesCta.classList.add("likes__cta");

    const likeButton = document.createElement("a");
    likeButton.classList.add("like-button", "js-like-button");
    likeButton.dataset.postid = posts[i].id;
    
    const likeButtonIcon = document.createElement("i");
    likeButtonIcon.classList.add("like-button__icon", "fas", "fa-thumbs-up");
    likeButtonIcon.ariaHidden = "true";
    
    const likeButtonLabel = document.createElement("span");
    likeButtonLabel.classList.add("like-button__label");
    likeButtonLabel.innerText = "Mi Piace";
    
    const likesCounter = document.createElement("div");
    likesCounter.classList.add("likes__counter");
    likesCounter.innerHTML = `Piace a <b id="like-counter-1" class="js-likes-counter">${posts[i].likes}</b> persone`
    
    likeButton.addEventListener("click", function () {
        likesCounter.innerHTML = `Piace a <b id="like-counter-1" class="js-likes-counter like-button--liked">${posts[i].likes + 1}</b> persone`
        
    })
    containere.append(post);

    post.append(postHeader);
    postHeader.append(postMeta);
    postMeta.append(PostMetaIcon, postMetaData);

    PostMetaIcon.append(profilePic);
    postMetaData.append(postMetaAuthor, postMetaTime);

    post.append(postText);

    post.append(postImage);
    postImage.append(imagePost);


    post.append(postFooter);
    postFooter.append(likesJsLikes);
    likesJsLikes.append(likesCta, likesCounter);

    likesCta.append(likeButton);
    likeButton.append(likeButtonIcon, likeButtonLabel);
}

