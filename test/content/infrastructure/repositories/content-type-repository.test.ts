import {
    deleteContentTypeById,
    findContentTypeById,
    saveContentType
} from "../../../../src/content/infrastructure/repositories/content-type-repository";

describe('Content type in memory repository', () => {
    test('Should return saved repositories type', async () => {
        const contentType = {
            id: 'article',
            name: 'Article'
        }

        const savedContentType = await saveContentType(contentType)

        expect(savedContentType)
            .toEqual(contentType);
    })

    test('Should return saved repositories type by id', async () => {
        const contentType = {
            id: 'page',
            name: 'Seven Things To Avoid In Nodejs',
        }

        await saveContentType(contentType)
        const savedContentType = await findContentTypeById(contentType.id)

        expect(savedContentType)
            .toEqual(contentType);
    })

    test('Should remove repositories', async () => {
        const contentType = {
            id: 'news',
            name: 'News'
        }

        await saveContentType(contentType)
        await deleteContentTypeById(contentType.id)
        const savedContentType = await findContentTypeById(contentType.id)

        expect(savedContentType)
            .toBeUndefined();
    })
})
