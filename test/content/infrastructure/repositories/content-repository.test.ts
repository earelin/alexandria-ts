import {
    deleteContentById,
    findContentById,
    saveContent
} from "../../../../src/content/infrastructure/repositories/content-repository";

describe('Content in memory repository', () => {
    const CONTENT_TYPE = {
        id: 'article',
        name: 'Article'
    }

    test('Should return saved repositories', async () => {
        const content = {
            id: '90e8b6c1-0649-4ca0-a150-f877191cf1b6',
            title: 'The Seven Reasons Tourists Love Green',
            contentType: CONTENT_TYPE
        }

        const savedContent = await saveContent(content)

        expect(savedContent)
            .toEqual(content);
    })

    test('Should return saved repositories', async () => {
        const content = {
            id: '5ff2a25e-1f02-4ddd-868d-00d96ce99fde',
            title: 'Seven Things To Avoid In Nodejs',
            contentType: CONTENT_TYPE
        }

        await saveContent(content)
        const savedContent = await findContentById(content.id)

        expect(savedContent)
            .toEqual(content);
    })

    test('Should remove repositories', async () => {
        const content = {
            id: 'a7bf8c4b-48f1-4a97-904e-d7d14b089540',
            title: 'Seven Signs You\'re In Love With Onions',
            contentType: CONTENT_TYPE
        }

        await saveContent(content)
        await deleteContentById(content.id)
        const savedContent = await findContentById(content.id)

        expect(savedContent)
            .toBeUndefined();
    })
})
