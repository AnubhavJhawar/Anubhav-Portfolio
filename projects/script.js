$(document).ready(function(){

    $('#menu').click(function(){
        $(this).toggleClass('fa-times');
        $('.navbar').toggleClass('nav-toggle');
    });

    $(window).on('scroll load',function(){
        $('#menu').removeClass('fa-times');
        $('.navbar').removeClass('nav-toggle');

        if(window.scrollY>60){
            document.querySelector('#scroll-top').classList.add('active');
        }else{
            document.querySelector('#scroll-top').classList.remove('active');
        }
    });
});

document.addEventListener('visibilitychange',
function(){
    if(document.visibilityState === "visible"){
        document.title = "Projects | Portfolio Anubhav Jhawar";
        $("#favicon").attr("href","/assests/favicon.icon");
    }
    else {
        document.title = "Come Back To Portfolio";
        
    }
});


// fetch projects start
function getProjects() {
    return fetch("projects.json")
        .then(response => response.json())
        .then(data => {
            return data
        })
}


function showProjects(projects) {
    let projectsContainer = document.querySelector(".work .box-container");
    let projectsHTML = "";
    projects.forEach(project => {
        projectsHTML += `
        <div class="box tilt">
      <img draggable="false" src="${project.image}" alt="" />
      <div class="content">
        <div class="tag">
        <h3>${project.name}</h3>
        </div>
        <div class="desc">
          <p>${project.desc}</p>
          <div class="btns">
            <a href="${project.links.view}" class="btn" target="_blank"><i class="fas fa-eye"></i> View</a>
            <a href="${project.links.code}" class="btn" target="_blank">Code <i class="fas fa-code"></i></a>
          </div>
        </div>
      </div>
    </div>`
    });
    projectsContainer.innerHTML = projectsHTML;

// vanilla tilt.js
VanillaTilt.init(document.querySelectorAll(".tilt"), {
    max: 20,
});
// vanilla tilt.js  

/* ===== SCROLL REVEAL ANIMATION ===== */
const srtop = ScrollReveal({
    origin: 'bottom',
    distance: '80px',
    duration: 1000,
    reset: true
});

/* SCROLL PROJECTS */
srtop.reveal('.work .box',{interval: 200}); 
}

getProjects().then(data => {
    showProjects(data);
})
// fetch projects end

// Start of Tawk.to Live Chat
// <!--Start of Tawk.to Script-->
{/* <script type="text/javascript"> */}
// <!--Start of Tawk.to Script-->
{/* <script type="text/javascript"> */}
var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
(function(){
var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
s1.async=true;
s1.src='https://embed.tawk.to/61b23e9980b2296cfdd0f27a/1fmg492d5';
s1.charset='UTF-8';
s1.setAttribute('crossorigin','*');
s0.parentNode.insertBefore(s1,s0);
})();
{/* </script> */}
{/* <!--End of Tawk.to Script--> */}

// </script>
// <!--End of Tawk.to Script-->
// End of Tawk.to Live Chat

// disable developer mode
document.onkeydown = function(e) {
  if(e.keyCode == 123) {
     return false;
  }
  if(e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) {
     return false;
  }
  if(e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) {
     return false;
  }
  if(e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) {
     return false;
  }
  if(e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {
     return false;
  }
}