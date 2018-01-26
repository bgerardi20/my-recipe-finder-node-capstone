//define objects variables functions
let loginUserEmail = "";
let loginUserId = "";

function displayRecipes(userId) {
    $.ajax({
            type: "GET",
            url: '/recipes/' + userId,
            dataType: 'json',
        })
        .done(function (dataOutput) {
            //            console.log(dataOutput);
            //displays the external api json object in the console
            displayRecipeResult(dataOutput.recipes);
            displayRecipeDetailsResult(dataOutput.recipes);
        })
        .fail(function (jqXHR, error, errorThrown) {
            console.log(jqXHR);
            console.log(error);
            console.log(errorThrown);
        });
}

function displayRecipeFromEdamam(dataFromApi) {
    console.log(dataFromApi);
    var buildTheHtmlOutput = "";
    $.each(dataFromApi.hits, function (dataKey, dataValue) {
        buildTheHtmlOutput += '<li class="searchRecipeResultOption">';
        buildTheHtmlOutput += '<div class="object">';
        buildTheHtmlOutput += '<a class="searchRecipeResultsLink" href="#">';
        buildTheHtmlOutput += '<span class="searchRecipeImgContainer">';
        buildTheHtmlOutput += '<img class="searchRecipeImg" src="' + dataValue.recipe.image + '" alt="pasta">';
        buildTheHtmlOutput += '</span>';
        buildTheHtmlOutput += '</a>';
        buildTheHtmlOutput += '</div>';

        buildTheHtmlOutput += '<h3 class="resultsTitle">' + dataValue.recipe.label + '</h3><br>';

        buildTheHtmlOutput += '<div class="data">';
        buildTheHtmlOutput += '<a class="cal" href="#">';
        buildTheHtmlOutput += '<span class="num">375</span>';
        buildTheHtmlOutput += '<span class="info">calories</span>';
        buildTheHtmlOutput += '</a>';
        buildTheHtmlOutput += '<a class="ing" href="#">';
        buildTheHtmlOutput += '<span class="num">4</span>';
        buildTheHtmlOutput += '<span class="info">ingredients</span>';
        buildTheHtmlOutput += '</a>';
        buildTheHtmlOutput += '</div>';

        buildTheHtmlOutput += '<div class="addButton">';
        buildTheHtmlOutput += '<button type="submit" class="addSuccessButton green jsSuccessButton" id="add">Add</button>';
        buildTheHtmlOutput += '</div>';
        buildTheHtmlOutput += '</li>';
        //        buildTheHtmlOutput += '<a class="recipeLink" href="#">';
        //        buildTheHtmlOutput += '<div class="recipeImgContainer">';
        //        buildTheHtmlOutput += '<img class="recipeImg" src="https://www.budgetbytes.com/wp-content/uploads/2017/06/Grilled-Vegetable-Pasta-Salad-H-380x380.jpg" alt="pasta">';
        //        buildTheHtmlOutput += '</div>';
        //        buildTheHtmlOutput += '<h2 class="recipeTitle">' + dataValue.title + '</h2>';
        //        buildTheHtmlOutput += '</a>';
    })
    $(".resultsList").html(buildTheHtmlOutput);
};

function displayRecipeResult(dataOutput) {
    var buildTheHtmlOutput = "";
    $.each(dataOutput, function (dataKey, dataValue) {
        buildTheHtmlOutput += '<a class="recipeLink" href="#">';
        buildTheHtmlOutput += '<div class="recipeImgContainer">';
        buildTheHtmlOutput += '<img class="recipeImg" src="https://www.budgetbytes.com/wp-content/uploads/2017/06/Grilled-Vegetable-Pasta-Salad-H-380x380.jpg" alt="pasta">';
        buildTheHtmlOutput += '</div>';
        buildTheHtmlOutput += '<h2 class="recipeTitle">' + dataValue.title + '</h2>';
        buildTheHtmlOutput += '</a>';
    })
    $(".recipeSnippetContainer").html(buildTheHtmlOutput);
};

