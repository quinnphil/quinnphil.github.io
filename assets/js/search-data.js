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
        },{id: "nav-repositories",
          title: "repositories",
          description: "Summary of my Github profile -- and some public-facing repos.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/repositories/";
          },
        },{id: "nav-tutorials",
          title: "tutorials",
          description: "Tutorials and how-to documents",
          section: "Navigation",
          handler: () => {
            window.location.href = "/tutorials/";
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
            },},{
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
