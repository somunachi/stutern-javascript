// Number 1
 function InstagramPost(Handle, Content, ImageLink, Views, Likes) {
    this.Handle = Handle;
    this.Content = Content;
    this.ImageLink = ImageLink;
    this.Views = Views;
    this.Likes = Likes;
}

// Number 2
const instagramUser1 = new InstagramPost("so_munachi", "Image", "wwww.instagram.com", 100, 20);
const instagramUser2 = new InstagramPost("bolu_wa_tife", "Reel", "wwww.instagram.com", 500, 120);

// Number 3
// a
function createPerson(name, age, location) {
    
    return{
        name: name,
        age: age,
        location: location
    }
}

const musa = createPerson("Musa Dawodu", 19, "Lekki");

// b
function createJambScores(eng, govt, lit, crk){
    return{
        eng: eng,
        govt: govt,
        lit: lit,
        crk: crk,
    }
}
const scores = createJambScores(70, 85, 82, 94);
// Now we merge
Object.assign(musa, scores);

// Number 4
// - Using Object.assign()
const pet = {
    type: "Dog",
    name: "Whisky",
    breed: "Labrador",
    color: "Brown",
}

const dog = Object.assign({}, pet);


// Option 2: Spread syntax (i.e. (...) )
const cat = {...pet};


// Option 3: JSON.parse(JSON.stringify())
const hamster = JSON.parse(JSON.stringify(pet));

// Number 5
const presidentialCandidates = {
    AAC: 'Omoyele Sowore',
    ACCORD: 'Christopher Imumolen',
    APC: 'Bola Ahmed Tinubu',
    LP: 'Peter Obi',
    NNPP: 'Rabiu Kwankwaso',
    PDP: 'Atiku Abubakar',
 }
 for (let key in presidentialCandidates){
    console.log(presidentialCandidates[key] + " is the presidential candidate of" + " " + key)
 }