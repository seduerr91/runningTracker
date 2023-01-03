import { defaultDarkModeOverride } from '@aws-amplify/ui-react';

export default {
  name: 'terminal',
  tokens: {
    colors: {
      blue: {
        10: { value:'#E4EBF1'},
        20: { value:'#D6E2EA'},
        30: { value:'#C9D7E3'},
        40: { value:'#AEC3D5'},
        50: { value:'#5B85AA'},
        60: { value:'#4C7394'},
        70: { value:'#3E5E79'},
        80: { value:'#31495E'},
        90: { value:'#233443'},
        100: { value:'#151F28'},
      },
      palette: {
        'honeydew': { value: '#DFF8EB'},
        'oxfordblue': { value: '#011638'},
        'charcoal': { value: '#364156'},
        'lightgrey': { value: '#cdcdcd'},
        'brunswickgreen': { value: '#214E34'},
      },
      brand: {
        primary: {
          10: { value: '{colors.blue.10}' },
          20: { value: '{colors.blue.20}' },
          40: { value: '{colors.blue.40}' },
          60: { value: '{colors.blue.60}' },
          80: { value: '{colors.blue.80}' },
          90: { value: '{colors.blue.90}' },
          100: { value: '{colors.blue.100}' },
        },
        secondary: {
          10: { value: '{colors.blue.10}' },
          20: { value: '{colors.blue.20}' },
          40: { value: '{colors.blue.40}' },
          60: { value: '{colors.blue.60}' },
          80: { value: '{colors.blue.80}' },
          90: { value: '{colors.blue.90}' },
          100: { value: '{colors.blue.100}' },
        },
      },
      border: {
        primary: { value: 'black' },
      },
    },
    shadows: {
      small: {
        value: {
          offsetX: '0px',
          offsetY: '2px',
          blurRadius: '4px',
          color: '{colors.shadow.tertiary.value}',
        },
      },
      medium: {
        value: {
          offsetX: '10px',
          offsetY: '10px',
          spreadRadius: '0px',
          blurRadius: '0',
          color: '{colors.shadow.secondary.value}',
        },
      },
      large: {
        value: {
          offsetX: '8px',
          offsetY: '30px',
          spreadRadius: '10px',
          blurRadius: '0',
          color: '{colors.shadow.primary.value}',
        },
      },
    },
    components: {
      card: {
        boxShadow: { value: '{shadows.medium.value}' },
      },
      radio: {
        button: {
          padding: { value: '{borderWidths.small}' },
          borderWidth: { value: '{borderWidths.small}' },
        },
      },
      heading: {
        1: { fontWeight: { value: '{fontWeights.value}' } },
        2: { fontWeight: { value: '{fontWeights.value}' } },
        3: { fontWeight: { value: '{fontWeights.value}' } },
        4: { fontWeight: { value: '{fontWeights.value}' } },
        5: { fontWeight: { value: '{fontWeights.value}' } },
        6: { fontWeight: { value: '{fontWeights.value}' } },
      },
      button: {
        primary: {
          backgroundColor: { value: '{colors.brand.primary.40.value}' },
          color: { value: '{colors.font.primary.value}' },
          borderColor: { value: '{colors.border.primary.value}' },
        },
      },
    },
    radii: {
      small: { value: '0' },
      medium: { value: '0' },
      large: { value: '0' },
    },
    space: {
      small: { value: '1rem' },
      medium: { value: '1.5rem' },
      large: { value: '2rem' },
    },
    borderWidths: {
      small: { value: '2px' },
      medium: { value: '4px' },
      large: { value: '8px' },
    },
  },
  overrides: [defaultDarkModeOverride],
};
