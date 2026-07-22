PORTFOLIO_DATA = {
    "about": {
        "name": "Janez Vera P. Acosta",
        "title": "Information Technology Graduate",
        "tagline": "Building scalable backend services and responsive user experiences.",
        "bio": "Passionate and detail-oriented Information Technology graduate specializing in Full-Stack Web Development. Proficient in Python for backend development and React.js for crafting modern frontend interfaces. Eager to apply software engineering principles, database design, and cloud technologies to solve real-world problems in an agile environment.",
        "avatar_url": "",  # Will be blank or we can render a generic icon in frontend
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
                "details": "Specialized in Software Engineering. Relevant coursework: Database Management Systems, Data Structures & Algorithms, Web Application Development, Object-Oriented Programming, and Cloud Computing."
            }
        ],
        "certifications": [
            {
                "title": "Civil Service Exam (Professional Level)",
                "issuer": "Civil Service Commission (CSC)",
                "date": "March 2025",
                "credential_url": "#"
            },
            {
                "title": "Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate",
                "issuer": "Oracle",
                "date": "October 2025",
                "credential_url": "#"
            },
            {
                "title": "Oracle Cloud Infrastructure 2025 Certified Foundations Associate",
                "issuer": "Oracle",
                "date": "October 2025",
                "credential_url": "#"
            }
        ]
    },
    "skills": {
        "languages": [
            {"name": "HTML5 & CSS3", "level": 90, "category": "Web Development"},
            {"name": "JavaScript", "level": 80, "category": "Web Development"},
            {"name": "Java", "level": 60, "category": "Programming"},
            {"name": "Python", "level": 20, "category": "Programming"}
        ],
        "frameworks_platforms": [
            {"name": "WordPress", "level": 90, "category": "Web Development"},
            {"name": "UNIX (Linux/Ubuntu/RedHat)", "level": 70, "category": "Operating Systems"},
            {"name": "Windows Server", "level": 95, "category": "Operating Systems"}
        ],
        "tools": [
            {"name": "Git, GitHub & GitLab", "level": 80, "category": "Software Development"},
            {"name": "Docker", "level": 70, "category": "Software Development"},
            {"name": "VSCode & IntelliJ", "level": 85, "category": "IDEs"},
            {"name": "Wireshark & Cisco Packet Tracer", "level": 60, "category": "IT Support & Network"},
            {"name": "Figma", "level": 80, "category": "Design"}
        ],
        "cloud": [
            {"name": "Google Cloud", "level": 70, "category": "Cloud Technologies"},
            {"name": "Microsoft Azure", "level": 60, "category": "Cloud Technologies"},
            {"name": "Amazon Web Services", "level": 55, "category": "Cloud Technologies"}
        ],
        "testing_kpi": [
            {"name": "Katalon", "level": 60, "category": "Feature Testing & KPI"},
            {"name": "Postman", "level": 40, "category": "Feature Testing & KPI"},
            {"name": "Apache JMeter", "level": 30, "category": "Feature Testing & KPI"}
        ],
        "productivity": [
            {"name": "Google Workspace (Docs, Sheets, Slides)", "level": 95, "category": "Productivity Tools"},
            {"name": "Microsoft (Word, Excel, 365)", "level": 95, "category": "Productivity Tools"},
            {"name": "Canva", "level": 90, "category": "Productivity Tools"},
            {"name": "Adobe Photoshop", "level": 75, "category": "Productivity Tools"},
            {"name": "Adobe Illustrator", "level": 60, "category": "Productivity Tools"}
        ],
        "ai_productivity": [
            {"name": "GitHub CoPilot", "level": 75, "category": "AI Productivity & Integration"},
            {"name": "Claude API Integration", "level": 80, "category": "AI Productivity & Integration"},
            {"name": "Google AntiGravity", "level": 75, "category": "AI Productivity & Integration"},
            {"name": "Gemini AI", "level": 90, "category": "AI Productivity & Integration"}
        ]
    },
    "projects": [
        {
            "id": 1,
            "title": "IT Thesis: Teachers Camp Booking Website",
            "description": "A web-based application booking system exclusively for Baguio Teachers Camp.",
            "tech": ["React.js", "Fetch API", "Node.js", "CSS Modules", "MongoDB Atlas", "Google Cloud Storage", "npm", "Postman"],
            "features": [
                "User Authentication: secure registration and login system",
                "Facility Browsing: view available facilities with detailed information",
                "Reservation Management: multi-step reservation form with real-time availability checking, document upload (Letter of Intent, IDs, etc.), and payment proof submission",
                "Reservation History: track all bookings and their status",
                "Notifications: real-time updates on reservation status",
                "Profile Management: update personal information and preferences",
                "Admin Dashboard: comprehensive overview of reservations and statistics",
                "Admin Reservation Management: approve, decline, or modify reservations",
                "Admin User Management: manage guest accounts and staff users",
                "Admin Facility Management: add, edit, or remove facilities and amenities",
                "Document Verification: review uploaded documents (MOA, Service Contracts, IDs)",
                "Payment Tracking: monitor payment submissions and validations",
                "Reports & Analytics: generate insights on bookings and revenue",
                "Role-Based Access Control: different permissions for various staff roles"
            ],
            "github_url": "https://github.com",
            "live_url": ""
        },
        {
            "id": 2,
            "title": "Cupid's Letters",
            "description": "A web application where you can create interactive love letters.",
            "tech": ["HTML5", "CSS3", "JavaScript", "Canvas API", "Web Audio API", "Pointer Events API", "Twemoji", "lz-string", "Vercel Serverless Functions", "iTunes Search API", "Vercel"],
            "features": [
                "Personalization: To/From fields and a 1,500-character message box with a live counter",
                "Paper Themes: 9 options, each with a matching background gradient (Parchment, Sakura, Midnight Rose, Celestial, Sunset Glow, Lavender Dream, Ocean Breeze, Rose Gold Blush, Enchanted Forest)",
                "Fonts: 11 handwriting/script styles",
                "Wax Seals: 4 designs (heart, rose, star, clover)",
                "Particle Effects: 4 options (hearts, petals, stars, none)",
                "Stickers: 8 draggable types, placeable anywhere on the letter, deletable individually or all at once",
                "Live Preview: side-by-side envelope and letter views that update as you edit",
                "Song Search: search any title or artist via a same-origin serverless proxy to iTunes",
                "Acoustic Option: built-in procedural chime melody, no external audio needed",
                "Playback Controls: floating Now Playing widget with play/pause and mute",
                "Link Generation: compresses the whole letter into a single shareable link",
                "Recipient-First Display: recipient's name shown up front, not buried in encoded text",
                "Copy or Email: one-tap clipboard copy or a pre-filled email button",
                "Sealed Envelope: opens closed; breaking the wax seal triggers particles, music, and the letter animation",
                "Reading View: letter expands to full view, then folds back into the envelope on close",
                "Make Your Own: button to start a fresh letter from the recipient screen",
                "Consistent Emoji: Twemoji rendering instead of the OS's native emoji font",
                "Adaptive Contrast: text color automatically adjusts to stay readable against each theme's background",
                "Specific Error Messages: clear feedback if a song fails to load or play, instead of a generic failure"
            ],
            "github_url": "https://github.com/JanezVA/Cupids-Letters",
            "live_url": "https://cupids-letters.vercel.app"
        },
        {
            "id": 3,
            "title": "Storage Management System",
            "description": "Coming soon \u2014 details for this project are still being finalized.",
            "tech": [],
            "features": [],
            "github_url": "https://github.com",
            "live_url": ""
        }
    ]
}
