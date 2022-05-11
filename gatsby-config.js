module.exports = {
  siteMetadata: {
    // Site URL for when it goes live
    siteUrl: `https://karangohil.netlify.app/`,
    // Your Name
    name: 'Karan Dilipsinh Gohil',
    // Main Site Title
    title: `Karan Dilipsinh Gohil | Portfolio`,
    // Description that goes under your name in main bio
    description: `Software Developer`,
    // Optional: Twitter account handle
    author: `resume`,
    // Optional: Github account URL
    github: `https://github.com/KaranGohil`,
    // Optional: LinkedIn account URL
    linkedin: `https://www.linkedin.com/in/karandilipsinhgohil/`,
    // Content of the About Me section
    about: `I'm a computer science major from the University of British Columbia - Okanagan. I'm also passionate about making bots to automate tasks, data analysis and data representation. Recently, I have been learning React and React Native. My current goal is to learn how to make mobile applications using React Native.`,
    // Optional: List your projects, they must have `name` and `description`. `link` is optional.
    projects: [
      {
        name: 'FocusTime (In progress)',
        description:
          'React-Native App which allows you to set timer to focus on a activity.',
        link: 'https://snack.expo.dev/@karangohil/focustime',
      },
      {
        name: 'JobScraper-Indeed',
        description:
          'An Python application used to scraper job title and description from Indeed. Includes a report containing data analysis on hard skills.',
        link: 'https://github.com/KaranGohil/JobScraper-Indeed',
      },
      {
        name: 'IMDBot - Movie Chat Bot',
        description:
          'An Python application which gets information about movies, actors, directors and many more from IMDB.',
        link: 'https://github.com/KaranGohil/IMDBot-Movie-Chat-Bot',
      },
      {
        name: 'Video Game Sales Analysis',
        description:
          'Preformed data analysis on video game sales data using Python libraries. Created data visualization in Python and Tableau.',
        link: 'https://github.com/KaranGohil/IMDBot-Movie-Chat-Bot',
      },
    ],
    // Optional: List your experience, they must have `name` and `description`. `link` is optional.
    experience: [
      {
        name: 'Code Ninjas Kelowna (Co-op)',
        description: 'Senior Coding Instructor | Januray 2022 - August 2022',
        link: '',
      },
      {
        name: 'Campus Wellness and Education - UBCO',
        description:
          'Undergraduate Academic Assistant | September 2021 - December 2021',
        link: '',
      },
      {
        name: 'PathVisor',
        description:
          'Co-Founder and Marketing Assistant | June 2020 - July 2021',
        link: '',
      },
    ],
    // Optional: List your skills, they must have `name` and `description`.
    skills: [
      {
        name: 'Languages',
        description: 'JavaScript (ES6+), Python, Java, HTML/CSS, SQL',
      },
      {
        name: 'Frameworks',
        description:
          'React, React Native, Sequelize, Pandas, Numpy, Matplotlib, Seaborn, unittest',
      },
      {
        name: 'Developer Tools',
        description:
          'GitHub, VS Code, Postman, Jupyter lab, Replit, Tableau, Microsoft Office, Latex',
      },
    ],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
              wrapperStyle: `margin: 0 0 30px;`,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `ADD YOUR TRACKING ID HERE`, // Optional Google Analytics
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `devfolio`,
        short_name: `devfolio`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`, // This color appears on mobile
        display: `minimal-ui`,
        icon: `src/images/icon.png`,
      },
    },
  ],
};
