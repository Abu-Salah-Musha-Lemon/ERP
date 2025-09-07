

$(document).ready(function () {
  const isMobile = () => window.innerWidth <= 768;

  function toggleSidebar() {
    const $sidebar = $('#sidebar');

    if (isMobile()) {
      $sidebar.toggleClass('show');
    } else {
      $sidebar.toggleClass('collapsed');
      $('body').toggleClass('sidebar-closed');
    }
  }

  // Toggle sidebar
  $('#toggleSidebar').click(toggleSidebar);

  // Toastr notification
  toastr.options = {
    "closeButton": true,
    "progressBar": true,
    "positionClass": "toast-top-right",
    "timeOut": "3000"
  };

  $('#showToast').click(function () {
    toastr.success("Payroll processed successfully!", "Success");
  });
});
