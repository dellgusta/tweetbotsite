// https://uwcyzuxldg.execute-api.us-east-1.amazonaws.com/Prodction?query=%23test&reply=teste&twtct=2

var inputElementQuery = document.getElementById("name-header15-a");
var inputElementReply = document.getElementById("email-header15-a");
var buttonSubmit = document.getElementById("submit-button");
var mainContainerElement = document.getElementById("header16-3");


buttonSubmit.onclick = onSubmitQuery;

function onSubmitQuery() {
    if (inputElementQuery.value == "" || inputElementReply == "") {
        return;
    } else {
        let query = encodeURIComponent(inputElementQuery.value);
        let reply = encodeURIComponent(inputElementReply.value);
        let tweetCount = 4;

        console.log(query, reply);

        axios.get(`https://uwcyzuxldg.execute-api.us-east-1.amazonaws.com/Prodction?query=${query}&reply=${reply}&twtct=${tweetCount}`)
            .then(function (response) {
                console.log(response);
                var repliesList = response.data.body;
                console.log('DATA[0]: ', repliesList[0]);
                
                for (item of repliesList) {
                    var div = document.createElement('div');
                    div.innerHTML = item;
                    mainContainerElement.appendChild(div);
                    twttr.widgets.load(
                        document.getElementById("header16-3")
                      );
                      
                }

            })
            .catch(function (error) {
                console.warn(error);
            });

    }
}
