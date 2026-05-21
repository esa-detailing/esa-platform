export const validateEnv = () => {
  const required = ['PORT']

  required.forEach((key) => {
    if (!process.env[key]) {
      console.error(`Missing environment variable: ${key}`)
      process.exit(1)
    }
  })
}
