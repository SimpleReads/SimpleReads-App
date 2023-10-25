// types.ts
import { ObjectId } from 'mongodb';

export interface Section {
  name: string;
  text: string;
}

export interface ResearchPaper {
  _id: ObjectId;
  title?: string;
  authors?: string[];
  sections: Section[];
  keywords?: string[];
  published_at?: Date;
}
