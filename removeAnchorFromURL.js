// Complete the function/method so that it returns the url with anything after the anchor (#) removed.

// Examples
// "www.codewars.com#about" --> "www.codewars.com"
// "www.codewars.com?page=1" -->"www.codewars.com?page=1"

// The solution
function removeUrlAnchor(url){
    // Split the URL by '#'
    const parts = url.split('#');
    // Return the first part of the array
    return parts[0];
}