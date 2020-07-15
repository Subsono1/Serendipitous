const DOMAIN = "https://corsanywhere.herokuapp.com/tastedive.com/";
const KEY = "378732-Sebastia-0KJQN855";
const BASE_URL = `${DOMAIN}api/similar?k=${KEY}&`;

async function getMusic(e) {
  
 
  try {
    const input = document.querySelector("#input");
    const response = await axios.get(`${BASE_URL}q=&info${input.value}`);
    console.log(response);
    //data that shows the the array.
    renderSearch(response.data.Similar.Results)
  } catch (error) {
    console.log(`This is an error : ${error}`);
  }

  
}
getMusic()




const renderSearch = (allSearch) => {

  allSearch.forEach((search) => {
    console.log(search)
    const newSearch = document.createElement('article')
    newSearch.innerText = search.Name
    //to append it it is parent node and append child
    document.querySelector('#results').appendChild(newSearch)
   
  })
  
};


const button = document.querySelector("#search")
button.addEventListener('click', getMusic )
