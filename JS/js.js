const contentElements = document.querySelectorAll('.content');
contentElements.forEach(content =>{
    var pg=content.querySelector('.photogallery');
    var title=content.querySelector('.travel_title');
    pg.addEventListener('click',function(){
        if(pg.classList.contains('active')){
            return;
        }
        if(pg.classList.contains('inactive')){
            pg.classList.remove('inactive');
            pg.classList.remove('fade');
            pg.classList.add('active');
            title.classList.remove('active');
            title.classList.add('inactive');
        }
    })
    title.addEventListener('click',function(){
        if(title.classList.contains('active')){
            return;
        }
        if(title.classList.contains('inactive')){
            title.classList.remove('inactive');
            title.classList.remove('fade');
            title.classList.add('active');
            pg.classList.remove('active');
            pg.classList.add('inactive');
        }
    })
    pg.addEventListener("mouseenter", function() {
        if(pg.classList.contains('active')){
            return;
        }
        if(pg.classList.contains('inactive')){
            title.classList.add("fade");
        }
    });

    title.addEventListener("mouseenter", function() {
        if(title.classList.contains('active')){
            return;
        }
        if(title.classList.contains('inactive')){
            pg.classList.add("fade");
        }
    });

    pg.addEventListener("mouseleave", function() {
        if(pg.classList.contains('active')){
            return;
        }
        if(pg.classList.contains('inactive')){
            title.classList.remove("fade");
        }
    });

    title.addEventListener("mouseleave", function() {
        if(title.classList.contains('active')){
            return;
        }
        if(title.classList.contains('inactive')){
            pg.classList.remove("fade");
        }
    });
    pg.addEventListener('mousedown',function(){
        if(pg.classList.contains('active')){
            return;
        }
        if(pg.classList.contains('inactive')){
            title.classList.add('shrink');
        }
    })
    title.addEventListener('mousedown',function(){
        if(title.classList.contains('active')){
            return;
        }
        if(title.classList.contains('inactive')){
            pg.classList.add('shrink');
        }
    })
    pg.addEventListener('mouseup',function(){
        if(pg.classList.contains('active')){
            return;
        }
        if(pg.classList.contains('inactive')){
            title.classList.remove('shrink');
        }
    })
    title.addEventListener('mouseup',function(){
        if(title.classList.contains('active')){
            return;
        }
        if(title.classList.contains('inactive')){
            pg.classList.remove('shrink');
        }
    })
})

document.querySelectorAll('.page-link').forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
        const nextPage = link.getAttribute('href');

        document.body.classList.add('fade-out');

        setTimeout(() => {
            window.location.href = nextPage;
        }, 1000); 
    });
});


  
  
  
  

  







