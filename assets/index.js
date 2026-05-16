
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

// About Games
const aboutgames = [
      {
             title: "Stick Kill 3D",
    img: "./img/1775244340_stick-kill-3d.jpg",
    desc: "A precision-based sniper puzzle game where you line up shots, calculate angles, and eliminate targets with a single well-timed bullet, often using ricochets and environmental trick shots to complete each level.",
    id:  "Stick Kill 3D",
          platform: {
          mobile: false,
          desktop: false
    }
  },
          {
    title: "Vortex 9",
    img: "./img/vortex-9_o.jpg",
    desc: "A fast-paced action game where you jump into intense vortex-powered battles, using quick movement, reflexes, and special abilities to fight enemies and overcome dynamic challenges in chaotic, high-energy environments.",
    id:  "Vortex 9",
          platform: {
          mobile: false,
          desktop: false
    }
  },
                    {
    title: "Funny City",
    img: "./img/1766118491_funny-city-gopniks.jpg",
    desc: "🎮 Play Empire is a free online game website with action, racing, parkour, shooting, and more. Play instantly in your browser with no downloads and enjoy nonstop fun and chaos in one place.",
    id:  "Funny City",
          platform: {
          mobile: false,
          desktop: false
    }
  },
                  {
    title: "War The Knights: Battle",
    img: "./img/1751394909_war-the-knights-battle-arena-swords-3d.jpg",
    desc: "🎮 War The Knights: Battle Arena Swords 3D is a focused sword-fighting game where every duel is about timing, patience, and precision. Step into quiet arenas, face skilled opponents, and win battles with careful strikes and blocks instead of chaos or numbers. Every fight is simple, intense, and personal — just you, your sword, and the moment in front of you.",
    id:  "War The Knights",
          platform: {
          mobile: false,
          desktop: false
    }
  },
                    {
    title: "Ladderrex",
    img: "./img/Ladderrex-512x384.jpg",
    desc: "A free browser-based stealth and social deduction game where you play as an impostor on a spaceship, secretly eliminating crew members while avoiding being caught.",
    id:  "Ladderrex",
          platform: {
          mobile: false,
          desktop: false
    }
  },
                    {
    title: "Eaglercraft",
    img: "./img/eaglercraft.jpeg",
    desc: "Eglercraft is a free online block-building and survival game where you can explore, mine, craft, and build anything you imagine in an open 3D world. Gather resources, survive the environment, and create your own adventure directly in your browser with no downloads needed.",
    id:  "Eaglercraft",
          platform: {
          mobile: false,
          desktop: false
    }
  },
    {
    title: "Realistic Driver Simulator",
    img: "./img/igra-realistichnyj-simulyator-vozhdeniya.jpg",
    desc: "Escape a high-security prison in Mad City Prison Escape 2. Wrongly accused and guided by a veteran architect, you must sneak past guards and cameras to clear your name. Outsmart the system, find secret paths, and break for freedom!",
    id:  "Realistic Driver Simulator",
          platform: {
          mobile: false,
          desktop: false
    }
  },
                       {
    title: "KS Z",
    img: "./img/pjpg160x160.webp",
    desc: "Special Forces X is an intense action shooting game where you join elite special forces soldiers on dangerous combat missions against powerful enemies. Use modern weapons, sharp reflexes, and smart tactics to survive fast-paced battles and clear every mission in this thrilling online shooter.",
    id:  "KS Z",
          platform: {
          mobile: false,
          desktop: false
    }
  },  
];



const aboutGames = document.querySelector(".about-games");

