const { Comment } = require('../models');

const commentdata = [
    {
        comment_text: 'Bloody mary glogg the blenheim saketini ectoplasm dom chivas regal.',
        user_id: 1,
        post_id: 2
    },
    {
        comment_text: 'Manhattan irish coffee b & b bombay.',
        user_id: 3,
        post_id: 1
    },
    {
        comment_text: "Slammer royale gordons anisette glenlossie; mannochmore four horsemen cosmopolitan courvoisier, old rip van winkle. French 75 smoky martini b & b linkwood appletini tom and jerry balmenach springbank.",
        user_id: 4,
        post_id: 3
    },
    {
        comment_text: "Glen ord: gin fizz, colorado bulldog early times chartreuse schenleys glenmorangie beefeater strathmill porto flip zurracapote, screwdriver cointreau gimlet kilchoman baileys irish cream.",
        user_id: 2,
        post_id: 1
    },
    {
        comment_text:'Remy martin auchentoshan sake manhattan golden dream sundowner macduff cardhu brandy daisy hiram walker sambuca champagne cocktail, allt-á-bhainne two fingers porto flip.',
        user_id: 3,
        post_id: 4
    },
    {
        comment_text: 'French 75 three wise men glengoyne, bacardi orgasm balvenie strathmill bunnahabhain el presidente, dailuaine house of lords mudslide blue blazer.',
        user_id: 5,
        post_id: 5
    }
];

const seedComments = () => Comment.bulkCreate(commentdata);

module.exports = seedComments;