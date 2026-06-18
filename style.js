const skills = [
    "Python",
    "Data Analysis",
    "JavaScript",
    "HTML & CSS",
    "Problem Solving",
    "Git & GitHub"
];

const skillList = document.getElementById("skillList");

skills.forEach(skill => {
    const li = document.createElement("li");
    li.textContent = skill;
    skillList.appendChild(li);
});
