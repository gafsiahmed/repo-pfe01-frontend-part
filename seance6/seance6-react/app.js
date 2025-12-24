let entryPoint = document.querySelector("#root");

const navbar = React.createElement(
  "nav",
  {
    className: "navbar",
  },
  React.createElement("h2", null, "LOGO"),
  React.createElement(
    "a",
    {
      href: "https://www.google.com",
    },
    "About us"
  ),
  React.createElement(
    "a",
    {
      href: "https://www.google.com",
    },
    "Contact us"
  )
);

const paragraphe = React.createElement("p", null, "The content of the website");

const footer = React.createElement(
  "footer",
  null,
  "Created with love by @opuslab - 2025"
);

const app = React.createElement("div", null, navbar, paragraphe, footer);

const root = ReactDOM.createRoot(entryPoint);

root.render(app);
