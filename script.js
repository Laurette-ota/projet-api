const imagesWrapper = document.querySelector("images");

const apiKey = "ePIlVZPyo5dy1PxJXCV1aYQ8qQimCuYtkZfUTuJGoj6Lw7VikgLz8ILt";
const perPage = 15;
let currentPage = 1;

const generateHTML = (images) => {
    //Making li of all
    imagesWrapper.innerHTML += images.map(img => 
        `<li class="card">
                <img src="${img.src.large2x}" alt="img">
                <div class="details">
                    <div class="photographer">
                        <i class="uil uil-camera"></i>
                        <span>${img.photographer}</span>
                    </div>
                    <button><i class="uil uil-import"></i></button>
                </div>
            </li>`
    ).join("")
}

const getImages = (apiURL) => {
    //Fetching images by API call with authorization header 
    fetch(apiURL, {
        headers: { Authorization: apiKey }
    }).then(res => res.json()).then(data => { 
        generateHTML(data.photos)
    })
}

getImages("https://api.pexels.com/v1/curated?page=${currentPage}&per_page=${perPage}");