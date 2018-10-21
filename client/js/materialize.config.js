export function materializeConfig() {
    $('.sidenav-trigger').sideNav({
        closeOnClick: true
    });
    
    $('.custom-btn').click(() => {
        $('.tap-target').tapTarget('open');
    });
};