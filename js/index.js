var d = document;
controllerActive = true;

// $(document).ready(function(){
// });

$("#brandList").hide();
$("#compList").hide();
$("#templateList").hide();
$("#layoutList").hide();
$(".control-brand").on("click",function(){
    $("#brandList").show();
    $("#compList").hide();
    $("#templateList").hide();
    $("#layoutList").hide();
    // TweenLite.to(window, .6, { scrollTo:{y:"#catColors", offsetY:56}, ease:Expo.easeOut });
});
$(".control-comp").on("click",function(){
    $("#brandList").hide();
    $("#compList").show();
    $("#templateList").hide();
    $("#layoutList").hide();
    // TweenLite.to(window, .6, { scrollTo:{y:"#catGrid", offsetY:56}, ease:Expo.easeOut });
});
$(".control-templates").on("click",function(){
    $("#brandList").hide();
    $("#compList").hide();
    $("#templateList").show();
    $("#layoutList").hide();
    // TweenLite.to(window, .6, { scrollTo:{y:"#catGrid", offsetY:56}, ease:Expo.easeOut });
});
$(".control-layout").on("click",function(){
    $("#brandList").hide();
    $("#compList").hide();
    $("#templateList").hide();
    $("#layoutList").show();
});

$(".inquiryType").click (function() {
  $(".inquiryType").removeClass("selected");
  $(this).addClass("selected");
})


function scrollSection(section) {
  //console.log(section);
  controllerActive = false;
  pauseController();
  TweenLite.to(window, .6, { scrollTo:{ y:section, offsetY:64 }, ease:Expo.easeOut, onComplete:function() {
    resumeController();
  } });
}

function pauseController() {
  sceneCatColors.enabled(false);
  sceneCatTypography.enabled(false);
  sceneCatIconography.enabled(false);
  sceneCatGrid.enabled(false);
  sceneCatNavigation.enabled(false);
  sceneCatHeader.enabled(false);
  sceneCatButtons.enabled(false);
  sceneCatCards.enabled(false);
  sceneCatControls.enabled(false);
  sceneCatForm.enabled(false);
  sceneCatTeamMember.enabled(false);
  sceneCatBreadcrumbs.enabled(false);
  sceneCatMainHomepage.enabled(false);
  sceneCatMainIndustryFocus.enabled(false);
  sceneCatMainResources.enabled(false);
  sceneCatMainLocations.enabled(false);
  sceneCatMainContact.enabled(false);
  sceneCatMicroHomepage.enabled(false);
  sceneCatMicroHowWeHelp.enabled(false);
  sceneCatMicroHowWeHelpDetail.enabled(false);
  sceneCatMicroBlog.enabled(false);
  sceneCatMicroEventsLanding.enabled(false);
  sceneCatMicroEventsDetail.enabled(false);
  sceneCatMicroLocations.enabled(false);
}

function resumeController() {
  sceneCatColors.enabled(true);
  sceneCatTypography.enabled(true);
  sceneCatIconography.enabled(true);
  sceneCatGrid.enabled(true);
  sceneCatNavigation.enabled(true);
  sceneCatHeader.enabled(true);
  sceneCatButtons.enabled(true);
  sceneCatCards.enabled(true);
  sceneCatControls.enabled(true);
  sceneCatForm.enabled(true);
  sceneCatTeamMember.enabled(true);
  sceneCatBreadcrumbs.enabled(true);
  sceneCatMainHomepage.enabled(true);
  sceneCatMainIndustryFocus.enabled(true);
  sceneCatMainResources.enabled(true);
  sceneCatMainLocations.enabled(true);
  sceneCatMainContact.enabled(true);
  sceneCatMicroHomepage.enabled(true);
  sceneCatMicroHowWeHelp.enabled(true);
  sceneCatMicroHowWeHelpDetail.enabled(true);
  sceneCatMicroBlog.enabled(true);
  sceneCatMicroEventsLanding.enabled(true);
  sceneCatMicroEventsDetail.enabled(true);
  sceneCatMicroLocations.enabled(true);
  controllerActive = true;
}
