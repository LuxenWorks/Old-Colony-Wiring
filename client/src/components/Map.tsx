// Portable Google Maps embed component — no Manus proxy required.
// Uses a standard Google Maps embed iframe which works on any host.
// To customize: replace the `src` URL with your own Google Maps Embed API URL.
// Get a free embed URL: https://developers.google.com/maps/documentation/embed/get-started

interface MapEmbedProps {
  className?: string;
}

export function MapEmbed({ className = "" }: MapEmbedProps) {
  return (
    <iframe
      title="Old Colony Wiring — 26 Wiggins Ave, Bedford, MA"
      className={className}
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2944.4!2d-71.2762!3d42.4937!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e39f3b1b1b1b1b%3A0x0!2zNDLCsDI5JzM3LjMiTiA3McKwMTYnMzQuMyJX!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus"
      width="100%"
      height="100%"
      style={{ border: 0 }}
      allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    />
  );
}

export default MapEmbed;
