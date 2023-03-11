class CustomAPIError extends Error {
  constructor(message) {
    super(message)
    this
  }
} 

module.exports = CustomAPIError;