//Number 3

let ScienceClass= "Physics, Chemistry, Biology, Technical Drawing";
let SocialScienceClass = "Accounting, Commerce, Marketing, Geography";
let ArtsClass = "Government, Economics, Literature, History";
let GeneralSubjects = ", English, Mathematics";

let department = "Arts Class";

    if (department == "Science Class"){
        console.log("These are the subjects you will offer: " + ScienceClass + GeneralSubjects);
    } else if (department == "Social Science Class"){
        console.log("These are the subjects you will offer: " + SocialScienceClass + GeneralSubjects);
    } else if (department == "Arts Class"){
        console.log("These are the subjects you will offer: " + ArtsClass + GeneralSubjects);
    } else {
        console.log("These are the subjects you will offer: " + GeneralSubjects);
    }


//Number 5

let num = 40;
let x = 6;
let pwr = x ** 2;
    if (pwr < num){
        console.log("The number " + pwr + " is the power of 2 nearest to " + num);
    } else {
        console.log("ERROR");
    }