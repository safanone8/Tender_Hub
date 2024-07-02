
    // $(document).ready(function() {
    //     $('#searchForm').submit(function(event) {
    //         event.preventDefault();  // Prevent form submission

    //         // Get the search input value
    //         var searchTerm = $('#searchInput').val().toLowerCase().trim();

    //         // Example service URLs (replace with actual URLs)
    //         var services = {
    //             'gem registration': 'services/gem-registration.html',
    //             'product uploading': 'services/product-uploading.html',
    //             'tender bidding': 'services/tender-bidding.html',
    //             'iso certificate': 'services/iso-certificate.html',
    //             'ce certificate': 'services/ce-certificate.html',
    //             'who-gmp certificate': 'services/who-gmp-certificate.html',
    //             'startup certificate': 'services/startup-certificate.html',
    //             'fssai licence': 'services/fssai-licence.html',
    //             'dsc certificate': 'services/dsc-certificate.html'
    //             // Add more as needed
    //         };

    //         // Check if the searched term exists in services
    //         if (services.hasOwnProperty(searchTerm)) {
    //             var serviceUrl = services[searchTerm];
    //             window.location.href = serviceUrl;  // Redirect to service URL
    //         } else {
    //             alert('Service not found.');  // Alert if service not found
    //         }
    //     });
    // });



    $(document).ready(function() {
        $('#searchForm').submit(function(event) {
            event.preventDefault();  // Prevent form submission

            // Get the search input value
            var searchTerm = $('#searchInput').val().toLowerCase().trim();

            // Find matching service based on data-title attribute
            var $matchedService = $('.service').filter(function() {
                return $(this).data('title') === searchTerm;
            });

            // Check if service is found
            if ($matchedService.length > 0) {
                // Redirect to the matched service section
                var offsetTop = $matchedService.offset().top;
                $('html, body').animate({
                    scrollTop: offsetTop
                }, 1000);  // Adjust animation speed as needed
            } else {
                alert('Service not found.');  // Alert if service not found
            }
        });
    });

