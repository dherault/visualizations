export type Visualization = {
  backgroundColor: string;
  backgroundSplitColor?: string;
}

export type VisualizationState = {
  backgroundSplitTopAndBottom: [number, number];
  backgroundSplitSeparatorColor: string | null;
}

export type XY = {
  x: number;
  y: number;
}
