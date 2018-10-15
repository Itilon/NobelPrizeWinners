import $ from 'jquery';
import materialize from 'materialize';
import Sammy from 'sammy';

import { getHomeTemplate } from 'homeController';

const sammyApp = Sammy(function() {
    this.get('/', getHomeTemplate);

    $(() => {
        sammyApp.run();
    });
});