require(["esri/views/MapView", "esri/WebMap"], (MapView, WebMap) => {
  /************************************************************
         * Creates a new WebMap instance. A WebMap must reference
         * a PortalItem ID that represents a WebMap saved to
         * arcgis.com or an on-premise portal.
         *
         * To load a WebMap from an on-premise portal, set the portal
         * url with esriConfig.portalUrl.
         ************************************************************/
  const webmap = new WebMap({
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

