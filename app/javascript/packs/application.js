import 'bootstrap';

import { initSelect2 } from "../components/select2";

import { Modernizr } from "../components/modernizr";

initSelect2();

$(document).ready(function() {
    $(".dropdown-toggle").dropdown();
});

$('#my-select-2').select2({
    dropdownParent: $('#parent')
});
