"use client";

import { useEffect, useRef } from "react";
import maplibregl from "maplibre-gl";

// Target location — NYC
const TARGET = {
  lat: 40.7128,
	lng: -74.0060,
  zoom: 12,
};

// US view center (approximate center of continental US)
const US_CENTER = {
  lng: -95.7129,
  lat: 37.0902,
  zoom: 3.5,
};

export default function MapIntro() {
  const mapContainerRef = useRef<HTMLDivElement | null>(null);
  const mapRef = useRef<maplibregl.Map | null>(null);
  const markerRef = useRef<maplibregl.Marker | null>(null);

  useEffect(() => {
    if (!mapContainerRef.current) return;

    const map = new maplibregl.Map({
      container: mapContainerRef.current,
      style:
        "https://basemaps.cartocdn.com/gl/dark-matter-gl-style/style.json",
      center: [US_CENTER.lng, US_CENTER.lat], // Start with US view
      zoom: US_CENTER.zoom,
      pitch: 0,
      bearing: 0,
      attributionControl: false,
      interactive: false,
      scrollZoom: false,
      boxZoom: false,
      dragRotate: false,
      dragPan: false,
      keyboard: false,
      doubleClickZoom: false,
      touchZoomRotate: false,
    });

    mapRef.current = map;

    map.on("load", () => {
      // Small delay to ensure marker is rendered before animation
      setTimeout(() => {
        // Animate camera from US view → Target location (completely flat)
        map.flyTo({
          center: [TARGET.lng, TARGET.lat],
          zoom: TARGET.zoom,
          speed: .9,
          curve: 1.0,
          pitch: 0,
          bearing: 0,
          essential: true,
        });
      }, 100);
    });
  }, []);

  return (
    <div ref={mapContainerRef} className="w-full h-full" />
  );
}
