//define objects variables functions






//use objects variables and functions(triggers)//
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
$(document).on("click", ".jsSignInButton", function (event) {
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

$(document).on("click", ".jsRegisterButton", function (event) {
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

$(document).on("click", ".jsDummyButton", function (event) {
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

$(document).on("click", ".signInButton", function (event) {
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

$(document).on("click", ".registerButton", function (event) {
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
$(document).on("click", ".jsMyLibrary", function (event) {
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

$(document).on("click", ".jsCreateRecipe", function (event) {
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
$(document).on("click", ".jsLogout", function (event) {
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
$(document).on("click", ".recipeLink", function (event) {
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
$(document).on("click", ".searchSubmit", function (event) {
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
$(document).on("click", ".searchSubmit", function (event) {
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
$(document).on("click", "#modifyAnchor", function (event) {
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
$(document).on("click", "#directionsAnchor", function (event) {
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
$(document).on("click", ".jsAddButton", function (event) {
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
$(document).on("click", ".jsDeleteButton", function (event) {
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
$(document).on("click", "#saveAnchor", function (event) {
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
$(document).on("click", "#deleteAnchor", function (event) {
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
$(document).on("click", "#jsCreateSaveButton", function (event) {
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
$(document).on("click", "#jsCancelSaveButton", function (event) {
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
$(document).on("click", ".dummySearchSubmit", function (event) {
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
$(document).on("click", ".logoHolder", function (event) {
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
$(document).on("click", "#failButton", function (event) {
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
$(document).on("click", ".searchRecipeResultOption", function (event) {
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
