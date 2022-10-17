const NavigationSidebar = (active) => {

    return (`
   <div class="list-group">
     <a class="list-group-item list-group-item-action" href="/">
       <i class="fab fa-twitter fa-lg"></i></a>
      
        <a href="../HomeScreen/index.html"
           class="list-group-item ${validate(active, 'home')}">
            <div class="row">
                <div class="col-3">
                    <i class="fas fa-home fa-lg ms-1"></i>
                </div>
                <div class="col-9 wd-text-color d-none d-xl-block">
                    Home
                </div>
            </div>
        </a>             
        <a href="../explore/index.html"
           class="list-group-item  ${validate(active, 'explore')}">
            <div class="row">
                <div class="col-3">
                    <i class="fas fa-hashtag fa-lg ms-1"></i>
                </div>
                <div class="col-9 wd-text-color d-none d-xl-block">
                    Explore
                </div>
            </div>
        </a>     
        <a href="#"
           class="list-group-item  ${validate(active, 'notifications')} ">
            <div class="row">
                <div class="col-3">
                    <i class="fas fa-bell fa-lg  ms-1"></i>
                </div>
                <div class="col-9 wd-text-color d-none d-xl-block">
                    Notifications
                </div>
            </div>
        </a>
        <a href="#"
           class="list-group-item  ${validate(active, 'messages')}">
            <div class="row">
                <div class="col-3">
                    <i class="fas fa-envelope fa-lg ms-1"></i>
                </div>
                <div class="col-9 wd-text-color d-none d-xl-block">
                    Messages
                </div>
            </div>
        </a>
        <a href="#"
           class="list-group-item  ${validate(active, 'bookmarks')}">
            <div class="row">
                <div class="col-3">
                    <i class="fas fa-bookmark fa-lg ms-1"></i>
                </div>
                <div class="col-9 wd-text-color d-none d-xl-block">
                    Bookmarks
                </div>
            </div>
        </a>
        <a href="#"
           class="list-group-item  ${validate(active, 'list')}">
            <div class="row">
                <div class="col-3">
                    <i class="fas fa-list fa-lg ms-1"></i>
                </div>
                <div class="col-9 wd-text-color d-none d-xl-block">
                    Lists
                </div>
            </div>
        </a>
        <a href="#"
           class="list-group-item  ${validate(active, 'profile')}">
            <div class="row">
                <div class="col-3">
                    <i class="fas fa-user fa-lg ms-1"></i>
                </div>
                <div class="col-9 wd-text-color d-none d-xl-block">
                    Profile
                </div>
            </div>
        </a>        
        <a href="#"
           class="list-group-item ${validate(active, 'more')}">
            <div class="row">
                <div class="col-3 ps-1">
                   <span class="fa-stack ms-0">
                    <i class="far fa-circle fa-inverse fa-lg fa-stack-1x "></i>
                    <i class="fas fa-ellipsis-h fa-inverse fa-xs fa-stack-1x "></i>
            </span>
                </div>
                <div class="col-9 wd-text-color d-none d-xl-block">
                    More
                </div>
            </div>
        </a>            
            
       <!-- continue rest of list, e.g.,
            Home, Explore, Notifications,  Messages, etc. -->
           
   </div>
   <div class="d-grid mt-2">
     <a href="tweet.html"
        class="btn btn-primary btn-block rounded-pill">
        Tweet</a>
   </div>
 `);
}
export default NavigationSidebar;

const validate = (val , checkWith) =>{
    if (val === checkWith) {
        return 'active'
    }
}