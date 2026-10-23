<script setup>

import { ref, computed, reactive } from 'vue';


const project = reactive({
  nav: {
    logo:'SISU Club',
    website: 'Our website',
    websitelink: `https://mohammad20.582mi.com/Capython/index.html`,
    aboutus: 'About us',
    aboutuslink: `https://mohammad20.582mi.com/Capython/about/about.html`,
    videolink: `https://youtu.be/xjQ5Szq1pwg?si=Rrb3Y9kYa6YzI5i1`,
      video: 'Promotional video',
  },
  introduction: {
    title: 'SISU: INTRODUCTION',
 description: 'Fitness can be very confusing. You may not know where to start because of the amount of options and choices you might face. Tracking calories, water, steps, etc. can be overwhelming. That is why SISU exists. It was made to accompany you on your journey and to make it easy for you to navigate.'
  },
   goal: {
    title: 'OUR GOAL',
 description: 'We started our journey when we were provided our two main goals for our project. First, we need our project to simplify for the user. Next we need to build our project around Building a respectful and supportive community In that case, a fitness app felt like the obvious choice. For beginners it is complicated so, why not help each other out?'
  },
  goal: {
    title: 'OUR GOAL',
 description: 'We started our journey when we were provided our two main goals for our project. First, we need our project to simplify for the user. Next we need to build our project around Building a respectful and supportive community In that case, a fitness app felt like the obvious choice. For beginners it is complicated so, why not help each other out?'
  },
  images: {
    logo: "images/logo.png",
    old: "images/image 12.png",
    yt: "images/banner for web PS.jpg",
    web:"images/web.png",
  },
  arrows: {
    left: '<',
      right:'>',
  },
  videos: {
    animations: [
      "/videos/logo animation.mp4",
      "/videos/profile.mp4",
      "/videos/run.mp4",
      "/videos/stats_nozoom.mp4"
    ]
  },
  process: {
    title: 'DESIGN PROCESS',
    description: 'The design process was built around simplicity and easy navigation. Obviously, with a fitness theme.',
    subtitle: 'WHY CALL IT SISU?',
    subdes: 'Because its meaning fits our topic very well. It is a Finnish word (without direct English equivalent) that means determination and resilience.',
    subtitle2: 'WHY THE COLOR PALETTE?',
    subdes2: 'We stuck with Black/White for simplicity with a hint of bright colours for branding and less of a dull effect.',
    subtitle3: 'OLD LOGO CONCEPT',
    subdes3: 'We scrapped these because they didnt feel like they fit.',
    subtitle4: 'OUR FINAL LOGO CHOICE',
    subdes4: 'The idea was to make the logo simple, professional, and memorable. The two "S" are glued together making an "U" at the bottom, along with the "i" on the side. Our logo designer, Tiana, said that it looks like a flamingo. Who knows, maybe it will be our mascot in the future, since they represent balance, community, and self confidence!',
  },
  font: {
    title: 'OUR FONT CHOICE',
    description: 'Using these two fonts primarily felt energetic and athletic.',
  exo: 'Exo',
  orbitron: 'Orbitron',
  },
  hex: {
    black: '#201E1F',
    orange: '#FE7B2A',
    yellow: '#F9F575',
    purple: '#685BC7',
      white: '#FFF',
  
  },
  promoweb: {
    title: "OUR PROMOTIONAL WEBSITE",
    description: "Here is the website where we promote and showcase our app! It has animations and each section explains our app well. (Click the image below)",
  },
  challenges: {
    title:"CHALLENGES",
    subtitle: "Challenge 1",
    subdes: "When a team plans, they might get far too ambitious. At first, we wanted to develop a full fuctioning app. But seeing how little time we have, we decided to stick with a concept, and focus on advertising like it actually exists.",
    subtitle2: "Challenge 2",
    subdes2: "This challenge is more personal, but I was still very new to component animation on Figma. But since we had to build a concept, throughout 2 days while awaiting for icons, I learned to animate with components on the spot. I am very glad that I had the opportunity to because components are very useful to showcase the function of the app.",
    
  },
  animations: {
    title: 'MY ANIMATIONS',
    subtitle: 'LOGO ANIMATION',
    subdes: 'This is the logo animation that appears at the end of the trailer video. I have made the animation follow the stroke. It can symbolize traveling a path of fitness . I also made the "i" dot appear in a dynamic way, going back and forth with the scale. I made the "SISU" appear quickly at the bottom using the "Typewriter" effect. It is a very simple and quick animation, which follows our goal to simplify.',
    subtitle2: 'PROFILE ANIMATION',
    subdes2: 'By far the favourite animation I have done here. It is dynamic, it is quick and simple, while also showcasing what the profile section does. Though I wish for next time I used an actual 3D phone object. That way my animating skills will be pushed further.',
    subtitle3: 'STATISTIC ANIMATION',
    subdes3: 'This animation allows to preview what the homepage will do. The animations are quick and dynamic, allowing to keep the attention of the person watching the video. I made each section appear separately to build hierarchy.',
    subtitle4: 'RUN ANIMATION',
    subdes4: "This animation is a complementary to Devon's face when he looks at his phone. It is nice and simple, how it should be. Though I still chose to add some dynamic animations, to keep the attention.",
  },
  capiskills: {
    title: 'CAPYSKILLS',
    subdes: 'For my capiskill I chose HOS 1.4 Stay Focused and On Task. Personally I think I am a Level 8, because I manage to stay on task and work when I need to. I can work on most conditions and learning environments since I think I am very flexible, as long as I get my stuff done on time. Though, sometimes I do get distracted by my peers around me or my phone. I wish to improve on that. (Level approved by Kelly)',
    subtitle: 'BEFORE STARTING THE PROJECT (written on Figma)',
    subtitle2: 'REFLECTING ON MY PERFORMANCE',
    subdes2: 'This week definitely was something I have never experienced before. But, despite all hardships, I still managed to stay on task and maintain my level. I worked at school and outside of it efficiently. I was involved and stayed focused, considering I had 2 major roles in this project. I would say I moved to Level 10, because this experience allowed me to self-evaluate and observe that I am able to stay on task without guidance or supervision (I often found myself supervising others). My strategy was to have a mental step-by-step list, which allowed me to not feel so overwhelmed with the amount of tasks I have to do. With small steps, I was able to complete everything I had to do and even having spare time to help my teammates. I am satisfied with my part since I can say I have improved my graph and animation skills on After Effects as well as using Figma more efficiently using components and animating them.',

  },
  myrole: {
    title:'MY ROLE IN THIS PROJECT',
    title2: 'APP SHOWCASE',
    description: 'Being passionate about video editing, I obviously took on the role of doing motion graphics present in our promotional trailer. Though it is very minimal because Devon was mainly the one responsible for the video. I also took the role to build the app layout and animate it on Figma to showcase when we presented our project.',
  },
  promovideo: {
  title: 'PROMOTIONAL VIDEO',
  description: 'A good app needs advertising! So we made a trailer to expand our concept horizons. It includes the animations I have made :) (Click on the image to view)',
    
  },
  credits: {
    title: 'TEAM CREDITS',
    description: 'Thank you to our teammates for participating in this project!',
    namede: 'DEVON:',
    desde: 'Responsible for the trailer, filming and editing.',
  namewi: 'WILSON:',
    deswi: 'Responsible for organization tasks and filming for the trailer.',
    namese: 'SERENA',
    desse: 'Responsible for 3D rotating clock on our website.',
    nameti: 'TIANA:',
    desti: 'Responsible for our logo design and some app icons.',
    nametr: 'TRISTAN:',
    destr: 'Responsible for some icons on the app.',
    namezi: 'ZIYAN:',
    deszi: 'Responsible for building the layout of our website.',
     namejo: 'JOSHUA:',
    desjo: 'Responsible for the animations on our website.',
     nameal: 'ALEXANDRA:',
    desal: 'Responsible for building the "About us" page.',

},
  logos: [
    { src: "images/Logo 1.png", alt: "Logo 1" },
    { src: "images/Logo 2.png", alt: "Logo 2" },
    { src: "images/Logo 3.png", alt: "Logo 3" },
    { src: "images/Logo 4.png", alt: "Logo 4" },
    { src: "images/Logo 5.png", alt: "Logo 5" },
  ],
});

