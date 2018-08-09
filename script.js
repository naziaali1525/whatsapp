
 let friendsList = [
   
    {
        name: "Jeckie Chan",
        imageURL: "jeckie.jpg",
        phoneNum: "<i class='fas fa-phone' style='color: green'></i>0346-3785342",
        message: "<span>bla bla bla bla bla bla bla bla bla bla</span>",
        emailAddress: "<i class='far fa-envelope' style='color: purple' ></i>jeckie91@gmail.com",
        status: "Available",
        time: "today",
        check: "sent"
        

    },
    {
        name: "Ayza Khan",
        imageURL: "ayza-khan.jpg",
        phoneNum: "<i class='fas fa-phone' style='color: green'></i>0302-4559341",
        message: "<span>bla bla bla bla bla bla bla bla bla</span>",
        emailAddress: "<i class='far fa-envelope' style='color: purple' ></i>ayzakhan@gmail.com",
        status: "battery about to die",
        time: "yesterday",
        check: ""
    },
    {
        name: "kate winslet",
        imageURL: "kate.jpg",
        phoneNum: "<i class='fas fa-phone' style='color: green'></i>0344-6002300",
        message: "<span>bla bla bla bla bla</span>",
        emailAddress: "<i class='far fa-envelope' style='color: purple' ></i>katewin@gmail.com",
        status: "no calls whatsapp only",
        time: "yesterday",
        check: "received"
    },
    {
        name: "Tabby",
        imageURL: "cat.jpg",
        phoneNum: "<i class='fas fa-phone' style='color: green'></i>0333-2765035",
        message: "<span>bla bla bla bla bla</span>",
        emailAddress: "<i class='far fa-envelope' style='color: purple' ></i>tabby@gmail.com",
        status: "at work",
        time: "yesterday",
        check: ""
    },
    {
        name: "Imran Khan",
        imageURL: "imran-khan.jpg",
        phoneNum: "<i class='fas fa-phone' style='color: green'></i>0311-6800321",
        message: "<span>bla bla bla bla bla</span>",
        emailAddress: "<i class='far fa-envelope' style='color: purple' ></i>imran@gmail.com",
        status: "busy",
        time: "yesterday",
        check: "sent"
    },
    {
        name: "Hira",
        imageURL: "personicon.png",
        phoneNum: "<i class='fas fa-phone' style='color: green'></i>0322-5982044",
        message: "<span>bla bla bla bla bla</span>",
        emailAddress: "<i class='far fa-envelope' style='color: purple' ></i>hira@gmail.com",
        status: "no calls whatsapp only",
        time: " 1min ago",
        check: "received"
    },
    {
        name: "Paul Walker",
        imageURL: "paul-walker.jpg",
        phoneNum: "<i class='fas fa-phone' style='color: green'></i>0300-4941390",
        message: "<span>bla bla bla bla bla</span>",
        emailAddress: "<i class='far fa-envelope' style='color: purple' ></i>paul@gmail.com",
        status: "no calls whatsapp only",
        time: "yesterday",
        check: ""
    },
    {
        name: "Kareena Kapoor",
        imageURL: "kareena.JPG",
        phoneNum: "<i class='fas fa-phone' style='color: green'></i>0900-4962332",
        message: "<span>bla bla bla bla bla</span>",
        emailAddress: "<i class='far fa-envelope' style='color: purple' ></i>kareena@gmail.com",
        status: "no calls whatsapp only",
        time: "1 week ago",
        check: "sent"
    },
    {
        name: "Shahid Kapoor",
        imageURL: "shahid-kapoor.jpg",
        phoneNum: "<i class='fas fa-phone' style='color: green'></i>0322-4962332",
        message: "<span>bla bla bla bla bla</span>",
        emailAddress: "<i class='far fa-envelope' style='color: purple' ></i>shahid@gmail.com",
        status: "no calls whatsapp only",
        time: "yesterday",
        check: "sent"
    },
    {
        name: "Amir Khan",
        phoneNum: "<i class='fas fa-phone' style='color: green'></i>0346-3785342",
        imageURL: "amir-khan.jpg",
        message: "<span>bla bla bla bla bla</span>",
        emailAddress: "<i class='far fa-envelope' style='color: purple' ></i>amir91@gmail.com",
        status: "Available",
        time: "today",
        check: "received"
    },
    {
        name: "Farah Ali",
        phoneNum: "<i class='fas fa-phone' style='color: green'></i>0310-6495342",
        imageURL: "personicon.png",
        message: "<span>bla bla bla bla bla</span>",
        emailAddress: "<i class='far fa-envelope' style='color: purple' ></i>amir91@gmail.com",
        status: "Available",
        time: "today",
        check: "received"
    },
    {
        name: "Bruno",
        phoneNum: "<i class='fas fa-phone' style='color: green'></i>0300-9493142",
        imageURL: "puppy.jpg",
        message: "<span>bla bla bla bla bla</span>",
        emailAddress: "<i class='far fa-envelope' style='color: purple' ></i>amir91@gmail.com",
        status: "sleeping...",
        time: "today",
        check: "received"
    }
]
    
 function initialize(){
     let check='';

    for (let i = 0; i < friendsList.length; i++){
        if (friendsList[i].check==="received"){
            check="<i class='fas fa-check-double'></i>";
                
        } else if (friendsList[i].check==="sent") {
            check="<i class='fas fa-check'></i>";

        } else  {
            check="<i class='fas fa-clock'></i>";
        }
   
       
        let contactListEl = document.querySelector("#list-msg");

             contactListEl.innerHTML += ` <div id="main-container">
                                <div id="container" onclick="changeContent(${i})"> 
                                 <div class="person-image" 

                                    style="background-image:url('images/${friendsList[i].imageURL}')">
                                </div>
                                <div class="image-card>
                                    <div id="person-detail">   
                                        <h6 class="name">${friendsList[i].name}</h6>
                                    
                                    <div class="message-info">
                                   
                                        <p class="message">${check}${friendsList[i].message}</p>
                                    </div>
                                    </div>
                               
                                    <p class="last-seen">
                                        ${friendsList[i].time}
                                    </p>
                                </div>
                                </div> 
                                </div>`
    }
  
} 
function changeContent(friendIndex){

        document.querySelector("#details").style["display"] = "flex";
        document.querySelector(".direction").style["display"] = "none";
        document.querySelector("#friend-image").style["background-image"] = `url(images/${friendsList[friendIndex].imageURL})`;
        document.querySelector(".card-title").innerHTML = friendsList[friendIndex].name;
        document.querySelector("#phone").innerHTML = friendsList[friendIndex].phoneNum;
        
        document.querySelector("#email").innerHTML = friendsList[friendIndex].emailAddress;
        document.querySelector(".card-status").innerHTML = friendsList[friendIndex].status;
       
        
        
        

        
}