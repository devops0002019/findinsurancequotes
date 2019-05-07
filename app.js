document.documentElement.style .setProperty('--primary', '#5B2971');
document.documentElement.style .setProperty('--secondary', '#ddd');
document.documentElement.style .setProperty('--tertiary', '#FAFAFA');
document.documentElement.style .setProperty('--quaternary', '#FAFAFA');
document.documentElement.style .setProperty('--border', '#d8d8d8');
document.documentElement.style .setProperty('--page-max-width', '1366px');
document.documentElement.style .setProperty('--navbar-background', 'transparent');
document.documentElement.style .setProperty('--navbar-text-color', 'white');
document.documentElement.style .setProperty('--header-background', '#5B2971');
document.documentElement.style .setProperty('--header-text-color', 'white');
document.documentElement.style .setProperty('--footer-background', 'white');
document.documentElement.style .setProperty('--footer-text-color', 'black');
document.documentElement.style .setProperty('--h1-color', 'black');
document.documentElement.style .setProperty('--h2-color', '#000');
document.documentElement.style .setProperty('--h3-color', '#262626');
document.documentElement.style .setProperty('--seo-page-title-color', '#fff');

const footer_data = [
   {
       brand:    "find-insurancequotes.com",
   }
]; 
function footer_template(foot) {
    return `
    <div class="footer">
     <div class="grid set-cols-1">
       <div class="column">
        <h2 class="copyright"> Copyright ${foot.brand} <span id="year"></span>. All rights reserved </h2>
       </div>
     </div>
    </div>
  `;
}
document.getElementById("footer").innerHTML = `${footer_data.map(footer_template).join('')}`;
document.getElementById("year").innerHTML = new Date().getFullYear();
