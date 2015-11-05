import googleSearch from "google";

googleSearch.resultsPerPage = 5;

export default function google(req) {
  return new Promise((resolve) => {
    
    let results = [];
    let {search} = req.query;
    
    /*
    if (search==="nike"){
      results = [1,2,3,4,5];
    }
    else if (search==="nba"){
      results = ["Lebron", "Kobe", "Durrant", "Mello", "D Wade"];
    }
    else if (search==="news"){
      results = ["cnn", "nbc", "abc", "msnbc", "faux"];
    }
    */
    
    googleSearch(search, function (err, next, links){
      results = links;
      resolve({
        results
      });
    });
  });
}
