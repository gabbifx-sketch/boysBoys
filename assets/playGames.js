    // iframe Full Screen
    function openFullscreen() {
  const frame = document.getElementById("gameFrame");

  if (frame.requestFullscreen) {
    frame.requestFullscreen();
  } 
  else if (frame.webkitRequestFullscreen) { // Safari
    frame.webkitRequestFullscreen();
  } 
  else if (frame.msRequestFullscreen) { // IE/Edge old
    frame.msRequestFullscreen();
  }
}

// frame.loading = "eager";
// frame.referrerPolicy = "no-referrer";

// const preload = (url) => {
//   const i = document.createElement("iframe");
//   i.src = url;
//   i.style.display = "none";
//   document.body.appendChild(i);
// };

function loadGame() {
  const params = new URLSearchParams(window.location.search);
  const game = params.get("game");

  const data = games[game];

  if (!data) {
    title.innerText = "Game not found";
    return;
  }

  title.innerText = data.title;

  // show loader first (optional if you have one)
  frame.style.display = "none";

  frame.src = data.url;

  frame.onload = () => {
    frame.style.display = "block";
  };
}




// Games
    const params = new URLSearchParams(window.location.search);
const game = params.get("game");

const frame = document.getElementById("gameFrame");
const title = document.getElementById("title");
const favicon = document.querySelector("link[rel='icon']");
const gameDetials = document.getElementById('game-detials-txt');


// simple game system
htmltitle = document.title = `${title.innerText} - BrowserGames`;
if(game === "Among Us"){
  title.innerText = "Among Us: Online-Edition";
  frame.src = "https://kiz10.com/embed-play/among-us--online-edition/?img=13271/among-us--online-edition_x.webp";
  htmltitle = document.title = `${title.innerText} - BrowserGames`;
  gameDetials.innerText = `Action Games

💥 Welcome to Action Games on Kiz10: No Pause Button Here You’re not here to sit back. You’re here to move fast, think faster, and never stop pressing buttons. The Action Games category on Kiz10.com is built for players who want chaos, challenge, and pure adrenaline from the very first second.
This isn’t the place for slow strategy. This is the place for 🔫 gunfights in pixel streets, 🚓 police chases across rooftops, 🧨 timed explosions, 🧟‍♂️ zombie waves, and every other kind of madness you can imagine. If your heart’s not racing, you’re not doing it right.
🎮 What Defines an Action Game on Kiz10? If it moves fast, breaks something, or explodes on contact—it’s here. From platform shooters and survival showdowns to parkour races and stickman brawls, these games don’t ask you to relax. They dare you to react.
Expect:
🚁 Helicopter rescues under fire
💣 Bomb defusal puzzles that punish hesitation
🏃‍♂️ Escape runs through collapsing cities
🤜 Street fights against impossible odds
🔥 Boss battles with one chance to win
Every click counts. Every second matters.
🔥 Speed. Combat. Reflexes. You don’t need a tutorial. You need instinct. These games throw you into the middle of the action and trust you to figure it out. Whether you’re dodging lasers, racing cars through chaos, or swinging across a collapsing building—it’s up to you.
This is where your reflexes meet your limits. And break them. 💥💨
🎯 Classic and Original Action Titles Kiz10’s collection mixes legendary browser hits with exclusive originals you won’t find anywhere else. Want to relive the glory of Stickman Armed Assassin? You got it. Prefer to try something insane like Toilet Warzone Deluxe? It’s here, and it’s exploding with attitude.
There’s no one style. There’s only mayhem.
👾 For Every Kind of Player Are you a sniper who waits for the perfect shot? Or the type who charges in with fists flying? Do you prefer apocalyptic survival or cartoon chaos? The Action Games on Kiz10 cover it all:
🧟 Zombie apocalypse defense
🚀 Space shooters with power-ups galore
⚔️ Sword duels and kung-fu madness
🧨 Mission-based platformers
🧗‍♂️ Obby escape games with deadly traps
👊 Pixel fight clubs with ragdoll mayhem
And the best part? You can play it all for free. Right now.
🕹️ Easy to Play Hard to Master Every game runs directly in your browser. No setup. No installs. No waiting. Just pure instant action. Some are so simple you can jump in without reading anything. Others hide layers of complexity—upgrades, timing, secrets. Choose your chaos.
Whether you're on mobile or desktop, every title is fully optimized for smooth performance, sharp controls, and epic moments.
🤣 Fail. Laugh. Try Again. Action games aren’t about winning every time. They’re about the journey. That ridiculous moment when your jetpack malfunctions mid-jump. When the rocket misses. When the boss throws a new move you didn’t expect.
These games are fun because they’re unpredictable. One second you're dominating the battlefield. The next? Game over. And somehow… that just makes you want to try again. 💀🔁💪
🏆 Climb the Ranks or Just Cause Chaos Many Kiz10 action games feature leaderboards, time trials, or score counters. Want to see how fast you can finish that run? Go ahead. Want to rack up 1000 headshots? Be our guest. Or maybe you just want to explode barrels and laugh at the physics. That’s valid too.
There are no wrong goals here. Only fun.
🧨 Why Kiz10 is the Best Place for Action Games
✅ Instant play in your browser
✅ Huge variety of styles and genres
✅ Free access to exclusive and popular titles
✅ Mobile and desktop ready
✅ Regular updates with new chaos every week
✅ No downloads no stress just speed and destruction
We’ve curated the Action Games category with one thing in mind—momentum. Every game starts fast, escalates faster, and leaves you wanting just one more round.
🚨 Are You Ready for the Mayhem? This isn’t the time to hesitate. Pick your first title. Grab your keyboard or phone. React. Dodge. Shoot. Jump. Explode. Survive. And when you fail—reload and go again. There’s no waiting room in this category.
Play Action Games now on Kiz10.com 💥 where every second is chaos and every level is a fight for survival.`
  
}

