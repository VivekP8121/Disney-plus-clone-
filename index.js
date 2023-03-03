  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-app.js";
  // import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-analytics.js";
  import { getFirestore ,collection,getDocs} from 'https://www.gstatic.com/firebasejs/9.17.2/firebase-firestore.js'
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyCNw1855vefSraE4GBV42-Y8Dpy1aP2NBk",
    authDomain: "disney-plus-html-clone.firebaseapp.com",
    projectId: "disney-plus-html-clone",
    storageBucket: "disney-plus-html-clone.appspot.com",
    messagingSenderId: "156333340157",
    appId: "1:156333340157:web:713f8d5d56eb2055bed594",
    measurementId: "G-7F03PV906E"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  // const analytics = getAnalytics(app);

  // firestore DataBase
  const db = getFirestore(app);


// Get Movies from DB
let recommendMovies = []
let trendingMovies = []
let newMovies = []
let originalMovies = []

  const querySnapshot = await getDocs(collection(db, "movies"));
querySnapshot.forEach((doc) => {
  
    if(doc.data().type == 'recommend'){
      recommendMovies.push(doc.data())
    }
    if(doc.data().type == 'trending'){
      trendingMovies.push(doc.data())
    }
  if(doc.data().type == 'new'){
    newMovies.push(doc.data())
  }
  if(doc.data().type == 'original'){
    originalMovies.push(doc.data())
  }
  
});


if(recommendMovies.length){
  createRecommendMovies()
}
if(trendingMovies.length){
 
  createTrendingMovies()
}
if(newMovies.length){
  creatNewMovies()
  
}
if(originalMovies.length){
  createOriginalMovies()
}









// Functions to create recommendMovies

// let recommendParent = document.querySelector('.recommended-container .content')


function createRecommendMovies(){
  let recommendParent = document.querySelector('.recommended-container .content')
  let output = ""
  recommendMovies.forEach(movie=>{
    output += `<div class="wrap" data-id="${movie.title}">

    <img src="${movie.cardImg}" alt=""> 
   
       </div>`
  })

  recommendParent.innerHTML  = output

}

function createTrendingMovies(){
  let trendingParent = document.querySelector('.trending-container .content')
  let output = ""
  trendingMovies.forEach(movie =>{
    output += `<div class="wrap" data-id="${movie.title}">

    <img src="${movie.cardImg}" alt=""> 
   
       </div>`
  })

  trendingParent.innerHTML = output
}


function creatNewMovies(){
  let newParent = document.querySelector('.newtodisney-container .content')
  let output = ""
  newMovies.forEach(movie =>{
    output += `<div class="wrap" data-id="${movie.title}">

    <img src="${movie.cardImg}" alt=""> 
   
       </div>`
  })

  newParent.innerHTML = output
}

function createOriginalMovies(){
  let originalParent = document.querySelector('.original-container .content')
  let output = ""
  originalMovies.forEach(movie =>{
    output += `<div class="wrap" data-id="${movie.title}">

    <img src="${movie.cardImg}" alt=""> 
   
       </div>`
  })

originalParent.innerHTML = output
}
