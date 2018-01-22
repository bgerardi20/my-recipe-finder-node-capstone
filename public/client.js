//define objects variables functions






//use objects variables and functions(triggers)
$(document).ready(function () {
    $(".introScreen").show();
    $(".signInScreen").hide();
    $(".createUsernameScreen").hide();
    $(".dummyAccountScreen").hide();
    $(".homeScreen").hide();
    $(".searchScreen").hide();
    $(".chosenFail").hide();
    $(".recipeInfoScreen").hide();
    $(".createRecipeScreen").hide();
});


//create triggers that work with the buttons
$('.jsSignInButton').click(function (event) {
    event.preventDefault();
    $(".introScreen").hide();
    $(".signInScreen").show();
    $(".createUsernameScreen").hide();
    $(".dummyAccountScreen").hide();
    $(".homeScreen").hide();
    $(".searchScreen").hide();
    $(".chosenFail").hide();
    $(".recipeInfoScreen").hide();
    $(".createRecipeScreen").hide();
});

$('.jsRegisterButton').click(function (event) {
    event.preventDefault();
    $(".introScreen").hide();
    $(".signInScreen").hide();
    $(".createUsernameScreen").show();
    $(".dummyAccountScreen").hide();
    $(".homeScreen").hide();
    $(".searchScreen").hide();
    $(".chosenFail").hide();
    $(".recipeInfoScreen").hide();
    $(".createRecipeScreen").hide();
});

$('.jsDummyButton').click(function (event) {
    event.preventDefault();
    $(".introScreen").hide();
    $(".signInScreen").hide();
    $(".createUsernameScreen").hide();
    $(".dummyAccountScreen").show();
    $(".homeScreen").hide();
    $(".searchScreen").hide();
    $(".chosenFail").hide();
    $(".recipeInfoScreen").hide();
    $(".createRecipeScreen").hide();
});

$('.signInButton').click(function (event) {
    event.preventDefault();
    $(".introScreen").hide();
    $(".signInScreen").hide();
    $(".createUsernameScreen").hide();
    $(".dummyAccountScreen").hide();
    $(".homeScreen").show();
    $(".searchScreen").hide();
    $(".chosenFail").hide();
    $(".recipeInfoScreen").hide();
    $(".createRecipeScreen").hide();
});

$('.registerButton').click(function (event) {
    event.preventDefault();
    $(".introScreen").hide();
    $(".signInScreen").show();
    $(".createUsernameScreen").hide();
    $(".dummyAccountScreen").hide();
    $(".homeScreen").hide();
    $(".searchScreen").hide();
    $(".chosenFail").hide();
    $(".recipeInfoScreen").hide();
    $(".createRecipeScreen").hide();
});

//nav bar options//
$('.jsMyLibrary').click(function (event) {
    event.preventDefault();
    $(".introScreen").hide();
    $(".signInScreen").hide();
    $(".createUsernameScreen").hide();
    $(".dummyAccountScreen").hide();
    $(".homeScreen").show();
    $(".searchScreen").hide();
    $(".chosenFail").hide();
    $(".recipeInfoScreen").hide();
    $(".createRecipeScreen").hide();
});

$('.jsCreateRecipe').click(function (event) {
    event.preventDefault();
    $(".introScreen").hide();
    $(".signInScreen").hide();
    $(".createUsernameScreen").hide();
    $(".dummyAccountScreen").hide();
    $(".homeScreen").hide();
    $(".searchScreen").hide();
    $(".chosenFail").hide();
    $(".recipeInfoScreen").hide();
    $(".createRecipeScreen").show();
});

//---------------------------------------------return to login page or intro screen? ----------------------------------------
$('.jsLogout').click(function (event) {
    event.preventDefault();
    $(".introScreen").hide();
    $(".signInScreen").show();
    $(".createUsernameScreen").hide();
    $(".dummyAccountScreen").hide();
    $(".homeScreen").hide();
    $(".searchScreen").hide();
    $(".chosenFail").hide();
    $(".recipeInfoScreen").hide();
    $(".createRecipeScreen").hide();
});
//end of nav bar options

//recipe img --> recipe info//
$('.recipeLink').click(function (event) {
    event.preventDefault();
    $(".introScreen").hide();
    $(".signInScreen").hide();
    $(".createUsernameScreen").hide();
    $(".dummyAccountScreen").hide();
    $(".homeScreen").hide();
    $(".searchScreen").hide();
    $(".chosenFail").hide();
    $(".recipeInfoScreen").show();
    $(".createRecipeScreen").hide();
});

//search bar button --> success scenario//
$('.searchSubmit').click(function (event) {
    event.preventDefault();
    $(".introScreen").hide();
    $(".signInScreen").hide();
    $(".createUsernameScreen").hide();
    $(".dummyAccountScreen").hide();
    $(".homeScreen").hide();
    $(".searchScreen").show();
    $(".chosenFail").hide();
    $(".recipeInfoScreen").hide();
    $(".createRecipeScreen").hide();
});

////search bar button --> fail scenario//
//$('.searchSubmit').click(function (event) {
//    event.preventDefault();
//    $(".introScreen").hide();
//    $(".signInScreen").hide();
//    $(".createUsernameScreen").hide();
//    $(".dummyAccountScreen").hide();
//    $(".homeScreen").hide();
//    $(".searchScreen").hide();
//    $(".chosenFail").show();
//    $(".recipeInfoScreen").hide();
//    $(".createRecipeScreen").hide();
//});

