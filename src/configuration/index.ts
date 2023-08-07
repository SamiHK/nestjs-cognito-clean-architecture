export const DATA_BASE_CONFIGURATION = {
  mongoConnectionString:
    (process.env.MONGO_CONNECTION_STRING as string) ||
    'mongodb://127.0.0.1:27017/hub',
};
