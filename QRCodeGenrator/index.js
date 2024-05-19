import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";

inquirer
  .prompt([
    {
      message: "Enter a URL",
      name: "URL",
    },
  ])
  .then((answers) => {
    var url = answers.URL;
    // console.log(url);
    var qr_png = qr.image(url);
    qr_png.pipe(fs.createWriteStream("./result/qr_img.png"));
    fs.writeFile("./result/url.txt", url, (err) => {
      if (err) console.log(err);
      else {
        console.log("QR Code genrated Sucessfully!\n");
        console.log("The QR has the following URL:");
        console.log(fs.readFileSync("./result/url.txt", "utf8"));
      }
    });
  })
  .catch((error) => {
    if (error.isTtyError) {
      console.log("prompt couldn't be rendered in the current environment");
    } else {
      console.log("Something else went wrong");
    }
  });
