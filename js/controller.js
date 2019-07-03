controller = new ScrollMagic.Controller();

var sceneCatColors = new ScrollMagic.Scene({triggerElement: "#catColors"})
					.addTo(controller)
					//.addIndicators(true) // add indicators (requires plugin)
					.on("enter", function (e) {
            $("#brandList").show();
            $("#compList").hide();
						$("#templateList").hide();
            $("#layoutList").hide();
            $(".inquiryType").removeClass("selected");
            var sectionClass = document.getElementById("brandList").children[0];
            $(sectionClass).addClass("selected");
            // console.log(sectionClass);
					})
          .on("leave", function (e) {
            $("#brandList").hide();
            $("#compList").hide();
						$("#templateList").hide();
            $("#layoutList").hide();
            $(".inquiryType").removeClass("selected");
            // console.log(sectionClass);
					})
          ;

var sceneCatTypography = new ScrollMagic.Scene({triggerElement: "#catTypography"})
					.addTo(controller)
					//.addIndicators(true) // add indicators (requires plugin)
					.on("enter", function (e) {
            $("#brandList").show();
            $("#compList").hide();
						$("#templateList").hide();
            $("#layoutList").hide();
            $(".inquiryType").removeClass("selected");
            var sectionClass = document.getElementById("brandList").children[1];
            $(sectionClass).addClass("selected");
            // console.log(sectionClass);
					})
          .on("leave", function (e) {
            if ( controllerActive == true ){
              $("#brandList").show();
              $("#compList").hide();
							$("#templateList").hide();
              $("#layoutList").hide();
              $(".inquiryType").removeClass("selected");
              var sectionClass = document.getElementById("brandList").children[0];
              $(sectionClass).addClass("selected");
            }
            // console.log(sectionClass);
					})
          ;


var sceneCatIconography = new ScrollMagic.Scene({triggerElement: "#catIconography"})
					.addTo(controller)
					//.addIndicators(true) // add indicators (requires plugin)
					.on("enter", function (e) {
            $("#brandList").show();
            $("#compList").hide();
						$("#templateList").hide();
            $("#layoutList").hide();
            $(".inquiryType").removeClass("selected");
            var sectionClass = document.getElementById("brandList").children[2];
            $(sectionClass).addClass("selected");
            // console.log(sectionClass);
					})
          .on("leave", function (e) {
            if ( controllerActive == true ){
              $("#brandList").show();
              $("#compList").hide();
							$("#templateList").hide();
              $("#layoutList").hide();
              $(".inquiryType").removeClass("selected");
              var sectionClass = document.getElementById("brandList").children[1];
              $(sectionClass).addClass("selected");
            }
            // console.log(sectionClass);
					})
          ;

var sceneCatGrid = new ScrollMagic.Scene({triggerElement: "#catGrid"})
					.addTo(controller)
					//.addIndicators(true) // add indicators (requires plugin)
					.on("enter", function (e) {
            $("#brandList").hide();
            $("#compList").show();
						$("#templateList").hide();
            $("#layoutList").hide();
            $(".inquiryType").removeClass("selected");
            var sectionClass = document.getElementById("compList").children[0];
            $(sectionClass).addClass("selected");
            // console.log(sectionClass);
					})
          .on("leave", function (e) {
            if ( controllerActive == true ){
              $("#brandList").show();
              $("#compList").hide();
							$("#templateList").hide();
              $("#layoutList").hide();
              $(".inquiryType").removeClass("selected");
              var sectionClass = document.getElementById("brandList").children[2];
              $(sectionClass).addClass("selected");
            }
            //console.log(sectionClass);
					})
          ;

