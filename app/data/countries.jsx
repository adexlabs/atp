export const countries = {
    default: {
      language: 'EN',
      country: 'US',
      label: 'United States (USD $)', // Labels to be shown in the country selector
      host: 'hydrogen.shop', // The host and pathPrefix are used for linking
    },
    'en-ca': {
      language: 'EN',
      country: 'CA',
      label: 'Canada (CAD $)',
      host: 'ca.hydrogen.shop',
    },
    'fr-ca': {
      language: 'EN',
      country: 'CA',
      label: 'Canada (Français) (CAD $)',
      host: 'ca.hydrogen.shop',
      pathPrefix: '/fr',
    },
    'en-au': {
      language: 'EN',
      country: 'AU',
      label: 'Australia (AUD $)',
      host: 'hydrogen.au',
    },
  };