aboutgames.forEach(aboutgames  => {

  const card = document.createElement("div");
  card.className = "game-card";

  card.innerHTML = `
        <a href="./playGames.html?game=${encodeURIComponent(aboutgames .id)}"  target="_blank">
  
  <div class="game-card">

    <div class="platforms">
      ${aboutgames .platform.mobile ? `
        <svg width="15px" height="15px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11 18H13M9.2 21H14.8C15.9201 21 16.4802 21 16.908 20.782C17.2843 20.5903 17.5903 20.2843 17.782 19.908C18 19.4802 18 18.9201 18 17.8V6.2C18 5.0799 18 4.51984 17.782 4.09202C17.5903 3.71569 17.2843 3.40973 16.908 3.21799C16.4802 3 15.9201 3 14.8 3H9.2C8.0799 3 7.51984 3 7.09202 3.21799C6.71569 3.40973 6.40973 3.71569 6.21799 4.09202C6 4.51984 6 5.07989 6 6.2V17.8C6 18.9201 6 19.4802 6.21799 19.908C6.40973 20.2843 6.71569 20.5903 7.09202 20.782C7.51984 21 8.07989 21 9.2 21Z" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
        `: ""}
      ${aboutgames .platform.desktop ? `
       <svg width="15px" height="15px" viewBox="-0.5 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns">
    
    <title>desktop</title>
    <desc>Created with Sketch Beta.</desc>
    <defs>
</defs>
    <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" sketch:type="MSPage">
        <g id="Icon-Set" sketch:type="MSLayerGroup" transform="translate(-568.000000, -463.000000)" fill="#ffffff">
            <path d="M597,481 L570,481 L570,467 C570,465.896 570.896,465 572,465 L595,465 C596.104,465 597,465.896 597,467 L597,481 L597,481 Z M597,485 C597,486.104 596.104,487 595,487 L572,487 C570.896,487 570,486.104 570,485 L570,483 L597,483 L597,485 L597,485 Z M582,489 L586,489 L586,493 L582,493 L582,489 Z M595,463 L572,463 C569.791,463 568,464.791 568,467 L568,485 C568,487.209 569.791,489 572,489 L580,489 L580,493 L578,493 C577.447,493 577,493.448 577,494 C577,494.553 577.447,495 578,495 L590,495 C590.553,495 591,494.553 591,494 C591,493.448 590.553,493 590,493 L588,493 L588,489 L595,489 C597.209,489 599,487.209 599,485 L599,467 C599,464.791 597.209,463 595,463 L595,463 Z" id="desktop" sketch:type="MSShapeGroup">
</path>
        </g>
    </g>
</svg>
        ` : ""}
    </div>

    <div class="game-image">
      <img src="${aboutgames.img}" alt="Game Image" loading="lazy">
    </div>

    <div class="game-content">
      <p>${aboutgames .title}</p>
  

    </div>

  </div>
</a>
  `;

  aboutGames.appendChild(card);
});


const mobileToggle = document.querySelector('.mobile-toggle');
const sidebar = document.querySelector('.sidebar');
const disableSidebar = document.querySelector('.mobile-hide-sidebar');
const mobileToggleImg = document.querySelector('.display-logo-on-phones');

mobileToggle.addEventListener('click', () => {
    sidebar.style.left= '0';

    console.log("clicked");
});
disableSidebar.addEventListener('click', ()=>{
  sidebar.style.left= '-250px';
})





// Featured
const featuredgames = [
      {
    title: "Smash Karat.io",
    img: "./img/smashkarat.webp",
    desc: "Smash Karts.io is a chaotic multiplayer kart battle game where you race, drift, and blast opponents with powerful weapons in fast-paced online arenas. Collect rockets, machine guns, and crazy power-ups while smashing rivals and surviving nonstop action in colorful 3D battles.",
    id:  "Smash Karat.io",
          platform: {
          mobile: false,
          desktop: false
    }
  },
          {
    title: "Vortex 9",
    img: "./img/vortex-9_o.jpg",
    desc: "A fast-paced action game where you jump into intense vortex-powered battles, using quick movement, reflexes, and special abilities to fight enemies and overcome dynamic challenges in chaotic, high-energy environments.",
    id:  "Vortex 9",
          platform: {
          mobile: false,
          desktop: false
    }
  },
                    {
    title: "Funny City",
    img: "./img/1766118491_funny-city-gopniks.jpg",
    desc: "🎮 Play Empire is a free online game website with action, racing, parkour, shooting, and more. Play instantly in your browser with no downloads and enjoy nonstop fun and chaos in one place.",
    id:  "Funny City",
          platform: {
          mobile: false,
          desktop: false
    }
  },
                  {
    title: "War The Knights: Battle",
    img: "./img/1751394909_war-the-knights-battle-arena-swords-3d.jpg",
    desc: "🎮 War The Knights: Battle Arena Swords 3D is a focused sword-fighting game where every duel is about timing, patience, and precision. Step into quiet arenas, face skilled opponents, and win battles with careful strikes and blocks instead of chaos or numbers. Every fight is simple, intense, and personal — just you, your sword, and the moment in front of you.",
    id:  "War The Knights",
          platform: {
          mobile: false,
          desktop: false
    }
  },
                    {
    title: "Ladderrex",
    img: "./img/Ladderrex-512x384.jpg",
    desc: "A free browser-based stealth and social deduction game where you play as an impostor on a spaceship, secretly eliminating crew members while avoiding being caught.",
    id:  "Ladderrex",
          platform: {
          mobile: false,
          desktop: false
    }
  },
                    {
    title: "Eaglercraft",
    img: "./img/eaglercraft.jpeg",
    desc: "Eglercraft is a free online block-building and survival game where you can explore, mine, craft, and build anything you imagine in an open 3D world. Gather resources, survive the environment, and create your own adventure directly in your browser with no downloads needed.",
    id:  "Eaglercraft",
          platform: {
          mobile: false,
          desktop: false
    }
  },
    {
    title: "Realistic Driver Simulator",
    img: "./img/igra-realistichnyj-simulyator-vozhdeniya.jpg",
    desc: "Escape a high-security prison in Mad City Prison Escape 2. Wrongly accused and guided by a veteran architect, you must sneak past guards and cameras to clear your name. Outsmart the system, find secret paths, and break for freedom!",
    id:  "Realistic Driver Simulator",
          platform: {
          mobile: false,
          desktop: false
    }
  },
                       {
    title: "KS Z",
    img: "./img/pjpg160x160.webp",
    desc: "Special Forces X is an intense action shooting game where you join elite special forces soldiers on dangerous combat missions against powerful enemies. Use modern weapons, sharp reflexes, and smart tactics to survive fast-paced battles and clear every mission in this thrilling online shooter.",
    id:  "KS Z",
          platform: {
          mobile: false,
          desktop: false
    }
  },  
];



