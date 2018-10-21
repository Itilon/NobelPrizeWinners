import { template } from 'template';
import { materializeConfig } from 'materialize-config';

const $header = $('.main-header');
const $wrapper = $('.wrapper');

export async function getBioTemplate() {
    const headerTemplate = await template.getTemplate('header');
    const bioTemplate = await template.getTemplate('bio');

    $header.html(headerTemplate);
    $wrapper.html(bioTemplate);
    $(document).ready(() => {
        materializeConfig();
    });
}