else if(game === "Dagestan Drift"){
  title.innerText = "Dagestan Drift";
  frame.src = "https://kiz10.com/embed-play/dagestan-drift/?img=20928/1756395428_dagestan-drift.webp";
  htmltitle = document.title = `${title.innerText} - BrowserGames`;
}

else if(game === "Counter Strike"){
  title.innerText = "Counter Strike";
  frame.src = "https://kiz10.com/embed-play/counter-strike/?img=569/1385866675_juegos-gbatis-counteb.webp";
  htmltitle = document.title = `${title.innerText} - BrowserGames`;
}

else if(game === "Driving School Simulator"){
  title.innerText = "Driving School Simulator";
  frame.src = "https://kiz10.com/embed-play/driving-school-simulator/?img=23655/1775850653_driving-school-simulator.webp";
  htmltitle = document.title = `${title.innerText} - BrowserGames`;
}

else if(game === "Challenger City Driver"){
  title.innerText = "Challenger City Driver";
  frame.src = "https://kiz10.com/embed-play/challenger-city-driver/?img=23159/1769643441_challenger-city-driver.webp";
  htmltitle = document.title = `${title.innerText} - BrowserGames`;
}

else if(game === "Rooftop Run"){
  title.innerText = "Rooftop Run";
  frame.src = "https://kiz10.com/embed-play/rooftop-run/?img=22220/1763087898_rooftop-run.webp";
  htmltitle = document.title = `${title.innerText} - BrowserGames`;
}

else if(game === "Backflip Dive 3D"){
  title.innerText = "Backflip Dive 3D";
  frame.src = "https://kiz10.com/embed-play/backflip-dive-3d/?img=11210/1571157166_backflip-dive-3d.webp";
  htmltitle = document.title = `${title.innerText} - BrowserGames`;
}

