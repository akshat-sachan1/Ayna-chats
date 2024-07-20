module.exports = {
    async find(ctx) {
      const users = await strapi.query('user', 'users-permissions').find(ctx.query);
      ctx.send(users);
    },
  };
  