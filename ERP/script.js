    $(document).ready(function () {
      const $sidebar = $('#sidebar');
      const $overlay = $('#sidebarOverlay');

      const isMobile = () => window.innerWidth <= 768;

      function toggleSidebar() {
        if (isMobile()) {
          $sidebar.toggleClass('mobile-show');
          $overlay.toggleClass('mobile-show');
        } else {
          $('body').toggleClass('sidebar-collapsed');
        }
      }

      $('#toggleSidebar').click(toggleSidebar);

      $overlay.click(function () {
        $sidebar.removeClass('mobile-show');
        $overlay.removeClass('mobile-show');
      });

      toastr.options = {
        "closeButton": true,
        "progressBar": true,
        "positionClass": "toast-top-right",
        "timeOut": "3000"
      };

      $('#showToast').click(function () {
        toastr.success("Payroll processed successfully!", "Success");
      });

      $('#toggleDarkMode').click(function () {
        $('body').toggleClass('dark-mode');
        $(this).find('i').toggleClass('fa-moon fa-sun');
        toastr.info($('body').hasClass('dark-mode') ? "Dark mode enabled" : "Light mode enabled");
      });
    });