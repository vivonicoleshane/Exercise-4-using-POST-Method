document.addEventListener("DOMContentLoaded", function () {

    /* LIVE MEMBER SEARCH */

    const searchInput = document.getElementById("memberSearch");

    const memberCards = document.querySelectorAll(".member-card");


    if (searchInput) {

        searchInput.addEventListener("input", function () {

            const searchText =
                searchInput.value.toLowerCase().trim();


            memberCards.forEach(function (card) {

                const memberName =
                    card
                        .querySelector("h2")
                        .textContent
                        .toLowerCase();


                if (memberName.includes(searchText)) {

                    card.style.display = "";

                } else {

                    card.style.display = "none";

                }

            });

        });

    }


    /* FEEDBACK FORM MESSAGE */

    const feedbackForm =
        document.querySelector(".feedback-form");


    if (feedbackForm) {

        feedbackForm.addEventListener("submit", function () {

            const submitButton =
                feedbackForm.querySelector(".feedback-button");


            submitButton.innerHTML =
                "<span>✓</span> Submitting...";


            submitButton.style.opacity = "0.8";

        });

    }

});
