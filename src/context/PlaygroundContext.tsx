import { createContext, useState } from "react";
import { v4 as uuid } from 'uuid'

interface PlaygroundContextType {
  folders: any;
  setFolders: any;
  createNewFolder: (folderTitle: string) => void;
  createNewPlayground: (
    folderId: string,
    cardTitle: string,
    cardLanguage: string
  ) => void;
  createNewFolderAndPlayground: (
    folderTitle: string,
    cardTitle: string,
    cardLanguage: string
  ) => void;
  editCardTitle: (
    folderId: string,
    cardId: string,
    newCardTitle: string
  ) => void;
  editFolderTitle: (folderId: string, newFolderTitle: string) => void;
  deleteCard: (folderId: string, cardId: string) => void;
  deleteFolder: (folderId: string) => void;
}


export const PlaygroundContext = createContext<PlaygroundContextType | null>(null);
export interface FolderT {
  title: string;
  items: {
    [key: string]: {
      title: string;
      languange: string;
    };
  };
};



export interface FolderType {
  [key: string]: FolderT

}

export default function PlaygroundProvider({ children }: { children: any }) {
  const [folders, setFolders] = useState({
    [uuid()]: {
      title: 'Folder Title 1',
      items: {
        [uuid()]: {
          title: "Stack implementation",
          languange: "C++",
        },
        [uuid()]: {
          title: "Queue implementation",
          languange: "C++",
        },
        [uuid()]: {
          title: "Stack implementation",
          languange: "C++",
        },
      },
    },
    [uuid()]: {
      title: 'Folder Title 2',
      items: {
        [uuid()]: {
          title: "1 implementation",
          languange: "C++",
        },
        [uuid()]: {
          title: "2 implementation",
          languange: "C++",
        },
        [uuid()]: {
          title: "3 implementation",
          languange: "C++",
        },
      },
    },

  });

  const createNewFolder = (folderTitle: string) => {
    setFolders(oldState => {
      const newState = { ...oldState };
      newState[uuid()] = {
        title: folderTitle,
        items: {},
      }
      return newState
    })
  }

  const createNewPlayground = (
    folderId: string,
    cardTitle: string,
    cardLanguage: string
  ) => {
    setFolders((oldState: any) => {
      const newState = { ...oldState };
      // create a new playground
      newState[folderId].items[uuid()] = {
        title: cardTitle,
        language: cardLanguage,
      };
      return newState;
    });
  };
  const createNewFolderAndPlayground = (
    folderTitle: string,
    cardTitle: string,
    cardLanguage: string
  ) => {
    setFolders((oldState: any) => {
      const newState = { ...oldState };
      // create a new folder and playground
      newState[uuid()] = {
        title: folderTitle,
        items: {
          [uuid()]: {
            title: cardTitle,
            language: cardLanguage,
          },
        },
      };
      return newState;
    });
  };

  const editCardTitle = (
    folderId: string,
    cardId: string,
    newCardTitle: string
  ) => {
    setFolders((oldState: any) => {
      const newState = { ...oldState };
      // update title
      newState[folderId].items[cardId].title = newCardTitle;
      return newState;
    });
  };

  // EditFolderTitle(folderId)
  const editFolderTitle = (folderId: string, newFolderTitle: string) => {
    setFolders((oldState: any) => {
      const newState = { ...oldState };
      newState[folderId].title = newFolderTitle;
      return newState;
    });
  };

  // DeleteCard(folderId, carId)
  const deleteCard = (folderId: string, cardId: string) => {
    setFolders((oldState: any) => {
      const newState = { ...oldState };
      delete newState[folderId].items[cardId];
      return newState;
    });
  };

  // DeleteFolder(folderId)
  const deleteFolder = (folderId: string) => {
    setFolders((oldState: any) => {
      const newState = { ...oldState };
      delete newState[folderId];
      return newState;
    });
  };
  const makeAvailableGlobally: PlaygroundContextType = {
    folders: folders,
    setFolders: setFolders,
    createNewFolder: createNewFolder,
    createNewPlayground: createNewPlayground,
    createNewFolderAndPlayground: createNewFolderAndPlayground,
    editCardTitle: editCardTitle,
    editFolderTitle: editFolderTitle,
    deleteCard: deleteCard,
    deleteFolder: deleteFolder,
  }


  return (
    <PlaygroundContext.Provider value={makeAvailableGlobally}>
      {children}
    </PlaygroundContext.Provider>
  )
}