const currentIndex = ref(0);
const currentIndex2 = ref(0);


const activeLogos = computed(() => {
      const logos = project.logos;
  const prevIndex = (currentIndex2.value - 1 + logos.length) % logos.length;
  const nextIndex = (currentIndex2.value + 1) % logos.length;
  return [
    { ...logos[prevIndex], position: 'left' },
    { ...logos[currentIndex2.value], position: 'center' },
    { ...logos[nextIndex], position: 'right' },
  ];
    });

const getTranslateX = (index) => {
  const offset = (index - currentIndex2.value) * 100;
  return `translateX(${offset}%)`;
}; 

const nextLogo = () => {
  currentIndex2.value = (currentIndex2.value + 1) % project.logos.length;
};

const startAnimation = () => {
  setInterval(nextLogo, 500);
};


startAnimation();


const images = ref([
  { src: "images/homepage.png",
    title: "SISU",
    topic: "YOUR HOMEPAGE",
    description: "As you open your app, the user will be greeted by their stats including the calories, carbs, protein and fat you've consumed throughtout their day. At the bottom, the user will also see the amount of steps and water intake. This allows easy tracking for the user to simplify their diet journey."
  },
  { src: "images/profile.png",
    title: "SISU",
    topic: "PROFILE PAGE",
    description: "In the profile segment of the app, the user is able to look at their uploaded posts and the achievements they shared. They can also look at the follower and following count, make new posts and message others."
  },
  { src: "images/run_Segment.png",
    title: "SISU",
    topic: "RUN PAGE",
    description: "If the user desires to start a run, it happens here. Thanks to a geo tracker and a chrono system, the user can easily track and save their statistics."
  },
  { src: "images/camera.png",
    title: "SISU",
    topic: "CAMERA TRACKING",
    description: "Take a picture! The camera will process the food and add it to the database and showcase the users stats in the homepage. Very easy and simple to incorporate data."
  },
  { src: "images/EXPLORE PAGE.png",
    title: "SISU",
    topic: "EXPLORE PAGE",
    description: "See others progress! A supportive community definitely gives motivations and steers up confusion in a complicated world of fitness. Leave likes and comments, share with your friends and have fun!"
  }
]);


