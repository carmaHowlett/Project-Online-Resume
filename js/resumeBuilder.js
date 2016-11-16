var education = {
    "schools": [{
        "name": "Medicine Hat College",
        "location": "Medicine Hat, Alb, CA",
        "degree": "Bachelor of Applied Arts Visual Communications",
        "dates": "September 2010 - July 2013",
        "majors": ["Visul Communications", " Bachelor of Applied Arts"],
        "url": "https://www.mhc.ab.ca/ProgramsandCourses/Academic%20Programs/Programs%20of%20Study/Visual%20Communications.aspx"
    }, {
        "name": "Sheldon Williams Collegiate",
        "location": "Regina, Sask, CA",
        "degree": "Graduated from High School",
        "dates": "September 2000 - June 2010",
        "majors": ["Student stuff", " Grade Twelve Diploma"],
        "url": "https://www.mhc.ab.ca/ProgramsandCourses/Academic%20Programs/Programs%20of%20Study/Visual%20Communications.aspx"
    }],
    "onlineCourses": [{
        "title": "Frontend Web Development Nanodegree",
        "school": "Udacity",
        "dates": "July 26 - August 23",
        "url": "https://www.udacity.com/"
    }]
};

education.display = function() {
    education.schools.forEach(function(education) {
        // create new div for education
        $("#education").append(HTMLschoolStart);
        // concat Names, Location, Degree, Dates, Major
        var formattedName = HTMLschoolName.replace("%data%", education.name);
        var formattedLocation = HTMLschoolLocation.replace("%data%", education.location);
        var formattedDegree = HTMLschoolDegree.replace("%data%", education.degree);
        var formattedDates = HTMLschoolDates.replace("%data%", education.dates);
        var formattedMajor = HTMLschoolMajor.replace("%data%", education.majors);
        // Makes a String King that includes all of the detail string. This is quicker than typing out appen() for each formattedName string.
        var formattedEducation = formattedName + formattedLocation + formattedDegree + formattedDates + formattedMajor;
        // putting everything onto the site at this point
        $(".education-entry:last").append(formattedEducation);
    });
    // puts the "Online classes" h3 onto the page
    $("#education").append(HTMLonlineClasses);

    education.onlineCourses.forEach(function(education) {
        // create new div with "enducation-entry" that we need to apped to. Makes a div for all of the Online Courses details.
        $("#education").append(HTMLschoolStart);
        // concat
        var formattedTitle = HTMLonlineTitle.replace("%data%", education.title);
        var formattedSchool = HTMLonlineSchool.replace("%data%", education.school);
        var formattedDates = HTMLonlineDates.replace("%data%", education.dates);
        var formattedUrl = HTMLonlineURL.replace("%data%", education.url).replace("%url%", education.url);
        var formattedCourse = formattedTitle + formattedSchool + formattedDates + formattedUrl;
        // putting everything onto the site at this point
        $(".education-entry:last").append(formattedCourse);
    });
};

education.display();

var bio = {
    "name": "Lucas Howlett",
    "role": "Creative Director",
    "contacts": {
        "mobile": "306-537-5961",
        "email": "lucas.howlett4@gmail.com",
        "github": "carmaHowlett",
        "location": "Regina, Sask, CA"
    },
    "welcomeMessage": "Welcome to my resume. Have a nice day!",
    "skills": ["Self motivated", "Takes initiative", "Excellent creativity", "High level of energy", "Strong eye for fine detail", "Strong verbal communication"],
    "biopic": "images/me.jpg"
};

bio.display = function() {
    var formattedName = HTMLheaderName.replace("%data%", "Lucas Howlett");
    var formattedRole = HTMLheaderRole.replace("%data%", "Creative Director");
    $("#header").prepend(formattedRole);
    $("#header").prepend(formattedName);

    var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
    var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
    var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
    var formattedWelcome = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
    var formattedBiopic = HTMLbioPic.replace("%data%", bio.biopic);
    $("#header").append(formattedBiopic);
    $("#topContacts, #footerContacts").append(formattedMobile, formattedEmail, formattedGithub, formattedLocation);

    $("#header").append(formattedWelcome);

    $("#header").append(HTMLskillsStart);

    bio.skills.forEach(function(skill) {
        var formattedSkill = HTMLskills.replace("%data%", skill);
        $("#skills").append(formattedSkill);
    });
};

bio.display();

var work = {
    "jobs": [{
        "employer": "Earls Kitchen & Bar",
        "title": "Expeditor",
        "location": "Regina, SK, CA",
        "dates": "May 2010 - August 2010",
        "description": "Food Quality Control"
    }, {
        "employer": "AdSpark Communications",
        "title": "Summer Work-term Graphic Designer",
        "location": "Regina, SK, CA",
        "dates": "April 2012 - May 2012",
        "description": "Assistant Junior Graphic Designer"
    }, {
        "employer": "tentree international",
        "title": "Design Lead, Art Director & Co-Creator",
        "location": "Regina, SK, CA",
        "dates": "June 2011 - February 2015",
        "description": "Head of all Design"
    }, {
        "employer": "carma",
        "title": "Creative Director",
        "location": "Regina, SK, CA",
        "dates": "September 2015 - Present",
        "description": "Master of Design"
    }]
};

work.display = function() {
    work.jobs.forEach(function(job) {
        // create new div for work experience
        $("#workExperience").append(HTMLworkStart);
        // concat empoyer and title
        var formattedEmployer = HTMLworkEmployer.replace("%data%", job.employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", job.title);
        var formattedEmployerTitle = formattedEmployer + formattedTitle;

        $(".work-entry:last").append(formattedEmployerTitle);

        // concat Locations
        var formattedLocation = HTMLworkLocation.replace("%data%", job.location);
        $(".work-entry:last").append(formattedLocation);
        // concat Dates
        var formattedDates = HTMLworkDates.replace("%data%", job.dates);
        $(".work-entry:last").append(formattedDates);
        // concat Descriptions
        var formattedDescription = HTMLworkDescription.replace("%data%", job.description);
        $(".work-entry:last").append(formattedDescription);
    });
};

work.display();


var projects = {
    "projects": [{
        "title": "Logo Design",
        "dates": "September 2015 - October 2015",
        "description": "Developing preliminary logos and forming the final branding.",
        "images": ["images/logo.jpg", "images/logo-2.jpg", "images/logo-3.jpg"]
    }, {
        "title": "carma Website Design",
        "dates": "October 2015 - April 2016",
        "description": "Creating the first version of the carma website.",
        "images": ["images/website.jpg", "images/website-2.jpg", "images/website-3.jpg"]
    }]
};

projects.display = function() {
    projects.projects.forEach(function(project) {
        $("#projects").append(HTMLprojectStart);

        var formattedTitle = HTMLprojectTitle.replace("%data%", project.title);
        $(".project-entry:last").append(formattedTitle);

        var formattedDates = HTMLprojectDates.replace("%data%", project.dates);
        $(".project-entry:last").append(formattedDates);

        var formattedDescription = HTMLprojectDescription.replace("%data%", project.description);
        $(".project-entry:last").append(formattedDescription);

        project.images.forEach(function(image) {
            var formattedImage = HTMLprojectImage.replace("%data%", image);
            $(".project-entry:last").append(formattedImage);
        });
    });
};

projects.display();


$("#mapDiv").append(googleMap);