var sceneCatNavigation = new ScrollMagic.Scene({triggerElement: "#catNavigation"})
					.addTo(controller)
					//.addIndicators(true) // add indicators (requires plugin)
					.on("enter", function (e) {
            $("#brandList").hide();
            $("#compList").show();
						$("#templateList").hide();
            $("#layoutList").hide();
            $(".inquiryType").removeClass("selected");
            var sectionClass = document.getElementById("compList").children[1];
            $(sectionClass).addClass("selected");
            // console.log(sectionClass);
					})
          .on("leave", function (e) {
            if ( controllerActive == true ){
              $("#brandList").hide();
              $("#compList").show();
							$("#templateList").hide();
              $("#layoutList").hide();
              $(".inquiryType").removeClass("selected");
              var sectionClass = document.getElementById("compList").children[0];
              $(sectionClass).addClass("selected");
            }
            //console.log(sectionClass);
					})
          ;

var sceneCatHeader = new ScrollMagic.Scene({triggerElement: "#catHeader"})
					.addTo(controller)
					//.addIndicators(true) // add indicators (requires plugin)
					.on("enter", function (e) {
            $("#brandList").hide();
            $("#compList").show();
						$("#templateList").hide();
            $("#layoutList").hide();
            $(".inquiryType").removeClass("selected");
            var sectionClass = document.getElementById("compList").children[2];
            $(sectionClass).addClass("selected");
            // console.log(sectionClass);
					})
          .on("leave", function (e) {
            if ( controllerActive == true ){
              $("#brandList").hide();
              $("#compList").show();
							$("#templateList").hide();
              $("#layoutList").hide();
              $(".inquiryType").removeClass("selected");
              var sectionClass = document.getElementById("compList").children[1];
              $(sectionClass).addClass("selected");
            }
            //console.log(sectionClass);
					})
          ;

var sceneCatButtons = new ScrollMagic.Scene({triggerElement: "#catButtons"})
					.addTo(controller)
					//.addIndicators(true) // add indicators (requires plugin)
					.on("enter", function (e) {
            $("#brandList").hide();
            $("#compList").show();
						$("#templateList").hide();
            $("#layoutList").hide();
            $(".inquiryType").removeClass("selected");
            var sectionClass = document.getElementById("compList").children[3];
            $(sectionClass).addClass("selected");
            // console.log(sectionClass);
					})
          .on("leave", function (e) {
            if ( controllerActive == true ){
              $("#brandList").hide();
              $("#compList").show();
              $("#layoutList").hide();
              $(".inquiryType").removeClass("selected");
              var sectionClass = document.getElementById("compList").children[2];
              $(sectionClass).addClass("selected");
            }
            //console.log(sectionClass);
					})
          ;

var sceneCatCards = new ScrollMagic.Scene({triggerElement: "#catCards"})
					.addTo(controller)
					//.addIndicators(true) // add indicators (requires plugin)
					.on("enter", function (e) {
            $("#brandList").hide();
            $("#compList").show();
						$("#templateList").hide();
            $("#layoutList").hide();
            $(".inquiryType").removeClass("selected");
            var sectionClass = document.getElementById("compList").children[4];
            $(sectionClass).addClass("selected");
            // console.log(sectionClass);
					})
          .on("leave", function (e) {
            if ( controllerActive == true ){
              $("#brandList").hide();
              $("#compList").show();
              $("#layoutList").hide();
              $(".inquiryType").removeClass("selected");
              var sectionClass = document.getElementById("compList").children[3];
              $(sectionClass).addClass("selected");
            }
            //console.log(sectionClass);
					})
          ;

var sceneCatControls = new ScrollMagic.Scene({triggerElement: "#catControls"})
					.addTo(controller)
					//.addIndicators(true) // add indicators (requires plugin)
					.on("enter", function (e) {
            $("#brandList").hide();
            $("#compList").show();
						$("#templateList").hide();
            $("#layoutList").hide();
            $(".inquiryType").removeClass("selected");
            var sectionClass = document.getElementById("compList").children[5];
            $(sectionClass).addClass("selected");
            // console.log(sectionClass);
					})
          .on("leave", function (e) {
            if ( controllerActive == true ){
              $("#brandList").hide();
              $("#compList").show();
							$("#templateList").hide();
              $("#layoutList").hide();
              $(".inquiryType").removeClass("selected");
              var sectionClass = document.getElementById("compList").children[4];
              $(sectionClass).addClass("selected");
            }
            //console.log(sectionClass);
					})
          ;

