// const express = require("express");
// const dotenv = require("dotenv");

const port = 4000;

import dotenv from "dotenv";
import express from "express";

var spotify_client_id = process.env.SPOTIFY_CLIENT_ID;
var spotify_client_secret = process.env.SPOTIFY_CLIENT_SECRET;

var spotify_redirect_uri = "http://localhost:5173/auth/callback";

var generateRandomString = function (length) {
  var text = "";
  var possible =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (var i = 0; i < length; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return text;
};

var app = express();

app.get("/auth/login", (req, res) => {
  var scope =
    "streaming \
              user-read-email \
              user-read-private";
  var state = generateRandomString(16);

  var auth_query_parameters = new URLSearchParams({
    response_type: "code",
    client_id: spotify_client_id,
    scope: scope,
    redirect_uri: spotify_redirect_uri,
    state: state,
  });

  res.redirect(
    "https://accounts.spotify.com/authorize/?" +
      auth_query_parameters.toString()
  );
});

app.get("/auth/callback", (req, res) => {
  var code = req.query.code;
  console.log("WE ARE HERE", req.query);
  var authOptions = {
    url: "https://accounts.spotify.com/api/token",
    form: {
      code: code,
      redirect_uri: spotify_redirect_uri,
      grant_type: "authorization_code",
    },
    headers: {
      Authorization:
        "Basic " +
        Buffer.from(spotify_client_id + ":" + spotify_client_secret).toString(
          "base64"
        ),
      "Content-Type": "application/x-www-form-urlencoded",
    },
    json: true,
  };

  request.post(authOptions, function (error, response, body) {
    console.log("are we here??");
    if (!error && response.statusCode === 200) {
      access_token =
        "BQBUsU4PdY6dp3wzA3N96qk2ffNJfbW6dllsHUEb2SaNrjT-3iyY4RqJr8aJruULYrY4onzYd9TYqAm_9tKfxgRpL788n3Lbn6NLB2o_1hI4U0RR3dNppOfqOjBepM6VTns-oM0Jvun0j3HMkw_cs-NoS_TCi_JARLSFTvAHUb9ajar9yCetIoSGfmvDgXCvi9m_KnhB3YDMqXFQjLA";
      res.redirect("/");
    }
  });
});

app.get("/auth/token", (req, res) => {
  res.send({ access_token: access_token });
});

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