const showSlider = (type) => {
  if (type === 'next') {
    currentIndex.value = (currentIndex.value + 1) % images.value.length;
    carousel.value.classList.add('next')
    carousel.value.classList.remove('prev');
  } else if (type === 'prev') {
    currentIndex.value = (currentIndex.value - 1 + images.value.length) % images.value.length;
    carousel.value.classList.add('prev');
    carousel.value.classList.remove('next');
  }
  console.log("Current Index:", currentIndex.value); // Debugging
  console.log("Current Image:", images.value[currentIndex.value]); // Debugging
};



const nextButton = ref(null);
const listHTML = ref(null);
const prevButton = ref(null);
const carousel = ref(null);

// Calculate position class for each item
const getPositionClass = (index) => {
  const diff = (index - currentIndex.value + images.value.length) % images.value.length;
  switch (diff) {
    case 0:
      return 'active'; // Center item
    case 1:
      return 'next1'; // Right item
       case 2:
      return 'next2'; // Right item
       case 3:
      return 'next3'; // Right item
    case images.value.length - 1:
      return 'prev1'; // Left item
    default:
      return ''; // Hide other items
  }
};


</script>
<template>
  <body>
    <header>
      <div class="logo">{{project.nav.logo}}</div>
      <nav>
        <a href= "https://mohammad20.582mi.com/Capython/index.html">{{project.nav.website}}</a>
        <a href="`https://mohammad20.582mi.com/Capython/about/about.html`">{{project.nav.aboutus}}</a>
        <a href="`https://youtu.be/xjQ5Szq1pwg?si=Rrb3Y9kYa6YzI5i1`">{{project.nav.video}}</a>
      </nav>
    </header>
    <section>
     <p class="section-title reveal">{{ project.introduction.title }}</p>
     <p class="intro-text">{{ project.introduction.description }}</p>
    <p class="section-title reveal">{{project.goal.title}}</p>
    <p class="intro-text reveal2">{{ project.goal.description }}</p>
    </section>
    <p class="section-title reveal">{{project.process.title}}</p>
    <p class="intro-text reveal2">{{ project.process.description }}</p>
    <div class="name-explanation reveal2">
      <p class="sub-title">{{ project.process.subtitle }}</p>
      <p class="intro-text reveal2">{{ project.process.subdes }}</p>
    </div>
    <div class="name-explanation reveal2">
    <p class="sub-title">{{ project.process.subtitle2 }}</p>
    <p class="intro-text">{{ project.process.subdes2 }}</p>
    </div>
    <div class="color-palette reveal2">
      <div class="color1 levitate"></div>
      <div class="color2 levitate2"></div>
      <div class="color3 levitate"></div>
      <div class="color4 levitate2"></div>
      <div class="color5 levitate"></div>
      <p class="intro-text">{{project.hex.black}}</p>
      <p class="intro-text">{{project.hex.white}}</p>
      <p class="intro-text">{{project.hex.purple}}</p>
      <p class="intro-text">{{project.hex.yellow}}</p>
      <p class="intro-text">{{project.hex.orange}}</p>
      
    </div>
    <div class="name-explanation reveal2 font">
    <p class="sub-title">{{project.font.title}}</p>
    <p class="intro-text">{{ project.font.description }}</p>
    <div class="fonts">
     <p class="exo">{{ project.font.exo }}</p>
     <p class="exo2">{{ project.font.exo }}</p>
      <p class="exo3">{{ project.font.exo }}</p>
     <p class="orbitron">{{ project.font.orbitron }}</p>
     <p class="orbitron2">{{ project.font.orbitron }}</p>
     <p class="orbitron3">{{ project.font.orbitron }}</p>
    </div>
    </div>
    <div class="name-explanation reveal2 font">
    <p class="sub-title">{{ project.process.subtitle3 }}</p>
    <p class="intro-text">{{ project.process.subdes3 }}</p>
    <img :src="project.images.old">
    </div>
    <div class="name-explanation reveal2">
    <p class="sub-title">{{ project.process.subtitle4 }}</p>
    <p class="intro-text">{{ project.process.subdes4 }}</p>
    </div>
    <div class="logo-banner reveal2">
      <div class="banner-grid" ref="bannerGrid">
<div
        v-for="(logo, index) in activeLogos"
        :key="logo.src"
        class="logo"
        :class="logo.position"
      >
      <img :src="logo.src" :alt="logo.alt"/>
    </div>
      </div>
    </div>
    <section>
      <p class="section-title reveal">{{ project.promoweb.title }}</p>
      <div class="trailer reveal2">
<p class="intro-text">{{ project.promoweb.description }}</p>
<a href="https://mohammad20.582mi.com/Capython/index.html">
  <img :src="project.images.web">
