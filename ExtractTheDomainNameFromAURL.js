// Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

// * url = "http://github.com/carbonfive/raygun" -> domain name = "github"
// * url = "http://www.zombie-bites.com"         -> domain name = "zombie-bites"
// * url = "https://www.cnet.com"                -> domain name = cnet"

// The solution
function domainName(url){
    // Remove the protocol (http:// or https://) if present
    url = url.replace(/(https?:\/\/)?(www\.)?/, '');
  
    // Split the URL by the first slash to isolate the domain
    var parts = url.split('/');
    
    // The domain is the first part
    var domain = parts[0];
    
    // Further split the domain by dots to remove subdomains
    var domainParts = domain.split('.');
    
    // The main domain is the first part after www
    if (domainParts[0] === 'www') {
      return domainParts[1];
    } else {
      return domainParts[0];
    }
  }