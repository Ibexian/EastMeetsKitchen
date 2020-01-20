const config = {
  siteTitle: "East Meets Kitchen", // Site title.
  siteTitleShort: "EMK", // Short site title for homescreen (PWA). Preferably should be under 12 characters to prevent truncation.
  siteTitleAlt: "East Meets Kitchen - Vegan Asian Recipes", // Alternative site title for SEO.
  siteLogo: "/logos/logo-192.png", // Logo used for SEO and manifest.
  siteUrl: "https://eastmeetskitchen.com", // Domain of your website without pathPrefix.
  bookImage: "/bookcover.png",
  bookLink: "https://www.blurb.co.uk/b/9914523-vegan-dim-sum",
  pathPrefix: "/", // Prefixes all links. For cases when deployed to example.github.io/gatsby-advanced-starter/.
  siteDescription:
    "East Meets Kitchen's goal is to veganize the things from my travels and make the most authentic and yummy vegan food.", // Website description used for RSS feeds/meta description tag.
  siteRss: "/feed.xml", // Path to the RSS file.
  googleAnalyticsID: "UA-49664009-1", // GA tracking ID.
  postDefaultCategoryID: "Recipe", // Default category for posts.
  dateFromFormat: "YYYY-MM-DD", // Date format used in the frontmatter.
  dateFormat: "DD/MM/YYYY", // Date format for display.
  userName: "Christina Ng", // Username to display in the author segment.
  userTwitter: "EastMeetsKitchn", // Optionally renders "Follow Me" in the UserInfo segment.
  postsPerPage: 50,
  // Links to social profiles/projects you want to display in the author segment/navigation bar.
  userLinks: [
    {
      label: "Instagram",
      url: "https://instagram.com/eastmeetskitchn/",
      iconClassName: "icon-instagram",
      color: "3F51B5",
      img: "instagram.jpg"
    },
    {
      label: "Twitter",
      url: "https://twitter.com/EastMeetsKitchn",
      iconClassName: "icon-twitter",
      color: "03A9F4",
      img: "twitter.jpg"
    },
    {
      label: "Pinterest",
      url: "https://www.pinterest.com/eastmeetskitche/",
      iconClassName: "icon-pinterest",
      color: "c62828",
      img: "pinterest.jpg"
    },
    {
      label: "Youtube",
      url: "https://www.youtube.com/user/Gurshee",
      iconClassName: "icon-youtube",
      color: "f44336",
      img: "youtube.jpg"
    },
    {
      label: "RSS",
      url: "/feed.xml",
      iconClassName: "icon-rss",
      color: "FF5722",
      img: "rss.jpg"
    }
  ],
  copyright: "Copyright © 2020 - Christina Ng", // Copyright string for the footer of the website and RSS feed.
  themeColor: "#455350", // Used for setting manifest and progress theme colors.
  backgroundColor: "#e0e0e0", // Used for setting manifest background color.
  recipeTags: [
    {
      name: "Meats",
      tag: "meats"
    },
    {
      name: "Meatless",
      tag: "nomeats"
    },
    {
      name: "Rice and Noodles",
      tag: "riceandnoodles"
    },
    {
      name: "Soups",
      tag: "soups"
    },
    {
      name: "Sweets",
      tag: "sweets"
    },
    {
      name: "Sauces",
      tag: "sauces"
    },
    {
      name: "Healthy",
      tag: "healthy"
    }
  ],
  displayCategories: [
    {
      name: "Recipes",
      category: "recipes",
      subLinks: true
    },
    {
      name: "Adventures + Blog",
      category: "blog"
    },
    {
      name: "Video",
      category: "",
      url: "https://www.youtube.com/user/Gurshee"
    },
    {
      name: "Tips",
      category: "tips"
    },
    {
      name: "About",
      category: "",
      url: "/about"
    },
    {
      name: "",
      category: "",
      url: "/search",
      className: "icon-search"
    }
  ]
};

// Validate

// Make sure pathPrefix is empty if not needed
if (config.pathPrefix === "/") {
  config.pathPrefix = "";
} else {
  // Make sure pathPrefix only contains the first forward slash
  config.pathPrefix = `/${config.pathPrefix.replace(/^\/|\/$/g, "")}`;
}

// Make sure siteUrl doesn't have an ending forward slash
if (config.siteUrl.substr(-1) === "/")
  config.siteUrl = config.siteUrl.slice(0, -1);

// Make sure siteRss has a starting forward slash
if (config.siteRss && config.siteRss[0] !== "/")
  config.siteRss = `/${config.siteRss}`;

module.exports = config;
