import express, { type Request, Response, NextFunction } from "express";
import { log } from "./vite";
import { spawn } from "child_process";

// Start the Flask application as a child process
const startFlaskApp = () => {
  log("Starting Flask application as a child process");
  
  const flask = spawn("python", ["DataEng/run.py"]);
  
  flask.stdout.on("data", (data) => {
    log(`Flask stdout: ${data}`);
  });
  
  flask.stderr.on("data", (data) => {
    log(`Flask stderr: ${data}`);
  });
  
  flask.on("close", (code) => {
    log(`Flask process exited with code ${code}`);
    // Restart Flask if it crashes
    if (code !== 0) {
      log("Restarting Flask application...");
      setTimeout(startFlaskApp, 5000);
    }
  });
  
  return flask;
};

log("Starting Flask Portfolio Application");
startFlaskApp();
