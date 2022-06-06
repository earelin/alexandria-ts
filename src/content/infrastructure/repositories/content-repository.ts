import {Content} from '../../domain/content/content'

const contentStorage = new Map<string, Content>()

export async function saveContent(content: Content): Promise<Content> {
    contentStorage.set(content.id, content)
    return content
}

export async function findContentById(id: string): Promise<Content> {
    return contentStorage.get(id)
}

export async function deleteContentById(id: string) {
    contentStorage.delete(id)
}
