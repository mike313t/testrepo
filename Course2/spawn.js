const cp = require("child_process");

const questionApp = cp.spawn("node", ["questions2.js"]);

questionApp.stdin.write("Mike \n");
questionApp.stdin.write("GB \n");
questionApp.stdin.write("Change \n");

questionApp.stdout.on("data", data => {
    console.log(`from the question app: ${data}`);
});

questionApp.on("close", () => {
    console.log(`question appp process exited`);
});
