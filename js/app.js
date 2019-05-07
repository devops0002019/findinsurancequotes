document.documentElement.style .setProperty('--primary', '#f4b6c2');
document.documentElement.style .setProperty('--secondary', '#ddd');
document.documentElement.style .setProperty('--tertiary', '#FAFAFA');
document.documentElement.style .setProperty('--quaternary', '#FAFAFA');
document.documentElement.style .setProperty('--border', '#d8d8d8');
document.documentElement.style .setProperty('--page-max-width', '1366px');
document.documentElement.style .setProperty('--navbar-background', '#fff');
document.documentElement.style .setProperty('--navbar-text-color', '#000');
document.documentElement.style .setProperty('--header-background', 'transparent');
document.documentElement.style .setProperty('--header-text-color', 'white');
document.documentElement.style .setProperty('--footer-background', 'white');
document.documentElement.style .setProperty('--footer-text-color', 'black');
document.documentElement.style .setProperty('--h1-color', 'black');
document.documentElement.style .setProperty('--h2-color', '#000');
document.documentElement.style .setProperty('--h3-color', '#262626');
document.documentElement.style .setProperty('--seo-page-title-color', '#fff');


const navbar_data = [
  {
      brand:    "Find Insurance Quotes",
  }
];
function navbar_template(navbar) {
  return `
      <a class="button" href="https://mystifying-hodgkin-910950.netlify.com/">Get a Quote</a>
      <h3>${navbar.brand}</h3>
`;
}

document.getElementById("navbar-empty").innerHTML = `${navbar_data.map(navbar_template).join('')}`;


const footer_data = [
   {
       brand:    "find-insurancequotes.com",
   }
]; 
function footer_template(foot) {
    return `
    <div class="grid set-cols-1">
        <div class="column start-vertical-between">
            <p>Copyright 2019. Find Insurance Quotes. All Rights Reserved.</p>
            <p<b>Disclaimer:</b>Find Insurance Quotes strives to keep its information accurate and up to date. This information may be different than what you see when you visit a financial institution, service provider or specific product’s site. All financial products, shopping products and services are presented without warranty. When evaluating offers, please review the financial institution’s Terms and Conditions. Pre-qualified offers are not binding. If you find discrepancies with your credit score or information from your credit report, please contact TransUnion® directly.</p>
        </div>
    </div>
  `;
}
document.getElementById("footer").innerHTML = `${footer_data.map(footer_template).join('')}`;
document.getElementById("year").innerHTML = new Date().getFullYear();