var sceneCatForm = new ScrollMagic.Scene({triggerElement: "#catForm"})
					.addTo(controller)
					//.addIndicators(true) // add indicators (requires plugin)
					.on("enter", function (e) {
            $("#brandList").hide();
            $("#compList").show();
						$("#templateList").hide();
            $("#layoutList").hide();
            $(".inquiryType").removeClass("selected");
            var sectionClass = document.getElementById("compList").children[6];
            $(sectionClass).addClass("selected");
            // console.log(sectionClass);
					})
          .on("leave", function (e) {
            if ( controllerActive == true ){
              $("#brandList").hide();
              $("#compList").show();
							$("#templateList").hide();
              $("#layoutList").hide();
              $(".inquiryType").removeClass("selected");
              var sectionClass = document.getElementById("compList").children[5];
              $(sectionClass).addClass("selected");
            }
            //console.log(sectionClass);
					})
          ;

var sceneCatTeamMember = new ScrollMagic.Scene({triggerElement: "#catTeamMember"})
					.addTo(controller)
					//.addIndicators(true) // add indicators (requires plugin)
					.on("enter", function (e) {
            $("#brandList").hide();
            $("#compList").show();
						$("#templateList").hide();
            $("#layoutList").hide();
            $(".inquiryType").removeClass("selected");
            var sectionClass = document.getElementById("compList").children[7];
            $(sectionClass).addClass("selected");
            // console.log(sectionClass);
					})
          .on("leave", function (e) {
            if ( controllerActive == true ){
              $("#brandList").hide();
              $("#compList").show();
							$("#templateList").hide();
              $("#layoutList").hide();
              $(".inquiryType").removeClass("selected");
              var sectionClass = document.getElementById("compList").children[6];
              $(sectionClass).addClass("selected");
            }
            //console.log(sectionClass);
					})
          ;

var sceneCatBreadcrumbs = new ScrollMagic.Scene({triggerElement: "#catBreadcrumbs"})
					.addTo(controller)
					//.addIndicators(true) // add indicators (requires plugin)
					.on("enter", function (e) {
            $("#brandList").hide();
            $("#compList").show();
						$("#templateList").hide();
            $("#layoutList").hide();
            $(".inquiryType").removeClass("selected");
            var sectionClass = document.getElementById("compList").children[8];
            $(sectionClass).addClass("selected");
            // console.log(sectionClass);
					})
          .on("leave", function (e) {
            if ( controllerActive == true ){
              $("#brandList").hide();
              $("#compList").show();
							$("#templateList").hide();
              $("#layoutList").hide();
              $(".inquiryType").removeClass("selected");
              var sectionClass = document.getElementById("compList").children[7];
              $(sectionClass).addClass("selected");
            }
            //console.log(sectionClass);
					})
          ;

var sceneCatMainContentStrategy = new ScrollMagic.Scene({triggerElement: "#catMainContentStrategy"})
					.addTo(controller)
					//.addIndicators(true) // add indicators (requires plugin)
					.on("enter", function (e) {
            $("#brandList").hide();
            $("#compList").hide();
						$("#templateList").show();
            $("#layoutList").hide();
            $(".inquiryType").removeClass("selected");
            var sectionClass = document.getElementById("templateList").children[0];
            $(sectionClass).addClass("selected");
            // console.log(sectionClass);
					})
          .on("leave", function (e) {
            if ( controllerActive == true ){
              $("#brandList").hide();
              $("#compList").show();
							$("#templateList").hide();
              $("#layoutList").hide();
              $(".inquiryType").removeClass("selected");
              var sectionClass = document.getElementById("compList").children[8];
              $(sectionClass).addClass("selected");
            }
            //console.log(sectionClass);
					})
          ;

