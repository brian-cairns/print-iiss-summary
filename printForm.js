const params = new URLSearchParams(window.location.search)
for (const [key, value] of params) { let id = value; }

//Show animation 
document.getElementById('pageTitle').style.display = "none";
for (let i = 1; i < 19; i++) {
    document.getElementById(`formSection${1}`).style.display = "none";
}

//fetch data
const url = 'https://pffm.azurewebsites.net/getForms'
const query = {
    form: 'IISSSession',
    itemId: id 
}
const header = {
    'Content-Type': 'application/json',
    "Access-Control-Allow-Origin": "*"
}

fetch(url, {
    method: "GET",
    headers: header,
    body: JSON.stringify(query)
})
    .then(response => response.json())
    .then(data => populatePage(data))
    .catch(console.error)

async function populatePage(data) {
    document.getElementById('staffEmail').innerHTML = data.employeeEmail;
    document.getElementById('clientName').innerHTML = data.clientName;
    document.getElementById('location').innerHTML = data.serviceLocation;
    document.getElementById('date').innerHTML = data.date;
    document.getElementById('start').innerHTML = data.start;
    document.getElementById('end').innerHTML = data.end;
    document.getElementById('technician').innerHTML = data.technicianName;
    document.getElementById('followUp').innerHTML = data.followUp;
    document.getElementById('reportableText').innerHTML = data.reportable;
    document.getElementById('selfInjuryText').innerHTML = data.selfInjury;
    document.getElementById('aggressiveText').innerHTML = data.aggressive;
    document.getElementById('complianceText').innerHTML = data.compliance;
    document.getElementById('dangerous').innerHTML = data.dangerous;
    document.getElementById('hospitalized').innerHTML = data.hospitalized;
    document.getElementById('eat').innerHTML = data.eat;
    document.getElementById('goal1-Text').innerHTML = data.goal1;
    document.getElementById('goalComments1').innerHTML = data.goalComments1;
    document.getElementById('goal2-Text').innerHTML = data.goal2;
    document.getElementById('goalComments2').innerHTML = data.goalComments2;
    document.getElementById('goalSummary1').innerHTML = data.goalSummary1;
    document.getElementById('goalSummary2').innerHTML = data.goalSummary2;
    document.getElementById('goalDetails2').innerHTML = data.goalDetails2;
    document.getElementById('goalDetails1').innerHTML = data.goalDetails1;
    document.getElementById('trials1-Text').innerHTML = data.trials1;
    document.getElementById('promptingText').innerHTML = data.prompting;
    document.getElementById('trials2-Text').innerHTML = data.trials2;
    document.getElementById('prompting2-Text').innerHTML = data.prompting2;
    document.getElementById('goalSummaryFollowUp1').innerHTML = data.goalSummaryFollowUp1;
    document.getElementById('goalSummaryFollowUp2').innerHTML = data.goalSummaryFollowUp2;
    document.getElementById('todaysDate').innerHTML = data.todaysDate;
    document.getElementById('staffName').innerHTML = data.staffName;
    showPage()
}

function showPage() {
    document.getElementById('loadingAnimationSection').style.display = "none";
    document.getElementById('pageTitle').style.display = "none";
    for (let i = 1; i < 19; i++) {
       document.getElementById(`formSection${1}`).style.display = "none";
    }
}

let printToPDF = document.getElementById('printToPDF')
printToPDF.addEventListener('click', (e) = {})

let exit = document.getElementById('exit') 
exit.addEventListener('click', (e) => {
    history.back()
})