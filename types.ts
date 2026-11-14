
// FIX: Added missing import for React to resolve errors with React.SVGProps and JSX.Element types.
import React from 'react';

// FIX: Corrected syntax for LocalizedString interface definition. A space was missing between 'interface' and 'LocalizedString'.
export interface LocalizedString {
  en: string;
  ar: string;
  [key: string]: string;
}

export type Language = 'en' | 'ar';

export interface NavLink {
  id: string;
  label: LocalizedString;
}

export interface CommitteeMember {
  name: LocalizedString;
  role: LocalizedString;
}

export interface Leader {
  id: string;
  name: LocalizedString;
  role: LocalizedString;
  imageUrl: string;
  team?: LocalizedString[];
}

export interface CommitteeAxis {
  label: LocalizedString;
  id?: string;
}

export interface Committee {
  id: string;
  name: LocalizedString;
  axes: CommitteeAxis[];
}

export interface CriterionAction {
  label: LocalizedString;
  url: string;
  type: 'view' | 'download';
}

export interface Criterion {
    text: LocalizedString;
    actions?: CriterionAction[];
}

export interface Axis {
  id: string;
  title: LocalizedString;
  description: LocalizedString;
  // FIX: Changed JSX.Element to React.ReactElement to resolve "Cannot find namespace 'JSX'" error.
  icon: (props: React.SVGProps<SVGSVGElement>) => React.ReactElement;
  criteriaCount: number;
  criteria?: Criterion[];
}

export interface StatData {
  name: string;
  value: number;
  // FIX: Added index signature to make StatData compatible with the recharts Pie component, which expects objects that can be indexed by a string.
  [key: string]: string | number;
}

export interface Resource {
  id: string;
  title: LocalizedString;
  description: LocalizedString;
  type: 'PDF' | 'DOCX' | 'XLSX';
  url?: string;
}

export interface Partner {
  name: LocalizedString;
  logo: string;
  url: string;
  backgroundColor?: string;
}