const featuredGames = document.querySelector(".featured-games-container");

featuredgames.forEach(featuredgames  => {

  const card = document.createElement("div");
  card.className = "game-card";

  card.innerHTML = `
        <a href="./playGames.html?game=${encodeURIComponent(featuredgames .id)}"  target="_blank">
  
  <div class="game-card">

    <div class="platforms">
      ${featuredgames .platform.mobile ? `
      <svg fill="#000000" height="30px" width="30px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
	 viewBox="0 0 490.667 490.667" xml:space="preserve">
<g>
	<g>
		<g>
			<path d="M309.333,85.333h-128c-9.664,0-18.752,4.565-24.981,12.544c-3.605,4.651-2.795,11.349,1.856,14.976
				c4.629,3.584,11.328,2.773,14.976-1.856c1.259-1.621,3.989-4.331,8.149-4.331h128c5.888,0,10.667,4.779,10.667,10.667v153.003
				c0,5.888,4.779,10.667,10.667,10.667c5.888,0,10.667-4.779,10.667-10.667V117.333C341.333,99.691,326.976,85.333,309.333,85.333z
				"/>
			<path d="M192,117.333c-5.888,0-10.667,4.779-10.667,10.667c0,5.888,4.779,10.667,10.667,10.667s10.667-4.779,10.667-10.667
				C202.667,122.112,197.888,117.333,192,117.333z"/>
			<path d="M245.333,0C110.059,0,0,110.059,0,245.333s110.059,245.333,245.333,245.333s245.333-110.059,245.333-245.333
				S380.608,0,245.333,0z M245.333,469.333c-123.52,0-224-100.48-224-224c0-57.92,22.293-110.613,58.496-150.421l69.504,69.504
				v208.917c0,17.643,14.357,32,32,32h128c17.643,0,32-14.357,32-32v-16.917l54.421,54.421
				C355.947,447.04,303.253,469.333,245.333,469.333z M170.667,320V185.749L304.917,320H170.667z M256,362.667
				c0,5.888-4.779,10.667-10.667,10.667s-10.667-4.779-10.667-10.667c0-5.888,4.779-10.667,10.667-10.667S256,356.779,256,362.667z
				 M410.837,395.755L94.933,79.851c39.808-36.203,92.501-58.496,150.421-58.496c123.52,0,224,100.48,224,224
				C469.333,303.253,447.04,355.947,410.837,395.755z"/>
		</g>
	</g>
</g>
</svg>
        `: ""}
      ${featuredgames .platform.desktop ? `
       <svg width="15px" height="15px" viewBox="-0.5 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns">
    
    <title>desktop</title>
    <desc>Created with Sketch Beta.</desc>
    <defs>
</defs>
    <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" sketch:type="MSPage">
        <g id="Icon-Set" sketch:type="MSLayerGroup" transform="translate(-568.000000, -463.000000)" fill="#ffffff">
            <path d="M597,481 L570,481 L570,467 C570,465.896 570.896,465 572,465 L595,465 C596.104,465 597,465.896 597,467 L597,481 L597,481 Z M597,485 C597,486.104 596.104,487 595,487 L572,487 C570.896,487 570,486.104 570,485 L570,483 L597,483 L597,485 L597,485 Z M582,489 L586,489 L586,493 L582,493 L582,489 Z M595,463 L572,463 C569.791,463 568,464.791 568,467 L568,485 C568,487.209 569.791,489 572,489 L580,489 L580,493 L578,493 C577.447,493 577,493.448 577,494 C577,494.553 577.447,495 578,495 L590,495 C590.553,495 591,494.553 591,494 C591,493.448 590.553,493 590,493 L588,493 L588,489 L595,489 C597.209,489 599,487.209 599,485 L599,467 C599,464.791 597.209,463 595,463 L595,463 Z" id="desktop" sketch:type="MSShapeGroup">
</path>
        </g>
    </g>
</svg>
        ` : ""}
    </div>

    <div class="game-image">
      <img src="${featuredgames.img}" alt="Game Image" loading="lazy">
    </div>

    <div class="game-content">
      <p>${featuredgames .title}</p>
  

    </div>

  </div>
</a>
  `;

  featuredGames.appendChild(card);
});



