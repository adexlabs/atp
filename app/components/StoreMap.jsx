export default function StoreMap() {
  return (
    <div style={{ width: '100%', height: '450px', borderRadius: '10px', overflow: 'hidden' }}>
      <iframe
        title="Store Location"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        loading="lazy"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345093744!2d-122.41941518468105!3d37.774929779759834!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c2f9ef3d1%3A0x8f1f3bb0b8b5a11!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1649999999999!5m2!1sen!2sus"
      ></iframe>
    </div>
  );
}
