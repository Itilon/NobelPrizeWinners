import $ from 'jquery';
import materialize from 'materialize';
import Sammy from 'sammy';

import { getHomeTemplate } from 'homeController';
import { getCategoryTemplate } from 'categoryController';

const sammyApp = Sammy(function() {
    this.get('/', getHomeTemplate);

    this.get('#/category/:id', getCategoryTemplate);

    $(() => {
        sammyApp.run();
    });
});