</a>
   </div>
    </section>
    <section>
    <p class="section-title reveal">{{ project.challenges.title}}</p>
    <div class="chall-1 reveal2">
      <p class="sub-title">{{ project.challenges.subtitle }}</p>
      <p class="intro-text">{{ project.challenges.subdes }}</p>
    </div>
    <div class="chall-2 reveal2">
      <p class="sub-title">{{ project.challenges.subtitle2 }}</p>
      <p class="intro-text">{{ project.challenges.subdes2 }}</p>
    </div>
    </section>
    <section>
    <p class="section-title reveal">{{project.myrole.title}}</p>
    <p class="intro-text reveal2">{{ project.myrole.description }}</p>
    </section>
   <p class="section-title reveal" id="carousel">{{ project.myrole.title2 }}</p>
       <div class="carousel" ref="carousel">
      <div class="list">
        <!-- Render all items -->
        <div
          v-for="(img, index) in images"
          :key="index"
          class="item"
          :class="getPositionClass(index)"
        >
          <img :src="img.src" alt="Carousel Image">
          <div class="intro"> 
            <div class="title">{{ img.title }}</div>
            <div class="topic">{{ img.topic }}</div>
            <div class="des">{{ img.description }}</div>
          </div>
        
        </div>
      </div>
      <div class="arrows">
        <button id="prev" @click="showSlider('prev')">{{ project.arrows.left }}</button>
        <button id="next" @click="showSlider('next')">{{ project.arrows.right }}</button>
      </div>
    </div>
    <section>
      <p class="section-title reveal">{{ project.promovideo.title }}</p>
      <div class="trailer reveal2">
<p class="intro-text">{{ project.promovideo.descriptizzzo }}</p>
<a href="https://youtu.be/xjQ5Szq1pwg?si=Rrb3Y9kYa6YzI5i1">
  <img :src="project.images.yt">
</a>
   </div>
    </section>
    <div class="animations">
      <p class="section-title reveal" id="animations">{{ project.animations.title }}</p>
      <div class="sequence">
        <div class="grid-item">
          <div class="sidetext">
            <div class="name">{{project.animations.subtitle}}</div>
            <div class="caption">{{ project.animations.subdes }}</div>
          </div>
          <video src="/videos/logo animation.mp4" autoplay muted loop alt></video>
        </div>
        <div class="grid-item-left">
          <video src="/videos/profile.mp4" autoplay muted loop alt></video>
           <div class="sidetext">
            <div class="name">{{project.animations.subtitle2}}</div>
            <div class="caption">{{ project.animations.subdes2 }}</div>
          </div>
        </div>
        <div class="grid-item">
          <div class="sidetext">
            <div class="name">{{project.animations.subtitle3}}</div>
            <div class="caption">{{ project.animations.subdes3 }}</div>
          </div>
          <video src="/videos/stats_nozoom.mp4" autoplay muted loop alt></video>
        </div>
        <div class="grid-item-left">
          <video src="/videos/run.mp4" autoplay muted loop alt></video>
           <div class="sidetext">
            <div class="name">{{project.animations.subtitle4}}</div>
            <div class="caption">{{project.animations.subdes4}}</div>
          </div>
        </div>
      </div>
    </div>
    <section>
    <p class="section-title reveal">{{ project.capiskills.title }}</p>
    <div class="capyskills levitate">
      <p class="sub-title">{{ project.capiskills.subtitle }}</p>
      <p class="intro-text"> {{ project.capiskills.subdes }} </p>
      <p class="sub-title">{{ project.capiskills.subtitle2 }}</p>
      <p class="intro-text"> {{ project.capiskills.subdes2 }} </p>
    </div>
    </section>
    <section class="team-credits">
    <p class="section-title reveal">{{project.credits.title}}</p>
    <p class="intro-text">{{ project.credits.description }}</p>
    <div class="roles">
    <div class="name-1">
      <p class="team-name">{{project.credits.namede}}</p>
      <p class="role">{{ project.credits.desde }}</p>
    </div>
    <div class="name-2">
      <p class="team-name">{{project.credits.namewi}}</p>
      <p class="role">{{ project.credits.deswi }}</p>
    </div>
    <div class="name-3">
      <p class="team-name">{{project.credits.namese}}</p>
      <p class="role">{{ project.credits.desse }}</p>
    </div>
    <div class="name-4">
      <p class="team-name">{{project.credits.nameti}}</p>
      <p class="role">{{ project.credits.desti }}</p>
    </div>
    <div class="name-1-v2">
      <p class="team-name">{{project.credits.nametr}}</p>
      <p class="role">{{ project.credits.destr }}</p>
    </div>
     <div class="name-2-v2">
      <p class="team-name">{{project.credits.namezi}}</p>
      <p class="role">{{ project.credits.deszi }}</p>
    </div>
    <div class="name-3" >
      <p class="team-name">{{project.credits.nameal}}</p>
      <p class="role">{{ project.credits.desal }}</p>
    </div>
    <div class="name-4">
      <p class="team-name">{{project.credits.namejo}}</p>
      <p class="role">{{ project.credits.desjo }}</p>
    </div>
    </div>
    </section>
  </body>
