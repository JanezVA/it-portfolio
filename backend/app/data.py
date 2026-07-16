PORTFOLIO_DATA = {
    "about": {
        "name": "Janez Vera P. Acosta",
        "title": "IT & Software Engineering Graduate",
        "tagline": "Building scalable backend services and responsive user experiences.",
        "bio": "Passionate and detail-oriented Information Technology graduate specializing in Full-Stack Web Development. Proficient in Python for backend development and React.js for crafting modern frontend interfaces. Eager to apply software engineering principles, database design, and cloud technologies to solve real-world problems in an agile environment.",
        "avatar_url": "", # Will be blank or we can render a generic icon in frontend
        "resume_url": "#",
        "socials": {
            "github": "https://github.com/JanezVA",
            "linkedin": "https://www.linkedin.com/in/janez-vera-acosta-a8373136b/",
            "email": "janezveraac@gmail.com"
        },
        "education": [
            {
                "degree": "Bachelor of Science in Information Technology",
                "institution": "Saint Louis University, Baguio City",
                "period": "2022 - 2026",
                "gpa": "3.8/4.0",
                "details": "Specialized in Software Engineering. Relevant coursework: Database Management Systems, Data Structures & Algorithms, Web Application Development, Object-Oriented Programming, and Cloud Computing."
            }
        ],
        "certifications": [
            {
                "title": "Full-Stack Web Development with React",
                "issuer": "Coursera",
                "date": "2023",
                "credential_url": "#"
            },
            {
                "title": "Python for Everybody Specialization",
                "issuer": "Coursera",
                "date": "2022",
                "credential_url": "#"
            }
        ]
    },
    "skills": {
        "languages": [
            {"name": "Python", "level": 90, "category": "Core"},
            {"name": "JavaScript", "level": 85, "category": "Core"},
            {"name": "SQL (PostgreSQL/SQLite)", "level": 80, "category": "Database"},
            {"name": "HTML5 & CSS3", "level": 88, "category": "Design"}
        ],
        "frameworks": [
            {"name": "React.js", "level": 85, "category": "Frontend"},
            {"name": "FastAPI", "level": 80, "category": "Backend"},
            {"name": "Flask", "level": 75, "category": "Backend"},
            {"name": "Express.js", "level": 70, "category": "Backend"}
        ],
        "tools": [
            {"name": "Git & GitHub", "level": 88, "category": "Workflow"},
            {"name": "Docker", "level": 75, "category": "DevOps"},
            {"name": "Postman", "level": 85, "category": "Testing"},
            {"name": "Linux/Bash", "level": 78, "category": "System"}
        ]
    },
    "projects": [
        {
            "id": 1,
            "title": "SmartDev Project Manager",
            "description": "A collaborative task management application for developers featuring Kanban boards, deadline alerts, and progress analytics.",
            "tech": ["React.js", "FastAPI", "SQLite", "CSS Modules"],
            "features": [
                "Interactive Drag-and-Drop Kanban Board.",
                "Real-time task search, sorting, and tag-filtering.",
                "FastAPI backend with JWT-based user authentication.",
                "Dark/Light theme toggle with persisted settings."
            ],
            "github_url": "https://github.com",
            "live_url": "https://example.com"
        },
        {
            "id": 2,
            "title": "Automated Stock & News Scraper",
            "description": "A python-based background data aggregator that fetches financial data and recent news articles, analyses sentiments, and mails reports.",
            "tech": ["Python", "BeautifulSoup", "Pandas", "SMTP"],
            "features": [
                "Scheduled web scraping of financial news websites.",
                "Sentiment analysis using NLP libraries to rank article positivity.",
                "Automated daily HTML reports compiled with Pandas and emailed using SMTP.",
                "Comprehensive logging and error recovery mechanism."
            ],
            "github_url": "https://github.com",
            "live_url": ""
        },
        {
            "id": 3,
            "title": "CleanEnergy Monitor API",
            "description": "A RESTful backend service built to ingest IoT sensor readings from green energy grids and serve real-time power analytics.",
            "tech": ["Python", "FastAPI", "PostgreSQL", "Docker"],
            "features": [
                "High-performance endpoints handling 100+ concurrent data payloads.",
                "Robust error handling and data validation using Pydantic.",
                "Full Dockerization for easy local deployment and container orchestration.",
                "Auto-generated API interactive documentation via Swagger UI."
            ],
            "github_url": "https://github.com",
            "live_url": ""
        }
    ]
}
