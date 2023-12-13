const giphyApiKey = "rwH2TZIHDYrBuj4BH5zdwV0EMrLRPkib";
const giphyApiUrl = `https://api.giphy.com/v1/gifs/random?api_key=${giphyApiKey}`;

const apiNinjasKey = "A0apgDqQQWq9VKj6ntJZhA==VudKIDcbWwg5b9XC";
const apiNinjasUrl = "https://api.api-ninjas.com/v1/dadjokes?limit=1";

document.getElementById('fetchButton').addEventListener('click', () => {
    fetchRandomGiphy();
    fetchDadJoke();
});

document.addEventListener('DOMContentLoaded', function() {
  const studentId = '200512519';
  const studentName = 'Vidhey Patel';
  document.getElementById('studentInfo').textContent = `Student ID: ${studentId}, Name: ${studentName}`;
});

function fetchRandomGiphy() {
    fetch(giphyApiUrl)
        .then(response => response.json())
        .then(data => {
            const imageUrl = data.data.images.original.url;
            document.getElementById('giphyImage').src = imageUrl;
            document.getElementById('giphyImage').style.display = 'block';
        })
        .catch(error => console.error('Error fetching Giphy:', error));
}

function fetchDadJoke() {
    fetch(apiNinjasUrl, {
        headers: { 'X-Api-Key': apiNinjasKey }
    })
        .then(response => response.json())
        .then(data => {
            const joke = data[0].joke;
            document.getElementById('dadJoke').textContent = joke;
        })
        .catch(error => console.error('Error fetching Dad Joke:', error));
}
