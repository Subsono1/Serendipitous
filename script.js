
const KEY = `378732-Sebastia-0KJQN855`
const form = document.querySelector('form')

form.addEventListener('submit', getInput)

function getInput(e) {
  e.preventDefault()
  
  const musicMovieValue = document.querySelector('#music-movie').value
  
  console.log(musicMovieValue)
  
  getMusicMovie(musicMovieValue)
}
async function getMusicMovie(band, movie) {
  try {
    
    const URL = `https://corsanywhere.herokuapp.com/tastedive.com/api/similar?q=${band}%2C${movie}&k=${KEY}&info=1&limit=5`
    
    const response = await axios.get(URL)
    
    console.log(response.data.Similar.Results);
    //data that shows the the array.
    
    removeLastSearch()
    
    renderSearch(response.data.Similar.Results)
  } catch (error) {
    
    console.log(`This is an error : ${error}`);
  }
}


//////////////////////
const renderSearch = (allSearch) => {
  allSearch.forEach((search) => {
    console.log(search)
    const container = document.createElement('section')
    const newSearch = document.createElement('article')
    newSearch.innerText = search.Name
    const searchTeaser = document.createElement('p')
    searchTeaser.innerText = search.wTeaser
    const video = document.createElement('iframe')
    video.src = search.yUrl
    //to append it to parent node and append child
    container.appendChild(newSearch)
    container.appendChild(searchTeaser)
    container.appendChild(video)
    document.querySelector('.results').appendChild(container)

  })
};

// function 
// document.querySelector('section').style =

/////


//////////


const removeLastSearch = () => {
  const musicMovie = document.querySelector('.results');
  while (musicMovie.lastChild) {
    musicMovie.removeChild(musicMovie.lastChild)
  }
  

}