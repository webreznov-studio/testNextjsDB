import React from "react";
import ReactAudioPlayer from "react-audio-player";

export default function Player() {
  return (
    <div>
      <main>
        <div className="grid">
          <div className="card">
            <ReactAudioPlayer src="%PUBLIC_URL%/music/5nizza_pjatnica_-_ja_soldat.mp3" autoPlay controls />
          </div>
          <div className="card">
            <ReactAudioPlayer src="%PUBLIC_URL%/music/Гуф&st-По_Другому.mp3" autoPlay controls />
          </div>
          <div className="card">
            <ReactAudioPlayer src="%PUBLIC_URL%/music/Центр-Небо,мне_бы_ее_позабыть.mp3" autoPlay controls />
          </div>
          <div className="card">
            <ReactAudioPlayer
              src="%PUBLIC_URL%/music/Andrej_Lenickij-ya_zaberu_tebya_tuda_gde_nasha_vesna_Maydes_Chris_Forks_Remix_(mp3.cc).mp3"
              autoPlay
              controls
            />
          </div>
          <div className="card">
            <ReactAudioPlayer src="%PUBLIC_URL%/music/centr_-_kacheli_-_ne_na_eksport.mp3" autoPlay controls />
          </div>
          <div className="card">
            <ReactAudioPlayer src="%PUBLIC_URL%/music/Kaspijskij_Gruz-Tabor_uhodit_v_nebo.mp3" autoPlay controls />
          </div>
        </div>
      </main>
    </div>
  );
}
