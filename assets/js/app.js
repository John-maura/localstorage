//variables
const tweetList = document.getElementById("tweet-list");
//EventListners
eventListners();
function eventListners() {
    // form submission
    document.querySelector('#form').addEventListener('submit', newTweet);
    
    tweetList.addEventListener("click", removeTweet);
}

//Functions
function newTweet(e) {
    e.preventDefault();
    // Read the text area value
    const tweet = document.querySelector("#tweet").value;
    //create remove button
    const removeBtn=document.createElement("a");
    removeBtn.classList="remove-tweet";
    removeBtn.textContent="X";
    // create the <li> element
    const li = document.createElement('li');
    li.textContent = tweet;
    // add remove button to each item
    li.appendChild(removeBtn);
    //add to the tweet list
    tweetList.appendChild(li);
}
    //removes tweets from the DOM
    function removeTweet(e){
        if(e.target.classList.contains('remove-tweet')){
            e.target.parentElement.remove();
        }
    }