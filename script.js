require(["esri/views/MapView", "esri/WebMap"], (MapView, WebMap) => {
  
  const webmap = new WebMap({
    portalItem: {
      id: "4d595b39dfcd4b53bb87f3a07ad03e8b" // Use the id of your WebMap
    }
  });

  // Create the view, using the correctly instantiated webmap
  const view = new MapView({
    container: "viewDiv", // Specify the container ID
    map: webmap // Use the webmap instance
  });
});

