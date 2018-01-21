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

//search bar button --> fail scenario//
$('.searchSubmit').click(function (event) {
    event.preventDefault();
    $(".introScreen").hide();
    $(".signInScreen").hide();
    $(".createUsernameScreen").hide();
    $(".dummyAccountScreen").hide();
    $(".homeScreen").hide();
    $(".searchScreen").hide();
    $(".chosenFail").show();
    $(".recipeInfoScreen").hide();
    $(".createRecipeScreen").hide();
});

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

//save recipe button//
$('.').click(function (event) {
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

//delete recipe button//
$('.').click(function (event) {
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

//save created recipe button//
$('.').click(function (event) {
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

//cancel created recipe button//
$('.').click(function (event) {
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

//footer button????????//
$('.').click(function (event) {
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

//add ingredient button//
$('.').click(function (event) {
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
