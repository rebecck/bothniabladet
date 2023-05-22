export interface Image {
    id: number
    imgName: string
    filePath?: string
    description: string
    createdDateTime?: string
    longitude?: number
    latitude?: number
    isExtern?: boolean
    publicationLimit?: number
    timesPublicated?: number
    width?: number
    height?: number
    fileSizeKB?: number
    resolution?: number
    camera?: string
}

export interface ImageParams {
    searchTerm?: string;
}