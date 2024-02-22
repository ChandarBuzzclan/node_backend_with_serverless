const CONSTANTS = {
  API_BASE_URL: 'https://example.com/api',
  MAX_RETRY_ATTEMPTS: 3,
  DEFAULT_TIMEOUT: 5000, // in milliseconds
  ERROR_MESSAGES: {
    INVALID_INPUT: 'Invalid input provided.',
    SERVER_ERROR: 'Internal server error.',
    TIMEOUT_ERROR: 'Request timed out.',
    RATE_LIMIT_EXCEEDED: 'Rate limit exceeded.',
  },
};

module.exports = CONSTANTS;
