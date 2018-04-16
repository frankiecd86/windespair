document.addEventListener("DOMContentLoaded", function(event) {
    var current_url = window.location.href;
    if(current_url.indexOf("success") !== -1) {
        var comment_posted_success = document.getElementById("comment-posted-success");
        comment_posted_success.style.display = "block";
    }
});

function set_replying_to_index(index, name, message, date_comment) {
    var comment_reply = document.getElementById("comment-replying-to");
    comment_reply.value = index;

    var cancel_comment_reply_link = document.getElementById("cancel-comment-reply-link");
    cancel_comment_reply_link.style.display = "inline-block";
    cancel_comment_reply_link.classList.add('cancel-reply');

    year = date_comment.substring(0,4);
    month = date_comment.substring(5,7);
    day = date_comment.substring(8,10);

    var months = [
        'January', 'February', 'March', 'April', 'May',
        'June', 'July', 'August', 'September',
        'October', 'November', 'December'
    ];
    var monthName = months[parseInt(month) - 1];

    date_comment_string = monthName + " " + day + ", " + year;

    var timeTag = document.createElement("time");
    var timeTagTextNode = document.createTextNode(date_comment_string);
    timeTag.setAttribute('datetime', date_comment);
    timeTag.appendChild(timeTagTextNode);

    var comment_timestamp_reply_hidden_box = document.getElementById("comment-timestamp-reply-hidden-box");
    while (comment_timestamp_reply_hidden_box.firstChild) {
        comment_timestamp_reply_hidden_box.removeChild(comment_timestamp_reply_hidden_box.firstChild);
    }
    comment_timestamp_reply_hidden_box.appendChild(timeTag);

    var replying_to_title_hidden_box = document.getElementById("replying-to-title-hidden-box");
    replying_to_title_hidden_box.style.display = "block";

    var comment_reply_hidden_box = document.getElementById("comment-reply-hidden-box");
    comment_reply_hidden_box.style.display = "block";
    var comment_author_name_reply_hidden_box = document.getElementById("comment-author-name-reply-hidden-box");
    comment_author_name_reply_hidden_box.innerHTML = name;
    var comment_content_reply_hidden_box = document.getElementById("comment-content-reply-hidden-box");
    comment_content_reply_hidden_box.innerHTML = message;
}

function cancel_reply() {
    var replying_to_title_hidden_box = document.getElementById("replying-to-title-hidden-box");
    replying_to_title_hidden_box.style.display = "none";

    var comment_reply_hidden_box = document.getElementById("comment-reply-hidden-box");
    comment_reply_hidden_box.style.display = "none";

    var cancel_comment_reply_link = document.getElementById("cancel-comment-reply-link");
    cancel_comment_reply_link.style.display = "none";

    var comment_reply = document.getElementById("comment-replying-to");
    var index = comment_reply.value;

    cancel_comment_reply_link.href = "#comment-" + index;

    comment_reply.value = "";
}
