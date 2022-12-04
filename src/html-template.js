// Template helper code

// function to export code for html

module.exports = (team) => {
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="utf-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <title>Team Profile Generator</title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
            rel="stylesheet"
            href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        />
    </head>

    <body>
        <header class="container-fluid">
            <div class="row">
                <div class="col-12 jumbotron jumbotron-fluid bg-danger text-white">
                    <h1 class="text-center">The Team</h1>
                </div>
            </div>
        </header>


        <main class="container">
            <div class="row">


             <!-- where team cards go  -->
                <div class="row justify-content-center">
                    ${createCard(team)}
                </div>
            </div>
        </main>
    </body>
    </html>
`;
};


// function to create team cards from template
const createCard = team => {

    //manager card html template
        const managerCard = manager => {
            return `
            <div class="card m-3 shadow"> 
                    <div class="card-header bg-primary text-white">
                      <h3 class="card-title">${manager.getName()}</h3>
                      <h4 class="card-text">${manager.getRole()}</h4>
                    </div>
                    <div class="card-body bg-light">
                        <ul class="list-group list-group-flush border">
                            <li class="list-group-item">ID: ${manager.getId()}</li>
                            <li class="list-group-item">Email: <a href="${manager.getEmail()}">${manager.getEmail()}</a></li>
                            <li class="list-group-item">Office Number: ${manager.getOfficeNumber()}</li>
                          </ul>
                    </div>
                </div>
            `;
        };


    // engineer card html template
        const engineerCard = engineer => {
            return `
            <div class="card m-3 shadow">
                    <div class="card-header bg-primary text-white">
                      <h3 class="card-title">${engineer.getName()}</h3>
                      <h4 class="card-text">${engineer.getRole()}</h4>
                    </div>
                    <div class="card-body bg-light">
                        <ul class="list-group list-group-flush border">
                            <li class="list-group-item">ID: ${engineer.getId()}</li>
                            <li class="list-group-item">Email: <a href="${engineer.getEmail()}">${engineer.getEmail()}</a></li>
                            <li class="list-group-item">GitHub: <a href="https://github.com/${engineer.getGitHub()}">${engineer.getGitHub()}</a></li>
                          </ul>
                    </div>
                </div>
            `;
        };






}