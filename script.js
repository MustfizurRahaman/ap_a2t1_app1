require(["esri/views/MapView", "esri/WebMap"], (MapView, WebMap) => {
    portalItem: {
      // autocasts as new PortalItem()
      id: "4d595b39dfcd4b53bb87f3a07ad03e8b"
    }
  });
  const view = new MapView({
    map: webmap,
    container: "viewDiv"
  });
});