</template>
<style>
@import url('https://fonts.googleapis.com/css2?family=Exo:ital,wght@0,100..900;1,100..900&family=Jura:wght@300..700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Exo:ital,wght@0,100..900;1,100..900&family=Jura:wght@300..700&family=Orbitron:wght@400..900&display=swap');
*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  scroll-behavior: smooth;
}
:root{
  --item1-transform: translate(-100%, -5%) scale(1.5);
  --item1-filter: blur(30px);
  --item1-zIndex: 11;
  --item1-opacity: 0;

  --item2-transform: translate(0, 0);
  --item2-filter: blur(0);
  --item2-zIndex: 10;
  --item2-opacity: 1;

  --item3-transform: translate(50%, 10%) scale(0.8);
  --item3-filter: blur(10px);
  --item3-zIndex: 9;
  --item3-opacity: 1;

  --item4-transform: translate(90%, 20%) scale(0.5);
  --item4-filter: blur(30px);
  --item4-zIndex: 8;
  --item4-opacity: 1;

  --item5-transform: translate(120%, 30%) scale(0.3);
  --item5-filter: blur(50px);
  --item5-zIndex: 7;
  --item5-opacity: 0;
}
nav{
  display: grid;
   grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
}
header{
  background-color: #685BC7;
  width: 100%;
  margin: auto;
  padding: 30px;
  display: grid;
   grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 15px;
  position: relative;
  z-index: 100;
}
p{
  font: "Exo";
  font-size: 2em;
  font-weight: 300;
  width: 100%;
  color: white;
  max-width: 35em;
}
.sub-title{
  font-size: 2.5em;
  font-weight: 700;
  text-align: center;
  padding: 10px;
}
.intro-text{
  justify-self: center;
  width: 80%;
  font-family: Helvetica, sans-serif;
}
.team-credits .intro-text{
  width: 80%;
  text-align: center;
  font-weight: bold;
  margin-bottom: 30px;
}
.chall-1{
  background-color: #201E1F;
  border: 10px solid #685BC7;
  border-radius: 50px;
  padding: 30px;
  width: 80%;
  margin-top: 50px;

filter: drop-shadow(10px 10px 20px #685BC7);
}
.chall-1 .sub-title{
 color: #685BC7;
}
.chall-2{
  background-color: #201E1F;
  border: 10px solid #FE7B2A;
  border-radius: 50px;
  padding: 30px;
  width: 80%;
  margin-top: 50px;
filter: drop-shadow(10px 10px 20px #FE7B2A);
}
.chall-2 .sub-title{
  color: #FE7B2A;
}
.roles{
  display: grid;
  align-items: center;
  justify-items: center;
}
.team-name{
  font-weight: 900;
  color: #685BC7;
  text-align: right;
  font-size: 2em;
  align-self: center;
}
.role{
  text-align: left;
  font-size: 1.5em;
  align-self: center;
  font-family: Helvetica, sans-serif;
  font-weight: 100;
}
.name-explanation{
  padding-top: 50px;
  display: grid;
  place-items: center;
}


.name-1, .name-2, .name-3, .name-4, .name-2-v2, .name-1-v2 {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
  margin: 20px;
  animation: slide-in-text 2s ease forwards;
 animation-timeline: view();
 animation-range: entry 50%, entry 150%;
}
.name-1{
  transform: translateX(-40%);
}
.name-1-v2{
  transform: translateX(-44%);
}
.name-2{
  transform: translateX(-20%);
}
.name-2-v2{
  transform: translateX(-27%);
}
.name-3{
  transform: translateX(-10%);
}
.name-4{
  transform: translateX(0%);
}
.carousel{
height: 800px;
overflow: hidden;
position: relative;
padding: 30px;
background: transparent;
}
.reveal {
  position: relative;
  transform: translateY(100px);
  opacity: 0;
  animation: revealAnimation 2s ease forwards;
  animation-timeline: view(); 
  animation-range: entry 10% entry 500%; 
}
.reveal2 {
  position: relative;
  transform: translateY(100px);
  opacity: 0;
  animation: revealAnimation 2s ease forwards;
  animation-timeline: view(); 
  animation-range: entry 10% entry 200%; 
}


.carousel .list{
  position: absolute;
  top: 0;
  left: 50%;
  width: 1140px;
  max-width: 90%;
  transform: translateX(-50%);
  height: 80%;
}
.carousel .list .item{
  position: absolute;
  left: 0;
  top: 0;
  width: 80%;
  height: 70%;
  font-size: 15px;
}
.carousel .list .item img{
  width: 30%;
  position: absolute;
  right: 0;
  top: 5%;
  padding: 10px;
  border-radius: 30px;
  filter: drop-shadow(10px 10px 20px rgba(0, 0, 0, 0.5));
}
.carousel .list .item .intro {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 400px;
  opacity: 0;
  pointer-events: none;
  color: white;
}
.carousel .list .item.active .intro {
  opacity: 1;
  pointer-events: auto;
  transition: opacity 0.5s;
  margin-top: 30px;
}
.carousel .list .item.active{
  transform: var(--item2-transform);
  filter: var(--item2-filter);
  z-index: var(--item2-zIndex);
  opacity: var(--item2-opacity);
}
.carousel .list .item.prev1{
  transform: var(--item1-transform);
  filter: var(--item1-filter);
  z-index: var(--item1-zIndex);
  opacity: var(--item1-opacity);
  pointer-events: none;
}
.carousel .list .item.next1{
  transform: var(--item3-transform);
  filter: var(--item3-filter);
  z-index: var(--item3-zIndex);
  opacity: var(--item3-opacity);
}
.carousel .list .item.next2{
  transform: var(--item4-transform);
  filter: var(--item4-filter);
  z-index: var(--item4-zIndex);
  opacity: var(--item4-opacity);
}
.carousel .list .item.next3{
  transform: var(--item5-transform);
  filter: var(--item5-filter);
  z-index: var(--item5-zIndex);
  opacity: var(--item5-opacity);
  pointer-events: none;
}
.carousel .list .item img[src="/images/camera.png"] {
  top: 5%;
  width: 60%;
}
.carousel::before{
  width: 500px;
  height: 300px;
  content: '';
  background-image: linear-gradient(
    45deg, #F9F575, #FE7B2A, #685BC7
  );
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-10%, -50%);
  transition: 1s;
  z-index: -0.99;
  border-radius: 20% 30% 80% 45%;
  filter: blur(80px);
}
/* Header */
.name{
  color: white;
  font-family: "Exo";
  font-weight: 900;
  font-size: 3em;
  padding-bottom: 10px;
  padding: 20px;
}
header .logo {
  color: white;
  font-family: "Exo";
  font-weight: 900;
  font-size: 32px;
  justify-self: center;
  align-self: center;
}
a{
  text-decoration: none;
  color: white;
  justify-self: center;
  align-self: center;
  font-family: "Orbitron";
  font-weight: 300;

}
body{
  background-color: #201E1F;
  font-family: 'Exo';
  font-weight: 700;
}

.carousel .list .item.active img {
  transition: transform 0.3s ease-in-out, filter 0.3s ease-in-out;
}
.carousel .list .item.active img:hover {
  transform: scale(1.1); 
  filter: drop-shadow(15px 15px 30px rgba(0, 0, 0, 0.9)); 
}
img{
  transition: transform 0.3s ease-in-out, filter 0.3s ease-in-out;
}
 img:hover {
  transform: scale(1.1); 
  filter: drop-shadow(15px 15px 30px rgba(0, 0, 0, 0.9)); 
}


/* arrows */
.arrows{
  position: absolute;
  bottom: 150px;
  width: 1140px;
  max-width: 90%;
  left: 50%;
  transform: translateX(-50%);
  display: grid;
  align-items: center;
  justify-content: space-between;
 grid-auto-flow: column;
 
}
.arrows #next,
.arrows #prev{
  width: 60px;
  height: 60px;
  border-radius: 50%;
  font-family: "Arial";
  font-weight: 900;
  font-size: 30px;
  border: 2.5px solid #685BC7;
  transition: background-color 0.3s ease, transform 0.3s ease-in-out, box-shadow 0.3s ease, color 0.3s ease-in-out; 
}

