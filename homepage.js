document.addEventListener('DOMContentLoaded', function() {
    let ansSubmits = document.querySelectorAll('.submitprob');
    let key = ["5", "213", "0.653"];

    for (let i = 0; i < ansSubmits.length; i++)
    {
        ansSubmits[i].addEventListener('click', function(event) {
            event.preventDefault();
            // localeCompare source: https://www.w3schools.com/jsref/jsref_localecompare.asp
            // alerts source: https://getbootstrap.com/docs/4.5/components/alerts/
            // toString() source: https://www.w3schools.com/jsref/jsref_tostring_number.asp
            if (!document.querySelector('#inputQ' + (i + 1).toString()).value.localeCompare(key[i]))
            {
                document.getElementById('feedback' + (i + 1).toString()).innerHTML = '<br><div class="alert alert-success">Correct!</div>';
            }
            else
            {
                document.getElementById('feedback' + (i + 1).toString()).innerHTML = '<br><div class="alert alert-danger">Incorrect. Check your calculations and try again!</div>';
            }
        });
    }
});