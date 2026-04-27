import { VOCABULARY } from '@/../vocabulary_with_examples.js'

export interface VocabWord {
  word: string
  phonetic: string
  pos: string
  meaning: string
  example: string
  exampleTranslation?: string
}

export const WORDS: VocabWord[] = VOCABULARY
