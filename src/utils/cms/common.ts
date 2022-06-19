
export const getPageMarkDown = async (page: string): Promise<string> => {
    const markdown = await import(`../../../cms/pages/${page}.md`);
    return Promise.resolve(markdown.attributes.data)
};

