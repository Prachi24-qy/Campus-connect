// Get search elements

let searchInput = document.getElementById("searchInput");

let searchButton = document.getElementById("searchButton");

let notices = document.querySelectorAll("#notices .notice");

let searchMessage = document.getElementById("searchMessage");


// Search Function

function searchNotices() {

    let searchValue = searchInput.value.toLowerCase().trim();

    let found = 0;

    notices.forEach(function(notice) {

        let noticeText = notice.innerText.toLowerCase();

        if (noticeText.includes(searchValue)) {

            notice.style.display = "block";

            found++;

        } else {

            notice.style.display = "none";

        }

    });

    if (found === 0) {

        searchMessage.innerText = "No matching notices found.";

    } else {

        searchMessage.innerText = found + " notice(s) found.";

    }

}


// Search Button

searchButton.addEventListener("click", searchNotices);


// Search Using Enter Key

searchInput.addEventListener("keyup", function(event) {

    if (event.key === "Enter") {

        searchNotices();

    }

});


// Restore Deleted Notice

let restoreButton = document.getElementById("restoreButton");

let deletedNotice = document.getElementById("deletedNotice");

restoreButton.addEventListener("click", function() {

    let restoredNotice = deletedNotice.cloneNode(true);

    restoredNotice.removeAttribute("id");

    restoredNotice.querySelector("button").remove();

    document.getElementById("notices").appendChild(restoredNotice);

    deletedNotice.style.display = "none";

});
