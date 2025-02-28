const url = "https://api.github.com/users/";
const get =  (element) => document.getElementById(`${element}`);

const input = get("input");
const btn = get("btn");

btn.addEventListener("click", () => {
    if(input.value !== "") {
        getuserdata(url + input.value);
    }
})

input.addEventListener('keydown', (e) => {
    if(e.key === 'Enter'){
        if(input.value !== "") {
            getuserdata(url + input.value);
    }
}
},false);


function updateprofile(){
// noresullt
    if(DataTransfer.message !== "not found") {
        function checkNull(apiItem, domItem) {
            if(apiItem === null || apiItem === "") {
                domItem.style.opacity = 0.5;
                domItem.previousElementSibling.style.opacity = 0.5;
                return false;

        }
        else{
            return true;
        }
    }
 }
const userimage = get("userimage");
const name = get("name");
const username = get("username");
const bio = get("bio");
const location = get("location");
const date = get("date");
const followers = get("followers");
const following = get("following");
const repos = get("repos");
const website = get("website");
const company = get("company");
const twitter = get("twitter");
const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
}
