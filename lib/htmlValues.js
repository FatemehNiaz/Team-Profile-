const header = function () {
  return `
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>Team Profile</title>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
    </head>
    <body>

      <div class="jumbotron text-center">
        <div class="container">
          <h1>My Team</h1>
        </div>
      </div>

      <div class="container">

        <div class="col-md-12">
          <div class="row">`;
};

const footer = function () {
  return `
          </div>
        </div>

    </body>
  </html>
  `;
};

const managerHTML = function (data) {
  return `
    <div class="card m-2">
      <div class="card-header">
        <h1>${data.name}</h1>
        <h2>Manager</h2>
      </div>
      <div class="card-body">
        ID: ${data.id}
        <br />
        Email: <a href="mailto:${data.email}">${data.email}</a>
        <br />
        Office: ${data.officeNumber}
      </div>
    </div>
  `;
};

const internHTML = function (data) {
  return `
    <div class="card m-2">
      <div class="card-header">
        <h1>${data.name}</h1>
        <h2>Intern</h2>
      </div>
      <div class="card-body">
        ID: ${data.id}
        <br />
        Email: <a href="mailto:${data.email}">${data.email}</a>
        <br />
        School: <a href="https://github.com/${engineer.github}">${data.school}</a>
      </div>
    </div>
  `;
};

const engineerHTML = function (data) {
  return `
    <div class="card m-2">
      <div class="card-header">
        <h1>${data.name}</h1>
        <h2>Engineer</h2>
      </div>
      <div class="card-body">
        ID: ${data.id}
        <br />
        Email: <a href="mailto:${data.email}">${data.email}</a>
        <br />
        Github: <a href="https://github.com/${engineer.github}">${data.github}</a>
      </div>
    </div>
  `;
};
module.exports = {
  manager: managerHTML,
  intern: internHTML,
  engineer: engineerHTML,
  header: header,
  footer: footer,
};
