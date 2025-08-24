
const menuBtn = document.querySelector(".menu-btn");
const navList = document.querySelector(".nav-bar ul");

const closeBtn = document.querySelector(".close-btn");
const mainContent = document.querySelector(".main-content");

menuBtn.addEventListener("click", () => {
  navList.classList.add("active");

  document.body.style.overflow = "hidden";
  mainContent.style.filter = "blur(5px)";
});

closeBtn.addEventListener("click", () => {
  navList.classList.toggle("active");

  document.body.style.overflow = "";
  mainContent.style.filter = "";
});


const data = {
  enigmas: [
    {
      id: 1,
      name: "Fear Enigma",
      desc:
        "The ability to extract and embody or force the acknowledgement of the fears of any sort of consciousness.",
      shapes: {
        "Dread Flashers":
          "Imbuing an attacking limb with fear enigmatic energy, whenever a foe is hit they will experience a flash of whatever phobia they have for the moment. The more enigmatic energy on this shape, the stronger the phobia it uses.",
        "Terror Excerpt":
          "Using this shape on a limb gives you the ability to go in for a shot that passes through the enemy, extracting a 'terror excerpt'—the trauma and fears of the target.",
        "Schizophrenic Domain":
          "Inflicts a looping illusion based on a fear until the opponent confronts it, e.g. bugs crawling, holes forming.",
        "Phobic Embodiment":
          "Using a terror excerpt, you become the illusion of the enemy's fear, which grows realer as their fear increases.",
        "Phobic Embodiment, variant Convergence":
          "A variant of Phobic Embodiment using multiple terror excerpts to embody fused fears."
      }
    },
    {
      id: 2,
      name: "Expression Enigma",
      desc:
        "A creation celestial clan enigma; expresses bottled emotions as powerful constructs based on their strength and type.",
      shapes: {
        "Emotion Constructs":
          "Create constructs from current or stored emotions. Stronger emotions yield stronger constructs."
      }
    },
    {
      id: 3,
      name: "Rhythm Enigma",
      desc:
        "Cast metronome-like rhythms to affect movement, power, and timing in combat.",
      shapes: {
        "Rhythmo-genesis":
          "Create a rhythm with customizable speed and impact. The user's body naturally follows this beat.",
        "Hard Note":
          "Increase impact (damage/power) at the cost of speed. Useful for explosive strength.",
        "Quick Note":
          "Increase speed (BPM) at the cost of impact. Great for fast movement and reaction.",
        "Deadly Note":
          "Boost both speed and impact greatly for short bursts. Massive energy cost.",
        "Up My Flow":
          "Let the user act at a speed slightly faster than the natural rhythm of the battle.",
        "Beat Vision":
          "Analyze the average rhythm (BPM) of a sequence of actions to gain predictive edge.",
        "Godforce, variant Resonant":
          "The user must perform a meaningful action on every beat of a rhythm or fail.",
        "Godforce, variant Resonance":
          "Target is forced to act on each beat; failure results in harmful auto-actions."
      }
    },
    {
      id: 4,
      name: "Subscription Enigma",
      desc:
        "Subscribe to info sources and directly feed data into your brain, at the cost of increasing mental stress.",
      shapes: {
        Subscribe:
          "Subscribe to a source. Gain instant understanding, but accumulate stress charges.",
        "Before The World":
          "Know info before it’s released. 1 stress charge per 18s earlier.",
        "Knowledge Tunnel":
          "Blurse shape. Subscribe to someone's thoughts and vice versa. Stress depends on thought complexity.",
        Filter:
          "Filter info sources to reduce load and target specifics. Costs and removes stress depending on filter depth."
      }
    },
    {
      id: 5,
      name: "Verdict Enigma",
      desc:
        "Judge actions using real-world law or moral frameworks, and deliver punishments/rewards accordingly.",
      shapes: {
        "Decree in Darkness":
          "Freeze time and isolate the target for instant judgement.",
        "Constitutional Reference":
          "Use local legal code to determine justice.",
        "Moral Reference":
          "Use an individual's morals to form a verdict. Once daily use.",
        "Jury from Abduction":
          "Pull nearby individuals into a jury. Their disagreement costs them energy."
      }
    },
    {
      id: 6,
      name: "Deconstruction Enigma",
      desc: "Specializes in dismantling hardware through various methods.",
      shapes: {
        "Broken Bots":
          "Disfigure a robot's hardware to render it non-functional.",
        "B.D.W. (BreakDownWorks)":
          "Completely disassemble hardware into reusable parts.",
        "Malignant Collapse":
          "Brutally dismantle hardware, damaging the parts.",
        "Reverse Engineer":
          "Temporarily disassemble hardware to study its mechanisms before restoring.",
        Antifunction:
          "Use corruption and deconstruction to reverse a machine’s function."
      }
    },
    {
      id: 7,
      name: "Deduction Enigma",
      desc: "Use contextual clues and logic to find solutions to problems.",
      shapes: {
        Solve: "Input enough factors to produce one suitable solution.",
        Permutations:
          "Work with fewer factors to generate several possible outcomes.",
        "Solution Combination":
          "Fuse multiple solves into a complex, layered solution."
      }
    },
    {
      id: 8,
      name: "Gravity Enigma (Astral Ascended)",
      desc:
        "Control gravitational forces around objects and beings, including mock-planetary systems.",
      shapes: {
        "Squashing Clasp": "Immobilize or crush targets using intense gravity.",
        "Satellite Crash":
          "Summon a crashing satellite, increasing gravitational pull as it nears.",
        "Submit to I":
          "Apply heavy downward gravity to multiple enemies or objects.",
        "Solar System":
          "Create rotating orbits of debris around yourself or others to attack or defend.",
        "Lend Me Your Presence":
          "Steal gravitational 'mass' from other objects to increase your force.",
        "Gravity Ripple":
          "Emit fluctuating gravitational fields to destabilize enemies."
      }
    },
    {
      id: 9,
      name: "Absolute Matter Control",
      desc:
        "Mastery over matter at a molecular level, with void-manipulating capabilities.",
      shapes: {
        "Exodus River":
          "Become intangible by breaking apart your body at the molecular level. Invincible but cannot attack.",
        "Molecular Amalgamy": "Fuse objects or beings at the molecular level.",
        "Molecular Split": "Split objects at the molecular level.",
        "By Zero, Expand to Infinity!":
          "Divide an object by zero to trigger infinite expansion, violating mass conservation."
      }
    },
    {
      id: 10,
      name: "Torment Enigma",
      desc:
        "Uses harvested souls to inflict soul damage, illusions, and spiritual attacks.",
      shapes: {
        "Unforgiving Vengeance":
          "Send tortured souls to attack your enemy, damaging both body and soul.",
        "Phantom Geyser":
          "Open a soul-damage dimension where all your spirits attack the enemy freely.",
        "Phantom Dive":
          "Soul-strike by diving through your spirit dimension with the enemy.",
        "Weapon's Spirit":
          "Harvest the spirit of a weapon and use it to inflict soul wounds.",
        "Sacrificial Soul Imploder":
          "The ultimate attack: bind the enemy’s soul and detonate all gathered soul energy via cannon blast."
      }
    }
  ],
};

