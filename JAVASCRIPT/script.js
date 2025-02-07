console.log("welcome");

let iplteam={
    team1:"CSK",
    team2:"RCB",
    team3:"MI",
    team4:"KKR",
    team5:"SRH",
    team6:"DC"
}
//in for the keys in obj are printed
for (let key in iplteam){
    console.log(key);    
}
//iplteam.key for normal
//iplteam[key] for dynamic
for (let key in iplteam){
    console.log(`${key} : ${iplteam[key]}`);    
}