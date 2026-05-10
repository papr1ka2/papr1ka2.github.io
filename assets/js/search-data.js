// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-blog",
          title: "blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-projects",
          title: "projects",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "post-hello-world",
        
          title: "hello, world",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/2026/05/08/hello-world.html";
          
        },
      },{id: "projects-darpa-39-s-aixcc-team-atlanta",
          title: 'DARPA&#39;s AIxCC Team Atlanta',
          description: "Winning entry of DARPA&#39;s AI Cyber Challenge (AIxCC). ATLANTIS, an AI-driven cyber reasoning system.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/team_atlanta/";
            },},];
