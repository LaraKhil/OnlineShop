// global imports
import '../toggleSidebar.js';
import '../cart/toggleCart.js';
import '../cart/setupCart.js';


// specific imports
import { store } from '../store.js';
import display from '../displayProducts.js';
import { getElement } from '../utils.js';

const loading = getElement('.page-loading');

display(store, getElement('.products-container'));

loading.style.display = 'none';
