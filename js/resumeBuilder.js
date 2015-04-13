var bio = {
    "name": "Anton Voskobovich",
    "role": "Developer",
    "skills": ["evolutioning", "triagering", "paraprogramming"],
    "welcomeMessage": "Getting things together",
    "contacts": {
        "mobile": "79112332346",
        "email": "anton.voskobovich@gmail.com",
        "twitter": "@northcapen",
        "github": "northcapen",
        "location": "Tallinn"
    },
    "display": function () {
        var $topContacts = $('#topContacts');
        var $footerContacts = $('#footerContacts');
        var $header = $('#header');

        $header
            .prepend(HTMLheaderRole.replace('%data%', this.role))
            .prepend(HTMLheaderName.replace('%data%', this.name))
            .append(HTMLbioPic.replace('%data%', 'images/me.jpg'))
            .append(HTMLwelcomeMsg.replace('%data%', this.welcomeMessage));

        $topContacts.
            append(HTMLmobile.replace('%data%', this.contacts.mobile)).
            append(HTMLemail.replace('%data%', this.contacts.email)).
            append(HTMLtwitter.replace('%data%', this.contacts.twitter)).
            append(HTMLgithub.replace('%data%', this.contacts.github)).
            append(HTMLgithub.replace('%data%', this.contacts.github)).
            append(HTMLlocation.replace('%data%', this.contacts.location));

        $footerContacts.append($topContacts.html());
        $header.append(HTMLskillsStart);

        var $skills = $('#skills');
        for (var si = 0; si < this.skills.length; si++) {
            $skills.append(HTMLskills.replace('%data%', this.skills[si]));
        }
    }
};
var projects = {
    "list": [
        {
            "name": "AIS",
            "years": "2007-2008",
            "location": "Thailand",
            "description": "Billing system for mobile phones quick top up"
        },
        {
            "name": "Web Banking Orange Gray",
            "years": "2010 - 2012",
            "location": "CIS",
            "description": "Third generation of Openway Web Banking"
        },
        {
            "name": "Web Banking Rainbow",
            "years": "2011 - 2015",
            "country": "CIS",
            "description": "Fourth generation of Openway Web Banking"
        },
        {
            "name": "Panda",
            "years": "2015 - ...",
            "country": "Russia/Estonia/Kazakhstan",
            "description": "New awesome Web Banking"
        }
    ],
    "display": function () {
        var $projects = $('#projects');
        for (var p in this.list) {
            var project = this.list[p];
            $projects.append(HTMLprojectStart);
            var thisProjectEntry = $('.project-entry:last');

            thisProjectEntry.append(HTMLprojectTitle.replace('%data%', project.name));
            thisProjectEntry.append(HTMLprojectDates.replace('%data%', project.years));
            thisProjectEntry.append(HTMLprojectDescription.replace('%data%', project.description));
        }
    }
};
var work = {
    "jobs": [
        {
            "position": "Software Engineer",
            "employer": "Openway",
            "yearsWorked": 10,
            "location": "СПб, Петроградская наб. 36",
            "dates": "2005 - ..."
        },
        {
            "position": "Junior Software Engineer",
            "employer": "Edudata",
            "yearsWorked": 0.5,
            "location": "СПб, Б. Конюшенная, 29",
            "dates": "2004",
            "description": "Online education company"
        }
    ],
    "display": function () {
        for (var i = 0; i < this.jobs.length; i++) {
            $('#workExperience').append(HTMLworkStart);
            var job = this.jobs[i];
            var employer = HTMLworkEmployer.replace('%data%', job.employer);
            var title = HTMLworkTitle.replace('%data%', job.position);
            var workEntry = $('.work-entry:last');

            workEntry.append(employer + title);
            workEntry.append(HTMLworkDates.replace('%data%', job.dates));
            workEntry.append(HTMLworkLocation.replace('%data%', job.location));
        }
    }
};
var education = {
    "schools": [
        {
            "name": "Mathematic mechanical faculty, SPBSU",
            "dates": "Graduated in 2006",
            "degree": "with honours",
            "url": "http://www.math.spbu.ru/rus/",
            "location": ["СПб, Университетский пр. 38", "СПб, Камская ул. 16", "СПб, 14 линия 29", "СПб, 10 линия, 33"]
        },
        {
            "name": "FML # 239",
            "dates": "Graduated in 2001",
            "degree": "End of senior classes",
            "url": "http://www.239.ru/",
            "location": "СПб, Кирочная, 8"
        },
        {
            "name": "School # 70",
            "dates": "1996 - 1999",
            "degree": "End of primary school",
            "url": "http://www.gimnazia70.spb.ru/",
            "location": "СПб, ул. Литературов 11-13"
        }
    ],
    "onlineCourses": [
        {
            "title": "HTML and CSS",
            "school": "Udacity",
            "date": 2015
        },
        {
            "title": "Javascript Basics",
            "school": "Udacity",
            "date": 2015
        },
        {
            "title": "JQuery",
            "school": "Udacity",
            "date": 2015
        },
        {
            "title": "Object-oriented Javascript",
            "school": "Udacity",
            "date": 2015
        },
        {
            "title": "Intro to AJAX",
            "school": "Udacity",
            "date": 2015
        },
        {
            "title": "Responsive Design",
            "school": "Udacity",
            "date": 2015
        }
    ],
    "display": function () {
        for (var i = 0; i < this.schools.length; i++) {
            $('#education').append(HTMLschoolStart);
            var school = this.schools[i];
            var educationEntry = $('.education-entry:last');

            educationEntry.append(HTMLschoolName.replace('%data%', school.name) + HTMLschoolDegree.replace('%data%', school.degree));

            if (typeof school.location == 'object') {
                educationEntry.append(HTMLschoolLocation.replace('%data%', school.location[0]));
            } else {
                educationEntry.append(HTMLschoolLocation.replace('%data%', school.location));
            }
            educationEntry.append(HTMLschoolDates.replace('%data%', school.dates));
        }

        $('#education').append(HTMLonlineClasses);

        for (i = 0; i < this.onlineCourses.length; i++) {
            school = this.onlineCourses[i];
            $('#education').append(HTMLschoolStart);
            var educationEntry = $('.education-entry:last');

            educationEntry.append(HTMLonlineTitle.replace('%data%', school.school) + HTMLonlineSchool.replace('%data%', school.title));
            educationEntry.append(HTMLonlineDates.replace('%data%', school.date));
        }

    }
};

bio.display();
projects.display();
work.display();
education.display();

$(document).click(function (loc) {
    logClicks(loc.pageX, loc.pageY);
});

function logClicks(x, y) {
    console.log(x, y);
}

function inName(fullName) {
    var names = fullName.split(' ');
    names[0] = names[0].charAt(0).toUpperCase() + names[0].slice(1).toLowerCase();
    names[1] = names[1].toUpperCase();
    return names.join(' ');
}
