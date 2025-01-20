const profileData = {
    title: "Resume",
    name: "Lalatendu K Swain",
    sub_title: "Cybersecurity and Network Security Engineer",
    logoURL: "assets/images/dp.jpg",
    about: {
      intro: `A highly motivated cybersecurity professional with over five years of expertise in network security, incident response, and vulnerability management. Proficient in tools like Metasploit, Nessus, Burp Suite, and Splunk SIEM, I bring hands-on experience in securing enterprise systems, mitigating threats, and implementing robust security measures. Passionate about leveraging my skills in securing critical infrastructures and staying ahead of evolving cyber threats.`,
      contact: {
        email: "swain@lalatendu.info",
        phone: "+91-933 8686 594",
        address: "Bangalore, India",
      },
    },
    links: [
      {
        title: "LinkedIn",
        src: "https://www.linkedin.com/in/lalatenduswain/",
        iconClass: "fa-brands fa-linkedin-in",
      },
      {
        title: "Github",
        src: "https://github.com/lalatenduswain/",
        iconClass: "fa-brands fa-github",
      },
      {
        title: "Personal Blog",
        src: "https://blog.lalatendu.info/",
        iconClass: "fa-solid fa-blog",
      },
    ],
    skills: [
      {
        title: "Languages",
        value: "Bash Scripting, Python",
      },
      {
        title: "Tools",
        value: "Metasploit, Nessus, Burp Suite, Splunk SIEM, OpenVAS, Wireshark, TCPDump, Shodan, BeEF, John the Ripper",
      },
      {
        title: "Operating Systems",
        value: "Linux (RHEL, Kali, Parrot OS), Windows",
      },
      {
        title: "Cloud/Virtualization",
        value: "AWS, Proxmox, ESXi",
      },
      {
        title: "Frameworks/Standards",
        value: "NIST Incident Response Framework, MITRE ATT&CK Framework, Cyber Kill Chain",
      },
      {
        title: "Security Practices",
        value: "Incident Response, Vulnerability Management, Penetration Testing (VAPT), Malware Analysis, Web Exploitation, Application Security",
      },
      {
        title: "Network Skills",
        value: "LAN/WAN Configuration, Firewall Management, Zscaler, PKI",
      },
    ],
    experiences: [
      {
        organization: "Cerulean Information Technology",
        title: "Cloud and Network Security Engineer",
        date: "June 2019 - Present",
        details: [
          "Oversee RHEL-based firewall management, network configuration, and cloud service administration for enterprise clients.",
          "Conducted vulnerability assessments, penetration testing, and threat analysis to secure enterprise systems.",
          "Proficiently managed and monitored incidents using tools like Nessus, Splunk, and Metasploit, reducing response time significantly.",
          "Developed and implemented security policies and procedures to enhance infrastructure protection.",
        ],
      },
    ],
    projects: [
      {
        title: "Hack the Box Training",
        duration: "Ongoing",
        desc: `Worked on over 40+ machines to enhance penetration testing and ethical hacking skills, focusing on real-world vulnerabilities.`,
      },
      {
        title: "Vulnhub Training",
        duration: "Ongoing",
        desc: `Completed training on 80+ machines, mastering exploit techniques, and vulnerability mitigation strategies.`,
      },
    ],
    education: [
      {
        alma: "Ravenshaw University",
        duration: "2007 - 2011",
        std: "Information Science and Telecommunication",
      },
      {
        alma: "Orissa Board, CHSE",
        duration: "2003 - 2005",
        std: "Higher Secondary (Class XII)",
      },
    ],
    certifications: [
      {
        desc: `Advanced Executive Program in Cybersecurity from IIIT Bangalore & NPCI`,
        date: "2023",
      },
      {
        desc: `CompTIA Network+ Certification`,
        date: "2022",
      },
    ],
    events: [],
  };
  
  // Rendering Function
  function renderProfile(data) {
    console.log(`Name: ${data.name}`);
    console.log(`Subtitle: ${data.sub_title}`);
    console.log(`Email: ${data.about.contact.email}`);
    console.log(`Phone: ${data.about.contact.phone}`);
    console.log(`Address: ${data.about.contact.address}`);
    console.log("\nProfessional Summary:");
    console.log(data.about.intro);
  
    // Skills
    console.log("\nSkills:");
    data.skills.forEach((skill) => {
      console.log(`  - ${skill.title}: ${skill.value}`);
    });
  
    // Professional Experience
    console.log("\nProfessional Experience:");
    data.experiences.forEach((exp) => {
      console.log(`  - ${exp.organization} (${exp.date}):`);
      console.log(`    Title: ${exp.title}`);
      exp.details.forEach((detail) => console.log(`    * ${detail}`));
    });
  
    // Projects
    console.log("\nProjects:");
    data.projects.forEach((project) => {
      console.log(`  - ${project.title} (${project.duration}):`);
      console.log(`    ${project.desc}`);
    });
  
    // Education
    console.log("\nEducation:");
    data.education.forEach((edu) => {
      console.log(`  - ${edu.alma}`);
      console.log(`    ${edu.duration}`);
      console.log(`    ${edu.std}`);
    });
  
    // Certifications
    console.log("\nCertifications:");
    data.certifications.forEach((cert) => {
      console.log(`  - ${cert.desc} (${cert.date})`);
    });
  }
  
  // Render the Profile Data
  renderProfile(profileData);  