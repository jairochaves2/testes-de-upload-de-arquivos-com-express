const express = require("express");
const file_upload = require("express-fileupload");
const port = 3005;

const app = express();

app.post(
  "/",
  file_upload({
    limits: { fileSize: 1 * 1024 * 1024 },
    abortOnLimit: true,
  }),
  (req, res) => {
    const arquivos = req.files;
    arquivos.logo.mv(__dirname + "/FILES_ISAAC2/" + arquivos.logo.name, (e) =>
      console.log(e)
    );
    //   console.log(arquivos.logo);
    res.status(202).send();
  }
);
app.post("/1", file_upload(), (req, res) => {
  const arquivos = req.files;
  arquivos.logo.mv(__dirname + "/FILES_ISAAC2/" + arquivos.logo.name, (e) =>
    console.log(e)
  );
  //   console.log(arquivos.logo);
  res.status(202).send();
});
app.get("/logo/download/:fileName", (req, res) => {
  const fileName = req.params.fileName;
  console.log(fileName);
  res.download(__dirname + "/FILES_ISAAC2/" + fileName);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