var sceneCatMainHomepage = new ScrollMagic.Scene({triggerElement: "#catMainHomepage"})
					.addTo(controller)
					//.addIndicators(true) // add indicators (requires plugin)
					.on("enter", function (e) {
            $("#brandList").hide();
            $("#compList").hide();
						$("#templateList").show();
            $("#layoutList").hide();
            $(".inquiryType").removeClass("selected");
            var sectionClass = document.getElementById("templateList").children[1];
            $(sectionClass).addClass("selected");
            // console.log(sectionClass);
					})
          .on("leave", function (e) {
            if ( controllerActive == true ){
              $("#brandList").hide();
              $("#compList").hide();
							$("#templateList").show();
              $("#layoutList").hide();
              $(".inquiryType").removeClass("selected");
              var sectionClass = document.getElementById("templateList").children[0];
              $(sectionClass).addClass("selected");
            }
            //console.log(sectionClass);
					})
          ;

var sceneCatMainIndustryFocus = new ScrollMagic.Scene({triggerElement: "#catMainIndustryFocus"})
					.addTo(controller)
					//.addIndicators(true) // add indicators (requires plugin)
					.on("enter", function (e) {
            $("#brandList").hide();
            $("#compList").hide();
						$("#templateList").show();
            $("#layoutList").hide();
            $(".inquiryType").removeClass("selected");
            var sectionClass = document.getElementById("templateList").children[2];
            $(sectionClass).addClass("selected");
            // console.log(sectionClass);
					})
          .on("leave", function (e) {
            if ( controllerActive == true ){
              $("#brandList").hide();
              $("#compList").hide();
							$("#templateList").show();
              $("#layoutList").hide();
              $(".inquiryType").removeClass("selected");
              var sectionClass = document.getElementById("templateList").children[1];
              $(sectionClass).addClass("selected");
            }
            //console.log(sectionClass);
					})
          ;

var sceneCatMainResources = new ScrollMagic.Scene({triggerElement: "#catMainResources"})
					.addTo(controller)
					//.addIndicators(true) // add indicators (requires plugin)
					.on("enter", function (e) {
            $("#brandList").hide();
            $("#compList").hide();
						$("#templateList").show();
            $("#layoutList").hide();
            $(".inquiryType").removeClass("selected");
            var sectionClass = document.getElementById("templateList").children[3];
            $(sectionClass).addClass("selected");
            // console.log(sectionClass);
					})
          .on("leave", function (e) {
            if ( controllerActive == true ){
              $("#brandList").hide();
              $("#compList").hide();
							$("#templateList").show();
              $("#layoutList").hide();
              $(".inquiryType").removeClass("selected");
              var sectionClass = document.getElementById("templateList").children[2];
              $(sectionClass).addClass("selected");
            }
            //console.log(sectionClass);
					})
          ;

var sceneCatMainLocations = new ScrollMagic.Scene({triggerElement: "#catMainLocations"})
					.addTo(controller)
					//.addIndicators(true) // add indicators (requires plugin)
					.on("enter", function (e) {
            $("#brandList").hide();
            $("#compList").hide();
						$("#templateList").show();
            $("#layoutList").hide();
            $(".inquiryType").removeClass("selected");
            var sectionClass = document.getElementById("templateList").children[4];
            $(sectionClass).addClass("selected");
            // console.log(sectionClass);
					})
          .on("leave", function (e) {
            if ( controllerActive == true ){
              $("#brandList").hide();
              $("#compList").hide();
							$("#templateList").show();
              $("#layoutList").hide();
              $(".inquiryType").removeClass("selected");
              var sectionClass = document.getElementById("templateList").children[3];
              $(sectionClass).addClass("selected");
            }
            //console.log(sectionClass);
					})
          ;

