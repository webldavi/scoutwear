// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  shadcn: {
    /**
     * Prefix for all the imported component
     */
    prefix: '',
    /**
     * Directory that the component lives in.
     * @default "./components/ui"
     */
    componentDir: './components/ui'

  },

  fontawesome: {
    icons: {
      solid: ['cart-shopping', 'location-dot', 'bars'],
      regular: ['heart'],
      brands: ['whatsapp']

    }
  },

  veeValidate: {
    // disable or enable auto imports
    autoImports: true,
    // Use different names for components
    componentNames: {
      Form: 'VeeForm',
      Field: 'VeeField',
      FieldArray: 'VeeFieldArray',
      ErrorMessage: 'VeeErrorMessage',
    },
  },

  modules: ["@nuxtjs/tailwindcss", "shadcn-nuxt", '@vesp/nuxt-fontawesome', '@vee-validate/nuxt'],
  compatibilityDate: "2024-07-15"
})