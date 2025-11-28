export interface EmotionLabeling {
  emotion: string;
}

export interface NegativeEvent {
  description: string;
  when: Date;
  where: string;
  withWhom: string;
  userAction: string;
}

export interface AutomaticThought {
  negativeThoughts: string[];
}

export interface PhysicalReaction {
  reactions: string[];
}

export interface DesiredState {
  idealState: string;
  desiredTreatment: string;
  desiredFeeling: string;
}

// Cognitive Behavioral Therapy
export interface CBTEntry {
  emotionLabeling: EmotionLabeling;
  negativeEvent: NegativeEvent;
  automaticThought: AutomaticThought;
  physicalReaction: PhysicalReaction;
  desiredState: DesiredState;
}

export interface NegativeNotesFormData {
  emotion: string;
  description: string;
  when: Date | undefined;
  where: string;
  withWhom: string;
  userAction: string;
  negativeThoughts: {
    id: number;
    name: string;
  }[];
  reactions: {
    id: number;
    name: string;
  }[];
  idealState: string;
  desiredTreatment: string;
  desiredFeeling: string;
}
