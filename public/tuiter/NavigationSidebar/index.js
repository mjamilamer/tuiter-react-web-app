const NavigationSidebar = () => {
    return (`
        <ul class="list-group  ">
            <li class="list-group-item override-border ">
                <i class="bi bi-twitter wd-twitter-blue"></i>
            </li>
            <li class="list-group-item override-border d-flex d-inline-block">
                <div class="wd-icon-container">
                    <i class="bi bi-house"></i>
                    <span class="wd-circle-icon"></span>
                    <span class="wd-center-circle-icon"></span>
                </div>

                <span class="d-none d-lg-block d-inline-block ps-2">  Home</span>
            </li>
            <li class="list-group-item override-border d-flex d-inline-block">
                <i class="fa fa-hashtag fa-1x"></i>
                <span class="d-none d-lg-block d-inline-block ps-2"> <b> Explore</b></span>
            </li>
            <li class="list-group-item override-border d-flex d-inline-block">
                <i class="bi bi-bell"></i>
                <span class="d-none d-lg-block d-inline-block ps-2">  Notifications</span>
            </li>
            <li class="list-group-item override-border d-flex d-inline-block">
                <i class="bi bi-envelope"></i>
                <span class="d-none d-lg-block d-inline-block ps-2">  Messages</span>
            </li>
            <li class="list-group-item override-border d-flex d-inline-block">
                <i class="bi bi-bookmark"></i>
                <span class="d-none d-lg-block d-inline-block ps-2">  Bookmarks</span>
            </li>
            <li class="list-group-item override-border d-flex d-inline-block">
                <i class="bi bi-fire"></i>
                <span class="d-none d-lg-block d-inline-block ps-2">  Top Articles</span>
            </li>
            <li class="list-group-item override-border d-flex d-inline-block">
                <i class="bi bi-person"></i>
                <span class="d-none d-lg-block d-inline-block ps-2">  Profile</span>
            </li>
            <li class="list-group-item override-border d-flex d-inline-block">        
                    <i class="bi bi-three-dots"></i>
                <span class="d-none d-lg-block d-inline-block ps-2">  More</span>
            </li>
            <button class="btn btn-primary mt-3 px-2 rounded-pill">Tuit</button>
        </ul>

 `);
}
export default NavigationSidebar;