function displayRecipeDetailsResult(dataFromApi) {
    //    console.log(dataFromApi);
    var buildTheHtmlOutput = "";
    $.each(dataFromApi, function (dataKey, dataValue) {
        buildTheHtmlOutput += '<ul class="recipeInsideContainer" id="">';
        buildTheHtmlOutput += '<li>';
        buildTheHtmlOutput += '<img class="searchRecipeImg" src="https://www.budgetbytes.com/wp-content/uploads/2017/06/Grilled-Vegetable-Pasta-Salad-H-380x380.jpg" alt="pasta">';
        buildTheHtmlOutput += '</li><br>';
        buildTheHtmlOutput += '<li>';
        buildTheHtmlOutput += '<h2 class="chosenTitle">' + dataValue.title + '</h2><br>';
        buildTheHtmlOutput += '</li ><br>';
        buildTheHtmlOutput += '<li>';
        buildTheHtmlOutput += '<h3 class="ingredTitle">Ingredients:</h3>';
        buildTheHtmlOutput += '<div class="chosenList">';
        buildTheHtmlOutput += '<p class="chosenIngr">' + dataValue.ingredients + '</p><br>';
        buildTheHtmlOutput += '</div>';
        buildTheHtmlOutput += '</li><br>';
        buildTheHtmlOutput += '<li>';
        buildTheHtmlOutput += '<div class="recipeButtonContainer">';
        buildTheHtmlOutput += '<button id="modifyAnchor" type="button">Modify</button>';
        buildTheHtmlOutput += '<button id="directionsAnchor" type="button">Directions</button>';
        buildTheHtmlOutput += '</div>';
        buildTheHtmlOutput += '</li><br>';
        buildTheHtmlOutput += '<li>';
        buildTheHtmlOutput += '<div class="ingredientsContainer">';
        buildTheHtmlOutput += '<label class="ingredientsLabel" for="ingredients">Add:</label>';
        buildTheHtmlOutput += '<input type="text" name="ingredients" class="ingredients" placeholder="Ingredient">';
        buildTheHtmlOutput += '<div class="addRemove">';
        buildTheHtmlOutput += '<span>';
        buildTheHtmlOutput += '<span>';
        buildTheHtmlOutput += '<a class="jsAddButton" href="#"><i class="fa fa-plus-circle fa-lg ingredients-adder" aria-hidden="true"></i></a>';
        buildTheHtmlOutput += '</span>';
        buildTheHtmlOutput += '<span>';
        buildTheHtmlOutput += '<a class="jsDeleteButton" href="#"><i class="fa fa-minus-circle fa-lg js-input-delete" aria-hidden="true"></i></a>';
        buildTheHtmlOutput += '</span>';
        buildTheHtmlOutput += '</span>';
        buildTheHtmlOutput += '</div>';
        buildTheHtmlOutput += '</div>';
        buildTheHtmlOutput += '</li><br>';
        buildTheHtmlOutput += '<li>';
        buildTheHtmlOutput += '<ul class="modsList">';
        buildTheHtmlOutput += '<li class="chosenIng">Mods</li>';
        buildTheHtmlOutput += '<li class="chosenIng">Mods</li>';
        buildTheHtmlOutput += '<li class="chosenIng">Mods</li>';
        buildTheHtmlOutput += '</ul>';
        buildTheHtmlOutput += '</li><br>';
        buildTheHtmlOutput += '<li>';
        buildTheHtmlOutput += '<div class="recipeButtonContainer">';
        buildTheHtmlOutput += '<button type="button" class="recipeButton green" id="saveAnchor">Save</button>';
        buildTheHtmlOutput += '<button type="button" class="recipeButton red" id="deleteAnchor">Delete</button>';
        buildTheHtmlOutput += '</div>';
        buildTheHtmlOutput += '</li><br>';
        buildTheHtmlOutput += '</ul>';
    })
    $(".recipeOutsideContainer").html(buildTheHtmlOutput);
};



//use objects variables and functions(triggers)//
$(document).ready(function () {
    $(".introScreen").show();
    $(".signInScreen").hide();
    $(".createUsernameScreen").hide();
    $(".dummyAccountScreen").hide();
    $(".homeScreen").hide();
    $(".searchScreen").hide();
    //$(".chosenFail").hide();
    $(".recipeInfoScreen").hide();
    $(".createRecipeScreen").hide();
    $(".navList").hide();
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
    //$(".chosenFail").hide();
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
    //$(".chosenFail").hide();
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
    //$(".chosenFail").hide();
    $(".recipeInfoScreen").hide();
    $(".createRecipeScreen").hide();
});

