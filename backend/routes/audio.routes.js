const express = require("express");

const { audioUpload } = require("../controller/AudioProcessing.controller");
const { transcribe, summarize, diarize } = require("../controller/allFeature");
const upload = require("../utils/multer");

const audioRouter = express.Router();
const transcribeRouter = express.Router();
const summarizeRouter = express.Router();
const diarizeRouter = express.Router();
audioRouter.post("/upload", upload, audioUpload);

transcribeRouter.post("/transcribe/:id", transcribe);

summarizeRouter.post("/summarize/:id", summarize);

diarizeRouter.post("/diarize/:id", diarize);
module.exports = { audioRouter, transcribeRouter, summarizeRouter, diarizeRouter };
