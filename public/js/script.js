document.addEventListener('DOMContentLoaded', function() {
  function getPageFromURL(url) {
    try {
      const urlObject = new URL(url);
      const path = urlObject.hash.replace('#', ''); // Extract path after the hash (#)
      return path;
    } catch (error) {
      console.error('Invalid URL:', error);
      return null;
    }
  }

  // Get the current URL and call the getPageFromURL function
  const url = window.location.href;
  const page = getPageFromURL(url);
 // alert('Page:' +page);
});