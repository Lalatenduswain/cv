# 📝 Online CV - Lalatendu K Swain

A sleek, modern, and customizable **Online CV** template built with HTML, CSS, and JavaScript. Showcase your professional journey with elegance and clarity.

---

## 🌟 Features

- **Dynamic Profile Rendering**  
  Powered by JavaScript to display key sections dynamically, such as skills, education, certifications, and experience.

- **Responsive Design**  
  Works seamlessly across devices, from desktops to mobiles.

- **No External Libraries Required**  
  Built using vanilla HTML, CSS, and JavaScript.

- **Easily Customizable**  
  Update your profile data by editing a single file (`profile.js`).

---

## 📂 Project Structure

```plaintext
.
├── index.html        # Main HTML entry point
├── css/
│   ├── style.css     # Styles for layout and responsiveness
├── js/
│   ├── profile.js    # Dynamic profile data and rendering logic
├── assets/
│   ├── images/       # Folder for profile picture and additional images
├── README.md         # Documentation for the project
```

---

## 🚀 Getting Started

### Step 1: Clone the Repository

```bash
git clone https://github.com/yourusername/online-cv.git
```

### Step 2: Open the Directory

```bash
cd online-cv
```

### Step 3: Open `index.html` in Your Browser

Simply double-click the `index.html` file to open it in your default web browser.

---

## 🛠️ Customization

### Editing Profile Data

All the content is powered by `profile.js`. Modify the file in the `js/` folder to add or edit your details. Below is an example of the profile data structure:

```javascript
const profileData = {
  title: "Resume",
  name: "Lalatendu K Swain",
  sub_title: "Cybersecurity and Network Security Engineer",
  logoURL: "assets/images/dp.jpg",
  about: {
    intro: "A highly motivated cybersecurity professional...",
    contact: {
      email: "your@example.com",
      phone: "+91-9*********4",
      address: "Bangalore, India",
    },
  },
  skills: [
    { title: "Languages", value: "Bash Scripting, Python" },
    { title: "Tools", value: "Metasploit, Nessus, Burp Suite..." },
  ],
  experiences: [
    {
      organization: "Cerulean Information Technology",
      title: "Cloud and Network Security Engineer",
      date: "June 2019 - Present",
      details: [
        "Oversee RHEL-based firewall management...",
        "Conducted vulnerability assessments...",
      ],
    },
  ],
  education: [
    { alma: "Ravenshaw University", duration: "2007 - 2011", std: "Information Science and Telecommunication" },
    { alma: "Orissa Board, CHSE", duration: "2003 - 2005", std: "Higher Secondary (Class XII)" },
  ],
  certifications: [
    { desc: "Advanced Executive Program in Cybersecurity", date: "2023" },
    { desc: "CompTIA Network+ Certification", date: "2022" },
  ],
};
```

### Updating Styles

To change the design, open `css/style.css`. You can adjust:

- Font sizes
- Colors
- Layout spacing
- Section visibility

---

## 📸 Preview

Here’s how the CV will look:

![Online CV Screenshot](https://lh3.googleusercontent.com/pw/AP1GczP4XuYjP_UDsl4DtsJg31vO7YN20ynYfTqvAnynZZLx3uG2RExrGacqz-ueHP36qhIJYJEBgBAGb_q36DALbzwEfPcEZ-DU5syAuNJ1uFg0NsdEp61s=w1024)  
*(Replace this placeholder URL with an actual screenshot of your CV)*

---

## 🔗 Links

- [Live Demo](#) *(Replace this with the live site link)*
- [GitHub Repository](https://cv-lalatendu.pages.dev)

---

## 📜 License

This project is licensed under the [MIT License](LICENSE). You are free to use, modify, and distribute it as per the license terms.

---

## 🙌 Contributing

Contributions are welcome! To contribute:

1. Fork the repository.
2. Create a feature branch:
   ```bash
   git checkout -b feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add feature-name"
   ```
4. Push to your branch:
   ```bash
   git push origin feature-name
   ```
5. Open a pull request.

---

## 👤 Author

- **Lalatendu K Swain**  
  Cybersecurity and Network Security Engineer  
  📧 [swain@lalatendu.info](mailto:swain@lalatendu.info)  
  🌐 [LinkedIn Profile](https://www.linkedin.com/in/lalatenduswain/)
