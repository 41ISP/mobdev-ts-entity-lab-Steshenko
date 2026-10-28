export interface IStrapiResponse<T> {
  data: T
  meta?: Meta
}

export interface  IToilet{
  id: number
  documentId: string
  createdAt: string
  updatedAt: string
  publishedAt: string
  Name: string
  Price: number
  DateCreate: "2020-06-08"
  Description?: string 
  Material: ToiletMaterial
  Category: ToiletCategory
  Rating?: number
  Media?: IMedia
}

export type TToiletInput = Omit<IToilet, 'id' | 'documentId' | 'Media' | 'createdAt' | 'updatedAt' | 'publishedAt'>

export const MATERIALS = ["ceramic", "porcelain", "plastic"] as const
export type ToiletMaterial = (typeof MATERIALS) [number]

export const MATERIAL_LABELS: Record<ToiletMaterial, string> = {
    ceramic: "Керамика",
    porcelain: "Фарфор",
    plastic: "Пластик"
}

export const CATEGORIES = ["floor", "wall", "smart"] as const
export type ToiletCategory = (typeof CATEGORIES)[number]

export const CATEGORY_LABELS: Record<ToiletCategory, string> = {
    floor: "Наполный",
    wall: "Подвесной",
    smart: "Компактный",
}

export interface IMedia {
  id: number
  documentId: string
  name: string
  alternativeText: any
  caption: any
  focalPoint: any
  width: number
  height: number
  formats: Formats
  hash: string
  ext: string
  mime: string
  size: number
  url: string
  previewUrl: any
  provider: string
  provider_metadata: any
  createdAt: string
  updatedAt: string
  publishedAt: string
}

export interface Formats {
  large: IMediaFormat
  small: IMediaFormat
  medium: IMediaFormat
  thumbnail: IMediaFormat
}

export interface IMediaFormat {
  ext: string
  url: string
  hash: string
  mime: string
  name: string
  path: any
  size: number
  width: number
  height: number
  sizeInBytes: number
}

export interface Meta {
  pagination: Pagination
}

export interface Pagination {
  page: number
  pageSize: number
  pageCount: number
  total: number
}
