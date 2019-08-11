import 'bootstrap';

import { initSelect2 } from "../components/select2";

import { Modernizr } from "../components/modernizr";

initSelect2();

$(document).ready(function() {
    $(".dropdown-toggle").dropdown();
});

// $('body').on('shown.bs.modal', '.modal', function() {
//   $(this).find('select').each(function() {
//     var dropdownParent = $(document.body);
//     if ($(this).parents('.modal.in:first').length !== 0)
//       dropdownParent = $(this).parents('.modal.in:first');
//     $(this).select2({
//       dropdownParent: dropdownParent
//       // ...
//     });
//   });
// });
