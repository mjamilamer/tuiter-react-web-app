const NavigationSidebar = (active) => {

    return (`
        <ul class="list-group  ">
            <li class="list-group-item override-border ">
                <i class="bi bi-twitter wd-twitter-blue"></i>
            </li>
            <li class="list-group-item override-border d-flex d-inline-block  ${active === 'home' ? 'active' : ''}">
            
                <a href="../HomeScreen/index.html" class="wd-icon-container text-white">
                    <i class="bi bi-house"></i>
                    <span class="wd-circle-icon"></span>
                    <span class="wd-center-circle-icon"></span>
                </a>

                <span class="d-none d-lg-block d-inline-block ps-2">  Home</span>
            </li>
            <li class="list-group-item override-border d-flex d-inline-block   ${active === 'explorer' ? 'active' : ''}"> 
                <a href="../ExplorerScreen/index.html" class="text-white">
                    <i class="fa fa-hashtag fa-1x"></i>
                </a>
                <span class="d-none d-lg-block d-inline-block ps-2"> <b> Explore</b></span>
            </li>
            <li class="list-group-item override-border d-flex d-inline-block  ${active === 'notifications' ? 'active' : ''}">
                <i class="bi bi-bell"></i>
                <span class="d-none d-lg-block d-inline-block ps-2">  Notifications</span>
            </li>
            <li class="list-group-item override-border d-flex d-inline-block  ${active === 'messages' ? 'active' : ''}">
                <i class="bi bi-envelope"></i>
                <span class="d-none d-lg-block d-inline-block ps-2">  Messages</span>
            </li>
            <li class="list-group-item override-border d-flex d-inline-block  ${active === 'bookmarks' ? 'active' : ''}">
                <i class="bi bi-bookmark"></i>
                <span class="d-none d-lg-block d-inline-block ps-2">  Bookmarks</span>
            </li>
            <li class="list-group-item override-border d-flex d-inline-block  ${active === 'toparticles' ? 'active' : ''}">
                <i class="bi bi-fire"></i>
                <span class="d-none d-lg-block d-inline-block ps-2">  Top Articles</span>
            </li>
            <li class="list-group-item override-border d-flex d-inline-block  ${active === 'profile' ? 'active' : ''}">
                <i class="bi bi-person"></i>
                <span class="d-none d-lg-block d-inline-block ps-2">  Profile</span>
            </li>
            <li class="list-group-item override-border d-flex d-inline-block  ${active === 'more' ? 'active' : ''}">        
                    <i class="bi bi-three-dots"></i>
                <span class="d-none d-lg-block d-inline-block ps-2">  More</span>
            </li>
            <button class="btn btn-primary mt-3 px-2 rounded-pill">Tuit</button>
        </ul>

 `);
}
export default NavigationSidebar;
