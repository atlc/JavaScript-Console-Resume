let myName = "Andrew Cartwright";
let careerGoal = "Full-Stack Software Engineer";
let selfDescription = "Birmingham, AL native. Recent graduate and current employee of Jefferson State, and current employee of a vet clinic.";
let myInterests = ["Programming", "Electronics", "Outdoors", "Animals", "Stranger Things"];
let myPositions = [
    {company: "Jefferson State Community College", jobTitle: "Computer Lab Technician", description: "Maintained the 4 computer labs on the top floor, including supporting users with all desktop needs, providing general Windows support and miscellaneous hardware & printer support."},
    {company: "Caldwell Mill Animal Clinic", jobTitle: "Kennel Technician", description: "Responsibilities included day-to-day upkeep of the clinic and care for the animals present for boarding, daycare, and veterinary care, and assisting the doctors and the vet techs in their roles as needed."},
    {company: "Uber & Lyft", jobTitle: "Rideshare Driver", description: "While operating as a rideshare driver for both services, I provided excellent service, maintaining a perfect 5.00/5.00 rating and consistently received the \"Above and Beyond\" driver award with Uber."},
    {company: "Vincari", jobTitle: "Software Engineer", description: "Created new features and fixed bugs for our EMR webapp, on a stack of Ruby on Rails, Angular.js, MySQL, and AWS (EC2, VPC, and S3). A notable project I made was a logging framework to provide our Implementation & Support team an invaluable tool with which they could easily assist our clients."},
    {company: "Hubbard Systems", jobTitle: "Application Support Analyst", description: "I trained and assisted our clients in everyday usage of our accounting application, and in addition to gaining valuable accounting, legal, and computer support skills, got involved with both Windows & Linux server administration, and T-SQL + SSMS with for a subset of our application."},
    {company: "Greystone Golf and Country Club", jobTitle: "Server, Bartender, Event Staff", description: "Worked in various roles related to dining - including serving in a fast, casual, everyday environment all the way to our fine dining. As event staff, I worked closely with clients as we prepared and setup events from small birthday parties to holiday parties, to giant golf tournaments or weddings spanning hundreds of people."}
];


function displayPosition(company, jobTitle, description) {
    console.log("\nExperience:");
    for (i in myPositions) {
        console.log("* " + myPositions[i].company + ", " + myPositions[i].jobTitle + "\n\t- " + myPositions[i].description + "\n\n");
    }
}

function displaySkill(skill, isCool) {

}

function displayInterests() {
    console.log("\nMy interests:");
    for (i of myInterests) {
        console.log("\t-" + i);
    }
}

function displayALL() {
    console.log("Name:\t\t" + myName.toUpperCase());
    console.log("Career goal:\t" + careerGoal);
    console.log("Description:\t" + selfDescription);
    displayInterests();
    displayPosition();
}

displayALL();