import $ from "jquery";
import select2 from "select2";
import 'select2/dist/css/select2.css';

$(() => {
  $('.select2-enable').select2();
});

const initSelect2 = () => {
  $(document).ready(function() {
      $('.ingredient-select').select2();
  });
}

export { initSelect2 };
