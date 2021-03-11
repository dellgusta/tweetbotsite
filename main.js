// https://xa4i5vqufg.execute-api.us-east-1.amazonaws.com/test

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
        let tweetCount = 10;

        console.log(query, reply);

        axios.get(`https://pb6mybcyzc.execute-api.us-east-1.amazonaws.com/test/production?query=${query}&reply=${reply}&twtct=${tweetCount}`, {
            headers: { 
                'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
                'Access-Control-Allow-Origin': "*"
            },
            crossDomain : true
        })
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