//recipe info screen(modify button)//
$('#modifyAnchor').click(function (event) {
    event.preventDefault();
    $(".introScreen").hide();
    $(".signInScreen").hide();
    $(".createUsernameScreen").hide();
    $(".dummyAccountScreen").hide();
    $(".homeScreen").hide();
    $(".searchScreen").hide();
    $(".chosenFail").hide();
    $(".recipeInfoScreen").show();
    $(".createRecipeScreen").hide();
    $(".ingredientsContainer").show();
    $(".modsList").show();

});

//recipe info screen(directions button-going to a different url)// ////////////////////////////////////need help///////////////////////////////////
$('#directionsAnchor').click(function (event) {
    event.preventDefault();
    $(".introScreen").hide();
    $(".signInScreen").hide();
    $(".createUsernameScreen").hide();
    $(".dummyAccountScreen").hide();
    $(".homeScreen").hide();
    $(".searchScreen").hide();
    $(".chosenFail").hide();
    $(".recipeInfoScreen").hide();
    $(".createRecipeScreen").hide();
});

//add ingredient button//
$('.jsAddButton').click(function (event) {
    event.preventDefault();
    $(".introScreen").hide();
    $(".signInScreen").hide();
    $(".createUsernameScreen").hide();
    $(".dummyAccountScreen").hide();
    $(".homeScreen").hide();
    $(".searchScreen").hide();
    $(".chosenFail").hide();
    $(".recipeInfoScreen").show();
    $(".createRecipeScreen").hide();
    $(".ingredientsContainer").hide();
    $(".modsList").show();
});

//delete ingredient button//
$('.jsDeleteButton').click(function (event) {
    event.preventDefault();
    $(".introScreen").hide();
    $(".signInScreen").hide();
    $(".createUsernameScreen").hide();
    $(".dummyAccountScreen").hide();
    $(".homeScreen").hide();
    $(".searchScreen").hide();
    $(".chosenFail").hide();
    $(".recipeInfoScreen").show();
    $(".createRecipeScreen").hide();
    $(".ingredientsContainer").hide();
    $(".modsList").show();
});

//save recipe button//  ----------------------------------------------should i send this one to the library home page or the recipe info screen? ------------------------------
$('#saveAnchor').click(function (event) {
    event.preventDefault();
    $(".introScreen").hide();
    $(".signInScreen").hide();
    $(".createUsernameScreen").hide();
    $(".dummyAccountScreen").hide();
    $(".homeScreen").hide();
    $(".searchScreen").hide();
    $(".chosenFail").hide();
    $(".recipeInfoScreen").show();
    $(".createRecipeScreen").hide();
    $(".ingredientsContainer").hide();
    $(".modsList").hide();
});

//delete recipe button//
$('#deleteAnchor').click(function (event) {
    event.preventDefault();
    $(".introScreen").hide();
    $(".signInScreen").hide();
    $(".createUsernameScreen").hide();
    $(".dummyAccountScreen").hide();
    $(".homeScreen").show();
    $(".searchScreen").hide();
    $(".chosenFail").hide();
    $(".recipeInfoScreen").hide();
    $(".createRecipeScreen").hide();
});

//save created recipe button---> recipe info screen about newly created recipe//
$('#jsCreateSaveButton').click(function (event) {
    event.preventDefault();
    $(".introScreen").hide();
    $(".signInScreen").hide();
    $(".createUsernameScreen").hide();
    $(".dummyAccountScreen").hide();
    $(".homeScreen").hide();
    $(".searchScreen").hide();
    $(".chosenFail").hide();
    $(".recipeInfoScreen").show();
    $(".createRecipeScreen").hide();
});

//cancel created recipe button//
$('#jsCancelSaveButton').click(function (event) {
    event.preventDefault();
    $(".introScreen").hide();
    $(".signInScreen").hide();
    $(".createUsernameScreen").hide();
    $(".dummyAccountScreen").hide();
    $(".homeScreen").show();
    $(".searchScreen").hide();
    $(".chosenFail").hide();
    $(".recipeInfoScreen").hide();
    $(".createRecipeScreen").hide();
});

//dummy acount search bar button//
$('.dummySearchSubmit').click(function (event) {
    event.preventDefault();
    $(".introScreen").hide();
    $(".signInScreen").hide();
    $(".createUsernameScreen").show();
    $(".dummyAccountScreen").hide();
    $(".homeScreen").hide();
    $(".searchScreen").hide();
    $(".chosenFail").hide();
    $(".recipeInfoScreen").hide();
    $(".createRecipeScreen").hide();
    alert('Please create an account to search and save thousands of recipes!');
});

//logo---->intro screen//
$('.logoHolder').click(function (event) {
    event.preventDefault();
    $(".introScreen").show();
    $(".signInScreen").hide();
    $(".createUsernameScreen").hide();
    $(".dummyAccountScreen").hide();
    $(".homeScreen").hide();
    $(".searchScreen").hide();
    $(".chosenFail").hide();
    $(".recipeInfoScreen").hide();
    $(".createRecipeScreen").hide();
});

//fail scenario-add to recipe button//
$('#failButton').click(function (event) {
    event.preventDefault();
    $(".introScreen").hide();
    $(".signInScreen").hide();
    $(".createUsernameScreen").hide();
    $(".dummyAccountScreen").hide();
    $(".homeScreen").show();
    $(".searchScreen").hide();
    $(".chosenFail").hide();
    $(".recipeInfoScreen").hide();
    $(".createRecipeScreen").hide();
});

//success scenario-add to recipe button//
$('.searchRecipeResultOption').click(function (event) {
    event.preventDefault();
    $(".introScreen").hide();
    $(".signInScreen").hide();
    $(".createUsernameScreen").hide();
    $(".dummyAccountScreen").hide();
    $(".homeScreen").show();
    $(".searchScreen").hide();
    $(".chosenFail").hide();
    $(".recipeInfoScreen").hide();
    $(".createRecipeScreen").hide();
});
