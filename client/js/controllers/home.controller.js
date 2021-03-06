import { template } from 'template';
import { materializeConfig } from 'materialize-config';

const $header = $('.main-header');
const $wrapper = $('.wrapper');

export async function getHomeTemplate() {
    const headerTemplate = await template.getTemplate('header');
    const homeTemplate = await template.getTemplate('home');

    $header.html(headerTemplate);
    $wrapper.html(homeTemplate);
    $(document).ready(() => {
        materializeConfig();
    });
};