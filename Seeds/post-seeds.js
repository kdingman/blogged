const { Post } = require('../models');

const postdata = [
    {
        title: 'I Figured This Out!',
        content: "Sizzle ullamcorper. Aliquam sagittizzle a dang. Vestibulizzle ante ipsizzle brizzle izzle boom shackalack fo shizzle sizzle et owned posuere away Curae; Aenizzle vestibulizzle. Doggy habitant we gonna chung gizzle pizzle izzle dope et malesuada famizzle brizzle i saw beyonces tizzles and my pizzle went crizzle dope. Gangster tempor hendrerit velit. Aliquizzle things volutpizzle.",
        user_id: 2
    },
    {
        title: 'You have to check this place out',
        content: "Own yo' auctor pharetra dui. Crackalackin luctizzle feugizzle neque. Doggy erizzle brizzle. In crazy amet nisl. Own yo' sizzle felizzle at nunc. Daahng dawg a bow wow wow. Quisque lorem justo, hizzle dapibizzle, fo shizzle my nizzle ut, molestie nec, mi. Nulla uhuh ... yih! yo mamma in sapien egestizzle consequizzle.",
        user_id: 5
    },
    {
        title: 'Can someone help with this?',
        content: "Quisque check it out amizzle check out this eu yo volutpizzle dawg. Suspendisse we gonna chung. Sizzle at sem phat purizzle tincidunt aliquam.",
        user_id: 3
    },
    {
        title: 'I created this!',
        content: "Fo shizzle in nizzle. Own yo' eleifend rhoncizzle nisi. We gonna chung shut the shizzle up fo shizzle platea dictumst. Break it down dapibizzle. Curabitizzle sheezy shizzlin dizzle, pretizzle shut the shizzle up, mattizzle ac, eleifend izzle, check out this. Pizzle suscipizzle. Integizzle sempizzle velizzle sizzle black.",
        user_id: 4
    },
    {
        title: 'Samples!',
        content: "Fo shizzle ante ipsizzle primis izzle pot orci dang et ultrices fo shizzle cubilia Curae; Donizzle shizzle my nizzle crocodizzle. Integer fo shizzle. Maecenas pharetra blandit shut the shizzle up.",
        user_id: 1
    },
    {
        title: 'OMG!',
        content: "Black tellizzle neque, sure izzle, ornare bling bling, vulputate fo shizzle, leo. Dizzle purizzle funky fresh, bibendizzle sizzle amizzle, yippiyo vehicula, izzle malesuada, arcu. Aenizzle phat ipsizzle fo shizzle est da bomb tincidunt. Donec quizzle. Boofron ligula urna, tempizzle izzle, scelerisque mofo, sodales nec, felis. Etizzle gravida.",
        user_id: 3
    },
    {
        title: 'You cannot make this stuff up',
        content: "Sizzle at sem phat purizzle tincidunt aliquam. Sed gravida tempor ante. In own yo' erizzle izzle hizzle. Quisque malesuada. Nam we gonna chung tellizzle get down get down gangster fizzle viverra. Brizzle facilisi. Go to hizzle quizzle fo go to hizzle the bizzle molestie pulvinar. Nullizzle sagittis dui boom shackalack velit. Black sempizzle metizzle sed cool. Etizzle owned purus dizzle dui. Da bomb rutrum crackalackin purus.",
        user_id: 5
    }
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;