else if(game === "Buggy Racing"){
  title.innerText = "Buggy Racing";
  frame.src = "https://kiz10.com/embed-play/buggy-racing/?img=23690/1776289571_buggy-racing.webp";
  htmltitle = document.title = `${title.innerText} - BrowserGames`;
}
else if(game === "Parkour"){
  title.innerText = "Parkour";
  frame.src = "https://kiz10.com/embed-play/parkour/?img=23748/1777140017_parkour.webp";
  htmltitle = document.title = `${title.innerText} - BrowserGames`;
}
else if(game === "Football Legends 2026"){
  title.innerText = "Football Legends 2026";
  frame.src = "https://html5.gamedistribution.com/13eabea86f7c4cd993a156258420e9ec/?gd_sdk_referrer_url=https://gamedistribution.com/games/football-legends-2026/";
  htmltitle = document.title = `${title.innerText} - BrowserGames`;
}
else if(game === "Traffic Racing"){
  title.innerText = "Traffic Racing";
  frame.src = "https://html5.gamedistribution.com/f3ee6674b4ea4579aeefd54d7bf388f0/?gd_sdk_referrer_url=https://gamedistribution.com/games/traffic-racing-1/";
  htmltitle = document.title = `${title.innerText} - BrowserGames`;
}
else if(game === "Stick Kill 3D"){
  title.innerText = "Stick Kill 3D";
  frame.src = "https://kiz10.com/embed-play/stick-kill-3d/?img=23614/1775244340_stick-kill-3d.webp";
  htmltitle = document.title = `${title.innerText} - BrowserGames`;
}
else if(game === "Moto Traffic Rider"){
  title.innerText = "Moto Traffic Rider";
  frame.src = "https://kiz10.com/embed-play/moto-traffic-rider/?img=22283/1763502071_moto-traffic-rider.webp";
  htmltitle = document.title = `${title.innerText} - BrowserGames`;
}
else if(game === "Count Masters"){
  title.innerText = "Count Masters";
  frame.src = "https://kiz10.com/embed-play/count-masters-online/?img=14237/count-masters-online_.webp";
  htmltitle = document.title = `${title.innerText} - BrowserGames`;
}
else if(game === "Vortex 9"){
  title.innerText = "Vortex 9";
  frame.src = "https://www.miniplay.com/embed/vortex-9";
  htmltitle = document.title = `${title.innerText} - BrowserGames`;
}
else if(game === "FRAGEN"){
  title.innerText = "FRAGEN";
  frame.src = "https://www.miniplay.com/embed/fragen";
  htmltitle = document.title = `${title.innerText} - BrowserGames`;
}
else if(game === "War The Knights"){
  title.innerText = "War The Knights: Battle";
  frame.src = "https://kiz10.com/embed-play/war-the-knights-battle-arena-swords-3d/?img=20053/1751394909_war-the-knights-battle-arena-swords-3d.webp";
  htmltitle = document.title = `${title.innerText} - BrowserGames`;
}
else if(game === "Sandbox City"){
  title.innerText = "Sandbox City";
  frame.src = "https://kiz10.com/embed-play/sandbox-city---cars--zombies--ragdolls-/?img=15101/conquer-the-city_.webp";
  htmltitle = document.title = `${title.innerText} - BrowserGames`;
}

else if(game === "Funny City"){
  title.innerText = "Funny City";
  frame.src = "https://kiz10.com/embed-play/funny-city-gopniks/?img=22782/1766118491_funny-city-gopniks.webp";
  htmltitle = document.title = `${title.innerText} - BrowserGames`;
}

else if(game === "Riders Downhill Racing"){
  title.innerText = "Riders Downhill Racing";
  frame.src = "https://kiz10.com/embed-play/riders-downhill-racing/?img=18057/riders-downhill-racing_.webp";
  htmltitle = document.title = `${title.innerText} - BrowserGames`;
}

else if(game === "Free Kick Football"){
  title.innerText = "Free Kick Football: 3D Soccer";
  frame.src = "https://kiz10.com/embed-play/riders-downhill-racing/?img=18057/riders-downhill-racing_.webp";
  htmltitle = document.title = `${title.innerText} - BrowserGames`;
}

else if(game === "Stick Man War"){
  title.innerText = "Stick Man War";
  frame.src = "https://www.madkidgames.com/full/stick-war-legacy";
  htmltitle = document.title = `${title.innerText} - BrowserGames`;
}

else if(game === "Ladderrex"){
  title.innerText = "Ladderrex";
  frame.src = "https://html5.gamemonetize.co/ct6sqlvw5bv8uvrca4350sl4ums0aqd7/";
  htmltitle = document.title = `${title.innerText} - BrowserGames`;
}

else if(game === "Slap Fest"){
  title.innerText = "Slap Fest";
  frame.src = "https://zv1y2i8p.play.gamezop.com/g/ryN9EGAQa";
  htmltitle = document.title = `${title.innerText} - BrowserGames`;
}

else if(game === "Eaglercraft"){
  title.innerText = "Eaglercraft";
  frame.src = "https://eaglercraft.com/play?version=1.8.8";
  htmltitle = document.title = `${title.innerText} - BrowserGames`;
}