var sceneCatMainContact = new ScrollMagic.Scene({triggerElement: "#catMainContact"})
					.addTo(controller)
					//.addIndicators(true) // add indicators (requires plugin)
					.on("enter", function (e) {
            $("#brandList").hide();
            $("#compList").hide();
						$("#templateList").show();
            $("#layoutList").hide();
            $(".inquiryType").removeClass("selected");
            var sectionClass = document.getElementById("templateList").children[5];
            $(sectionClass).addClass("selected");
            // console.log(sectionClass);
					})
          .on("leave", function (e) {
            if ( controllerActive == true ){
              $("#brandList").hide();
              $("#compList").hide();
							$("#templateList").show();
              $("#layoutList").hide();
              $(".inquiryType").removeClass("selected");
              var sectionClass = document.getElementById("templateList").children[4];
              $(sectionClass).addClass("selected");
            }
            //console.log(sectionClass);
					})
          ;

var sceneCatMicroHomepage = new ScrollMagic.Scene({triggerElement: "#catMicroHomepage"})
					.addTo(controller)
					//.addIndicators(true) // add indicators (requires plugin)
					.on("enter", function (e) {
            $("#brandList").hide();
            $("#compList").hide();
						$("#templateList").hide();
            $("#layoutList").show();
            $(".inquiryType").removeClass("selected");
            var sectionClass = document.getElementById("layoutList").children[0];
            $(sectionClass).addClass("selected");
            // console.log(sectionClass);
					})
          .on("leave", function (e) {
            if ( controllerActive == true ){
              $("#brandList").hide();
              $("#compList").hide();
							$("#templateList").show();
              $("#layoutList").hide();
              $(".inquiryType").removeClass("selected");
              var sectionClass = document.getElementById("templateList").children[5];
              $(sectionClass).addClass("selected");
            }
            //console.log(sectionClass);
					})
          ;

var sceneCatMicroHowWeHelp = new ScrollMagic.Scene({triggerElement: "#catMicroHowWeHelp"})
					.addTo(controller)
					//.addIndicators(true) // add indicators (requires plugin)
					.on("enter", function (e) {
            $("#brandList").hide();
            $("#compList").hide();
						$("#templateList").hide();
            $("#layoutList").show();
            $(".inquiryType").removeClass("selected");
            var sectionClass = document.getElementById("layoutList").children[1];
            $(sectionClass).addClass("selected");
            // console.log(sectionClass);
					})
          .on("leave", function (e) {
            if ( controllerActive == true ){
							$("#brandList").hide();
	            $("#compList").hide();
							$("#templateList").hide();
	            $("#layoutList").show();
	            $(".inquiryType").removeClass("selected");
	            var sectionClass = document.getElementById("layoutList").children[0];
	            $(sectionClass).addClass("selected");
            }
            //console.log(sectionClass);
					})
          ;

var sceneCatMicroHowWeHelpDetail = new ScrollMagic.Scene({triggerElement: "#catMicroHowWeHelpDetail"})
					.addTo(controller)
					//.addIndicators(true) // add indicators (requires plugin)
					.on("enter", function (e) {
            $("#brandList").hide();
            $("#compList").hide();
						$("#templateList").hide();
            $("#layoutList").show();
            $(".inquiryType").removeClass("selected");
            var sectionClass = document.getElementById("layoutList").children[2];
            $(sectionClass).addClass("selected");
            // console.log(sectionClass);
					})
          .on("leave", function (e) {
            if ( controllerActive == true ){
							$("#brandList").hide();
	            $("#compList").hide();
							$("#templateList").hide();
	            $("#layoutList").show();
	            $(".inquiryType").removeClass("selected");
	            var sectionClass = document.getElementById("layoutList").children[1];
	            $(sectionClass).addClass("selected");
            }
            //console.log(sectionClass);
					})
          ;

