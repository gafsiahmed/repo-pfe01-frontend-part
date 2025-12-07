const url = "https://catfact.ninja/fact";

let fetchBtn = document.querySelector("#fetch-fact-btn");
let displayParagraph = document.querySelector("#cat-fact-display");




async function fetchCatFact() {
    try {
        let response = await fetch(url);
        let data = await response.json();
        // displayParagraph.textContent = data.fact;
        console.log(data)
        return data

    } catch (error) {
        console.error("Error fetching cat fact:", error);
        displayParagraph.classList.add("error");
        displayParagraph.textContent = "Failed to fetch cat fact. Please try again.";
    }

}



async function fetchCatFacts(url,maxLength, limit){
    try {
        let response = await fetch(`${url}s?max_length=${maxLength}&limit=${limit}`);

        let data = await response.json();

        console.log(data.data)
    } catch (error) {
        console.log(error)

    }
}


fetchCatFacts(url,50,20)

// (async ()=> await fetchCatFact())()


async function main(){
    let catFact = await fetchCatFact()
    displayParagraph.textContent = catFact.fact;
    fetchBtn.addEventListener("click", fetchCatFact);


}


main()




fetch('https://jsonplaceholder.typicode.com/posts/1',{
    method : 'DELETE',
    }
)
.then((response)=>{
    console.log(response)
    return response.json()
})
.then((data)=>{
    console.log(data)
})