const enigmaContainer = document.getElementById("enigmas-container");

data.enigmas.forEach((enigma) => {
  // Makes the div
  const enigmaDiv = document.createElement("div");

  // Enigma Title
  const title = document.createElement("h2");
  title.className = "enigma-title";
  title.textContent = enigma.name;

  // Enigma Description
  const desc = document.createElement("p");
  desc.className = "enigma-desc";
  desc.textContent = enigma.desc;

  // Shapes list
  const shapeList = document.createElement("ul");
  shapeList.className = "shapes-list";

  Object.entries(enigma.shapes).forEach(([shapeName, shapeDesc]) => {
    const li = document.createElement("li");
    li.innerHTML = `<b>${shapeName}</b>: ${shapeDesc}`;
    shapeList.appendChild(li);
  });

  // Assemble the div
  enigmaDiv.appendChild(title);
  enigmaDiv.appendChild(desc);
  enigmaDiv.appendChild(shapeList);

  enigmaContainer.appendChild(enigmaDiv);
});

let id = 1;

data.images = Array.from({ length: 24 }, () => {
  id++;
  return { id, url: `./images/image${id}.png` }
})

data.images.forEach((img) => {
  const imagesWrapper = document.querySelector(".img-wrapper > .images");

  imagesWrapper.innerHTML += `
    <img src='${img.url}' />
  `;
});

document.addEventListener("DOMContentLoaded", () => {
  const btnPrev = document.querySelector(".btn.prev");
  const btnNext = document.querySelector(".btn.next");
  const imgWrapper = document.querySelector(".img-wrapper > .images");
  const slideEls = imgWrapper.querySelectorAll("img");
  const maxSlides = slideEls.length;
  let currentSlide = 1;

  function getVisibleSlides() {
    const wrapperWidth = imgWrapper.clientWidth;
    const slideWidth = slideEls[0].getBoundingClientRect().width;
    return Math.round(wrapperWidth / slideWidth);
  }

  function getMaxGroups() {
    const visible = getVisibleSlides();
    return Math.max(1, Math.ceil(slideEls.length / visible));
  }

  function updateSlide() {
    const offsetX = -(currentSlide - 1) * 100;
    const visibleSlides = getVisibleSlides();

    // Use rem-based gap only for < 3-column layouts
    if (visibleSlides <= 3) {
      imgWrapper.style.transform = `translateX(calc(${offsetX}% - ${currentSlide - 1
        }rem))`;
    } else {
      imgWrapper.style.transform = `translateX(calc(${offsetX}%))`;
    }
  }

  btnNext.addEventListener("click", () => {
    const maxSlides = getMaxGroups();
    currentSlide = currentSlide < maxSlides ? currentSlide + 1 : 1;
    updateSlide();
  });

  btnPrev.addEventListener("click", () => {
    const maxSlides = getMaxGroups();
    currentSlide = currentSlide > 1 ? currentSlide - 1 : maxSlides;
    updateSlide();
  });

  // Update on load and resize
  window.addEventListener("resize", updateSlide);
  updateSlide();
});
