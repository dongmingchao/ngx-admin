export const messages = [
    // {
    //   text: 'Hello, how are you? This should be a very long message so that we can test how it fit into the screen.',
    //   reply: false,
    //   date: new Date(),
    //   user: {
    //     name: 'John Doe',
    //     avatar: 'https://i.gifer.com/no.gif',
    //   },
    // },
    // {
    //   text: 'Hello, how are you? This should be a very long message so that we can test how it fit into the screen.',
    //   reply: true,
    //   date: new Date(),
    //   user: {
    //     name: 'John Doe',
    //     avatar: 'https://i.gifer.com/no.gif',
    //   },
    // },
    {
        text: '我是小智，所有知识产权问题我都能替你解答，试着问我',
        reply: false,
        withAvatar: true,
        date: new Date(),
        user: {
            name: 'John Doe',
            avatar: '',
        },
    },
    {
        date: new Date(),
        type: 'btn',
        quote: '什么是专利',
        options: {
            func: 'sendHello',
        },
        user: {
            name: 'John Doe',
            avatar: '',
        },
    },
    {
        date: new Date(),
        type: 'btn',
        quote: '什么是商标',
        options: {
            func: 'sendHello',
        },
        user: {
            name: 'John Doe',
            avatar: '',
        },
    },
    {
        date: new Date(),
        type: 'btn',
        quote: '什么是著作权',
        options: {
            func: 'sendHello',
        },
        user: {
            name: 'John Doe',
            avatar: '',
        },
    },
    {
        date: new Date(),
        type: 'link',
        quote: '通向百度的超链接',
        link: 'https://www.baidu.com/s?wd=什么是专利',
        user: {
            name: 'John Doe',
            avatar: '',
        },
    },
    {
        date: new Date(),
        type: 'btn',
        quote: '把内容放到输入框里',
        options: {
            func: 'setInputValue',
        },
        user: {
            name: 'John Doe',
            avatar: '',
        },
    },
    {
        date: new Date(),
        type: 'file',
        files: [
            {
                url: 'https://i.gifer.com/no.gif',
                type: 'image/jpeg',
                icon: false,
            },
        ],
        user: {
            name: 'John Doe',
            avatar: '',
        },
    },
    // {
    //   text: 'Attached is an archive I mentioned',
    //   reply: true,
    //   date: new Date(),
    //   type: 'file',
    //   files: [
    //     {
    //       url: 'https://i.gifer.com/no.gif',
    //       icon: 'nb-compose',
    //     },
    //   ],
    //   user: {
    //     name: 'John Doe',
    //     avatar: '',
    //   },
    // },
    // {
    //   text: 'Meet me there',
    //   reply: false,
    //   date: new Date(),
    //   type: 'map',
    //   latitude: 40.714728,
    //   longitude: -73.998672,
    //   user: {
    //     name: 'John Doe',
    //     avatar: '',
    //   },
    // },
];
