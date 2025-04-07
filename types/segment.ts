export default interface Segment {
    id: number
    title: string
    description: string
    cover_image: string
    video_file: string
    subtitle_file: string
    audio_file: string
    category: string
    context: string
    source: string
    texts: string[]
    english_texts?: string[]
    audios: string[]
    lang: string
    type: string
    group_identifier: string
    slug: string
    english: string
    created_at: string
}