.carousel .arrows button:hover {
  background-color: #F9F575; 
  transform: scale(1.1); 
  box-shadow: 0 4px 8px #FE7B2A; 
  color: #685BC7;
}

/* title */

.carousel .list .item .intro .title {
  font-size: 2em;
line-height: 0.8em;
}
.carousel .list .item .intro .topic {
  font-size: 4em;
  font-weight: 400;
}
.carousel .list .item .intro .des {
  font-size: 1.2em;
  font-weight: 400;
}

.carousel .list .item.active .intro .title,
.carousel .list .item.active .intro .topic,
.carousel .list .item.active .intro .des {
  opacity: 0;
  animation: ShowContent 0.3s 0.5s ease-in-out forwards;
}
@keyframes ShowContent {
  from{
    transform: translateY(50px);
    filter: blur(30px);
    opacity: 0;
  }
  to{
    transform: translateY(0);
    filter: blur(0);
    opacity: 1;
  }
}
.carousel .list .item.active .intro .topic{
  animation-delay: 0.9s;
}
.carousel .list .item.active .intro .des{
  animation-delay: 1.1s;
}
.carousel.next .list .item.prev1 {
  animation: positionItem2Next 0.5s ease-in-out 1 forwards;
}
@keyframes positionItem2Next {
  from{
    transform: var(--item2-transform);
  filter: var(--item2-filter);
  z-index: var(--item2-zIndex);
  opacity: var(--item2-opacity);
  }
}
.carousel.next .list .item.active {
  animation: positionItem3Next 0.7s ease-in-out 1 forwards;
}
@keyframes positionItem3Next {
  from{
    transform: var(--item3-transform);
  filter: var(--item3-filter);
  z-index: var(--item3-zIndex);
  opacity: var(--item3-opacity);
  }
}

.carousel.next .list .item.next1 {
  animation: positionItem4Next 0.9s ease-in-out 1 forwards;
}
@keyframes positionItem4Next {
  from{
    transform: var(--item4-transform);
  filter: var(--item4-filter);
  z-index: var(--item4-zIndex);
  opacity: var(--item4-opacity);
  }
}
/* Previous button anim */
.carousel.prev .list .item.active {
  animation: positionItem1Prev 0.5s ease-in-out 1 forwards;
}
@keyframes positionItem1Prev {
  from{
    transform: var(--item1-transform);
  filter: var(--item1-filter);
  z-index: var(--item1-zIndex);
  opacity: var(--item1-opacity);
  }
}

.carousel.prev .list .item.next1 {
  animation: positionItem2Prev 0.5s ease-in-out 1 forwards;
}
@keyframes positionItem2Prev {
  from{
    transform: var(--item2-transform);
  filter: var(--item2-filter);
  z-index: var(--item2-zIndex);
  opacity: var(--item2-opacity);
  }
}

