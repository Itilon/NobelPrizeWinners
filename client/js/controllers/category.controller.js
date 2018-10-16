import { template } from 'template';

const $wrapper = $('.wrapper');

export async function getCategoryTemplate() {
    const categoryTemplate = await template.getTemplate('category');

    $wrapper.html(categoryTemplate);
}