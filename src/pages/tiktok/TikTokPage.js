import React, { useState } from "react";
import { Button, LoadingAnimation } from "../../components/common";
import "./TikTokPage.css";
// import crypto from "crypto";

export default function TikTokPage() {
  const [loading, setLoading] = useState(false);

  // //TODO: Get access token here as well
  // const tikTokLoginUrl = "https://www.tiktok.com/v2/auth/authorize/";
  // const key = process.env.REACT_APP_TIKTOK_CLIENT_KEY;
  // const redirect = process.env.REACT_APP_TIKTOK_SERVER_END_POINT;
  // const scope = "user.info.basic,user.info.profile,user.info.stats,video.list";
  // const responseType = "code";
  // const state = randomTokenString(10);

  // const loginUrl = `${tikTokLoginUrl}?client_key=${key}&redirect_uri=${redirect}&scope=${scope}&response_type${responseType}&state=${state}`;

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("TEST");
  };

  return (
    <div className="tiktok-page">
      {loading ? (
        <LoadingAnimation isLoading="true" />
      ) : (
        <Button text="Login To TikTok" onClick={handleSubmit} />
      )}
    </div>
  );
}

// function randomTokenString(number) {
//   return crypto.randomBytes(number).toString("hex");
// }