else if(game === "Messanger"){
  title.innerText = "Messanger";
  frame.src = "https://messenger.abeto.co/";
  htmltitle = document.title = `${title.innerText} - BrowserGames`;
}
else if(game === "Stickman Fights"){
  title.innerText = "Stickman Fights";
  frame.src = "https://html5.gamemonetize.co/xsnm9j5pt4edsiibqgn1vd8i0twqrclp/";
  htmltitle = document.title = `${title.innerText} - BrowserGames`;
}
else if(game === "Special Forces X"){
  title.innerText = "Special Forces X";
  frame.src = "https://html5.gamemonetize.co/6r1xx423npjwxlcrdr8t30h72trj0n2b/";
  htmltitle = document.title = `${title.innerText} - BrowserGames`;
  gameDetials.innerText = `
  𝗦𝗣𝗘𝗖𝗜𝗔𝗟 𝗙𝗢𝗥𝗖𝗘𝗦 𝗫

Enter dangerous enemy hideouts and survive intense combat missions filled with nonstop action. Every level throws you into fast firefights where quick reflexes, smart movement, and accurate aim are the only way to survive.

𝗙𝗔𝗦𝗧 𝗔𝗖𝗧𝗜𝗢𝗡 & 𝗧𝗔𝗖𝗧𝗜𝗖𝗔𝗟 𝗖𝗢𝗠𝗕𝗔𝗧

This is not a slow shooter. Enemies can attack from different angles at any moment, forcing you to stay alert and react quickly. Move carefully through hostile areas, clear dangerous rooms, and complete every mission without losing control.

• Fast-paced missions
• Smooth shooting gameplay
• Modern weapons
• Tactical firefights
• Challenging enemy encounters

𝗘𝗩𝗘𝗥𝗬 𝗦𝗛𝗢𝗧 𝗖𝗢𝗨𝗡𝗧𝗦

Running into battle without a plan can get you eliminated fast. Use smart positioning, keep your aim steady, and take down enemies before they overwhelm you.

The better your reactions and accuracy become, the easier it is to dominate every mission.

𝗪𝗛𝗬 𝗣𝗟𝗔𝗬 𝗦𝗣𝗘𝗖𝗜𝗔𝗟 𝗙𝗢𝗥𝗖𝗘𝗦 𝗫?

If you enjoy action games packed with shooting, tactical gameplay, and military-style combat, this game delivers nonstop excitement from start to finish.

• Action-Packed Missions
• Aim & Reflex Challenges
• Tactical Combat
• Intense Firefights
• Fun Browser Gameplay

𝗦𝗧𝗔𝗥𝗧 𝗧𝗛𝗘 𝗠𝗜𝗦𝗦𝗜𝗢𝗡

Grab your weapon, enter the battlefield, and prove you can survive the pressure in Special Forces X.

Thanks for playing on BrowserGames.
  `;
}

else if(game === "Shadow Fight 2"){
  title.innerText = "Shadow Fight 2";
  frame.src = "https://www.madkidgames.com/full/shadow-fight-2";
  htmltitle = document.title = `${title.innerText} - BrowserGames`;
}

else if(game === "Drag Battle"){
  title.innerText = "Drag Battle: Street Racing";
  frame.src = "https://www.miniplay.com/embed/drag-battle-street-racing";
  htmltitle = document.title = `${title.innerText} - BrowserGames`;
}

else if(game === "KS Z"){
  title.innerText = "KS Z";
  frame.src = "https://www.miniplay.com/embed/ks-z";
  htmltitle = document.title = `${title.innerText} - BrowserGames`;
}

