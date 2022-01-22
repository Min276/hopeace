const popularPosts = [
    {
        title : "Online Learning Strategies",
        text  : "We'll explain about the topic, and give you some tips and tricks.",
        image : "images/image.jpg",
        alter : "studying lessons",
        author: "Nyein Su",
        time  : "1 min read"
    },
    {
        title : "Online Learning Strategies",
        text  : "We'll explain about the topic, and give you some tips and tricks.",
        image : "images/image.jpg",
        alter : "studying lessons",
        author: "Ye Myat",
        time  : "2 mins read"
    },
    {
        title : "Online Learning Strategies",
        text  : "We'll explain about the topic, and give you some tips and tricks.",
        image : "images/image.jpg",
        alter : "studying lessons",
        author: "Myat Min",
        time  : "1.5 min read"
    },
    {
        title : "Online Learning Strategies",
        text  : "We'll explain about the topic, and give you some tips and tricks.",
        image : "images/image.jpg",
        alter : "studying lessons",
        author: "Su Myat",
        time  : "1 min read"
    },
    {
        title : "Online Learning Strategies",
        text  : "We'll explain about the topic, and give you some tips and tricks.",
        image : "images/image.jpg",
        alter : "studying lessons",
        author: "Chaw Su",
        time  : "2 mins read"
    },
    {
        title : "Online Learning Strategies",
        text  : "We'll explain about the topic, and give you some tips and tricks.",
        image : "images/image.jpg",
        alter : "studying lessons",
        author: "Phone Myat",
        time  : "3 mins read"
    }
]

let showPosts = document.getElementById("showPosts");
let postDatas = "";

 popularPosts.forEach(({title,text,image,alter,time}) => {

      postDatas += `
            <div class="ms-2 me-2 mb-3">
                <div class="card">
                   <img src="${image}" alt="${alter}">
                    <div class="card-body">
                       <h3 class="card-title">${title}</h3>
                       <p class="card-text">${text}</p>
                       <div class="group">
                         <a href="#" class="btn postButton">Read More</a>
                         <a href="#" class="role-icon"><i class="far fa-clock" style="font-size: 25px;"></i>
                         <span class="role">&nbsp;${time}</span></a>
                       </div>
                    </div>
                </div>
            </div> `
     //show the cards in the HTML
     showPosts.innerHTML = postDatas;
    
});


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



