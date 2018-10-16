import { template } from 'template';

const $header = $('.main-header');
const $wrapper = $('.wrapper');

export async function getHomeTemplate() {
    const headerTemplate = await template.getTemplate('header');
    const homeTemplate = await template.getTemplate('home');

    $header.html(headerTemplate);
    $wrapper.html(homeTemplate);
    $(document).ready(() => {
        $('.sidenav-trigger').sideNav({
            closeOnClick: true
        });
        
        $('.custom-btn').click(() => {
            $('.tap-target').tapTarget('open');
        })
    })
};