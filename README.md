Overview

## Serendipitous



## Project Description

The purpose of this website, is to help people find new alternatives to music and movies. There will be, two categories to choose from (Music, Movies) each one will be a separate button. Once the button is pressed it will create a random return of that specific button. It will show the item with all the information so people can open up to new alternatives and dig more into the returned information. 

## API and Data Sample

I will be using one API from Test dive (https://tastedive.com/read/api)- 
```
 "Similar": {
        "Info": [
            {
                "Name": "!!!",
                "Type": "music"
            }
        ],
        "Results": [
            {
                "Name": "The Go! Team",
                "Type": "music"
            },
            {
                "Name": "Death From Above 1979",
                "Type": "music"
            },
            {
                "Name": "Tv On The Radio",
                "Type": "music"
            },
            {
                "Name": "Menomena",
                "Type": "music"
            },
            {
                "Name": "Lcd Soundsystem",
                "Type": "music"
            },
            {
                "Name": "Hot Chip",
                "Type": "music"
            },
            {
                "Name": "Clap Your Hands Say Yeah",
                "Type": "music"
            },
            {
                "Name": "Vhs Or Beta",
                "Type": "music"
```

## Wireframes

[front-page Click it](https://imgur.com/a/fvklYdZ)- [second-page Click it ](https://imgur.com/Ubdj50w)


### MVP/PostMVP

  

#### MVP 
- Will use an API to get data from a library of music and movies.
- Will start by developing phone first.
- Clicking on the first button will create a random return of a song, clicking a second button will create a random return of a movie. will return image, information and links to resources. 
- page will add a general search for movies or songs with it's information.


#### PostMVP  
- Monitor user's traffic.
- Create a database to store feedbacks.
- Link to different social-media websites.

## Project Schedule


|  Day | Deliverable | Status
|---|---| ---|
|July 10-12| Prompt / Wireframes / Priority Matrix / Timeframes | Complete
|July 13| Project Approval | Complete
|July 13| Core Application Structure (HTML, CSS, etc.) | Complete
|July 15| JavaScript incorporation  | Complete
|July 14| Deeper Css| Complete
|July 16| MVP/ testing | Incomplete
|July 17| Presentations | Incomplete

## Priority Matrix

[Matrix] (https://www.meta-chart.com/share/matrix-priority)

## Timeframes



| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Html structure | H | 3hrs| 3hrs | 3hrs |
| JS/Creating functions | H | 3hrs| 3hrs | 3hrs |
| Working with API | H | 4hrs| 5hrs | 5hrs |
| JS/appnd. elements to the DOM | H |4hrs| 3hrs | 3hrs |
| JS/remv. elemnts| H | 2hrs| 1.5hrs | 1.5hrs |
| Evaluating JS funtionability | H | 2hrs| 2hrs | 2hrs |
| Css mobile style | H | 3hrs| 4hrs | 4hrs |
| Css general styling | H | 4hrs| 4hrs | 4hrs |
| Evaluating and Fixes| H | 6hrs| 6hrs | 6hrs |
| Editing| L | 5hrs| 4hrs | 4hrs |
| Githubpages Deployment| L | 1hrs| 0hrs | 0hrs |
| Total | H | 37hrs| 0hrs | 0hrs |

## Code Snippet
```
async function getMusicMovie(band, movie) {
  try {
    const URL = `https://corsanywhere.herokuapp.com/tastedive.com/api/similar?q=${band}%2C${movie}&k=${KEY}&info=1&limit=10`;

    const response = await axios.get(URL);

    console.log(response.data.Similar.Results);
    //data that shows the the array.

    removeLastSearch();

    renderSearch(response.data.Similar.Results);
  } catch (error) {
    console.log(`This is an error : ${error}`);
  }
}

//to get all data from the database
const renderSearch = (allSearch) => {
  allSearch.forEach((search) => {
    console.log(search);
    const container = document.createElement("section");
    const newSearch = document.createElement("article");
    newSearch.innerText = search.Name;
    const searchTeaser = document.createElement("p");
    searchTeaser.innerText = search.wTeaser;
    const video = document.createElement("iframe");
    video.src = search.yUrl;
    //to append it to parent node and append child
    container.appendChild(newSearch);
    container.appendChild(searchTeaser);
    container.appendChild(video);
    document.querySelector(".results").appendChild(container);
  });
};
```



## Change Log
- Switched end point on API. 
- Receive suggestions for movies and music in search bar. 
- pivoted project to reflect 1 endpoint.

 
