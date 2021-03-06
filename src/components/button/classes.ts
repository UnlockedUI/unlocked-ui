export default {
  button: {
    small: 'px-3 py-2 rounded-md text-sm font-medium inline-flex items-center', // TODO: Find better way than flex
    medium: 'px-4 py-2 rounded-lg inline-flex items-center', // abstract padding to a size object
    large: 'px-6 py-4 rounded-lg inline-flex items-center', // abstract padding to a size object
    disabled: 'opacity-30 cursor-not-allowed pointer-events-none',
    variants: {
      default: 'text-textContrast bg-primary border border-primary hover:bg-transparent hover:text-text',
      secondary: 'border-solid border border-primary bg-transparent text-primary hover:text-textContrast hover:bg-primary',
      alternate: 'border-solid border border-layoutHeavyContrast bg-transparent text-layoutHeavyContrast hover:text-text hover:border-primary',
      text: 'text-text hover:bg-layoutHover hover:text-textContrast',
      warning: 'text-textContrast bg-warning border border-warning',
      error: 'text-textContrast bg-error border border-error',
    },
    buttonGroup: {
      base: 'bg-layoutBorder border border-layoutBorder text-text hover:bg-layoutHeavyContrast hover:border-layoutHeavyContrast hover:text-textContrast',
      active: 'bg-primary border border-primary text-textContrast',
      order: {
        first: 'rounded-l-lg rounded-r-none',
        middle: 'rounded-none',
        last: 'rounded-r-lg rounded-l-none',
      },
    },
  },
}