$(document).on("click", ".signInButton", function (event) {
    event.preventDefault();
    //get input from the user//
    let email = $('#signInEmail').val();
    let password = $('#signInPassword').val();
    console.log(email, password);
    //validate the input//
    if (email.length == 0) {
        alert('Please add email!');
    } else if (password.length == 0) {
        alert('Please add password!');
    } else {
        //if input is valid; register the user//
        const signInUserObject = {
            email: email,
            password: password
        };
        // create ajax call to register the user//
        $.ajax({
                type: 'POST',
                url: '/users/signin',
                dataType: 'json',
                data: JSON.stringify(signInUserObject),
                contentType: 'application/json'
            })
            //if registation is successful
            .done(function (result) {
                console.log(result._id);
                console.log(result.email);
                loginUserEmail = result.email;
                loginUserId = result._id;
                displayRecipes(loginUserId);
                $(".loggedInUser").val(loginUserId);
                $(".introScreen").hide();
                $(".signInScreen").hide();
                $(".createUsernameScreen").hide();
                $(".dummyAccountScreen").hide();
                $(".homeScreen").show();
                $(".searchScreen").hide();
                //$(".chosenFail").hide();
                $(".recipeInfoScreen").hide();
                $(".createRecipeScreen").hide();
                $(".navList").show();
            })
            //if registration fails
            .fail(function (jqXHR, error, errorThrown) {
                console.log(jqXHR);
                console.log(error);
                console.log(errorThrown);
            });
    };

});

$(document).on("click", ".registerButton", function (event) {
    event.preventDefault();
    //get input from the user//
    let name = $('#registerName').val();
    let email = $('#registerEmail').val();
    let password = $('#registerPassword').val();
    let confirmPassword = $('#registerConfirmPassword').val();
    console.log(name, email, password, confirmPassword);
    //validate the input//
    if (name.length == 0) {
        alert('Please add name!');
    } else if (email.length == 0) {
        alert('Please add email!');
    } else if (password.length == 0) {
        alert('Please add password!');
    } else if (password !== confirmPassword) {
        alert('Passwords must match!');
    } else {
        //if input is valid; register the user//
        const newUserObject = {
            name: name,
            email: email,
            password: password
        };
        // create ajax call to register the user//
        $.ajax({
                type: 'POST',
                url: '/users/create',
                dataType: 'json',
                data: JSON.stringify(newUserObject),
                contentType: 'application/json'
            })
            //if registation is successful
            .done(function (result) {
                console.log(result);
                alert('Thanks for signing up! You may now sign in with your username and password.');
                $(".introScreen").hide();
                $(".signInScreen").show();
                $(".createUsernameScreen").hide();
                $(".dummyAccountScreen").hide();
                $(".homeScreen").hide();
                $(".searchScreen").hide();
                //$(".chosenFail").hide();
                $(".recipeInfoScreen").hide();
                $(".createRecipeScreen").hide();
            })
            //if registration fails
            .fail(function (jqXHR, error, errorThrown) {
                console.log(jqXHR);
                console.log(error);
                console.log(errorThrown);
            });
    };
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
    //$(".chosenFail").hide();
    $(".recipeInfoScreen").hide();
    $(".createRecipeScreen").hide();
    $(".ingredientsContainer").hide();
    $(".modsList").hide();
});

$(document).on("click", ".jsCreateRecipe", function (event) {
    event.preventDefault();
    $(".introScreen").hide();
    $(".signInScreen").hide();
    $(".createUsernameScreen").hide();
    $(".dummyAccountScreen").hide();
    $(".homeScreen").hide();
    $(".searchScreen").hide();
    //$(".chosenFail").hide();
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
    //$(".chosenFail").hide();
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
    //$(".chosenFail").hide();
    $(".recipeInfoScreen").show();
    $(".createRecipeScreen").hide();
});

