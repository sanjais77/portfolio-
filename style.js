const students = [
    { name: "Arun", maths: 85, science: 78, english: 90 },
    { name: "Priya", maths: 92, science: 88, english: 95 },
    { name: "Kiran", maths: 70, science: 65, english: 75 },
    { name: "Divya", maths: 88, science: 90, english: 85 },
    { name: "Rahul", maths: 60, science: 55, english: 65 }
];

function calculateAverage(student) {
    return ((student.maths + student.science + student.english) / 3).toFixed(2);
}

function loadTable() {
    const tbody = document.querySelector("#studentTable tbody");

    students.forEach(student => {
        const avg = calculateAverage(student);

        const row = `
            <tr>
                <td>${student.name}</td>
                <td>${student.maths}</td>
                <td>${student.science}</td>
                <td>${student.english}</td>
                <td>${avg}</td>
            </tr>
        `;

        tbody.innerHTML += row;
    });
}

function findTopStudent() {
    let top = null;
    let highest = 0;

    students.forEach(s => {
        const avg = (s.maths + s.science + s.english) / 3;
        if (avg > highest) {
            highest = avg;
            top = s.name;
        }
    });

    document.getElementById("topStudent").innerText =
        "🏆 Top Student: " + top;
}

function drawChart() {
    const ctx = document.getElementById("chart");

    const labels = students.map(s => s.name);
    const data = students.map(s =>
        (s.maths + s.science + s.english) / 3
    );

    new Chart(ctx, {
        type: "bar",
        data: {
            labels: labels,
            datasets: [{
                label: "Average Marks",
                data: data
            }]
        }
    });
}

loadTable();
findTopStudent();
drawChart();