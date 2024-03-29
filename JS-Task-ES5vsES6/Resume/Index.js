let Resume_data = [
    {
        Name : "Shameema",
        Email : "shameemakamil97@gmail.com",
        Mobile_no : 9876543210,
        Address : "Chennai",
        Designation : "QAE",
        Working_Experience : "3Years",
        Company : "Amazon",
    },
    {
        Educational_Qualification : {
            UG : {
                Percent : 73.00,
                Passout_year : 2019
            },
            HSC : {
                Percent : 70.00,
                Passout_year : 2015
            },
            SSLC : {
                Percent : 91.00,
                Passout_year : 2013
            }
        }
    },
    {
        Skills : {
            Testing : ["Manual Testing", "Automation Testing", "Regression Testing", "Sanity Testing"],
            FullStackDevelopment : ["Javascript", "HTML", "CSS", "Bootstrap", "DOM", "React", "Node.js"],
            Database : ["SQL(MySQL_Server)", "MongoDB", "RDBMS"],
            API_and_Tools : ["visual studio", "MongoDB_Compass", "MySQL_Server", "Selenium_Webdriver"]
        }
    },
    {
        Links : {
            Linked_in : "https://www.linkedin.com/in/shameema-kamil-9649972a5/",
            GitHub : "https://github.com/ShameemaAfzal"
        }
    },
    {
        Certifications : {
            FullstackDevelopment : "GUVI, IIT-Madras, Chennai"
        }
    }
]


console.log(JSON.stringify(Resume_data));

//fro loop
for(var i=0;i<Resume_data.length;i++)
    {
        console.log(Resume_data[i])
    }

// forEach loop
   Resume_data.forEach((item)=>{
    console.log(item)
   });

//for of loop
for(let x of Resume_data){
    console.log(x);
}

//for in loop
for(let y in Resume_data){
    console.log(y)
    console.log(Resume_data[y])
}
