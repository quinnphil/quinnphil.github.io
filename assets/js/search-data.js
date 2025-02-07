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
        },{id: "nav-portfolio",
          title: "portfolio",
          description: "Collection of my work.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/portfolio/";
          },
        },{id: "nav-tutorials",
          title: "tutorials",
          description: "Tutorials and how-to documents",
          section: "Navigation",
          handler: () => {
            window.location.href = "/tutorials/";
          },
        },{id: "nav-reviews",
          title: "reviews",
          description: "Reviews of products and services",
          section: "Navigation",
          handler: () => {
            window.location.href = "/reviews/";
          },
        },{id: "nav-organisations",
          title: "organisations",
          description: "Organisations I have worked with.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/organisations/";
          },
        },{id: "dropdown-recipes",
              title: "recipes",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "";
              },
            },{id: "dropdown-repos",
              title: "repos",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "";
              },
            },{id: "post-powershell-bulk-rename-file-extension",
      
        title: "Powershell - Bulk rename file extension",
      
      description: "Powershell command for bulk changing file extensions.",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2025/powershell-bulk-rename/";
        
      },
    },{id: "post-note-on-the-relationship-between-artificial-intelligence-and-human-intelligence",
      
        title: "Note on the Relationship Between Artificial Intelligence and Human Intelligence",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2025/note-on-relationship-ai/";
        
      },
    },{id: "news-sparkles-new-website-launched-hosted-on-github-pages-jekyll-based-with-al-folio-theme",
          title: ':sparkles: New website launched. Hosted on Github Pages. Jekyll-based with Al folio theme....',
          description: "",
          section: "News",},{id: "news-the-2025-du-bois-visualization-challenge-started-this-week",
          title: 'The 2025 Du Bois Visualization Challenge started this week',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/Du-Bois-Visualisation-Challenge/";
            },},{id: "news-chinese-festival-chatham",
          title: 'Chinese Festival Chatham',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/Chinese-festival-Chatham/";
            },},{id: "projects-fsa-ratings-for-medway",
          title: 'FSA Ratings for Medway',
          description: "Food Standard Agency ratings for organisations in Medway",
          section: "Projects",handler: () => {
              window.location.href = "/projects/portfolio_fsa_ratings_for_medway/";
            },},{id: "projects-reading-excel-files-with-openpyxl",
          title: 'Reading Excel files with openpyxl',
          description: "Tutorial about reading unusual Excel files into pandas dataframes",
          section: "Projects",handler: () => {
              window.location.href = "/projects/tutorial_reading_excel_files_with_openpyxl/";
            },},{id: "recipes-baked-beans-on-toast",
          title: 'Baked beans on toast',
          description: "Test recipe",
          section: "Recipes",handler: () => {
              window.location.href = "/recipes/baked_beans_on_toast/";
            },},{id: "reviews-munro-careers-is-a-career-coaching-service-based-in-buckinghamshire-led-by-karen-munro-a-professionally-qualified-career-guide-after-finding-myself-in-a-bit-of-a-dead-end-with-my-job-seeking-an-ex-colleague-who-previously-had-success-with-karen-s-methods-recommended-her-services-since-i-began-looking-for-a-new-role-late-last-year-i-had-been-sending-off-my-cv-with-little-success-despite-my-wealth-of-experience-at-world-class-organisations-and-having-a-range-of-technical-skills-i-received-very-few-responses-and-even-fewer-invitations-to-interview-with-prospective-employers-the-lack-of-feedback-was-frustrating-it-was-clear-that-my-cv-was-not-doing-enough-to-make-it-onto-hiring-managers-shortlists-over-two-conversations-karen-patiently-listened-to-understand-my-career-needs-she-then-followed-up-by-outlining-the-services-she-could-offer-to-help-improve-my-chance-of-getting-my-noticed-in-this-tough-job-market-and-age-of-ai-screening-tools-i-decided-to-use-the-offline-cv-review-service-the-critique-of-my-cv-was-both-professional-and-honest-karen-provided-me-with-direct-actionable-feedback-to-help-me-reshape-my-cv-and-highlight-how-my-experience-aligns-with-the-roles-i-am-apply-to-as-a-result-i-am-now-sending-out-tailored-cvs-that-give-me-a-much-greater-confidence-in-how-i-am-presenting-my-skills-to-prospective-employers-i-m-looking-forward-to-starting-a-new-role-soon-munro-careers-offers-a-range-of-career-services-not-just-cv-reviews-if-you-are-looking-to-make-a-change-in-your-career-why-not-book-a-free-consultation-conversation-today",
          title: 'Munro Careers is a career coaching service based in Buckinghamshire led by Karen...',
          description: "Review of career coaching services by Munro Careers",
          section: "Reviews",},{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/quinnphil", "_blank");
        },
      },{
        id: 'social-kaggle',
        title: 'Kaggle',
        section: 'Socials',
        handler: () => {
          window.open("https://www.kaggle.com/quinnphil", "_blank");
        },
      },{
        id: 'social-bluesky',
        title: 'Bluesky',
        section: 'Socials',
        handler: () => {
          window.open("https://bsky.app/profile/linearlogic.bsky.social", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/feed.xml", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
