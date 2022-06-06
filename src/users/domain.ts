export type User = {
    id: string
    email: string
    name: string
    groups: Group[]
}

export type Group = {
    id: string
    name: string
    permissions: Permission[]
}

export type Permission = {
    key: string
    description: string
}