// HOT Games
const hotgames= [
      {
    title: "Smash Karat.io",
    img: "./img/smashkarat.webp",
    desc: "Smash Karts.io is a chaotic multiplayer kart battle game where you race, drift, and blast opponents with powerful weapons in fast-paced online arenas. Collect rockets, machine guns, and crazy power-ups while smashing rivals and surviving nonstop action in colorful 3D battles.",
    id:  "Smash Karat.io",
          platform: {
          mobile: false,
          desktop: false
    }
  },
          {
    title: "Vortex 9",
    img: "./img/vortex-9_o.jpg",
    desc: "A fast-paced action game where you jump into intense vortex-powered battles, using quick movement, reflexes, and special abilities to fight enemies and overcome dynamic challenges in chaotic, high-energy environments.",
    id:  "Vortex 9",
          platform: {
          mobile: false,
          desktop: false
    }
  },
                      {
    title: "SchoolBoy Runaway",
    img: "./img/schoolboyrunaway.webp",
    desc: "SchoolBoy Runaway is a stealth escape game where you play as a grounded student trying to sneak out of the house without getting caught by strict parents. Hide, solve puzzles, avoid making noise, and carefully plan every move to escape the house in this tense and clever 3D adventure.",
    id:  "SchoolBoy Runaway",
          platform: {
          mobile: true,
          desktop: false
    }
  },

    {
    title: "Shell Shockers",
    img: "./img/OSK.jpg",
    desc: "Outrun a devastating earthquake in Vector Rush, a high-stakes parkour chase through a crumbling city. Master intuitive controls to slide, climb, and flip across 15 intense levels. One wrong move or a second of hesitation is the end—move fast, unlock extreme stunts, and survive the chaos!",
    id:  "Shell Shockers",
          platform: {
          mobile: true,
          desktop: false
    }
  },
     {
    title: "Ev.io",
    img: "./img/ev-io.avif",
    desc: "Ev.io is a lightning-fast, futuristic FPS that brings Halo-style combat straight to your browser. Use tactical abilities like teleportation, triple jumps, and grenades to dominate neon-soaked arenas. It’s sleek, competitive, and built for players who love high-speed gunplay and sharp movement. Pick your loadout and climb the leaderboard!",
    id:  "Ev.io",
          platform: {
          mobile: false,
          desktop: false
    }
  },
  {
    title: "Racing Limits",
    img: "./img/racing-limits-game_(1).jpg",
    desc: "Racing Limits is a high-speed driving game where you race through busy highways, dodge traffic, and test your reflexes in multiple exciting modes. Drive across cities, deserts, and highways during day or night while competing against friends and players worldwide in intense online racing action.",
    id:  "Racing Limits",
          platform: {
          mobile: false,
          desktop: false
    }
  },
    {
    title: "Realistic Driver Simulator",
    img: "./img/igra-realistichnyj-simulyator-vozhdeniya.jpg",
    desc: "Escape a high-security prison in Mad City Prison Escape 2. Wrongly accused and guided by a veteran architect, you must sneak past guards and cameras to clear your name. Outsmart the system, find secret paths, and break for freedom!",
    id:  "Realistic Driver Simulator",
          platform: {
          mobile: false,
          desktop: false
    }
  },
         {
    title: "Krunker.io",
    img: "./img/igra-krunker-io.jpg",
    desc: "Krunker.io is a fast-paced pixel shooter where players battle in intense online matches filled with quick action and block-style combat. Fight through detailed maps, use smart movement and aim, and survive nonstop battles against enemies in this exciting browser FPS game.",
    id:  "Krunker.io",
          platform: {
          mobile: false,
          desktop: false
    }
  },
];