//search bar button --> success scenario//
$(document).on("click", ".searchSubmit", function (event) {
    event.preventDefault();
    let searchBarInput = $('#recipeSearchInput').val();
    console.log(searchBarInput);
    //validate the input//
    if (searchBarInput.length == 0) {
        alert('Please search for a recipe!');
    } else {
        $.ajax({
                type: "GET",
                url: '/get-recipes-from-edamam/' + searchBarInput,
                dataType: 'json',
            })
            .done(function (dataOutput) {
                //                console.log(dataOutput);
                displayRecipeFromEdamam(dataOutput);
                $(".introScreen").hide();
                $(".signInScreen").hide();
                $(".createUsernameScreen").hide();
                $(".dummyAccountScreen").hide();
                $(".homeScreen").hide();
                $(".searchScreen").show();
                //$(".chosenFail").hide();
                $(".recipeInfoScreen").hide();
                $(".createRecipeScreen").hide();
                //displays the external api json object in the console
                //                displayRecipeResult(dataOutput.recipes);
                //                displayRecipeDetailsResult(dataOutput.recipes);
            })
            .fail(function (jqXHR, error, errorThrown) {
                console.log(jqXHR);
                console.log(error);
                console.log(errorThrown);
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
    }
});

//search bar button --> fail scenario//
//$(document).on("click", ".searchSubmit", function (event) {
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
$(document).on("click", "#modifyAnchor", function (event) {
    event.preventDefault();
    $(".introScreen").hide();
    $(".signInScreen").hide();
    $(".createUsernameScreen").hide();
    $(".dummyAccountScreen").hide();
    $(".homeScreen").hide();
    $(".searchScreen").hide();
    //$(".chosenFail").hide();
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
    //$(".chosenFail").hide();
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
    //$(".chosenFail").hide();
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
    //$(".chosenFail").hide();
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
    //$(".chosenFail").hide();
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
    //$(".chosenFail").hide();
    $(".recipeInfoScreen").hide();
    $(".createRecipeScreen").hide();
});

//save created recipe button---> recipe info screen about newly created recipe//
$(document).on("click", "#jsCreateSaveButton", function (event) {
    event.preventDefault();
    //get input from the user//
    let title = $('#titleCreate').val();
    let ingredients = $('#ingredientsCreate').val();
    let directions = $('#createDirections').val();
    let notes = $('#notesCreate').val();
    let userIdHidden = $('.loggedInUser').val();
    console.log(title, ingredients, directions, notes, userIdHidden);
    //validate the input//
    if (title.length == 0) {
        alert('Please add title!');
    } else if (ingredients.length == 0) {
        alert('Please add ingredients!');
    } else if (directions.length == 0) {
        alert('Please add directions!');
    } else if (notes.length == 0) {
        alert('Please add notes!');
    } else {
        //if input is valid; register the user//
        const newRecipeObject = {
            title: title,
            ingredients: ingredients,
            directions: directions,
            notes: notes,
            userId: userIdHidden
        };
        // create ajax call to register the user//
        $.ajax({
                type: 'POST',
                url: '/recipes/create',
                dataType: 'json',
                data: JSON.stringify(newRecipeObject),
                contentType: 'application/json'
            })
            //if registation is successful
            .done(function (result) {
                console.log(result);
                displayRecipes(userIdHidden);
                $(".introScreen").hide();
                $(".signInScreen").hide();
                $(".createUsernameScreen").hide();
                $(".dummyAccountScreen").hide();
                $(".homeScreen").hide();
                $(".searchScreen").hide();
                //$(".chosenFail").hide();
                $(".recipeInfoScreen").show();
                $(".createRecipeScreen").hide();
            })
            //if registration fails
            .fail(function (jqXHR, error, errorThrown) {
                console.log(jqXHR);
                console.log(error);
                console.log(errorThrown);
            });
    };


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
    //$(".chosenFail").hide();
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
    //$(".chosenFail").hide();
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
    //$(".chosenFail").hide();
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
    //$(".chosenFail").hide();
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
    //$(".chosenFail").hide();
    $(".recipeInfoScreen").hide();
    $(".createRecipeScreen").hide();
});
