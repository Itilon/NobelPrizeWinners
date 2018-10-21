import { template } from 'template';
import { materializeConfig } from 'materialize-config';

const $header = $('.main-header');
const $wrapper = $('.wrapper');

export async function getCategoryTemplate() {
    const headerTemplate = await template.getTemplate('header');
    const categoryTemplate = await template.getTemplate('category');

    $header.html(headerTemplate);
    $wrapper.html(categoryTemplate);
    $(document).ready(() => {
        materializeConfig();
    });
};