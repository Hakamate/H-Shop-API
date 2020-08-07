// Update with your config settings.

module.exports = {

  development: {
    client: "postgresql",
    connection: {
      database: "eCommerceDb",
      user: "postgres",
      password: "root"
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: "knex_migrations"
    }
  },

  staging: {
    client: "postgresql",
    connection: {
      database: "eCommerceDb",
      user: "postgres",
      password: "root"
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: "knex_migrations"
    }
  },

  production: {
    client: "postgresql",
    connection: {
      database: "eCommerceDb",
      user: "postgres",
      password: "root"
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: "knex_migrations"
    }
  }

};
