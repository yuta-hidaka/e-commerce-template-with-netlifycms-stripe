import { ProductType } from '../../types';

export const getProducts = async (): Promise<ProductType[]> => {
    const markdownFiles = require
        .context('../../../cms/products', false, /\.md$/)
        .keys()
        .map((relativePath: string) => relativePath.substring(2));

    return Promise.all(
        markdownFiles.map(async (path: string) => {
            const markdown = await import(`../../../cms/products/${path}`);
            return { ...markdown, slug: path.substring(0, path.length - 3) };
        })
    );
};

export const getProduct = async (slug: string): Promise<ProductType> => {
    const markdown = await import(`../../../cms/products/${slug}.md`);
    return Promise.resolve({ ...markdown, slug: slug.substring(0, slug.length - 3) } as ProductType)
}