const hotGames = document.querySelector(".hot-games-container");

hotgames.forEach(hotgames => {

  const card = document.createElement("div");
  card.className = "game-card";

  card.innerHTML = `
        <a href="./playGames.html?game=${encodeURIComponent(hotgames .id)}"  target="_blank">
  
  <div class="game-card">

    <div class="platforms">
      ${hotgames .platform.mobile ? `
      <svg fill="#000000" height="30px" width="30px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
	 viewBox="0 0 490.667 490.667" xml:space="preserve">
<g>
	<g>
		<g>
			<path d="M309.333,85.333h-128c-9.664,0-18.752,4.565-24.981,12.544c-3.605,4.651-2.795,11.349,1.856,14.976
				c4.629,3.584,11.328,2.773,14.976-1.856c1.259-1.621,3.989-4.331,8.149-4.331h128c5.888,0,10.667,4.779,10.667,10.667v153.003
				c0,5.888,4.779,10.667,10.667,10.667c5.888,0,10.667-4.779,10.667-10.667V117.333C341.333,99.691,326.976,85.333,309.333,85.333z
				"/>
			<path d="M192,117.333c-5.888,0-10.667,4.779-10.667,10.667c0,5.888,4.779,10.667,10.667,10.667s10.667-4.779,10.667-10.667
				C202.667,122.112,197.888,117.333,192,117.333z"/>
			<path d="M245.333,0C110.059,0,0,110.059,0,245.333s110.059,245.333,245.333,245.333s245.333-110.059,245.333-245.333
				S380.608,0,245.333,0z M245.333,469.333c-123.52,0-224-100.48-224-224c0-57.92,22.293-110.613,58.496-150.421l69.504,69.504
				v208.917c0,17.643,14.357,32,32,32h128c17.643,0,32-14.357,32-32v-16.917l54.421,54.421
				C355.947,447.04,303.253,469.333,245.333,469.333z M170.667,320V185.749L304.917,320H170.667z M256,362.667
				c0,5.888-4.779,10.667-10.667,10.667s-10.667-4.779-10.667-10.667c0-5.888,4.779-10.667,10.667-10.667S256,356.779,256,362.667z
				 M410.837,395.755L94.933,79.851c39.808-36.203,92.501-58.496,150.421-58.496c123.52,0,224,100.48,224,224
				C469.333,303.253,447.04,355.947,410.837,395.755z"/>
		</g>
	</g>
</g>
</svg>
        `: ""}
      ${hotgames .platform.desktop ? `
       <svg width="15px" height="15px" viewBox="-0.5 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns">
    
    <title>desktop</title>
    <desc>Created with Sketch Beta.</desc>
    <defs>
</defs>
    <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" sketch:type="MSPage">
        <g id="Icon-Set" sketch:type="MSLayerGroup" transform="translate(-568.000000, -463.000000)" fill="#ffffff">
            <path d="M597,481 L570,481 L570,467 C570,465.896 570.896,465 572,465 L595,465 C596.104,465 597,465.896 597,467 L597,481 L597,481 Z M597,485 C597,486.104 596.104,487 595,487 L572,487 C570.896,487 570,486.104 570,485 L570,483 L597,483 L597,485 L597,485 Z M582,489 L586,489 L586,493 L582,493 L582,489 Z M595,463 L572,463 C569.791,463 568,464.791 568,467 L568,485 C568,487.209 569.791,489 572,489 L580,489 L580,493 L578,493 C577.447,493 577,493.448 577,494 C577,494.553 577.447,495 578,495 L590,495 C590.553,495 591,494.553 591,494 C591,493.448 590.553,493 590,493 L588,493 L588,489 L595,489 C597.209,489 599,487.209 599,485 L599,467 C599,464.791 597.209,463 595,463 L595,463 Z" id="desktop" sketch:type="MSShapeGroup">
</path>
        </g>
    </g>
</svg>
        ` : ""}
    </div>

    <div class="game-image">
      <img src="${hotgames.img}" alt="Game Image" loading="lazy">
    </div>

    <div class="game-content">
      <p>${hotgames .title}</p>
  

    </div>

  </div>
</a>
  `;

  hotGames.appendChild(card);
});
