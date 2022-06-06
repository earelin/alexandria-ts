import {ContentType} from '../../domain/content/content-type'

const contentTypeStorage = new Map<string, ContentType>()

export async function saveContentType(contentType: ContentType): Promise<ContentType> {
    contentTypeStorage.set(contentType.id, contentType)
    return contentType
}

export async function findContentTypeById(id: string): Promise<ContentType> {
    return contentTypeStorage.get(id)
}

export async function deleteContentTypeById(id: string) {
    contentTypeStorage.delete(id)
}
