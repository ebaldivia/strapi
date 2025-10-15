/**
 * article-vote controller
 */

import { factories } from '@strapi/strapi'

export default factories.createCoreController('api::article-vote.article-vote', ({ strapi }) => ({
    async create(ctx) {
        const { article, reference_id, type, reference_type } = ctx.request.body.data;

        const existingVote = await strapi.db.query('api::article-vote.article-vote').findOne({
            where: { article, reference_id },
        });

        if (existingVote) {
            return await strapi.db.query('api::article-vote.article-vote').update({
                where: { id: existingVote.id },
                data: { type, reference_type },
            });
        }

        return await strapi.db.query('api::article-vote.article-vote').create({
            data: { article, reference_id, type, reference_type },
        });
    },
}));
