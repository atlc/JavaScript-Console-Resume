let myName = "Andrew Cartwright";
let careerGoal = "Full-Stack Software Engineer";
let selfDescription = "Birmingham, AL native. Recent graduate and current employee of Jefferson State, and current employee of a vet clinic.";
let myInterests = ["Programming", "Electronics", "Outdoors", "Animals", "Stranger Things", "Auto mechanic work"];

function displayPosition(jobTitle, company, description) {
    console.log("* " + jobTitle + " at " + company + "\n\t- " + description);
}

function displaySkill(skill, isCool) {
    if (isCool) {
        console.log("* BAM: " + skill);
    } else {
        console.log("* " + skill);
    }
}

function displayInterests() {
    console.log("\nMy interests:");
    for (i of myInterests) {
        console.log("* " + i);
    }
}

function displayALL() {
    console.log("Name:\t\t\t" + myName.toUpperCase());
    console.log("Career goal:\t" + careerGoal);
    console.log("Description:\t" + selfDescription);
    displayInterests();
    console.log("\nExperience:");
    displayPosition("Computer Lab Technician", "Jefferson State Community College", "Maintained the 4 computer labs on the top floor, including supporting users with all desktop needs, providing general Windows support and miscellaneous hardware & printer support.");
    displayPosition("Kennel Technician", "Caldwell Mill Animal Clinic", "Responsibilities included day-to-day upkeep of the clinic and care for the animals present for boarding, daycare, and veterinary care, and assisting the doctors and the vet techs in their roles as needed.");
    displayPosition("Rideshare Driver", "Uber & Lyft", "Provided excellent service, maintaining a perfect 5.00/5.00 rating and consistently received the \"Above and Beyond\" driver award with Uber.");
    displayPosition("Software Engineer", "Vincari", "Created new features and fixed bugs for our EMR webapp, on a stack of Ruby on Rails, Angular.js, MySQL, and AWS (EC2, VPC, and S3). A notable project I made was a logging framework to provide our Implementation & Support team an invaluable tool with which they could easily assist our clients.");
    displayPosition("Application Support Analyst", "Hubbard Systems", "I trained and assisted our clients in everyday usage of our accounting application, and in addition to gaining valuable accounting, legal, and computer support skills, got involved with both Windows & Linux server administration, and T-SQL + SSMS with for a subset of our application.");
    displayPosition("Server, Bartender, Event Staff", "Greystone Golf and Country Club", "Worked in various roles related to dining - including serving in a fast, casual, everyday environment all the way to our fine dining. As event staff, I worked closely with clients as we prepared and setup events from small birthday parties to holiday parties, to giant golf tournaments or weddings spanning hundreds of people.");
    console.log("\nSkills:");
    displaySkill("Cat wrangling", true);
    displaySkill("Spanish", false);
    displaySkill("Electric bass", true);
    displaySkill("Cooking", false);
    displaySkill("HTML", false);
    displaySkill("Vanilla CSS", false);
    displaySkill("CSS with Bootstrap", true);
    displaySkill("Vanilla JS", true);
}

displayALL();