else if(game === "SchoolBoy Runaway"){
  title.innerText = "SchoolBoy Runaway";
  frame.src = "https://st.8games.net/10/8g/igra-schoolboy-runaway/";
  htmltitle = document.title = `${title.innerText} - BrowserGames`;
}
else if(game === "Poppy Playtime"){
  title.innerText = "Poppy Playtime";
  frame.src = "https://kiz10.com/embed-play/poppy-playtime/?img=17913/poppy-playtime_.webp";
  htmltitle = document.title = `${title.innerText} - BrowserGames`;
}
else if(game === "Phasmophobia"){
  title.innerText = "Phasmophobia";
  frame.src = "https://kiz10.com/embed-play/phasmophobia/?img=20626/1754707238_phasmophobia.webp";
  htmltitle = document.title = `${title.innerText} - BrowserGames`;
}
 
 else if(game === "Shell Shockers"){
  title.innerText = "Shell Shockers";
  frame.src = "https://shellshock.io/";
  htmltitle = document.title = `${title.innerText} - BrowserGames`;
}
 else if(game === "Venge"){
  title.innerText = "Shell Shockers";
  frame.src = "https://venge.io/";
  htmltitle = document.title = `${title.innerText} - BrowserGames`;
}
 else if(game === "Ev.io"){
  title.innerText = "Ev.io";
  frame.src = "https://ev.io/";
  htmltitle = document.title = `${title.innerText} - BrowserGames`;
}

 else if(game === "SWAGFLIP"){
  title.innerText = "SWAGFLIP";
  frame.src = "https://kiz10.com/embed-play/swagflip/?img=22127/1762451886_swagflip.webp";
  htmltitle = document.title = `${title.innerText} - BrowserGames`;
}
 else if(game === "Ride in Cadillac Escalade"){
  title.innerText = "Ride in Cadillac Escalade";
  frame.src = "https://st.8games.net/14/igra-raz-ezzhaj-na-kadillake-eskalejd/";
  htmltitle = document.title = `${title.innerText} - BrowserGames`;
}
 else if(game === "BoomNG Drive"){
  title.innerText = "Crash: BoomNG Drive";
  frame.src = "https://st.8games.net/11/igra-avarii-bum-drajv/";
  htmltitle = document.title = `${title.innerText} - BrowserGames`;
}

 else if(game === "Vector Rush"){
  title.innerText = "Vector Rush: Rush";
  frame.src = "https://st.8games.net/10/igra-vektor/";
  htmltitle = document.title = `${title.innerText} - BrowserGames`;
}

 else if(game === "Mad City Prison Escape 2"){
  title.innerText = "Mad City Prison Escape 2";
  frame.src = "https://st.8games.net/6/prison-escape-2/";
  htmltitle = document.title = `${title.innerText} - BrowserGames`;
}
 else if(game === "Realistic Driver Simulator"){
  title.innerText = "Realistic Driver Simulator";
  frame.src = "https://st.8games.net/14/igra-realistichnyj-simulyator-vozhdeniya/";
  htmltitle = document.title = `${title.innerText} - BrowserGames`;
}



 else if(game === "Krunker.io"){
  title.innerText = "Krunker.io";
  frame.src = "https://krunker.io/";
  htmltitle = document.title = `${title.innerText} - BrowserGames`;
}


 else if(game === "Smash Karat.io"){
  title.innerText = "Smash Karat.io";
  frame.src = "https://smashkarts.io/";
  htmltitle = document.title = `${title.innerText} - BrowserGames`;
}

 else if(game === "Racing Limits"){
  title.innerText = "Racing Limits";
  frame.src = "https://kiz10.com/embed-play/racing-limits-game/?img=18397/racing-limits-game_.webp";
  htmltitle = document.title = `${title.innerText} - BrowserGames`;
}

 else if(game === "Mad City Prison Escape 2"){
  title.innerText = "Mad City Prison Escape 2";
  frame.src = "https://kiz10.com/embed-play/racing-limits-game/?img=18397/racing-limits-game_.webp";
  htmltitle = document.title = `${title.innerText} - BrowserGames`;
}


else {
  title.innerText = "Game not found";
}




// MOBILE FALSE
import React, { useState, useEffect } from 'react';
import './Notification.css'; // See CSS below

export default function GameList() {
  const [notification, setNotification] = useState(null);

  // Function to handle game click
  const handleGameClick = (game) => {
    // 1. Check if the user is actually on a mobile device
    const isMobile = /Mobi|Android|iPhone/i.test(navigator.userAgent);

    if (isMobile && game.notWorkingOnMobile) {
      // Trigger the notification with a unique ID every time to reset timers
      setNotification({
        id: Date.now(), 
        message: game.customMessage || "This game does not work on mobile."
      });
    } else {
      // Proceed to launch the game normally
      console.log(`Launching ${game.title}...`);
    }
  };

  // Auto-timeout effect: Closes the notification after 5 seconds
  useEffect(() => {
    if (!notification) return;

    const timer = setTimeout(() => {
      setNotification(null);
    }, 5000); // 5000ms = 5 seconds

    return () => clearTimeout(timer); // Clear timer if user clicks 'X' early
  }, [notification]);

  return (
    <div className="game-container">
      {/* Top Notification Popup */}
      {notification && (
        <div className="top-notification">
          <span>{notification.message}</span>
          <button className="close-btn" onClick={() => setNotification(null)}>×</button>
        </div>
      )}

      {/* Render Games List */}
      <h2>Choose a Game</h2>
      <div className="grid">
        {games.map((game) => (
          <div key={game.id} className="game-card" onClick={() => handleGameClick(game)}>
            <h3>{game.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}



// Panic mode-overlay
const studyBtn = document.getElementById("studyBtn");
const overlay = document.getElementById("studyOverlay");
const closeBtn = document.getElementById("closeBtn");

studyBtn.onclick = () => {
    overlay.style.display = "flex";
};

closeBtn.onclick = () => {
    overlay.style.display = "none";
};

/* OPTIONAL KEYBOARD SHORTCUT */
document.addEventListener("keydown",(e)=>{

    // press P for study mode
    if(e.key.toLowerCase() === `p`){
        overlay.style.display = "flex";
    }

    // ESC closes
    if(e.key === "Escape"){
        overlay.style.display = "none";
    }

});
