import { atom } from 'recoil';
import { ApiTypes } from '../api/types';
import { Coordinate } from '../gridGL/types/size';
import { CellType } from '../schemas';

export interface EditorInteractionState {
  showCellTypeMenu: boolean;
  showCodeEditor: boolean;
  showCommandPalette: boolean;
  showGoToMenu: boolean;
  showFeedbackMenu: boolean;
  showShareFileMenu: boolean;
  permission: ApiTypes['/v0/files/:uuid.GET.response']['permission'];
  selectedCell: Coordinate;
  selectedCellSheet: string;
  mode: CellType;
  editorEscapePressed?: boolean;
  waitingForEditorClose?: {
    selectedCell: Coordinate;
    selectedCellSheet: string;
    mode: CellType;
    showCellTypeMenu: boolean;
  };
}

export const editorInteractionStateDefault: EditorInteractionState = {
  showCellTypeMenu: false,
  showCodeEditor: false,
  showCommandPalette: false,
  showGoToMenu: false,
  showFeedbackMenu: false,
  showShareFileMenu: false,
  permission: 'VIEWER', // FYI: when we call <RecoilRoot> we initialize this with the value from the server
  selectedCell: { x: 0, y: 0 },
  selectedCellSheet: '',
  mode: 'TEXT',
};

export const editorInteractionStateAtom = atom({
  key: 'editorInteractionState', // unique ID (with respect to other atoms/selectors)
  default: editorInteractionStateDefault,
});
