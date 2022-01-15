const popularPosts = [
    {
        title : "Online Learning Strategies",
        text  : "We'll explain about the topic, and give you some tips and tricks.",
        image : "images/image.jpg",
        alter : "studying lessons"
    },
    {
        title : "Online Learning Strategies",
        text  : "We'll explain about the topic, and give you some tips and tricks.",
        image : "images/image.jpg",
        alter : "studying lessons"
    },
    {
        title : "Online Learning Strategies",
        text  : "We'll explain about the topic, and give you some tips and tricks.",
        image : "images/image.jpg",
        alter : "studying lessons"
    },
    {
        title : "Online Learning Strategies",
        text  : "We'll explain about the topic, and give you some tips and tricks.",
        image : "images/image.jpg",
        alter : "studying lessons"
    },
    {
        title : "Online Learning Strategies",
        text  : "We'll explain about the topic, and give you some tips and tricks.",
        image : "images/image.jpg",
        alter : "studying lessons"
    },
    {
        title : "Online Learning Strategies",
        text  : "We'll explain about the topic, and give you some tips and tricks.",
        image : "images/image.jpg",
        alter : "studying lessons"
    }
]

let showPosts = document.getElementById("showPosts");
let postDatas = "";

const loopPosts = popularPosts.forEach(({title,text,image,alter}) => {
    
      postDatas += `
            <div class="ms-2 me-2 mb-3">
                <div class="card">
                   <img src="${image}" alt="${alter}">
                    <div class="card-body">
                       <h3 class="card-title">${title}</h3>
                       <p class="card-text">${text}</p>
                       <a href="#" class="btn postButton">Read More</a>
                    </div>
                </div>
            </div> `
     //show the cards in the HTML
     showPosts.innerHTML = postDatas;
    
});
document.addEventListener("DOMContentLoaded", loopPosts);

$('.owl-carousel').owlCarousel({
    autoplay: true,
    autoplayhoverpause: true,
    autoplaytimeout: 1000,
    rtl: false,
    loop: true,
    // margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items: 3
        }
    }
})