.carousel.prev .list .item.next2 {
  animation: positionItem3Prev 0.5s ease-in-out 1 forwards;
}
@keyframes positionItem3Prev {
  from{
    transform: var(--item3-transform);
  filter: var(--item3-filter);
  z-index: var(--item3-zIndex);
  opacity: var(--item3-opacity);
  }
}
.color-palette{
  margin-top: 100px;
  width: 80%;
  justify-self: center;
  display: grid;
  place-items: center;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: 1fr 1fr;
}
.color-palette p, .name-reveal p{
 text-align: center;
}
.color1, .color2, .color3, .color4, .color5 {
  width: 100px;
  height: 100px;
  border-radius: 50%;
}
.color1{
  background-color: #201E1F;
  border: 2px solid white;
  filter: drop-shadow(0px 0px 15px #888888);
}
.color2{
  background-color: white;
  filter: drop-shadow(0px 0px 15px #FFF);
}
.color3{
  background-color: #685BC7;
  filter: drop-shadow(0px 0px 15px #685BC7);
}
.color4{
  background-color: #F9F575;
  filter: drop-shadow(0px 0px 15px #F9F575);
}
.color5{
  background-color: #FE7B2A;
  filter: drop-shadow(0px 0px 15px #FE7B2A);
}
.caption{
  font-family: "Exo";
  font-size: 1.5em;
  font-weight: 300;
  color: #F9F575;
  width: 100%;
  padding: 20px;
}
.bold{
  font-weight: 600;
}
.animations{
  margin-top: 100px;
  width: 100%;
  background: linear-gradient(180deg, #201E1F 0%,#685BC7 40%, #685BC7 60%, #201E1F 100%);
}
.sequence{
  width: 100%;
  display: grid;
  grid-template-columns: 1fr; /* Single column for outer grid */
  gap: 50px; /* Spacing between rows */
  padding: 100px;
}
.grid-item, .grid-item-left {
  display: grid;
  grid-template-columns: 1fr 1fr; /* Two columns: video and text */
  gap: 40px; /* Spacing between video and text */
  align-items: center; /* Vertically center content */
}
.grid-item {
  text-align: right;
  animation: slide-in linear;
 animation-timeline: view();
 animation-range: entry 0;
}
.grid-item-left {
  animation: slide-in-left linear;
 animation-timeline: view();
 animation-range: entry 0;
}
video{
  width: 100%;
  border-radius: 30px;
  filter: drop-shadow(10px 10px 20px black);
}
.logo-banner{
  margin-top: 50px;
width: 60%;
justify-self: center;
overflow: hidden;
border: 10px #685BC7 solid;
display: grid;
place-items: center;
background: linear-gradient(
    90deg, #F9F575, #FE7B2A, #685BC7
  );;
border-radius: 50px;
  padding: 20px;
}
.banner-grid {
  display: grid;
  grid-auto-flow: row;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px; 
  height: 150px; 
  position: relative;
  height: auto;
}
.banner-grid .logo {
  width: 150px; 
  height: 150px; 
}

.banner-grid .logo img {
  width: 100%;
  height: 100%;
  object-fit: contain; 
  filter: drop-shadow(10px 10px 20px rgba(0, 0, 0, 0.5));
}
.logo.left {
  grid-column: 1;
}

.logo.center {
  grid-column: 2;

}

.logo.right {
  grid-column: 3;

}


.section-title{
  font-family: "Orbitron";
  font-size: 5em;
  text-align: center;
  font-weight: 900;
  color: white;
  margin-top: 50px;
  margin-bottom: 50px;
}
section{
  display: grid;
  place-items: center;
}
.capyskills{
  width: 60%;
  height: auto;
  background-color: white;
  border: 10px solid #685BC7;
  border-radius: 50px;
}
.capyskills .sub-title{
  font-family: "Exo";
  font-size: 2em;
  color: #201E1F;
  font-weight: 900;
  padding: 10px;
  margin-top: 30px;
}
.capyskills .intro-text{
color: #201E1F;
font-family: "Exo";
font-weight: 300;
font-size: 1.5em;
padding: 30px;
}
.levitate {
    animation-name: fly;
    animation-duration: 3s;
    animation-iteration-count: infinite;
}
.levitate2 {
    animation-name: fly2;
    animation-duration: 4s;
    animation-iteration-count: infinite;
}
.fonts{
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: repeat(3, 1fr);
  gap: 10px;
  grid-auto-flow: column;
  margin-top: 30px;
}
.orbitron{
  font-family: "Orbitron";
  font-weight: 100;
}
.orbitron2{
  font-family: "Orbitron";
  font-weight: 500;
}
.orbitron3{
  font-family: "Orbitron";
  font-weight: 900;
}
.exo2{
  font-weight: 500;
}
.exo3{
  font-weight: 900;
}
.trailer{
  display: grid;
  place-items: center;
}
.trailer img{
  width: 60%;
  border-radius: 30px;
  margin-top: 30px;
}
.trailer a{
  justify-self: center;
  width: 100%;
  text-align: center;
}
.font .intro-text{
  text-align: center;
}

/* animations */
@keyframes fly {
  0%{
    transform: translateY(0px);
  }
  50%{
    transform: translateY(10px);
  }
  100%{
    transform: translateY(0px);
  }
}
@keyframes fly2 {
  0% {
    transform: translateY(0px);
}
50% {
    transform: translateY(-10px);
}
100% {
    transform: translateY(0px);
}
}
@keyframes revealAnimation {
  from {
    opacity: 0;
    transform: scale(0.8);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
@keyframes appear{
  from{
    opacity: 0;
  }
  to{
    opacity: 1;
  }
}

@keyframes slide-in{
  from{
    transform: translateX(-10%);
    opacity: 0%;
  }
  to{
    opacity: 100%;
  }
}
@keyframes slide-in-left{
  from{
    transform: translateX(10%);
    opacity: 0%;
  }
  to{
    opacity: 100%;
  }
}
@keyframes slide-in-text{
  from{
    scale: 0.8;
    opacity: 0;
  }
  to{
    opacity: 1;
    scale: 1;
  }
}
@media screen and (max-width: 991px) {
  .carousel .list .item{
    width: 90%;
  }
  .carousel .list .item .img{
  width: 50%;
 }.arrows{
    bottom: 250px !important; 
  }
  .arrows #next, .arrows #prev{
    width: 40px !important;
    height: 40px !important;
  }
}

@media screen and (max-width: 720px) {
  .carousel .list .item{
    width: 100%;
    display: grid;
    grid-template-rows: auto auto; 
    margin: 0 auto;
    gap: 20px; 
    align-items: center; 
    height: 80%;
  }
  .carousel {
    height: 600px;
  }
  .carousel .list{
    height: 100%;
  }
 .carousel .list .item .intro{
   width: 100%; 
    grid-row: 2;
    padding: 10px; 
    gap: 10px;
 }
 .carousel .list .item img{
  width: 60%;
  padding: 1em;
  height: auto;
  grid-row: 1;
  justify-self: center;
  object-fit: contain;
  position: static;
 }
 .carousel .list .item img[src="/images/camera.png"] {
  top: 20%;
  width: 80%;
}
  .carousel .list .item .intro .title {
    font-size: 0.9em ; 
  }
  .carousel .list .item .intro .topic {
    font-size: 1.5em ;  
  }
  .carousel .list .item .intro .des {
    font-size: 0.7em ; 
  }
  .arrows{
    bottom: 50px ; 
  }
  .arrows #next, .arrows #prev{
    width: 40px ;
    height: 40px ;
  }
  .sequence{
    padding: 0 ;
  }
  .grid-item{
   display: grid;
   grid-template-rows: 1fr 1fr;
  }
  .grid-item .name, .grid-item .caption{
    grid-row: 2;
  }
  .grid-item video{
    grid-row: 1;
  }
  .grid-item, .grid-item-left{
    grid-template-columns: 1fr  ;
    gap: 10px;
    padding: 20px;
    overflow: hidden;
    animation: appear linear;
    animation-timeline: view();
 animation-range: entry 0;
  }
  .grid-item .name, .grid-item-left .name{
   font-size: 1.5em;
  }
  .grid-item .caption, .grid-item-left .caption{
   font-size: 1em;
   padding: 0;
   padding-bottom: 20px;
   gap: 0;
  }
  .logo-banner{
width: 60%;
justify-self: center;
  padding: 20px;
  height: 600px;
  display: grid;
  place-items: center;
}
.banner-grid {
  grid-auto-flow: column;
  grid-template-columns: 1fr;
  position: relative;
  justify-self: center;
}
.logo.left,
  .logo.center,
  .logo.right {
    grid-column: 1; /* All logos in the first (and only) column */
  }
  .section{
    padding: 20px;
  }
  .section-title{
    font-size: 2em;
    margin-bottom: 10px;
  }
  .intro-text{
    font-size: 1em;
  }
  .carousel::before{
    opacity: 0;
  }
  .capyskills{
    width: 100%;
    animation: none;
  }
  .capyskills .sub-title{
    font-size: 1.5em;
    font-weight: 500;
  }
  .capyskills .intro-text{
    font-size: 1em;
    padding: 0;
    padding-bottom: 20px;
  }
  .name-1, .name-2, .name-3, .name-4, .name-2-v2, .name-1-v2 {
  grid-template-columns: 1fr;
  max-width: 75%;
}
.roles{
  margin: 30px;
}
.role{
  text-align: center;
  font-size: 1em;
}
.team-name{
  text-align: center;
  font-size: 1.5em;
}
.name-1{
  transform: translateX(0);
}
.name-1-v2{
  transform: translateX(0);
}
.name-2{
  transform: translateX(0);
}
.name-2-v2{
  transform: translateX(0);
}
.name-3{
  transform: translateX(0);
}
.name-4{
  transform: translateX(0);
}
.color-palette{
  grid-template-columns: 1fr 1fr;
  grid-template-rows: repeat(5, 1fr);
  grid-auto-flow: column;
  gap: 20px;
  animation: none;
  opacity: 1;
  transform: translateY(0);
}
.color-palette .levitate, .color-palette .levitate2{
 animation: none;
}
.color-palette .intro-text{
 font-size: 2em;
 text-align: left;
}
.name-explanation img{
width: 80%;
}
nav{
  text-align: left;
  gap: 10px;
}
nav a{
  justify-self: left;
}
.trailer img{
  width: 80%;
}
}




</style>