
export const getPageMarkDown = async (page: string): Promise<string> => {
    console.log("@@@@@@@@@@@@@@@@@@page")
    console.log(page)
    const markdownFile = require
        .context('../../../cms/' + page, false, /\.md$/)
        .keys()[0];

    console.log(markdownFile);
    const markdown = await import(`../../../cms/${page}/${markdownFile}`);
    console.log(markdown);

    return Promise.resolve(markdown.attributes.data)
};

