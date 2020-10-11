const cp = require("child_process");

cp.exec("open http://www.linkedin.com/learning");
cp.exec("open -a Terminal .");

// cp.exec("ls", (err, data, stderr) => {
//     console.log(stderr);

//     console.log(data);
// });

// cp.exec("node readstream", (err, data, stderr) => {
//     console.log(data);
// });