var sceneCatMicroBlog = new ScrollMagic.Scene({triggerElement: "#catMicroBlog"})
					.addTo(controller)
					//.addIndicators(true) // add indicators (requires plugin)
					.on("enter", function (e) {
            $("#brandList").hide();
            $("#compList").hide();
						$("#templateList").hide();
            $("#layoutList").show();
            $(".inquiryType").removeClass("selected");
            var sectionClass = document.getElementById("layoutList").children[3];
            $(sectionClass).addClass("selected");
            // console.log(sectionClass);
					})
          .on("leave", function (e) {
            if ( controllerActive == true ){
							$("#brandList").hide();
	            $("#compList").hide();
							$("#templateList").hide();
	            $("#layoutList").show();
	            $(".inquiryType").removeClass("selected");
	            var sectionClass = document.getElementById("layoutList").children[2];
	            $(sectionClass).addClass("selected");
            }
            //console.log(sectionClass);
					})
          ;

var sceneCatMicroEventsLanding = new ScrollMagic.Scene({triggerElement: "#catMicroEventsLanding"})
					.addTo(controller)
					//.addIndicators(true) // add indicators (requires plugin)
					.on("enter", function (e) {
            $("#brandList").hide();
            $("#compList").hide();
						$("#templateList").hide();
            $("#layoutList").show();
            $(".inquiryType").removeClass("selected");
            var sectionClass = document.getElementById("layoutList").children[4];
            $(sectionClass).addClass("selected");
            // console.log(sectionClass);
					})
          .on("leave", function (e) {
            if ( controllerActive == true ){
							$("#brandList").hide();
	            $("#compList").hide();
							$("#templateList").hide();
	            $("#layoutList").show();
	            $(".inquiryType").removeClass("selected");
	            var sectionClass = document.getElementById("layoutList").children[3];
	            $(sectionClass).addClass("selected");
            }
            //console.log(sectionClass);
					})
          ;

var sceneCatMicroEventsDetail = new ScrollMagic.Scene({triggerElement: "#catMicroEventsDetail"})
					.addTo(controller)
					//.addIndicators(true) // add indicators (requires plugin)
					.on("enter", function (e) {
            $("#brandList").hide();
            $("#compList").hide();
						$("#templateList").hide();
            $("#layoutList").show();
            $(".inquiryType").removeClass("selected");
            var sectionClass = document.getElementById("layoutList").children[5];
            $(sectionClass).addClass("selected");
            // console.log(sectionClass);
					})
          .on("leave", function (e) {
            if ( controllerActive == true ){
							$("#brandList").hide();
	            $("#compList").hide();
							$("#templateList").hide();
	            $("#layoutList").show();
	            $(".inquiryType").removeClass("selected");
	            var sectionClass = document.getElementById("layoutList").children[4];
	            $(sectionClass).addClass("selected");
            }
            //console.log(sectionClass);
					})
          ;

var sceneCatMicroLocations = new ScrollMagic.Scene({triggerElement: "#catMicroLocations"})
					.addTo(controller)
					//.addIndicators(true) // add indicators (requires plugin)
					.on("enter", function (e) {
            $("#brandList").hide();
            $("#compList").hide();
						$("#templateList").hide();
            $("#layoutList").show();
            $(".inquiryType").removeClass("selected");
            var sectionClass = document.getElementById("layoutList").children[6];
            $(sectionClass).addClass("selected");
            // console.log(sectionClass);
					})
          .on("leave", function (e) {
            if ( controllerActive == true ){
							$("#brandList").hide();
	            $("#compList").hide();
							$("#templateList").hide();
	            $("#layoutList").show();
	            $(".inquiryType").removeClass("selected");
	            var sectionClass = document.getElementById("layoutList").children[5];
	            $(sectionClass).addClass("selected");
            }
            //console.log(sectionClass);
					})
          ;
