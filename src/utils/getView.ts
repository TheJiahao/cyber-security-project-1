import { VIEW_DIRECTORY } from "config";

export const getView = (name: string) => {
    return `${VIEW_DIRECTORY}/${name}`;
};
