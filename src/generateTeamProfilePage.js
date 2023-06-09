function generateManager(manager) {
    return `
        <div class="card">
            <div class="card-head">
            ${manager.getName()} <br> ☕ ${manager.getRole()} 
            </div>
            <div class="card-main">
                <div class="body-text">ID: ${manager.getID()}</div>
                <div class="body-text">Email: <br> <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></div>
                <div class="body-text">Office Number: ${manager.getOfficeNumber()}</div>
            </div>
        </div>
  `;
}

function generateEngineer(engineer) {
    return `
        <div class="card">
            <div class="card-head">
            ${engineer.getName()} <br> ☕ ${engineer.getRole()} 
            </div>
            <div class="card-main">
                <div class="body-text">ID: ${engineer.getID()}</div>
                <div class="body-text">Email: <br> <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></div>
                <div class="body-text">Github: <br> <a href="https://github.com/${engineer.getGithub()}" target="_blank">${engineer.getGithub()}</a></div>
            </div>
        </div>
  `;
}

function generateIntern(intern) {
    return `
        <div class="card">
            <div class="card-head">
            ${intern.getName()} <br> ☕ ${intern.getRole()} 
            </div>
            <div class="card-main">
                <div class="body-text">ID: ${intern.getID()}</div>
                <div class="body-text">Email: <br> <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></div>
                <div class="body-text">School: ${intern.getSchool()}</div>
            </div>
        </div>
  `;
}

module.exports = { generateEngineer, generateManager, generateIntern }

