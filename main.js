///// Practice: Doctors
// Lightning Exercise 1: 
// Write a factory function that creates an object that represents 
// a doctor. The function should accept three 
// arguments.

// 1. Doctor's name
// 2. Specialty (Oncologist, pediatrician, etc...)
// 3. Address of practice

const createDoctor = function (name, specialty, address) {
    return {
        "name": name,
        "specialty": specialty,
        "address": address,
    }
}

const doctorJohn = createDoctor("John Doe", "givin the good pills", "123 street")
const doctorYong = createDoctor("Yong Suh", "blood stuff", "46 doctor row")

console.log(doctorJohn, doctorYong)



///// Lightning Exercise 2: 
// Write a factory function that creates an object that represents a 
// pet. The function should accept two arguments.

// 1. Pet name
// 2. Pet breed

// Invoke the factory function 3 times and place each animal in an array 
// stored in a variable named BowWowKennels

const createPet = (name, breed) => {
    return {
        name: name,
        breed: breed
    }
}

const petCat = createPet("Picasso", "maine coon")
const petDog = createPet("Defcon 4", "pug")
const petDog2 = createPet("Asparagus", "poodle")

console.log(petCat, petDog, petDog2)

const bowWowKennels = [];

bowWowKennels.push(createPet('Picasso', 'maine coon'))
bowWowKennels.push(createPet('Defcon4', 'pug'))
bowWowKennels.push(createPet('Asparagus', 'poodle'))

console.log(bowWowKennels)


// Practice: Music Row

// Your job is to sign each of these promising young music stars to 
// the appropriate label.

// JumpStop Records works with Funk and Rap artists.
// Chatten Records works with Country and Bluegrass artists.
// Polar Records works with Pop artists.

// Create an array for each of these record labels.
const jumpStopRecords = [];
const chattenRecords = [];
const polarRecords = [];

// Create a factory function for each possible genre (e.g. 
// createBluegrassArtist()). Then invoke the appropriate function 
// for each of the following artists and place the resulting object 
// in the corresponding label array.
const createFunkArtist = (name, age) => {
    return {
        "name": name,
        "age": age,
        "genre": "funk"
    }
}
const createRapArtist = (name, age) => {
    return {
        "name": name,
        "age": age,
        "genre": "rap"
    }
}
const createCountryArtist = (name, age) => {
    return {
        "name": name,
        "age": age,
        "genre": "country"
    }
}
const createBluegrassArtist = (name, age) => {
    return {
        "name": name,
        "age": age,
        "genre": "bluegrass"
    }
}
const createPopArtist = (name, age) => {
    return {
        "name": name,
        "age": age,
        "genre": "pop"
    }
}
// Bruce Atikins is a Country artist and is 23 years old
// Jensen Brown is a Pop artist and is 20 years old
// Dre Funkz is a Funk artist and is 25 years old
// Dusta Grimes is a Rap artist and is 21 years old
// Bartholomew Danielson is a Bluegrass artist and is 23 years old
// Avilee Dallas is a Country artist and is 19 years old
// Austin Kinkaid is a Pop artist and is 22 years old
// Loyoncé Branis is a Rap artist and is 27 years old
;

chattenRecords.push(createCountryArtist("Bruce Atikins", "23"))
polarRecords.push(createPopArtist("Jensen Brown", "20"))
jumpStopRecords.push(createFunkArtist("Dre Funkz", "25"))
jumpStopRecords.push(createRapArtist("Dusta Grimes", "21"))
chattenRecords.push(createBluegrassArtist("Bartholomew Danielson", "23"))
chattenRecords.push(createCountryArtist("Avilee Dallas", "19"))
polarRecords.push(createPopArtist("Austin Kinkaid", "22"))
jumpStopRecords.push(createRapArtist("Loyoncé Branis", "27"))

console.log(chattenRecords, polarRecords, jumpStopRecords)