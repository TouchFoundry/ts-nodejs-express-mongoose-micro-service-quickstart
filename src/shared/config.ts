export const Config = {
    serviceSettings: {
        logsDir: "logs/"
    },
    //TODO: change me
    apiSettings: {
        port: 4950,
        corsWhitelist: [
            'http://localhost'
        ],
        baseApiUri: "/api/v1",
    },
    dbSettings: {
        //use env variable or use pre-defined
        connectionString: process.env.MONGO_DB_HOST || 'mongodb://localhost:27017',
        database: 'exampleDB',
        replicaSet: 'rs0'
    }
};